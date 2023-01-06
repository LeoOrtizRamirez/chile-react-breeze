import React, { useState } from 'react';
import { Head } from "@inertiajs/inertia-react";
import { Footer } from "../Components/Footer/Footer";

import Header from "@/Layouts/HeaderPublica";

import './Contacto.css';
import "../../css/font-unicolor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";

import Accordion from 'react-bootstrap/Accordion';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Nav from 'react-bootstrap/Nav';

//import Sonnet from '../../components/Sonnet';

export default function Contacto(props) {

    const [key, setKey] = useState('escribenos');

    const print = (val) => {
        if(val == "whatsapp"){
            setKey('escribenos')
        }else{
            setKey(val)
        } 
    };

    return (
        <>
            <Head title="Contacto" />
            <Header user={props}></Header>
            <div id="banner-top">
                <div id="banner-top--img" className="h-100 w-100">
                    <div className="container">
                        <div id="banner-top--text-container" className="row">
                            <div className="col-12 px-0"><h2 className="banner-top--white-title">
                                Centro de contacto
                            </h2> <p className="banner-top--white-text">
                                    Puedes contactarte con nosotros por los diferentes medios que tenemos para ti.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="contenido-contactenos">
                <div className="contactenos_form container px-0">
                    <div className="row m-0 pb-5">
                        <div className="col-12 col-md-8 px-0 contactenos_form--nav-and-content mb-4 mb-md-0">
                            <div id="navegacion-contactenos" className="card">
                                <div className="tabs row no-gutters" id="__BVID__15">
                                    <div className="col-auto navegacion-contactenos--nav">
                                        <Nav
                                            className='nav justify-content-center'
                                            activeKey={key}
                                            onSelect={(selectedKey) => print(`${selectedKey}`)}
                                            >
                                            <Nav.Item className="w-100">
                                                <Nav.Link eventKey="escribenos">
                                                    <div className="navegacion-contactenos--item-nav">
                                                        <i className="icon-escribe navegacion-contactenos--iconos"></i><span>Escríbenos</span><i className="icon-up"></i>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="w-100">
                                                <Nav.Link 
                                                    href="https://api.whatsapp.com/send?phone=573103708276"     eventKey="whatsapp"
                                                    target="_blank"
                                                >
                                                    <div className="navegacion-contactenos--item-nav">
                                                        <i className="icon-whatsapp navegacion-contactenos--iconos"></i><span>Whatsapp</span>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="w-100">
                                                <Nav.Link eventKey="ubicacion">
                                                    <div className="navegacion-contactenos--item-nav">
                                                        <i className="icon-ubicacion navegacion-contactenos--iconos"></i><span>Ubicación</span><i className="icon-up"></i>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="w-100">
                                                <Nav.Link eventKey="preguntas-frecuentes">
                                                    <div className="navegacion-contactenos--item-nav">
                                                        <i className="icon-preguntas navegacion-contactenos--iconos"></i><span>Preguntas frecuentes</span><i className="icon-up"></i>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    {/* Tabs */}
                                    <div className="tab-content col" id="__BVID__15__BV_tab_container_">
                                        <Tabs
                                            id="controlled-tab-example"
                                            activeKey={key}
                                            onSelect={(k) => setKey(k)}
                                            className="mb-3 d-none"
                                        >
                                            <Tab eventKey="escribenos" title="escribenos">
                                                <div className="navegacion-contactenos--text-content">
                                                    <div className="contactenos_form">
                                                        <form action="">
                                                            <div className="contactenos_form--campo">
                                                                <div className="contactenos_form--campo-title">
                                                                    <label>Nombre completo:</label>
                                                                </div>
                                                                <input id="name" name="name" type="text" placeholder="Ingresa tu nombre" className="contactenos_form--campo-input" />
                                                            </div>

                                                            <div className="contactenos_form--campo">
                                                                <div className="contactenos_form--campo-title">
                                                                    <label>Teléfono:</label>
                                                                </div>
                                                                <input id="phone" name="phone" type="text" placeholder="Ingresa tu número" className="contactenos_form--campo-input" />
                                                            </div>

                                                            <div className="contactenos_form--campo">
                                                                <div className="contactenos_form--campo-title">
                                                                    <label>Correo electrónico:</label>
                                                                </div>
                                                                <input id="email" name="email" type="text" placeholder="Ingresa tu correo electrónico" className="contactenos_form--campo-input" />
                                                            </div>

                                                            <div className="contactenos_form--campo contactenos_form--campo-mensaje">
                                                                <div className="contactenos_form--campo-title">
                                                                    <label>Tu mensaje</label>
                                                                </div>    
                                                                <textarea name="mensaje" rows="6" placeholder="Ingresa tu mensaje" className="contactenos_form--campo-input" >
                                                                </textarea>
                                                            </div>

                                                            <div className="contactenos_form--campo contactenos_form--campo-terminos">
                                                                <label className="checkbox_container">
                                                                    <span> He leido y acepto <a href="/politica-de-privacidad" target="_blank">la política de tratamiento de datos.</a>
                                                                    </span>
                                                                    <input type="checkbox" />
                                                                    <div className="checkbox-input">

                                                                    </div>
                                                                </label>
                                                            </div>

                                                            <div className="contactenos_form--campo-submit">
                                                                <button id="submit" type="submit" name="submit" disabled="disabled" className="disabled"><i className="icon-enviar"></i> Enviar formulario <div className="preloader" style={{ display: 'none' }}></div></button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>

                                            </Tab>
                                            <Tab eventKey="ubicacion" title="ubicacion">
                                                <div role="tabpanel" id="tab_ubicaciones" aria-hidden="false" aria-labelledby="tab_ubicaciones___BV_tab_button__"
                                                    className="tab-pane active card-body">
                                                    <div className="navegacion-contactenos--content-ubicacion w-50 w-md-75 w-lg-50">
                                                        <span className="navegacion-contactenos--content-ubicacion-title">Nuestra <span className="navegacion-contactenos--content-ubicacion-title-blue">ubicación:</span>
                                                        </span>
                                                        <div className="navegacion-contactenos--content-ubicacion-content">
                                                            <span>Cra 23 # 70a-44 Manizales, Colombia</span>
                                                        </div>
                                                        <div className="navegacion-contactenos--content-ubicacion-google">
                                                            <a
                                                                href="https://www.google.com/maps/place/Licitaciones.Info/@5.0508836,-75.484211,15z/data=!4m5!3m4!1s0x0:0x6150198db5afae40!8m2!3d5.0508836!4d-75.484211"
                                                                target="_blank" className='d-flex'><img src="/images/contacto/google_maps.svg" alt="Logo google maps" /> Ver en maps </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="preguntas-frecuentes" title="preguntas-frecuentes">
                                                <h3>Preguntas Frecuentes</h3>
                                                <Accordion defaultActiveKey="0" flush>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                                culpa qui officia deserunt mollit anim id est laborum.
                                                            </p>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </Tab>
                                        </Tabs>



                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 pr-0 contactenos_form--datos-empresa">
                            <div id="informacion-empresa">
                                <div className="informacion-empresa--card">
                                    <div className="informacion-empresa--title"><i className="icon-clock"></i><span>Horarios de atención:</span>
                                    </div>
                                    <div className="informacion-empresa--content"><span className='c-gray'>Lunes a Viernes 8:00 am a 6:00 pm</span>
                                    </div>
                                </div>
                                <div className="informacion-empresa--card">
                                    <div className="informacion-empresa--title"><i className="icon-mail"></i><span>Email:</span>
                                    </div>
                                    <div className="informacion-empresa--content"><span className='c-gray'>servicioalcliente@licitaciones.info</span>
                                        <div className="clipboard-generico-content"><button id="popover-target-1"
                                            className="clipboard-generico-content--botton"><i className="icon-copy"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="informacion-empresa--card">
                                    <div className="informacion-empresa--title"><i className="icon-smartphone"></i><span>Teléfonos:</span>
                                    </div>
                                    <div className="informacion-empresa--content-numbers">
                                        <div className="informacion-empresa--content informacion-empresa--content--flex mb-2"><span
                                            className="informacion-empresa--content-bold-roboto c-gray fw-bold">Fijo:</span><span><span
                                                className="informacion-empresa--content-margin-right c-gray">+57 601 508 61 55</span>
                                                <div className="clipboard-generico-content"><button id="popover-target-2"
                                                    className="clipboard-generico-content--botton"><i className="icon-copy"></i></button>
                                                </div>
                                            </span>
                                        </div>
                                        <div className="informacion-empresa--content informacion-empresa--content--flex"><span
                                            className="informacion-empresa--content-bold-roboto c-gray fw-bold">Móvil:</span><span><span
                                                className="informacion-empresa--content-margin-right c-gray">+57 310 370 8276</span>
                                                <div className="clipboard-generico-content"><button id="popover-target-3"
                                                    className="clipboard-generico-content--botton"><i className="icon-copy"></i></button>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="informacion-empresa--card">
                                    <div className="informacion-empresa--title"><i className="icon-social"></i><span>Redes sociales:</span>
                                    </div>
                                    <div className="informacion-empresa--img"><a href="https://www.facebook.com/licitacionesInfo/" target="_blank"><img
                                        src="/icons/multicolor/facebook.svg" alt="logo facebook" /></a><a
                                            href="https://www.linkedin.com/company/licitaciones.info/about/" target="_blank">
                                            <img
                                                src="/icons/multicolor/linkedin.svg" alt="logo linkedin" /></a><a
                                                    href="https://www.youtube.com/c/LicitacionesInfo" target="_blank"><img
                                                src="/icons/multicolor/youtube.svg" alt="logo youtube" /></a><a
                                                    href="https://twitter.com/licitacionesinf?lang=es" target="_blank"><img
                                                src="/icons/multicolor/twitter.svg" alt="logo twitter" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    );
}
