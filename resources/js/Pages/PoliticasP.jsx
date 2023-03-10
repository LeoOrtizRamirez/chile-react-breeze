import React, { useState, useRef } from "react";
import { Head } from "@inertiajs/inertia-react";
import { FooterLite } from "@/Components/Footer/FooterLite";
import Header from "@/Components/Header/HeaderLite";
import "@fontsource/poppins";
import "./PoliticasP.css";
import "@fontsource/poppins";

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
                    <div className="container-politicspri">
                        <div className="policy">
                            <MDBCol>
                                <div className="policy-page">
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
                                            Finalidad del tratamiento de los
                                            datos personales
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={derechosTitulares}
                                        >
                                            Derechos de los titulares de los
                                            datos personales
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={transferenciaDatos}
                                        >
                                            Transferencia de Datos a Terceros
                                            Pa??ses
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={terminoDeAlmacenamiento}
                                        >
                                            T??rmino de almacenamiento de la
                                            informaci??n
                                        </MDBScrollspyLink>
                                    </MDBScrollspy>
                                </div>
                            </MDBCol>
                        </div>

                        <div
                            className="policy-info"
                            id="element"
                            ref={containerRef}
                        >
                            <MDBCol>
                                <section ref={home} id="section-1">
                                    <h2 id="home" className="text-center">
                                        <span
                                            className="politicspri-title"
                                            style={{ color: "#686868b6" }}
                                        >
                                            Pol??tica de protecci??n de &nbsp;
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
                                        Conforme a lo previsto en el art??culo 15
                                        de la Constituci??n Pol??tica de Colombia
                                        y en la legislaci??n internacional
                                        aplicable sobre protecci??n de datos,
                                        LICITACIONES.INFO SAS asume el firme
                                        compromiso de velar por la debida
                                        protecci??n de los derechos de los
                                        Titulares de informaci??n, as?? como el de
                                        salvaguardar la informaci??n personal
                                        suministrada por estos.
                                    </p>
                                    <br />
                                    <p>
                                        Al utilizar nuestros servicios, usted
                                        acepta que LICITACIONES.INFO SAS puede
                                        utilizar sus datos personales de acuerdo
                                        con nuestra pol??tica de protecci??n de
                                        datos personales.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        <strong>
                                            Responsable del tratamiento de
                                            datos:
                                        </strong>
                                    </p>
                                    <br />
                                    <p>
                                        LICITACIONES.INFO S.A.S. <br />
                                        NIT: 900.519.829-2 <br />
                                        Oficina Principal: Manizales - Caldas -
                                        Colombia <br />
                                        Correo de contacto:
                                        servicioalcliente@licitaciones.info{" "}
                                        <br />
                                        Tel??fono:+57 310 370 8276{" "}
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={finalidadDelTratamiento}
                                    id="section-2"
                                >
                                    <span className="policy-subtitles">
                                        Finalidad del tratamiento de los datos
                                        personales
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Los datos personales proporcionados a
                                        LICITACIONES.INFO S.A.S. mediante el
                                        formulario de registro para acceder a
                                        sus aplicativos www.setcon.com.co y
                                        www.licitaciones.info ser??n objeto de
                                        tratamiento (recolecci??n,
                                        almacenamiento, uso, circulaci??n o
                                        supresi??n) para la finalidad espec??fica
                                        para la que fueron suministrados.
                                    </p>
                                    <br />
                                    <p>
                                        El tratamiento de los datos personales
                                        del Titular tendr?? como finalidad
                                        exclusiva: <br />
                                        i)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Proporcionarle informaci??n relacionada
                                        con las oportunidades de negocio de su
                                        inter??s. <br />
                                        ii)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Env??o
                                        de informaci??n sobre actualizaciones,
                                        cambios y/o inconvenientes en nuestro
                                        servicio. <br />
                                        iii)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Invitaci??n
                                        a que conocer nuestro servicio.
                                    </p>
                                    <br />
                                    <p>
                                        El usuario podr?? optar por no recibir
                                        nuestras comunicaciones o servicios
                                        electr??nicos, cambiando la opci??n de
                                        notificaciones dispuesta en nuestra
                                        plataforma licitaciones.info, o mediante
                                        el enlace que se env??a adjunto a todos
                                        los correos y comunicaciones de la
                                        empresa el cual le permitir?? dejar de
                                        estar suscrito en la lista de mensajes
                                        electr??nicos.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        En cualquier momento puede solicitar la
                                        eliminaci??n de su informaci??n de nuestra
                                        base de datos.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        Si usted nos contacta o es contactado
                                        por alguno de nuestros agentes
                                        comerciales, conservaremos un registro
                                        de la comunicaci??n, lo que nos ayudara a
                                        brindarle un mejor soporte en eventos
                                        futuros.
                                    </p>
                                    <br />
                                    <p>
                                        Para efectos de comercializaci??n de
                                        nuestro servicio optamos por adquirir
                                        datos personales publicados en sitios
                                        gubernamentales y/o los obtenemos
                                        mediante las c??maras de comercio m??s
                                        importantes del pa??s. Los titulares de
                                        estos datos son debidamente contactados
                                        para validar su autorizaci??n de manejo
                                        de datos e invitarlos a registrarse en
                                        nuestra plataforma.
                                    </p>

                                    <br />
                                </section>

                                <section ref={derechosTitulares} id="section-3">
                                    <span className="policy-subtitles">
                                        Derechos de los titulares de los datos
                                        personales
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Como titular de sus datos personales,
                                        usted podr?? acceder, conocer, actualizar
                                        y rectificar dichos datos; ser informado
                                        sobre el uso dado a los mismos y la
                                        autorizaci??n con que se cuenta para
                                        ello; presentar consultas y reclamos;
                                        revocar la autorizaci??n o solicitar la
                                        supresi??n de sus datos, en los casos en
                                        que sea necesario. Usted podr?? ejercer
                                        su derecho fundamental de habeas data a
                                        trav??s de nuestros canales de soporte.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        Si usted encuentra que la informaci??n
                                        que poseemos es incorrecta, nos
                                        comprometemos en ofrecerle a tiempo la
                                        manera de actualizarla o eliminarla. Si
                                        necesita actualizar su informaci??n
                                        personal, le pediremos que realice la
                                        solicitud por escrito antes de que
                                        podamos actuar seg??n su necesidad, con
                                        el ??nimo de validad la legitimidad de la
                                        modificaci??n de estos datos.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        Solicitaremos su consentimiento antes de
                                        utilizar la informaci??n para otro fin
                                        que no sea alguno de los dispuestos en
                                        la presente Pol??tica de Privacidad.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        Nuestra Pol??tica de Privacidad no cubre
                                        las pr??cticas de informaci??n de otras
                                        empresas y organizaciones que utilizan
                                        datos personales a t??tulo de informaci??n
                                        p??blica.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        Estamos comprometidos en proteger y dar
                                        un buen manejo a la informaci??n personal
                                        que los Titulares nos suministran, para
                                        ello se han tomado precauciones
                                        razonables de seguridad para mantener
                                        dicha protecci??n. Sin embargo, en
                                        atenci??n a los potenciales peligros del
                                        internet, no podemos garantizar que la
                                        informaci??n suministrada est??
                                        completamente a salvo de personas que
                                        traten de burlar nuestros esquemas de
                                        seguridad. Por lo tanto, nuestros
                                        usuarios deben aceptar el potencial
                                        riesgo que ello implica.{" "}
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={transferenciaDatos}
                                    id="section-4"
                                >
                                    <span className="policy-subtitles">
                                        Transferencia de Datos a Terceros Pa??ses
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        En armon??a con nuestra estrategia de
                                        expansi??n mundial, es posible que la
                                        obtenci??n, uso y divulgaci??n de la
                                        informaci??n personal, requiera la
                                        transferencia de dicha informaci??n a
                                        entidades ubicadas en otros pa??ses donde
                                        no existan normas equivalentes a las de
                                        Colombia sobre privacidad y protecci??n
                                        de los datos, en estos casos
                                        LICITACIONES.INFO SAS le pedir?? al
                                        Titular de la informaci??n su
                                        consentimiento para efectuar dichas
                                        transferencias.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={terminoDeAlmacenamiento}
                                    id="section-5"
                                >
                                    <span className="policy-subtitles">
                                        T??rmino de almacenamiento de la
                                        informaci??n
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        La informaci??n personal suministrada
                                        mediante nuestra plataforma, ser??
                                        guardada y mantenida durante el tiempo
                                        que sea necesario para la prestaci??n
                                        eficiente de nuestro servicio, a menos
                                        que el Titular de los datos haya dado
                                        instrucciones diferentes.
                                    </p>
                                    <br />
                                    <p>
                                        Si el Titular recibe un mensaje de
                                        correo electr??nico no solicitado, o
                                        cualquier mensaje amenazador u ofensivo,
                                        o considera que otro usuario o cualquier
                                        persona le est?? vulnerando un derecho
                                        conforme a la presente Pol??tica, deber??
                                        enviarnos oportunamente una copia
                                        completa y sin modificar del mensaje de
                                        correo electr??nico recibido, con los
                                        encabezados completos a la direcci??n
                                        electr??nica
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
