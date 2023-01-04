import { Link, Head } from "@inertiajs/inertia-react";
import Banner from "@/Components/Banner";import { Footer } from "../Components/Footer/Footer";

import Header from "@/Layouts/HeaderPublica";
export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Header user={props}></Header>
            <Banner></Banner>
            {/* Componentes */}
            <Footer />
        </>
    );
}
