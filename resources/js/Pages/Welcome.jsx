import { Link, Head } from "@inertiajs/inertia-react";

import Banner from "@/Components/Banner";
import { Footer } from "../Components/Footer/Footer";
import "../../css/estilos-carousel-publica.css";
import BotonRegistrarse from '@/Components/BotonRegistrarse';
import BotonAsesor from '@/Components/BotonHablarAsesor';
import CarouselImagenes from '@/Components/CarouselImagenes';

import { BannerMonitoreamos } from "../Components/Banners/BannerMonitoreamos";

import BannerNosotros from "@/Components/Banners/BannerNosotros";

import Header from "@/Layouts/HeaderPublica";
export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
            <Header user={props}></Header>
            <Banner procesos={props.contratos}></Banner>

            {/* Componentes */}

            <section id="customers-section">
                <div class="customers container rounded-container">
                    <div className="customers-cta">
                        <div className="contenta-a">
                            <span className="customers-cta-since-year">
                                Desde 2004
                            </span>

                            <span className="customers-cta-count-statistics">
                                Más de 6000 clientes en Colombia y el mundo
                            </span>
                        </div>
                        <div className="contenta-b">
                            <BotonRegistrarse
                                texto={"Regístrate y obtén ¡30 días gratis!"}
                                textoHover={"Regístrate y obtén 30 días de servicio"}
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
                    <div className="customers-list customers-list-carrousel">
                    <CarouselImagenes />
                    </div>
                </div>
            </section>

            <BannerMonitoreamos/>
            <Footer />

        </>
    );
}   
