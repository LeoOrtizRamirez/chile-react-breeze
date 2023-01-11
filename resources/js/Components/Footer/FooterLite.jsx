import React from "react";
import "@/Components/Footer/Footerlite.css";

export const FooterLite = () => {
    return (
        <>
            <footer>
                <div className="container container-footerlite">
                    <div className="footerlite-titles">
                        <span>
                            © 2022 Licitaciones.info S.A.S - Todos los derechos
                            reservados
                        </span>{" "}
                    </div>
                    <div className="footerlite-separator">
                        <span>|</span>
                    </div>
                    <div className="footerlite-titles">
                        <a href="#">Nosotros</a>
                    </div>
                    <div className="footerlite-separator">
                        <span>|</span>
                    </div>
                    <div className="footerlite-titles">
                        <a href="#">Política de privacidad</a>
                    </div>
                    <div className="footerlite-separator">
                        <span>|</span>
                    </div>
                    <div className="footerlite-titles">
                        <a href="#">Términos y condiciones</a>
                    </div>
                    <div className="footerlite-separator">
                        <span>|</span>
                    </div>
                    <div className="footerlite-titles">
                        <a href="#">Política de cookies</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterLite;
