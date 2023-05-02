import React, { useState } from "react";
import "./AuthenticatedLayout.css";
import MenuLateral from "@/Components/MenuLateral";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/font-web.css";
import "../../css/font-nexa-bold.css";

export default function Authenticated({ auth, header, children, page, carpetas = [], grupos = [], carpeta_actual = null, zona = null, globalLoading=false}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Header auth={auth}></Header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className="">
                <MenuLateral carpetas={carpetas} grupos={grupos} carpeta_actual={carpeta_actual} zona={zona} />
                <div className="col contenido_internas " id={page}>
                    <div className="position-relative d-block">
                        {children}
                    </div>
                </div>
                <Footer></Footer>
            </div>
            {globalLoading &&
                <div className="cargando" id="cargandos">
                    <img src="https://col.licitaciones.info/img/loading.gif" className="img-col" />
                    <p>Cargando</p>
                </div>
            }
        </>
    );
}
