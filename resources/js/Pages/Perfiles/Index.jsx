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


    const Guardar = () => {
        alert("Guardando...");
    };


    const [cuantiaHasta, setCuantiaHasta] = useState(0);
    const [toggleSwitchCuantia, setToggleSwitchCuantia] = useState(false);
    const [switchCuantia, setSwitchCuantia] = useState(true);

    const formatValue = (e) => {
        var number = e.target.value;
        number = clearValue(number);
        setCuantiaHasta("$ " + new Intl.NumberFormat().format(number));
    };

    const clearValue = (value) => {
        value = value.replace(" ", "");
        value = value.replace("$", "");
        value = value.replace(",", "");
        value = value.replace(".", "");

        if (value == "") {
            value = 0;
            setToggleSwitchCuantia(false);
        } else {
            setToggleSwitchCuantia(true);
        }

        return parseInt(value);
    };

    /* header */
    const [showLS, setShowLS] = useState(false);
    const handleCloseLS = () => setShowLS(false);
    const handleShowLS = () => setShowLS(true);

    /* header */

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
                                                            value={cuantiaHasta}
                                                            onChange={
                                                                formatValue
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
                                                            value={cuantiaHasta}
                                                            onChange={
                                                                formatValue
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
                                            {toggleSwitchCuantia && (
                                                <div class="align-items-center col-11 col-lg-8 col-md-9 col-sm-10 justify-content-between campos-cuantias__block row">
                                                    <div class="col-8 p-0">
                                                        <p>
                                                            ¿Deseas incluir
                                                            contratos{" "}
                                                            <span class="text_color">
                                                                sin presupuesto
                                                                asignado
                                                            </span>{" "}
                                                            o con cuantía de{" "}
                                                            <span class="text_color">
                                                                $0
                                                            </span>{" "}
                                                            en este perfil?
                                                        </p>
                                                    </div>
                                                    <div class="col-3 text-center">
                                                        <label class="switch">
                                                            <input
                                                                type="checkbox"
                                                                checked={
                                                                    switchCuantia
                                                                }
                                                                onClick={() =>
                                                                    setSwitchCuantia(
                                                                        !switchCuantia
                                                                    )
                                                                }
                                                            />
                                                            <span class="slider round"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </>

                                <> {/* Paso 5*/}

                                    {container == 5 && (
                                        <p>Paso 5</p>
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
        </>
    );
};

export default Index;