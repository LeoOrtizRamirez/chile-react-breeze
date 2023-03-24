import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
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

const Index = ({
    auth,
    actividades_economicas,
    tiposcompras,
    localizaciones,
}) => {

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastIcon, setToastIcon] = useState("");
    const [sectores, setSectores] = useState(actividades_economicas);

    const [checkedsActividadesEconomicas, setCheckedsActividadesEconomicas] = useState([])
    const [checkedsLocalizaciones, setCheckedsLocalizaciones] = useState([])
    const [checkedsTiposCompras, setCheckedsTiposCompras] = useState([])

    const onHandleSectores = (data, tipo) => {
        switch (tipo) {
            case "ActividadEconomica":
                if (data.length > 0) {
                    setCheckedsActividadesEconomicas(data)
                }
                break;
            case "Localizaciones":
                if (data.length > 0) {
                    setCheckedsLocalizaciones(data)
                }
                break;
            case "TiposCompras":
                if (data.length > 0) {
                    setCheckedsTiposCompras(data)
                }
                break;
        }
    }

    const [container, setContainer] = useState(1);
    const [iconosPerfiles, setIconosPerfiles] = useState([]);

    const changeContent = (id) => {
        setContainer(id)
        setIconosPerfiles([...iconosPerfiles, id])
    }

    const refCuantiaHasta = useRef("")
    const [cuantiaHasta, setCuantiaHasta] = useState("");
    const [cuantiaDesde, setCuantiaDesde] = useState("$0");
    const [toggleSwitchCuantiaDesde, setToggleSwitchCuantiaDesde] = useState(false);
    const [switchSinPresupuestoAsignado, setSwitchSinPresupuestoAsignado] = useState(true);

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

    const [switchHistorico, setSwitchHistorico] = useState(true);
    const [switchEmail, setSwitchEmail] = useState(true);
    const inputFechaHistorico = useRef("")
    const btnCambiarFecha = useRef("")

