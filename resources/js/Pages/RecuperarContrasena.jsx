import React from 'react'

import './RecuperarContrasena.css'
/* import './Auth/Register.css'; */

import "../../css/font-unicolor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";

import PasswordSecurity from '@/Components/PasswordSecurity';

const RecuperarContrasena = () => {

    const onHandleChange = (event) => {
        //setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    return (
        <>
            <section className="recuperar-contrasena--section"><video autoplay="autoplay" muted="muted" loop="loop"
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
                                <form action="" className="content__body-form">
                                    <div id="input_password" className="contenido">
                                        <div for="" className="contenido__password-titulo"><span
                                            className="contenido__password-titulo-icon"></span><span>Nueva
                                                contraseña:</span>
                                        </div>
                                        <div className="content-inputs">
                                            <PasswordSecurity onHandleChange={onHandleChange} />
                                        </div>
                                    </div>
                                    <div className="content__form passwordDisabled">
                                        <div className="content__form-confirmar">
                                            <div className="content__confirmar"><label for="" className="content__confirmar-label">Confirmar
                                                tu nueva contraseña:</label>
                                                <div className="content__confirmar-div">
                                                    <input disabled="disabled" type="password"
                                                    placeholder="Ingresa de nuevo tu contraseña" id="passwordConfirmar"
                                                    name="password" autocomplete="off" className="content__confirmar-div-input"
                                                    aria-required="true" aria-invalid="false"/><span
                                                        className="content__confirmar-div-icon icon-show"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content__form-nivel">

                                        </div>
                                    </div>
                                </form>
                                <div className="content__body-button">
                                    <button disabled="disabled" className="content__button-confirmar">Recuperar contraseña</button>
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
        </>
    )
}

export default RecuperarContrasena