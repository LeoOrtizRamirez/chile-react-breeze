import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Compartir from "../../Components/Acciones/Compartir";
import Eliminar from "../../Components/Acciones/Eliminar";
import Enviar from "../../Components/Acciones/Enviar";
import Favoritos from "../../Components/Acciones/Favoritos";
import Pdf from "../../Components/Acciones/Pdf";
import Visualizar from "../../Components/Acciones/Visualizar";
import Paginador from "@/Components/PaginadorContratos";
import ModalBusquedaAvanzada from "@/Components/Modals/ModalBusquedaAvanzada/ModalBusquedaAvanzada";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/font-web.css";
import "./Index.css";
import "@fontsource/poppins";


/*PRIMEFACES */
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Paginator } from 'primereact/paginator';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import "primereact/resources/themes/lara-light-indigo/theme.css";//theme
import "primereact/resources/primereact.min.css";//core
import "primeicons/primeicons.css";//icons

/*Tooltips */
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
/*Tooltips */

import Loader from "@/Components/Loader";
const Index = ({ auth, contratos }) => {
    // let queryStringBusquedaAvanzada = "";
    const [queryStringBusquedaAvanzada, setqueryStringBusquedaAvanzada] =
        useState("");

    const [tableContratos, setTableContratos] = useState(contratos.data);

    // Inicio Ordenar tabla por columna
    $("th").click(function () {
        var table = $(this).parents("table").eq(0);
        var rows = table
            .find("tr:gt(0)")
            .toArray()
            .sort(comparer($(this).index()));
        this.asc = !this.asc;
        if (!this.asc) {
            rows = rows.reverse();
        }
        for (var i = 0; i < rows.length; i++) {
            table.append(rows[i]);
        }
        setIcon($(this), this.asc);
    });

    function comparer(index) {
        return function (a, b) {
            var valA = getCellValue(a, index),
                valB = getCellValue(b, index);
            return $.isNumeric(valA) && $.isNumeric(valB)
                ? valA - valB
                : valA.localeCompare(valB);
        };
    }

    function getCellValue(row, index) {
        return $(row).children("td").eq(index).html();
    }

    function setIcon(element, asc) {
        $("th").each(function (index) {
            $(this).removeClass("sorting");
            $(this).removeClass("asc");
            $(this).removeClass("desc");
        });
        element.addClass("sorting");
        if (asc) element.addClass("asc");
        else element.addClass("desc");
    }
    // Fin Ordenar tabla por columna

    /*Inicio - ver más, ver menos */
    const [showLess, setShowLess] = useState(true);
    const [showMoreSelected, setShowMoreSelected] = useState(0);
    const getData = (data) => {
        setShowMoreSelected(data.id);
    };

    const hideData = () => {
        setShowMoreSelected(0);
    };
    /*Fin - ver más, ver menos */

    /*Inicio Scroll*/
    const [fakeScrollContentWidth, setFakeScrollContentWidth] = useState(0);
    const [fakeScrollContainerWidth, setFakeScrollContainertWidth] =
        useState(0);

    useEffect(() => {
        var fake_contenido_tabla = document.getElementById("div1");
        var contenido_tabla = document.getElementById("tabla");

        var fake_contenedor_tabla = document.getElementById("wrapper1");
        var contenedor_tabla = document.getElementById("scroll-table");

        if (contenido_tabla) {
            setFakeScrollContentWidth(contenido_tabla.offsetWidth);
        }
        if (contenedor_tabla) {
            setFakeScrollContainertWidth(contenedor_tabla.offsetWidth);
        }

        var wrapper1 = document.getElementById("wrapper1");
        var wrapper2 = document.querySelector("#scroll-table");

        if (wrapper1) {
            wrapper1.onscroll = function () {
                wrapper2.scrollLeft = wrapper1.scrollLeft;
            };
        }

        if (wrapper2) {
            wrapper2.onscroll = function () {
                wrapper1.scrollLeft = wrapper2.scrollLeft;
            };
        }
    });
    /*Fin Scroll*/

    /*Inicio Buscador rapido y paginador */
    const [totalPaginas, setTotalPaginas] = useState(contratos.to);
    const [currentPage, setCurrentPage] = useState(contratos.from);
    const [totalElementos, setTotalElementos] = useState(contratos.total);
    const [nextPage, setNextPage] = useState(contratos.next_page_url);
    const [prevPage, setPrevPage] = useState(contratos.prev_page_url);
    const [inputSearch, setInputSearch] = useState("");
    const [inputFechaPublicacion, setInputFechaPublicacion] = useState("");

    const getUrlParams = () => {
        //Obtener inputs de formulario y guardarlos en objeto
        var form = document.getElementById("form_busqueda_rapida");
        let formData = new FormData(form);
        let object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        const querystring = encodeQueryData(object);
        return querystring;
    };

    const encodeQueryData = (data) => {
        //Convertir objeto en url
        const ret = [];
        for (let d in data)
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return ret.join("&");
    };

    const pageChange = (url) => {
        // debugger;
        //Peticiones por paginador
        if (url == null) return;
        let querystring = getUrlParams();
        if (queryStringBusquedaAvanzada !== "") {
            querystring = queryStringBusquedaAvanzada;
        }
        setLoading(true);
        fetch(url + "&" + querystring)
            .then((response) => response.json())
            .then((data) => {
                tableFormat(data);
                setLoading(false);
            });
    };

    const buscadorRapido = useRef(0);

    /* useEffect(() => {
        if (buscadorRapido.current != 0) {
            buscadorRapido.current.addEventListener(
                "keypress",
                function (event) {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const querystring = getUrlParams();
                        setLoading(true);
                        setqueryStringBusquedaAvanzada("");
                        fetch("/contratos/?" + querystring)
                            // fetch("/contratos/?entidad_contratante=coquimbo&fecha_publicacion=&type=fetch")
                            .then((response) => response.json())
                            .then((data) => {
                                // console.log(data);
                                tableFormat(data);
                                setLoading(false);
                            });
                    }
                }
            );
        }
    }, []); */

    const busquedaAvanzada = (queryString) => {
        // debugger;
        setqueryStringBusquedaAvanzada(queryString + "&type=fetch");
        setLoading(true);
        fetch("/contratos/?" + queryString + "&type=fetch")
            // fetch("/contratos/?entidad_contratante=turismo&fecha_publicacion=&type=fetch")
            .then((response) => response.json())
            .then((data) => {
                tableFormat(data);
                setLoading(false);
            });
        setShowBusquedaAvanzada(false);
    };

    const tableFormat = (data) => {
        //Formatear valores del paginador
        // debugger;
        setTableContratos(data.data);
        setTotalPaginas(data.to);
        setCurrentPage(data.from);
        setTotalElementos(data.total);
        setNextPage(data.next_page_url);
        setPrevPage(data.prev_page_url);
    };

    useEffect(() => {
        //Al cargar la pagina, si hay parametros asignar valores al formulario
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const fecha_publicacion = urlParams.get("fecha_publicacion");
        if (fecha_publicacion != null) {
            setInputFechaPublicacion(fecha_publicacion);
        }
        const buscador_rapido = urlParams.get("buscador_rapido");
        if (buscador_rapido != null) {
            setInputSearch(buscador_rapido);
        }
    }, []);

    /*Inicio Loader */
    const [loading, setLoading] = useState(false);
    /*Fin Loader */

    // Inicio buscador avanzado

    const [showBusquedaAvanzada, setShowBusquedaAvanzada] = useState(false);
    const handleCloseBusquedaAvanzada = () => setShowBusquedaAvanzada(false);
    const handleShowBusquedaAvanzada = () => setShowBusquedaAvanzada(true);
    const handleBusqueda = (queryString) => busquedaAvanzada(queryString);
    // fin buscador avanzado





































    /*Borrar filtros*/
    const dt = useRef(null);
    const handleClearFilters = () => {
        if (dt.current) {
            dt.current.reset();
        }
    }
    /*Borrar filtros*/

    const getGrupos = (data) => {
        return [...(data || [])].map((d) => {
            if (d.envio_alertas == 1) {
                d.envio_alertas = "Si"
            } else {
                d.envio_alertas = "No"
            }
            return d;
        });
    };

    const [data, setData] = useState(getGrupos(contratos.data));
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        'fuente.alias_portal': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        entidad_contratante: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        objeto: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        valor: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        modalidad: { value: null, matchMode: FilterMatchMode.CONTAINS },
        codigo_proceso: { value: null, matchMode: FilterMatchMode.EQUALS },
        estado_proceso: { value: null, matchMode: FilterMatchMode.EQUALS },
        fecha_publicacion: { value: null, matchMode: FilterMatchMode.EQUALS },
        ubicacion: { value: null, matchMode: FilterMatchMode.EQUALS },
        actividad_economica: { value: null, matchMode: FilterMatchMode.EQUALS },
    });

    //const [loading, setLoading] = useState(false);
    const [statuses] = useState(['No', 'Si']);

    const nombreFiltroBodyTemplate = (grupo) => {
        return (
            <>
                <div class="columna_nombre--content-img">
                    <div class="columna_nombre--img">
                        <img src={`${grupo.imagen_filtro}`} />
                    </div>
                </div>
                <span>{grupo.nombre_filtro}</span>
            </>
        );
    };

    const [toolTips, setToolTips] = useState([
        { 'name': 'editar', text: 'Editar perfil', 'icon': 'icon-Editar icon-pd-editar', modal: 'modal_edit_perfil' },
        { 'name': 'eliminar', text: 'Eliminar perfil', 'icon': 'icon-Eliminar icon-pd-eliminar', modal: 'modalEliminarPerfil' },
        { 'name': 'duplicar', text: 'Duplicar perfil', 'icon': 'icon-Duplicar icon-pd-duplicar', modal: '__BVID__16' },
        { 'name': 'leidos', text: 'Marcar como leídos', 'icon': 'icon-Leidos icon-pd-leidos', modal: 'modalConfirm' },
        { 'name': 'info', text: 'Ver más información', 'icon': 'icon-Informacin-click icon-pd-info', modal: 'modal-informacion-perfil' }
    ])

    const accionesBodyTemplate = (grupo) => {
        return <div className="iconos_functions_grid">
            {toolTips.map((placement, index) => (
                <OverlayTrigger rootClose={true} key={index} overlay={
                    <Tooltip id={`tooltip-${placement.name}-${grupo.id}`} className={`tooltip tooltip-${placement.name}`}>{placement.text}</Tooltip>
                }>
                    <button type="button" id={`${placement.name}-btn${grupo.id}`} className={`${placement.icon}`} onClick={() => handleShowModal(placement.modal)}></button>
                </OverlayTrigger>
            ))}
        </div>;
    };

    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} placeholder="Seleccionar Notificaciones" className="p-column-filter" showEditModalClear />
        );
    };

    const clearTemplate = (options) => {
        return (
            <div className="VueTables__selecciones-filter-wrapper">
                <span>
                    <div className="selecciones-nuevo-diseno">
                        <button id="limpiar" type="button" className="icon-Limpiar-click borrador-grid" onClick={handleClearFilters}>
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                            <span className="path6"></span>
                            <span className="path7"></span>
                            <span className="path8"></span>
                        </button>
                    </div>
                </span>
            </div>
        );
    };
    return (
        <AuthenticatedLayout auth={auth} page={'contratos'}>
            <div className="content_not_blank_interno">
                <div id="bodycontenido" className="col contratos_row px-0">
                    <DataTable ref={dt} value={data} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                        globalFilterFields={['name', 'representative.name', 'status']} emptyMessage="No se encontraron registros"
                        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink NextPageLink LastPageLink CurrentPageReport"
                        currentPageReportTemplate="{first} a {last} de {totalRecords}">
                        <Column filter className='columna_seleccion columna_pequena' filterElement={clearTemplate}/>
                        <Column field="fuente.alias_portal" header="Portal" filter filterPlaceholder="Buscar" className="columna_grande" />
                        <Column field="entidad_contratante" header="Entidad" filter filterPlaceholder="Buscar" className="columna_grande" />
                        <Column field="objeto" header="Obejto" filter filterPlaceholder="Buscar" className="columna_promedio" />
                        <Column field="valor" header="Cuantía" filter filterPlaceholder="Buscar" className="columna_promedio" />
                        <Column field="modalidad" header="Modalidad" filter filterPlaceholder="Buscar" className="columna_promedio" />
                        <Column field="codigo_proceso" header="Número" filter filterPlaceholder="Buscar" className="columna_notificaciones" />
                        <Column field="estado_proceso" header="Estado" filter filterPlaceholder="Buscar" className="columna_promedio" />
                        <Column field="fecha_publicacion" header="Publicada" filter filterPlaceholder="Buscar" className="columna_promedio" />
                        <Column field="ubicacion" header="Ubicación" filter filterPlaceholder="Buscar" className="columna_promedio" />
                        <Column field="actividad_economica" header="Actividad Económica" filter filterPlaceholder="Buscar" className="columna_promedio" />
                    </DataTable>
                </div>
            </div>








        </AuthenticatedLayout>
    );
};

export default Index;
