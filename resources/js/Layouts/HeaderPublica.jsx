import React, { useState, useRef, useEffect } from "react";
import ApplicationLogoLici from "@/Components/ApplicationLogoLici";
import ChileLogo from "@/Components/ChileLogo";
import "../../css/estilos-header-publica.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TextInput from '@/Components/TextInput';
import Modal from 'react-bootstrap/Modal';
import "../../css/font-unicolor.css";
import './Header.css';
import "./script.js";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Example(props) {

    const { data, setData, post, processing, errors, reset, } = useForm({
        email: '',
        password: '',
        remember: '',
        url_modal: props.url,
    });

    const [inputClass, setInputClass] = useState("form-input-section__container-input")
    const [validForm, setValidForm] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [validVerificationCode, setValidVerificationCode] = useState(false)
    const [inputEmailValid, setInputEmailValid] = useState("")
    const [verificationCode1, setVerificationCode1] = useState("")
    const [verificationCode2, setVerificationCode2] = useState("")
    const [verificationCode3, setVerificationCode3] = useState("")
    const [verificationCode4, setVerificationCode4] = useState("")
    const [inputCodeClass, setInputCodeClass] = useState("contenido__validacion-input")

    let refPasswordIcon = useRef();
    let refInputPassword = useRef();

    /*Modal*/
    const [show, setShow] = useState(props.setShow);


    useEffect(() => {
        setShow(props.setShow)

        setData({
            email: data.email,
            password: data.password,
            remember: data.remember,
            url_modal: props.url,
        })
    }, [props.setShow])

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setData({
            email: '',
            password: '',
        })
        setInputClass("form-input-section__container-input")
        setValidForm(true)
        props.closeModal(false)
    }

    /*Modal Recupera contraseña*/
    const [showRecoverPasswordModal, setShowRecoverPasswordModal] = useState(false);
    const handleShowRecoverPasswordModal = () => setShowRecoverPasswordModal(true);
    const handleCloseRecoverPasswordModal = () => setShowRecoverPasswordModal(false);

    /*Modal Código de Verificación*/
    const [showVerificationCodeModal, setShowVerificationCodeModal] = useState(false);
    const handleShowVerificationCodeModal = () => setShowVerificationCodeModal(true);
    const handleCloseVerificationCodeModal = () => setShowVerificationCodeModal(false);

    const backModal = () => {
        setShowVerificationCodeModal(false)
        setShowRecoverPasswordModal(true)
        countDown = null
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onError: () => {
                setInputClass("form-input-section__container-input form-input-section__container-inputError")
                setValidForm(false)
            }
        });
    };

    const handleTogglePasswordIcon = (e) => {
        if (refPasswordIcon.current.className == "form-input-section__container-span icon-show") {
            refPasswordIcon.current.className = "form-input-section__container-span icon-hide"
            refInputPassword.current.type = "text"
            refInputPassword.current.placeholder = "Ingresa tu contraseña"
        } else {
            refPasswordIcon.current.className = "form-input-section__container-span icon-show"
            refInputPassword.current.type = "password"
            refInputPassword.current.placeholder = "Contraseña1234"
        }
    }

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const userValidate = () => {
        fetch('/user-validate/' + data.email)
            .then((response) => response.json())
            .then((data) => {

                if (data == 'Success') {
                    handleCloseRecoverPasswordModal()
                    handleShowVerificationCodeModal()
                    setVerificationCodeExpire(false)
                    countDown()
                } else {
                    setEmailValid(false)
                    setInputEmailValid("error")

                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const codeValidate = () => {
        var verificationCode = verificationCode1 + verificationCode2 + verificationCode3 + verificationCode4

        fetch('/code-validate/' + data.email + '/' + verificationCode)
            .then((response) => response.json())
            .then((response) => {
                if (response != 'Fallo') {
                    setEmailValid(true)
                    const url = location.protocol + '//' + location.host + "/recuperar-contrasena?token=" + response + "&email=" + data.email
                    window.location.href = url
                } else {
                    setValidVerificationCode(true)
                    setEmailValid(false)
                    setInputEmailValid("error")
                    setInputCodeClass("contenido__validacion-input contenido__validacion-input-error")
                    document.getElementsByName("input1")[0].value = ""
                    document.getElementsByName("input2")[0].value = ""
                    document.getElementsByName("input3")[0].value = ""
                    document.getElementsByName("input4")[0].value = ""
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    const [startingMinutes, setStartingMinutes] = useState(4)
    const [startingSeconds, setStartingSeconds] = useState(59)
    const [mins, setMinutes] = useState(4)
    const [secs, setSeconds] = useState(59)
    const [timeColor, setTimeColor] = useState("")
    const [verificationCodeExpire, setVerificationCodeExpire] = useState(false)


    var countDown = () => {
        var seconds = startingSeconds
        var minuts = startingMinutes
        let sampleInterval = setInterval(() => {

            seconds -= 1
            setSeconds(seconds)
            setMinutes(minuts)

            if (seconds > 0) {
                //setSeconds(secs - 1);
                setSeconds(seconds)
            }
            if (seconds === 0) {
                if (minuts === 0) {
                    clearInterval(sampleInterval);
                    setVerificationCodeExpire(true)
                } else {
                    seconds = 59
                    minuts -= 1
                    setMinutes(minuts);
                    setSeconds(seconds);
                    if (minuts <= 1) {
                        setTimeColor("c-red")
                    } else {
                        setTimeColor("")
                    }
                }
            }
        }, 1000);
    }


    const nextInput = (e) => {
        var input2 = document.getElementById("input2")
        var input3 = document.getElementById("input3")
        var input4 = document.getElementById("input4")
        if (e.target.value != "") {
            switch (e.target.name) {
                case "input1":
                    input2.focus()
                    break;
                case "input2":
                    input3.focus()
                    break;
                case "input3":
                    input4.focus()
                    break;
                default:
                    break;
            }
        }
    }


    return (
        <>
            <div className="contenido_headerPublica--margin-top">
                <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" className="container-headerPublica">
                    <Container>
                        <Navbar.Brand href="#home">

                            <a href="/" className="flex items-center">
                                <ApplicationLogoLici />
                            </a>

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto" >

                                <a href="/funcionalidades" class="menu-header nav-header-publica">Funcionalidades</a>
                                <a href="/chile/planes" class="menu-header nav-header-publica">Planes</a>
                                <a href="/nosotros" class="menu-header nav-header-publica">Nosotros</a>
                                <a href="/contacto" class="menu-header nav-header-publica">Contáctanos</a>
                                {/*  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>


                            <Nav>
                                <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">

                                    {props.user.auth.user ? (
                                        <>
                                            <Nav.Link href={route("dashboard")} className="flex  items-center menu-header mx-1">

                                                {props.user.auth.user.nombre_completo ?
                                                    props.user.auth.user.nombre_completo
                                                    :
                                                    Dashboard
                                                }

                                            </Nav.Link>

                                            <hr className="division-header header-publica"></hr>

                                            <Nav.Link >
                                                <li>
                                                    <a href="#" className="flex ml-4 ">
                                                        <ChileLogo />
                                                    </a>
                                                </li>
                                            </Nav.Link>


                                        </>
                                    ) : (
                                        <>

                                            <Nav.Link >

                                                <a href='#' className="flex  items-center ml-4 text-iniciar" onClick={handleShow}>
                                                    <span className="mr-2 icon-login"></span>
                                                    Iniciar sesión
                                                </a>

                                            </Nav.Link>

                                            <Nav.Link href={route("register")} className="flex  ml-4 text-probar " >
                                                Probar 30 días gratis
                                            </Nav.Link>
                                            <hr className="division-header header-publica"></hr>

                                            <Nav.Link >
                                                {/* <ChileLogo /> */}



                                                <a href='#' className="flex  items-center texto-logo-chile">
                                                    <img src="/public/images/logo-chile-redondo.jpg" width="30px" alt="Logo Chile Redondo" className="img-logo-chile" />
                                                    <span className="ml-2 texto-chile-menu" >Chile</span>
                                                </a>

                                            </Nav.Link>
                                        </>
                                    )}

                                </ul>





                            </Nav>
                        </Navbar.Collapse>



                    </Container>
                </Navbar>
            </div>
            <Modal show={show} onHide={handleClose} id="loginModal" className="modal-dialog-centered">
                <Modal.Header>
                    <div className="botonera">
                        <button className="botonera__cerrar" onClick={handleClose}>
                            <span className="botonera__cerrar-icon icon-close"></span>
                        </button>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="login">
                        <div className="login__welcome">
                            <div className="login__welcome-content">
                                <p className="login__welcome-content-titulo">
                                    <span className="login__welcome-content-titulo login__welcome-content-titulo">¡Hola!</span>
                                    <span className="login__welcome-content-titulo login__welcome-content-titulo--modifier">Bienvenido</span>
                                </p>
                                <p className="login__welcome-content-texto"> ¿Aún no tienes cuenta? <a className="login__infoLLink" href={route("register")}> Regístrate gratis </a>
                                </p>
                            </div>
                        </div>
                        <div className="login__errors">
                            <form onSubmit={submit}>
                                {!validForm &&
                                    <div className="login__errors-div">
                                        <p className="login__errors-div-title-p">
                                            <strong>Datos de ingreso</strong>
                                            <span className="login__errors-div-title-p-span">
                                                <strong> incorrectos</strong>
                                            </span>
                                        </p>
                                        <p className="login__errors-div-title-p login__errors-div-title-p--modifier"> Dirección de correo electrónico o
                                            contraseña incorrectos. Si no tienes una cuenta, regístrate gratis. </p>
                                        <div>
                                            <hr className="widthDivider" />
                                        </div>
                                    </div>
                                }
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
                                        {!validForm &&
                                            <span className="form-input-section__container-span form-input-section__container-span form-input-section__container-span--modifier icon-alert"></span>
                                        }
                                    </div>
                                </div>
                                <div className="form-input-section blockPass">
                                    <p className="form-input-section__title"><span
                                        className="icon-lock form-input-section__title-span"></span><strong>Contraseña:</strong></p>
                                    <div className="form-input-section__container">
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            ref={refInputPassword}
                                            placeholder="Ingresa tu contraseña"
                                            value={data.password}
                                            className={inputClass}
                                            autoComplete="current-password"
                                            onChange={onHandleChange}
                                        />
                                        {!validForm ?
                                            <span className="form-input-section__container-span form-input-section__container-span form-input-section__container-span--modifier icon-alert"></span>
                                            :
                                            <span
                                                className={`form-input-section__container-span icon-show`}
                                                ref={refPasswordIcon}
                                                onClick={handleTogglePasswordIcon}
                                            ></span>
                                        }

                                    </div>
                                </div>
                                <div className="login__season">
                                    <div><label className="blockCheck"><span style={{ fontWeight: 'normal' }}> No cerrar sesión </span>
                                        <input type="checkbox" id="checkbox" name="checkbox-1" value="accepted" unchecked-value="not_accepted" />
                                        <div className="b-input">
                                        </div>
                                    </label>
                                    </div>
                                    <a
                                        className="login__infoLLink login__infoLLink--modifier"
                                        onClick={handleShowRecoverPasswordModal}> ¿Olvidaste tu contraseña? </a>
                                </div>
                                <div className="blockBtn">
                                    <button type="submit" className="blockBtn__content" processing={processing}> Iniciar sesión </button>
                                    <a className="d-none login__infoLLink--mobile login__infoLLink--modifier"> ¿Olvidaste tu contraseña? </a>
                                </div>
                                <input type="hidden" name="_token" value="wSHAkDvlYF9Y2pLYuYrummdIKaqHwbHqBxrCSL9o" />
                            </form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <Modal show={showRecoverPasswordModal} onHide={handleCloseRecoverPasswordModal} id="modal-olvidaste___BV_modal_content_" className="modal-dialog-centered">
                <Modal.Header>
                    <div className="botonera">
                        <button className="botonera__regresar" onClick={handleCloseRecoverPasswordModal}>
                            <span className="botonera__regresar-icon icon-back"></span>
                        </button>
                        <button className="botonera__cerrar" onClick={handleCloseRecoverPasswordModal}>
                            <span className="botonera__cerrar-icon icon-close"></span>
                        </button>
                    </div>
                </Modal.Header>
                <Modal.Body id="modal-olvidaste___BV_modal_body_">
                    <div className="titulo">
                        <span className="titulo__icono icon-lock"></span>
                        <span className="titulo__texto"> Recupera tu <span className="titulo__texto--modifier">contraseña</span>
                        </span>
                    </div>
                    <div className="informacion">
                        {emailValid ?
                            <div className="informacion__texto">
                                <p className="informacion__texto-span"> Ingresa la dirección de correo electrónico asociado a tu cuenta. Te enviaremos un código de 4 dígitos para recuperar tu contraseña.</p>
                            </div>
                            :
                            <div className="informacion__texto mensaje__error">
                                <p className="informacion__texto-span"> El correo electrónico que has ingresado no se encuentra registrado o se ha escrito de forma incorrecta. Si aún no tienes cuenta puedes registrarte
                                    <a className="informacion__texto-span--modifier" href={route("register")}> 30 días gratis aqui.</a>
                                </p>
                            </div>
                        }
                        <div className="informacion__correo">

                            <TextInput
                                type="email"
                                name="email"
                                value={data.email}
                                className={`informacion__correo-input ${inputEmailValid}`}
                                autoComplete="username"
                                isFocused={true}
                                placeholder="Ingresa tu correo electrónico"
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div className="informacion__boton">
                            <button className="informacion__boton-button" onClick={userValidate}> Recuperar </button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer id="modal-olvidaste">
                    <div className="contacto">
                        <div className="contacto__texto">
                            <p className="contacto__texto-informacion">Si necesitas ayuda ponte en contacto con nuestro equipo de soporte
                                técnico.</p>
                        </div>
                        <div className="contacto__boton">
                            <div className="contactenos">
                                <a className="contactenos__button" href={route("contacto")}>
                                    <span className="contactenos__button-icon icon-contacto"></span>
                                    <span className="contactenos__button-text">Contáctanos</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal show={showVerificationCodeModal} onHide={handleCloseVerificationCodeModal} id="modal-correo-recuperacion" className="modal-dialog-centered">
                <Modal.Header>
                    <div className="botonera">
                        <button className="botonera__regresar" onClick={backModal}>
                            <span className="botonera__regresar-icon icon-back"></span>
                        </button>
                        <button className="botonera__cerrar" onClick={handleCloseVerificationCodeModal}>
                            <span className="botonera__cerrar-icon icon-close"></span>
                        </button>
                    </div>
                </Modal.Header>
                <Modal.Body id="modal-correo-recuperacion___BV_modal_body_">
                    <div id="modal-correo-recuperacion___BV_modal_body_" >
                        <div className="titulo">
                            <div className="titulo__inicio">
                                <span className="titulo__inicio-texto">Te hemos enviado un <span className="titulo__inicio-texto--modifier">código de confirmación</span></span>
                            </div>
                        </div>

                        <div className="informacion">
                            <div className="informacion__correo">
                                <span className="informacion__correo-span">
                                    <div className="informacion__correo-span--modifier">L

                                    </div> lortizr@uniremingtonmanizales.edu.co
                                </span>
                            </div>
                            {!verificationCodeExpire ?
                                <div>
                                    <div className="informacion__texto-codigo">
                                        <span className="informacion__texto-span">
                                            Ingresa aquí el código que te hemos enviado a tu correo. Tu código expira en

                                            {!(mins > 0 || secs >= 0) ? "" : (
                                                <span className={`informacion__texto-span--modifier ${timeColor}`}>
                                                    {" "}
                                                    {`( 0${mins}`}:{secs < 10 ? `0${secs} )` : secs + " )"}
                                                </span>
                                            )}

                                        </span>
                                    </div>
                                    <div className="informacion__codigo">
                                        <div className="contenido">
                                            <div className="contenido__validacion">
                                                <input
                                                    id="input1"
                                                    name="input1"
                                                    maxlength="1"
                                                    required="required"
                                                    type="text"
                                                    className={inputCodeClass}
                                                    onChange={e => setVerificationCode1(e.target.value)}
                                                    onKeyUp={e => nextInput(e)}
                                                />
                                                <input
                                                    id="input2"
                                                    name="input2"
                                                    maxlength="1"
                                                    required="required"
                                                    type="text"
                                                    className={inputCodeClass}
                                                    onChange={e => setVerificationCode2(e.target.value)}
                                                    onKeyUp={e => nextInput(e)}
                                                />
                                                <input
                                                    id="input3"
                                                    name="input3"
                                                    maxlength="1"
                                                    required="required"
                                                    type="text"
                                                    className={inputCodeClass}
                                                    onChange={e => setVerificationCode3(e.target.value)}
                                                    onKeyUp={e => nextInput(e)}
                                                />
                                                <input
                                                    id="input4"
                                                    name="input4"
                                                    maxlength="1"
                                                    required="required"
                                                    type="text"
                                                    className={inputCodeClass}
                                                    onChange={e => setVerificationCode4(e.target.value)}
                                                />
                                            </div>
                                            {validVerificationCode &&
                                                <div className="contenido__mensaje mensaje_espacio">
                                                    <span className="contenido__mensaje-texto">El código es <span className="contenido__mensaje-texto--modifier"> incorrecto, </span> ingrésalo de nuevo. </span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="informacion__verificar">
                                        <button className="informacion__verificar-button" onClick={codeValidate}>Verificar</button>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className="informacion__advertencia">
                                        <span className="informacion__advertencia-span">
                                            El código que te hemos enviado a tu correo ha <span className="informacion__advertencia-span--modifier">expirado.</span>
                                        </span>
                                    </div>
                                    <div className="informacion__reenviar">
                                        <button className="informacion__reenviar-boton" onClick={userValidate}>Reenviar de nuevo</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>


        </>




    );
}