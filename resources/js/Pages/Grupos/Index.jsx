import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, Head } from "@inertiajs/inertia-react";
import "./Index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import ResumenPerfil from "@/Components/ResumenPerfil";

/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";
/*Toast*/

/*PRIMEFACES */
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
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

const Index = ({ auth, grupos, created_updated }) => {
    const [filtroSelected, setFiltroSelected] = useState({})
    const [paso, setPaso] = useState(1)
    /*Tooltip */
    const [showTooltip, setshowTooltip] = useState(true)
    /*Tooltip */

    /*Modals */
    const [showModal, setShowModal] = useState(created_updated);
    const handleCloseModal = () => setShowModal(false);
    const [idModal, setIdModal] = useState(created_updated ? "modalCreateSuccess" : "")//TEMPORAL
    //const handleShowModal = () => setShowModal(true);

    const handleShowModal = (idModal, perfil) => {
        setIdModal(idModal)
        setShowModal(true)
        setFiltroSelected(perfil)
    }

    /*Resumen Perfil */
    const [showModalResumenPerfil, setShowModalResumenPerfil] = useState(false);
    const [resumenFiltroSelected, setResumenFiltroSelected] = useState([]);

    const handleOpenModalResumenPerfil = () => {
        handleCloseModal()
        axios.get(`/cliente/grupo/subcategorias/${filtroSelected.id}`)
            .then(response => {
                setResumenFiltroSelected(response.data)
            })
            .catch(error => {
                console.log(error);
            });
        setShowModalResumenPerfil(true);
    };

    const handleCloseModalResumenPerfil = () => {
        setIdModal("modalInformacionPerfil")
        setShowModal(true)
        setShowModalResumenPerfil(false);
    };
    /*Modals */

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

    const [data, setData] = useState(getGrupos(grupos));
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        nombre_filtro: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        descripcion_filtro: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        limite_inferior_cuantia: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        limite_superior_cuantia: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        historico: { value: null, matchMode: FilterMatchMode.CONTAINS },
        envio_alertas: { value: null, matchMode: FilterMatchMode.EQUALS },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
    });

    const [loading, setLoading] = useState(false);
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
        { 'name': 'editar', text: 'Editar perfil', 'icon': 'icon-Editar icon-pd-editar', modal: 'modalEditarPerfil' },
        { 'name': 'eliminar', text: 'Eliminar perfil', 'icon': 'icon-Eliminar icon-pd-eliminar', modal: 'modalEliminarPerfil' },
        { 'name': 'duplicar', text: 'Duplicar perfil', 'icon': 'icon-Duplicar icon-pd-duplicar', modal: 'modalDuplicarPerfil' },
        { 'name': 'leidos', text: 'Marcar como leídos', 'icon': 'icon-Leidos icon-pd-leidos', modal: 'modalLeidosPerfil' },
        { 'name': 'info', text: 'Ver más información', 'icon': 'icon-Informacin-click icon-pd-info', modal: 'modalInformacionPerfil' }
    ])

    const accionesBodyTemplate = (grupo) => {
        return <div className="iconos_functions_grid">
            <div className="custom-tooltip light-blue" data-tooltip="Editar perfil">
                <a id="tlpBorrarNota" className="icon-Editar icon-pd-editar" onClick={() => handleShowModal('modalEditarPerfil', grupo)}></a>
            </div>
            <div className="custom-tooltip red" data-tooltip="Eliminar perfil">
                <a id="tlpBorrarNota" className="icon-Eliminar icon-pd-eliminar" onClick={() => handleShowModal('modalEliminarPerfil', grupo)}></a>
            </div>
            <div className="custom-tooltip dark-blue" data-tooltip="Duplicar perfil">
                <a id="tlpBorrarNota" className="icon-Duplicar icon-pd-duplicar" onClick={() => handleShowModal('modalDuplicarPerfil', grupo)}></a>
            </div>
            <div className="custom-tooltip aquamarine-blue" data-tooltip="Marcar como leídos">
                <a id="tlpBorrarNota" className="icon-Leidos icon-pd-leidos" onClick={() => handleShowModal('modalLeidosPerfil', grupo)}></a>
            </div>
            <div className="custom-tooltip green ver-mas-informacion" data-tooltip="Ver más información">
                <a id="tlpBorrarNota" className="icon-Informacin-click icon-pd-info" onClick={() => handleShowModal('modalInformacionPerfil', grupo)}></a>
            </div>


            {/* {toolTips.map((placement, index) => (
                <OverlayTrigger rootClose={true} key={index} overlay={
                    <Tooltip id={`tooltip-${placement.name}-${grupo.id}`} className={`tooltip tooltip-${placement.name}`}>{placement.text}</Tooltip>
                }>
                    <button type="button" id={`${placement.name}-btn${grupo.id}`} className={`${placement.icon}`} onClick={() => handleShowModal(placement.modal, grupo)}></button>
                </OverlayTrigger>
            ))} */}
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


    const CustomFilter = (column) => {
        return (
            <div className="p-input-icon-right">
                <i className={`icon-Cancelar clearfilter_grid`}></i>
                <InputText
                    value={column.filterValue || ''}
                    onChange={e => onFilterChange(e.target.value)}
                    placeholder={column.filterPlaceholder || ''}
                />
            </div>
        );
    };

    const refInputCopyFilterName = useRef("")
    const [nameCopyFilter, setNameCopyFilter] = useState(filtroSelected.nombre_filtro)
    useEffect(() => {
        if (idModal == "modalDuplicarPerfil") {
            console.log("cargo modal")
            setNameCopyFilter(filtroSelected.nombre_filtro)
        }
    }, [showModal])


    const Copy = () => {
        var payload = {
            'perfil': filtroSelected.id,
            'nombre_filtro': nameCopyFilter,
        };
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/grupo/duplicar', {
            data: payload
        }, {
            headers: {
                'Authorization': `Bearer ${token.content}`
            }
        })
            .then(response => {
                setData(getGrupos(response.data))
                handleCloseModal()
            })
            .catch(error => {
                // Handle error
                console.log(error);
            });
    };

    const Delete = () => {
        setGlobalLoading(true)
        var payload = {
            'perfil': filtroSelected.id,
        };
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/grupo/destroy', {
            data: payload
        }, {
            headers: {
                'Authorization': `Bearer ${token.content}`
            }
        })
            .then(response => {
                setData(getGrupos(response.data))
                handleCloseModal()
                setGlobalLoading(false)
            })
            .catch(error => {
                // Handle error
                console.log(error);
            });
    };
    const [globalLoading, setGlobalLoading] = useState(false)
    return (
        <>
            <AuthenticatedLayout auth={auth} page={'grupos'} grupos={grupos} globalLoading={globalLoading}>

                <div className="content_blank_interno margin_left_layout">
                    {data.length > 0 &&
                        <div className="col">
                            <h2 className="name_seccion_app">Administrar perfil (es) de negocio</h2>
                        </div>
                    }
                    <div className="col">
                        <div id="perfil-list" className="">
                            {data.length > 0 ?
                                <div className="tablescoop position-relative tablebordeada">
                                    <div className="cargando_tables" style={{ display: 'none' }}>
                                        <div className="col">
                                            <img src="https://col.licitaciones.info/img/loading.gif" className="img-col" />
                                            <p>Cargando</p>
                                        </div>
                                    </div>
                                    <div className="befor_table">
                                    </div>
                                    <div className="VueTables VueTables--server">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group form-inline float-left VueTables__search">

                                                </div>
                                                <div className="form-group form-inline float-right VueTables__limit">
                                                    <div className="m-0 w-100">
                                                        <div className="text-left reloadTable row" style={{ margin: 0 + 'px !important;' }}>
                                                            <div id="top-botones" className="mb-2 mb-lg-0">
                                                                <a role="button" ></a>
                                                                <a href="/cliente/grupo/crear" role="button" className="btn btn-new-green btnRadius"><span className="icon-Crear volver_icon">
                                                                </span> Crear perfil </a>
                                                            </div>
                                                            <div className="col-12 col-lg-7 col-xl-6 p-0 paginacion_grid text-center text-lg-right ">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <DataTable ref={dt} value={data} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                                                globalFilterFields={['name', 'representative.name', 'status']} emptyMessage="No se encontraron registros">
                                                <Column style={{ maxWidth: 600 + 'px' }} filter className='columna_seleccion columna_pequena' filterElement={clearTemplate} />
                                                <Column field="nombre_filtro" body={nombreFiltroBodyTemplate} header="Nombre" filter filterPlaceholder="Buscar" className="columna_nombre" />
                                                <Column field="descripcion_filtro" header="Descripción" filter filterPlaceholder="Buscar" className="columna_grande" />
                                                <Column field="limite_inferior_cuantia" header="Cuantia inferior" filter filterPlaceholder="Buscar" className="columna_promedio" />
                                                <Column field="limite_superior_cuantia" header="Cuantia superior" filter filterPlaceholder="Buscar" className="columna_promedio" />
                                                <Column field="historico" header="Histórico" filter filterPlaceholder="Buscar" className="columna_promedio" />
                                                <Column field="envio_alertas" header="Notificaciones" showFilterMenu={false} filter filterElement={statusRowFilterTemplate} className="columna_notificaciones" />
                                                <Column body={accionesBodyTemplate} filter className="v-hidden columna_acciones" />


                                                {/* <Column field="nombre_filtro" header="Brand" filter filterPlaceholder="Search by brand" filterMatchMode="custom" filterElement={CustomFilter} /> */}
                                            </DataTable>
                                        </div>
                                        <div className="paginacion_grid">
                                        </div>
                                    </div>
                                </div>
                                :
                                <div id="mensajes-personalizado-sin-perfil" class="content_blank_interno">
                                    <div class="row  align-items-center">
                                        <div class="col-md-5 text-center">
                                            <img src="/public/images/mensajes-personalizados/sin-perfil.png" alt="" class="img-fluid" />
                                        </div>
                                        <div class="col-md-6 offset-md-1">
                                            <h4 class="text-center titulo-personalizado">Aún no has creado un perfil de negocio.</h4>
                                            <div class="d-flex align-items-center justify-content-center">
                                                <span class="icon-Bombillo d-block mensaje-icono"></span>
                                                <p class="mensaje-personalizado text-justify">Crea un perfil basado en las oportunidades  más adecuadas para tu negocio.</p>
                                            </div>
                                            <div class="justify-content-center aling-items-center mt-5 d-flex m-auto">
                                                <a href="/cliente/grupo/crear" class="btn btn-new-green btnRadius">
                                                    <i class="icon-Datos-adicionales mr-2"></i>Crear tu primer perfil</a>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <Modal show={showModal} onHide={handleCloseModal} animation={true} id={idModal} centered>
                    <Modal.Header>

                        {idModal == "modalEditarPerfil" &&
                            <h4 class="modal-title title-dinamico">¿ Qué paso(s) desea(s) <span>editar</span> en tu perfil ?</h4>
                        }
                        {idModal == "modalEliminarPerfil" &&
                            <h4 class="modal-title">¿Deseas <b class="text-rojo">eliminar</b> el perfil de negocio?</h4>
                        }
                        {idModal == "modalDuplicarPerfil" &&
                            <h4 class="modal-title texto-dinamico">¿Deseas <span class="color-blue">duplicar</span> el perfil de negocio?</h4>
                        }
                        {idModal == "modalLeidosPerfil" &&
                            <h4 class="modal-title">¿Deseas marcar como leídos los procesos de este perfil?</h4>
                        }
                        {idModal == "modalInformacionPerfil" &&
                            <h4 class="modal-title">Información general</h4>
                        }
                        {idModal == "modalCreateSuccess" &&
                            <>
                                <div class="modal-save__img">
                                    <img src="https://col.licitaciones.info/img/usuario/perfiles/perfil-creado.png" />
                                </div>
                                <h4 class="modal-title">Estamos configurando tu perfil de negocio.</h4>
                            </>
                        }
                        <button type="button" aria-label="Close" class="close icon-Cerrar-modal icon-Cerrar-modal-click" onClick={handleCloseModal}>
                            <span class="path1"></span><span class="path2"></span>
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                        {idModal == "modalEditarPerfil" &&
                            <div>
                                <label className="perfil-checks">
                                    <div className="centrador">
                                        <i className="perfil-checks__iconos icon-Paso-1-click"></i>
                                        <span className="perfil-checks__title">Editar actividad económica</span>
                                        <input type="radio" name="radio" onChange={() => setPaso(1)} checked={paso == 1 ? true : false} />
                                        <span className="perfil-checks__mark"></span>
                                    </div>
                                </label>
                                <label className="perfil-checks">
                                    <div className="centrador">
                                        <i className="perfil-checks__iconos icon-Paso-2-click"></i>
                                        <span className="perfil-checks__title">Editar modalidad</span>
                                        <input type="radio" name="radio" onChange={() => setPaso(2)} />
                                        <span className="perfil-checks__mark"></span>
                                    </div>
                                </label>
                                <label className="perfil-checks">
                                    <div className="centrador">
                                        <i className="perfil-checks__iconos icon-Paso-3-click"></i>
                                        <span className="perfil-checks__title">Editar ubicación</span>
                                        <input type="radio" name="radio" onChange={() => setPaso(3)} />
                                        <span className="perfil-checks__mark"></span>
                                    </div>
                                </label>
                                <label className="perfil-checks">
                                    <div className="centrador">
                                        <i className="perfil-checks__iconos icon-Paso-4-click"></i>
                                        <span className="perfil-checks__title">Editar rangos de cuantía</span>
                                        <input type="radio" name="radio" onChange={() => setPaso(4)} />
                                        <span className="perfil-checks__mark"></span>
                                    </div>
                                </label>
                                <label className="perfil-checks">
                                    <div className="centrador">
                                        <i className="perfil-checks__iconos icon-Paso-5-click"></i>
                                        <span className="perfil-checks__title">Preferencias del perfil</span>
                                        <input type="radio" name="radio" onChange={() => setPaso(5)} />
                                        <span className="perfil-checks__mark"></span>
                                    </div>
                                </label>
                                <label className="perfil-checks"></label>
                            </div>
                        }
                        {idModal == "modalEliminarPerfil" &&
                            <>
                                <p class="modal-message">Al aceptar esto el perfil se eliminará junto con el siguiente contenido, el cuál no se podrá recuperar:</p>
                                <hr />
                                <div id="modal-perfil" class="d-flex">
                                    <div class="info-sub principal">
                                        <h5>Información del perfil</h5>
                                        <div class="contenedor">
                                            <img src={filtroSelected.imagen_filtro} id="img-perfil" />
                                            <span class="nombreWeb">{filtroSelected.nombre_filtro}</span>
                                        </div>
                                    </div>
                                    <div class="info-sub secundario">
                                        <h5>Procesos almacenados</h5>
                                        <p class="text-rojo">0</p>
                                    </div>
                                </div>
                            </>
                        }
                        {idModal == "modalDuplicarPerfil" &&
                            <div class="form-group modal-duplicar__input">
                                <label class="modal_save--label"> Dale un nombre a tu nuevo perfil:</label>
                                <input
                                    ref={refInputCopyFilterName}
                                    type="text"
                                    name="nombre_duplicado"
                                    class="form-control inputs_form padd-peq"
                                    value={nameCopyFilter}
                                    onChange={(e) => setNameCopyFilter(e.target.value)}
                                />
                            </div>
                        }
                        {idModal == "modalLeidosPerfil" &&
                            <p class="modal-message">Todos los procesos contenidos en este perfil se marcarán como <span class="text-color">leídos</span>.</p>
                        }
                        {idModal == "modalInformacionPerfil" &&
                            <>
                                <div className="row modal-info__inicio text-center pb-3">
                                    <div className="modal-info__logo">
                                        <img src={filtroSelected.imagen_filtro} />
                                    </div>
                                    <div className="modal-info__nombre">
                                        <label>{filtroSelected.nombre_filtro}</label>
                                    </div>
                                </div>
                                <div className="row py-4">
                                    <div className="col-7 col-md-6 modal-info__info">
                                        <label>Fecha de creación:</label>
                                    </div>
                                    <div className="col-5 col-md-6 modal-info__info text-right">
                                        <div className="modal-info__data my-1">
                                            <span>{new Date(filtroSelected.created_at).toLocaleDateString('en-GB')}</span>
                                        </div>
                                    </div>
                                    <div className="col-5 modal-info__info">
                                        <label>Número de actividades económicas:</label>
                                    </div>
                                    <div className="col-7 ml-auto modal-info__info text-right row">
                                        <div className="modal-info_tags">
                                            <img src="https://col.licitaciones.info/img/filtros/asesorias.svg" className="modal-info__icon" />
                                            <p className="modal-info__counter">0</p>
                                        </div>
                                    </div>
                                    <div className="col-7 col-md-6 modal-info__info">
                                        <label>Número de procesos contenidos:</label>
                                    </div>
                                    <div className="col-5 col-md-6 modal-info__info text-right">
                                        <div className="modal-info__data my-1">
                                            <span className="modal-info__data--green">0</span> <span>procesos</span>
                                        </div>
                                    </div>
                                    <div className="col-7 col-md-6 modal-info__info">
                                        <label>Procesos no leídos:</label>
                                    </div>
                                    <div className="col-5 col-md-6 modal-info__info text-right">
                                        <div className="modal-info__data my-1">
                                            <span className="modal-info__data--blue">0</span> <span>procesos</span>
                                        </div>
                                    </div>
                                    <div className="col-7 col-md-6 modal-info__info mb-0">
                                        <label>Procesos eliminados:</label>
                                    </div>
                                    <div className="col-5 col-md-6 modal-info__info text-right">
                                        <div className="modal-info__data my-1">
                                            <span className="modal-info__data--red">0</span> <span>procesos</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        {idModal == "modalCreateSuccess" &&
                            <div>
                                <label class="modal-save__label"> Este proceso dependerá de la complejidad del perfil, te notificaremos por medio de la campana cuando todo este listo.</label>
                            </div>
                        }

                    </Modal.Body>
                    <Modal.Footer>
                        {idModal == "modalEditarPerfil" &&
                            <div>
                                <button class="btnRadius btn-new-gray" onClick={handleCloseModal}>Atrás</button>
                                <a href={`/cliente/grupo/editar/${filtroSelected.id}?paso=${paso}`} class="btnRadius btn-new-blue">Editar perfil</a>
                            </div>
                        }
                        {idModal == "modalEliminarPerfil" &&
                            <button class="btnRadius btn-new-danger" onClick={Delete}>Eliminar</button>
                        }
                        {idModal == "modalDuplicarPerfil" &&
                            <>
                                <button class="btnRadius btn-new-green" onClick={Copy}>Duplicar</button>
                                <button class="btnRadius btn-new-danger" onClick={handleCloseModal}>Cancelar</button>
                            </>
                        }
                        {idModal == "modalLeidosPerfil" &&
                            <>
                                <button class="btnRadius btn-action btn-new-danger" onClick={handleCloseModal}>Cancelar</button>
                                <button class="btnRadius btn-new-green">Marcar</button>
                            </>
                        }
                        {idModal == "modalInformacionPerfil" &&
                            <button class="btnRadius btn-new-blue" onClick={handleOpenModalResumenPerfil} ><i class="icon-Resumen"></i>Ver resumen</button>
                        }
                        {idModal == "modalCreateSuccess" &&
                            <button class="btnRadius btn-new-green" onClick={handleCloseModal}>Entendido</button>
                        }
                    </Modal.Footer>
                </Modal>
                <ResumenPerfil showModal={showModalResumenPerfil} handleCloseModal={handleCloseModalResumenPerfil} data={resumenFiltroSelected} />
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
