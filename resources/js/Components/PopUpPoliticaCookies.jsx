import React, { useEffect, useState, useRef } from "react";
import "../../css/estilos-popup-politica-cookies.css";

const PopUpPoliticaCookies = () => {

    const [contenedorAvisoCookies, setContenedorAvisoCookies] = useState(true)

    useEffect(() => {
           if (localStorage.getItem('cookies-aceptadas')) {
               setContenedorAvisoCookies(false)
           }
       }, [])
   
       function AceptarCookies(e) {
           setContenedorAvisoCookies(false)
           localStorage.setItem('cookies-aceptadas', true)
       }
   
    return (
        <>
            {contenedorAvisoCookies &&
                <div className="modal-dialog modal-md activo">
                    <span tabindex="0"></span>
                    <div id="ModalPopUpCookies___BV_modal_content_ modal-content" tabindex="-1">
                        <div id="ModalPopUpCookies___BV_modal_body_" className="modal-body-aviso-cookies">
                            <span className="block__title">Política de Cookies</span>
                            <div className="block__info">
                                <p className="block__info-p"> Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestra familia de usuarios y mejorar nuestros servicios. Si aceptas o continúas navegando, consideramos que aceptas su uso. Puedes cambiar la configuración u obtener <a href="/politicasc" target="_blank" className="block__info-a">más información aquí.</a>
                                </p>
                                <div >
                                    <button className="block__info-btn" onClick={AceptarCookies}> Aceptar </button>
                                </div>
                                <div >
                                    <button className="block__info-btn block__info-btn--modifier" onClick={AceptarCookies}> Rechazar </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PopUpPoliticaCookies