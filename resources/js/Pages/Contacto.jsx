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

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Paises } from '@/Components/Paises';

//import Sonnet from '../../components/Sonnet';

export default function Contacto(props) {

    const [key, setKey] = useState('escribenos');
    const [show, setShow] = useState(false);
    const [Country, SetCountry] = useState(
        { image: "/images/banderas/listado_nombres/CHL.svg", "title": "Chile", "indicative": "+56", "fixed": true },
    )

    const print = (val) => {
        if (val == "whatsapp") {
            setKey('escribenos')
        } else {
            setKey(val)
        }
    };

    const copyText = (id) => {
        var aux = document.createElement("input");
        aux.setAttribute("value", document.getElementById(id).innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addCountry = (country) => {
        SetCountry(country)
        setShow(false)
    }

    return (
        <>
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />
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
                                                    href="https://api.whatsapp.com/send?phone=573103708276" eventKey="whatsapp"
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
                                                                <div className="contactenos_form--campo-telefono">
                                                                    <div className="contactenos_form--campo-indicativo" onClick={handleShow}>
                                                                        <img src={Country.image} alt="imagen bandera seleccionada"
                                                                            className="contactenos_form--campo-indicativo-bandera" />
                                                                        <span htmlFor="" className="contactenos_form--campo-indicativo-nombrepais"> {Country.indicative} </span>
                                                                        <span className="icon-down contactenos_form--campo-indicativo-icoflecha"></span>
                                                                    </div>
                                                                    <hr data-v-74a0c684="" className="linea__divisoria" style={{ width: 4 + 'px', height: 18 + 'px' }} />
                                                                    <div className="contactenos_form--campo-input-container">
                                                                        <input id="tel" name="tel" type="text" placeholder="Ingresa tu número"
                                                                            className="contactenos_form--campo-telefono-input contactenos_form--campo-input" aria-required="true"
                                                                            aria-invalid="false" />
                                                                        <span className="">
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <Modal show={show} onHide={handleClose}>
                                                                    <Modal.Header closeButton>
                                                                    </Modal.Header>
                                                                    <Modal.Body><Paises addCountry={addCountry}/></Modal.Body>
                                                                    <Modal.Footer>
                                                                    </Modal.Footer>
                                                                </Modal>


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
                                                <div className="navegacion-contactenos--text-content">
                                                    <h3>Preguntas Frecuentes</h3>
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>¿En qué consiste el servicio que presta LICITACIONES.INFO?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="card-body">
                                                                    <p className="card-text">En licitaciones.info centralizamos miles de licitaciones en un solo lugar a través del mejor sistema de procesamiento de información, combinando innovación tecnológica con talento humano especializado en el análisis de datos, permitiendo transformar la información del mercado de compras públicas en oportunidades de negocio para todas las empresas. <br /><br />Nuestro servicio te permite consultar desde cualquier lugar del mundo y desde cualquier dispositivo las licitaciones que se están publicando a diario en Colombia, Ecuador y Panamá.</p>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header>¿Cómo me beneficio con el servicio que presta LICITACIONES .INFO?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="card-body">
                                                                    <p className="card-text navegacion-contactenos--content-text-acordeon">Con LICITACIONES.INFO aumentarás tus capacidades de participación en el mercado de las compras públicas gracias a los siguientes beneficios: <br /><br /><span className="navegacion-contactenos--content-text-acordeon-blue">OPTIMIZACIÓN</span> <span className="navegacion-contactenos--content-text-acordeon-bold">DE TIEMPO &amp; DINERO:</span> Centralizamos en un solo lugar las licitaciones pautadas en las plataformas Secop I, Secop II, Sercop, Panamá Compra, en 800 portales de entidades descentralizadas y en páginas de organismos no gubernamentales. Esta información la presentamos en un formato practico y ordenado, no requieres digitar códigos CAPCHA de seguridad, ni hacer búsquedas extensas ya que la información la encontrarás en un entorno que te brinda una excelente experiencia de usuario. Por lo tanto, los costos en tiempo y dinero asociados a la búsqueda y almacenamiento de información de procesos de contratación se reducen significativamente. <br /><br /><span className="navegacion-contactenos--content-text-acordeon-blue">ORGANIZACIÓN</span> <span className="navegacion-contactenos--content-text-acordeon-bold">DE LA INFORMACIÓN:</span> Nuestras funcionalidades te ayudan a gestionar grandes volúmenes de datos a través de sistemas de carpetas, iconos representativos, notas recordatorias y buscadores muy fáciles de utilizar para que encuentres todo muy rápido y fácilmente. <br /><br /><span className="navegacion-contactenos--content-text-acordeon-blue">MAS OPORTUNIDADES</span> <span className="navegacion-contactenos--content-text-acordeon-bold">DE PARTICIPACIÓN:</span> Te brindamos acceso a toda la contratación en Colombia, Ecuador y Panamá sin restricciones, puedes crear la cantidad de perfiles de negocio que desees y acceder a históricos de información de años atrás para hacer estudios de mercado descriptivos, con lo cual podrás identificar a tus posibles clientes, posibles aliados y posibles competidores, así como tendencias de comportamiento en la compra de los productos que ofreces.<br /><br /><span className="navegacion-contactenos--content-text-acordeon-bold">TRABAJO EN</span> <span className="navegacion-contactenos--content-text-acordeon-blue">EQUIPO:</span> Proporcionamos la funcionalidad de asignar subcuentas a otros miembros de tu equipo. Asignamos hasta 2 subcuentas para dominios públicos y hasta 10 subcuentas para dominios privados.</p>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header>¿Cuándo recibiré notificaciones de LICITACIONES.INFO?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="card-body">
                                                                    <p className="card-text">Durante todo el día buscamos licitaciones y convocatorias publicas en las cuales existe la oportunidad de participar, posteriormente un analista de contratos toma el proceso y le asigna la parametrización de la actividad económica, la ubicación, la cuantía y la modalidad adecuadas, después pasa por un proceso de calidad en el cual se confirma que las categorías seleccionadas son las correctas, por ultimo se realiza el envío a cada uno de los usuarios que tienen perfecta coincidencia con las características asignadas a cada proceso.</p>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header>¿Cómo puedo aprender a manejar el portal?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="card-body">
                                                                    <p className="card-text">Al momento de crear tu cuenta en la plataforma de Licitaciones.info te es asignado un consultor personalizado quien te ofrecerá un espacio de 45 minutos para enseñarte todo el manejo del portal. Adicionalmente estará pendiente de todas tus dudas, inquietudes y solicitudes cuando hagas uso de nuestro servicio. Sin embargo, en este enlace podrás tener a la mano el manual de usuario para que lo consultes cuando lo necesites de forma autónoma.</p>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="4">
                                                            <Accordion.Header>¿Qué canales de comunicación ofrece LICITACIONES.INFO para enviar las notificaciones de licitaciones y convocatorias?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="card-body">
                                                                    <p className="card-text">En la actualidad ponemos a tu disposición diferentes maneras para consultar los procesos de contratación:<br /><br /><span className="navegacion-contactenos--content-text-acordeon-bold">CORREO ELECTRÓNICO:</span> Enviamos de manera permanente y oportuna la información de los procesos y las novedades de su interés al correo electrónico registrado. <br /><br /><span className="navegacion-contactenos--content-text-acordeon-bold">PLATAFORMA WEB:</span> En la sesión de usuario tendrás a disposición todos los procesos de contratación, así como las herramientas necesarias para administrar dicha información en pro de alcanzar tus resultados <a href="www.lictacionescolombia.info" target="_blank">www.lictacionescolombia.info</a>. <br /><br /><span className="navegacion-contactenos--content-text-acordeon-bold">APLICATIVO MÓVIL:</span> Combina la capacidad informativa del correo electrónico con la portabilidad de un equipo móvil y todas las ventajas de nuestro servicio sin depender de un computador. <br /><br /><span className="navegacion-contactenos--content-text-acordeon-bold">API:</span> Puedes conectar la interfaz de usuario desarrollada por tu compañía a nuestros sistemas de transmisión de datos para que optimices procesos y recursos en tu equipo de trabajo.</p>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="5">
                                                            <Accordion.Header>¿Cómo puedo hacer uso del aplicativo móvil?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="card-body">
                                                                    <p className="card-text">Nuestra app móvil se encuentra disponible para sistemas operativos Android y iOS, nos puedes encontrar como Licitaciones.info. <br /><br />Para ingresar debes iniciar sesión con tu correo electrónico registrado en licitaciones.info y la misma contraseña de acceso al portal. <br /><br />El uso de nuestra APP no tiene ningún costo para nuestros suscriptores.</p>
                                                                    <div className="navegacion-contactenos--content-img-acordeon d-flex">
                                                                        <a href="https://play.google.com/store/apps/details?id=com.setcon.licitacionesinfo&amp;hl=es" target="_blank">
                                                                            <img src="/icons/multicolor/google_play.webp" alt="Logo google play" /></a>
                                                                        <a href="https://apps.apple.com/co/app/licitaciones/id1210052711" target="_blank">
                                                                            <img src="/icons/multicolor/app-store.svg" alt="Logo app store" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="6">
                                                            <Accordion.Header>¿Cuántos correos electrónicos puedo activar al tener mi servicio con Licitaciones.info?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="card-body">
                                                                    <p className="card-text">Sabemos de la importancia de trabajar simultáneamente con otras personas, por ello el registro de correos electrónicos adicionales te ayuda y te aporta para que logres una gestión colaborativa con tu equipo de trabajo. Por lo anterior, dispones de las siguientes 3 opciones: <br /><br /> Registrar hasta 2 correos adicionales con dominios públicos (Gmail, Hotmail, Yahoo!). <br /><br /> Registrar hasta 10 correos adicionales con un mismo dominio corporativo (@empresa.com). <br /><br /> Si requieres registrar un mayor número de subcuentas debes enviar tu solicitud al correo <a href="mailto:servicioalcliente@licitaciones.info">servicioalcliente@licitaciones.info</a> indicando cantidad de usuarios, dominio empresarial y objetivo de la vinculación masiva. Se te enviará una cotización de acuerdo con tus necesidades.</p>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="7">
                                                            <Accordion.Header>¿Cómo puedo crear una subcuenta?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="card-body">
                                                                    <p className="card-text">Debes iniciar sesión en www.licitaciones.info, luego te ubicas en la parte superior derecha (específicamente en el ícono donde aparece tu nombre), al hacer clic ahí se despliega un menú de opciones, seleccionas “Mis subcuentas” para posteriormente llenar los campos que te indica la plataforma. <br /><br /> Cuando se realice la creación, al correo de la persona que registraste enviaremos un email de confirmación, con el fin de prevenir inconvenientes al momento de enviar las notificaciones a esa cuenta.</p>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="8">
                                                            <Accordion.Header>¿Por qué no recibo información de LICITACIONES.INFO en la bandeja de entrada de mi correo electrónico?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="card-body">
                                                                    <p className="card-text">Debes verificar que esté bien escrito tu correo electrónico y que no se encuentre lleno. Ten presente que en algunas ocasiones nuestros mensajes pueden llegar a las carpetas de SPAM o Correo no deseado para lo cual nos debes añadir nuestro correo a tus contactos. <br /><br /> Si tu correo es de dominio privado (@nombredelaempresa) debes tener en cuenta que tienen un elevado nivel de seguridad y por lo tanto el ingreso de nuestros correos puede estar restringido, en este caso debes validar con tu equipo de seguridad informática para proceder según sus recomendaciones. En cualquier caso, la recomendación es que informes a tu consultor asignado para que te ayude de manera personalizada a resolver la situación.</p>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="9">
                                                            <Accordion.Header>¿Tengo que firmar algún contrato para empezar a usar Licitaciones.info?</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="card-body">
                                                                    <p className="card-text">Para usar Licitaciones.info no tienes que firmar ningún contrato, solo aceptar las condiciones y términos de uso como SAAS.<br /><br /> Cuando te registras y empiezas a usar la herramienta se entiende que estos términos y condiciones son aceptados por ambas partes, el usuario y Licitaciones.info.</p>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
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
                                    <div className="informacion-empresa--content"><span className='c-gray' id="copy-email">servicioalcliente@licitaciones.info</span>
                                        <div className="clipboard-generico-content"><button id="popover-target-1"
                                            className="clipboard-generico-content--botton"><i className="icon-copy" onClick={() => copyText('copy-email')}></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="informacion-empresa--card">
                                    <div className="informacion-empresa--title"><i className="icon-smartphone"></i><span>Teléfonos:</span>
                                    </div>
                                    <div className="informacion-empresa--content-numbers">
                                        <div className="informacion-empresa--content informacion-empresa--content--flex mb-2" ><span
                                            className="informacion-empresa--content-bold-roboto c-gray fw-bold">Fijo:</span><span><span
                                                className="informacion-empresa--content-margin-right c-gray" id='copy-phone' >+57 601 508 61 55</span>
                                                <div className="clipboard-generico-content">
                                                    <button id="popover-target-2"
                                                        className="clipboard-generico-content--botton"><i className="icon-copy" onClick={() => copyText('copy-phone')}></i></button>
                                                </div>
                                            </span>
                                        </div>
                                        <div className="informacion-empresa--content informacion-empresa--content--flex"><span
                                            className="informacion-empresa--content-bold-roboto c-gray fw-bold">Móvil:</span><span><span
                                                className="informacion-empresa--content-margin-right c-gray" id='copy-phone-2'>+57 310 370 8276</span>
                                                <div className="clipboard-generico-content">
                                                    <button id="popover-target-3"
                                                        className="clipboard-generico-content--botton"><i className="icon-copy" onClick={() => copyText('copy-phone-2')}></i></button>
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
