import { Link, Head } from "@inertiajs/inertia-react";

import Banner from "@/Components/Banner";
import { Footer } from "../Components/Footer/Footer";
import "../../css/estilos-carousel-publica.css";
import BotonRegistrarse from '@/Components/BotonRegistrarse';
import BotonAsesor from '@/Components/BotonHablarAsesor';
import CarouselImagenes from '@/Components/CarouselImagenes';

import { BannerMonitoreamos } from "../Components/Banners/BannerMonitoreamos";


import Header from "@/Layouts/HeaderPublica";
export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
            <Header user={props}></Header>
            <Banner procesos={props.contratos}></Banner>

            {/* Componentes */}

            <div className="grid grid-cols-12 my-2 p-5">
                <div className="col-span-6 customers-cta">
                    <div className="contenta-a">
                        <span className="customers-cta-since-year">
                            Desde 2004
                        </span>

                        <span className="customers-cta-count-statistics">
                            Más de 6000 clientes en Colombia y el mundo
                        </span>
                    </div>
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
                <CarouselImagenes />
            </div>

            <BannerMonitoreamos/>
            <Footer />

        </>
    );
}   
