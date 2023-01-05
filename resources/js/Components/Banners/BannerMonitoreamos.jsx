import React from "react";
import "../../../css/banner-monitoreamos.css";
import Allies from "@/Components/Banners/Allies";
import BotonRegistrarse from "@/Components/BotonRegistrarse";
import Img1 from "../../../images/png/1.png";
import Img2 from "../../../images/png/2.png";
import Img3 from "../../../images/png/3.png";
import Img4 from "../../../images/png/4.png";
import Img5 from "../../../images/png/5.png";
import Img6 from "../../../images/png/6.png";
import Img7 from "../../../images/png/7.png";
import Img8 from "../../../images/png/8.png";
import Img9 from "../../../images/png/9.png";
import Img10 from "../../../images/png/10.png";
import Img11 from "../../../images/png/11.png";
import Img12 from "../../../images/png/12.png";
import Img13 from "../../../images/png/13.png";
import Img14 from "../../../images/png/14.png";
import Img15 from "../../../images/png/15.png";
import Img16 from "../../../images/png/16.png";
import Img17 from "../../../images/png/17.png";
import Img18 from "../../../images/png/18.png";
import Img19 from "../../../images/png/19.png";

export const BannerMonitoreamos = () => {
    return (
        <div className="container-monitor-size">
            <div className="monitor-text-size">
                <div>
                    <span className="monitor-title">
                        Monitoreamos y centralizamos la información de
                        licitaciones y convocatorias públicas
                    </span>
                </div>
                <br />
                <div>
                    <span className="monitor-text">
                        Monitoreamos 24/7 más de 1000 sitios web de entidades
                        públicas en búsqueda de nuevas oportunidades de negocio
                        y te informamos casi al instante las que son solamente
                        de tu interés.
                    </span>
                </div>
                <br />
                <div>
                    <BotonRegistrarse
                        texto={"Regístrate y obtén ¡30 días gratis!"}
                        textoHover={"Regístrate y obtén 30 días de servicio"}
                        color={"white"}
                        colorHover={"#73c914"}
                    />
                </div>
            </div>
            <div className="monitor-allies-size">
                <div className="allies-grid">
                    <div className="grid-item1">
                        <a
                            href="https://www.mercadopublico.cl/Home"
                            target="_blank"
                        >
                            <Allies rutaImagen={Img1} />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a href="https://www.mop.gob.cl/" target="_blank">
                            <Allies rutaImagen={Img2} />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.correos.cl/" target="_blank">
                            <Allies rutaImagen={Img3} />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a
                            href="https://www.enami.cl/Pages/default.aspx"
                            target="_blank"
                        >
                            <Allies rutaImagen={Img4} />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.efe.cl/" target="_blank">
                            <Allies rutaImagen={Img5} />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="" target="_blank">
                            <Allies rutaImagen={Img6} />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a
                            href="https://www.portalminero.com/wp/informacion-de-negocios/"
                            target="_blank"
                        >
                            <Allies rutaImagen={Img7} />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a
                            href="https://www.bcentral.cl/inicio"
                            target="_blank"
                        >
                            <Allies rutaImagen={Img8} />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a
                            href="https://www.integra.cl/landing/"
                            target="_blank"
                        >
                            <Allies rutaImagen={Img9} />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.buildbim.cl/" target="_blank">
                            <Allies rutaImagen={Img10} />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a
                            href="https://www.corfo.cl/sites/cpp/homecorfo"
                            target="_blank"
                        >
                            <Allies rutaImagen={Img11} />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a
                            href="http://www.fiscaliadechile.cl/Fiscalia/index.do"
                            target="_blank"
                        >
                            <Allies rutaImagen={Img12} />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="" target="_blank">
                            <Allies rutaImagen={Img13} />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a href="https://proexca.es/" target="_blank">
                            <Allies rutaImagen={Img14} />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.undp.org/es" target="_blank">
                            <Allies rutaImagen={Img15} />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.codelco.com/" target="_blank">
                            <Allies rutaImagen={Img16} />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a
                            href="https://www.scotiabankcolpatria.com/"
                            target="_blank"
                        >
                            <Allies rutaImagen={Img17} />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.econssachile.cl/" target="_blank">
                            <Allies rutaImagen={Img18} />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a href="https://www.conadi.gob.cl/" target="_blank">
                            <Allies rutaImagen={Img19} />
                        </a>
                    </div>
                    <div className="div-text-end">
                        <span className="text-end-grid">
                            Entre <br />
                            <span className="text-end-grid text-end-grid-color">
                                muchos mas{" "}
                            </span>{" "}
                            <br /> portales
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerMonitoreamos;
