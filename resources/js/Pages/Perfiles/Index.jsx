import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";
import "../../../css/font-unicolor.css";

import "../../../css/font-web.css";

import ActividadEconomica from "@/Components/ActividadEconomica";
/*Toast*/

/* HEADER*/
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ApplicationLogoLici from "@/Components/ApplicationLogoLici";
import ModalLoginSesion from "@/Components/Modals/ModalLoginSesion";
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


    let [total_array_checks_actividades, setTotal_array_checks_actividades] = useState([]);
    let [total_array_checks_tipo_compras, setTotal_array_checks_tipo_compra] = useState([]);
    let [total_array_checks_localizaciones, setTotal_array_checks_localizaciones] = useState([]);

    let [copia_actividades, setCopia_actividades] = useState([]);


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

    const changeContent = (id, type) =>{
        if(type == "next"){
            var last_id = id - 1
        }else{
            var last_id = id + 1
        }
        let current_icon = document.querySelector(`#icon${id}`)
        let current_span = document.querySelector(`#span${id}`)
        let last_icon = document.querySelector(`#icon${last_id}`)
        let last_span = document.querySelector(`#span${last_id}`)

        last_icon.classList.remove('c-activo-iconos');
        last_span.classList.remove('c-activo-texto-iconos');
        current_icon.classList.add('c-activo-iconos');
        current_span.classList.add('c-activo-texto-iconos');

        setContainer(id)
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

            <> {/*   header */}
                <div className="contenido_headerLite--margin-top">
                    <Navbar
                        collapseOnSelect
                        expand="lg"
                        bg="white"
                        variant="dark"
                        className="container-headerPublica"
                    >
                        <Container>
                            <Navbar.Brand href="#home">
                                <a href="/" className="flex items-center">
                                    <ApplicationLogoLici />
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link className="menu-header"></Nav.Link>
                                    <Nav.Link className="menu-header"></Nav.Link>
                                    <Nav.Link className="menu-header"></Nav.Link>
                                    <Nav.Link className="menu-header"></Nav.Link>
                                </Nav>
                                <Nav>
                                    <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
                                        <>
                                            {/* <Nav.Link> */}
                                            <li>
                                                <a
                                                    className="flex  items-center ml-4 text-iniciar"
                                                    onClick={handleShowLS}
                                                >
                                                    <span className="mr-2 icon-login"></span>
                                                    Iniciar sesión
                                                </a>
                                                <ModalLoginSesion
                                                    showLS={showLS}
                                                    handleCloseLS={
                                                        handleCloseLS
                                                    }
                                                ></ModalLoginSesion>
                                            </li>
                                            {/* </Nav.Link> */}

                                            <hr className="division-header header-lite"></hr>

                                            <Nav.Link
                                                href="/contacto"
                                                className="flex  items-center ml-4 text-contactanos"
                                            >
                                                <span className="mr-2 icon-contacto"></span>
                                                Contáctanos
                                            </Nav.Link>
                                        </>

                                    </ul>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
            {/*   header */}

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
                    {/* <h2 className="name_section_app">Crear perfil de negocio</h2>
                    <div className="perfil-guias">
                        <ul>
                            <li>
                                <div className="perfil-guias__indicador perfil-guias__indicador--activo">
                                    <i className="icon-Paso-1-click"></i> <span>Actividad económica</span>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                    <h2 className="perfiles-titulos crear">
                        <span className="c-verde">Crea</span> tu primer perfil
                        de negocio
                    </h2>
                    <div className="container mt-4">
                        <div className="tree_categorias tree_1">
                            <div className="tree_categorias__busqueda mb-3 mb-md-4">
                                {/* <div className="mx-auto">
                                    <input
                                        type="text"
                                        placeholder="Busca por actividad económica o UNSPSC"
                                        autocomplete="off"
                                        className="form-control"
                                        onKeyDown={
                                            inputSearchActividadEconomica
                                        }
                                    />
                                    <i className="icon-Cancelar" style="display: none;"></i>
                                    <button type="button" className="icon-Buscar-click"></button>
                                </div> */}

                                <div className="iconos-perfiles">
                                    <i id="icon1" className="icon-Paso-1-click c-activo-iconos"> </i>{" "}
                                    <span id="span1" className="c-activo-texto-iconos">Actividad económica</span>

                                    <i id="icon2" className="icon-Paso-2-click"></i>{" "}
                                    <span id="span2" className="">Tipo de compra</span>

                                    <i id="icon3" className="icon-Paso-3-click"  ></i>{" "}
                                    <span id="span3" className="">Localizaciones</span>

                                    <i id="icon4" className="icon-Paso-4-click" ></i>{" "}
                                    <span id="span4" className="">Rango de Cuantía</span>

                                    <i id="icon5" className="icon-Paso-5-click" ></i>{" "}
                                    <span id="span5" className="">Paso 5</span>
                                </div>
                                <div className="mx-60 mt-30 d-flex">
                                    {/* {contenedorBuscadorActividades && (
                                        <>
                                            <button
                                                button
                                                type="button"
                                                className="icon-Buscar-click"
                                            ></button>
                                            <input
                                                type="text"
                                                placeholder="Busca por actividad económica o UNSPSC"
                                                autoComplete="off"
                                                className="form-control busqueda-input"
                                                onKeyDown={
                                                    inputSearchActividadEconomica
                                                }
                                            />
                                        </>
                                    )} */}

                                    {/*  {contenedorBuscadorTipoCompras && (
                                        <>
                                            <input
                                                type="text"
                                                placeholder="Buscar tipo de compra"
                                                autoComplete="off"
                                                className="form-control m-auto"
                                                onKeyDown={
                                                    inputSearchTipoCompra
                                                }
                                            />
                                        </>
                                    )} */}
                                    {/* 
                                    {contenedorBuscadorLocalizaciones && (
                                        <>
                                            <input
                                                type="text"
                                                placeholder="Buscar localizacion"
                                                autoComplete="off"
                                                className="form-control m-auto"
                                                onKeyDown={
                                                    inputSearchLocalizaiones
                                                }
                                            />
                                        </>
                                    )} */}

                                </div>
                                <br></br>

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
                                    onClick={() => changeContent(1, 'previous')}
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
                                    onClick={() => changeContent(2, 'previous')}
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
                                    onClick={() => changeContent(3, 'previous')}
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
                                    onClick={() => changeContent(4, 'previous')}
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
                                    onClick={() => changeContent(2, 'next')}
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
                                    onClick={() => changeContent(3, 'next')}
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
                                    onClick={() => changeContent(4, 'next')}
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
                                    onClick={() => changeContent(5, 'next')}
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