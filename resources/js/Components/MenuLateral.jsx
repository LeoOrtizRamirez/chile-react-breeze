import React, { useEffect, useState } from 'react'
import './MenuLateral.css'
import { Nav, NavDropdown } from 'react-bootstrap';

import { Inertia } from '@inertiajs/inertia'

import CrearCarpeta from './CrearCarpeta';
const MenuLateral = ({carpetas = []}) => {
    const [folders, setFolders] = useState(carpetas == null ? [] : carpetas)
    useEffect(() => {
        if(carpetas != null){
            setFolders(carpetas)
        }
    }, [carpetas])
    
    useEffect(() => {
        if(carpetas == null){
            console.log("null")
            axios.get(`/cliente/carpeta/carpetas-user`)
            .then(response => {
                setFolders(response.data)
            })
            .catch(error => {
                console.log(error)
            });
        }
    }, [])

    const { carpeta, setCarpeta } = useState({
        nombre_carpeta: "",
        color: "",
        orden: "",
    });
    const [showModalCrearCarpeta, setShowModalCrearCarpeta] = useState(false);
    const handleOpenModalCrearCarpeta = () => {
        setShowModalCrearCarpeta(true);
    };
    const handleCloseModalCrearCarpeta = () => {
        setShowModalCrearCarpeta(false);
    };

    const changePage = (tipo, id = null) =>{
        var token = document.querySelector('meta[name="csrf-token"]')
        if(id == null){
            Inertia.post(`/cliente/contratos/get-info/${tipo}`, {
                headers: {
                    'Authorization': `Bearer ${token.content}`
                }
            });
        }else{
            Inertia.post(`/cliente/contratos/get-info/${tipo}?carpeta=${id}`, {
                headers: {
                    'Authorization': `Bearer ${token.content}`
                }
            });
        }
    }

    return (
        <div id="menu-lateral" className="fixed-top">
            <Nav className="new-menu scroll_fit">
                <NavDropdown
                    drop={'end'}
                    id="item_menu-misperfiles"
                    className=""
                    title={
                        <>
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
                            <span className="item-title-menu">Mis perfiles</span>
                            <i className="contadores_menu contadores_menu_top" style={{ display: "none" }}></i>
                            <span className="icon-Flujo flechas-menu"></span>
                        </>
                    }>

                    <span className="angle_dropdown_menu" style={{ top: 0.8 + 'px' }}>
                    </span>
                    <div className="drop-perfiles position-relative">
                        <span className="icon-Contraer-campana-click">
                        </span>
                        <div className="item-checkbox-menu item-checkbox-menu-subtitle">
                            <span className="body_checkbox">
                                <div className="checkbox" style={{ margin: 0 + 'px' }}><label>
                                    <input type="checkbox" id="checkboxPerfilAll" className="input_perfil_val" value="0" />
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
                                                <input type="checkbox" id="checkboxPerfil0" className="input_perfil_val" value="256058" />
                                            </span> <label id="visita_256058" className="">
                                                <div className="content-img">
                                                    <div className="content-img--img imgperfil">
                                                        <img src="/storage/banco-imagenes/artistas/Licitaciones/perfil-amarillo.svg" />
                                                    </div>
                                                </div>
                                                <span title="PRIMER" alt="PRIMER" className="cursor-type-pointer">PRIMER
                                                </span>
                                            </label>
                                            <div className="indic-item-menu"><i className="contadores_nuevos_point"></i>
                                            </div> <i className="icono-arrastre icon-Mover"></i>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="botones-dropdown-menu">
                            <a href="/cliente/grupo" className="btn-new-gray text-center activeli">Administrar perfil(es)</a>
                            <a href="/cliente/grupo/crear" className="btn-new-green text-center"><i className="icon-Crear icon-boton"></i>Crear perfil</a>
                        </div>
                    </div>
                </NavDropdown>
                <li id="item_menu-seguimiento-li">
                    <button type="button" id="item_menu-seguimiento" className="">
                        <span className="icon-Seguimientos"></span>
                        <span className="item-title-menu">
                            Mis seguimientos
                        </span>
                        <i className="contadores_menu" style={{ display: "none;" }}></i>
                    </button>
                </li>
                <NavDropdown
                    drop={'end'}
                    id="item_menu-carpetas_li"
                    className=""
                    title={
                        <>
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
                            <span className="item-title-menu">Carpetas</span>
                            <i className="contadores_menu contadores_menu_top" style={{ display: "none" }}></i>
                            <span className="icon-Flujo flechas-menu"></span>
                        </>
                    }>

                    <span className="angle_dropdown_menu" style={{ top: 0.8 + 'px' }}>
                    </span>
                    <div className="drop-perfiles position-relative">
                        <span className="icon-Contraer-campana-click"></span>
                        <div class="item-checkbox-menu item-checkbox-menu-subtitle">
                            <label class="d-block">Carpetas</label>
                        </div>
                        <div className="body-all-perfiles">
                            <div className="scroll_fit">
                                <div className="contenedor_carpetas">
                                    <div>
                                        <div class="item-checkbox-menu item-icon-menu">
                                            <span class="body_checkbox">
                                                <div class="radio" style={{ margin: 0 + 'px;' }}>
                                                    <label>
                                                        <input type="radio" name="radiocontratos" id="radioContratosFavoritos" class="input_carpeta_val" value="F" onClick={() => changePage('F')} />
                                                    </label>
                                                </div>
                                            </span>
                                            <label for="radioContratosFavoritos" id="">
                                                <div class="content-img">
                                                    <div class="content-img--img">
                                                        <span class="icon-Favorito-click content-img--img__iconos" style={{ color: 'rgb(253, 203, 54);' }}>
                                                        </span>
                                                    </div>
                                                </div>
                                                Favoritos
                                            </label> <i class="icono-arrastre icon-Mover"></i>
                                        </div>
                                        <div class="item-checkbox-menu item-icon-menu">
                                            <span class="body_checkbox">
                                                <div class="radio" style={{ margin: 0 + 'px;' }}>
                                                    <label>
                                                        <input type="radio" name="radiocontratos" id="radioContratosEliminados" class="input_carpeta_val" value="E" onClick={() => changePage('E')} />
                                                    </label>
                                                </div>
                                            </span>
                                            <label for="radioContratosEliminados" id="">
                                                <div class="content-img">
                                                    <div class="content-img--img">
                                                        <span class="icon-Eliminar content-img--img__iconos" style={{ color: 'rgb(209, 49, 97)' }}></span>
                                                    </div>
                                                </div>
                                                Papelera
                                            </label> <i class="icono-arrastre icon-Mover"></i>
                                        </div>
                                        {folders.map((carpeta, index) => (
                                            <div class="item-checkbox-menu item-icon-menu" key={index}>
                                                <span class="body_checkbox">
                                                    <div class="radio" style={{ margin: 0 + 'px;' }}>
                                                        <label>
                                                            <input type="radio" name="radiocontratos" id="checkboxCarpeta0" class="input_carpeta_val" value="21956" onClick={() => changePage('C', carpeta.id)} />
                                                        </label>
                                                    </div>
                                                </span>
                                                <label for="checkboxCarpeta0" id="carpeta_21956">
                                                    <div class="content-img">
                                                        <div class="content-img--img">
                                                            <span class="icon-Mis-carpetas content-img--img__iconos" style={{ color: carpeta.color }}>
                                                                <span class="path1">
                                                                </span>
                                                                <span class="path2">
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {carpeta.nombre_carpeta}
                                                </label>
                                                <i class="icono-arrastre icon-Mover"></i>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="botones-dropdown-menu">
                            <a href="/cliente/carpeta/administrar-carpetas" className="btn-new-gray text-center activeli">Administrar carpetas</a>
                            <a className="btn-new-green text-center" onClick={handleOpenModalCrearCarpeta}>
                                <i className="icon-Crear icon-boton"></i>Crear carpeta</a>
                        </div>
                    </div>
                </NavDropdown>
                <li id="item_menu-todos-li">
                    <a href="/contratos" id="item_menu-todos" className="">
                        <span className="icon-Todos-los-contratos"></span>
                        <span className="item-title-menu">Todos los contratos</span>
                    </a>
                </li>
                <li id="item_menu-ajustes-li">
                    <a href="/cliente/notificacion-correo" id="item_menu-publicidad">
                        <span className="icon-Ajustes"></span>
                        <span className="item-title-menu">Ajustes</span>
                    </a>
                </li>
                <li id="item_menu-publicarcontrato-li" className="dropright">
                    <a id="item_menu-publicarcontrato" href="/cliente/contrato">
                        <span className="icon-Publicar-click"></span>
                        <span className="item-title-menu">Publicar contrato</span>
                    </a>
                </li>
                <li id="item_menu-sugerencia-li">
                    <a id="item_menu-sugerencia" href="/cliente/sugerencias">
                        <span className="icon-Sugerencia"></span>
                        <span className="item-title-menu">Sugerencia de entidades</span>
                    </a>
                </li>
            </Nav>
            <ul className="new-menu scroll_fit ">

            </ul>
            <CrearCarpeta showModal={showModalCrearCarpeta} handleCloseModal={handleCloseModalCrearCarpeta} carpeta={carpeta} />
        </div>
    )
}

export default MenuLateral