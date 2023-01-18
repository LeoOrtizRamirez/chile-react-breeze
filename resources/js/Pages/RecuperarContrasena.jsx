import React, { useState, useEffect, useRef } from 'react'

import './RecuperarContrasena.css'
/* import './Auth/Register.css'; */

import "../../css/font-unicolor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";

import PasswordSecurity from '@/Components/PasswordSecurity';

const RecuperarContrasena = () => {

    const [valid, setValid] = useState(false)
    const [errorIconStatus, setErrorIconStatus] = useState(false)

    let refPasswordConfirmar = useRef()

    const onHandleChange = (event) => {
        if (event.target.value != "") {
            setValid(true)
            setErrorIconStatus(true)
            if (event.target.value.length > 5) {
                setErrorIconStatus(false)
                event.target.classList.remove("error-input");
            }
        } else {
            setValid(false)
            setErrorIconStatus(true)
            event.target.classList.add("error-input");
        }
        //setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const passwordValidate = (e) => {
        console.log(refPasswordConfirmar.current)
    }

    return (
        <>
            <div id="recuperar-contrasena-view">
                <section className="recuperar-contrasena--section"><video autoPlay="autoplay" muted="muted" loop="loop"
                    src="/video/Mapa contraseña.webm"></video>
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
                                        <img src="/images/logo-licitaciones.svg" alt="Licitaciones.info" className="content__header-img" />
                                    </a>
                                </div>
                                <div className="content__body">
                                    <div className="content__body-div"><span className="content__div-icon icon-shield"></span>
                                        <hr className="linea__divisoria" />
                                        <span className="content__div-text"> En licitaciones.info nos preocupamos por tu seguridad, recuerda
                                            que tu contraseña debe estar compuesta por: <span className="content__div-text--modifier">mínimo
                                                de 6 caracteres.</span></span>
                                    </div>
                                    <form action="" className="content__body-form">
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
                                                            name="password"
                                                            autoComplete="off"
                                                            className="content__confirmar-div-input"
                                                        /><span className="content__confirmar-div-icon icon-show"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content__form-nivel">

                                            </div>
                                        </div>
                                    </form>
                                    <div className="content__body-button">
                                        <button
                                            disabled={!valid}
                                            className="content__button-confirmar"
                                            onClick={passwordValidate}
                                        >Recuperar contraseña</button>
                                    </div>
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