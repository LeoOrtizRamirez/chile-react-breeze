import React, { useEffect, useState, useRef } from "react";
import { Link, Head } from "@inertiajs/inertia-react";

import Banner from "@/Components/Banner";
import { Footer } from "../Components/Footer/Footer";
import "../../css/estilos-carousel-publica.css";
import BotonRegistrarse from '@/Components/BotonRegistrarse';
import BotonAsesor from '@/Components/BotonHablarAsesor';
import CarouselImagenes from '@/Components/CarouselImagenes';

import { BannerMonitoreamos } from "../Components/Banners/BannerMonitoreamos";
import PopUpPoliticaCookies from '@/Components/PopUpPoliticaCookies';

import Header from "@/Layouts/HeaderPublica";




export default function Welcome(props) {

    {/* INICIO BANNER */ }
    const [date, setDate] = useState(new Date().toLocaleTimeString())
    const [printdate, setPrintDate] = useState(new Date().toLocaleTimeString())
    const [hour, setHour] = useState("")
    const [saludo, setSaludo] = useState("")
    const [saludoIcon, setSaludoIcon] = useState("")
    const [contratosFiltrados, setContartosFiltrados] = useState('')
    const [openLoginModal, setOpenLoginModal] = useState(false)



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

    const loginBanner = () => {
        setOpenLoginModal(true)
        setContartosFiltrados('/contratos?fecha_publicacion=' + new Date().toISOString().slice(0, 10))
    }

    const closeModal = (value) => {
        setOpenLoginModal(value)
    }

    {/* FIN BANNER */ }
    return (
        <>
            <Head title="Home" />
            <Header user={props} setShow={openLoginModal} url={contratosFiltrados} closeModal={closeModal}></Header>
            {/* <Banner procesos={props.contratos}></Banner> */}
            {/* INICIO BANNER */}
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
                                                    <img src="/public/icons/multicolor/afternoon.svg" alt="icono-buenas-tardes" />
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
                                            <a /* href={contratosFiltrados} */ className="fraja-fuentes__contador" onClick={loginBanner}>
                                                <span>Chile Compra : </span>
                                                <span className="fraja-fuentes__item--claro">{props.contratos} procesos </span>
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
            {/* FIN BANNER */}

            <BannerMonitoreamos />

            <section id="customers-section">
                <div className="customers container rounded-container">
                    <div className="customers-cta w-50">
                        <div className="contenta-a">
                            <span className="customers-cta-since-year">
                                Desde 2004
                            </span>

                            <span className="customers-cta-count-statistics">
                                Más de 6000 clientes en Chile y el mundo
                            </span>
                        </div>
                        <div className="contenta-b">
                            <BotonRegistrarse
                                texto={"Regístrate y obtén ¡30 días gratis!"}
                                textoHover={"Registrarme 30 días de servicio gratis"}
                                color={"white"}
                                colorHover={"#00A1C9"}
                            />

                            <BotonAsesor
                                texto={"Habla con un consultor"}
                                textoHover={"Resolver dudas ahora"}
                                color={"white"}
                                colorHover={"#00A1C9"}
                            />
                        </div>
                    </div>
                    <div className="customers-list customers-list-carrousel w-50">
                        <CarouselImagenes />
                    </div>
                </div>
            </section>

            <PopUpPoliticaCookies />
            <Footer />

        </>
    );
}   
