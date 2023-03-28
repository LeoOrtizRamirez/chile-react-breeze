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

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Header></Header>
            <div className="">
                <MenuLateral />
                <div className="">
                    {children}
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}
