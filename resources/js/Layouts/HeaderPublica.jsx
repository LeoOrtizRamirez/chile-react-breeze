import React, { useState, useRef } from "react";
import ApplicationLogoLici from "@/Components/ApplicationLogoLici";
import ChileLogo from "@/Components/ChileLogo";
import "../../css/estilos-header-publica.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

import Modal from 'react-bootstrap/Modal';
import "../../css/font-unicolor.css";
import './Header.css';

import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Example(props) {

    const { data, setData, post, processing, errors, reset, } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    const [inputClass, setInputClass] = useState("form-input-section__container-input")
    const [validForm, setValidForm] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [inputEmailValid, setInputEmailValid] = useState("")

    let refPasswordIcon = useRef();

    /*Modal*/
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setData({
            email: '',
            password: '',
        })
        setInputClass("form-input-section__container-input")
        setValidForm(true)
    }

    /*Modal Recupera contraseña*/
    const [showRecoverPasswordModal, setShowRecoverPasswordModal] = useState(false);
    const handleShowRecoverPasswordModal = () => setShowRecoverPasswordModal(true);
    const handleCloseRecoverPasswordModal = () => setShowRecoverPasswordModal(false);

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
        let input_password = document.getElementsByName("password")[0] //PENDIENTE REVISAR COMO SE IMPLEMENTA POR MEDIO DE REFERENCIA
        console.log(input_password.type)
        if (refPasswordIcon.current.className == "form-input-section__container-span icon-show") {
            refPasswordIcon.current.className = "form-input-section__container-span icon-hide"
            input_password.type = "text"
            input_password.placeholder = "Ingresa tu contraseña"
        } else {
            refPasswordIcon.current.className = "form-input-section__container-span icon-show"
            input_password.type = "password"
            input_password.placeholder = "Contraseña1234"
        }
    }

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const userValidate = () => {
        fetch('/user-validate', data)
        .then((response) => response.json())
        .then((data) => {
            if(data == 'Succes'){

            }else{
                console.log('fallo')
                setEmailValid(false)
                setInputEmailValid("error")
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }


    return (
        <div className="customers-list container container-header">
            <div className="flex justify-between	items-center py-2">
                <a href="/" className="flex items-center">
                    <ApplicationLogoLici />
                </a>

                <div className="flex md:order-2 div-iniciar-secion">
                    <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">

                        {props.user.auth.user ? (
                            <>
                                <li>
                                    <a href={route("dashboard")} className="flex  items-center menu-header mx-1"> Dashboard</a>
                                </li>

                                <li>
                                    <a href="#" className="flex ml-4 ">
                                        <ChileLogo />
                                    </a>
                                </li>


                            </>
                        ) : (
                            <>

                                <li>
                                    {/* <a href={route("login")} className="flex  items-center ml-4 text-iniciar">
                                        <span className="mr-2 icon-login"></span>
                                        Iniciar sesión
                                    </a> */}
                                    <a href='#' className="flex  items-center ml-4 text-iniciar" onClick={handleShow}>
                                        <span className="mr-2 icon-login"></span>
                                        Iniciar sesión
                                    </a>
                                </li>

                                <li>
                                    <a href={route("register")} className="flex  ml-4 text-probar ">
                                        Probar 30 días gratis
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex ml-4 ">
                                        <ChileLogo />
                                    </a>
                                </li>

                            </>
                        )}




                    </ul>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li>
                            <a href="/funcionalidades" className="flex  items-center menu-header mx-1"> Funcionalidades</a>
                        </li>
                        <li>
                            <a href={route("planes.chile")} className="flex items-center menu-header mx-1  "> Planes </a>
                        </li>
                        <li>
                            <a href="/nosotros" className="flex items-center menu-header mx-1 ">Nosotros</a>                    </li>
                        <li>
                            <a href="/contacto" className="flex items-center menu-header mx-1  ">Contáctanos </a>                    </li>
                    </ul>
                </div>
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
                                <p className="login__welcome-content-texto"> ¿Aún no tienes cuenta? <a className="login__infoLLink"> Regístrate gratis </a>
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
                                    <a className="informacion__texto-span--modifier"> 30 días gratis aqui.</a>
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
        </div>

    );
}