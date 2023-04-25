import React, { useState } from "react";
import "./AuthenticatedLayout.css";
import MenuLateral from "@/Components/MenuLateral";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/font-web.css";
import "../../css/font-nexa-bold.css";

export default function Authenticated({ auth, header, children, page, carpetas=[], grupos=[] }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Header auth={auth}></Header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="">
                <MenuLateral carpetas={carpetas} grupos={grupos}/>
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
