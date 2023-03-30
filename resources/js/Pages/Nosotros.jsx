import { Head } from "@inertiajs/inertia-react";
import WithOutAuthenticatedLayout from "@/Layouts/WithOutAuthenticatedLayout";
import CarouselImagenes from '@/Components/CarouselImagenes';
import "../../css/estilos-carousel-publica.css";
import BotonRegistrarse from '@/Components/BotonRegistrarse';
import BotonAsesor from '@/Components/BotonHablarAsesor';
import './Nosotros.css';

export default function Nosotros({auth}) {

    return (
        <WithOutAuthenticatedLayout auth={auth}>
            <Head title="Nosotros" />
            <div id="nosotros-view">
                <div id="banner-top">
                    <div id="banner-top--img" className="h-100 w-100">
                        <div className="container">
                            <div id="banner-top--text-container" className="row">
                                <div className="col-12 px-0"><h2 className="banner-top--white-title">
                                    Acerca de nosotros
                                </h2> <p className="banner-top--white-text">
                                        Hacemos que el acceso a las licitaciones sea más eficiente, transparente y eficaz
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="nosotros-somos" className="container">
                <div className="potenciamos">
                    <h5 className="potenciamos__subtitulo">SOMOS LICITACIONES.INFO</h5>
                    <h2 className="potenciamos__titulo">Potenciamos la competitividad con información transparente y ordenada</h2>
                </div>
                <div className="somos row">
                    <div className="somos__texto col-lg-6 col-sm-12">
                        <p className="somos__texto-decisiones">Toma decisiones estratégicas basadas en datos para triunfar en el mercado de Licitaciones.info y contrataciones públicas</p>
                        <br />
                        <p className="somos__texto-plataforma">La plataforma digital que facilita el acceso equitativo a miles de licitaciones en un solo lugar a través del mejor sistema de procesamiento de información, gracias a que combinamos innovación tecnológica con talento humano especializado en el análisis de datos.</p>
                    </div>
                    <div className="somos__imagen col-lg-6 col-sm-12">
                        <img src="/public/images/nosotros/imagen-somos.png" alt="" className="somos__imagen-somos" />
                    </div>
                </div>
            </section>
            <section id="nosotros-elementos" className="container">
                <div className="elementos">
                    <p className="elementos__texto">
                        ¿Sabías que hay elementos que
                        <span className="elementos__texto-modifier"> obstaculizan </span>
                        el acceso a los miles de procesos de contratación que se publican diariamente?
                        <span className="elementos__texto-modifier"> Esto es, principalmente, consecuencia de:</span>
                    </p>
                </div>
                <div className="motivos row">
                    <div className="col-lg-6 motivos-volumenes">
                        <div className="motivos__informacion">
                            <img src="/public/images/nosotros/volumenes.svg" alt="Columenes" className="motivos__informacion-imagen" />
                            <h5 className="motivos__informacion-titulo">Grandes volúmenes de información</h5>
                            <p className="motivos__informacion-texto">Tus oportunidades de negocio se ven opacadas por las miles de
                                convocatorias que se publican diariamente.</p>
                        </div>
                        <div className="motivos__razon">
                            <h5 className="motivos__razon-titulo">Por esta razón nosotros:</h5>
                            <p className="motivos__razon-texto">Estructuramos un equipo humano y una plataforma con tecnología avanzada
                                que te facilita el acceso a tus oportunidades de negocio.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 motivos-clasificacion">
                        <div className="motivos__informacion">
                            <img src="/public/images/nosotros/clasificacion.svg" alt="Clasificacion" className="motivos__informacion-imagen" />
                            <h5 className="motivos__informacion-titulo">Problemas de clasificación</h5>
                            <p className="motivos__informacion-texto">Debido a la complejidad del lenguaje utilizado para organizar la
                                información.</p>
                        </div>
                        <div className="motivos__razon">
                            <h5 className="motivos__razon-titulo">Por esta razón nosotros:</h5>
                            <p className="motivos__razon-texto">Clasificamos uno a uno los procesos de contratación en la actividad
                                económica correspondiente, minimizando las inconsistencias que obstaculicen el acceso a la
                                información.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="nosotros-trayectoria">
                <div className="trayectoria rounded-container container">
                    <div className="seccion row">
                        <div className="seccion__trayectoria col-lg-6 col-sm-12">
                            <h4 className="seccion__trayectoria-titulo">
                                Nuestra
                                <span className="seccion__trayectoria-titulo-modifier"> trayectoria y valores</span>
                            </h4>
                            <p className="seccion__trayectoria-texto">
                                Desde nuestros inicios, más de 6000 empresas han utilizado nuestra plataforma para acceder a los
                                miles de procesos de contratación, pues nuestro propósito siempre ha sido el de proveer un acceso
                                equitativo a las oportunidades de negocio que emiten las entidades públicas, privadas y mixtas.
                            </p>
                        </div>
                        <div className="seccion__imagen col-lg-6 col-sm-12">
                            <img src="/public/images/nosotros/trayectoria.webp" alt="Trayectoria" />
                        </div>
                    </div>
                    <div className="valor row">
                        <div className="valor__empresa col-lg-6 col-sm-12">
                            <div className="valor__empresa-titulo">
                                <img src="/public/images/nosotros/equidad.svg" alt="Equidad y pluralidad" />
                                <h5 className="valor__titulo">Equidad y pluralidad</h5>
                            </div>
                            <p className="valor__empresa-texto">
                                Nos aseguramos que todos nuestros clientes estén en igualdad de condiciones para participar en el
                                mercado de ofertas públicas y por eso ofrecemos la misma información a todo el que quiera acceder a
                                ella, sin importar quiénes son o el monto de su suscripción.
                            </p>
                        </div>
                        <div className="valor__empresa col-lg-6 col-sm-12">
                            <div className="valor__empresa-titulo">
                                <img src="/public/images/nosotros/transparencia.svg" alt="Transparencia" />
                                <h5 className="valor__titulo">Transparencia</h5>
                            </div>
                            <p className="valor__empresa-texto">
                                Queremos potenciar la visibilidad de la contratación pública al centralizar, de forma neutral y
                                clara, todos los elementos que se encuentran dispersos en diferentes fuentes de información para que
                                nuestros clientes tengan pleno conocimiento de lo que ocurre en el mercado de compras públicas.
                            </p>
                        </div>
                    </div>
                    <div className="valor row">
                        <div className="valor__empresa col-lg-6 col-sm-12">
                            <div className="valor__empresa-titulo">
                                <img src="/public/images/nosotros/equipo.svg" alt="Trabajo en equipo" />
                                <h5 className="valor__titulo">Trabajo en equipo</h5>
                            </div>
                            <p className="valor__empresa-texto">
                                Aportamos a la productividad de nuestros clientes, siendo su aliado en el proceso de visualización
                                de la contratación pública e identificación de oportunidades de negocio, al tiempo que les proveemos
                                soluciones de gestión colaborativa de la información.
                            </p>
                        </div>
                        <div className="valor__empresa col-lg-6 col-sm-12">
                            <div className="valor__empresa-titulo">
                                <img src="/public/images/nosotros/innovacion.svg" alt="Innovación" />
                                <h5 className="valor__titulo">Innovación</h5>
                            </div>
                            <p className="valor__empresa-texto">
                                Siempre estamos pensando en cómo crear nuevas funcionalidades que nos permitan prestar el mejor
                                servicio, así como también compartimos con nuestros clientes estrategias para el análisis de la
                                información que les permitan tomar la iniciativa en sus organizaciones para formular propuestas
                                competitivas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="customers-section">
                <div className="customers container rounded-container">
                    <div className="customers-cta w-50">
                        <div className="contenta-a">
                            <span className="customers-cta-count-statistics">
                                Conoce a la comunidad de contratistas que hacen uso de nuestra plataforma para innovar con información
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
        </WithOutAuthenticatedLayout>
    );
}
