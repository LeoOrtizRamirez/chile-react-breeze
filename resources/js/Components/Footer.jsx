import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer id="footer" class="footer_licitaciones d-block">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-lg-1 text-center footer_licitaciones_slot1">
                            <img src="https://col.licitaciones.info/img/logo_blank@1x.png" />
                        </div>
                        <div class="col_lg_1_footer"></div>
                        <div class="col_lg_2_acercade text-center footer_licitaciones_acercade">
                            <div class="d-block block_acercade"><p>Acerca de</p> <a href="https://col.licitaciones.info/nosotros/nuestro-equipo">Nosotros</a> <a href="https://col.licitaciones.info/terminos-condiciones">Terminos y condiciones</a> <a href="https://col.licitaciones.info/cliente/contactenos">Contactanos</a>
                            </div>
                        </div>
                        <div class="col_lg_1_footer separadores_footer"></div>
                        <div class="col-lg-2 text-center footer_licitaciones_internacional">
                            <div class="d-block block_internacional"><p>Internacional</p>
                            <a href="https://ecu.licitaciones.info/cliente/grupo">
                                Ecuador
                            </a>
                            <a href="https://pan.licitaciones.info/cliente/grupo">
                                    Panama
                            </a>
                            </div>
                        </div>
                        <div class="col_lg_1_footer separadores_footer"></div>
                        <div class="col_lg_3_apps text-center footer_licitaciones_apps">
                            {/* <div class="d-block block_appmovil"><p>App móvil</p>
                                <div class="d-flex justify-content-center">
                                    <a href="https://play.google.com/store/apps/details?id=com.setcon.licitacionesinfo" target="_blank">
                                        <img src="https://col.licitaciones.info/img/playstore@2x.png" alt="Google Play Store" class="img mb-1 img-fluid"/></a> 
                                        <a href="https://itunes.apple.com/us/app/licitaciones/id1210052711?mt=8" target="_blank">
                                    <img src="https://col.licitaciones.info/img/appstore@2x.png" alt="App Store" class="img mb-1 img-fluid" /></a>
                                </div>
                            </div> */}
                        </div>
                        <div class="col_lg_1_footer separadores_footer"></div>
                        <div class="col-lg-2 text-center footer_licitaciones_redes">
                            <div class="d-block block_siguenos"><p>Siguenos</p>
                                <div class="footer-redes d-flex justify-content-center"><a href="https://www.facebook.com/licitacionesInfo/" target="_blank"><span class="icon-Compartir-fb"></span></a> <a href="https://www.youtube.com/channel/UCBNfdt_YYbADQfB2zDiyvlg" target="_blank"><span class="icon-Youtube"></span></a> <a href="https://twitter.com/licitacionesInf/" target="_blank"><span class="icon-Compartir-tw"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg"></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer