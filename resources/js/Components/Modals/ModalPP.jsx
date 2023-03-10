import React from "react";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import { Head } from "@inertiajs/inertia-react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBScrollspy,
    MDBScrollspyLink,
} from "mdb-react-ui-kit";
import "@/Components/Modals/ModalPP.css";
import "@fontsource/poppins";

export const ModalPP = ({ showPP, handleClosePP }) => {
    const home = useRef(null);
    const Finalidad = useRef(null);
    const Derechos = useRef(null);
    const Transferencia = useRef(null);
    const Termino = useRef(null);

    const containerRef = useRef(null);

    return (
        <Modal
            fullscreen
            dialogClassName=""
            contentClassName="modal-content-pp"
            centered
            show={showPP}
            onHide={handleClosePP}
            id="modalPP"
        >
            <Modal.Header></Modal.Header>
            <Modal.Body className="modal-header-pp">
                <Head title="Politicas de privacidad" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap"
                    rel="stylesheet"
                ></link>
                <MDBContainer className="modal-pp">
                    <MDBRow>
                        <div className="container-politicspri">
                            <div className="politicspri">
                                <MDBCol className="politicspri-index">
                                    <MDBScrollspy container={containerRef}>
                                        <p className="politicspri-title-cont">
                                            &nbsp;&nbsp;&nbsp;&nbsp;Contenido
                                        </p>
                                        <MDBScrollspyLink targetRef={home}>
                                            <strong>
                                                &gt;&nbsp;&nbsp;&nbsp;
                                            </strong>{" "}
                                            | Inicio
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink targetRef={Finalidad}>
                                            <strong>
                                                &gt;&nbsp;&nbsp;&nbsp;
                                            </strong>
                                            Finalidad del tratamiento de los
                                            datos personales
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink targetRef={Derechos}>
                                            <strong>
                                                &gt;&nbsp;&nbsp;&nbsp;
                                            </strong>
                                            Derechos de los titulares de los
                                            datos personales
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={Transferencia}
                                        >
                                            <strong>
                                                &gt;&nbsp;&nbsp;&nbsp;
                                            </strong>
                                            Transferencia de Datos a Terceros
                                            Pa??ses
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink targetRef={Termino}>
                                            <strong>
                                                &gt;&nbsp;&nbsp;&nbsp;
                                            </strong>
                                            T??rmino de almacenamiento de la
                                            informaci??n
                                        </MDBScrollspyLink>
                                        <hr />
                                    </MDBScrollspy>
                                </MDBCol>
                            </div>
                            <div
                                className="politicspri-info"
                                id="element"
                                ref={containerRef}
                            >
                                <button
                                    type="button"
                                    className="btn-pp"
                                    onClick={handleClosePP}
                                >
                                    <span className="x-pp">x</span>
                                </button>
                                <MDBCol>
                                    <section ref={home} id="section-1">
                                        <br />
                                        <h2 className="text-center">
                                            <span
                                                className="politicspri-title"
                                                style={{
                                                    color: "#686868b6",
                                                }}
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
                                        <hr />
                                        <p>
                                            Conforme a lo previsto en el
                                            art??culo 15 de la Constituci??n
                                            Pol??tica de Colombia y en la
                                            legislaci??n internacional aplicable
                                            sobre protecci??n de datos,
                                            LICITACIONES.INFO SAS asume el firme
                                            compromiso de velar por la debida
                                            protecci??n de los derechos de los
                                            Titulares de informaci??n, as?? como
                                            el de salvaguardar la informaci??n
                                            personal suministrada por estos.
                                        </p>
                                        <p>
                                            Al utilizar nuestros servicios,
                                            usted acepta que LICITACIONES.INFO
                                            SAS puede utilizar sus datos
                                            personales de acuerdo con nuestra
                                            pol??tica de protecci??n de datos
                                            personales.{" "}
                                        </p>
                                        <p>
                                            <strong>
                                                Responsable del tratamiento de
                                                datos:
                                            </strong>
                                        </p>
                                        <p>
                                            LICITACIONES.INFO S.A.S. <br />
                                            NIT: 900.519.829-2 <br />
                                            Oficina Principal: Manizales -
                                            Caldas - Colombia <br />
                                            Correo de contacto:
                                            servicioalcliente@licitaciones.info{" "}
                                            <br />
                                            Tel??fono:+57 310 370 8276{" "}
                                        </p>
                                    </section>
                                    <br />
                                    <section ref={Finalidad} id="section-2">
                                        <span className="politicspri-subtitles">
                                            Finalidad del tratamiento de los
                                            datos personales
                                        </span>
                                        <br />
                                        <br />
                                        <p>
                                            Los datos personales proporcionados
                                            a LICITACIONES.INFO S.A.S. mediante
                                            el formulario de registro para
                                            acceder a sus aplicativos
                                            www.setcon.com.co y
                                            www.licitaciones.info ser??n objeto
                                            de tratamiento (recolecci??n,
                                            almacenamiento, uso, circulaci??n o
                                            supresi??n) para la finalidad
                                            espec??fica para la que fueron
                                            suministrados.
                                        </p>
                                        <p>
                                            El tratamiento de los datos
                                            personales del Titular tendr?? como
                                            finalidad exclusiva: <br />
                                            i)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            Proporcionarle informaci??n
                                            relacionada con las oportunidades de
                                            negocio de su inter??s. <br />
                                            ii)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Env??o
                                            de informaci??n sobre
                                            actualizaciones, cambios y/o
                                            inconvenientes en nuestro servicio.{" "}
                                            <br />
                                            iii)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Invitaci??n
                                            a que conocer nuestro servicio.
                                        </p>

                                        <p>
                                            El usuario podr?? optar por no
                                            recibir nuestras comunicaciones o
                                            servicios electr??nicos, cambiando la
                                            opci??n de notificaciones dispuesta
                                            en nuestra plataforma
                                            licitaciones.info, o mediante el
                                            enlace que se env??a adjunto a todos
                                            los correos y comunicaciones de la
                                            empresa el cual le permitir?? dejar
                                            de estar suscrito en la lista de
                                            mensajes electr??nicos.{" "}
                                        </p>
                                        <p>
                                            En cualquier momento puede solicitar
                                            la eliminaci??n de su informaci??n de
                                            nuestra base de datos.{" "}
                                        </p>
                                        <p>
                                            Si usted nos contacta o es
                                            contactado por alguno de nuestros
                                            agentes comerciales, conservaremos
                                            un registro de la comunicaci??n, lo
                                            que nos ayudara a brindarle un mejor
                                            soporte en eventos futuros.
                                        </p>
                                        <p>
                                            Para efectos de comercializaci??n de
                                            nuestro servicio optamos por
                                            adquirir datos personales publicados
                                            en sitios gubernamentales y/o los
                                            obtenemos mediante las c??maras de
                                            comercio m??s importantes del pa??s.
                                            Los titulares de estos datos son
                                            debidamente contactados para validar
                                            su autorizaci??n de manejo de datos e
                                            invitarlos a registrarse en nuestra
                                            plataforma.
                                        </p>
                                    </section>
                                    <br />
                                    <section ref={Derechos} id="section-3">
                                        <span className="politicspri-subtitles">
                                            Derechos de los titulares de los
                                            datos personales
                                        </span>
                                        <br />
                                        <br />
                                        <p>
                                            Como titular de sus datos
                                            personales, usted podr?? acceder,
                                            conocer, actualizar y rectificar
                                            dichos datos; ser informado sobre el
                                            uso dado a los mismos y la
                                            autorizaci??n con que se cuenta para
                                            ello; presentar consultas y
                                            reclamos; revocar la autorizaci??n o
                                            solicitar la supresi??n de sus datos,
                                            en los casos en que sea necesario.
                                            Usted podr?? ejercer su derecho
                                            fundamental de habeas data a trav??s
                                            de nuestros canales de soporte.{" "}
                                        </p>
                                        <p>
                                            Si usted encuentra que la
                                            informaci??n que poseemos es
                                            incorrecta, nos comprometemos en
                                            ofrecerle a tiempo la manera de
                                            actualizarla o eliminarla. Si
                                            necesita actualizar su informaci??n
                                            personal, le pediremos que realice
                                            la solicitud por escrito antes de
                                            que podamos actuar seg??n su
                                            necesidad, con el ??nimo de validad
                                            la legitimidad de la modificaci??n de
                                            estos datos.{" "}
                                        </p>
                                        <p>
                                            Solicitaremos su consentimiento
                                            antes de utilizar la informaci??n
                                            para otro fin que no sea alguno de
                                            los dispuestos en la presente
                                            Pol??tica de Privacidad.{" "}
                                        </p>
                                        <p>
                                            Nuestra Pol??tica de Privacidad no
                                            cubre las pr??cticas de informaci??n
                                            de otras empresas y organizaciones
                                            que utilizan datos personales a
                                            t??tulo de informaci??n p??blica.{" "}
                                        </p>
                                        <p>
                                            Estamos comprometidos en proteger y
                                            dar un buen manejo a la informaci??n
                                            personal que los Titulares nos
                                            suministran, para ello se han tomado
                                            precauciones razonables de seguridad
                                            para mantener dicha protecci??n. Sin
                                            embargo, en atenci??n a los
                                            potenciales peligros del internet,
                                            no podemos garantizar que la
                                            informaci??n suministrada est??
                                            completamente a salvo de personas
                                            que traten de burlar nuestros
                                            esquemas de seguridad. Por lo tanto,
                                            nuestros usuarios deben aceptar el
                                            potencial riesgo que ello implica.{" "}
                                        </p>
                                    </section>
                                    <br />
                                    <section ref={Transferencia} id="section-4">
                                        <span className="politicspri-subtitles">
                                            Transferencia de Datos a Terceros
                                            Pa??ses
                                        </span>
                                        <br />
                                        <br />
                                        <p>
                                            En armon??a con nuestra estrategia de
                                            expansi??n mundial, es posible que la
                                            obtenci??n, uso y divulgaci??n de la
                                            informaci??n personal, requiera la
                                            transferencia de dicha informaci??n a
                                            entidades ubicadas en otros pa??ses
                                            donde no existan normas equivalentes
                                            a las de Colombia sobre privacidad y
                                            protecci??n de los datos, en estos
                                            casos LICITACIONES.INFO SAS le
                                            pedir?? al Titular de la informaci??n
                                            su consentimiento para efectuar
                                            dichas transferencias.
                                        </p>
                                    </section>
                                    <br />
                                    <section ref={Termino} id="section-5">
                                        <span className="politicspri-subtitles">
                                            T??rmino de almacenamiento de la
                                            informaci??n
                                        </span>
                                        <br />
                                        <br />
                                        <p>
                                            La informaci??n personal suministrada
                                            mediante nuestra plataforma, ser??
                                            guardada y mantenida durante el
                                            tiempo que sea necesario para la
                                            prestaci??n eficiente de nuestro
                                            servicio, a menos que el Titular de
                                            los datos haya dado instrucciones
                                            diferentes.
                                        </p>
                                        <p>
                                            Si el Titular recibe un mensaje de
                                            correo electr??nico no solicitado, o
                                            cualquier mensaje amenazador u
                                            ofensivo, o considera que otro
                                            usuario o cualquier persona le est??
                                            vulnerando un derecho conforme a la
                                            presente Pol??tica, deber?? enviarnos
                                            oportunamente una copia completa y
                                            sin modificar del mensaje de correo
                                            electr??nico recibido, con los
                                            encabezados completos a la direcci??n
                                            electr??nica
                                            servicioalcliente@licitaciones.info.
                                        </p>
                                        <br />
                                    </section>
                                </MDBCol>
                            </div>
                        </div>
                    </MDBRow>
                </MDBContainer>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
};

export default ModalPP;
