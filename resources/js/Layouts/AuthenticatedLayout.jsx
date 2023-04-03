import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import ApplicationLogoLici from "@/Components/ApplicationLogoLici";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import MenuOpciones from "@/Components/Menu_opciones/MenuOpciones";
import "./AuthenticatedLayout.css";
import MenuLateral from "@/Components/MenuLateral";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

import "../../css/font-web.css";

export default function Authenticated({ auth, header, children, page }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Header></Header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="">
                <MenuLateral />
                <div className="col contenido_internas " id={page}>
                    <div className="position-relative d-block">
                        {children}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}
