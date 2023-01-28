import React, { useState, useRef } from "react";
import { Head } from "@inertiajs/inertia-react";
import { FooterLite } from "@/Components/Footer/FooterLite";
import Header from "@/Components/Header/HeaderLite";
import "@fontsource/poppins";
import "./PoliticasP.css";
import "@fontsource/poppins";
import "../../css/estilos-terminos-condiciones.css";


import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBScrollspy,
    MDBScrollspyLink,
} from "mdb-react-ui-kit";



export const PoliticasP = (props) => {


    const home = useRef(null);
    const finalidadDelTratamiento = useRef(null);
    const derechosTitulares = useRef(null);
    const transferenciaDatos = useRef(null);
    const terminoDeAlmacenamiento = useRef(null);
    const containerRef = useRef(null);

    return (
        <>

            <Head title="Terminos y condiciones" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap"
                rel="stylesheet"
            ></link>
            <Header user={props}></Header>

            <MDBContainer className="container">
                <MDBRow>
                    <div className=" container-politicspri">
                        <div className="termcond">
                            <MDBCol>
                                <div className="termcond-page">
                                    <MDBScrollspy container={containerRef}>
                                        <p className="politicspri-title-cont">
                                            &nbsp;&nbsp;&nbsp;&nbsp;Contenido
                                        </p>
                                        <MDBScrollspyLink targetRef={home}>
                                            | Inicio
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={finalidadDelTratamiento}
                                        >
                                            Finalidad del tratamiento de los datos
                                            personales
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={derechosTitulares}
                                        >
                                            Derechos de los titulares de los datos
                                            personales
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={transferenciaDatos}
                                        >
                                            Transferencia de Datos a Terceros Países
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={terminoDeAlmacenamiento}
                                        >
                                            Término de almacenamiento de la
                                            información
                                        </MDBScrollspyLink>

                                    </MDBScrollspy>
                                </div>
                            </MDBCol>
                        </div>


                        <div className="termcond-info" id="element" ref={containerRef} >
                            <MDBCol>

                                <section ref={home} id="section-1">

                                    <h2 id="home" className="text-center">
                                        <span
                                            className="politicspri-title"
                                            style={{ color: "#686868b6" }}
                                        >
                                            Política de protección de &nbsp;
                                        </span>
                                        <span
                                            className="politicspri-title"
                                            style={{ color: "#00a1c9" }}
                                        >
                                            datos personales
                                        </span>
                                    </h2>


                                    <hr className="politicspri" />
                                    <p>
                                        Conforme a lo previsto en el artículo 15 de la
                                        Constitución Política de Colombia y en la
                                        legislación internacional aplicable sobre protección
                                        de datos, LICITACIONES.INFO SAS asume el firme
                                        compromiso de velar por la debida protección de los
                                        derechos de los Titulares de información, así como
                                        el de salvaguardar la información personal
                                        suministrada por estos.
                                    </p>
                                    <br />
                                    <p>
                                        Al utilizar nuestros servicios, usted acepta que
                                        LICITACIONES.INFO SAS puede utilizar sus datos
                                        personales de acuerdo con nuestra política de
                                        protección de datos personales.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        <strong>
                                            Responsable del tratamiento de datos:
                                        </strong>
                                    </p>
                                    <br />
                                    <p>
                                        LICITACIONES.INFO S.A.S. <br />
                                        NIT: 900.519.829-2 <br />
                                        Oficina Principal: Manizales - Caldas - Colombia{" "}
                                        <br />
                                        Correo de contacto:
                                        servicioalcliente@licitaciones.info <br />
                                        Teléfono:+57 310 370 8276{" "}
                                    </p>

                                </section>
                                <br />
                                <section ref={finalidadDelTratamiento} id="section-2">
                                    <span className="termcond-subtitles">
                                        Finalidad del tratamiento de los datos personales
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Los datos personales proporcionados a
                                        LICITACIONES.INFO S.A.S. mediante el formulario de
                                        registro para acceder a sus aplicativos
                                        www.setcon.com.co y www.licitaciones.info serán
                                        objeto de tratamiento (recolección, almacenamiento,
                                        uso, circulación o supresión) para la finalidad
                                        específica para la que fueron suministrados.
                                    </p>
                                    <br />
                                    <p>
                                        El tratamiento de los datos personales del Titular
                                        tendrá como finalidad exclusiva: <br />
                                        i)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Proporcionarle información relacionada con las
                                        oportunidades de negocio de su interés. <br />
                                        ii)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Envío
                                        de información sobre actualizaciones, cambios y/o
                                        inconvenientes en nuestro servicio. <br />
                                        iii)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Invitación
                                        a que conocer nuestro servicio.
                                    </p>
                                    <br />
                                    <p>
                                        El usuario podrá optar por no recibir nuestras
                                        comunicaciones o servicios electrónicos, cambiando
                                        la opción de notificaciones dispuesta en nuestra
                                        plataforma licitaciones.info, o mediante el enlace
                                        que se envía adjunto a todos los correos y
                                        comunicaciones de la empresa el cual le permitirá
                                        dejar de estar suscrito en la lista de mensajes
                                        electrónicos.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        En cualquier momento puede solicitar la eliminación
                                        de su información de nuestra base de datos.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        Si usted nos contacta o es contactado por alguno de
                                        nuestros agentes comerciales, conservaremos un
                                        registro de la comunicación, lo que nos ayudara a
                                        brindarle un mejor soporte en eventos futuros.
                                    </p>
                                    <br />
                                    <p>
                                        Para efectos de comercialización de nuestro servicio
                                        optamos por adquirir datos personales publicados en
                                        sitios gubernamentales y/o los obtenemos mediante
                                        las cámaras de comercio más importantes del país.
                                        Los titulares de estos datos son debidamente
                                        contactados para validar su autorización de manejo
                                        de datos e invitarlos a registrarse en nuestra
                                        plataforma.
                                    </p>

                                    <br />
                                </section>

                                <section
                                    ref={derechosTitulares}
                                    id="section-3"
                                >
                                    <span className="termcond-subtitles">
                                        Derechos de los titulares de los datos personales
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Como titular de sus datos personales, usted podrá
                                        acceder, conocer, actualizar y rectificar dichos
                                        datos; ser informado sobre el uso dado a los mismos
                                        y la autorización con que se cuenta para ello;
                                        presentar consultas y reclamos; revocar la
                                        autorización o solicitar la supresión de sus datos,
                                        en los casos en que sea necesario. Usted podrá
                                        ejercer su derecho fundamental de habeas data a
                                        través de nuestros canales de soporte.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        Si usted encuentra que la información que poseemos
                                        es incorrecta, nos comprometemos en ofrecerle a
                                        tiempo la manera de actualizarla o eliminarla. Si
                                        necesita actualizar su información personal, le
                                        pediremos que realice la solicitud por escrito antes
                                        de que podamos actuar según su necesidad, con el
                                        ánimo de validad la legitimidad de la modificación
                                        de estos datos.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        Solicitaremos su consentimiento antes de utilizar la
                                        información para otro fin que no sea alguno de los
                                        dispuestos en la presente Política de Privacidad.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        Nuestra Política de Privacidad no cubre las
                                        prácticas de información de otras empresas y
                                        organizaciones que utilizan datos personales a
                                        título de información pública.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        Estamos comprometidos en proteger y dar un buen
                                        manejo a la información personal que los Titulares
                                        nos suministran, para ello se han tomado
                                        precauciones razonables de seguridad para mantener
                                        dicha protección. Sin embargo, en atención a los
                                        potenciales peligros del internet, no podemos
                                        garantizar que la información suministrada esté
                                        completamente a salvo de personas que traten de
                                        burlar nuestros esquemas de seguridad. Por lo tanto,
                                        nuestros usuarios deben aceptar el potencial riesgo
                                        que ello implica.{" "}
                                    </p>

                                </section>
                                <br />
                                <section ref={transferenciaDatos} id="section-4">
                                    <span className="termcond-subtitles">
                                        Transferencia de Datos a Terceros Países
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        En armonía con nuestra estrategia de expansión
                                        mundial, es posible que la obtención, uso y
                                        divulgación de la información personal, requiera la
                                        transferencia de dicha información a entidades
                                        ubicadas en otros países donde no existan normas
                                        equivalentes a las de Colombia sobre privacidad y
                                        protección de los datos, en estos casos
                                        LICITACIONES.INFO SAS le pedirá al Titular de la
                                        información su consentimiento para efectuar dichas
                                        transferencias.
                                    </p>

                                </section>
                                <br />
                                <section ref={terminoDeAlmacenamiento} id="section-5">
                                    <span className="termcond-subtitles">
                                        Término de almacenamiento de la información
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        La información personal suministrada mediante
                                        nuestra plataforma, será guardada y mantenida
                                        durante el tiempo que sea necesario para la
                                        prestación eficiente de nuestro servicio, a menos
                                        que el Titular de los datos haya dado instrucciones
                                        diferentes.
                                    </p>
                                    <br />
                                    <p>
                                        Si el Titular recibe un mensaje de correo
                                        electrónico no solicitado, o cualquier mensaje
                                        amenazador u ofensivo, o considera que otro usuario
                                        o cualquier persona le está vulnerando un derecho
                                        conforme a la presente Política, deberá enviarnos
                                        oportunamente una copia completa y sin modificar del
                                        mensaje de correo electrónico recibido, con los
                                        encabezados completos a la dirección electrónica
                                        servicioalcliente@licitaciones.info.
                                    </p>
                                </section>

                            </MDBCol>
                        </div>




                    </div>
                </MDBRow>
            </MDBContainer>





            <FooterLite />
        </>
    );
};

export default PoliticasP;
