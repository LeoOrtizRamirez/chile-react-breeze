import React, { useState, useEffect } from 'react';
import "../../css/estilos-banner-home.css";
import "../../css/font-unicolor.css";


import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";

const Banner = (props) => {
    const [date, setDate] = useState(new Date().toLocaleTimeString())
    const [printdate, setPrintDate] = useState(new Date().toLocaleTimeString())
    const [hour, setHour] = useState("")
    const [saludo, setSaludo] = useState("")
    const [saludoIcon, setSaludoIcon] = useState("")

    const contratosFiltrados = '/contratos?fecha_publicacion=' + new Date().toISOString().slice(0, 10)

    async function check() {
        setDate(new Date().toLocaleTimeString())
        setPrintDate(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
        setHour(new Date().getHours())

        if(hour < 12){
            setSaludo("Buenos días")
            setSaludoIcon("icon-sun c-yellow")
        }else if(hour > 12 && hour <=18){
            setSaludo("Buenas tardes")
            setSaludoIcon("bi bi-cloud-sun-fill c-blue-ligth")
        }else{
            setSaludo("Buenas noches")
            setSaludoIcon("icon-night c-blue")
        }
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
                                        <span data-v-26cd45b0="" class="cta-button-icon-content-icon icon-Right"></span>
                                    </div>
                                </div></a>
                            </div>
                            <div className="d-flex justify-content-center banner-video-paises__franja">
                                <div className="franja-fuentes">
                                    <ul className="row">
                                        <li className="fraja-fuentes__item">
                                            <div className="fraja-fuentes__item-hour">
                                                <i className={saludoIcon}></i>
                                                <span className="fraja-fuentes__item-saludo">
                                                    {saludo}
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
                                            <a href={contratosFiltrados} target="_blank" className="fraja-fuentes__contador">
                                                <span>Chile Compra : </span>
                                                <span className="fraja-fuentes__item--claro">{props.procesos} procesos </span>
                                                <i class="icon-up"></i>
                                            </a>
                                        </li>
                                        <li className="fraja-fuentes__item">
                                            <a href="#" target="_blank" className="fraja-fuentes__contador">
                                                <span>No Centralizados : </span>
                                                <span className="fraja-fuentes__item--claro">0 procesos </span>
                                                <i class="icon-up"></i>
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