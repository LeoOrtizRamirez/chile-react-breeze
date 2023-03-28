import React from 'react'
import './MenuLateral.css'
const MenuLateral = () => {
    return (
        <div id="menu-lateral" className="fixed-top">
            <ul className="new-menu scroll_fit ">
                <li id="item_menu-misperfiles_li" className="dropright position-static"><button type="button" id="item_menu-misperfiles" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="viewport" className="">
                    {/* <img src="/images/Web/icon-Mis-perfiles.svg" className="img-vertical-menu" /> */}
                    <span className="icon-Mis-perfiles">
                        <span className="path1">
                        </span>
                        <span className="path2">
                        </span>
                        <span className="path3">
                        </span>
                        <span className="path4">
                        </span>
                        <span className="path5">
                        </span>
                    </span>
                    <span className="item-title-menu">
                        Mis perfiles
                    </span> <i className="contadores_menu contadores_menu_top" style={{display:"none"}}></i>
                    <span className="icon-Flujo flechas-menu">
                    </span></button>
                    <div aria-labelledby="item_menu-misperfiles" className="dropdown-menu dropdown-menu-right dropdown-menu-new" x-placement="right-start" style={{position : "absolute;", transform: "translate3d(75px, 20px, 0px);", top: 0 + "px;", left: 0 + "px;" /* willChange: "transform;" */ }}>
                        <span className="angle_dropdown_menu" style={{top : 0.8 + 'px'}}>
                        </span>
                        <div className="drop-perfiles position-relative">
                            <span className="icon-Contraer-campana-click">
                            </span>
                            <div className="item-checkbox-menu item-checkbox-menu-subtitle">
                                <span className="body_checkbox">
                                    <div className="checkbox" style={{margin: 0 + 'px'}}><label>
                                        <input type="checkbox" id="checkboxPerfilAll" className="input_perfil_val" value="0" />
                                        <span className="cr" style={{border: 2 + 'px solid rgb(156, 155, 155);'}}><i className="cr-icon icon-Check"></i> <i className="cr-square"></i>
                                        </span>
                                    </label>
                                    </div>
                                </span> <label htmlFor="checkboxPerfilAll" id="visita_0" className="d-block">Mis perfiles
                                </label>
                            </div>
                            <div className="body-all-perfiles">
                                <div className="scroll_fit">
                                    <div id="menuperfiles_movil">
                                        <div className="contenedor_perfiles"><div>
                                            <div className="item-checkbox-menu item-icon-menu">
                                                <span className="body_checkbox">
                                                    <div className="checkbox" style={{margin: 0 + 'px;'}}><label>
                                                        <input type="checkbox" id="checkboxPerfil0" className="input_perfil_val" value="256058" />
                                                        <span className="cr"><i className="cr-icon icon-Check"></i>
                                                        </span>
                                                    </label>
                                                    </div>
                                                </span> <label id="visita_256058" className="">
                                                    <div className="content-img">
                                                        <div className="content-img--img imgperfil">
                                                            <img src="https://col.licitaciones.info/storage/banco-imagenes/artistas/Licitaciones/perfil-amarillo.svg" />
                                                        </div>
                                                    </div>
                                                    <span title="PRIMER" alt="PRIMER" className="cursor-type-pointer">PRIMER
                                                    </span>
                                                </label>
                                                <div className="indic-item-menu"><i className="contadores_nuevos_point" style={{display: 'none'}}></i>
                                                </div> <i className="icono-arrastre icon-Mover"></i>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="botones-dropdown-menu">
                                <a href="https://col.licitaciones.info/cliente/grupo" className="btn-new-gray text-center activeli">Administrar perfil(es)</a>
                                <a href="https://col.licitaciones.info/cliente/grupo/crear" className="btn-new-green text-center"><i className="icon-Crear icon-boton"></i>Crear perfil</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li id="item_menu-seguimiento-li">
                    <button type="button" id="item_menu-seguimiento" className="">
                        {/* <img src="/images/Web/icon-Seguimientos.svg" className="img-vertical-menu" /> */}
                        <span className="icon-Seguimientos"></span>
                        <span className="item-title-menu">
                            Mis seguimientos
                        </span>
                        <i className="contadores_menu" style={{display: "none;"}}></i>
                    </button>
                </li>
                <li id="item_menu-carpetas_li" className="dropright"><button type="button" id="item_menu-carpetas" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="viewport" className="">
                    <span className="icon-Mis-carpetas">
                        <span className="path1">
                        </span>
                        <span className="path2">
                        </span>
                        <span className="path3">
                        </span>
                        <span className="path4">
                        </span>
                        <span className="path5">
                        </span>
                        <span className="path6">
                        </span>
                        <span className="path7">
                        </span>
                    </span>
                    {/* <img src="/images/Web/icon-Mis-carpetas.svg" className="img-vertical-menu" /> */}
                    <span className="item-title-menu">
                        Carpetas

                    </span>
                    <span className="icon-Flujo flechas-menu">
                    </span></button>
                    <div aria-labelledby="item_menu-carpetas" className="dropdown-menu dropdown-menu-right dropdown-menu-new">
                        <span className="angle_dropdown_menu">
                        </span>
                        <div className="drop-perfiles drop-carpetas position-relative">
                            <span className="icon-Contraer-campana-click">
                            </span>
                            <div className="item-checkbox-menu item-checkbox-menu-subtitle"><label className="d-block">Carpetas
                            </label>
                            </div>
                            <div className="body-all-perfiles">
                                <div className="scroll_fit">
                                    <div className="contenedor_carpetas"><div>
                                        <div className="item-checkbox-menu item-icon-menu">
                                            <span className="body_checkbox">
                                                <div className="radio" style={{margin: 0+ 'px'}}><label>
                                                    <input type="radio" name="radiocontratos" id="radioContratosFavoritos" className="input_carpeta_val" value="F" />
                                                    <span className="cr"><i className="cr-icon icon-Check"></i>
                                                    </span>
                                                </label>
                                                </div>
                                            </span> <label htmlFor="radioContratosFavoritos" id="">
                                                <div className="content-img">
                                                    <div className="content-img--img">
                                                        <span className="icon-Favorito-click content-img--img__iconos" style={{color : 'rgb(253, 203, 54)'}}>

                                                        </span>
                                                    </div>
                                                </div>
                                                Favoritos

                                            </label> <i className="icono-arrastre icon-Mover"></i>
                                        </div>
                                        <div className="item-checkbox-menu item-icon-menu">
                                            <span className="body_checkbox">
                                                <div className="radio" style={{margin : 0 + 'px'}}><label>
                                                    <input type="radio" name="radiocontratos" id="radioContratosEliminados" className="input_carpeta_val" value="E" />
                                                    <span className="cr"><i className="cr-icon icon-Check"></i>
                                                    </span>
                                                </label>
                                                </div>
                                            </span> <label htmlFor="radioContratosEliminados" id="">
                                                <div className="content-img">
                                                    <div className="content-img--img">
                                                        <span className="icon-Eliminar content-img--img__iconos" style={{color : 'rgb(209, 49, 97)'}}>

                                                        </span>
                                                    </div>
                                                </div>
                                                Papelera

                                            </label> <i className="icono-arrastre icon-Mover"></i>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="botones-dropdown-menu">
                                <a href="https://col.licitaciones.info/cliente/carpeta/administrar-carpetas" className="btn-new-gray text-center">Administrar carpetas</a> <button className="btn-new-green text-center"><i className="icon-Crear icon-boton"></i> Crear carpeta</button>
                            </div>
                        </div>
                    </div>
                </li>
                <li id="item_menu-todos-li">
                    <button type="button" id="item_menu-todos" className="">
                        <span className="icon-Todos-los-contratos"></span>
                        {/* <img src="/images/Web/icon-Todos-los-contratos.svg" className="img-vertical-menu" /> */}
                        <span className="item-title-menu">Todos los contratos</span>
                    </button>
                </li>
                <li id="item_menu-ajustes-li">
                    <a href="https://col.licitaciones.info/cliente/notificacion-correo" id="item_menu-publicidad">
                        <span className="icon-Ajustes"></span>
                        {/* <img src="/images/Web/icon-Ajustes.svg" className="img-vertical-menu" /> */}
                        <span className="item-title-menu">Ajustes</span>
                    </a>
                </li>
                <li id="item_menu-publicarcontrato-li" className="dropright">
                    <a id="item_menu-publicarcontrato" href="https://col.licitaciones.info/cliente/contrato">
                        <span className="icon-Publicar-click"></span>
                        {/* <img src="/images/Web/icon-Publicar-click.svg" className="img-vertical-menu" /> */}
                        <span className="item-title-menu">Publicar contrato</span>
                    </a>
                </li>
                <li id="item_menu-sugerencia-li">
                    <a id="item_menu-sugerencia" href="https://col.licitaciones.info/cliente/sugerencias">
                        <span className="icon-Sugerencia"></span>
                        {/* <img src="/images/Web/icon-Sugerencia.svg" className="img-vertical-menu" /> */}
                        <span className="item-title-menu">Sugerencia de entidades</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MenuLateral