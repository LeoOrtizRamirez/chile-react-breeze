import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import "../../../css/font-web.css";
import "./Index.css";

import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Nav, NavItem, NavDropdown } from 'react-bootstrap';

/*PRIMEFACES */
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';

import "primereact/resources/themes/lara-light-indigo/theme.css";//theme
import "primereact/resources/primereact.min.css";//core
import "primeicons/primeicons.css";//icons

/*Tooltips */
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
/*Tooltips */

import { Modal } from 'react-bootstrap';
import ActividadEconomica from "@/Components/ActividadEconomica";

import Loader from "@/Components/Loader";

import { Inertia } from '@inertiajs/inertia'

const Index = ({ auth, contratos, favorito, total_carpetas }) => {
    const [tabla, setTabla] = useState(contratos);
    const [pageSize, setPageSize] = useState(tabla.last_page + 1);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        setTabla(contratos)
    }, [contratos])

    const paginator = (page, url) => {
        axios.get(url + '&type=fetch')
            .then(response => {
                setTabla(response.data)
                setPageNumber(response.data.current_page - 1)
                setPageSize(tabla.last_page + 1);
            })
            .catch(error => {
                console.log(error);
            });
    }



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

    // Define pagination properties
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const onPageChange = event => setCurrentPage(event.first / event.rows);
    const onRowsChange = event => setRowsPerPage(event.target.value);

    const totalRecords = contratos.data.length;

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

    const [data, setData] = useState(contratos.data);
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
        tabla.data.forEach((p) => (_expandedRows[`${p.id}`] = true));
        setExpandedRows(_expandedRows);
    };
    useEffect(() => {
        expandAll()
    }, [])

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
                <div className="iconos_functions_grid iconos_acciones_contratos">

                    {data.favorito ?
                        <div class="custom-tooltip yellow" data-tooltip="Eliminar De Favoritos">
                            <button id={`favorito_${data.id}`} type="button" className="icon-Favorito-click btn_contratos_favoritos favorito_active" onClick={() => handleShowModal("modal_confirm_delete", data)}></button>
                        </div>
                        :
                        <div class="custom-tooltip yellow" data-tooltip="Agregar A Favoritos">
                            <button id={`favorito_${data.id}`} type="button" className="icon-Favorito-click btn_contratos_favoritos" onClick={() => addFavorito(data.id)} />
                        </div>
                    }

                    <div class="custom-tooltip green" data-tooltip="Agregar A Seguimientos">
                        <button type="button" className="btn_contratos_seguimientos icon-Seguimientos">
                            <span className="path1">
                            </span>
                            <span className="path2">
                            </span>
                            <span className="path3">
                            </span>
                        </button>
                    </div>
                    <div class="custom-tooltip blue" data-tooltip="Agregar A Carpeta(S)">
                        <button type="button" className="icon-Mis-carpetas btn_contratos_carpeta d-inline-flex">
                            <span className="path1">
                            </span>
                            <span className="path2">
                            </span>
                        </button>
                    </div>
                    <div class="custom-tooltip red" data-tooltip="Agregar A Papelera">
                        <button id="btnContratosDelete-8114846" type="button" class="icon-Eliminar btn_contratos_delete" />
                    </div>
                    <div class="custom-tooltip dark" data-tooltip="Ir A La Fuente">
                        <button className="icon-Ir-a-la-fuente-click btn_contratos_external" />
                    </div>
                    <div class="custom-tooltip purple" data-tooltip="Compartir">
                        <button className="icon-Compartir-click btn_contratos_compartir" />
                    </div>
                    <div class="custom-tooltip gray" data-tooltip="Crear Primer Nota">
                        <button className="btn_contratos_notas custom-tooltip gray">
                            <img src="/public/images/notas/nota.svg" alt="Nota" className="without-notes" />
                        </button>
                    </div>
                </div>
                <button type="button" className="btnRadius ver-menos-detalle" style={{ display: "none" }}>
                    Ver menos<i className="icon-Desplegar-click"></i>
                </button>
            </span>
        );
    };

    /*     const header = (
            <div className="flex flex-wrap justify-content-end gap-2">
                <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} text />
                <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} text />
            </div>
        ); */

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


    const handleColumnFilterClick = (event, column) => {
        // Do something with the event and column
        console.log('Clicked on column filter', column);
    };
    const columnFilterOpenModal = (column) => {
        return (
            <input
                type="text"
                className="p-inputtext p-component p-column-filter column_ver_mas columna_actividad rounded_right"
                placeholder="Seleccionar"
                /* onClick={(event) => handleColumnFilterClick(event, column)} */
                onClick={() => handleShowModal(column.field)}
                onInput={(e) => {
                    dt.current.filter(e.target.value, 'actividad_economica', 'contains');
                }}
            />
        );
    };

    const [showModal, setShowModal] = useState(false);
    const [modalOpened, setModalOpened] = useState("")
    const [modalId, setModalId] = useState("")
    const [contratoSelected, setContratoSelected] = useState([])
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (modal_open, data = null) => {
        console.log(modal_open)
        if (modal_open == "actividad_economica" || modal_open == "modalidad" || modal_open == "ubicacion") {
            setModalId("modal_actividades")
            setModalOpened(modal_open)
        } else {
            setModalId(modal_open)
            setModalOpened(modal_open)
            setContratoSelected(data)
        }
        setShowModal(true);
    }





    const [sectores, setSectores] = useState([]);
    const [tiposcompras, setTiposCompras] = useState([]);
    const [localizaciones, setLocalizaciones] = useState([]);
    const [checkedsActividadesEconomicas, setCheckedsActividadesEconomicas] = useState([])
    const [checkedsLocalizaciones, setCheckedsLocalizaciones] = useState([])
    const [checkedsTiposCompras, setCheckedsTiposCompras] = useState([])

    useEffect(() => {
        async function fetchActividades() {
            try {
                const response = await fetch(
                    "/actividades-economicas/json"
                );
                const data = await response.json();
                setSectores(data);
            } catch (err) {
                console.log("Solicitud fallida", err);
            }
        }
        fetchActividades();
        async function fetchLocalizaciones() {
            try {
                const response = await fetch(
                    "/localizacion/json"
                );
                const data = await response.json();
                setLocalizaciones(data);
            } catch (err) {
                console.log("Solicitud fallida", err);
            }
        }
        fetchLocalizaciones();
        async function fetchTipoCompras() {
            try {
                const response = await fetch(
                    "/tiposcompras/json"
                );
                const data = await response.json();
                setTiposCompras(data);
            } catch (err) {
                console.log("Solicitud fallida", err);
            }
        }
        fetchTipoCompras();
    }, []);

    const onHandleSectores = (data, tipo) => {
        switch (tipo) {
            case "ActividadEconomica":
                if (data.length > 0) {
                    setCheckedsActividadesEconomicas(data)
                } else {
                    setCheckedsActividadesEconomicas([])
                }
                break;
            case "Localizaciones":
                if (data.length > 0) {
                    setCheckedsLocalizaciones(data)
                } else {
                    setCheckedsLocalizaciones([])
                }
                break;
            case "TiposCompras":
                if (data.length > 0) {
                    setCheckedsTiposCompras(data)
                } else {
                    setCheckedsTiposCompras([])
                }
                break;
        }
    }


    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="m-0 w-100">
                <div className="text-left reloadTable row" style={{ margin: 0 + 'px' }}>
                    <div id="top-botones" className="mb-2 mb-lg-0">
                        <div className="franja-busqueda-rapida">
                            <div className="input-busqueda-rapida">
                                <input value={globalFilterValue} onChange={onGlobalFilterChange} type="text" name="rapida" placeholder="Búsqueda rápida" className="form-control" />
                                <button type="button" className="submit-busqueda-rapida icon-Buscar-click"></button>
                            </div>
                            <div className="select-busqueda-rapida ml-4">
                                <Nav id="dropdown-filtro-nuevos">
                                    <NavDropdown id="dropdown-filtro" className='nav-link pl-0' title={<><span className="ver-filtros">
                                        <span className="mr-2 visualizar">Visualizar:</span>
                                        <span className="text-ver-filtros d-inline-flex pl-3 bg-white">
                                            <span className="align-self-center d-inline-flex iconOrdenamientoGrid">
                                                <span className="icon-Todos"></span>
                                            </span>
                                            <span className="text-ver-filtros__text text-left">Todos</span>
                                        </span>
                                    </span></>} >
                                        <Dropdown.Item href="#" className='dropdown-item'>
                                            <span className="icon-options-order">
                                                <span className="icon-Vistos-recientemente"></span>
                                            </span>
                                            <span className="text-options-order">Vistos recientemente</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#" className='dropdown-item'>
                                            <span className="icon-options-order">
                                                <span className="icon-Contratos"></span>
                                            </span>
                                            <span className="text-options-order">Notas creadas</span>
                                        </Dropdown.Item>
                                    </NavDropdown>
                                </Nav>

                                {/* <div id="dropdown-filtro-nuevos" className="dropdown d-inline-block dropdown_filtros show">
                                    <button type="button" id="dropdown-filtro" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="true" className="btn ml-2 dropdown-toggle btn-gris">
                                        <span className="ver-filtros">
                                            <span className="mr-2">Visualizar:</span>
                                            <span className="text-ver-filtros d-inline-flex pl-3 bg-white">
                                                <span className="align-self-center d-inline-flex iconOrdenamientoGrid">
                                                    <span className="icon-Todos"></span>
                                                </span>
                                                <span className="text-ver-filtros__text text-left">Todos</span>
                                            </span>
                                        </span>
                                    </button>
                                    <div aria-labelledby="dropdown-filtro" className="dropdown-menu show" x-placement="bottom-start">
                                        <button type="button" className="dropdown-item" style={{ display: 'none' }}>
                                            <span className="icon-options-order">
                                                <span className="icon-Todos"></span>
                                            </span>
                                            <span className="text-options-order">Todos</span>
                                        </button>
                                        <button type="button" className="dropdown-item">
                                            <span className="icon-options-order">
                                                <span className="icon-Vistos-recientemente"></span></span>
                                            <span className="text-options-order">Vistos recientemente</span></button>
                                        <button type="button" className="dropdown-item">
                                            <span className="icon-options-order"><span className="icon-Contratos"></span>
                                            </span>
                                            <span className="text-options-order">Notas creadas</span>
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                            {favorito &&
                                <div class="d-inline-block seccion-estas-en">
                                    <p class="my-1">Estás en: <span class="mx-1 icon-Favorito-click"></span>
                                        <span class="texto-estas-en">mis favoritos</span>
                                    </p>
                                </div>
                            }


                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-6 p-0 paginacion_grid text-right text-lg-right ">
                        <span className="paginator">
                            {favorito ?
                                <span className="p-paginator-current">{total_carpetas} registros</span>
                                : <>
                                    <Button disabled={tabla.prev_page_url === null} icon="pi pi-angle-double-left" onClick={() => paginator(0, tabla.first_page_url)} />
                                    <Button disabled={tabla.prev_page_url === null} icon="pi pi-angle-left" onClick={() => paginator(tabla.current_page - 1, tabla.prev_page_url)} />
                                    <Button disabled={tabla.next_page_url === null} icon="pi pi-angle-right" onClick={() => paginator(tabla.current_page + 1, tabla.next_page_url)} />
                                    <Button disabled={tabla.next_page_url === null} icon="pi pi-angle-double-right" onClick={() => paginator(5, tabla.last_page_url)} />
                                    <span className="p-paginator-current">{`${tabla.from} - ${tabla.to} de ${tabla.total}`}</span>
                                </>
                            }
                        </span>
                    </div>
                </div>
                {/* <div className="custom_scroll_superior">
                    <button id="custom_scroll--btn_atras" className="btn"></button>
                    <div className="scroll_superior">
                        <div className="content_scroll_superior" style={{ width: 1526 + 'px' }}></div>
                    </div>
                    <button id="custom_scroll--btn_adelante" className="btn"></button>
                </div> */}
            </div>

        );
    };
    const header = renderHeader();


    const addFavorito = (contrato) => {
        var token = document.querySelector('meta[name="csrf-token"]')
        Inertia.post('/cliente/contratos/add_favorito', { contrato: contrato }, {
            headers: {
                'Authorization': `Bearer ${token.content}`
            }
        });
    };

    const deleteFavorito = (contrato) => {
        /* var payload = {
            'contrato': contrato
        }; */
        var token = document.querySelector('meta[name="csrf-token"]')
        Inertia.post('/cliente/contratos/delete_favorito', { contrato: contrato }, {
            headers: {
                'Authorization': `Bearer ${token.content}`
            },
            onSuccess: (response) => {
                setShowModal(false)
            }
        });
    };

    return (
        <AuthenticatedLayout auth={auth} page={'contratos'}>
            <div className="content_not_blank_interno">
                <div id="bodycontenido" className="col contratos_row px-0">
                    <DataTable id="datatableContratos" ref={dt} value={tabla.data} rows={pageSize} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                        globalFilterFields={['fuente.alias_portal', 'entidad_contratante', 'objeto', 'valor', 'modalidad', 'codigo_proceso', 'estado_proceso', 'fecha_publicacion', 'ubicacion', 'actividad_economica']} emptyMessage="No se encontraron registros"

                        expandedRows={expandedRows} /* onRowToggle={(e) => setExpandedRows(e.data)}
                        onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} */ rowExpansionTemplate={rowExpansionTemplate}
                        header={header}

                        selectionMode={rowClick ? null : 'checkbox'}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}

                        first={pageNumber * pageSize}
                    >
                        <Column selectionMode="multiple" className='columna_seleccion columna_pequena' filter filterElement={clearTemplate}></Column>
                        {/* <Column filter className='columna_seleccion columna_pequena'  /> */}
                        <Column field="fuente.alias_portal" header="Portal" filter filterPlaceholder="Todos" className="rounded_left columna_tipo_secop" body={portalBodyTemplate} />
                        <Column field="entidad_contratante" header="Entidad" filter filterPlaceholder="Buscar" className="columna_entidad columna_120" body={entidadBodyTemplate} />
                        <Column field="objeto" header="Obejto" filter filterPlaceholder="Buscar" className="objeto_columna" body={objetoBodyTemplate} />
                        <Column field="valor" header="Cuantía" filter filterPlaceholder="Buscar" className="rangedropdown columna_120 columna_cuantia" body={cuantiaBodyTemplate} />
                        <Column field="modalidad" header="Modalidad" filter filterPlaceholder="Seleccionar" className="columna_100 columna_modalidad" filterElement={columnFilterOpenModal} />
                        <Column field="codigo_proceso" header="Número" filter filterPlaceholder="Buscar" className="columna_numero" />
                        <Column field="estado_proceso" header="Estado" filter filterPlaceholder="Buscar" className="columna_estado" body={estadoBodyTemplate} />
                        <Column field="fecha_publicacion" header="Publicada" filter filterPlaceholder="Buscar" className="columna_fecha" />
                        <Column field="ubicacion" header="Ubicación" filter filterPlaceholder="Seleccionar" className="columna_ubicacion" body={ubicacionBodyTemplate} filterElement={columnFilterOpenModal} />
                        <Column field="actividad_economica" header="Actividad Económica" filter filterElement={columnFilterOpenModal} />
                    </DataTable>

                </div>
            </div>







            <Modal show={showModal} onHide={handleCloseModal} id={modalId} centered>
                <Modal.Header>
                    {modalOpened == "actividad_economica" &&
                        <h4 class="modal-title">Selecciona la(s) actividad(es) económica(s) de tu interés.</h4>
                    }
                    {modalOpened == "modalidad" &&
                        <h4 class="modal-title">Selecciona la modalidad.</h4>
                    }
                    {modalOpened == "ubicacion" &&
                        <h4 class="modal-title">Selecciona la ubicación.</h4>
                    }
                    {modalOpened == "modal_confirm_delete" &&
                        <h4 class="modal-title">¿Deseas <span class="text_color_red">eliminar</span> el/los proceso(s) de tus favoritos?</h4>
                    }

                    <button type="button" aria-label="Close" class="close icon-Cerrar-modal" onClick={handleCloseModal}></button>
                </Modal.Header>
                <Modal.Body>
                    {modalOpened == "actividad_economica" &&
                        <ActividadEconomica
                            subcategorias={sectores}
                            nameBuscador={"Busca por actividad económica o UNSPSC"}
                            onHandleSectores={onHandleSectores}
                            tipo={"ActividadEconomica"}
                            checkeds={checkedsActividadesEconomicas}
                        />
                    }
                    {modalOpened == "modalidad" &&
                        <ActividadEconomica
                            subcategorias={tiposcompras}
                            nameBuscador={"Buscar Tipo de Compra"}
                            onHandleSectores={onHandleSectores}
                            tipo={"TiposCompras"}
                            checkeds={checkedsTiposCompras}
                        />
                    }
                    {modalOpened == "ubicacion" &&
                        <ActividadEconomica
                            subcategorias={localizaciones}
                            nameBuscador={"Buscar Localización"}
                            onHandleSectores={onHandleSectores}
                            tipo={"Localizaciones"}
                            checkeds={checkedsLocalizaciones}
                        />
                    }
                    {modalOpened == "modal_confirm_delete" &&
                        <>
                            <div class="descripcion_delete">
                                <p>Al aceptar esto el proceso se eliminará junto con el siguiente contenido:</p>
                            </div>
                            <div class="informacion_contratos">
                                <table class="w-100">
                                    <thead class="informacion_contratos--cabeceras">
                                        <th class="columna_informacion">
                                            <span>Información del proceso</span>
                                        </th>
                                        <th class="columna_icono">
                                            <span>Favoritos</span>
                                        </th>
                                    </thead>
                                    <tbody>
                                        <tr class="informacion_contratos--listado">
                                            <td class="informacion_contratos--contrato_info columna_informacion">
                                                <div>
                                                    {/* <div class="checkbox informacion_contratos--contrato_check" style="display: none;">
                                                        <label>
                                                            <input type="checkbox" id="contratoCheckbox0" class="input_perfil_val" value="8119752" />
                                                            <span class="cr">
                                                                <i class="cr-icon icon-Check"></i>
                                                            </span>
                                                        </label>
                                                    </div> */}
                                                    <i id="iconFuente-8119752" class="icono_fuente__list" style={{ background: 'rgb(0, 61, 201)' }}>MP</i>
                                                    <div class="informacion_contratos--contrato_nombre">
                                                        <b>{contratoSelected.entidad_contratante}</b>
                                                        <br />
                                                        <span>{contratoSelected.objeto}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="informacion_contratos--icono columna_icono">
                                                <img src="https://col.licitaciones.info/img/listado/quitar_favoritos.svg" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    }
                </Modal.Body>
                <Modal.Footer>
                    {modalOpened == "modal_confirm_delete" ?
                        <button class="btnRadius btn-action btn-new-danger" onClick={() => deleteFavorito(contratoSelected.id)}>Eliminar</button>
                        :
                        <button type="button" class="btnRadius btn-new-green">Seleccionar</button>
                    }

                </Modal.Footer>
            </Modal>
        </AuthenticatedLayout >
    );
};

export default Index;