/*     useEffect(() => {
        if (inputFechaHistorico?.current?.value != null) {
            inputFechaHistorico.current.value = restarDias(new Date(), 91).toISOString().split('T')[0]
        }
    }, [changeContent]) */

    const restarDias = (fecha, dias) => {
        fecha.setDate(fecha.getDate() - dias);
        return fecha;
    }

    const onHandleSwitchHistorico = (e) => {
        if (e.target.checked) {
            btnCambiarFecha.current.style.display = 'block'
            inputFechaHistorico.current.classList.remove('disabled')
            setFechaHistorico(date.toISOString().split('T')[0])
        } else {
            btnCambiarFecha.current.style.display = 'none'
            inputFechaHistorico.current.classList.add('disabled')
            setFechaHistorico('Sin Historico')
        }
    }

    const [inputNombrePerfil, setInputNombrePerfil] = useState("")
    const [inputDescripcionPerfil, setInputDescripcionPerfil] = useState("")
    const [fechaHistorico, setFechaHistorico] = useState("")

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
            'actividades_economicas': checkedsActividadesEconomicas,
            'tipos_compras': checkedsTiposCompras,
            'localizaciones': checkedsLocalizaciones,
            'limite_inferior_cuantia': cuantiaDesde,
            'limite_superior_cuantia': cuantiaHasta,
            'nombre_filtro': inputNombrePerfil,
            'descripcion_filtro': inputDescripcionPerfil,
            'sin_presupuesto': switchSinPresupuestoAsignado,
            'historico_contratacion': switchHistorico,
            'envio_alertas': switchEmail,
        };
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/grupo-filtro-usuarios/store', {
            data: payload
        }, {
            headers: {
                'Authorization': `Bearer ${token.content}`
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log('error')
            });
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [date, setDate] = useState(
        restarDias(new Date(), 91)
    );

    useEffect(()=>{
        setFechaHistorico(date.toISOString().split('T')[0])
    },[date])

    return (
        <>
            <Head title="Perfiles" />
            <Header user={auth}></Header>

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
            <div id="perfiles">
                <div className="contenedor-planes">
                    <div className="bg-white overflow-auto w-full text-center margen-superior custom-scroll">
                        <h2 className="perfiles-titulos crear">
                            <span className="c-verde">Crea</span> tu primer perfil
                            de negocio
                        </h2>
                        <div className="container mt-4">
                            <div className="tree_categorias tree_1">
                                <div className="tree_categorias__busqueda mb-3 mb-md-4">
                                    <div className="iconos-perfiles">
                                        <div className="perfil-guias__indicador" onClick={() => changeContent(1)}>
                                            <i id="icon1" className={`icon-Paso-1-click ${container == 1 ? "c-activo-iconos" : ""}`}> </i>{" "}
                                            <span id="span1" className={`${container == 1 ? "c-activo-texto-iconos" : ""}`}>Actividad económica</span>
                                        </div>
                                        {iconosPerfiles.includes(2) && (
                                            <div className={`perfil-guias__indicador ${container == 2 ? "perfil-guias__indicador--activo" : ""}`} onClick={() => changeContent(2)}>
                                                <i id="icon2" className={`icon-Paso-2-click ${container == 2 ? "c-activo-iconos" : ""}`} ></i>{" "}
                                                <span id="span2" className={`${container == 2 ? "c-activo-texto-iconos" : ""}`}>Tipo de compra</span>
                                            </div>
                                        )}
                                        {iconosPerfiles.includes(3) && (
                                            <div className={`perfil-guias__indicador ${container == 3 ? "perfil-guias__indicador--activo" : ""}`} onClick={() => changeContent(3)}>
                                                <i id="icon3" className={`icon-Paso-3-click ${container == 3 ? "c-activo-iconos" : ""}`}></i>{" "}
                                                <span id="span3" className={`${container == 3 ? "c-activo-texto-iconos" : ""}`}>Localizaciones</span>
                                            </div>
                                        )}
                                        {iconosPerfiles.includes(4) && (
                                            <div className={`perfil-guias__indicador ${container == 4 ? "perfil-guias__indicador--activo" : ""}`} onClick={() => changeContent(4)}>
                                                <i id="icon4" className={`icon-Paso-4-click ${container == 4 ? "c-activo-iconos" : ""}`}></i>{" "}
                                                <span id="span4" className={`${container == 4 ? "c-activo-texto-iconos" : ""}`}>Rango de Cuantía</span>
                                            </div>
                                        )}
                                        {iconosPerfiles.includes(5) && (
                                            <div className={`perfil-guias__indicador ${container == 5 ? "perfil-guias__indicador--activo" : ""}`} onClick={() => changeContent(5)}>
                                                <i id="icon5" className={`icon-Paso-5-click ${container == 5 ? "c-activo-iconos" : ""}`}></i>{" "}
                                                <span id="span5" className={`${container == 5 ? "c-activo-texto-iconos" : ""}`}>Paso 5</span>
                                            </div>
                                        )}
                                    </div>

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
                                                            <div className="imagen" style={{ display: "none" }}>
                                                                <img src="/public/images/perfil-invisible.svg" alt="Avatar" className="imagen__avatar" />
                                                                <button className="imagen__cambiar-avatar-button">
                                                                    <span className="icon-Editar"></span>
                                                                    <img src="/public/images/Web/icon-Editar.svg" alt="Editar" className="" />
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
                                                                    <input disabled ref={inputFechaHistorico} value={fechaHistorico} name='fecha_historico' className="perfil-preferencia__fecha-historico_input" />
                                                                    <button
                                                                        ref={btnCambiarFecha}
                                                                        className="btn btnRadius btn-new-blue button_change_date"
                                                                        onClick={handleShow}>
                                                                        <i className="icon-Cambiar"></i> Cambiar fecha
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
                </div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                    id="calendar"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="modal-perfiles-title">Selecciona la fecha de inicio para el histórico</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Calendar
                            onChange={setDate}
                            value={date}
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
                            <button type="button" className="btn-new-green btnRadius text-center bg-transparent px-5" onClick={handleClose}>Filtrar</button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};

export default Index;