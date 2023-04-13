import React from "react";
import "./BannerMonitoreamos.css";
import BotonRegistrarse from "@/Components/BotonRegistrarse";

export const BannerMonitoreamos = () => {
    return (
        <div id="bannerMonitoreamos">
            <div className="banner rounded-container container">
                <div className="row">
                    <div className="banner__texto col-lg-6 col-sm-12">
                        <div className="contenedor_banner">
                            <h2 className="banner__texto-titulo"> Monitoreamos y centralizamos la información de
                                licitaciones y convocatorias públicas </h2>
                            <p className="banner__texto-mensaje"> Monitoreamos 24/7 más de 1000 sitios web de
                                entidades públicas en búsqueda de nuevas oportunidades de negocio y te informamos casi al instante
                                las que son solamente de tu interés. </p>
                            <BotonRegistrarse
                                texto={"Regístrate y obtén ¡30 días gratis!"}
                                textoHover={"Registrarme 30 días de servicio gratis"}
                                color={"white"}
                                colorHover={"#73c914"}
                            />
                        </div>
                    </div>
                    <div className="banner__portales col-lg-6 col-sm-12 portales__col">
                        <div className="distribucion">
                            <div className="distribucion__columnas row">
                                <div className="portal-seccion">
                                    <div className="portal">
                                        <img src="/public/images/portales/ONU.webp" alt="ONU" className="portal__imagen"
                                            style={{ width: 55 + '%' }} />
                                    </div>
                                    <div className="portal">
                                        <img src="/public/images/portales/Secop.png" alt="Secop" className="portal__imagen"
                                            style={{ width: 95 + '%' }} />
                                    </div>
                                    <div className="portal">
                                        <img src="/public/images/portales/SecopII.webp" alt="Secop II"
                                            className="portal__imagen" style={{ width: 100 + '%' }} />
                                    </div>
                                    <div className="portal">
                                        <img src="/public/images/portales/Unal.png" alt="Unal" className="portal__imagen"
                                            style={{ width: 90 + '%' }} />
                                    </div>
                                </div>
                                <div className="portal-seccion">
                                    <div className="portal2">
                                        <img src="/public/images/portales/TGI.png" alt="TGI" className="portal2__imagen"
                                            style={{ width: 90 + '%' }} />
                                    </div>
                                    <div className="portal2">
                                        <img src="/public/images/portales/SAE.png" alt="SAE" className="portal2__imagen"
                                            style={{ width: 85 + '%' }} />
                                    </div>
                                    <div className="portal2">
                                        <img src="/public/images/portales/Previsora.png" alt="Previsora"
                                            className="portal2__imagen" style={{ width: 90 + '%' }} />
                                    </div>
                                    <div className="portal2">
                                        <img src="/public/images/portales/emcali.png" alt="EMCALI"
                                            className="portal2__imagen" style={{ width: 85 + '%' }} />
                                    </div>
                                </div>
                                <div className="portal-seccion">
                                    <div className="portal">
                                        <img src="/public/images/portales/Innpulsa.png" alt="Innpulsa"
                                            className="portal__imagen" style={{ width: 80 + '%' }} />
                                    </div>
                                    <div className="portal">
                                        <img src="/public/images/portales/ecopetrol.png" alt="Ecopetrol"
                                            className="portal__imagen" style={{ width: 85 + '%' }} />
                                    </div>
                                    <div className="portal">
                                        <img src="/public/images/portales/Gensa.png" alt="Gensa" className="portal__imagen"
                                            style={{ width: 95 + '%' }} />
                                    </div>
                                    <div className="portal">
                                        <img src="/public/images/portales/Fiducoldex.webp" alt="Fiducoldex"
                                            className="portal__imagen" style={{ width: 90 + '%' }} />
                                    </div>
                                </div>
                                <div className="portal-seccion">
                                    <div className="portal2">
                                        <img src="/public/images/portales/Findeter.png" alt="Findeter"
                                            className="portal2__imagen" style={{ width: 80 + '%' }} />
                                    </div>
                                    <div className="portal2">
                                        <img src="/public/images/portales/Teleantioquia.webp" alt="Teleantioquia"
                                            className="portal2__imagen" style={{ width: 90 + '%' }} />
                                    </div>
                                    <div className="portal2">
                                        <img src="/public/images/portales/Metro.png" alt="Metro" className="portal2__imagen"
                                            style={{ width: 40 + '%' }} />
                                    </div>
                                    <div className="portal2">
                                        <img src="/public/images/portales/acueducto-bogota.png" alt="Acueducto Bogota"
                                            className="portal2__imagen" style={{ width: 85 + '%' }} />
                                    </div>
                                </div>
                                <div className="portal-seccion">
                                    <div className="portal">
                                        <img src="/public/images/portales/Fiduprevisora.webp" alt="Fiduprevisora"
                                            className="portal__imagen" style={{ width: 90 + '%' }} />
                                    </div>
                                    <div className="portal">
                                        <img src="/public/images/portales/BID.png" alt="BID" className="portal__imagen"
                                            style={{ width: 85 + '%' }} />
                                    </div>
                                    <div className="portal">
                                        <img src="/public/images/portales/EPM.webp" alt="EPM" className="portal__imagen"
                                            style={{ width: 85 + '%' }} />
                                    </div>
                                    <div className="portal">
                                        <span className="portal__texto">Entre <br />
                                            <span style={{ color: '#00A1C9' }}>muchos
                                                más</span><br />portales</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerMonitoreamos;
