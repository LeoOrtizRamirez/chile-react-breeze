import { Link, Head } from "@inertiajs/inertia-react";
import { Footer } from "../Components/Footer/Footer";
import BannerNosotros from "@/Components/Banners/BannerNosotros";

import Header from "@/Layouts/HeaderPublica";
export default function Welcome(props) {

    return (
        <>
            <Head title="Nosotros" />
            <Header user={props}></Header>
            <BannerNosotros/>
        </>
    );
}
