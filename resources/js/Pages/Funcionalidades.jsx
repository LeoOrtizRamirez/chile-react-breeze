import React from "react";
import "./Funcionalidades.css";
import { Head } from "@inertiajs/inertia-react";
import { Footer } from "../Components/Footer/Footer";
import Header from "@/Layouts/HeaderPublica";
import BotonRegistrarse from "@/Components/BotonRegistrarse";
import BotonAsesor from "@/Components/BotonHablarAsesor";
import "../../css/font-unicolor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";

export const Funcionalidades = (props) => {
    return (
        <>
                <Head title="Funcionalidades" />
                <Header user={props}>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap"
                        rel="stylesheet"
                    ></link>
                </Header>
                <div className="content">
                    <div className="container-functionalities">
                        <div className="container-functionalities-text">
                            <h1 className="title-functionalities">
                                Funcionalidades pensadas en tus necesidades
                            </h1>
                            <br />
                            <span className="span-functionalities">
                                Descubre las funcionalidades que te ayudarán a
                                presentar propuestas más competitivas, por medio
                                de los datos que centralizamos para ti.
                            </span>
                            <br />
                            <br />
                            <BotonRegistrarse
                                texto={"Regístrate y obtén ¡30 días gratis!"}
                                textoHover={
                                    "Regístrate y obtén 30 días de servicio"
                                }
                                color={"white"}
                                colorHover={"#00A1C9"}
                            />
                        </div>
                        <div className="img-pantallas">
                            <img
                                src="/public/images/funcionalidades/Pantallas---Mockup@3x.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="container-filters-info">
                        <h1 className="title-filters-info">
                            FILTROS DE INFORMACIÓN
                        </h1>
                        <br />
                        <span className="text-filters-info">
                            Analiza a tu competencia y estudia la dinámica de
                            contratación de las entidades de tu interés.
                        </span>
                    </div>
                    <div className="container-segment">
                        <div className="div1">
                            <img
                                src="/public/images/funcionalidades/Component 732 – 1@3x.png"
                                alt=""
                            />
                        </div>
                        <div className="div2 container-div segment-img">
                            <h1 className="title-segment">
                                Segmenta los procesos de tu interés
                            </h1>
                            <div>
                                <span className="text-segment">
                                    Crea perfiles de negocio ilimitados para
                                    segmentar los procesos de contratación de tu
                                    interés ahorrando tiempo y dinero en la
                                    identificación de oportunidades para
                                    licitar, al filtrar la información que
                                    necesites por actividad económica,
                                    modalidad, ubicación y/o rangos de cuantía
                                    desde un solo lugar.
                                </span>
                            </div>
                        </div>
                        <div className="div3 h-60 container-divs segment-img">
                            <img
                                src="/public/images/funcionalidades/exportar.svg"
                                alt=""
                            />
                            <h1 className="subtitle-segment ml-16">
                                Exportar búsquedas
                            </h1>
                            <span className="text-segment">
                                Descarga en formato CSV los datos de cualquier
                                proceso de contratación para que puedas
                                transferir su contenido a diversas plataformas
                                para que puedas crear gráficos, sumar valores o
                                aplicar cualquier otra técnica de transformación
                                de la información.
                            </span>
                        </div>
                        <div className="div4 h-60 container-divs segment-img">
                            <img
                                src="/public/images/funcionalidades/lupa.svg"
                                alt=""
                            />
                            <h1 className="subtitle-segment ml-16">
                                Búsqueda intuitiva
                            </h1>
                            <span className="text-segment">
                                Encuentra rápidamente las licitaciones que
                                necesitas por medio de palabras clave o haciendo
                                uso de nuestros filtros de información.
                                Encuentra los procesos de tu interés por
                                entidad, objeto, actividad económica, modalidad
                                de contratación, ubicación o rangos de cuantía.
                            </span>
                        </div>
                        <div className="div5 h-60 container-divs segment-img">
                            <img
                                src="/public/images/funcionalidades/historico.svg"
                                alt=""
                            />
                            <h1 className="subtitle-segment ml-16">
                                Histórico de procesos
                            </h1>
                            <span className="text-segment">
                                Accede a las licitaciones publicadas desde 2014
                                en SECOP I, SECOP II y otras plataformas de
                                contratación, para conocer su trazabilidad
                                histórica y entender la dinámica de compras de
                                diversas entidades.
                            </span>
                        </div>
                        <div className="div6 h-60 container-divs segment-img">
                            <img
                                src="/public/images/funcionalidades/carpeta.svg"
                                alt=""
                            />
                            <h1 className="subtitle-segment ml-16">Carpetas</h1>
                            <span className="text-segment">
                                Agrupa los procesos de contratación de acuerdo a
                                tu estrategia de negocios, tal como lo puede ser
                                su urgencia, su locación o cualquier otro
                                criterio que elijas.
                            </span>
                        </div>
                    </div>
                    <div className="container-workteam">
                        <div className="workteam">
                            <div className="workteam-size">
                                <h2 className="workteam-subtitle">
                                    COLABORATIVO
                                </h2>
                                <h1 className="workteam-title">
                                    Trabaja con tu equipo
                                </h1>
                                <br />
                                <span className="workteam-text">
                                    Participa en procesos de contratación,
                                    haciendo uso de las herramientas que te
                                    permiten gestionar colaborativamente la
                                    información de diferentes procesos de
                                    contratación.
                                    <br />
                                    <br />
                                    <span className="workteam-text">
                                        Por medio de las herramientas que ofrece
                                        nuestra plataforma puedes colaborar
                                        activamente con tu equipo de trabajo.
                                    </span>
                                </span>
                            </div>
                            <div className="workteam-size">
                                <img
                                    src="/public/images/funcionalidades/workteam.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="workteam-people-share-note">
                            <div className="workteam-psn workteam-icon">
                                <img
                                    src="/public/images/funcionalidades/people.svg"
                                    alt=""
                                />
                                <h1 className="workteam-psn-title">
                                    Colabora con tus cuentas adicionales
                                </h1>
                                <span className="workteam-psn-text">
                                    Sin importar el plan al que te suscribas
                                    tendrás una cuenta principal y otras
                                    adicionales, con el fin de que puedas
                                    estructurar el mejor equipo para licitar.
                                </span>
                            </div>
                            <div className="workteam-psn workteam-icon">
                                <img
                                    src="/public/images/funcionalidades/share.svg"
                                    alt=""
                                />
                                <h1 className="workteam-psn-title">
                                    Comparte oportunidades de negocio
                                </h1>
                                <span className="workteam-psn-text">
                                    Podrás enviarle a tu red de contactos las
                                    oportunidades de negocio que les puedan
                                    interesar con solo un clic.
                                </span>
                            </div>
                            <div className="workteam-psn workteam-icon">
                                <img
                                    src="/public/images/funcionalidades/note.svg"
                                    alt=""
                                />
                                <h1 className="workteam-psn-title">
                                    Agrega notas y comentarios <br /> en los
                                    procesos de interés
                                </h1>
                                <span className="workteam-psn-text">
                                    Agrega comentarios en los procesos de
                                    contratación que quieras para que quede por
                                    escrito cualquier observación, ya sea para
                                    ti y próximamente a las subcuentas que hayas
                                    vinculado.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="container-tracking">
                        <div className="tracking">
                            <div className="tracking-size">
                                <img
                                    src="/public/images/funcionalidades/tracking.png"
                                    alt=""
                                />
                            </div>
                            <div className="tracking-size">
                                <h2 className="tracking-subtitle">
                                    RASTREO Y SEGUIMIENTO
                                </h2>
                                <h1 className="tracking-title">
                                    Monitoreamos por ti los procesos de tu
                                    interés
                                </h1>
                                <br />
                                <span className="tracking-text">
                                    Realizamos un rastreo constante a los
                                    procesos que nos indiques. Por medio de
                                    notificaciones web y email te avisaremos
                                    sobre la publicación de novedades tales
                                    como:
                                    <br />
                                    <br />
                                    <span className="icon-success"></span>
                                    <span className="tracking-text">
                                        Publicación de nuevos - actualizaciones
                                        de documentos - Anexos, Adendas, Pliegos
                                        de condiciones entre otros.
                                    </span>
                                    <br />
                                    <br />
                                    <span className="icon-success"></span>
                                    <span className="tracking-text">
                                        Cambio de estado en los procesos, te
                                        acompañamos desde la publicación hasta
                                        la adjudicación de los mismos.
                                    </span>
                                </span>
                            </div>

                            <div className="tracking-sd tracking-icon">
                                <img
                                    src="/public/images/funcionalidades/captcha.svg"
                                    alt=""
                                />
                                <h1 className="tracking-psn-title">
                                    Sin descifrar captcha
                                </h1>
                                <span className="tracking-psn-text">
                                    Revisa los procesos de contratación pública
                                    de tu interés sin tener que probar
                                    constantemente que no eres un robot,
                                    ahorrando tiempo y haciendo más fluida tu
                                    navegabilidad web porque nosotros
                                    descifraremos esos códigos por ti.
                                </span>
                            </div>
                            <div className="tracking-sd tracking-icon">
                                <img
                                    src="/public/images/funcionalidades/descarga.svg"
                                    alt=""
                                />
                                <h1 className="tracking-psn-title">
                                    Descarga de documentos
                                </h1>
                                <span className="tracking-psn-text">
                                    Recolecta todos los documentos relacionados
                                    con los procesos de contratación de tu
                                    interés, tales como: pliegos de condiciones,
                                    observaciones, adendas, actas de
                                    adjudicación.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="container-chance">
                        <div className="change-size-info change-flex">
                            <h2 className="change-subtitle">
                                MÁS FUNCIONALIDADES
                            </h2>
                            <h1 className="change-title">
                                Expande tus oportunidades de negocio con
                                nosotros y nuestra comunidad
                            </h1>
                            <span className="change-text">
                                En tus manos está la posibilidad de sacarle el
                                mejor provecho a tu suscripción
                            </span>
                            <br />
                            <h1 className="change-title">
                                Acompañamiento constante
                            </h1>
                            <span className="change-text">
                                Contáctanos por medio de canales digitales o
                                tradicionales, teniendo siempre la certeza de
                                que nuestro equipo de consultores te atentará.
                            </span>
                            <br />
                            <h1 className="change-title">Publicar contrato</h1>
                            <span className="change-text">
                                Enriquece tu red de proveedores publicando
                                requerimientos comerciales que podrán ser
                                resueltos por usuarios de otras compañías.
                            </span>
                            <br />
                            <h1 className="change-title">
                                Sugerencia de entidades
                            </h1>
                            <span className="change-text">
                                Sugiérenos organizaciones privadas, mixtas o
                                públicas que publiquen su contratación en
                                internet, a las cuales te gustaría venderles tus
                                productos y/o servicios.
                            </span>
                        </div>
                        <div className="change-size-img change-img">
                            <img
                                src="/public/images/funcionalidades/business-team-and-manager-in-meeting@3x.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="container-btn">
                        <img
                            src="/public/images/funcionalidades/Group 9592@3x.png"
                            alt=""
                        />
                        <div className="container-baner-btn">
                            <div>
                                <h1 className="baner-btn-title">
                                    ¿ESTÁS LISTO PARA EMPEZAR A LICITAR?
                                </h1>
                                <span className="baner-btn-text">
                                    Licitar con entidades públicas y privadas es
                                    una excelente idea para hacer crecer tu
                                    empresa
                                </span>
                            </div>
                            <div className="btn-flex">
                                <div className="btn-banner-func">
                                    <BotonRegistrarse
                                        texto={
                                            "Regístrate y obtén ¡30 días gratis!"
                                        }
                                        textoHover={
                                            "Regístrate y obtén 30 días de servicio"
                                        }
                                        color={"white"}
                                        colorHover={"#00A1C9"}
                                    />
                                </div>
                                <div className="btn-banner-func">
                                    <BotonAsesor
                                        texto={"Habla con un consultor"}
                                        textoHover={"Resolver dudas ahora"}
                                        color={"white"}
                                        colorHover={"#00A1C9"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <Footer />
        </>
    );
};

export default Funcionalidades;
