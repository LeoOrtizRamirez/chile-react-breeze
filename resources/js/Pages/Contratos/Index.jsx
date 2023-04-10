import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import "../../../css/font-web.css";
import "./Index.css";


/*PRIMEFACES */
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
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
                <div className="columna_nombre--content-img">
                    <div className="columna_nombre--img">
                        <img src={`${grupo.imagen_filtro}`} />
                    </div>
                </div>
                <span>{grupo.nombre_filtro}</span>
            </>
        );
    };

    const [toolTips, setToolTips] = useState([
        { 'name': 'editar', text: 'Editar perfil', 'icon': 'icon-Editar icon-pd-editar', modal: 'modalEditarPerfil' },
        { 'name': 'eliminar', text: 'Eliminar perfil', 'icon': 'icon-Eliminar icon-pd-eliminar', modal: 'modalEliminarPerfil' },
        { 'name': 'duplicar', text: 'Duplicar perfil', 'icon': 'icon-Duplicar icon-pd-duplicar', modal: 'modalDuplicarPerfil' },
        { 'name': 'leidos', text: 'Marcar como leídos', 'icon': 'icon-Leidos icon-pd-leidos', modal: 'modalLeidosPerfil' },
        { 'name': 'info', text: 'Ver más información', 'icon': 'icon-Informacin-click icon-pd-info', modal: 'modalInformacionPerfil' }
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
            <>
            {/* <div className="VueTables__selecciones-filter-wrapper">
                <span>
                    <div className="selecciones-nuevo-diseno">
                        
                        <button type="button" className="borrador-grid borrador-new-style" onClick={handleClearFilters}>
                            <img src="/images/borrador-azul.svg" alt="Borrar búsquedas" title="Borrar búsquedas" />
                        </button>
                    </div>
                </span>
            </div> */}
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
            </>
        );
    };




    /*Tr child */
    const [expandedRows, setExpandedRows] = useState(null);
    const toast = useRef(null);
    const onRowExpand = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Expanded', detail: event.data.actividad_economica, life: 3000 });
    };

    const onRowCollapse = (event) => {
        toast.current.show({ severity: 'success', summary: 'Product Collapsed', detail: event.data.actividad_economica, life: 3000 });
    };

    
    const expandAll = () => {
        let _expandedRows = {};
        data.forEach((p) => (_expandedRows[`${p.id}`] = true));
        setExpandedRows(_expandedRows);
    };
    useEffect(()=>{
        expandAll()
    },[])

    const collapseAll = () => {
        setExpandedRows(null);
    };

    const rowExpansionTemplate = (data) => {
        return (
            <span className="div_iconos_functions_grid">
                <a className="btnVerDocumentos d-inline-flex align-items-center">
                    <i className="icon-Ver-documentos"></i>
                    <span>Ver documentos</span>
                    <i className="icon-Siguiente1"></i>
                </a>
                <div id="iconos_functions_8103864" className="iconos_functions_grid iconos_acciones_contratos">
                    <button id="btnContratosFavorito-8103864" type="button" className="icon-Favorito-click btn_contratos_favoritos">
                    </button>
                    <button id="btnContratosSeguimiento-8103864" type="button" className="btn_contratos_seguimientos icon-Seguimientos">
                        <span className="path1">
                        </span>
                        <span className="path2">
                        </span>
                        <span className="path3">
                        </span>
                    </button>
                    <button id="btnContratosCarpeta-8103864" type="button" className="icon-Mis-carpetas btn_contratos_carpeta d-inline-flex">
                        <span className="path1">
                        </span>
                        <span className="path2">
                        </span>
                    </button>
                    <button id="btnContratosExternal-8103864" className="icon-Ir-a-la-fuente-click btn_contratos_external">
                    </button>
                    <button id="btnContratosCompartir-8103864" className="icon-Compartir-click btn_contratos_compartir">
                    </button>
                    <button id="btnContratoNotas-8103864" className="btn_contratos_notas">
                        <img src="/images/notas/nota.svg" alt="Nota" className="without-notes" />
                    </button>
                </div>
                <button type="button" className="btnRadius ver-menos-detalle" style={{ display: "none" }}>
                    Ver menos<i className="icon-Desplegar-click"></i>
                </button>
            </span>
        );
    };

    const header = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} text />
            <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} text />
        </div>
    );

    /*Checks */
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [rowClick, setRowClick] = useState(true);
    /*Checks */

    const portalBodyTemplate = (grupo) => {
        return (
            <>
                <span className="icon_tipo_secop">
                    <i className="icono_fuente__list">{grupo.fuente.alias_portal}</i>
                </span>
            </>
        );
    };
    const entidadBodyTemplate = (grupo) => {
        return (
            <div className="content_ver_mas_grid entidad_grid">
                <p className="span_grid">{grupo.entidad_contratante}</p>
            </div>
        );
    };
    const objetoBodyTemplate = (grupo) => {
        return (
            <div className="content_ver_mas_grid objeto_grid">
                <p className="objeto_grid_p">
                    <span className="objeto_grid_span">
                        <span className="tt-uppercase">{grupo.objeto}</span>
                        <a className="vermas text-right mr-0 mt-0">Ver más<i className="icon-Desplegar"></i></a>
                    </span>
                </p>
            </div>
        );
    };
    const cuantiaBodyTemplate = (grupo) => {
        return (
            <span className="valor_range--estandar d-flex justify-content-center">
                <i className="valor_range__moneda sin-min-width">$</i>{grupo.valor}
            </span>
        );
    };
    const estadoBodyTemplate = (grupo) => {
        return (
            <span style={{ fontFamily: "Nexa-bold", color: "rgb(115, 201, 20)" }}>{grupo.estado_proceso}</span>
        );
    };
    const ubicacionBodyTemplate = (grupo) => {
        return (
            <div className="content_ver_mas_grid ubicaciones_grid">
                <p className="scroll_fit">
                    <span>
                        <span>{grupo.ubicacion}</span>
                    </span>
                </p>
            </div>
        );
    };
    return (
        <AuthenticatedLayout auth={auth} page={'contratos'}>
            <div className="content_not_blank_interno">
                <div id="bodycontenido" className="col contratos_row px-0">
                    <DataTable ref={dt} value={data} paginator rows={30} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                        globalFilterFields={['name', 'representative.name', 'status']} emptyMessage="No se encontraron registros"
                        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink NextPageLink LastPageLink CurrentPageReport"
                        currentPageReportTemplate="{first} a {last} de {totalRecords}"

                        expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                        onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} rowExpansionTemplate={rowExpansionTemplate}
                        /* header={header} */
                        
                        selectionMode={rowClick ? null : 'checkbox'} 
                        selection={selectedProducts} 
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        >
                        <Column selectionMode="multiple" className='columna_seleccion columna_pequena' filter filterElement={clearTemplate}></Column>
                        {/* <Column filter className='columna_seleccion columna_pequena'  /> */}
                        <Column field="fuente.alias_portal" header="Portal" filter filterPlaceholder="Todos" className="rounded_left columna_tipo_secop" body={portalBodyTemplate} />
                        <Column field="entidad_contratante" header="Entidad" filter filterPlaceholder="Buscar" className="columna_entidad columna_120" body={entidadBodyTemplate} />
                        <Column field="objeto" header="Obejto" filter filterPlaceholder="Buscar" className="objeto_columna" body={objetoBodyTemplate} />
                        <Column field="valor" header="Cuantía" filter filterPlaceholder="Buscar" className="rangedropdown columna_120 columna_cuantia" body={cuantiaBodyTemplate} />
                        <Column field="modalidad" header="Modalidad" filter filterPlaceholder="Seleccionar" className="columna_100 columna_modalidad" />
                        <Column field="codigo_proceso" header="Número" filter filterPlaceholder="Buscar" className="columna_numero" />
                        <Column field="estado_proceso" header="Estado" filter filterPlaceholder="Buscar" className="columna_estado" body={estadoBodyTemplate} />
                        <Column field="fecha_publicacion" header="Publicada" filter filterPlaceholder="Buscar" className="columna_fecha" />
                        <Column field="ubicacion" header="Ubicación" filter filterPlaceholder="Seleccionar" className="columna_ubicacion" body={ubicacionBodyTemplate}/>
                        <Column field="actividad_economica" header="Actividad Económica" filter filterPlaceholder="Seleccionar" className="column_ver_mas columna_actividad rounded_right" />
                    </DataTable>
                </div>
            </div>








        </AuthenticatedLayout>
    );
};

export default Index;
