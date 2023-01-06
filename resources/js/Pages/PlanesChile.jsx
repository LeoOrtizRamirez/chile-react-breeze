import { Head } from "@inertiajs/inertia-react";
import "../../css/estilos-planes-precios.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";
import "../../css/font-unicolor.css";
import { Footer } from "../Components/Footer/Footer";
import Header from "@/Layouts/HeaderPublica";
import BotonRegistrarse from '@/Components/BotonRegistrarse';

const Chile = (props) => {
    return (
        <>
            <Head title="Welcome" />
            <Header user={props}></Header>
            <section id="planes" className="planes planes-container customers-planes container">
                <div className="planes-info">
                    <p className="plan-info-title">Nuestros planes y precios</p>
                    <h2 className="plan-info-subtitle">
                        Elige el plan que mejor potencie tus estrategias</h2>
                    <p className="plan-info-description">
                        Nuestros planes están pensados en el tiempo de suscripción por esta razón no tienes ninguna limitante y puedes acceder a todo lo que te ofrece nuestra plataforma sin importar el plan que elijas.
                    </p>
                </div>

                <div id="PriceCardsList" className="planes-listado">
                    <ul className="planes-listado-cards">
                        <li className="planes-listado-card">
                            <div className="priceCard">
                                <div className="priceCard-ribbon">
                                    <span className="priceCard-ribbon-text">3 meses</span>
                                </div>

                                <div className="priceCard-pricing">
                                    <div className="priceCard-price">
                                        <span className="priceCard-price-popular-text">
                                            El más popular</span>
                                        <p className="priceCard-price-value">
                                            $62</p></div>
                                    <div className="priceCard-money-description">
                                        <span className="priceCard-money-description-text">
                                            Dólares estadounidenses</span>
                                    </div>
                                </div>

                                <div className="priceCard-cta">
                                    <BotonRegistrarse
                                        texto={"Comprar"}
                                        textoHover={"Adquirir plan"}
                                        color={"white"}
                                        colorHover={"#00A1C9"}
                                    />
                                </div>
                                <div className="priceCard-benefits">
                                    <p className="priceCard-benefits-text"> </p>
                                </div>
                            </div>
                        </li>
                        <li className="planes-listado-card">
                            <div className="priceCard">
                                <div className="priceCard-discount">
                                    <span className="priceCard-discount-text">
                                        -27%*</span>
                                </div>
                                <div className="priceCard-ribbon">
                                    <span className="priceCard-ribbon-text">6 meses</span>
                                </div>
                                <div className="priceCard-pricing">
                                    <div className="priceCard-price">
                                        <span className="priceCard-price-popular-text"> El más popular</span>
                                        <p className="priceCard-price-value">$98</p>
                                    </div>
                                    <div className="priceCard-money-description">
                                        <span className="priceCard-money-description-text">Dólares estadounidenses</span>
                                    </div>
                                </div>
                                <div className="priceCard-cta">
                                    <BotonRegistrarse
                                        texto={"Comprar"}
                                        textoHover={"Adquirir plan"}
                                        color={"white"}
                                        colorHover={"#00A1C9"}
                                    />
                                </div>
                                <div className="priceCard-benefits">
                                    <p className="priceCard-benefits-text">
                                        * Al renovar con un plan de 3 meses serían $ 124 eso te representa un ahorro de $ 26.</p>
                                </div>
                            </div>
                        </li>
                        <li className="planes-listado-card">
                            <div className="priceCard popular">
                                <div className="priceCard-discount">
                                    <span className="priceCard-discount-text">-35%*</span>
                                </div>
                                <div className="priceCard-ribbon">
                                    <span className="priceCard-ribbon-text"> 12 meses</span>
                                </div>
                                <div className="priceCard-pricing">
                                    <div className="priceCard-price">
                                        <span className="priceCard-price-popular-text"> El más popular</span>
                                        <p className="priceCard-price-value"> $160</p>
                                    </div>
                                    <div className="priceCard-money-description">
                                        <span className="priceCard-money-description-text"> Dólares estadounidenses</span>
                                    </div>
                                </div>
                                <div className="priceCard-cta">
                                    <BotonRegistrarse
                                        texto={"Comprar"}
                                        textoHover={"Adquirir plan"}
                                        color={"white"}
                                        colorHover={"#00A1C9"}
                                    />
                                </div>
                                <div className="priceCard-benefits">
                                    <p className="priceCard-benefits-text">
                                        * Al renovar con un plan de 3 meses serían $ 248, eso te representa un ahorro de $ 88.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="planes-listado-card">
                            <div className="priceCard">
                                <div className="priceCard-discount">
                                    <span className="priceCard-discount-text">-40%*</span>
                                </div>
                                <div className="priceCard-ribbon">
                                    <span className="priceCard-ribbon-text">18 meses</span>
                                </div>
                                <div className="priceCard-pricing">
                                    <div className="priceCard-price">
                                        <span className="priceCard-price-popular-text"> El más popular</span>
                                        <p className="priceCard-price-value">$225</p>
                                    </div>
                                    <div className="priceCard-money-description">
                                        <span className="priceCard-money-description-text">Dólares estadounidenses</span>
                                    </div>
                                </div>
                                <div className="priceCard-cta">
                                    <BotonRegistrarse
                                        texto={"Comprar"}
                                        textoHover={"Adquirir plan"}
                                        color={"white"}
                                        colorHover={"#00A1C9"}
                                    />
                                </div>
                                <div className="priceCard-benefits">
                                    <p className="priceCard-benefits-text">
                                        * Al renovar con un plan de 3 meses serían $ 372, eso te representa un ahorro de $ 147.</p>
                                </div>
                            </div>
                        </li>
                        <li className="planes-listado-card">
                            <div className="priceCard">
                                <div className="priceCard-discount">
                                    <span className="priceCard-discount-text">-43%*</span>
                                </div>
                                <div className="priceCard-ribbon">
                                    <span className="priceCard-ribbon-text">24 meses</span>
                                </div>
                                <div className="priceCard-pricing">
                                    <div className="priceCard-price">
                                        <span className="priceCard-price-popular-text">El más popular</span>
                                        <p className="priceCard-price-value">$282</p></div>
                                    <div className="priceCard-money-description">
                                        <span className="priceCard-money-description-text">Dólares estadounidenses</span>
                                    </div>
                                </div>
                                <div className="priceCard-cta">
                                    <BotonRegistrarse
                                        texto={"Comprar"}
                                        textoHover={"Adquirir plan"}
                                        color={"white"}
                                        colorHover={"#00A1C9"}
                                    />
                                </div>
                                <div className="priceCard-benefits">
                                    <p className="priceCard-benefits-text">
                                        * Al renovar con un plan de 3 meses serían $ 496, eso te representa un ahorro de $ 214.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="funcionalidades" class="funcionalidades container">
                <div class="funcionalidades-info">
                    <p class="funcionalidades-info-title">
                        incluido en tu plan
                    </p> <h2 class="funcionalidades-info-subtitle">
                        Funcionalidades que te facilitan acceso a la información
                    </h2>
                </div> <div id="funcionalidades-list" class="funcionalidades-list">
                    <ul class="funcionalidades-list-content">
                        <div class="funcionalidades-list-column mr-3">

                            <li class="funcionalidades-list-item">
                                <div class="funcionalidad">
                                    <img src="/images/planes/colombia.svg" alt="Item" class="funcionalidad-image" />
                                    <p class="funcionalidad-text">
                                        Monitoreo 24/7 de todas las fuentes de información de<br></br> la contratación en Colombia.
                                    </p>
                                </div>
                            </li>
                            <li class="funcionalidades-list-item">
                                <div class="funcionalidad">
                                    <img src="/images/planes/captcha.svg" alt="Item" class="funcionalidad-image" />
                                    <p class="funcionalidad-text">
                                        Desciframos por tí el código captcha.
                                    </p>
                                </div>
                            </li>
                            <li class="funcionalidades-list-item">
                                <div class="funcionalidad">
                                    <img src="/images/planes/exportar.svg" alt="Item" class="funcionalidad-image" />
                                    <p class="funcionalidad-text">
                                        Exportación de procesos de contratación a Excel.
                                    </p>
                                </div>
                            </li>
                            <li class="funcionalidades-list-item">
                                <div class="funcionalidad">
                                    <img src="/images/planes/acceso-contratacion.svg" alt="Item" class="funcionalidad-image" />
                                    <p class="funcionalidad-text">
                                        Acceso a la contratación de Panamá y Ecuador.
                                    </p>
                                </div>
                            </li>

                        </div> <div class="funcionalidades-list-column">
                            <li class="funcionalidades-list-item">
                                <div class="funcionalidad">
                                    <img src="/images/planes/seguimiento.svg" alt="Item" class="funcionalidad-image" />
                                    <p class="funcionalidad-text">
                                        Seguimiento a la publicación de nuevos documentos.
                                    </p>
                                </div>
                            </li>
                            <li class="funcionalidades-list-item">
                                <div class="funcionalidad">
                                    <img src="/images/planes/correo.svg" alt="Item" class="funcionalidad-image" />
                                    <p class="funcionalidad-text">
                                        Notificamos al correo de cada oportunidad de negocio para tí.
                                    </p>
                                </div>
                            </li>
                            <li class="funcionalidades-list-item">
                                <div class="funcionalidad">
                                    <img src="/images/planes/app.svg" alt="Item" class="funcionalidad-image" />
                                    <p class="funcionalidad-text">
                                        App móvil
                                    </p>
                                </div>
                            </li>
                            <li class="funcionalidades-list-item">
                                <div class="funcionalidad visit-funcionalities">
                                    <a href="/colombia/funcionalidades">
                                        <img src="/images/planes/conocer-mas.svg" alt="Item" class="funcionalidad-image" />
                                        <p class="funcionalidad-text mark-text">
                                            Conoce todas las funcionalidades
                                        </p> <span class="icon-down icon">

                                        </span>
                                    </a>
                                </div>
                            </li>

                        </div>
                    </ul>
                </div> <div class="funcionalidades-content-button">
                    <BotonRegistrarse
                        texto={"Adquirir un plan"}
                        textoHover={"Escoger mi plan"}
                        color={"white"}
                        colorHover={"#00A1C9"}
                    />


                </div>
            </section>

            <Footer />
        </>
    )
}

export default Chile