import React, { useState, useEffect, useRef } from 'react'

import './RecuperarContrasena.css'

import "../../css/font-unicolor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import '../../css/estilos-toast.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import PasswordSecurity from '@/Components/PasswordSecurity';

import { Head, Link, useForm } from '@inertiajs/inertia-react';

const RecuperarContrasena = (props) => {
    const [showToast, setShowToast] = useState(false);
    const [positionToast, setPositionToast] = useState('bottom-start');
    const { data, setData, post, get, processing, errors, reset, } = useForm({
        email: props.email,
        token: props.token,
        password: '',
        password2: '',
        remember: '',
    });
    let refPasswordConfirmar = useRef()
    let refPasswordIcon = useRef()
    const [valid, setValid] = useState(false)
    const [errorIconStatus, setErrorIconStatus] = useState(false)
    const [passwordEquals, setPasswordEquals] = useState(true)

    const onHandleChange = (event) => {
        if (event.target.value != "") {
            setValid(true)
            setErrorIconStatus(true)
            if (event.target.value.length > 5) {
                setErrorIconStatus(false)
                event.target.classList.remove("error-input")
            }
        } else {
            setValid(false)
            setErrorIconStatus(true)
            event.target.classList.add("error-input")
        }
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
    };

    const passwordValidate = (e) => {
        if (data.password == data.password2) {
            refPasswordConfirmar.current.classList.remove("error-input")
        } else {
            setPasswordEquals(false)
            console.log(refPasswordConfirmar.current)
            refPasswordConfirmar.current.classList.add("error-input")
        }
    }

    const cleanPasswordConfirmar = () => {
        setPasswordEquals(true)
        refPasswordConfirmar.current.classList.remove("error-input")
    }

    const submit = (e) => {
        e.preventDefault();
        if (data.password.length < 6) {
            setShowToast(true)
        }
        if (data.password == data.password2) {
            refPasswordConfirmar.current.classList.remove("error-input")
            get(route('actualizarContrasena'), {
                onError: () => {
                    setInputClass("form-input-section__container-input form-input-section__container-inputError")
                    setValidForm(false)
                }
            });
        } else {
            setPasswordEquals(false)
            console.log(refPasswordConfirmar.current)
            refPasswordConfirmar.current.classList.add("error-input")
        }
    };

    const handleTogglePasswordIcon = (e) => {
        if (refPasswordIcon.current.className == "content__confirmar-div-icon icon-show") {
            refPasswordIcon.current.className = "content__confirmar-div-icon icon-hide"
            refPasswordConfirmar.current.type = "text"
            refPasswordConfirmar.current.placeholder = "Ingresa tu contraseña"
        } else {
            refPasswordIcon.current.className = "content__confirmar-div-icon icon-show"
            refPasswordConfirmar.current.type = "password"
            refPasswordConfirmar.current.placeholder = "Contraseña1234"
        }
    }

    return (
        <>
            <ToastContainer className="p-3" position={positionToast}>
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Body>
                        <Row className="align-items-center">
                            <Col md={1}>
                                <span className='toast-border'></span>
                            </Col>
                            <Col md={2}>
                                <span className='toast-icon toast-danger'>
                                    <span className='icon-error'></span>
                                </span>
                            </Col>

                            <Col md={8}>
                                <p>La contraseña debe tener mínimo 6 carácteres.</p>
                            </Col>
                            <Col md={1} className="d-flex">
                                <button
                                    type="button"
                                    class="icon-close m-auto"
                                    onClick={() => setShowToast(false)}
                                />
                            </Col>
                        </Row>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
            <div id="recuperar-contrasena-view">
                <section className="recuperar-contrasena--section"><video autoPlay="autoplay" muted="muted" loop="loop"
                    src="/public/video/Mapa contraseña.webm"></video>
                    <div id="contenido-video" className="contenido row">
                        <div className="contenido__video col-md-6 col-12">
                            <h2 className="contenido__video-texto">
                                Recupera tu contraseña
                            </h2>
                        </div>
                        <div className="contenido__form col-md-6 col-12">
                            <div className="content">
                                <div className="content__header d-none d-md-block">
                                    <a href="/">
                                        <img src="/public/images/logo-licitaciones.svg" alt="Licitaciones.info" className="content__header-img" />
                                    </a>
                                </div>
                                <div className="content__body">
                                    <div className="content__body-div"><span className="content__div-icon icon-shield"></span>
                                        <hr className="linea__divisoria" />
                                        <span className="content__div-text"> En licitaciones.info nos preocupamos por tu seguridad, recuerda
                                            que tu contraseña debe estar compuesta por: <span className="content__div-text--modifier">mínimo
                                                de 6 caracteres.</span></span>
                                    </div>
                                    <form onSubmit={submit} className="content__body-form">
                                        <div id="input_password" className="contenido">
                                            <div htmlFor="" className="contenido__password-titulo"><span
                                                className="contenido__password-titulo-icon"></span><span>Nueva
                                                    contraseña:</span>
                                            </div>
                                            <div className="content-inputs">
                                                <PasswordSecurity
                                                    onHandleChange={onHandleChange}
                                                    errorIcon="contenido__password-div-icon icon-alert error-icon"
                                                    errorIconStatus={errorIconStatus}
                                                />
                                            </div>
                                        </div>
                                        <div className={`content__form ${!valid ? "passwordDisabled" : ""}`}>
                                            <div className="content__form-confirmar">
                                                <div className="content__confirmar"><label htmlFor="" className="content__confirmar-label">Confirmar
                                                    tu nueva contraseña:</label>
                                                    <div className="content__confirmar-div">
                                                        <input
                                                            ref={refPasswordConfirmar}
                                                            disabled={!valid}
                                                            type="password"
                                                            placeholder="Ingresa de nuevo tu contraseña"
                                                            id="passwordConfirmar"
                                                            name="password2"
                                                            autoComplete="off"
                                                            className="content__confirmar-div-input"
                                                            value={data.password2}
                                                            onChange={onHandleChange}
                                                            onClick={cleanPasswordConfirmar}
                                                        />
                                                        <span
                                                            className="content__confirmar-div-icon icon-show"
                                                            ref={refPasswordIcon}
                                                            onClick={handleTogglePasswordIcon}
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content__form-nivel"></div>
                                        </div>
                                        {passwordEquals ?
                                            <div className="content__body-button">
                                                <button
                                                    type='submit'
                                                    disabled={!valid}
                                                    className="content__button-confirmar"
                                                >Recuperar contraseña</button>
                                            </div>
                                            :
                                            <div className="content__body-alerta">
                                                <div className="content__alerta-div">
                                                    <span className="content__alerta-div-text"> Las contraseñas <span className="content__alerta-div-text--modifier">no coinciden</span>
                                                    </span>
                                                </div>
                                            </div>
                                        }

                                    </form>
                                </div>
                                <hr className="linea__divisoria" />
                                <div className="content__footer">
                                    <span className="content__footer-text"> Si necesitas ayuda ponte en contacto
                                        con nuestro equipo de soporte técnico. </span>
                                    <div className="contactenos">
                                        <button className="contactenos__button">
                                            <span className="contactenos__button-icon icon-contacto"></span>
                                            <span className="contactenos__button-text">Contáctanos</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RecuperarContrasena