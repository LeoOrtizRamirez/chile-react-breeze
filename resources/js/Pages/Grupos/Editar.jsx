import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
/* import "./Crear.css"; */
/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";

import ActividadEconomica from "@/Components/ActividadEconomica";
/*Toast*/

/* HEADER*/
import { Head, useForm } from "@inertiajs/inertia-react";
import Header from "@/Components/Header/HeaderLite";
/* HEADER*/

import Modal from 'react-bootstrap/Modal';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './Crear.css'

const Editar = ({
    auth,
    actividades_economicas,
    tiposcompras,
    localizaciones,
    actividades_economicas_actuales,
    tiposcompras_actuales,
    localizaciones_actuales,
    perfil,
    pasos_seleccionados,
    paso_actual
}) => {

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastIcon, setToastIcon] = useState("");
    const [sectores, setSectores] = useState(actividades_economicas);

    const [checkedsActividadesEconomicas, setCheckedsActividadesEconomicas] = useState(actividades_economicas_actuales)
    const [checkedsLocalizaciones, setCheckedsLocalizaciones] = useState(localizaciones_actuales)
    const [checkedsTiposCompras, setCheckedsTiposCompras] = useState(tiposcompras_actuales)

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

    console.log("paso_actual", paso_actual)
    const [container, setContainer] = useState(paso_actual);
    const [iconosPerfiles, setIconosPerfiles] = useState(pasos_seleccionados);

    const changeContent = (id) => {
        if (id == 2 && checkedsActividadesEconomicas.length == 0) {
            setToastMessage("Debes seleccionar mínimo una actividad económica");
            setToastIcon("icon-error");
            setShowToast(true);
        } else {
            setContainer(id)
            setIconosPerfiles([...iconosPerfiles, id])
        }
    }

    const refCuantiaHasta = useRef("")
    const [cuantiaHasta, setCuantiaHasta] = useState(perfil.limite_superior_cuantia);
    const [cuantiaDesde, setCuantiaDesde] = useState(perfil.limite_inferior_cuantia);
    const [toggleSwitchCuantiaDesde, setToggleSwitchCuantiaDesde] = useState(false);
    const [switchSinPresupuestoAsignado, setSwitchSinPresupuestoAsignado] = useState(perfil.sin_presupuesto == 1 ? true : false);

    const formatValue = (e, type) => {
        var number = e.target.value;
        number = clearValue(number);

        if (type == "desde") {
            changeToggleSwitchCuantiaDesde(number)
            setCuantiaDesde("$" + new Intl.NumberFormat().format(number));
        } else {
            if (number == 0) {
                setCuantiaHasta('')
                refCuantiaHasta.current.setAttribute("placeholder", "Sin limite superior")
            } else {
                setCuantiaHasta("$" + new Intl.NumberFormat().format(number))
            }
        }
    };

    const changeToggleSwitchCuantiaDesde = (value) => {
        if (value == 0) {
            setToggleSwitchCuantiaDesde(false);
        } else {
            setToggleSwitchCuantiaDesde(true);
        }
    }

    const clearValue = (value) => {
        value = value.replace(" ", "");
        value = value.replace("$", "");
        value = value.replace(",", "");
        value = value.replace(".", "");
        if (value == "") {
            value = 0
        }
        return parseInt(value);
    };

    const [switchHistorico, setSwitchHistorico] = useState(perfil.historico == null ? false : true);
    const [switchEmail, setSwitchEmail] = useState(perfil.envio_alertas == 1 ? true : false);
    const refInputFechaHistorico = useRef("")
    const btnCambiarFecha = useRef("")

    /*     useEffect(() => {
            if (refInputFechaHistorico?.current?.value != null) {
                refInputFechaHistorico.current.value = restarDias(new Date(), 91).toISOString().split('T')[0]
            }
        }, [changeContent]) */

    const restarDias = (fecha, dias) => {
        fecha.setDate(fecha.getDate() - dias);
        return fecha;
    }

    const onHandleSwitchHistorico = (e) => {
        if (e.target.checked) {
            btnCambiarFecha.current.style.visibility = 'visible'
            refInputFechaHistorico.current.classList.remove('disabled')
            setFechaHistorico(dateCalendar.toISOString().split('T')[0])
        } else {
            btnCambiarFecha.current.style.visibility = 'hidden'
            refInputFechaHistorico.current.classList.add('disabled')
            setFechaHistorico('Sin Historico')
        }
    }

    const [inputNombrePerfil, setInputNombrePerfil] = useState(perfil.nombre_filtro)
    const [inputDescripcionPerfil, setInputDescripcionPerfil] = useState(perfil.descripcion_filtro)
    const [fechaHistorico, setFechaHistorico] = useState(perfil.historico == null ? 'Sin Historico' : perfil.historico)

    const handleClickOutside = (event) => {
        if (inputNombrePerfil.current && !inputNombrePerfil.current.contains(event.target)) {
            if (inputNombrePerfil.current.value == "") {
                inputNombrePerfil.current.classList.add('is-invalid')
            } else {
                inputNombrePerfil.current.classList.remove('is-invalid')
            }
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    const Guardar = () => {
        var payload = {
            'perfil': perfil.id,
            'actividades_economicas': checkedsActividadesEconomicas,
            'tipos_compras': checkedsTiposCompras,
            'localizaciones': checkedsLocalizaciones,
            'limite_inferior_cuantia': cuantiaDesde,
            'limite_superior_cuantia': cuantiaHasta,
            'nombre_filtro': inputNombrePerfil,
            'descripcion_filtro': inputDescripcionPerfil,
            'sin_presupuesto': switchSinPresupuestoAsignado,
            'historico_contratacion': fechaHistorico,
            'envio_alertas': switchEmail,
            'imagen_filtro': iconCheckSelected,
        };
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/grupo/update', {
            data: payload
        }, {
            headers: {
                'Authorization': `Bearer ${token.content}`
            }
        })
            .then(response => {
                console.log(response)
                window.location.href = "/cliente/grupo?create=success";
            })
            .catch(error => {
                console.log('error')
            });
    };
    /*Calendar*/
    const [showCalendar, setShowCalendar] = useState(false);
    const handleCloseCalendar = () => setShowCalendar(false);
    const handleShowCalendar = () => setShowCalendar(true);
    const [dateCalendar, setDateCalendar] = useState(
        restarDias(new Date(), 91)
    );
    useEffect(() => {
        setFechaHistorico(dateCalendar.toISOString().split('T')[0])
    }, [dateCalendar])
    /*Calendar */


    useEffect(() => {
        if(perfil.historico == null){
            setFechaHistorico('Sin Historico')
        }else{
            setFechaHistorico(perfil.historico)
            setDateCalendar(restarDias(new Date(perfil.historico), 0))
        }
    }, [])
    
    /*Filter */
    const [showFilter, setShowFilter] = useState(false);
    const handleCloseFilter = () => setShowFilter(false);
    const handleShowFilter = () => setShowFilter(true);

    const [iconCheck, setIconCheck] = useState("Por defecto")
    const [iconCheckTemporal, setIconCheckTemporal] = useState("")
    const [iconCheckSelected, setIconCheckSelected] = useState(perfil.imagen_filtro)

    const changeImgFilter = (icon, image) => {
        setIconCheck(icon)
        setIconCheckTemporal(image)
    }

    const setImgFilter = () => {
        setIconCheckSelected(iconCheckTemporal)
        handleCloseFilter()
    }
    /*Filter */
    console.log(perfil)
    return (
        <>
            <AuthenticatedLayout auth={auth} page={'perfiles'}>
                <div className="content_blank_interno margin_left_layout">
                    <div class="col">
                        <h2 class="name_seccion_app">Crear perfil de negocio</h2>
                    </div>
                    <div id="container-grupo">
                        <div id="perfil-user">
                            <a href="/cliente/grupo" id="btn-cancelar-global-perfiles" class="btn btn-new-danger btnRadius">Cancelar</a>
                            <div className="perfil-guias">
                                <ul>
                                    <li>
                                        <div className={`perfil-guias__indicador ${container == 1 ? "perfil-guias__indicador--activo" : ""}`} onClick={() => changeContent(1)}>
                                            <i id="icon1" className={`icon-Paso-1-click ${container == 1 ? "c-activo-iconos" : ""}`}> </i>{" "}
                                            <span id="span1" className={`${container == 1 ? "c-activo-texto-iconos" : ""}`}>Actividad económica</span>
                                        </div>
                                    </li>
                                    {iconosPerfiles.includes(2) && (
                                        <li>
                                            <div className={`perfil-guias__indicador ${container == 2 ? "perfil-guias__indicador--activo" : ""}`} onClick={() => changeContent(2)}>
                                                <i id="icon2" className={`icon-Paso-2-click ${container == 2 ? "c-activo-iconos" : ""}`} ></i>{" "}
                                                <span id="span2" className={`${container == 2 ? "c-activo-texto-iconos" : ""}`}>Tipo de compra</span>
                                            </div>
                                        </li>
                                    )}
                                    {iconosPerfiles.includes(3) && (
                                        <li>
                                            <div className={`perfil-guias__indicador ${container == 3 ? "perfil-guias__indicador--activo" : ""}`} onClick={() => changeContent(3)}>
                                                <i id="icon3" className={`icon-Paso-3-click ${container == 3 ? "c-activo-iconos" : ""}`}></i>{" "}
                                                <span id="span3" className={`${container == 3 ? "c-activo-texto-iconos" : ""}`}>Localizaciones</span>
                                            </div>
                                        </li>
                                    )}
                                    {iconosPerfiles.includes(4) && (
                                        <li>
                                            <div className={`perfil-guias__indicador ${container == 4 ? "perfil-guias__indicador--activo" : ""}`} onClick={() => changeContent(4)}>
                                                <i id="icon4" className={`icon-Paso-4-click ${container == 4 ? "c-activo-iconos" : ""}`}></i>{" "}
                                                <span id="span4" className={`${container == 4 ? "c-activo-texto-iconos" : ""}`}>Rango de Cuantía</span>
                                            </div>
                                        </li>
                                    )}
                                    {iconosPerfiles.includes(5) && (
                                        <li>
                                            <div className={`perfil-guias__indicador ${container == 5 ? "perfil-guias__indicador--activo" : ""}`} onClick={() => changeContent(5)}>
                                                <i id="icon5" className={`icon-Paso-5-click ${container == 5 ? "c-activo-iconos" : ""}`}></i>{" "}
                                                <span id="span5" className={`${container == 5 ? "c-activo-texto-iconos" : ""}`}>Preferencias</span>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className="perfil-contenido">
                                <div className="tree_categorias tree_1">
                                    <div className="tree_categorias__busqueda mb-3 mb-md-4">


                                        <>{/* Paso 1*/}
                                            {container == 1 && (
                                                <ActividadEconomica
                                                    subcategorias={sectores}
                                                    nameBuscador={"Busca por actividad económica o UNSPSC"}
                                                    onHandleSectores={onHandleSectores}
                                                    tipo={"ActividadEconomica"}
                                                    checkeds={checkedsActividadesEconomicas}
                                                />
                                            )}
                                        </>
                                        <> {/* Paso 2 TIPO DE COMPRAS*/}
                                            {container == 2 && (
                                                <ActividadEconomica
                                                    subcategorias={tiposcompras}
                                                    nameBuscador={"Buscar Tipo de Compra"}
                                                    onHandleSectores={onHandleSectores}
                                                    tipo={"TiposCompras"}
                                                    checkeds={checkedsTiposCompras}
                                                />
                                            )}
                                        </>

                                        <>{/* Paso 3 LOCALIZACIONES */}
                                            {container == 3 && (
                                                <ActividadEconomica
                                                    subcategorias={localizaciones}
                                                    nameBuscador={"Buscar Localización"}
                                                    onHandleSectores={onHandleSectores}
                                                    tipo={"Localizaciones"}
                                                    checkeds={checkedsLocalizaciones}
                                                />
                                            )}
                                        </>

                                        <>{/* Paso 4 Cuantia*/}
                                            {container == 4 && (
                                                <div className="perfil-cuantias">
                                                    <div
                                                        id="campos-cuantias"
                                                        className="justify-content-center pt-2 pb-5 py-md-5 row"
                                                    >
                                                        <div className="col-10 col-sm-8 col-lg-4 col-md-5">
                                                            <div className="form-group mb-5 mb-md-1 campos-cuantias__form">
                                                                <span className="icon-Cuantia campos-cuantias__icon">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                </span>
                                                                <label>
                                                                    Cuantía desde:
                                                                </label>
                                                                <input
                                                                    value={cuantiaDesde}
                                                                    onChange={
                                                                        (e) => formatValue(e, 'desde')
                                                                    }
                                                                    type="text"
                                                                    id="cuantia_desde"
                                                                    name="cuantia_desde"
                                                                    placeholder="$"
                                                                    className="form-control inputs_form"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-10 col-sm-8 col-lg-4 col-md-5">
                                                            <div className="form-group campos-cuantias__form">
                                                                <span className="icon-Cuantia-2 campos-cuantias__icon">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                    <span className="path4"></span>
                                                                </span>
                                                                <label id="descripcion">
                                                                    Cuantía hasta:
                                                                </label>
                                                                <input
                                                                    ref={refCuantiaHasta}
                                                                    value={cuantiaHasta}
                                                                    onChange={
                                                                        (e) => formatValue(e, 'hasta')
                                                                    }
                                                                    type="text"
                                                                    id="cuantia_hasta"
                                                                    name="cuantia_hasta"
                                                                    placeholder="Sin limite superior"
                                                                    className="form-control inputs_form"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {toggleSwitchCuantiaDesde && (
                                                        <div className="align-items-center col-11 col-lg-8 col-md-9 col-sm-10 justify-content-between campos-cuantias__block row">
                                                            <div className="col-8 p-0">
                                                                <p>
                                                                    ¿Deseas incluir
                                                                    contratos{" "}
                                                                    <span className="text_color">
                                                                        sin presupuesto
                                                                        asignado
                                                                    </span>{" "}
                                                                    o con cuantía de{" "}
                                                                    <span className="text_color">
                                                                        $0
                                                                    </span>{" "}
                                                                    en este perfil?
                                                                </p>
                                                            </div>
                                                            <div className="col-3 text-center">
                                                                <label className="switch">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={
                                                                            switchSinPresupuestoAsignado
                                                                        }
                                                                        onClick={() =>
                                                                            setSwitchSinPresupuestoAsignado(
                                                                                !switchSinPresupuestoAsignado
                                                                            )
                                                                        }
                                                                    />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </>

                                        <> {/* Paso 5*/}

                                            {container == 5 && (
                                                <div className="perfil-preferencia">
                                                    <div className="row pt-3 justify-content-center pb-lg-4">
                                                        <div className="col-xs-12 col-sm-12 col-xl-6 px-4 contenedor-general row">
                                                            <div className="col-3 col-md-3 col-xl-3">
                                                                <div className="imagen">

                                                                    <img src={iconCheckSelected} alt="Avatar" className="imagen__avatar" />
                                                                    <button className="imagen__cambiar-avatar-button" onClick={handleShowFilter}>
                                                                        <span className="icon-Editar"></span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="col-9 col-md-9 col-xl-9">
                                                                <div className="perfil-preferencia__form1">
                                                                    <label id="nombre" className="perfil-preferencia__labels">Dale un nombre a tu perfil:</label>
                                                                    <input
                                                                        value={inputNombrePerfil}
                                                                        onChange={e => setInputNombrePerfil(e.target.value)}
                                                                        type="text"
                                                                        name="nombre"
                                                                        className="form-control inputs_form padd-peq mb-0"
                                                                        required
                                                                    />
                                                                    <div className="invalid-feedback mb-3">El campo nombre perfil es obligatorio.</div>
                                                                    <label id="descripcion" className="perfil-preferencia__labels">Descripción del perfil (opcional):</label>
                                                                    <textarea
                                                                        value={inputDescripcionPerfil}
                                                                        onChange={e => setInputDescripcionPerfil(e.target.value)}
                                                                        type="text"
                                                                        name="descripcion"
                                                                        rows="3"
                                                                        className="form-control inputs_form"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-12 col-xl-6 px-4 contenedor-general__derecha">
                                                            <div className="perfil-preferencia__historico pb-4 pb-lg-0 px-3 px-md-0">
                                                                <div className="align-items-center d-flex justify-content-between perfil-preferencia__historico-row mb-3">
                                                                    <div className="perfil-preferencia__historico-row__icon d-flex">
                                                                        <img src="/public/images/Web/icon-Historico.svg" alt="" width={30} />
                                                                        <label>Histórico de procesos de contratación:</label>
                                                                    </div>
                                                                    <div className="perfil-preferencia__historico-row__toggleb">
                                                                        <label className="switch">
                                                                            <input
                                                                                type="checkbox"
                                                                                checked={
                                                                                    switchHistorico
                                                                                }
                                                                                onClick={() =>
                                                                                    setSwitchHistorico(
                                                                                        !switchHistorico
                                                                                    )
                                                                                }
                                                                                onChange={onHandleSwitchHistorico}
                                                                            />
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="align-items-center d-flex perfil-preferencia__historico-row mb-3">
                                                                    <div className="perfil-preferencia__historico-row__span">
                                                                        <span className="perfil-preferencia__fecha-historico from-label">Desde: </span>
                                                                    </div>
                                                                    <div className="perfil-preferencia__historico-row__input d-flex">
                                                                        <input disabled ref={refInputFechaHistorico} value={fechaHistorico} name='fecha_historico' className="perfil-preferencia__fecha-historico_input" />
                                                                        <button
                                                                            ref={btnCambiarFecha}
                                                                            className={`btn btnRadius btn-new-blue button_change_date`}
                                                                            onClick={handleShowCalendar}
                                                                            style={{visibility: perfil.historico == null ? 'hidden' : 'visible',}}
                                                                            >
                                                                            <img src="/public/images/Web/icon-Cambiar.svg" alt="icon-Cambiar" className="margin-right-5" /> Cambiar fecha
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="perfil-preferencia__form1">
                                                                <div className="align-items-center d-flex justify-content-between perfil-preferencia__historico-row mb-3">
                                                                    <div className="perfil-preferencia__historico-row__icon d-flex">
                                                                        <img src="/public/images/Web/icon-Email-noti.svg" alt="" width={30} />
                                                                        <label>Notificaciones a tu email:</label>
                                                                    </div>
                                                                    <div className="perfil-preferencia__historico-row__toggleb">
                                                                        <label className="switch">
                                                                            <input
                                                                                className="Activado"
                                                                                type="checkbox"
                                                                                checked={
                                                                                    switchEmail
                                                                                }
                                                                                onClick={() =>
                                                                                    setSwitchEmail(
                                                                                        !switchEmail
                                                                                    )
                                                                                }
                                                                            />
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="alineamiento-label d-flex pb-3 pb-lg-0 px-3 px-md-0">
                                                                    <p className="mr5 text-justify">Te notificaríamos en tu <span className="text_color">correo</span> cuando encontremos una oportunidad que coincida con este perfil.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>

                                    </div>
                                </div>
                            </div>

                            {/* BOTONES NEXT */}
                            <div className="perfil-bottons-footer position-relative text-center mt-4">
                                {/* BOTONES RETURN */}

                                <>{/* Volver ActividadesEconomicas */}
                                    {container == 2 && (
                                        <a
                                            onClick={() => changeContent(1)}
                                            className="btn btnRadius btn-new-blue"
                                            id="btn-return-tc"
                                        >
                                            <span className="bloque__info-header-cuenta-text--modifier">
                                                Volver
                                            </span>
                                        </a>
                                    )}
                                </>

                                <>{/* Volver TipoCompra */}
                                    {container == 3 && (
                                        <a
                                            onClick={() => changeContent(2)}
                                            className="btn btnRadius btn-new-blue"
                                            id="btn-return-lc"
                                        >
                                            <span className="bloque__info-header-cuenta-text--modifier">
                                                Volver
                                            </span>
                                        </a>
                                    )}
                                </>

                                <>{/* Volver Localizaciones */}
                                    {container == 4 && (
                                        <a
                                            onClick={() => changeContent(3)}
                                            className="btn btnRadius btn-new-blue"
                                            id="btn-return-cu"
                                        >
                                            <span className="bloque__info-header-cuenta-text--modifier">
                                                Volver
                                            </span>
                                        </a>
                                    )}
                                </>

                                <>{/* Volver Cuantia */}
                                    {container == 5 && (
                                        <a
                                            onClick={() => changeContent(4)}
                                            className="btn btnRadius btn-new-blue"
                                            id="btn-return-te"
                                        >
                                            <span className="bloque__info-header-cuenta-text--modifier">
                                                Volver
                                            </span>
                                        </a>
                                    )}
                                </>

                                <>{/* Next tipoCompra */}
                                    {container == 1 && (
                                        <a
                                            onClick={() => changeContent(2)}
                                            className="btn btnRadius btn-new-blue"
                                            id="btn-next-ac"
                                        >
                                            <span className="bloque__info-header-cuenta-text--modifier">
                                                Siguiente
                                            </span>
                                        </a>
                                    )}
                                </>
                                <>{/* Next Localizaciones */}
                                    {container == 2 && (
                                        <a
                                            onClick={() => changeContent(3)}
                                            className="btn btnRadius btn-new-blue"
                                            id="btn-next-tc"
                                        >
                                            <span className="bloque__info-header-cuenta-text--modifier">
                                                Siguiente
                                            </span>
                                        </a>
                                    )}
                                </>
                                <>{/* Next Cuantia */}
                                    {container == 3 && (
                                        <a
                                            onClick={() => changeContent(4)}
                                            className="btn btnRadius btn-new-blue"
                                            id="btn-next-lc"
                                        >
                                            <span className="bloque__info-header-cuenta-text--modifier">
                                                Siguiente
                                            </span>
                                        </a>
                                    )}
                                </>
                                <>{/* Next Terminar */}
                                    {container == 4 && (
                                        <a
                                            onClick={() => changeContent(5)}
                                            className="btn btnRadius btn-new-blue"
                                            id="btn-next-cu"
                                        >
                                            <span className="bloque__info-header-cuenta-text--modifier">
                                                Siguiente
                                            </span>
                                        </a>
                                    )}
                                </>
                                <>{/* GUARDAR*/}
                                    {container == 5 && (
                                        <a
                                            onClick={Guardar}
                                            className="btn btnRadius btn-new-blue"
                                            id="btn-next-cu"
                                        >
                                            <span className="bloque__info-header-cuenta-text--modifier">
                                                Guardar
                                            </span>
                                        </a>
                                    )}
                                </>
                            </div>
                        </div>
                        <Modal
                            show={showCalendar}
                            onHide={handleCloseCalendar}
                            backdrop="static"
                            keyboard={false}
                            size="lg"
                            id="calendar"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="modal-calendar-title">Selecciona la fecha de inicio para el histórico</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Calendar
                                    onChange={setDateCalendar}
                                    value={dateCalendar}
                                    selectRange={false}
                                    maxDate={new Date()}
                                />
                                <div id="resultados" className="row">
                                    <div className="col text-center">
                                        <span>Desde :</span> <span>
                                            {fechaHistorico}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5 text-center">
                                    <button type="button" className="btn-new-green btnRadius text-center bg-transparent px-5" onClick={handleCloseCalendar}>Filtrar</button>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>

                            </Modal.Footer>
                        </Modal>
                        <Modal
                            show={showFilter}
                            onHide={handleCloseFilter}
                            backdrop="static"
                            keyboard={false}
                            size="lg"
                            id="filter"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="modal-filter-title">Selecciona la imagen de tu perfil de negocio</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="justify-content-center row">
                                    <div className="perfil-imagenes__element-img">
                                        <div className="perfil-imagenes__img position-relative" onClick={() => changeImgFilter("Por defecto", "/public/images/perfiles/perfil-invisible.svg")}>
                                            <img src="/public/images/perfiles/perfil-invisible.svg" alt="Por defecto img" />
                                            {iconCheck == "Por defecto" &&
                                                <img src="/public/images/Web/icon-Check.svg" alt="icon-Check" className="icon-Check" />
                                            }
                                        </div>
                                    </div>
                                    <div className="perfil-imagenes__element-img">
                                        <div className="perfil-imagenes__img position-relative" onClick={() => changeImgFilter("Perfil amarillo", "/public/images/perfiles/perfil-amarillo.svg")}>
                                            <img src="/public/images/perfiles/perfil-amarillo.svg" alt="Perfil amarillo img" />
                                            {iconCheck == "Perfil amarillo" &&
                                                <img src="/public/images/Web/icon-Check.svg" alt="icon-Check" className="icon-Check" />
                                            }
                                        </div>
                                    </div>
                                    <div className="perfil-imagenes__element-img">
                                        <div className="perfil-imagenes__img position-relative" onClick={() => changeImgFilter("Perfil azul", "/public/images/perfiles/perfil-azul.svg")}>
                                            <img src="/public/images/perfiles/perfil-azul.svg" alt="Perfil azul img" />
                                            {iconCheck == "Perfil azul" &&
                                                <img src="/public/images/Web/icon-Check.svg" alt="icon-Check" className="icon-Check" />
                                            }
                                        </div>
                                    </div>
                                    <div className="perfil-imagenes__element-img">
                                        <div className="perfil-imagenes__img position-relative" onClick={() => changeImgFilter("Perfil gris", "/public/images/perfiles/perfil-gris.svg")}>
                                            <img src="/public/images/perfiles/perfil-gris.svg" alt="Perfil gris img" />
                                            {iconCheck == "Perfil gris" &&
                                                <img src="/public/images/Web/icon-Check.svg" alt="icon-Check" className="icon-Check" />
                                            }
                                        </div>
                                    </div>
                                    <div className="perfil-imagenes__element-img">
                                        <div className="perfil-imagenes__img position-relative" onClick={() => changeImgFilter("Perfil morado", "/public/images/perfiles/perfil-morado.svg")}>
                                            <img src="/public/images/perfiles/perfil-morado.svg" alt="Perfil morado img" />
                                            {iconCheck == "Perfil morado" &&
                                                <img src="/public/images/Web/icon-Check.svg" alt="icon-Check" className="icon-Check" />
                                            }
                                        </div>
                                    </div>
                                    <div className="perfil-imagenes__element-img">
                                        <div className="perfil-imagenes__img position-relative" onClick={() => changeImgFilter("Perfil negro", "/public/images/perfiles/perfil-negro.svg")}>
                                            <img src="/public/images/perfiles/perfil-negro.svg" alt="Perfil negro img" />
                                            {iconCheck == "Perfil negro" &&
                                                <img src="/public/images/Web/icon-Check.svg" alt="icon-Check" className="icon-Check" />
                                            }
                                        </div>
                                    </div>
                                    <div className="perfil-imagenes__element-img">
                                        <div className="perfil-imagenes__img position-relative" onClick={() => changeImgFilter("Perfil rojo", "/public/images/perfiles/perfil-rojo.svg")}>
                                            <img src="/public/images/perfiles/perfil-rojo.svg" alt="Perfil rojo img" />
                                            {iconCheck == "Perfil rojo" &&
                                                <img src="/public/images/Web/icon-Check.svg" alt="icon-Check" className="icon-Check" />
                                            }
                                        </div>
                                    </div>
                                    <div className="perfil-imagenes__element-img">
                                        <div className="perfil-imagenes__img position-relative" onClick={() => changeImgFilter("Perfil rosado", "/public/images/perfiles/perfil-rosado.svg")}>
                                            <img src="/public/images/perfiles/perfil-rosado.svg" alt="Perfil rosado img" />
                                            {iconCheck == "Perfil rosado" &&
                                                <img src="/public/images/Web/icon-Check.svg" alt="icon-Check" className="icon-Check" />
                                            }
                                        </div>
                                    </div>
                                    <div className="perfil-imagenes__element-img">
                                        <div className="perfil-imagenes__img position-relative" onClick={() => changeImgFilter("Perfil verde", "/public/images/perfiles/perfil-verde.svg")}>
                                            <img src="/public/images/perfiles/perfil-verde.svg" alt="Perfil verde img" />
                                            {iconCheck == "Perfil verde" &&
                                                <img src="/public/images/Web/icon-Check.svg" alt="icon-Check" className="icon-Check" />
                                            }
                                        </div>
                                    </div>
                                    <div className="perfil-imagenes__element-img">
                                        <div className="perfil-imagenes__img position-relative" onClick={() => changeImgFilter("Perfil violeta", "/public/images/perfiles/perfil-violeta.svg")}>
                                            <img src="/public/images/perfiles/perfil-violeta.svg" alt="Perfil violeta img" />
                                            {iconCheck == "Perfil violeta" &&
                                                <img src="/public/images/Web/icon-Check.svg" alt="icon-Check" className="icon-Check" />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer class="modal-footer buttons-footer">
                                <button class="btnRadius btn-new-gray" onClick={handleCloseFilter}>
                                    Atrás
                                </button>
                                <button class="btnRadius btn-new-green" onClick={setImgFilter}>
                                    Seleccionar
                                </button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <ToastContainer position="bottom-start">
                    <Toast
                        onClose={() => setShowToast(false)}
                        show={showToast}
                        delay={3000}
                        autohide
                    >
                        <div
                            className={`notification-toast ${toastIcon == "icon-error" ? "error" : "success"
                                }`}
                        >
                            <span
                                className={`toast-icon ${toastIcon == "icon-error"
                                    ? "toast-danger"
                                    : "toast-success"
                                    }`}
                            >
                                <span className={toastIcon}></span>
                            </span>
                            <p className="title">{toastMessage}</p>
                            <button
                                type="button"
                                className="icon-close m-auto"
                                onClick={() => setShowToast(false)}
                            />
                        </div>
                    </Toast>
                </ToastContainer>
            </AuthenticatedLayout>
        </>
    );
};

export default Editar;