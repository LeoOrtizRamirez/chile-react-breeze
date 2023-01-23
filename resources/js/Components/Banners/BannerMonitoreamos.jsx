import React from "react";
import "@/Components/Banners/banner-monitoreamos.css";
import Allies from "@/Components/Banners/Allies";
import BotonRegistrarse from "@/Components/BotonRegistrarse";

export const BannerMonitoreamos = () => {
    return (
        <div className="container container-monitor-size lg:mx-3 md:mx-1">
            <div className="monitor-text-size md:flex md:w-auto md:order-1">
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
            <div className="monitor-allies-size md:flex md:w-auto md:order-1">
                <div className="allies-grid">
                    <div className="grid-item1">
                        <a
                            href="https://www.mercadopublico.cl/Home"
                            target="_blank"
                        >
                            <Allies rutaImagen="/images/banerMonitoreamos/1.png" />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a href="https://www.mop.gob.cl/" target="_blank">
                        <Allies rutaImagen="/images/banerMonitoreamos/2.png" />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.correos.cl/" target="_blank">
                        <Allies rutaImagen="/images/banerMonitoreamos/3.png" />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a
                            href="https://www.enami.cl/Pages/default.aspx"
                            target="_blank"
                        >
                            <Allies rutaImagen="/images/banerMonitoreamos/4.png" />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.efe.cl/" target="_blank">
                        <Allies rutaImagen="/images/banerMonitoreamos/5.png" />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.electricas.cl/" target="_blank">
                        <Allies rutaImagen="/images/banerMonitoreamos/6.png" />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a
                            href="https://www.portalminero.com/wp/informacion-de-negocios/"
                            target="_blank"
                        >
                            <Allies rutaImagen="/images/banerMonitoreamos/7.png" />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a
                            href="https://www.bcentral.cl/inicio"
                            target="_blank"
                        >
                            <Allies rutaImagen="/images/banerMonitoreamos/8.png" />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a
                            href="https://www.integra.cl/landing/"
                            target="_blank"
                        >
                            <Allies rutaImagen="/images/banerMonitoreamos/9.png" />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.buildbim.cl/" target="_blank">
                        <Allies rutaImagen="/images/banerMonitoreamos/10.png" />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a
                            href="https://www.corfo.cl/sites/cpp/homecorfo"
                            target="_blank"
                        >
                            <Allies rutaImagen="/images/banerMonitoreamos/11.png" />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a
                            href="http://www.fiscaliadechile.cl/Fiscalia/index.do"
                            target="_blank"
                        >
                            <Allies rutaImagen="/images/banerMonitoreamos/12.png" />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.ctg.com/" target="_blank">
                        <Allies rutaImagen="/images/banerMonitoreamos/13.png" />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a href="https://proexca.es/" target="_blank">
                        <Allies rutaImagen="/images/banerMonitoreamos/14.png" />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.undp.org/es" target="_blank">
                        <Allies rutaImagen="/images/banerMonitoreamos/15-1.png" />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.codelco.com/" target="_blank">
                        <Allies rutaImagen="/images/banerMonitoreamos/16.png" />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a
                            href="https://www.scotiabankcolpatria.com/"
                            target="_blank"
                        >
                            <Allies rutaImagen="/images/banerMonitoreamos/17-1.png" />
                        </a>
                    </div>
                    <div className="grid-item1">
                        <a href="https://www.econssachile.cl/" target="_blank">
                        <Allies rutaImagen="/images/banerMonitoreamos/18.png" />
                        </a>
                    </div>
                    <div className="grid-item2">
                        <a href="https://www.conadi.gob.cl/" target="_blank">
                        <Allies rutaImagen="/images/banerMonitoreamos/19.png" />
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
