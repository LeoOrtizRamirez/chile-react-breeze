import React, { useState } from "react";
import "./WithOutAuthenticatedLayout.css";
import "../../css/font-unicolor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";
import Header from "@/Layouts/HeaderPublica";
import { Footer } from "../Components/Footer/Footer";
export default function Authenticated({ auth, header, children, page }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Header user={auth}></Header>
            <div id={page}>
                {children}
            </div>
            <Footer></Footer>
        </>
    );
}
