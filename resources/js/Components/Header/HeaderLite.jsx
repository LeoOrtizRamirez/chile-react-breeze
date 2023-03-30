import React, { useState } from "react";
import ApplicationLogoLici from "@/Components/ApplicationLogoLici";
import ChileLogo from "@/Components/ChileLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/font-web.css";
import "./HeaderLite.css";
import "../../Layouts/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ModalLoginSesion from "@/Components/Modals/ModalLoginSesion";

import "@fontsource/poppins";

const HeaderLite = (props) => {
    const [showLS, setShowLS] = useState(false);
    const handleCloseLS = () => setShowLS(false);
    const handleShowLS = () => setShowLS(true);

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
                                    {props?.user?.auth?.user ? (
                                        <>
                                            {/* <Nav.Link href="#deets"> */}
                                            <li>
                                                <a
                                                    href={route("dashboard")}
                                                    className="flex  items-center menu-header mx-1"
                                                >
                                                    {props.user.auth.user
                                                        .nombre_completo
                                                        ? props.user.auth.user
                                                              .nombre_completo
                                                        : Dashboard}
                                                </a>
                                            </li>
                                            {/* </Nav.Link> */}

                                            <hr className="division-header header-publica"></hr>

                                            {/* <Nav.Link> */}
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex ml-4 "
                                                >
                                                    <ChileLogo />
                                                </a>
                                            </li>
                                            {/* </Nav.Link> */}
                                        </>
                                    ) : (
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

                                            <Nav.Link
                                                href={route("register")}
                                                className="flex  ml-4 text-probar "
                                            >
                                                Regístrate gratis
                                            </Nav.Link>

                                            <hr className="division-header header-lite"></hr>

                                            <Nav.Link
                                                href="/contacto"
                                                className="flex  items-center ml-4 text-contactanos"
                                            >
                                                <span className="mr-2 icon-contacto"></span>
                                                Contáctanos
                                            </Nav.Link>
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
};

export default HeaderLite;
