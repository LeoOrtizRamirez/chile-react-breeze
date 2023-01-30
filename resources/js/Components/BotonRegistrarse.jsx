import React from 'react'
import "../../css/estilos-boton-registrarse.css";
const BotonRegistrarse = (props) => {
    return (
        <div className="col-12">
            <a href="/register" className={`td-none cta-button-register bg-${props.color} shadow-button-register  hover:bg-[${props.colorHover}]`}>
    
                <div className="cta-content-register">
                    <span className="cta-button-text-register">{props.texto}</span>
                    <div className={`cta-button-icon-content-register`}>
                        <span className={`cta-button-icon-content-register-hidden-text `}>{props.textoHover}</span>
                        <span className="cta-button-icon-content-register-icon icon-Right"></span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default BotonRegistrarse