import React, { useState, useRef } from "react";
import ApplicationLogoLici from "@/Components/ApplicationLogoLici";
import ChileLogo from "@/Components/ChileLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import TextInput from "@/Components/TextInput";
import "../../../css/font-unicolor.css";
import "./HeaderLite.css";
import "../../Layouts/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useForm } from "@inertiajs/inertia-react";

const HeaderLite = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    const [inputClass, setInputClass] = useState(
        "form-input-section__container-input"
    );

    const [validForm, setValidForm] = useState(true);
    //const [passwordIcon, setPasswordIcon] = useState("icon-show")

    let refPasswordIcon = useRef();

    /*Modal*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
        if (errors) {
            setInputClass(
                "form-input-section__container-input form-input-section__container-inputError"
            );
            setValidForm(false);
        }
    };

    const handleTogglePasswordIcon = (e) => {
        let input_password = document.getElementsByName("password")[0]; //PENDIENTE REVISAR COMO SE IMPLEMENTA POR MEDIO DE REFERENCIA
        console.log(input_password.type);
        if (
            refPasswordIcon.current.className ==
            "form-input-section__container-span icon-show"
        ) {
            refPasswordIcon.current.className =
                "form-input-section__container-span icon-hide";
            input_password.type = "text";
            input_password.placeholder = "Ingresa tu contraseña";
        } else {
            refPasswordIcon.current.className =
                "form-input-section__container-span icon-show";
            input_password.type = "password";
            input_password.placeholder = "Contraseña1234";
        }
    };

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

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
                                    {props.user.auth.user ? (
                                        <>
                                            <Nav.Link href="#deets">
                                                <li>
                                                    <a
                                                        href={route(
                                                            "dashboard"
                                                        )}
                                                        className="flex  items-center menu-header mx-1"
                                                    >
                                                        {props.user.auth.user
                                                            .nombre_completo
                                                            ? props.user.auth
                                                                  .user
                                                                  .nombre_completo
                                                            : Dashboard}
                                                    </a>
                                                </li>
                                            </Nav.Link>

                                            <hr className="division-header header-publica"></hr>

                                            <Nav.Link>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="flex ml-4 "
                                                    >
                                                        <ChileLogo />
                                                    </a>
                                                </li>
                                            </Nav.Link>
                                        </>
                                    ) : (
                                        <>
                                            <Nav.Link>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="flex  items-center ml-4 text-iniciar"
                                                        onClick={handleShow}
                                                    >
                                                        <span className="mr-2 icon-login"></span>
                                                        Iniciar sesión
                                                    </a>
                                                </li>
                                            </Nav.Link>

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
            <Modal
                show={show}
                onHide={handleClose}
                id="loginModal"
                className="modal-dialog-centered"
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="login">
                        <div className="login__welcome">
                            <div className="login__welcome-content">
                                <p className="login__welcome-content-titulo">
                                    <span className="login__welcome-content-titulo login__welcome-content-titulo">
                                        ¡Hola!
                                    </span>
                                    <span className="login__welcome-content-titulo login__welcome-content-titulo--modifier">
                                        Bienvenido
                                    </span>
                                </p>
                                <p className="login__welcome-content-texto">
                                    {" "}
                                    ¿Aún no tienes cuenta?{" "}
                                    <a className="login__infoLLink">
                                        {" "}
                                        Regístrate gratis{" "}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="login__errors">
                            <form onSubmit={submit}>
                                {!validForm && (
                                    <div className="login__errors-div">
                                        <p className="login__errors-div-title-p">
                                            <strong>Datos de ingreso</strong>
                                            <span className="login__errors-div-title-p-span">
                                                <strong> incorrectos</strong>
                                            </span>
                                        </p>
                                        <p className="login__errors-div-title-p login__errors-div-title-p--modifier">
                                            {" "}
                                            Dirección de correo electrónico o
                                            contraseña incorrectos. Si no tienes
                                            una cuenta, regístrate gratis.{" "}
                                        </p>
                                        <div>
                                            <hr className="widthDivider" />
                                        </div>
                                    </div>
                                )}
                                <div className="form-input-section blockEmail">
                                    <p className="form-input-section__title">
                                        <span className="icon-mail form-input-section__title-span"></span>
                                        <strong>Correo electrónico:</strong>
                                    </p>
                                    <div className="form-input-section__container">
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className={inputClass}
                                            autoComplete="username"
                                            isFocused={true}
                                            placeholder="Ingresa tu correo electrónico"
                                            handleChange={onHandleChange}
                                        />
                                        {!validForm && (
                                            <span className="form-input-section__container-span form-input-section__container-span form-input-section__container-span--modifier icon-alert"></span>
                                        )}
                                    </div>
                                </div>
                                <div className="form-input-section blockPass">
                                    <p className="form-input-section__title">
                                        <span className="icon-lock form-input-section__title-span"></span>
                                        <strong>Contraseña:</strong>
                                    </p>
                                    <div className="form-input-section__container">
                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="Ingresa tu contraseña"
                                            value={data.password}
                                            className={inputClass}
                                            autoComplete="current-password"
                                            handleChange={onHandleChange}
                                        />
                                        {!validForm ? (
                                            <span className="form-input-section__container-span form-input-section__container-span form-input-section__container-span--modifier icon-alert"></span>
                                        ) : (
                                            <span
                                                className={`form-input-section__container-span icon-show`}
                                                ref={refPasswordIcon}
                                                onClick={
                                                    handleTogglePasswordIcon
                                                }
                                            ></span>
                                        )}
                                    </div>
                                </div>
                                <div className="login__season">
                                    <div>
                                        <label className="blockCheck">
                                            <span
                                                style={{ fontWeight: "normal" }}
                                            >
                                                {" "}
                                                No cerrar sesión{" "}
                                            </span>
                                            <input
                                                type="checkbox"
                                                id="checkbox"
                                                name="checkbox-1"
                                                value="accepted"
                                                unchecked-value="not_accepted"
                                            />
                                            <div className="b-input"></div>
                                        </label>
                                    </div>
                                    <a className="login__infoLLink login__infoLLink--modifier">
                                        {" "}
                                        ¿Olvidaste tu contraseña?{" "}
                                    </a>
                                </div>
                                <div className="blockBtn">
                                    <button
                                        type="submit"
                                        className="blockBtn__content"
                                        processing={processing}
                                    >
                                        {" "}
                                        Iniciar sesión{" "}
                                    </button>
                                    <a className="d-none login__infoLLink--mobile login__infoLLink--modifier">
                                        {" "}
                                        ¿Olvidaste tu contraseña?{" "}
                                    </a>
                                </div>
                                <input
                                    type="hidden"
                                    name="_token"
                                    value="wSHAkDvlYF9Y2pLYuYrummdIKaqHwbHqBxrCSL9o"
                                />
                            </form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
};

export default HeaderLite;
