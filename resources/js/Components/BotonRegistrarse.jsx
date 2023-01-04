import React from 'react'
import "../../css/estilos-boton-registrarse.css";
const BotonRegistrarse = () => {
    return (
        <div className="col-12 text-center">
            <a href="/register" className="td-none cta-button shadow-button banner-video-paises__button success">
                <div className="cta-content">
                    <span className="cta-button-text">Regístrate y obtén ¡30 días gratis!</span>
                    <div className="cta-button-icon-content">
                        <span className="cta-button-icon-content-hidden-text">Regístrate y obtén 30 días de servicio</span>
                        <span className="cta-button-icon-content-icon icon-Right"></span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default BotonRegistrarse