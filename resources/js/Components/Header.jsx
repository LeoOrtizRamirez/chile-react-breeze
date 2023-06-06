import React, {useState} from 'react'
import './Header.css'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Nav, NavItem, NavDropdown } from 'react-bootstrap';
import ModalContrasena from './ModalContrasena';

const Header = ({ auth }) => {
    const [showModalContrasena, setShowModalContrasena] = useState(false);
    const handleCloseModalContrasena = () => {
        setShowModalContrasena(false)
    };
    const handleShowModalContrasena = (data) => {
        setShowModalContrasena(true)
    };
    return (
        <>
            <div className="fixed-top new-header-licitaciones margin_left_layout" id="login-header">
                <nav id="nav-principal" className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid pr-0">
                        <a href="https://www.licitaciones.info/colombia" className="navbar-brand p-0">
                            <img src="https://col.licitaciones.info/img/logos/licitacionesinfo.png" alt="Licitaciones.info" id="logo-col" />
                        </a>
                        <div id="navbarSupportedContent" className="d-flex ml-auto position-relative">
                            <Nav id="ayuda">
                                <NavDropdown title={<><span className="icon-Ayuda"></span><span className='nav-title'>Centro de ayuda</span><i className="position-relative icon-Desplegar"></i></>} >
                                    <NavItem href="#" className='submenu-text'>
                                        <img src="https://col.licitaciones.info/img/instructivos.svg" alt="Instructivos" />
                                        <span className="DropAyudaList_instructivos_texto">Instructivos</span>
                                        <span className="icon-Siguiente1"></span>
                                    </NavItem>
                                    <NavItem href="/asd.com" className='submenu-text'>
                                        <span className="icon-Mostrar"></span>Ver tour
                                    </NavItem>
                                    <NavItem href="#" className='submenu-text'>
                                        <img src="https://col.licitaciones.info/img/youtube.svg" alt="Youtube" className='submenu-img' />videos
                                    </NavItem>
                                </NavDropdown>
                            </Nav>
                            <Nav id="notificaciones" >
                                <NavDropdown id="" title={<span className="icon-Campana-click"></span>} >
                                    <div className='header-new-notifications text-center'>
                                        <p>Notificaciones</p>
                                    </div>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#" className='dropdown-item'>
                                        <button className="item_notify_category">
                                            <i aria-hidden="true" className="icon-Sistema"></i>
                                            <div className="notification-info">
                                                <p className="notification-mensaje"><b>4</b>Notificaciones de sistema</p>
                                            </div>
                                            <span className="icon-Siguiente1"></span>
                                        </button>
                                    </Dropdown.Item>
                                </NavDropdown>
                            </Nav>

                            <Nav id="paises" className='dropdown-paises'>
                                <NavDropdown id="navbarDropdownPaises" className='nav-link pl-0' title={<><img src="/public/images/banderas/listado_nombres/CHL.svg" alt="icono bandera" width="22" /><span className='nav-title'>Chile</span><i className="position-relative icon-Desplegar"></i></>} >
                                    <Dropdown.Item href="#" className='dropdown-item'>
                                        <img src="/public/images/banderas/listado_nombres/COL.svg" alt="icono bandera" width="22" className='inline-block' /> <span>Colombia</span>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#" className='dropdown-item'>
                                        <img src="/public/images/banderas/listado_nombres/ECU.svg" alt="icono bandera" width="22" className='inline-block' /> <span>Ecuador</span>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#" className='dropdown-item'>
                                        <img src="/public/images/banderas/listado_nombres/PAN.svg" alt="icono bandera" width="22" className='inline-block' /> <span>Panama</span>
                                    </Dropdown.Item>
                                </NavDropdown>
                            </Nav>

                            <Nav id="account" className='dropdown-perfil'>
                                <NavDropdown id="inicialesUsuarioDropdown" className='nav-link pl-0' title={<><img id="dropdownAvatar" width="35" src="https://col.licitaciones.info/img/mi_cuenta/svg/default_avatar.svg" alt="Avatar" className="avatar-dropdown" /><span id="headerUserName" className="name_header_title">{auth.user.nombre_completo}</span><i className="position-relative icon-Desplegar"></i></>} >
                                    <div className="d-flex px-2">
                                        <div className="flex-shrink-1 align-self-center">
                                            <img id="dropdownAvatar" width="50" src="https://col.licitaciones.info/img/mi_cuenta/svg/default_avatar.svg" alt="Avatar" className="avatar-dropdown" />
                                        </div>
                                        <div className="w-100 pl-3 align-self-center">
                                            <p className="mb-0">{auth.user.nombre_completo}</p>
                                            <p className="mb-0">{auth.user.email}</p>
                                        </div>
                                    </div>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="/cliente/mi-cuenta" className='dropdown-item item-dropdown-menu d-flex align-items-center'>
                                        <span className="icon-Datos1 align-self-center"></span>
                                        <span className="pl-4 w-100 text-left">Mis datos personales</span>
                                        <span className="icon-Siguiente1 align-self-center"></span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#action/1.2" className='dropdown-item item-dropdown-menu d-flex align-items-center'>
                                        <span className="icon-Mis-subcuentas align-self-center"></span>
                                        <span className="pl-4 w-100 text-left">Mis subcuentas</span>
                                        <span className="icon-Siguiente1 align-self-center"></span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className='dropdown-item item-dropdown-menu d-flex align-items-center button_cambio_contrasena'>
                                        <span className="icon-Cambiar-contrasea align-self-center"></span>
                                        <span className="pl-4 w-100 text-left" onClick={handleShowModalContrasena}>Cambiar contraseña</span>
                                        <span className="icon-Siguiente1 align-self-center"></span>
                                    </Dropdown.Item>

                                    <Dropdown.Item href="#" className='dropdown-item item-dropdown-menu d-flex align-items-center'>
                                        <span className="icon-Renovar-servicio align-self-center"></span>
                                        <span className="pl-4 w-100 text-left">Renovar servicio</span>
                                        <span className="icon-Siguiente1 align-self-center"></span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className='dropdown-item item-dropdown-menu d-flex align-items-center'>
                                        <span className="icon-Facturacion align-self-center"></span>
                                        <span className="pl-4 w-100 text-left">Facturación y pagos</span>
                                        <span className="icon-Siguiente1 align-self-center"></span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className='dropdown-item item-dropdown-menu d-flex align-items-center'>
                                        <span className="icon-Mis-dispositivos align-self-center"></span>
                                        <span className="pl-4 w-100 text-left">Mis dispositivos</span>
                                        <span className="icon-Siguiente1 align-self-center"></span>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="/logout" className='dropdown-item red-dropdown justify-content-center d-flex m-0 py-3' onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                        <img src="https://col.licitaciones.info/img/cerrar_session.svg" width="20" alt="cerrar session" className="align-self-center mr-2" />
                                        <span className="align-self-center">Cerrar sesión</span>
                                    </Dropdown.Item>

                                </NavDropdown>
                            </Nav>
                        </div>
                    </div>
                </nav>
            </div>
            <ModalContrasena showModal={showModalContrasena} handleCloseModal={handleCloseModalContrasena} modalId="modal_cambiar_contrasena"></ModalContrasena>
        </>
    )
}

export default Header