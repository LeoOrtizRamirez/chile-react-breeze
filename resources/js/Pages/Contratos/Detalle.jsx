import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "./Detalle.css";
import SideBarNotas from "@/Components/SideBarNotas";
import ModalFavorito from "@/Components/ModalFavorito";
import ModalCarpetas from "@/Components/ModalCarpetas";
import { Toast } from 'primereact/toast';
import { Inertia } from '@inertiajs/inertia'
import ModalDocumentos from "@/Components/ModalDocumentos";

const Detalle = ({ auth, carpetas, contratos, index, current_url, query, current_page, zona = "ALL" }) => {

    const [currentPage, setCurrentPage] = useState(parseInt(current_page))
    const [tabla, setTabla] = useState(contratos)
    const [indexTabla, setIndexTabla] = useState(index)
    const [contrato, setContrato] = useState(tabla.data[indexTabla])
    const [documentos, setDocumentos] = useState([])
    const changeContrato = (index) => {
        if (tabla.from + index > tabla.to) {
            setCurrentPage(currentPage + 1)
            paginatorPostSendRequest(current_url, currentPage + 1, 'next')
        } else {
            if (index == -1) {
                setCurrentPage(currentPage - 1)
                paginatorPostSendRequest(current_url, currentPage - 1, 'prev')
            } else {
                setIndexTabla(index)
                setContrato(tabla.data[index])
            }
        }
    }

    const paginatorPostSendRequest = (url, page, type) => {
        setGlobalLoading(true)
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post(url, {//pendiente organizar url para obtener ids de perfiles y carpetas
            query: query,
            page: page,
            per_page: 30
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setTabla(response.data)
                if (type == 'prev') {
                    setIndexTabla(29)
                    setContrato(response.data.data[29])
                } else {
                    setIndexTabla(0)
                    setContrato(response.data.data[0])
                }
                setGlobalLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }


    const [folders, setFolders] = useState(carpetas)
    const [globalLoading, setGlobalLoading] = useState(false)
    const handleGlobalLoading = (loading) => {
        setGlobalLoading(loading)
    }

    var token = document.querySelector('meta[name="csrf-token"]')
    useEffect(() => {
        axios.post('/contrato-visitado', {
            contrato: contrato.id
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                //console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        axios.post('/cliente/contratos/documentos', {
            contrato_id: contrato.id,
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setDocumentos(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [contrato])

    const [sideBarNotasisOpen, setSideBarNotasisOpen] = useState(false)

    const onHideSideBarNotas = () => {
        setSideBarNotasisOpen(false)
    }

    const onChangeSideBarTotalNotas = (total) => {
        let _contrato = contrato;
        _contrato = { ..._contrato, notas: true };
        _contrato = { ..._contrato, total_notas: total };
        setContrato(_contrato);

        setTabla(prevTabla => {
            const index = prevTabla.data.findIndex(item => item.id === contrato.id);
            if (index === -1) {
                return { ...prevTabla };
            } else {
                let newData = [...prevTabla.data];
                newData[index] = { ...newData[index], notas: true };
                newData[index] = { ...newData[index], total_notas: total };
                return { ...prevTabla, data: newData };
            }
        });
    }



    const [showModalFavorito, setShowModalFavorito] = useState(false);
    const handleCloseModalFavorito = () => setShowModalFavorito(false);
    const handleShowModalFavorito = (modal_open, data = null, is_favorito = false) => {
        setShowModalFavorito(true);
    }

    const [showModalCarpetas, setShowModalCarpetas] = useState(false);
    const handleCloseModalCarpetas = () => setShowModalCarpetas(false);
    const handleShowModalCarpetas = (modal_open, data = null, is_favorito = false) => {
        setShowModalCarpetas(true);
    }

    const toastBL = useRef(null);

    const deleteContrato = (carpeta, contratos) => {
        setGlobalLoading(true)
        var _contratos = [];
        if (contratos.length == undefined) {
            _contratos = [contratos]
        } else {
            contratos.forEach(c => {
                _contratos.push(c.id)
            })
        }
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/carpeta/delete-contrato', {
            contratos: _contratos,
            carpeta: carpeta
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                if (response.data.status == 1) {
                    /* setSelectedContratos([])
                    setTabla(prevTabla => {
                        var newData = [...prevTabla.data];
                        _contratos.forEach(c => {
                            const index = prevTabla.data.findIndex(item => item.id === c);
                            if (index === -1) {
                                return { ...prevTabla };
                            } else {
                                if (zona == "C" && carpeta_actual?.id == carpeta) {
                                    newData = newData.filter(item => item.id != c)
                                } else {
                                    const carpetas_ids = newData[index].carpetas_ids.filter(c => c != carpeta)
                                    const carpetas_contrato = newData[index].carpetas.filter(c => c.id != carpeta);
                                    newData[index] = { ...newData[index], carpetas_ids: carpetas_ids };
                                    newData[index] = { ...newData[index], carpetas: carpetas_contrato };
                                }
                            }
                        })
                        return { ...prevTabla, data: newData };
                    }); */
                }
                setGlobalLoading(false)
                setShowModalFavorito(false)
                toastBL.current.show({ severity: 'success', summary: 'Has eliminado el proceso de contratación de tus carpetas'/* , detail: 'Message Content' */, life: 3000 });
            })
            .catch(error => {
                console.log(error)
            })
    };

    const onHandleContrato = (_contrato) => {

        setContrato(_contrato)
        setTabla(prevTabla => {
            const index = prevTabla.data.findIndex(item => item.id === contrato.id);
            if (index === -1) {
                return { ...prevTabla };
            } else {
                let newData = [...prevTabla.data];
                newData[index] = _contrato;
                return { ...prevTabla, data: newData };
            }
        });
    }

    const addFavorito = (_contrato) => {
        setGlobalLoading(true)
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/contratos/add_favorito', {
            contrato: _contrato
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setContrato({ ...contrato, favorito: true })
                setTabla(prevTabla => {
                    const index = prevTabla.data.findIndex(item => item.id === contrato.id);
                    if (index === -1) {
                        return { ...prevTabla };
                    } else {
                        let newData = [...prevTabla.data];
                        newData[index] = { ...newData[index], favorito: true };
                        return { ...prevTabla, data: newData };
                    }
                });
                /* setTabla(prevTabla => {
                    const index = prevTabla.data.findIndex(item => item.id === contrato);
                    if (index === -1) {
                        return { ...prevTabla };
                    } else {
                        let newData = [...prevTabla.data];
                        newData[index] = { ...newData[index], favorito: true };
                        return { ...prevTabla, data: newData };
                    }
                }); */
                setGlobalLoading(false)
                toastBL.current.show({ severity: 'success', summary: 'Has agregado el proceso de contratación a tus favoritos.'/* , detail: 'Message Content' */, life: 3000 });
            })
            .catch(error => {
                console.log(error)
            })
    };

    const onHandleFolders = (folders) => {
        setFolders(folders)
    }

    const openNewTab = (url) => {
        window.open(url, "_blank");
    }

    const retunrPage = () => {
        delete query.type;
        Inertia.post(current_url, {
            query: query,
            page: currentPage,
            per_page: 30
        }, {
            headers: {
                'Authorization': `Bearer ${token.content}`
            }
        });

    }


    const descargarDocumento = (documento) => {
        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        fetch('/cliente/contratos/descargar-documentos', {
            method: 'POST',
            body: JSON.stringify({
                documento: documento // pass the documento object
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
            },
            responseType: 'blob'
        })
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                link.setAttribute('download', documento.namedoc);
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('There was a problem with the Fetch request:', error);
            });
    }

    const [dataModalDocumentos, setDataModalDocumentos] = useState([])
    const [showModalDocumentos, setShowModalDocumentos] = useState(false);
    const handleCloseModalDocumentos = () => {
        setDataModalDocumentos([])
        setShowModalDocumentos(false)
    };
    const handleShowModalDocumentos = (data) => {
        setDataModalDocumentos(data)
        setShowModalDocumentos(true)
    };
    return (
        <AuthenticatedLayout auth={auth} page={'detalle-contratos'} globalLoading={globalLoading}>
            <div className="content_not_blank_interno">
                <div id="bodycontenido" className="col contratos_row px-0">
                    <div className="detalle-contrato-padre" admin="" perfiles="258772,258771,258618,258619,258487" init-filter="">
                        <div className="contenedor-cabeceras" style={{ position: 'sticky', top: 48 + 'px' }}>
                            <div className="indicadores-detalle pt-3 row align-items-center mx-1">
                                <div className="col-4">
                                    <button type="button" className="btn volver btn-new-gray btnRadius" onClick={retunrPage}>
                                        <span className="icon-atras volver_icon"></span>

                                        {zona == "ALL" &&
                                            <span className="volver_text"> Regresar a todos los contratos</span>
                                        }
                                        {zona == "C" &&
                                            <span className="volver_text"> Regresar a mis carpetas</span>
                                        }
                                        {zona == "MP" &&
                                            <span className="volver_text"> Regresar a mis perfiles</span>
                                        }
                                        {zona == "F" &&
                                            <span className="volver_text"> Regresar a mis favoritos</span>
                                        }
                                        {zona == "S" &&
                                            <span className="volver_text"> Regresar a mis seguimientos</span>
                                        }
                                        {zona == "P" &&
                                            <span className="volver_text"> Regresar a papelera</span>
                                        }
                                    </button>
                                </div>
                                <div className="col-4">
                                    <p className="mb-0 h-100 text-center">
                                        <span className="contador-de-contratos">Contrato {indexTabla + tabla.from} de {tabla.total}</span>

                                        {indexTabla + tabla.from > 1 &&
                                            <button type="button" className="btn bg-transparent cambio-contrato" onClick={() => changeContrato(indexTabla - 1)}>
                                                <span className="icon-atras"></span>
                                            </button>
                                        }
                                        {(indexTabla + tabla.from) <= tabla.total - 1 &&
                                            <button type="button" className="btn bg-transparent cambio-contrato" onClick={() => changeContrato(indexTabla + 1)}>
                                                <span className="icon-Siguiente1"></span>
                                            </button>
                                        }
                                    </p>
                                </div>
                                <div id="contenido_acciones" className="col-4 pr-0 text-right iconos_acciones_contratos">
                                    {false &&
                                        <button id="botonActualizarManual" type="button" className="btn bg-transparent">
                                            <img src="https://col.licitaciones.info/img/detalle-contrato/svg/proceso-manual-cargar.svg" width="22" height="22" />
                                        </button>
                                    }

                                    {/* <button id="btnContratosFavorito" type="button" className="btn bg-transparent">
                                        <span className={`icon-Favorito-click ${contrato.favorito ? "favorito_active" : ""}`}></span>
                                    </button> */}


                                    {contrato.favorito ?
                                        <div className="custom-tooltip yellow" data-tooltip="Eliminar De Favoritos">
                                            <button id="btnContratosFavorito" type="button" className="btn bg-transparent" onClick={() => handleShowModalFavorito("modal_seleccion_carpeta", contrato)}>
                                                <span className="icon-Favorito-click favorito_active"></span>
                                            </button>
                                        </div>
                                        :
                                        <div className="custom-tooltip yellow" data-tooltip="Agregar A Favoritos">
                                            <button id="btnContratosFavorito" type="button" className="btn bg-transparent" onClick={() => addFavorito(contrato.id)}>
                                                <span className="icon-Favorito-click"></span>
                                            </button>
                                        </div>
                                    }

                                    <button id="boton_sin_seguimiento" type="button" className="btn bg-transparent" style={{ display: 'none' }}>
                                        <img src="https://col.licitaciones.info/img/detalle-contrato/svg/Sin-seguimiento.svg" width="22" height="22" />
                                    </button>

                                    <div className="custom-tooltip green" data-tooltip="Agregar A Seguimientos">
                                        <button id="btnContratosSeguimiento" type="button" className="btn bg-transparent" >
                                            <span className="icon-Seguimientos"></span>
                                        </button>
                                    </div>

                                    <div className="custom-tooltip blue" data-tooltip="Agregar A Carpeta(S)" onClick={() => handleShowModalCarpetas("modal_seleccion_carpeta", contrato)}>
                                        <button id="btnContratosCarpeta" type="button" className="btn bg-transparent">
                                            <span className="icon-Mis-carpetas">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </span>
                                        </button>
                                    </div>

                                    {false &&
                                        <button id="btnContratosDelete" type="button" className="btn bg-transparent">
                                            <span className="icon-Eliminar"></span>
                                        </button>
                                    }

                                    <div className="custom-tooltip dark" data-tooltip="Ir A La Fuente">
                                        <button onClick={() => openNewTab(contrato.link)} id="btnContratosExternal" type="button" className="btn bg-transparent">
                                            <span className="icon-Ir-a-la-fuente-click"></span>
                                        </button>
                                    </div>

                                    <div className="custom-tooltip purple" data-tooltip="Compartir">
                                        <button id="btnContratosCompartir" type="button" className="btn bg-transparent">
                                            <span className="icon-Compartir-click"></span>
                                        </button>
                                    </div>


                                    <div className="separador d-inline-block mx-2"></div>

                                    <div className="custom-tooltip gray agregar-nota" data-tooltip="Agregar Nota">
                                        <button type="button" id="boton_notas" className="btn bg-transparent" onClick={() => setSideBarNotasisOpen(true)}>
                                            <img src="https://col.licitaciones.info/img/detalle-contrato/svg/Nota.svg" alt="icono de notas" width="25" height="25" />
                                            <span className="cuenta-notas">{contrato.total_notas > 0 ? contrato.total_notas : ""}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="mensaje-secop-caido">
                                <div className="alert alert-warning text-center alerta-new-styles" style={{ display: 'none' }}><i aria-hidden="true"
                                    className="fa fa-exclamation-triangle"></i>
                                    <div className="content-info">
                                        <p className="mt-0 mb-0"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {false &&
                            <div id="actualizar-secops-manual">
                                <div className="alert alert-warning actualizar-secops-manual--para-actualizar">
                                    <i aria-hidden="true" className="fa fa-exclamation-triangle"></i>
                                    <div className="content-info">
                                        <p className="mt-0 mb-0">Este contrato se encuentra actualizado hasta: <b className="fechReload">2023-05-09 08:18:57</b> ¿Deseas actualizarlo?</p>
                                        <button type="button" id="btnActualizarDetalle" className="btn btn-warning mt-0">Actualizar</button>
                                    </div>
                                </div>
                                <div className="alert alert-success actualizar-secops-manual--actualizado">
                                    <i aria-hidden="true" className="icon-notification icon-Notificacin-verde"></i>
                                    <div className="content-info">
                                        <p className="mt-0 mb-0">Este contrato se encuentra actualizado hasta 2023-05-10 07:05:09</p>
                                    </div>
                                </div>
                            </div>
                        }

                        <div className="contenido mx-auto mb-5">
                            <div className="contenido_html">
                                <div role="tablist" id="info_detalle_full">
                                    <div id="infoContrato" className="mb-1 mt-3 bg-transparent border-0">
                                        <div className="card-body p-0">
                                            <div className="fases-borde">
                                                <div id="info-seccion-contrato" className="contenido-seccion bg-white px-5">
                                                    <div className="informacionPrincipal">
                                                        <div className="info-seccion__primer_fila"><span
                                                            className="icon_tipo_secop d-block text-right"><i id="iconFuente-8153689"
                                                                className="icono_fuente__list" style={{ background: 'rgb(0, 61, 201)' }}>MP</i>
                                                        </span> <span className="titulo-agrupacion d-block mb-3"><i
                                                            className="icon-Informacin-click"></i>
                                                                <p>Información general del proceso:</p>
                                                            </span>
                                                        </div>
                                                        <div className="campos-detalle-contrato info-borde">
                                                            <div className="contenido-detalle-contrato"><b className="d-block">Entidad:</b>
                                                                <p className="d-block info-contrato">{contrato.entidad_contratante}</p>
                                                            </div>
                                                            <div className="contenido-detalle-contrato"><b className="d-block">Modalidad:</b>
                                                                <p className="d-block info-contrato">{contrato.modalidad}</p>
                                                            </div>
                                                            <div className="contenido-detalle-contrato"><b className="d-block">Número:</b>
                                                                <p className="d-block info-contrato"></p>
                                                            </div>
                                                            <div className="contenido-detalle-contrato" general="[object Object]"><b
                                                                className="d-block">Estado del proceso:</b>
                                                                <p className="d-block info-contrato"><span className=""
                                                                    style={{ fontFamily: 'Nexa-bold', color: 'rgb(115, 201, 20)' }}>{contrato.estado_proceso}</span>
                                                                    <i className="fa fa-spinner fa-spin actualizando-contrato-icon"
                                                                        style={{ display: 'none' }}></i></p>
                                                            </div>
                                                            <div className="contenido-detalle-contrato"><b className="d-block">Objeto:</b>
                                                                <p className="d-block info-contrato">{contrato.objeto}</p>
                                                            </div>
                                                            <div className="contenido-detalle-contrato"><b className="d-block">Presupuesto
                                                                oficial:</b>
                                                                <p className="d-flex info-contrato align-items-center moneda_info"><span
                                                                    className="sin-min-width">$</span> <span
                                                                        style={{ paddingLeft: 5 + 'px' }}>{contrato.valor_texto}</span></p>
                                                            </div>
                                                            <div className="contenido-detalle-contrato"><b className="d-block">Localización:</b>
                                                                <p className="d-block info-contrato">{contrato.ubicacion}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div><span className="titulo-agrupacion d-block mb-3"><i className="icon-Codigo"></i>
                                                            <p>Clasificación:</p>
                                                        </span>
                                                        </div>
                                                        <div className="campos-detalle-contrato info-border">
                                                            <div className="contenido-detalle-contrato">
                                                                <b className="d-block">Clasificación UNSPSC por la entidad contratante:</b>
                                                                <p className="d-block info-contrato"></p>
                                                            </div>
                                                            <div className="contenido-detalle-contrato">
                                                                <b className="d-block">Clasificación Licitaciones.info:</b>
                                                                <p className="d-block info-contrato"></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div children=""><span className="titulo-agrupacion d-block mb-3"><i
                                                        className="icon-Condiciones"></i>
                                                        <p>Fuentes relacionadas:</p>
                                                    </span>
                                                        <div className="campos-detalle-contrato  info-borde">
                                                            <div className="contenido-detalle-contrato fuente-new">
                                                                <div className="new-primero">
                                                                    <img src="https://col.licitaciones.info/img/detalle-contrato/svg/Fuente-detalle.svg" width="25px" height="25px" alt="" className="d-block icon-new" />
                                                                    <b className="d-block">Fuente 1:</b>
                                                                </div>
                                                                <p id="movil-link-detalle" className="info-contrato">
                                                                    <a className="d-inline-block new-family text-azul">link</a>
                                                                    <button className="btn btn-new-green btnRadius d-inline-block  boton_link_fuentes text-verde">
                                                                        <i className="icon-Copiar-enlace"></i>
                                                                        Copiar link
                                                                    </button>
                                                                </p>
                                                            </div>
                                                            <div className="contenido-detalle-contrato fuente-new">
                                                                <div className="new-primero">
                                                                    <img src="https://col.licitaciones.info/img/detalle-contrato/svg/Fuente-detalle.svg" width="25px" height="25px" alt="" className="d-block icon-new" />
                                                                    <b className="d-block">Fuente para usuarios registrados en Secop2:</b>
                                                                </div>
                                                                <p id="movil-link-detalle" className="info-contrato">
                                                                    <a className="d-inline-block new-family text-azul">link</a>
                                                                    <button className="btn btn-new-green btnRadius d-inline-block  boton_link_fuentes text-verde">
                                                                        <i className="icon-Copiar-enlace"></i>Copiar link
                                                                    </button>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div children="">
                                                        <div><span className="titulo-agrupacion d-block mb-3"><i className="icon-Doc-zip"></i>
                                                            <p>Documentos del proceso:</p>
                                                        </span>
                                                        </div>
                                                        <div className="campos-detalle-contrato">
                                                            <div className="contenido-detalle-contrato descargas-new">
                                                                <div className="new-documentos"><img
                                                                    src="https://col.licitaciones.info/img/detalle-contrato/svg/Detalle-zip.svg"
                                                                    width="25px" height="25px" alt="" className="d-block icon-new" /> <b
                                                                        className="d-block">Descargar todos los documentos:</b>
                                                                </div>
                                                                <p className="d-block info-contrato boton-lateral">
                                                                    <span className="d-inline-block new-family">Este proceso contiene <span className="text-azul">{contrato.documentos.length}</span> documentos.</span>
                                                                    <button className="btn btn-new-gray btnRadius d-inline-block descargar-ver-docs boton-lateral_posicion" onClick={() => handleShowModalDocumentos(contrato)}>
                                                                        <span className="icon-Siguiente1"></span> <span>Ver docs</span>
                                                                    </button>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-1 mt-3 bg-transparent border-0 card-corrector">
                                        <div data-section="Detalle de la planeación" className="px-5 bg-white contenido-seccion">
                                            <div className="contenido-detalle-contrato"><span className="titulo-agrupacion "><i
                                                className="icon-Pliego"></i>
                                                <p>Detalle de la planeación:</p>
                                            </span>
                                            </div>
                                            <div className="card-body">
                                                <div className="campos-detalle-contrato">
                                                    <div className="contenido-detalle-contrato">
                                                        <b className="string">Dirección de ejecución del contrato:</b>
                                                        <p className="d-block info-contrato"></p>
                                                    </div>
                                                    <div className="contenido-detalle-contrato">
                                                        <b className="string">Visita al lugar de ejecución:</b>
                                                        <p className="d-block info-contrato"></p>
                                                    </div>
                                                    <div className="contenido-detalle-contrato">
                                                        <b className="string">Tipo de contrato:</b>
                                                        <p className="d-block info-contrato"></p>
                                                    </div>
                                                    <div className="contenido-detalle-contrato">
                                                        <b className="string">Plazo del contrato:</b>
                                                        <p className="d-block info-contrato"></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-section="Cronograma" className="px-5 bg-white contenido-seccion">
                                            <div className="contenido-detalle-contrato"><span className="titulo-agrupacion "><i
                                                className="icon-Cronograma"></i>
                                                <p>Cronograma:</p>
                                            </span>
                                            </div>
                                            <div className="card-body">
                                                <div className="campos-detalle-contrato">
                                                    <div className="contenido-detalle-lista">
                                                        <div>
                                                            <div className="contenido-detalle-contrato">
                                                                <b className="d-block"> Fecha de publicación:</b>
                                                                <div className="d-block info-contrato">
                                                                    <p className="d-block">00/00/0000 <span className="separador-fecha icon-Menos1"></span> 00:00 pm</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="contenido-detalle-contrato">
                                                                <b className="d-block">Fecha de Firma del Contrato:</b>
                                                                <div className="d-block info-contrato">
                                                                    <p className="d-block">00/00/0000 <span className="separador-fecha icon-Menos1"></span> 00:00 pm</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="contenido-detalle-contrato"><b className="d-block">Fecha de inicio de
                                                                ejecución del contrato:</b>
                                                                <div className="d-block info-contrato">
                                                                    <p className="d-block">00/00/0000 <span className="separador-fecha icon-Menos1"></span> 00:00 pm</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="contenido-detalle-contrato">
                                                                <b className="d-block">Plazo de ejecución del contrato:</b>
                                                                <div className="d-block info-contrato">
                                                                    <p className="d-block">00/00/0000 <span className="separador-fecha icon-Menos1"></span> 00:00 pm</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-section="Configuración financiera" className="px-5 bg-white contenido-seccion">
                                            <div className="contenido-detalle-contrato">
                                                <span className="titulo-agrupacion ">
                                                    <i className="icon-Configuracion-financiera"></i>
                                                    <p>Configuración financiera:</p>
                                                </span>
                                            </div>
                                            <div className="card-body">
                                                <div className="campos-detalle-contrato">
                                                    <div className="contenido-detalle-contrato">
                                                        <b className="string">Solicitud de garantías:</b>
                                                        <p className="d-block info-contrato"></p>
                                                    </div>
                                                    <div className="contenido-detalle-contrato">
                                                        <b className="string">¿Plan de pagos?:</b>
                                                        <p className="d-block info-contrato"></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {documentos.length > 0 &&
                                            <div data-section="Documentos del proceso" className="px-5 bg-white contenido-seccion">
                                                <div className="contenido-detalle-contrato"><span className="titulo-agrupacion "><i
                                                    className="icon-Documentos"></i>
                                                    <p>Documentos del proceso:</p>
                                                </span>
                                                </div>
                                                <div className="card-body">
                                                    <div className="campos-detalle-contrato">
                                                        <div className="contenido-detalle-contrato"><b style={{ display: 'none' }}>Documentos:</b>
                                                        </div>
                                                        <div className="component-table-dinamyc">
                                                            <div className="table-responsive">
                                                                <table className="mx-auto table-campo-detalle  text-center">
                                                                    <tbody>
                                                                        <tr className="table-header-detalle-contrato">
                                                                            <th>
                                                                                <div>Tipo

                                                                                </div>
                                                                            </th>
                                                                            <th>
                                                                                <div>Nombre

                                                                                </div>
                                                                            </th>
                                                                            <th>
                                                                                <div>Descargar

                                                                                </div>
                                                                            </th>
                                                                        </tr>
                                                                        {documentos.map((documento, index) => (
                                                                            <tr className={`table-body-detalle-contrato ${index % 2 != 0 ? "bg-gris-claro" : ""}`} key={`documento_${index}`}>
                                                                                <td colSpan="1">
                                                                                    {['docx', 'doc'].includes(documento.extension.toLowerCase()) &&
                                                                                        <img src={`/public/images/extensiones/docx.svg`} className="table_icono_tipo" />
                                                                                    }
                                                                                    {documento.extension.toLowerCase() == "pdf" &&
                                                                                        <img src={`/public/images/extensiones/pdf.svg`} className="table_icono_tipo" />
                                                                                    }
                                                                                    {documento.extension.toLowerCase() == "xlsx" &&
                                                                                        <img src={`/public/images/extensiones/xlsx.svg`} className="table_icono_tipo" />
                                                                                    }
                                                                                    {documento.extension.toLowerCase() == "zip" &&
                                                                                        <img src={`/public/images/extensiones/zip.svg`} className="table_icono_tipo" />
                                                                                    }
                                                                                    {documento.extension.toLowerCase() == "rar" &&
                                                                                        <img src={`/public/images/extensiones/rar.svg`} className="table_icono_tipo" />
                                                                                    }
                                                                                </td>
                                                                                <td colSpan="1">{documento.namedoc}</td>
                                                                                <td colSpan="1">
                                                                                    <a onClick={() => descargarDocumento(documento)} target="_blank"><i className="icon-Descargas-click"></i>Descargar</a>
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        <div data-section="Mensajes y observaciones" className="px-5 bg-white contenido-seccion">
                                            <div className="contenido-detalle-contrato"><span className="titulo-agrupacion "><i
                                                className="icon-Datos-principales"></i>
                                                <p>Mensajes y observaciones:</p>
                                            </span>
                                            </div>
                                            <div className="card-body">
                                                <div className="campos-detalle-contrato">
                                                    <div className="contenido-detalle-contrato"><b style={{ display: 'none' }}>Mensajes públicos:</b>
                                                    </div>
                                                    <div className="component-table-dinamyc">
                                                        <div className="table-responsive">
                                                            <table className="mx-auto table-campo-detalle  text-center">
                                                                <tbody>
                                                                    <tr className="table-header-detalle-contrato">
                                                                        <th>
                                                                            <div>Tipo

                                                                            </div>
                                                                        </th>
                                                                        <th>
                                                                            <div>Referencia

                                                                            </div>
                                                                        </th>
                                                                        <th>
                                                                            <div>Asunto

                                                                            </div>
                                                                        </th>
                                                                        <th>
                                                                            <div>Fecha

                                                                            </div>
                                                                        </th>
                                                                        <th>
                                                                            <div>Más Información

                                                                            </div>
                                                                        </th>
                                                                        <th>
                                                                            <div>Detalle de la modificación

                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1">Avisos</td>
                                                                        <td colSpan="1">CO1.REQ.4446425</td>
                                                                        <td colSpan="1">Publicación modificación</td>
                                                                        <td colSpan="1">2023-05-07 15:48:00</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Tendering/PublicMessageDisplay/Index?id=4216183&amp;contractNoticeUniqueIdentifier=&amp;prevCtxUrl=%2fPublic%2fTendering%2fOpportunityDetail%2fIndex%3fPerspective%3dDefault&amp;showDownloadDocument=False&amp;asPopupView=true"
                                                                            target="_blank"><i className="icon-Informacin-click"></i>
                                                                            Detalle</a></td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Tendering/RequestAmendmentView/CommunityView?docUniqueIdentifier=CO1.AMD.2160033&amp;communityFetch=True&amp;asPopupView=true"
                                                                            target="_blank"><i className="icon-Informacin-click"></i>
                                                                            Detalles de la enmienda</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1">Avisos</td>
                                                                        <td colSpan="1">CO1.REQ.4446425</td>
                                                                        <td colSpan="1">Publicación modificación</td>
                                                                        <td colSpan="1">2023-05-03 20:04:00</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Tendering/PublicMessageDisplay/Index?id=4172261&amp;contractNoticeUniqueIdentifier=&amp;prevCtxUrl=%2fPublic%2fTendering%2fOpportunityDetail%2fIndex%3fPerspective%3dDefault&amp;showDownloadDocument=False&amp;asPopupView=true"
                                                                            target="_blank"><i className="icon-Informacin-click"></i>
                                                                            Detalle</a></td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Tendering/RequestAmendmentView/CommunityView?docUniqueIdentifier=CO1.AMD.2146303&amp;communityFetch=True&amp;asPopupView=true"
                                                                            target="_blank"><i className="icon-Informacin-click"></i>
                                                                            Detalles de la enmienda</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalFavorito
                showModal={showModalFavorito}
                modalId={'modal_confirm_delete'}
                handleCloseModal={handleCloseModalFavorito}
                title={'¿Deseas <span className="text_color_red">eliminar</span> el/los proceso(s) de tus favoritos?'}
                contrato={contrato}
                globalLoading={handleGlobalLoading}
                onHandleContrato={onHandleContrato}
            />
            <ModalCarpetas
                showModal={showModalCarpetas}
                modalId={'modal_seleccion_carpeta'}
                handleCloseModal={handleCloseModalCarpetas}
                title={'¿Deseas <span className="text_color_red">eliminar</span> el/los proceso(s) de tus favoritos?'}
                globalLoading={handleGlobalLoading}
                onHandleContrato={onHandleContrato}
                folders={folders}
                onHandleFolders={onHandleFolders}
                contrato={contrato}
            />
            <ModalDocumentos showModal={showModalDocumentos} handleCloseModal={handleCloseModalDocumentos} modalId="modal_documentos" data={dataModalDocumentos}></ModalDocumentos>
            <SideBarNotas
                contrato={contrato}
                zona={zona}
                isOpen={sideBarNotasisOpen}
                onHide={onHideSideBarNotas}
                onChangeSideBarTotalNotas={onChangeSideBarTotalNotas}
                globalLoading={handleGlobalLoading}
            />
            <Toast ref={toastBL} position="bottom-left" />
        </AuthenticatedLayout >
    );
};

export default Detalle;
