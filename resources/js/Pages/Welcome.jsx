import { Link, Head } from "@inertiajs/inertia-react";
import Banner from "@/Components/Banner"; import { Footer } from "../Components/Footer/Footer";
import "../../css/estilos-carousel-publica.css";
import BotonRegistrarse from '@/Components/BotonRegistrarse';
import CarouselImagenes from '@/Components/CarouselImagenes';

import Header from "@/Layouts/HeaderPublica";
export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
            <Header user={props}></Header>
            <Banner procesos={props.contratos}></Banner>
            {/* Componentes */}

            <div class="grid grid-cols-12 my-2 p-5">
                <div class="col-span-6 customers-cta">
                    <div class="contenta-a">
                        <span class="customers-cta-since-year">
                            Desde 2004
                        </span>

                        <span class="customers-cta-count-statistics">
                            Más de 6000 clientes en Colombia y el mundo
                        </span>
                    </div>
                    <BotonRegistrarse/>
                </div>
                <CarouselImagenes />
            </div>
        </>
    );
}   
