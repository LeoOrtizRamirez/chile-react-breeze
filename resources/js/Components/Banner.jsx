import React, { useState, useEffect } from 'react';
import "../../css/estilos-banner-home.css";
import "../../css/font-unicolor.css";
import BotonRegistrarse from './BotonRegistrarse';

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
        setPrintDate(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
        setHour(new Date().getHours())

        if (hour < 12) {
            setSaludo("Buenos días")
            setSaludoIcon("icon-sun c-yellow")
        } else if (hour > 11 && hour <= 18) {
            setSaludo("Buenas tardes")
            setSaludoIcon("bi bi-cloud-sun-fill c-blue-ligth")
        } else {
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
                <div className="banner-video-paises"><video muted="muted" autoPlay="autoplay" loop="loop" src="/public/video/video_inicio_cl.mp4" type="webm" className="banner-video-paises__video"></video>
                    <div className="banner-video-paises__content-banner container">
                        <div className="row">
                            <div className="col-12 banner-video-paises__title"><h2>Licitaciones en Chile</h2>
                            </div>
                            <div className="col-12"><p>Identificamos oportunidades de negocio con el gobierno para tu empresa.<br /> Chile Compra y más de 1000 portales de entidades descentralizadas</p>
                            </div>
                            <BotonRegistrarse 
                            texto={"Regístrate y obtén ¡30 días gratis!"} 
                            textoHover={"Registrarme 30 días de servicio gratis"}
                            color={"white"}
                            colorHover={"#73c914"}
                             />
                            <div className="d-flex justify-content-center banner-video-paises__franja">
                                <div className="franja-fuentes">
                                    <ul className="row">
                                        <li className="fraja-fuentes__item">
                                            <div className="fraja-fuentes__item-hour">
                                                {saludoIcon == "bi bi-cloud-sun-fill c-blue-ligth" ?
                                                    <img src="/icons/multicolor/afternoon.svg" alt="icono-buenas-tardes"/>
                                                :
                                                    <i className={saludoIcon}></i>
                                                }
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
                                            <a href={contratosFiltrados} className="fraja-fuentes__contador">
                                                <span>Chile Compra : </span>
                                                <span className="fraja-fuentes__item--claro">{props.procesos} procesos </span>
                                                <i className="icon-up"></i>
                                            </a>
                                        </li>
                                        <li className="fraja-fuentes__item">
                                            <a href="#" className="fraja-fuentes__contador">
                                                <span>No Centralizados : </span>
                                                <span className="fraja-fuentes__item--claro">0 procesos </span>
                                                <i className="icon-up"></i>
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