import React, { useState, useEffect } from 'react';
import "../../css/estilos-banner-home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";

const Banner = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString())
    const [printdate, setPrintDate] = useState(new Date().toLocaleTimeString())
    const [hour, setHour] = useState(0)

    async function check() {
        setDate(new Date().toLocaleTimeString())
        setPrintDate(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
        setHour(new Date().getHours())
    }
    setTimeout(() => {
        check();
    }, 1000);
    return (
        <>
            <section id="banner-videos-paises">
                <div className="banner-video-paises"><video muted="muted" autoplay="autoplay" loop="loop" src="https://www.licitaciones.info/video/video_inicio_ecu.webm" type="webm" className="banner-video-paises__video"></video>
                    <div className="banner-video-paises__content-banner container">
                        <div className="row">
                            <div className="col-12 banner-video-paises__title"><h2>Licitaciones en Chile</h2>
                            </div>
                            <div className="col-12"><p>Identificamos oportunidades de negocio con el gobierno para tu empresa.<br /> Chile Compra y más de 1000 portales de entidades descentralizadas</p>
                            </div>
                            <div className="col-12 text-center"><a data-v-26cd45b0="" id="CTAButton" href="/registrarse" className="cta-button shadow-button banner-video-paises__button success">
                                <div data-v-26cd45b0="" className="cta-content"><span data-v-26cd45b0="" className="cta-button-text">Regístrate y obtén ¡30 días gratis!</span>
                                    <div data-v-26cd45b0="" className="cta-button-icon-content">
                                        <span data-v-26cd45b0="" className="cta-button-icon-content-hidden-text">Regístrate y obtén 30 días de servicio</span>
                                        <i className="custom bi bi-arrow-right-short"></i>
                                    </div>
                                </div></a>
                            </div>
                            <div className="d-flex justify-content-center banner-video-paises__franja">
                                <div className="franja-fuentes">
                                    <ul className="row">
                                        <li className="fraja-fuentes__item">
                                            <div className="fraja-fuentes__item-hour">
                                                <img src="/images/afternoon.svg" alt="icono-buenas-tardes" />
                                                <span className="fraja-fuentes__item-saludo">
                                                    {
                                                        hour < 15 ? "Buenos días" : "Buenas tardes"
                                                    }
                                                </span>
                                                <div>
                                                    <span className="hour">{printdate}</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="fraja-fuentes__item fraja-fuentes__item--line">
                                            <div>
                                                <span>Procesos hoy en Chile</span>
                                            </div>
                                        </li>
                                        <li className="fraja-fuentes__item">
                                            <a href="#" target="_blank" className="fraja-fuentes__contador">
                                                <span>Chile Compra : </span>
                                                <span className="fraja-fuentes__item--claro">131 procesos </span>
                                                <i class="bi bi-caret-right-fill"></i>
                                            </a>
                                        </li>
                                        <li className="fraja-fuentes__item">
                                            <a href="#" target="_blank" className="fraja-fuentes__contador">
                                                <span>No Centralizados : </span>
                                                <span className="fraja-fuentes__item--claro">52 procesos </span>
                                                <i class="bi bi-caret-right-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner