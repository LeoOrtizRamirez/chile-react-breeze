import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "./Detalle.css";
import SideBarNotas from "@/Components/SideBarNotas";

const Detalle = ({ auth, data, total_notas, zona = "ALL" }) => {

    const [totalNotas, setTotalNotas] = useState(total_notas)
    const [globalLoading, setGlobalLoading] = useState(false)
    const handleGlobalLoading = (loading) => {
        setGlobalLoading(loading)
    }
    const [contrato, setContrato] = useState(data)
    console.log("contratos", contrato)
    var token = document.querySelector('meta[name="csrf-token"]')
    useEffect(() => {
        axios.post('/contrato-visatado', {
            contrato: 1
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const [sideBarNotasisOpen, setSideBarNotasisOpen] = useState(false)

    const onHideSideBarNotas = () => {
        console.log("onHide")
        setSideBarNotasisOpen(false)
    }

    const onChangeSideBarTotalNotas = (total) => {
        setTotalNotas(total)
    }

    return (
        <AuthenticatedLayout auth={auth} page={'detalle-contratos'} globalLoading={globalLoading}>
            <div className="content_not_blank_interno">
                <div id="bodycontenido" className="col contratos_row px-0">
                    <div className="detalle-contrato-padre" admin="" perfiles="258772,258771,258618,258619,258487" init-filter="">
                        <div className="contenedor-cabeceras" style={{ position: 'sticky', top: 48 + 'px' }}>
                            <div className="indicadores-detalle pt-3 row align-items-center mx-1">
                                <div className="col-4"><button type="button" className="btn volver btn-new-gray btnRadius" ><span
                                    className="icon-atras volver_icon"></span><span className="volver_text"> Regresar a mis
                                        perfiles</span></button>
                                </div>
                                <div className="col-4">
                                    <p className="mb-0 h-100 text-center"><span className="contador-de-contratos">
                                        Contrato 10 de 19
                                    </span> <button type="button" className="btn bg-transparent cambio-contrato"><span
                                        className="icon-atras"></span></button> <button type="button"
                                            className="btn bg-transparent cambio-contrato"><span className="icon-Siguiente1"></span></button></p>
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
                                            <button id="btnContratosFavorito" type="button" class="btn bg-transparent">
                                                <span class="icon-Favorito-click favorito_active"></span>
                                            </button>
                                        </div>
                                        :
                                        <div className="custom-tooltip yellow" contrato-tooltip="Agregar A Favoritos">
                                            <button id="btnContratosFavorito" type="button" class="btn bg-transparent">
                                                <span class="icon-Favorito-click favorito_active"></span>
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

                                    <div className="custom-tooltip blue" data-tooltip="Agregar A Carpeta(S)" onClick={() => handleShowModal("modal_seleccion_carpeta", data)}>
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
                                        <button id="btnContratosExternal" type="button" className="btn bg-transparent">
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
                                            <span className="cuenta-notas">{totalNotas > 0 ? totalNotas : ""}</span>
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
                                <div class="alert alert-success actualizar-secops-manual--actualizado">
                                    <i aria-hidden="true" class="icon-notification icon-Notificacin-verde"></i>
                                    <div class="content-info">
                                        <p class="mt-0 mb-0">Este contrato se encuentra actualizado hasta 2023-05-10 07:05:09</p>
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
                                                                <div className="new-primero"><img
                                                                    src="https://col.licitaciones.info/img/detalle-contrato/svg/Fuente-detalle.svg"
                                                                    width="25px" height="25px" alt="" className="d-block icon-new" /> <b
                                                                        className="d-block">Fuente 1:</b>
                                                                </div>
                                                                <p id="movil-link-detalle" className="info-contrato"><a
                                                                    className="d-inline-block new-family text-azul">https://community.secop.gov.co/Public/Tendering/OpportunityDetail/Index?noticeUID=CO1.NTC.4349255&amp;isFromPublicArea=True&amp;isModal=true&amp;asPopupView=true&amp;currentLanguage=es&amp;currentCulture=es</a>
                                                                    <button
                                                                        className="btn btn-new-green btnRadius d-inline-block  boton_link_fuentes text-verde"><i
                                                                            className="icon-Copiar-enlace"></i>
                                                                        Copiar link
                                                                    </button></p>
                                                            </div>
                                                            <div className="contenido-detalle-contrato fuente-new">
                                                                <div className="new-primero"><img
                                                                    src="https://col.licitaciones.info/img/detalle-contrato/svg/Fuente-detalle.svg"
                                                                    width="25px" height="25px" alt="" className="d-block icon-new" /> <b
                                                                        className="d-block">Fuente para usuarios registrados en Secop2:</b>
                                                                </div>
                                                                <p id="movil-link-detalle" className="info-contrato"><a
                                                                    className="d-inline-block new-family text-azul">https://www.secop.gov.co/CO1BusinessLine/Tendering/ContractNoticeView/Index?prevCtxLbl=Buscar+procesos&amp;prevCtxUrl=https%3a%2f%2fwww.secop.gov.co%3a443%2fCO1BusinessLine%2fTendering%2fContractNoticeManagement%2fIndex&amp;notice=CO1.NTC.4349255</a>
                                                                    <button
                                                                        className="btn btn-new-green btnRadius d-inline-block  boton_link_fuentes text-verde"><i
                                                                            className="icon-Copiar-enlace"></i>
                                                                        Copiar link
                                                                    </button></p>
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
                                                                <p className="d-block info-contrato boton-lateral"><span
                                                                    className="d-inline-block new-family">Este proceso contiene <span
                                                                        className="text-azul">25</span> documentos.</span>  <button
                                                                            className="btn btn-new-gray btnRadius d-inline-block descargar-ver-docs boton-lateral_posicion"><span
                                                                                className="icon-Siguiente1"></span> <span>Ver docs</span></button>
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
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">1. Estudios Previos</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395462"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">2. Aviso Convocatoria</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395463"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">4. CDP</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395464"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">3. Convocatoria Publica</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395465"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Anexo 1- Anexo Tecnico CCE-EICP-IDI-01 Licitacion
                                                                        </td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395466"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/xlsm.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Anexo 2- Cronograma CCE-EICP-IDI-02 Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395467"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Anexo 3 - Glosario - CCE-EICP-IDI-03 - Licitacion
                                                                        </td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395468"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Anexo 4- Pacto de Transparencia CCE-EICP-IDI-04
                                                                            Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395469"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Anexo 5- Minuta del Contrato CCE-EICP-IDI-05
                                                                            Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395470"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/docx.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Formato 1- Carta de Presentaci?n de la Oferta
                                                                            CCE-EICP-FM-02 Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395471"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/docx.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Formato 2 - Conformacion de Proponente Plural
                                                                            CCE-EICP-FM-03 Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395472"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/xlsx.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Formato 3- Experiencia CCE-EICP-FM-04 Licitacion
                                                                        </td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395473"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/docx.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Formato 4- Capacidad financiera y organizacional
                                                                            extranjeros CCE-EICP-FM-05 Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395474"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/xlsx.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Formato 5 - Capacidad Residual CCE-EICP-FM-06
                                                                            Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395475"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/docx.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Formato 6- Pago de Seguridad Social y Aportes
                                                                            Legales CCE-EICP-FM-07 Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395476"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/docx.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Formato 7- Factor de calidad CCE-EICP-FM-08
                                                                            Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395477"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/docx.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Formato 8- Vinculacion de personas con discapacidad
                                                                            CCE-EICP-FM-09 Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395478"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/docx.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Formato 11 Autorizacion para el tratamiento de datos
                                                                            personales CCE-EICP-FM-77 - Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395479"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/xlsx.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Formulario No. 1</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395480"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Matriz 1 - Indicadores Financieros y
                                                                            Organizacionales CCE-EICP-FM-12 Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395481"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Matriz 2 - Riesgos CCE-EICP-FM-13 Licitacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=295395482"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">5. Respuesta Observaciones</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=296456767"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">ACTA DE CIERRE</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=297466020"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato bg-gris-claro">
                                                                        <td colSpan="1"><img src="/images/extensiones/pdf.svg"
                                                                            className="table_icono_tipo" /></td>
                                                                        <td colSpan="1">Informe de evaluacion</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=297466021"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                    <tr className="table-body-detalle-contrato">
                                                                        <td colSpan="1">
                                                                            <img src="/images/extensiones/xlsx.svg" className="table_icono_tipo" />
                                                                        </td>
                                                                        <td colSpan="1">2 REQUISITOS HABILITANTES</td>
                                                                        <td colSpan="1"><a
                                                                            href="https://community.secop.gov.co/Public/Archive/RetrieveFile/Index?DocumentId=297466022"
                                                                            target="_blank"><i className="icon-Descargas-click"></i>
                                                                            Descargar</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
            <SideBarNotas contrato={contrato} zona={zona} isOpen={sideBarNotasisOpen} onHide={onHideSideBarNotas} onChangeSideBarTotalNotas={onChangeSideBarTotalNotas} globalLoading={handleGlobalLoading}></SideBarNotas>
        </AuthenticatedLayout >
    );
};

export default Detalle;
