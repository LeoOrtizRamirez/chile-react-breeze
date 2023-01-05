import { Link, Head } from "@inertiajs/inertia-react";
import { Footer } from "../Components/Footer/Footer";
import BannerNosotros from "@/Components/Banners/BannerNosotros";

import Header from "@/Layouts/HeaderPublica";
export default function Welcome(props) {

    return (
        <>
            <Head title="Nosotros" />
            <Header user={props}></Header>
            <BannerNosotros />
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
                    
                        <img src="/images/nosotros/imagen-somos.png" alt="" className="somos__imagen-somos" />
                    </div>
                </div>
            </section>
        </>
    );
}
