import React, { useState, useRef, useEffect } from "react";
import ApplicationLogoLici from "@/Components/ApplicationLogoLici";
import ChileLogo from "@/Components/ChileLogo";
import "../../css/estilos-header-publica.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import "./script.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useForm } from "@inertiajs/inertia-react";
import ModalLoginSesion from "@/Components/Modals/ModalLoginSesion";

export default function HeaderPublica(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
        url_modal: props.url,
    });

    const [userMenu, setUserMenu] = useState(false);

    const logout = () => {
        event.preventDefault();
        var token = document.querySelector('meta[name="csrf-token"]').content;
        document.getElementById("token").value = token;
        document.getElementById("logout-form").submit();
    };

    const [showLS, setShowLS] = useState(false);
    const handleShowLS = () => setShowLS(true);
    const handleCloseLS = () => setShowLS(false);

    // const [showLS, setShowLS] = useState(props.setShowLS);
    // useEffect(() => {
    //     setShowLS(props.setShowLS);

    //     setData({
    //         email: data.email,
    //         password: data.password,
    //         remember: data.remember,
    //         url_modal: props.url,
    //     });
    // }, [props.setShowLS]);

    // const handleShowLS = () => setShowLS(true);
    // const handleCloseLS = () => {
    //     setShowLS(false);
    //     setData({
    //         email: "",
    //         password: "",
    //     });
    //     setInputClass("form-input-section__container-input");
    //     setValidForm(true);
    //     props.closeModal(false);
    // };

    return (
        <>
            <div className="contenido_headerPublica--margin-top">
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
                                <a
                                    href="/funcionalidades"
                                    className="menu-header nav-header-publica"
                                >
                                    Funcionalidades
                                </a>
                                <a
                                    href="/chile/planes"
                                    className="menu-header nav-header-publica"
                                >
                                    Planes
                                </a>
                                <a
                                    href="/nosotros"
                                    className="menu-header nav-header-publica"
                                >
                                    Nosotros
                                </a>
                                <a
                                    href="/contacto"
                                    className="menu-header nav-header-publica"
                                >
                                    Contáctanos
                                </a>
                            </Nav>

                            <Nav>
                                <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
                                    {props?.user?.auth?.user ? (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setUserMenu(!userMenu)
                                                }
                                            >
                                                <div className="dropdown content">
                                                    <button className="content__button">
                                                        <span className="content__photo">
                                                            <span className="content__photo--modifier icon-datos"></span>
                                                        </span>
                                                        <span className="content__hola">
                                                            ¡Hola! &nbsp;
                                                        </span>
                                                        <span className="content__name">
                                                            {props.user.auth
                                                                .user.name
                                                                ? props.user
                                                                      .auth.user
                                                                      .name
                                                                : "Dashboard"}
                                                        </span>
                                                        <span
                                                            className={`content__down ${
                                                                userMenu
                                                                    ? "icon-up"
                                                                    : "icon-down"
                                                            }`}
                                                        ></span>
                                                    </button>
                                                </div>
                                            </button>
                                            {userMenu && (
                                                <ul
                                                    role="menu"
                                                    tabIndex="-1"
                                                    className="dropdown-menu dropdown-user-list show"
                                                    aria-labelledby="__BVID__38__BV_toggle_"
                                                >
                                                    <div className="contenido">
                                                        <span className="angle_dropdown"></span>
                                                        <li
                                                            role="presentation"
                                                            className="contenido__contratos"
                                                        >
                                                            <a
                                                                href={route(
                                                                    "dashboard"
                                                                )}
                                                                className="td-none c-unset m-unset"
                                                            >
                                                                <button
                                                                    role="menuitem"
                                                                    type="button"
                                                                    className="submenu-item"
                                                                >
                                                                    <span className="contenido__contratos-icon icon-Contratos"></span>
                                                                    <span className="contenido__contratos-text">
                                                                        Ir a
                                                                        contratos
                                                                    </span>
                                                                    <span className="contenido__contratos-right icon-down"></span>
                                                                </button>
                                                            </a>
                                                        </li>
                                                        <hr className="linea__divisoria" />
                                                        <li
                                                            role="presentation"
                                                            className="contenido__logout"
                                                        >
                                                            <a
                                                                href={route(
                                                                    "logout"
                                                                )}
                                                                onClick={logout}
                                                                className="td-none c-unset m-unset"
                                                            >
                                                                <button
                                                                    role="menuitem"
                                                                    type="submit"
                                                                    className="submenu-item"
                                                                >
                                                                    <span className="contenido__logout-icon icon-logout"></span>
                                                                    <span className="contenido__logout-text">
                                                                        Cerrar
                                                                        sesión
                                                                    </span>
                                                                    <span className="contenido__logout-right icon-down"></span>
                                                                </button>
                                                            </a>

                                                            <form
                                                                id="logout-form"
                                                                action={route(
                                                                    "logout"
                                                                )}
                                                                method="POST"
                                                                style={{
                                                                    display:
                                                                        "none",
                                                                }}
                                                            >
                                                                <input
                                                                    type="hidden"
                                                                    name="_token"
                                                                    id="token"
                                                                />
                                                            </form>
                                                        </li>
                                                    </div>
                                                </ul>
                                            )}
                                            <hr className="division-header header-publica"></hr>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex ml-4 "
                                                >
                                                    <ChileLogo />
                                                </a>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <a
                                                href="#"
                                                className="flex  items-center ml-4 text-iniciar"
                                                onClick={handleShowLS}
                                            >
                                                <span className="mr-2 icon-login"></span>
                                                Iniciar sesión
                                            </a>
                                            <ModalLoginSesion
                                                showLS={showLS}
                                                handleCloseLS={handleCloseLS}
                                            ></ModalLoginSesion>
                                            <a
                                                href={route("register")}
                                                className="flex  ml-4 text-probar "
                                            >
                                                Probar 30 días gratis
                                            </a>
                                            <hr className="division-header header-publica"></hr>
                                            <a
                                                href="#"
                                                className="flex  items-center texto-logo-chile"
                                            >
                                                <img
                                                    src="/public/images/logo-chile-redondo.jpg"
                                                    width="30px"
                                                    alt="Logo Chile Redondo"
                                                    className="img-logo-chile"
                                                />
                                                <span className="ml-2 texto-chile-menu">
                                                    Chile
                                                </span>
                                            </a>
                                        </>
                                    )}
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}
