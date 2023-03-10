import React, { useState, useRef } from "react";
import { Head } from "@inertiajs/inertia-react";
import { FooterLite } from "@/Components/Footer/FooterLite";
import Header from "@/Components/Header/HeaderLite";
import "@fontsource/poppins";
import "./PoliticasP.css";
import "../../css/estilos-terminos-condiciones.css";


import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBScrollspy,
    MDBScrollspyLink,
} from "mdb-react-ui-kit";



export const TerminosCondiciones2 = (props) => {


    const home = useRef(null);
    const definiciones = useRef(null);
    const condicionesgenerales = useRef(null);
    const niveles = useRef(null);
    const registro = useRef(null);
    const activacion = useRef(null);
    const soporteusuario = useRef(null);
    const planesofrecidos = useRef(null);
    const perfilesnegocio = useRef(null);
    const sistemasubcuentas = useRef(null);
    const sistemaseguimiento = useRef(null);
    const notificacionescorreo = useRef(null);
    const contratosespeciales = useRef(null);
    const appmovil = useRef(null);
    const autorizacioninformacion = useRef(null);
    const limitacionresponsabilidad = useRef(null);
    const cancelacioncuenta = useRef(null);
    const desarrolloaplicativos = useRef(null);
    const aceptacioncondiciones = useRef(null);

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
                                        <p className="termcond-title-cont">
                                            &nbsp;&nbsp;&nbsp;&nbsp;Contenido
                                        </p>
                                        <MDBScrollspyLink targetRef={home}>
                                            | Inicio
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={definiciones}
                                        >
                                            Definiciones
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={condicionesgenerales}
                                        >
                                            Condiciones generales <br /> de
                                            uso del servicio
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={niveles}
                                        >
                                            Niveles de servicio
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={registro}
                                        >
                                            Registro
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={activacion}
                                        >
                                            Activaci??n del servicio
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={soporteusuario}
                                        >
                                            Soporte al usuario
                                        </MDBScrollspyLink>
                                        <hr />

                                        <MDBScrollspyLink
                                            targetRef={planesofrecidos}
                                        >
                                            Planes ofrecidos
                                        </MDBScrollspyLink>
                                        <hr />

                                        <MDBScrollspyLink
                                            targetRef={perfilesnegocio}
                                        >
                                            Perfiles de negocio
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={sistemasubcuentas}
                                        >
                                            Sistema de subcuentas
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={sistemaseguimiento}
                                        >
                                            Sistema de seguimiento
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={notificacionescorreo}
                                        >
                                            Notificaciones al correo{" "}
                                            <br></br>
                                            electr??nico
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={contratosespeciales}
                                        >
                                            Contratos especiales
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={appmovil}
                                        >
                                            App m??vil
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={
                                                autorizacioninformacion
                                            }
                                        >
                                            Autorizaci??n de uso de <br></br>
                                            nuestra informaci??n
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={
                                                limitacionresponsabilidad
                                            }
                                        >
                                            Limitaci??n de la <br></br>
                                            responsabilidad
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={cancelacioncuenta}
                                        >
                                            Cancelaci??n de la cuenta
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={
                                                desarrolloaplicativos
                                            }
                                        >
                                            Desarrollo aplicativos
                                        </MDBScrollspyLink>
                                        <hr />
                                        <MDBScrollspyLink
                                            targetRef={
                                                aceptacioncondiciones
                                            }
                                        >
                                            Aceptaci??n de estas condiciones
                                        </MDBScrollspyLink>
                                        <hr />
                                    </MDBScrollspy>
                                </div>
                            </MDBCol>
                        </div>


                        <div className="termcond-info" id="element" ref={containerRef} >
                            <MDBCol>

                                <section ref={home} id="section-1">
                                    <br />
                                    <h2 id="home" className="policy-title">
                                        Contrato de software como servicio <span className="mark-word">Licitaciones.info</span>
                                        <span className="d-block">Acuerdo nivel de servicio</span>
                                    </h2>
                                    <hr />
                                    <p>
                                        LICITACIONES.INFO SAS proporciona a
                                        sus usuarios el procesamiento de
                                        datos y alojamiento de informaci??n
                                        sobre oportunidades de negocio con
                                        entidades p??blicas, descentralizadas
                                        y privadas en Colombia, Ecuador y
                                        Panam?? por medio de las plataformas
                                        www.licitaciones.info,
                                        col.licitaciones.info,
                                        ecu.licitaciones.info y
                                        pan.licitaciones.info,
                                        proporcionando diversas herramientas
                                        y funcionalidades a las que se puede
                                        acceder desde cualquier lugar y en
                                        cualquier dispositivo
                                    </p>
                                    <p>
                                        Todos los datos que transmitimos son
                                        ??nicamente informativos y no
                                        constituyen una oferta, ni una
                                        invitaci??n para participar en un
                                        proceso de contrataci??n.
                                    </p>
                                    <p>
                                        A continuaci??n, presentamos los
                                        t??rminos y condiciones que rigen el
                                        contrato de software como servicio
                                        (SaaS) entre Licitaciones.info y
                                        cada uno de sus usuarios.Estas
                                        condiciones son revisadas y
                                        actualizadas peri??dicamente y pueden
                                        ser consultadas en cualquier momento
                                        a trav??s de la p??gina web
                                        www.licitaciones.info.
                                    </p>
                                    <p>
                                        La referencia al t??rmino Usuario
                                        hace relaci??n a cualquier persona
                                        que utiliza el servicio de
                                        Licitaciones.info a trav??s de
                                        cualquier dispositivo en nombre
                                        propio y/o en representaci??n de una
                                        Empresa u otra Entidad legal.
                                    </p>
                                    <p>
                                        Al hacer clic en la casilla "Soy
                                        mayor de edad y acepto las pol??ticas
                                        de privacidad y los T??rminos y
                                        condiciones???, nuestros Usuarios
                                        aceptan expresamente los T??rminos y
                                        Condiciones del presente contrato,
                                        siendo condici??n esencial para la
                                        utilizaci??n del servicio de
                                        Licitaciones.info SAS.
                                    </p>
                                    <p>
                                        ESTIMADO USUARIO: EN EL EVENTO EN
                                        QUE SE ENCUENTRE EN DESACUERDO CON
                                        ESTOS T??RMINOS Y CONDICIONES, NO
                                        UTILICE NUESTROS SERVICIOS.
                                    </p>
                                    <p>
                                        Sus inquietudes y observaciones
                                        ser??n atendidas en el correo
                                        servicioalcliente@licitaciones.info.
                                    </p>
                                </section>
                                <br />
                                <section ref={definiciones} id="section-2">
                                    <span className="termcond-subtitles">
                                        Definiciones
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Servicio o Servicios: Hace
                                        referencia a la funcionalidad que el
                                        Usuario opera en su dispositivo o
                                        computador al utilizar la
                                        ???Plataforma???, el ???Aplicativo???, la
                                        ???Aplicaci??n??? o la ???API??? suministrado
                                        por Licitaciones.info SAS. Los
                                        t??rminos anteriormente mencionados
                                        ser??n utilizados de forma sin??nima
                                        en este Acuerdo.
                                    </p>
                                    <p>
                                        Pago por el Servicio o Pago por
                                        suscripci??n o Pago: Se refiere al
                                        pago por la suscripci??n para hacer
                                        uso de la Aplicaci??n o de servicios
                                        conexos a la misma, todo esto dentro
                                        de los criterios estipulados en el
                                        presente Acuerdo.
                                    </p>
                                    <p>
                                        Duraci??n del servicio: Periodo de
                                        tiempo durante el cual el usuario
                                        podr?? hacer uso del servicio.
                                    </p>
                                    <p>
                                        Cuenta de Usuario o Usuario
                                        registrado: Es el mecanismo a trav??s
                                        del cual cada persona accede al
                                        Servicio, utilizando su Usuario y
                                        contrase??a individual e
                                        intransferible. La Cuenta de Usuario
                                        solo puede ser utilizada por una
                                        persona f??si
                                    </p>
                                    <p>
                                        Mantenimiento planeado:
                                        Mantenimiento de rutina ejecutado
                                        por Licitaciones.info SAS para dar
                                        soporte y actualizar la Aplicaci??n.
                                    </p>
                                    <p>
                                        Mantenimiento no-planeado:
                                        Mantenimiento correctivo o de
                                        emergencia ejecutado por
                                        Licitaciones.info SAS para dar
                                        soporte a la aplicaci??n y corregir
                                        una eventualidad que no se
                                        encontraba prevista Por definici??n,
                                        los Mantenimientos No-planeados
                                        ocurren aleatoriamente y por ende
                                        son ejecutados en cualquier horario
                                        y muchas veces no es posible
                                        informarlos con anticipaci??n al
                                        Usuario.
                                    </p>
                                    <p>
                                        Datos del Cliente: Son los datos
                                        personales que el Usuario ingrese o
                                        registre en la plataforma una vez
                                        comienza a operar el Servicio.
                                    </p>
                                    <p>
                                        El o los plazos de renovaci??n:
                                        significa los per??odos de renovaci??n
                                        sucesivos durante los cuales el
                                        Cliente se suscribe a los Servicios.
                                    </p>
                                    <p>
                                        Periodo de prueba: Es un Servicio
                                        que se suministra sin cargo, es
                                        decir gratuito, con el fin de que el
                                        usuario conozca el manejo y alcance
                                        de la plataforma antes de tomar la
                                        decisi??n de suscripci??n.
                                    </p>
                                    <p>
                                        Planes: Son las opciones en tiempo
                                        de suscripci??n a las cuales el
                                        usuario puede acogerse para acceder
                                        al servicio al finalizar el periodo
                                        de prueba.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={condicionesgenerales}
                                    id="section-3"
                                >
                                    <span className="termcond-subtitles">
                                        Condiciones generales de uso del
                                        servicio
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
                                        de nuestros canales
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
                                    </p>
                                    <p>
                                        Solicitaremos su consentimiento
                                        antes de utilizar la informaci??n
                                        para otro fin que no sea alguno de
                                        los dispuestos en la presente
                                        Pol??tica de
                                    </p>
                                    <p>
                                        Nuestra Pol??tica de Privacidad no
                                        cubre las pr??cticas de informaci??n
                                        de otras empresas y organizaciones
                                        que utilizan datos personales a
                                        t??tulo de informac
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
                                        potencial riesgo que e
                                    </p>
                                </section>
                                <br />
                                <section ref={niveles} id="section-4">
                                    <span className="termcond-subtitles">
                                        Niveles de servicio
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Durante el T??rmino de Duraci??n del
                                        Servicio, Licitaciones.info SAS se
                                        compromete a l
                                    </p>
                                    <p>
                                        Disponibilidad: La plataforma est??
                                        disponible para el usuario de forma
                                        permanente salvo en los periodos de
                                        mantenimientos programados y no
                                        programados.
                                    </p>
                                    <p>
                                        Mantenimiento planeado: En
                                        consecuencia, de lo anterior,
                                        Licitaciones.info SAS se compromete
                                        a desplegar tareas de mantenimiento
                                        en horarios por fuera de los
                                        definidos como cr??ticos, a saber:
                                        lunes a s??bado de 11 pm a 4 am;
                                        domingo y feriados de 7pm a 6am.
                                    </p>
                                    <p>
                                        En caso de requerirse un
                                        mantenimiento que requiera mucho
                                        tiempo, este se realizar?? en lo
                                        posible los domingos o feriados a
                                        partir del mediod??a. De igual forma,
                                        Licitaciones.info SAS procurar??
                                        razonablemente informar a sus
                                        Usuarios con 48 horas de
                                        anticipaci??n sobre los horarios que
                                        efectivamente se utilizar??n para dar
                                        mantenimiento planeado a la
                                        Plataforma.
                                    </p>
                                    <p>
                                        Mantenimiento no-planeado: Con el
                                        prop??sito de garantizar la
                                        integridad y seguridad del Software,
                                        Licitaciones.info SAS tendr?? el
                                        derecho de desplegar mantenimientos
                                        no planeados cada vez que lo estime
                                        necesario y con la frecuencia que
                                        estime necesaria. procurando avisar
                                        a los Usuarios con la mayor
                                        anticipaci??n permitida por la
                                        situaci??n sobre dichos
                                        mantenimientos, los cuales podr??n
                                        ocurrir sin limitaciones de horario
                                        y, debido a los inconvenientes que
                                        pretenden solventar, de manera
                                        imprevista y no avisada.
                                    </p>
                                    <p>
                                        Enlaces: El servicio incluye la
                                        entrega de los enlaces a las fuentes
                                        originales de informaci??n, llevando
                                        al usuario a p??ginas web sobre las
                                        cuales Licitaciones.info SAS no
                                        tiene control. Los enlaces de
                                        nuestro portal a otra p??gina web (o
                                        un enlace de otra p??gina web a
                                        nuestro Portal) no constituye
                                        remisi??n, respaldo, aprobaci??n,
                                        publicidad, oferta o solicitud en
                                        relaci??n con dicha p??gina web, sus
                                        contenidos, o cualquier otro
                                        producto o servicios publicitado o
                                        distribuido a trav??s de dicha p??gina
                                        web. As?? mismo, la disponibilidad y
                                        el nivel de servicio de dichos
                                        portales no son de alcance ni
                                        responsabilidad de Licitaciones.info
                                        SAS.
                                    </p>
                                </section>
                                <br />
                                <section ref={registro} id="section-5">
                                    <span className="termcond-subtitles">
                                        Registro
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Para tener acceso al servicio es
                                        necesario crear una cuenta en
                                        www.licitaciones.info. Esta cuenta
                                        podr?? ser creada por el usuario
                                        individualmente, en compa????a de un
                                        consultor comercial de
                                        licitaciones.info SAS o por alguno
                                        de los consultores comerciales con
                                        previa autorizaci??n del usuario. En
                                        cualquier caso, los usuarios
                                        registrados declaran que entregan
                                        informaci??n ver??dica y legal. Si hay
                                        necesidad de actualizar, modificar o
                                        eliminar la informaci??n, el usuario
                                        debe informarlo mediante alguno de
                                        los canales de contacto.
                                    </p>
                                    <p>
                                        La contrase??a proporcionada es
                                        privada y solo el Usuario la conoce.
                                        En caso de olvido, nuestro equipo
                                        asignar?? una contrase??a provisional,
                                        la cual debe ser modificada para
                                        garantizar la confidencialidad en el
                                        manejo de la cuenta.
                                    </p>
                                    <p>
                                        Nuestros usuarios aceptan notificar
                                        inmediatamente a licitaciones.info
                                        SAS de cualquier uso no autorizado
                                        de la contrase??a o cuenta o
                                        cualquier otra violaci??n de
                                        seguridad.
                                    </p>
                                    <p>
                                        Es importante asegurarse de salir de
                                        la cuenta al final de cada sesi??n.
                                        Licitaciones.info SAS no ser??
                                        responsable de ninguna p??rdida o
                                        da??o que surja de la omisi??n de esta
                                        recomendaci??n.
                                    </p>
                                    <p>
                                        Al registrarse por medio de
                                        cualquier mecanismo mencionado,
                                        nuestros usuarios declaran que son
                                        mayores de edad, que proporcionan
                                        informaci??n verdadera, precisa,
                                        actual y completa seg??n lo
                                        solicitado en el formulario de
                                        registro.
                                    </p>
                                    <p>
                                        Al momento de identificar que un
                                        usuario proporciono informaci??n
                                        falsa, inexacta o incompleta o si se
                                        tienen motivos razonables para
                                        sospechar que dicha informaci??n es
                                        falsa, inexacta o incompleta
                                        Licitaciones.info SAS cuenta con el
                                        derecho de cancelar o suspender la
                                        cuenta y rechazar cualquier uso
                                        actual o futuro del servicio.
                                    </p>
                                    <p>
                                        Los datos de registro y otra
                                        informaci??n sobre nuestros usuarios
                                        est??n sujetos a nuestra Pol??tica de
                                        privacidad. Nuestros usuarios
                                        comprenden que, a trav??s del uso del
                                        Servicio, aceptan la recopilaci??n y
                                        uso (seg??n lo establecido en la
                                        Pol??tica de Privacidad) de esta
                                        informaci??n.
                                    </p>
                                </section>
                                <br />
                                <section ref={activacion} id="section-6">
                                    <span className="termcond-subtitles">
                                        Activaci??n del servicio
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        La relaci??n entre LICITACIONES.INFO
                                        SAS y los usuarios del servicio se
                                        formaliza mediante el
                                        diligenciamiento y env??o del
                                        formulario de registro y la
                                        confirmaci??n del correo electr??nico
                                        suministrado.
                                    </p>
                                    <p>
                                        En la mayor??a de los casos el correo
                                        de confirmaci??n es aceptado por los
                                        diferentes servidores de correo
                                        p??blico como Hotmail, Gmail, Yahoo
                                        entre otros, sin embargo, en algunos
                                        casos puede ser enviado a la carpeta
                                        de correo no deseado o spam.
                                    </p>
                                    <p>
                                        En cuanto a los servidores privados,
                                        en algunos casos ser?? necesaria la
                                        configuraci??n por parte del
                                        encargado del ??rea de sistemas para
                                        que nuestra informaci??n sea aceptada
                                        y considera como confiable, de lo
                                        contrario no ser?? posible acceder a
                                        la mayor??a de las funcionalidades de
                                        nuestro servicio y debe entenderse
                                        que son situaciones ajenas a nuestro
                                        control t??cnico y administrativo.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={soporteusuario}
                                    id="section-7"
                                >
                                    <span className="termcond-subtitles">
                                        Soporte al usuario
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Soporte telef??nico: Al momento del
                                        registro el equipo comercial de
                                        Licitaciones.info SAS realizar?? una
                                        llamada telef??nica al usuario para
                                        explicarle el alcance y bondades de
                                        la plataforma y tambi??n para
                                        brindarle asistencia a inquietudes
                                        cuando se presenten. Al aceptar
                                        estos t??rminos y condiciones el
                                        cliente acepta el contacto inicial
                                        via telef??nica, WhatsApp o correo
                                        electr??nico. En caso de que como
                                        usuario no desee ser contactado
                                        posteriormente debe manifestarlo al
                                        consultor en la llamada de lo
                                        contrario se entiende que acepta que
                                        continuemos en contacto por los
                                        medios citados.
                                    </p>
                                    <p>
                                        A lo largo de la duraci??n del
                                        servicio, licitaciones.info SAS
                                        ofrecer?? soporte telef??nico para la
                                        atenci??n de preguntas de los
                                        Usuarios en el horario de lunes a
                                        viernes de 8:00 am a 12:00 m y de
                                        2:00 pm a 6:00 pm.
                                    </p>
                                    <p>
                                        Soporte por Chat: La plataforma
                                        cuenta con la comunicaci??n mediante
                                        chat el cual estar?? habilitado para
                                        la atenci??n de las peticiones,
                                        quejas reclamos, sugerencias o
                                        inquietudes de los usuarios, en el
                                        horario de lunes a viernes de 8:00
                                        am a 12:00 m y de 2:00 pm a 6:00 pm.
                                    </p>
                                    <p>
                                        Consultores comerciales: Cada uno de
                                        los usuarios del servicio tendr??
                                        asignado un consultor comercial por
                                        toda la duraci??n del servicio con
                                        quien podr??n solucionar inquietudes
                                        o situaciones relacionadas con el
                                        este. En ocasiones el consultor
                                        podr?? prestar asistencia a trav??s de
                                        acceso remoto entre computadores
                                        previa autorizaci??n del usuario. Al
                                        momento de brindar acceso remoto a
                                        alg??n consultor de Licitaciones.info
                                        SAS, el usuario es responsable de
                                        toda la informaci??n almacenada en el
                                        dispositivo al cual le habilito el
                                        acceso y exime a Licitaciones.info
                                        SAS de cualquier p??rdida.
                                    </p>
                                    <p>
                                        Ayudas e instructivos en l??nea para
                                        la utilizaci??n del servicio:
                                        Licitaciones.info SAS facilitar?? a
                                        los usuarios documentaci??n de apoyo,
                                        videos instructivos y otras ayudas
                                        en l??nea a trav??s de su Portal de
                                        Clientes, en la zona ???centro de
                                        ayuda???. Adicionalmente,
                                        Licitaciones.info SAS a trav??s del
                                        consultor comercial ofrecer?? una
                                        sesi??n personalizada sin ning??n
                                        costo para explicar el uso y
                                        bondades de la plataforma.
                                    </p>
                                    <p>
                                        Soporte presencial:
                                        Licitaciones.info SAS no ofrece
                                        asistencia presencial a los usuarios
                                        del servicio, sin embargo,
                                        Licitaciones.info se reserva el
                                        derecho a crear paquetes comerciales
                                        con diferentes niveles y ofertas de
                                        soporte presencial.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={planesofrecidos}
                                    id="section-8"
                                >
                                    <span className="termcond-subtitles">
                                        Planes ofrecidos
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        LICITACIONES.INFO SAS brinda un
                                        periodo de prueba gratuito durante
                                        30 d??as. Una vez terminado el
                                        periodo de prueba el usuario deber??
                                        acogerse a uno de los planes
                                        publicados en la plataforma para
                                        poder seguir teniendo acceso al
                                        servicio.
                                    </p>
                                    <p>
                                        La duraci??n del servicio durante el
                                        periodo de prueba se puede ver
                                        interrumpida al detectar que los
                                        datos suministrados en el formulario
                                        de registro son fraudulentos,
                                        incoherentes o irreales as?? como en
                                        las ocasiones en las que se
                                        evidencie un uso incorrecto de los
                                        datos y de la informaci??n a la cual
                                        se le brindo acceso.
                                    </p>
                                    <p>
                                        LICITACIONES.INFO SAS, ofrece un
                                        mismo servicio en diferentes planes
                                        los cuales var??an en costo seg??n el
                                        tiempo al cual desea vincularse. El
                                        valor del servicio permanece
                                        publicado y se puede consultar en
                                        cualquier momento en la plataforma.
                                        En determinados periodos del a??o, el
                                        equipo comercial podr?? realizar
                                        ofertas especiales, las cuales no
                                        ser??n modificables ni transferibles
                                        y tendr??n una vigencia ??nica, lo que
                                        implica que el acogerse a una oferta
                                        comercial especial no garantiza el
                                        sostenimiento del costo del servicio
                                        en el futuro.
                                    </p>
                                    <p>
                                        Para la vinculaci??n en un plan se
                                        debe manifestar por escrito el plan
                                        al cual desea acogerse junto con los
                                        datos de facturaci??n electr??nica,
                                        procedimiento de radicaci??n de
                                        factura (si aplica) y contacto con
                                        el ??rea contable para realizar
                                        seguimiento al abono respectivo.
                                        Inicialmente se enviar?? una factura
                                        proforma para que el usuario
                                        corrobore los datos que finalmente
                                        se registraran en la factura
                                        electr??nica de venta la cual tambi??n
                                        ser?? remitida a la Dian.
                                    </p>
                                    <p>
                                        Una vez se env??a la factura
                                        electr??nica de venta o la factura
                                        proforma al usuario se le concede un
                                        plazo m??ximo de quince d??as para el
                                        pago total de la factura emitida,
                                        salvo en algunas circunstancias en
                                        la que las pol??ticas empresariales
                                        de los usuarios indiquen un plazo
                                        mayor el cual debe ser indicado por
                                        escrito al correo
                                        contabilidad@licitaciones.info.
                                    </p>
                                    <p>
                                        Una vez realizado el pago el usuario
                                        debe enviar el comprobante seg??n las
                                        indicaciones brindadas por el ??rea
                                        contable de nuestra compa????a con el
                                        fin de actualizar el estado de la
                                        cuenta del usuario habilit??ndola por
                                        la duraci??n del plan adquirido. Si
                                        pasado el plazo establecido para
                                        recibir el pago a??n no se ha
                                        reportado se iniciar?? proceso de
                                        gesti??n de cuentas por cobrar. En
                                        caso de no llegar a un acuerdo de
                                        pago nos reservamos el derecho de
                                        suspender temporalmente la cuenta de
                                        usuario.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={perfilesnegocio}
                                    id="section-9"
                                >
                                    <span className="termcond-subtitles">
                                        Perfiles de negocio
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Un perfil de negocio contiene la
                                        informaci??n clave para relacionar a
                                        un usuario con los diferentes
                                        objetos de las convocatorias por
                                        medio de la segmentaci??n de
                                        actividades econ??micas, modalidades
                                        de contrataci??n, ubicaci??n
                                        geogr??fica y cuant??as.
                                    </p>
                                    <p>
                                        Para hacer uso del servicio es
                                        indispensable que el usuario haya
                                        creado al menos un perfil de negocio
                                        en www.licitaciones.info accediendo
                                        con su usuario y contrase??a.
                                    </p>
                                    <p>
                                        Los perfiles de negocio ser??n
                                        creados, modificados y eliminados
                                        por el titular de la cuenta
                                        principal. El titular de la cuenta
                                        principal es responsable de otorgar
                                        autorizaci??n a los titulares de sus
                                        subcuentas para que realicen las
                                        modificaciones en los perfiles de
                                        negocio de las subcuentas.
                                    </p>
                                    <p>
                                        Los consultores comerciales asesoran
                                        y brindan orientaci??n para ajustar
                                        los perfiles de negocio seg??n las
                                        caracter??sticas comerciales del
                                        usuario, sin embargo, la
                                        parametrizaci??n de los perfiles de
                                        negocio y la configuraci??n de la
                                        cuenta de usuario es responsabilidad
                                        del usuario.
                                    </p>
                                    <p>
                                        El usuario puede crear la cantidad
                                        de perfiles de negocio que necesite.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={sistemasubcuentas}
                                    id="section-10"
                                >
                                    <span className="termcond-subtitles">
                                        Sistema de subcuentas
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Para tener acceso al servicio es
                                        necesario crear una cuenta en
                                    </p>
                                    <p>
                                        Al momento de realizar el registro
                                        en la plataforma, se crea una cuenta
                                        denominada cuenta principal a la
                                        cual se le pueden asociar dos
                                        cuentas adicionales denominadas
                                        subcuentas. Las subcuentas han sido
                                        creadas con el fin de permitir a los
                                        usuarios compartir la informaci??n
                                        con diferentes personas de su equipo
                                        de trabajo. Una subcuenta tiene los
                                        mismos atributos que la cuenta
                                        principal excepto dos: la opci??n de
                                        realizar pago en l??nea y la opci??n
                                        de tener subcuentas.
                                    </p>
                                    <p>
                                        La cuenta principal es la
                                        responsable de crear, editar y
                                        eliminar las subcuentas que le han
                                        sido asignadas. Solo mediante
                                        comunicaci??n escrita por parte del
                                        titular de la cuenta principal el
                                        equipo de Licitaciones.info SAS
                                        podr?? gestionar las solicitudes
                                        relacionadas con las subcuentas.
                                    </p>
                                    <p>
                                        En ocasiones los usuarios podr??n ver
                                        la necesidad de tener m??s de dos
                                        subcuentas para distribuirlas en su
                                        equipo de trabajo, en estos casos se
                                        asignar?? sin costo adicional hasta
                                        un m??ximo de diez subcuentas siempre
                                        y cuando tengan el mismo dominio
                                        corporativo de la cuenta principal y
                                        que no sean dominios comerciales
                                        como yahoo, Hotmail, Gmail, otulook,
                                        msn y todos los que son de libre
                                        uso, en estos casos solo se
                                        conservar?? la disponibilidad de dos
                                        subcuentas.
                                    </p>
                                    <p>
                                        Las personas asignadas a las
                                        subcuentas aceptan estos t??rminos y
                                        condiciones.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={sistemaseguimiento}
                                    id="section-11"
                                >
                                    <span className="termcond-subtitles">
                                        Sistema de seguiemiento
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Este sistema permite programar una
                                        alerta en los procesos de
                                        contrataci??n con entidades p??blicas
                                        para que se env??e un correo al
                                        usuario cada vez que se publique un
                                        nuevo documento relacionado con el
                                        proceso de contrataci??n seleccionado
                                        y/o cada que el estado del proceso
                                        se actualice. La funcionalidad de
                                        seguimiento env??a notificaciones con
                                        los documentos hasta la
                                        adjudicaci??n. Despu??s de esta etapa
                                        no se env??an los documentos
                                        relacionados con el contrato y su
                                        ejecuci??n, sin embargo, el sistema
                                        continuar?? notificando el cambio en
                                        el estado del proceso hasta su
                                        finalizaci??n.
                                    </p>
                                    <p>
                                        Tanto el env??o de los documentos
                                        como del estado del proceso dependen
                                        de la oportuna actualizaci??n por
                                        parte de la entidad contratante, por
                                        lo tanto, Licitaciones.info SAS no
                                        asume ninguna responsabilidad por
                                        errores, omisiones o incumplimiento
                                        en la oportuna publicaci??n de la
                                        informaci??n por parte de la entidad
                                        contratante a trav??s de los
                                        mecanismos que el gobierno ha
                                        habilitado para garantizar la
                                        transparencia y trazabilidad de la
                                        informaci??n.
                                    </p>
                                    <p>
                                        Los usuarios pueden incluir en la
                                        opci??n de seguimiento todos los
                                        contratos que deseen, siempre y
                                        cuando correspondan a un proceso con
                                        una entidad p??blica que paute su
                                        contrataci??n a trav??s de las
                                        plataformas que el gobierno ha
                                        dispuesto para ello, SECOP 1 Y SECOP
                                        2 en Colombia, SERCOP en Ecuador y
                                        PANAM?? COMPRA en Panam??. No se hace
                                        seguimiento a procesos de entidades
                                        descentralizadas, ni del r??gimen
                                        especial ni privados que no est??n
                                        obligadas a pautar la trazabilidad
                                        de sus procesos de contrataci??n en
                                        los portales p??blicos.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={notificacionescorreo}
                                    id="section-12"
                                >
                                    <span className="termcond-subtitles">
                                        Notificaciones al correo electr??nico
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Al momento de suscribirse, nuestros
                                        usuarios aceptan el env??o de
                                        notificaciones al correo
                                        electr??nico. El usuario puede
                                        limitar o suspender el env??o de
                                        alertas a su correo electr??nico
                                        ingresando con su usuario y
                                        contrase??a. En caso de suspender el
                                        env??o de informaci??n al correo
                                        electr??nico, nuestros usuarios se
                                        responsabilizan de ingresar a su
                                        cuenta de usuario en
                                        www.licitaciones.info para hacer uso
                                        del servicio o a trav??s del
                                        aplicativo m??vil.
                                    </p>
                                    <p>
                                        En algunos casos la informaci??n
                                        enviada desde nuestros servidores
                                        puede estar bloqueada por par??metros
                                        de seguridad del usuario. En caso de
                                        presentarse rebote o bloqueo de la
                                        informaci??n, el usuario se
                                        responsabiliza de seguir las
                                        recomendaciones del consultor
                                        comercial que orientar?? la soluci??n.
                                        En caso de no encontrar soluci??n a
                                        pesar de haber realizado todos los
                                        procedimientos t??cnicos y protocolos
                                        pertinentes el usuario debe
                                        suministrar otra cuenta de correo
                                        electr??nico para recibir la
                                        informaci??n o debe ingresar a la
                                        plataforma www.licitaciones.info o
                                        por medio de la App m??vil.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={contratosespeciales}
                                    id="section-13"
                                >
                                    <span className="termcond-subtitles">
                                        Contratos especiales
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Desarrollamos herramientas y
                                        funcionalidades sobre medida para
                                        investigaci??n, segmentaci??n,
                                        prospecci??n, inteligencia de
                                        mercados y todas las actividades
                                        relacionadas con el an??lisis y
                                        sistematizaci??n de datos. Estos
                                        contratos se ejecutan de manera
                                        personalizada con los usuarios
                                        interesados y se establecen los
                                        t??rminos y condiciones adecuados
                                        seg??n los requisitos y necesidades a
                                        satisfacer.
                                    </p>
                                </section>
                                <br />
                                <section ref={appmovil} id="section-14">
                                    <span className="termcond-subtitles">
                                        App movil
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        La aplicaci??n para dispositivos
                                        m??viles ha sido creada como una
                                        herramienta adicional para la
                                        gesti??n y almacenamiento de la
                                        informaci??n de procesos de
                                        contrataci??n. A trav??s de la APP se
                                        tendr?? acceso a todas las
                                        funcionalidades del servicio.
                                        Licitaciones.info podr?? adicionar,
                                        modificar o eliminar las
                                        funcionalidades en cualquier
                                        momento, lo cual acepta el usuario
                                        mediante la instalaci??n de la
                                        aplicaci??n.
                                    </p>
                                    <p>
                                        El usuario deber?? contar con un
                                        dispositivo m??vil inteligente
                                        (Smartphone) o Tableta con sistema
                                        operativo Android o IOS, cualquiera
                                        de estos con acceso a internet,
                                        ambos seguros y confiables.
                                        Licitaciones.info SAS, no ser??
                                        responsable por la seguridad de los
                                        equipos Smartphone propiedad de los
                                        usuarios utilizados para el acceso a
                                        la APP, ni por la disponibilidad del
                                        servicio en los dispositivos en los
                                        cuales se descargue la aplicaci??n.
                                    </p>
                                    <p>
                                        En la forma permitida por la ley,
                                        los materiales de la aplicaci??n se
                                        suministran sin garant??a de ning??n
                                        g??nero, expresa o impl??cita,
                                        incluyendo sin limitaci??n las
                                        garant??as de calidad satisfactoria,
                                        comerciabilidad, adecuaci??n para un
                                        fin particular o no infracci??n, por
                                        tanto, Licitaciones.info no
                                        garantiza el funcionamiento adecuado
                                        en los distintos sistemas operativos
                                        o dispositivos en los cuales se haga
                                        uso de la aplicaci??n.
                                    </p>
                                    <p>
                                        Para acceder a la aplicaci??n, el
                                        usuario debe contar con Usuario y
                                        Contrase??a, los cuales ser??n los
                                        mismos utilizados en el portal web.
                                        El Usuario se obliga a usar la
                                        aplicaci??n y los contenidos
                                        encontrados en ella de una manera
                                        diligente, correcta y l??cita.
                                    </p>
                                    <p>
                                        Con la descarga de la APP el usuario
                                        acepta y autoriza que
                                        Licitaciones.info SAS, utilice sus
                                        datos en calidad de responsable del
                                        tratamiento para fines derivados de
                                        la utilizaci??n de la APP. Nuestros
                                        usuarios podr??n ejercer sus derechos
                                        a conocer, actualizar, rectificar y
                                        suprimir su informaci??n personal;
                                        as?? como el derecho a revocar el
                                        consentimiento otorgado para el
                                        tratamiento de datos personales de
                                        acuerdo con nuestra pol??tica de
                                        tratamiento de informaci??n
                                        disponible en ??Error! Referencia de
                                        hiperv??nculo no v??lida.; en caso de
                                        tener alguna solicitud relacionada
                                        con sus datos personales se puede
                                        realizar a trav??s del correo
                                        servicioalcliente@licitaciones.info
                                        o al tel??fono +57 3103708276.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={autorizacioninformacion}
                                    id="section-15"
                                >
                                    <span className="termcond-subtitles">
                                        Autorizaci??n de uso de nuestra
                                        informaci??n
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        La informaci??n suministrada por
                                        nuestra plataforma o enviada
                                        directamente al correo electr??nico
                                        de nuestros clientes puede ser
                                        entregada a terceros, ??nicamente si
                                        se reconoce a LICITACIONES.INFO SAS
                                        como el transmisor de dicha
                                        informaci??n, entendiendo que esta
                                        informaci??n no es autor??a ni
                                        responsabilidad de LICITACIONES.INFO
                                        SAS, adicionalmente esta informaci??n
                                        no debe venderse a terceros.
                                    </p>
                                    <p className="termcond-subtitles">
                                        Autorizaci??n de unso de nuestra
                                        informaci??n
                                    </p>
                                    <p>
                                        La informaci??n suministrada por
                                        nuestra plataforma o enviada
                                        directamente al correo electr??nico
                                        de nuestros clientes puede ser
                                        entregada a terceros, ??nicamente si
                                        se reconoce a LICITACIONES.INFO SAS
                                        como el transmisor de dicha
                                        informaci??n, entendiendo que esta
                                        informaci??n no es autor??a ni
                                        responsabilidad de LICITACIONES.INFO
                                        SAS, adicionalmente esta informaci??n
                                        no debe venderse a terceros.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={limitacionresponsabilidad}
                                    id="section-16"
                                >
                                    <span className="termcond-subtitles">
                                        Limitaci??n de la responsabilidad
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        LICITACIONES.INFO SAS, no se hace
                                        responsable de los errores, mal uso
                                        o no actualizaci??n en la informaci??n
                                        suministrada por la fuente de las
                                        ofertas.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={cancelacioncuenta}
                                    id="section-17"
                                >
                                    <span className="termcond-subtitles">
                                        Cancelaci??n de la cuenta
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        LICITACIONES.INFO, se reserva el
                                        derecho de cancelar la cuenta que a
                                        su juicio vaya en contra de las
                                        leyes colombianas, mal uso de la
                                        informaci??n, violaci??n de los
                                        presentes t??rminos, o que se vea
                                        afectado el buen nombre de
                                        LICITACIONES.INFO.
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={desarrolloaplicativos}
                                    id="section-18"
                                >
                                    <span className="termcond-subtitles">
                                        Desarrollo de aplicativos
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        El servicio es proporcionado a los
                                        usuarios a trav??s de herramientas
                                        tecnol??gicas de alta complejidad.
                                        Estas herramientas podr??n ser
                                        actualizadas en cualquier momento
                                        con el ??nimo de optimizar
                                        funcionalidades y mejorar la calidad
                                        del servicio.
                                    </p>
                                    <p className="termcond-subtitles">
                                        Atribuci??n de la propiedad
                                        intelectual de las im??genes online
                                    </p>
                                    <p>
                                        Las im??genes utilizadas en nuestro
                                        sitio web son de uso libre y se
                                        encuentran protegidas bajo la
                                        licencia de uso Atribuci??n 4.0
                                        Internacional (CC by 4.0). Dicho
                                        material no ha sido modificado y se
                                        atribuye su cr??dito al creador:
                                        <br></br>
                                        Copyright 2020 Twitter, Inc., and
                                        other contributors<br></br>
                                        https://twemoji.twitter.com/
                                        <br></br>
                                        code licensed under the MIT License:
                                        http://opensource.org/licenses/MIT
                                        <br></br>
                                        Graphics licensed under CC-BY 4.0:
                                        https://creativecommons.org/licenses/by/4.0/
                                    </p>
                                </section>
                                <br />
                                <section
                                    ref={aceptacioncondiciones}
                                    id="section-19"
                                >
                                    <span className="termcond-subtitles">
                                        Aceptaci??n de estas condiciones
                                    </span>
                                    <br />
                                    <br />
                                    <p>
                                        Licitaciones.info SAS se reserva el
                                        derecho de modificar los t??rminos y
                                        condiciones del contrato de
                                        servicio, por lo que es importante
                                        revisar las condiciones
                                        peri??dicamente. Si no son aceptadas
                                        las presentes condiciones y sus
                                        modificaciones, se recomienda
                                        suspender el uso del servicio. Se
                                        debe tener en cuenta que no existe
                                        ninguna responsabilidad de parte de
                                        licitaciones.info de rembolsar el
                                        valor cancelado ni de indemnizar a
                                        los usuarios de ninguna manera por
                                        la no aceptaci??n de las condiciones
                                        de servicio.
                                    </p>
                                    <p>
                                        Si tiene alguna duda, con gusto la resolveremos. Encuentre nuestros medios de contacto  <a id="contacto" href="/contacto">aqu??.</a>
                                    </p>
                                </section>
                                <br />
                            </MDBCol>
                        </div>




                    </div>
                </MDBRow>
            </MDBContainer>





            <FooterLite />
        </>
    );
};

export default TerminosCondiciones2;
