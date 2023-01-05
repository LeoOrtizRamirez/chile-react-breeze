import React, { useState, useEffect } from 'react';
import "../../../css/estilos-nosotros.css";
import "../../../css/font-unicolor.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";

const BannerNosotros = (props) => {

    return (
        <>
            <div id="nosotros-view">
                <div id="banner-top">
                    <div id="banner-top--img" className="h-100 w-100">
                        <div className="container">
                            <div id="banner-top--text-container" className="row">
                                <div className="col-12 px-0"><h2 className="banner-top--white-title">
                                    Acerca de nosotros
                                </h2> <p className="banner-top--white-text">
                                        Hacemos que el acceso a las licitaciones sea más eficiente, transparente y eficaz
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerNosotros