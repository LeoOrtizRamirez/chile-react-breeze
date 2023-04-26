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
import { Sidebar } from 'primereact/sidebar';

import "primereact/resources/themes/lara-light-indigo/theme.css";//theme
import "primereact/resources/primereact.min.css";//core
import "primeicons/primeicons.css";//icons

import { Modal } from 'react-bootstrap';
import ActividadEconomica from "@/Components/ActividadEconomica";

import Loader from "@/Components/Loader";

import { Inertia } from '@inertiajs/inertia'

import CrearCarpeta from "@/Components/CrearCarpeta";

const Index = ({ auth, contratos, nombre_carpeta, total_carpetas, carpetas, grupos, filter_notas, filter_total_notas }) => {
    const [tabla, setTabla] = useState(contratos);
    const [pageSize, setPageSize] = useState(tabla.last_page + 1);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        setTabla(contratos)
    }, [contratos])

    const paginator = (url) => {
        setLoading(true)
        let _url = url + getUrlParams()
        axios.get(_url)
            .then(response => {
                setTabla(response.data)
                setPageNumber(response.data.current_page - 1)
                setPageSize(tabla.last_page + 1);
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
            });
    }

    const getUrlParams = () => {
        let rapida = document.querySelector('input[name="rapida"]')?.value

        let portal = document.querySelector('input[name="fuente.alias_portal"]')?.value
        let entidad_contratante = document.querySelector('input[name="entidad_contratante"]')?.value
        let objeto = document.querySelector('input[name="objeto"]')?.value
        let valor = document.querySelector('input[name="valor"]')?.value
        let modalidad = document.querySelector('input[name="modalidad"]')?.value
        let codigo_proceso = document.querySelector('input[name="codigo_proceso"]')?.value
        let estado_proceso = document.querySelector('input[name="estado_proceso"]')?.value
        let fecha_publicacion = document.querySelector('input[name="fecha_publicacion"]')?.value
        let ubicacion = document.querySelector('input[name="ubicacion"]')?.value
        let actividad_economica = document.querySelector('input[name="actividad_economica"]')?.value
        return `&type=fetch&rapida=${rapida}&portal=${portal}&entidad_contratante=${entidad_contratante}&objeto=${objeto}&valor=${valor}&modalidad=${modalidad}&codigo_proceso=${codigo_proceso}&estado_proceso=${estado_proceso}&fecha_publicacion=${fecha_publicacion}&ubicacion=${ubicacion}&actividad_economica=${actividad_economica}`
    }


    // let queryStringBusquedaAvanzada = "";
    const [queryStringBusquedaAvanzada, setqueryStringBusquedaAvanzada] =
        useState("");

    const [tableContratos, setTableContratos] = useState(contratos.data);


    /*Inicio - ver más, ver menos */
    const [showLess, setShowLess] = useState(true);
    const [showMoreSelecteds, setShowMoreSelecteds] = useState([]);
    const onHandleShowMoreSelecteds = (data, type) => {
        switch (type) {
            case "add":
                if (!showMoreSelecteds.includes(data)) {
                    setShowMoreSelecteds([...showMoreSelecteds, data]);
                }
                break;
            case "delete":
                if (showMoreSelecteds.includes(data)) {
                    setShowMoreSelecteds(showMoreSelecteds.filter(item => item != data));
                }
                break;
            default:
                break;
        }

    };

    useEffect(() => {
        tabla.data.forEach(element => {
            let contrato_parent = document.querySelector(`.row-${element.id}`)
            if (contrato_parent) {
                contrato_parent.style.display = "contents";
            }
        })
        showMoreSelecteds.forEach(element => {
            let contrato_parent = document.querySelector(`.row-${element}`)
            if (contrato_parent) {
                contrato_parent.style.display = "none";
            }
        });
    }, [showMoreSelecteds])

    const hideData = () => {
        setShowMoreSelected([]);
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

    /* const getUrlParams = () => {
        //Obtener inputs de formulario y guardarlos en objeto
        var form = document.getElementById("form_busqueda_rapida");
        let formData = new FormData(form);
        let object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        const querystring = encodeQueryData(object);
        return querystring;
    }; */

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
        modalidad: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        codigo_proceso: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        estado_proceso: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        fecha_publicacion: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        ubicacion: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        actividad_economica: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });

    //const [loading, setLoading] = useState(false);
    const [statuses] = useState(['No', 'Si']);


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
        tabla.data.forEach((p) => { (_expandedRows[`${p.id}`] = true) });

        setExpandedRows(_expandedRows);
    };
    useEffect(() => {
        expandAll()
    }, [tabla])

    const collapseAll = () => {
        setExpandedRows(null);
    };

    const rowExpansionTemplate = (data) => {
        return (
            <>
                {showMoreSelecteds.includes(data.id) &&
                    <div className="proceso__detail">
                        <div className="proceso__detail_infoentidad">
                            <div className="proceso__detail_infoentidad_principal">
                                <span className="body_checkbox">
                                    <input type="checkbox" id="checkboxPerfil0" className="input_perfil_val" value="256058" />
                                </span>
                                <span className="icon_tipo_secop">
                                    <i id="iconFuente-8125395" className="icono_fuente__list" style={{ background: 'rgb(0, 61, 201)' }}>MP</i>
                                </span>
                                <span className="proceso_detail_infoentidad__entidad">{data.entidad_contratante}</span>
                                <i>No leído</i>
                            </div>
                        </div>
                        <div className="proceso__detail_infofull position-relative">
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-flex text-left"><strong>Objeto:</strong>
                                        <p>{data.objeto}</p>
                                    </div>
                                    <div className="d-flex valor_range--estandar text-left"><strong>Cuantía:</strong>
                                        <p><i className="valor_range__moneda">$</i>
                                            {data.valor}
                                        </p>
                                    </div>
                                    <div className="d-flex text-left"><strong>Modalidad:</strong>
                                        <p>{data.modalidad}</p>
                                    </div>
                                    <div className="d-flex text-left"><strong>Número:</strong>
                                        <p>{data.codigo_proceso}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex text-left"><strong>Estado:</strong>
                                        <p className="estado-contrato" style={{ color: 'rgb(115, 201, 20) !important' }}>
                                            {data.estado_proceso}
                                        </p>
                                    </div>
                                    <div className="d-flex text-left"><strong>F. publicación:</strong>
                                        <p>{data.fecha_publicacion}</p>
                                    </div>
                                    <div className="d-flex text-left"><strong>Ubicación:</strong>
                                        <p><i className="icon-Ubicacin-grid"></i>{data.ubicacion}</p>
                                    </div>
                                    <div className="d-flex text-left"><strong>Actividad<br />económica:</strong>
                                        <p>Litografía e Impresión a gran formato, -Impresiones, fotocopiado y alquiler de fotocopiadoras,-Encuadernación, empastado y argollado</p>
                                    </div>
                                    <div className="d-flex text-left"><strong>Contratista(s):</strong>
                                        <div className="columna_contratista_expand__sin-ganador">
                                            <p>Proceso aun sin adjudicar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <span className="div_iconos_functions_grid">
                    <a className="btnVerDocumentos d-inline-flex align-items-center">
                        <i className="icon-Ver-documentos"></i>
                        <span>Ver documentos</span>
                        <i className="icon-Siguiente1"></i>
                    </a>
                    <div className="iconos_functions_grid iconos_acciones_contratos">

                        {data.favorito ?
                            <div className="custom-tooltip yellow" data-tooltip="Eliminar De Favoritos">
                                <button id={`favorito_${data.id}`} type="button" className="icon-Favorito-click btn_contratos_favoritos favorito_active" onClick={() => handleShowModal("modal_confirm_delete", data)}></button>
                            </div>
                            :
                            <div className="custom-tooltip yellow" data-tooltip="Agregar A Favoritos">
                                <button id={`favorito_${data.id}`} type="button" className="icon-Favorito-click btn_contratos_favoritos" onClick={() => addFavorito(data.id)} />
                            </div>
                        }

                        <div className="custom-tooltip green" data-tooltip="Agregar A Seguimientos">
                            <button type="button" className="btn_contratos_seguimientos icon-Seguimientos">
                                <span className="path1">
                                </span>
                                <span className="path2">
                                </span>
                                <span className="path3">
                                </span>
                            </button>
                        </div>
                        <div className="custom-tooltip blue" data-tooltip="Agregar A Carpeta(S)" onClick={() => handleShowModal("modal_seleccion_carpeta", data)}>
                            <button type="button" className="icon-Mis-carpetas btn_contratos_carpeta d-inline-flex">
                                <span className="path1">
                                </span>
                                <span className="path2">
                                </span>
                            </button>
                        </div>


                        {/* {data.papelera ?
                            <div className="custom-tooltip red" data-tooltip="Eliminar de Papelera">
                                <button id="btnContratosDelete-8114846" type="button" className="icon-Eliminar btn_contratos_delete papelera_active" onClick={() => deletePapelera(data.id)} />
                            </div>
                            :
                            <div className="custom-tooltip red" data-tooltip="Agregar A Papelera">
                                <button id="btnContratosDelete-8114846" type="button" className="icon-Eliminar btn_contratos_delete" onClick={() => addPapelera(data.id)} />
                            </div>
                        } */}


                        <div className="custom-tooltip dark" data-tooltip="Ir A La Fuente">
                            <a href={data.link} target="_blank" rel="noopener noreferrer" className="icon-Ir-a-la-fuente-click btn_contratos_external"></a>
                        </div>
                        <div className="custom-tooltip purple" data-tooltip="Compartir">
                            <button className="icon-Compartir-click btn_contratos_compartir" />
                        </div>
                        {data.notas ?
                            <div className="custom-tooltip yellow with-notes" data-tooltip="Ver Notas">
                                <button className="btn_contratos_notas custom-tooltip yellow">
                                    <img src="/public/images/notas/nota.svg" alt="Nota" onClick={() => onHandleCrearNota(data)} />
                                </button>
                            </div>
                            :
                            <div className="custom-tooltip gray" data-tooltip="Crear Primer Nota">
                                <button className="btn_contratos_notas custom-tooltip gray">
                                    <img src="/public/images/notas/nota.svg" alt="Nota" className="without-notes" onClick={() => onHandleCrearNota(data)} />
                                </button>
                            </div>
                        }

                    </div>
                    {showMoreSelecteds.includes(data.id) &&
                        <button type="button" className="btnRadius ver-menos-detalle" onClick={() => onHandleShowMoreSelecteds(data.id, 'delete')}>
                            Ver menos<i className="icon-Desplegar-click"></i>
                        </button>
                    }
                    {data.carpetas.length > 0 &&
                        <>
                            <span className="separator_docs"></span>
                            <span className="tags_carpetas">
                                <div className="scroll_carpetas">
                                    {data.carpetas.map((carpeta, index) => (
                                        <>
                                            {index <= 1 &&
                                                <div className="d-inline-flex">
                                                    <span className="icon-Mis-carpetas mr-2" style={{ color: carpeta.color }}>
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </span>
                                                    <p className="p-0 m-0 d-inline-block">{carpeta.nombre_carpeta}</p>
                                                    <button type="button" className="icon-Cancelar" onClick={() => deleteContrato(carpeta.id, data.id)}></button>
                                                </div>
                                            }
                                        </>
                                    ))}
                                    {data.carpetas.length > 2 &&
                                        <div className="ver_mas_carpetas" onClick={() => handleShowModal("modal_seleccion_carpeta", data)}>
                                            <span className="icon-Mis-carpetas mr-2" style={{ color: 'rgb(0, 61, 201)' }}>
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </span>Ver más carpetas <button type="button" className="icon-Siguiente1"></button>
                                        </div>
                                    }
                                </div>
                            </span>
                        </>
                    }

                </span>
            </>
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
                        <a className="vermas text-right mr-0 mt-0" onClick={() => onHandleShowMoreSelecteds(grupo.id, 'add')}>Ver más<i className="icon-Desplegar"></i></a>
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

    const columnFilterTemplate = (column) => {
        return (
            <>
                {column.field == "modalidad" || column.field == "ubicacion" || column.field == "actividad_economica" ?
                    <input
                        type="text"
                        className="p-inputtext p-component p-column-filter"
                        placeholder="Seleccionar"
                        name={column.field}
                        onClick={() => handleShowModal(column.field)}
                        onInput={(e) => {
                            dt.current.filter(e.target.value, column.field, 'contains');
                        }}
                    />
                    :
                    <input
                        type="text"
                        className="p-inputtext p-component p-column-filter"
                        placeholder="Buscar"
                        name={column.field}
                        /* onKeyPress={()=>paginator(`${tabla.path}?page=${tabla.current_page}`)} */
                        onChange={(e) => onGlobalFilterChange(e, column.field)}
                        onInput={(e) => {
                            dt.current.filter(e.target.value, column.field, 'contains');
                        }}
                    />
                }
            </>
        );
    };

    const [showModal, setShowModal] = useState(false);
    const [modalOpened, setModalOpened] = useState("")
    const [modalId, setModalId] = useState("")
    const [contratoSelected, setContratoSelected] = useState([])
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (modal_open, data = null) => {
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

    const onGlobalFilterChange = (e, input_name) => {
        if (input_name == "global") {
            const value = e.target.value;
            let _filters = { ...filters };
            _filters[input_name].value = value;
            setFilters(_filters);
            setGlobalFilterValue(value);
        }


        let _url = `${tabla.path}?page=${tabla.current_page}` + getUrlParams()
        axios.get(_url)
            .then(response => {
                console.log("response", response.data)
                setTabla(response.data)
                setPageNumber(response.data.current_page - 1)
                setPageSize(tabla.last_page + 1);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const renderHeader = () => {
        return (
            <div className="m-0 w-100">
                <div className="text-left reloadTable row" style={{ margin: 0 + 'px' }}>
                    <div id="top-botones" className="mb-2 mb-lg-0">
                        <div className="franja-busqueda-rapida">
                            <div className="input-busqueda-rapida">
                                <input value={globalFilterValue} onChange={(e) => onGlobalFilterChange(e, 'global')} type="text" name="rapida" placeholder="Búsqueda rápida" className="form-control" />
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
                                        <Dropdown.Item href="/cliente/contratos?filtrar_nuevos=4" className='dropdown-item'>
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
                            {nombre_carpeta == "Favoritos" &&
                                <div className="d-inline-block seccion-estas-en">
                                    <p className="my-1">Estás en: <span className="mx-1 icon-Favorito-click"></span>
                                        <span className="texto-estas-en">mis favoritos</span>
                                    </p>
                                </div>
                            }
                            {nombre_carpeta == "Papelera" &&
                                <div className="d-inline-block seccion-estas-en">
                                    <p className="my-1">Estás en: <span className="mx-1 icon-Eliminar"></span>
                                        <span className="texto-estas-en">{nombre_carpeta}</span>
                                    </p>
                                </div>
                            }
                            {nombre_carpeta != "Favoritos" && nombre_carpeta != "Papelera" && nombre_carpeta != "ALL" &&
                                <div className="d-inline-block seccion-estas-en">
                                    <p className="my-1">
                                        Estás en:
                                        <img src="https://col.licitaciones.info/img/listado/carpeta_azul_claro.svg" width="14" alt="icon-carpeta" className="mx-1" />
                                        <span className="texto-estas-en">{nombre_carpeta}</span>
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-6 p-0 paginacion_grid text-right text-lg-right ">
                        <span className="paginator">
                            {nombre_carpeta != "ALL" ?
                                <span className="p-paginator-current">{total_carpetas} registros</span>
                                :
                                <>
                                    {filter_notas ?
                                        <span className="p-paginator-current">{filter_total_notas} registros</span>
                                        :
                                        <>
                                            <Button disabled={tabla.prev_page_url === null} icon="pi pi-angle-double-left" onClick={() => paginator(tabla.first_page_url)} />
                                            <Button disabled={tabla.prev_page_url === null} icon="pi pi-angle-left" onClick={() => paginator(tabla.prev_page_url)} />
                                            <Button disabled={tabla.next_page_url === null} icon="pi pi-angle-right" onClick={() => paginator(tabla.next_page_url)} />
                                            <Button disabled={tabla.next_page_url === null} icon="pi pi-angle-double-right" onClick={() => paginator(tabla.last_page_url)} />
                                            <span className="p-paginator-current">{`${tabla.from} - ${tabla.to} de ${tabla.total}`}</span>
                                        </>
                                    }

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


    const addPapelera = (contrato) => {
        var token = document.querySelector('meta[name="csrf-token"]')
        Inertia.post('/cliente/contratos/add_papelera', { contrato: contrato }, {
            headers: {
                'Authorization': `Bearer ${token.content}`
            }
        });
    };

    const deletePapelera = (contrato) => {
        var token = document.querySelector('meta[name="csrf-token"]')
        Inertia.post('/cliente/contratos/delete_papelera', { contrato: contrato }, {
            headers: {
                'Authorization': `Bearer ${token.content}`
            },
            onSuccess: (response) => {
                setShowModal(false)
            }
        });
    };

    const renderEmptyMessage = () => {
        return (
            <>
                {nombre_carpeta === "" &&
                    <p>No se encontraron registros</p>
                }
                {nombre_carpeta === "Papelera" &&
                    <div id="mensajes-personalizado-papelera" className="container-fluid content_blank_interno">
                        <div className="row  align-items-end">
                            <div className="col-md-4 offset-md-1">
                                <img src="https://col.licitaciones.info/img/mensajes-personalisados/sin-papelera.png" alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-6 offset-md-1">
                                <div className="estructura-mensaje-personalisado">
                                    <h4 className="text-center titulo-personalizado">¡Nada por aqui! no tienes procesos de contratacion en <b className="text-rojo">papelera</b></h4>
                                    <div className="position-relative">
                                        <span className="icon-Bombillo mensaje-icono "></span>
                                        <p className="mensaje-personalizado text-justify d-block">Recuerda que aquí se ponen los procesos que has eliminado, si deseas puedes restaurarlos desde esta sección.</p>
                                    </div> <a href="/cliente/carpeta/administrar-carpetas" className="btn-new-gray btnRadius d-inline-block text-center btn-volver-carpetas">Regresar a carpetas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {nombre_carpeta == "Favoritos" &&
                    <div id="mensajes-personalizado-favoritos" className="container-fluid content_blank_interno">
                        <div className="row  align-items-end">
                            <div className="col-md-3 offset-md-2">
                                <img src="https://col.licitaciones.info/img/mensajes-personalisados/sin-favoritos.png" alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-6 offset-md-1">
                                <div className="estructura-mensaje-personalisado">
                                    <h4 className="text-center titulo-personalizado">No has agregado procesos de contratación <b className="text-naranja">favoritos</b> a esta sección</h4>
                                    <div className="position-relative">
                                        <span className="icon-Bombillo  mensaje-icono "></span>
                                        <p className="mensaje-personalizado d-block text-justify">Recuerda que aquí puedes almacenar los procesos que más te interesen. Sólo debes ir al icono de favoritos &nbsp;<span className="icon-Favorito-click" id="icono-mensaje"></span>&nbsp; que se encuentra en la parte inferior de cada proceso y listo, podrás visualisarlos y administrarlos en esta seccion.</p>
                                    </div> <a href="/carpeta/administrar-carpetas" className="btn btn-new-gray btnRadius mx-auto d-block btn-sin-perfil-crear">Regresar a carpetas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {nombre_carpeta != "Papelera" && nombre_carpeta != "Favoritos" && nombre_carpeta != "" &&
                    <div id="mensajes-personalizado-sin-contratos-carpeta" className="container content_blank_interno">
                        <div className="row  align-items-center">
                            <div className="col-md-4 text-center">
                                <img src="https://col.licitaciones.info/img/mensajes-personalisados/sin-procesos.png" alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-6 offset-md-1 margen-mensaje-personalizado">
                                <h4 className="text-center titulo-personalizado">No tienes procesos de contratación en esta <b className="texto-personalisado-azul">carpeta</b>.</h4>
                                <p className="mensaje-personalizado text-justify">Recuerda que aquí se pueden agregar lo procesos de contratacíon de forma organizada y en un solo lugar.</p>
                                <a href="/cliente/carpeta/administrar-carpetas" className="btn btn-new-gray btnRadius mx-auto d-block btn-volver-carpetas">Regresar a carpetas</a>
                            </div>
                        </div>
                    </div>
                }

            </>
        );
    };


    const [folders, setFolders] = useState(carpetas)
    const [showModalCrearCarpeta, setShowModalCrearCarpeta] = useState(false);
    const handleOpenModalCrearCarpeta = () => {
        setShowModalCrearCarpeta(true);
    };
    const handleCloseModalCrearCarpeta = () => {
        setCarpetaSelected(null)
        setShowModalCrearCarpeta(false);
    };

    const [carpetaSelected, setCarpetaSelected] = useState([])

    const handleCarpetas = (carpetas) => {
        setFolders(carpetas)
        setShowModalCrearCarpeta(false)
    }

    const [carpetasSeleccionadas, setCarpetasSeleccionadas] = useState([])

    const toggleCarpetasSeleccionadas = (e, id_carpeta) => {
        if (e.target.checked) {
            if (!carpetasSeleccionadas.includes(id_carpeta)) {
                setCarpetasSeleccionadas([...carpetasSeleccionadas, id_carpeta]);
            }
        } else {
            const newCarpetas = carpetasSeleccionadas.filter((item) => item !== id_carpeta);
            setCarpetasSeleccionadas(newCarpetas);
        }
    }

    const saveCarpetasSeleccionadas = () => {
        /* var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/carpeta/add-contrato', {
            contrato: contratoSelected.id,
            carpetas: carpetasSeleccionadas
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setShowModal(false)
            })
            .catch(error => {
                console.log(error)
            }) */

        var token = document.querySelector('meta[name="csrf-token"]')
        Inertia.post('/cliente/carpeta/add-contrato', { contrato: contratoSelected.id, carpetas: carpetasSeleccionadas }, {
            headers: {
                'Authorization': `Bearer ${token.content}`
            },
            onSuccess: (response) => {
                setShowModal(false)
            }
        });
    }

    const deleteContrato = (carpeta, contrato) => {
        /* var payload = {
            'contrato': contrato
        }; */
        var token = document.querySelector('meta[name="csrf-token"]')
        Inertia.post('/cliente/carpeta/delete-contrato', { contrato: contrato, carpeta: carpeta }, {
            headers: {
                'Authorization': `Bearer ${token.content}`
            },
            onSuccess: (response) => {
                setShowModal(false)
            }
        });
    };

    useEffect(() => {
        setCarpetasSeleccionadas([])
    }, [showModal])

    const rowClassName = (rowData) => {
        return `row-${rowData.id}`;
    }

    const [notas, setNotas] = useState([])
    const [loadingNotas, setLoadingNotas] = useState(false)
    const [sideBarNotas, setsideBarNotas] = useState(false);
    const [creatingNote, setCreatingNote] = useState(false)
    const [editingNote, setEditingNote] = useState(null)
    const [cleanNota, setCleanNota] = useState(false)

    const onHandleSetEditingNote = () => {
        setEditingNote(false)
        setInputTextEdit("")
        setInputTitleEdit("")
    }

    const onHandleCrearNota = (contrato) => {
        setNotas([])
        setContratoSelected(contrato)
        setLoadingNotas(true)
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.get('/cliente/notas/get-notes?idContrato=' + contrato.id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Request successful:', response.data);
                setNotas(response.data)
                setLoadingNotas(false)
            })
            .catch(error => {
                console.error('Request failed:', error.response.status, error.response.data);
            });
        setsideBarNotas(true)
    }

    const refInputText = useRef()
    const refInputTitle = useRef()
    const [inputTextEdit, setInputTextEdit] = useState("")
    const [inputTitleEdit, setInputTitleEdit] = useState("")
    const [notaSelected, setNotaSelected] = useState({})

    const onHandleEditingNote = (nota) => {
        setEditingNote(nota.id)
        //Comparar si la nota seleccionada anteriormente es igual a la actual
        if (JSON.stringify(nota) === JSON.stringify(notaSelected)) {
            //Valida si se esta dando clic en el icono limpiar para no asignar valores en los inputs
            if (cleanNota) {
                return;
            }
            /* if (inputTextEdit == "" && inputTitleEdit == "") {
                console.log("ifff")
                if (inputTextEdit != nota.text) {
                    setInputTextEdit(nota.text)
                }
                if (inputTitleEdit != nota.title) {
                    setInputTitleEdit(nota.title)
                }
            } */
        } else {
            setNotaSelected(nota)
            setInputTextEdit(nota.text)
            setInputTitleEdit(nota.title)
        }
        //setCleanNota(false)
    }

    const onHandlecleanNota = () => {
        setCleanNota(true)
        setInputTextEdit("")
        setInputTitleEdit("")
    }

    const saveNota = () => {
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/notas/admin-note', {
            idContrato: contratoSelected.id,
            pinned: 0,
            text: refInputText.current.value,
            title: refInputTitle.current.value,
            zona: nombre_carpeta
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setNotas(response.data)
                setCreatingNote(false)
                refInputText.current.value = ""
                refInputTitle.current.value = ""
            })
            .catch(error => {
                console.log(error)
            })
    }

    const updateNota = (id_nota) => {
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/notas/actualizar', {
            id: id_nota,
            idContrato: contratoSelected.id,
            pinned: 0,
            text: inputTextEdit,
            title: inputTitleEdit,
            zona: nombre_carpeta
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setNotas(response.data)
                setEditingNote(false)
                setInputTextEdit("")
                setInputTitleEdit("")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const deleteNota = (id_nota) => {
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/notas/eliminar', {
            idContrato: contratoSelected.id,
            id: id_nota
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setNotas(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <AuthenticatedLayout auth={auth} page={'contratos'} carpetas={folders} grupos={grupos}>
            <div className="content_not_blank_interno">
                <div id="bodycontenido" className="col contratos_row px-0">
                    <Loader loading={loading}></Loader>
                    <DataTable id="datatableContratos" ref={dt} value={tabla.data} rows={pageSize} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                        globalFilterFields={['fuente.alias_portal', 'entidad_contratante', 'objeto', 'valor', 'modalidad', 'codigo_proceso', 'estado_proceso', 'fecha_publicacion', 'ubicacion', 'actividad_economica']} emptyMessage={renderEmptyMessage()}
                        expandedRows={expandedRows} /* onRowToggle={(e) => setExpandedRows(e.data)}
                        onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} */ rowExpansionTemplate={rowExpansionTemplate}
                        header={header}
                        selectionMode={rowClick ? null : 'checkbox'}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        first={pageNumber * pageSize}
                        rowClassName={rowClassName}
                    >
                        <Column selectionMode="multiple" className='columna_seleccion columna_pequena' filter filterElement={clearTemplate}></Column>
                        {/* <Column filter className='columna_seleccion columna_pequena'  /> */}
                        <Column field="fuente.alias_portal" header="Portal" filter filterPlaceholder="Todos" className="rounded_left columna_tipo_secop" body={portalBodyTemplate} filterElement={columnFilterTemplate} />
                        <Column field="entidad_contratante" header="Entidad" filter filterPlaceholder="Buscar" className="columna_entidad columna_120" body={entidadBodyTemplate} filterElement={columnFilterTemplate} />
                        <Column field="objeto" header="Obejto" filter filterPlaceholder="Buscar" className="objeto_columna" body={objetoBodyTemplate} filterElement={columnFilterTemplate} />
                        <Column field="valor" header="Cuantía" filter filterPlaceholder="Buscar" className="rangedropdown columna_120 columna_cuantia" body={cuantiaBodyTemplate} filterElement={columnFilterTemplate} />
                        <Column field="modalidad" header="Modalidad" filter filterPlaceholder="Seleccionar" className="columna_100 columna_modalidad" filterElement={columnFilterTemplate} />
                        <Column field="codigo_proceso" header="Número" filter filterPlaceholder="Buscar" className="columna_numero" filterElement={columnFilterTemplate} />
                        <Column field="estado_proceso" header="Estado" filter filterPlaceholder="Buscar" className="columna_estado" body={estadoBodyTemplate} filterElement={columnFilterTemplate} />
                        <Column field="fecha_publicacion" header="Publicada" filter filterPlaceholder="Buscar" className="columna_fecha" filterElement={columnFilterTemplate} />
                        <Column field="ubicacion" header="Ubicación" filter filterPlaceholder="Seleccionar" className="columna_ubicacion" body={ubicacionBodyTemplate} filterElement={columnFilterTemplate} />
                        <Column field="actividad_economica" header="Actividad Económica" filter filterElement={columnFilterTemplate} />
                    </DataTable>

                </div>
            </div>







            <Modal show={showModal} onHide={handleCloseModal} id={modalId} centered>
                <Modal.Header>
                    {modalOpened == "actividad_economica" &&
                        <h4 className="modal-title">Selecciona la(s) actividad(es) económica(s) de tu interés.</h4>
                    }
                    {modalOpened == "modalidad" &&
                        <h4 className="modal-title">Selecciona la modalidad.</h4>
                    }
                    {modalOpened == "ubicacion" &&
                        <h4 className="modal-title">Selecciona la ubicación.</h4>
                    }
                    {modalOpened == "modal_confirm_delete" &&
                        <h4 className="modal-title">¿Deseas <span className="text_color_red">eliminar</span> el/los proceso(s) de tus favoritos?</h4>
                    }
                    {modalOpened == "modal_seleccion_carpeta" &&
                        <>
                            {folders.length == 0 ?
                                <h4 className="modal-title">Aún no tienes carpetas creadas</h4>
                                :
                                <h4 className="modal-title">Selecciona carpeta(s) destino</h4>
                            }
                        </>
                    }

                    <button type="button" aria-label="Close" className="close icon-Cerrar-modal" onClick={handleCloseModal}></button>
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
                            <div className="descripcion_delete">
                                <p>Al aceptar esto el proceso se eliminará junto con el siguiente contenido:</p>
                            </div>
                            <div className="informacion_contratos">
                                <table className="w-100">
                                    <thead className="informacion_contratos--cabeceras">
                                        <th className="columna_informacion">
                                            <span>Información del proceso</span>
                                        </th>
                                        <th className="columna_icono">
                                            <span>Favoritos</span>
                                        </th>
                                    </thead>
                                    <tbody>
                                        <tr className="informacion_contratos--listado">
                                            <td className="informacion_contratos--contrato_info columna_informacion">
                                                <div>
                                                    {/* <div className="checkbox informacion_contratos--contrato_check" style="display: none;">
                                                        <label>
                                                            <input type="checkbox" id="contratoCheckbox0" className="input_perfil_val" value="8119752" />
                                                            <span className="cr">
                                                                <i className="cr-icon icon-Check"></i>
                                                            </span>
                                                        </label>
                                                    </div> */}
                                                    <i id="iconFuente-8119752" className="icono_fuente__list" style={{ background: 'rgb(0, 61, 201)' }}>MP</i>
                                                    <div className="informacion_contratos--contrato_nombre">
                                                        <b>{contratoSelected.entidad_contratante}</b>
                                                        <br />
                                                        <span>{contratoSelected.objeto}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="informacion_contratos--icono columna_icono">
                                                <img src="https://col.licitaciones.info/img/listado/quitar_favoritos.svg" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    }
                    {modalOpened == "modal_seleccion_carpeta" &&
                        <div className="contenedor_carpetas_seleccion">
                            {folders.length == 0 ?
                                <div id="mensajes-sin-carpetas" className="container content_blank_intern">
                                    <img src="/public/images/mensajes-personalizados/sin-carpetas-modal.svg" alt="" className="imagen-sin-carpetas" />
                                    <p>Añade tu primer carpeta</p>
                                </div>
                                :
                                <div className="carpetas_list_seleccion">
                                    <ul className="row scroll_fit">
                                        {folders.map((carpeta) => (
                                            <li className="align-items-center col-md-3 col-sm-4 col-xs-12 d-flex selected_carpeta">
                                                <span className="body_checkbox">
                                                    {contratoSelected.carpetas_ids.includes(carpeta.id) ?
                                                        <div className="checkbox" style={{ margin: 0 + 'px' }} onClick={() => deleteContrato(carpeta.id, contratoSelected.id)}>
                                                            <i className="align-items-center cr-icon d-flex fa fa-times justify-content-center quitar_carpeta"></i>
                                                            <label>
                                                                <input type="checkbox" name="carpeta_mover" value="22101" />
                                                                <span className="cr">
                                                                    <i className="cr-icon fa fa-check"></i>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        :
                                                        <input type="checkbox" id="carpeta_mover" name="carpeta_mover" className="input_perfil_val" value={carpeta.id} onClick={(e) => toggleCarpetasSeleccionadas(e, carpeta.id)} />
                                                    }
                                                </span>
                                                <div className="body_icono_carpeta">
                                                    <span title="Carpeta 1" className="ico-carpeta icon-Mis-carpetas" style={{ color: carpeta.color }}>
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </span>
                                                    <span title="Carpeta 1" className="title_icono_carpeta">{carpeta.nombre_carpeta}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    {modalOpened == "modal_confirm_delete" &&
                        <button className="btnRadius btn-action btn-new-danger" onClick={() => deleteFavorito(contratoSelected.id)}>Eliminar</button>
                    }
                    {modalOpened == "ubicacion" || modalOpened == "modalidad" || modalOpened == "actividad_economica" &&
                        <button type="button" className="btnRadius btn-new-green">Seleccionar</button>
                    }
                    {modalOpened == "modal_seleccion_carpeta" &&
                        <div className="actions-buttons-modal buttons-modal-carpetas">
                            <button type="button" className="btn-new-green btnRadius text-center" onClick={handleOpenModalCrearCarpeta}>Crear carpeta</button>
                            <button type="button" className="btn-new-blue btnRadius text-center disable_button" disabled={carpetasSeleccionadas.length == 0} onClick={saveCarpetasSeleccionadas}>Guardar en</button>
                        </div>
                    }
                </Modal.Footer>
            </Modal>
            <CrearCarpeta showModal={showModalCrearCarpeta} handleCloseModal={handleCloseModalCrearCarpeta} carpeta={carpetaSelected} other_page={true} handleCarpetas={handleCarpetas} />
            <Sidebar id="sidebar-notes" visible={sideBarNotas} position="right" onHide={() => setsideBarNotas(false)}>
                <div className="b-sidebar-body notes-content">
                    {loadingNotas &&
                        <div id="notasCarganos" className="notasCargando">
                            <img src="https://col.licitaciones.info/img/loading.gif" className="loader-notas" />
                        </div>
                    }
                    <div className="wrapper">
                        <a className="close-sidebar icon-Flujo" onClick={() => setsideBarNotas(false)}></a>
                        <div className="notes-content__header">
                            <h4>Mis notas</h4>
                        </div>
                        <div className={`notes-content__create ${creatingNote ? "on-creating" : ""}`} onClick={() => setCreatingNote(true)}>
                            <div className="notes-header">
                                {creatingNote &&
                                    <div className="notes-title">
                                        <input ref={refInputTitle} onClick={() => setCreatingNote(true)} placeholder="Escribe un título aquí." type="text" className="noteTitle" aria-required="true" aria-invalid="true" />
                                    </div>
                                }
                                <div className={`notes-opts ${creatingNote ? "on-expand" : ""}`}>
                                    <span id="timeNota" className="icon-Hora text-fecha">
                                        <span className="text-fecha__hora">Hoy 12:46 pm</span>
                                    </span>
                                    <div className="custom-tooltip red" data-tooltip="Borrar contenido">
                                        <a id="tlpBorrarNota" className="icon-Limpiar-click"></a>
                                    </div>
                                </div>
                            </div>
                            <div className="textarea-container">
                                <textarea ref={refInputText} onClick={() => setCreatingNote(true)} name="note" id="note" placeholder="Crear una nota" className="mt-2"></textarea>
                            </div>
                            {creatingNote &&
                                <div className="button-create-container">
                                    <button className="button-create btn-new-green btnRadius" onClick={saveNota}>Crear nota</button>
                                </div>
                            }
                        </div>
                        {notas.length > 0 ?
                            <div className="notes-content__zone">
                                <div className="notes-content__zone-input-search">
                                    <div className="form-group">
                                        <div className="input-container">
                                            <input onClick={() => setCreatingNote(false)} type="text" placeholder="Buscar nota" /> <span
                                                className="icon-Cancelar" style={{ display: 'none' }}></span> <span className="icon-Buscar-click"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="notes-content__zone-list-notes">
                                    <ul>
                                        <div>
                                            {notas.map((nota, index) => (
                                                <li className={`note ${editingNote == nota.id ? "on-edit" : ""}`}>
                                                    {editingNote == nota.id &&
                                                        <div className="note-header-opts">
                                                            <div className="controls">
                                                                <a className="icon-Limpiar-click" onClick={() => onHandlecleanNota()}></a>
                                                                <a className="hover-icon icon-Eliminar" onClick={() => deleteNota(nota.id)}></a>
                                                                <span id="timeNota" className="icon-Hora text-fecha">
                                                                    <span className="text-fecha__hora">Hoy 1:21 pm
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    }
                                                    <div className="note-data">
                                                        <div className="note-icon">
                                                            <img src="https://col.licitaciones.info/img/notas/note_icon.svg" alt="Nota icon" /></div>
                                                        <div className="note-description" onClick={() => onHandleEditingNote(nota)}>
                                                            {editingNote == nota.id ?
                                                                <>
                                                                    <input placeholder="Agrega un título" type="text" className="onEditTitleNote" aria-required="true" aria-invalid="false" value={inputTitleEdit} onChange={(e) => setInputTitleEdit(e.target.value)} />
                                                                    <textarea placeholder="Agrega una descripción" className="onEditNote" style={{ height: 26 + 'px' }} value={inputTextEdit} onChange={(e) => setInputTextEdit(e.target.value)}></textarea>
                                                                </>
                                                                :
                                                                <>
                                                                    <div className="notes-drag">
                                                                        <span className="note-description__title">{nota.title}</span>
                                                                        <div className="notes-opts">
                                                                            <span id="timeNota" className="icon-Hora text-fecha">
                                                                                <span className="text-fecha__hora">Hoy 11:38 am</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="note-descrition__body">{nota.text}</p>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                    {editingNote == nota.id ?
                                                        <div className="note-actions">
                                                            <div className="manual-controls">
                                                                <a className="btn-new-green btnRadius" draggable="false" href="#!" onClick={() => updateNota(nota.id)}>
                                                                    <i className="icon-Check"></i>
                                                                    <span>Guardar</span>
                                                                </a>
                                                                <a href="#!" className="btn-new-danger btnRadius" onClick={() => onHandleSetEditingNote()}>
                                                                    <i className="icon-Cancelar"></i> <span>Descartar</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className="note-actions">
                                                            <div className="direct-access-controls">
                                                                <a className="hover-icon icon-Eliminar" onClick={() => deleteNota(nota.id)}></a>
                                                            </div>
                                                        </div>
                                                    }
                                                </li>
                                            ))}
                                        </div>
                                        <div className="infinite-loading-container">
                                            <div className="infinite-status-prompt"
                                                style={{ color: 'rgb(102, 102, 102)', fontSize: 14 + 'px', padding: 10 + 'px 0px', display: 'none' }}><i
                                                    data-v-46b20d22="" className="loading-default"></i></div>
                                            <div className="infinite-status-prompt">
                                                <div className="infinite--no-data">No hay más notas</div>
                                            </div>
                                            <div className="infinite-status-prompt" style={{ display: 'none' }}><span
                                                className="infinite--no-data">No hay más notas</span></div>
                                            <div className="infinite-status-prompt"
                                                style={{ color: 'rgb(102, 102, 102)', fontSize: 14 + 'px', padding: 10 + 'px 0px', display: 'none' }}>
                                                Opps, something went wrong :(
                                                <br />
                                                <button className="btn-try-infinite">Retry</button>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="workspace text-center">
                                    <div className="workspace__image">
                                        <img src="https://col.licitaciones.info/img/notas/workspace.png" alt="Nota Workspace" />
                                    </div>
                                    <p className="workspace__copy">No has creado tu primera nota.</p>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </Sidebar>
        </AuthenticatedLayout >
    );
};

export default Index;
