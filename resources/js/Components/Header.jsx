import React from 'react'
import './Header.css'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Nav, NavItem, NavDropdown } from 'react-bootstrap';
const Header = ({auth}) => {
    console.log("auth",auth)
    return (
        <div className="fixed-top new-header-licitaciones margin_left_layout" id="login-header">
            <nav id="nav-principal" className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid pr-0">
                    <a href="https://www.licitaciones.info/colombia" className="navbar-brand p-0">
                        <img src="https://col.licitaciones.info/img/logos/licitacionesinfo.png" alt="Licitaciones.info" id="logo-col" />
                    </a>
                    <div id="navbarSupportedContent" className="d-flex ml-auto position-relative">
                        <Nav id="ayuda">
                            <NavDropdown title={<><span class="icon-Ayuda"></span><span class='nav-title'>Centro de ayuda</span><i class="position-relative icon-Desplegar"></i></>} >
                                <NavItem href="#" className='submenu-text'>
                                    <img src="https://col.licitaciones.info/img/instructivos.svg" alt="Instructivos" />
                                    <span class="DropAyudaList_instructivos_texto">Instructivos</span>
                                    <span class="icon-Siguiente1"></span>
                                </NavItem>
                                <NavItem href="/asd.com" className='submenu-text'>
                                    <span class="icon-Mostrar"></span>Ver tour
                                </NavItem>
                                <NavItem href="#" className='submenu-text'>
                                    <img src="https://col.licitaciones.info/img/youtube.svg" alt="Youtube" className='submenu-img' />videos
                                </NavItem>
                            </NavDropdown>
                        </Nav>
                        <Nav id="notificaciones" >
                            <NavDropdown id="" title={<span class="icon-Campana-click"></span>} >
                                <div className='header-new-notifications text-center'>
                                    <p>Notificaciones</p>
                                </div>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#" className='dropdown-item'>
                                    <button class="item_notify_category">
                                        <i aria-hidden="true" class="icon-Sistema"></i>
                                        <div class="notification-info">
                                            <p class="notification-mensaje"><b>4</b>Notificaciones de sistema</p>
                                        </div>
                                        <span class="icon-Siguiente1"></span>
                                    </button>
                                </Dropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav id="paises" className='dropdown-paises'>
                            <NavDropdown id="navbarDropdownPaises" className='nav-link pl-0' title={<><img src="/images/banderas/listado_nombres/CHL.svg" alt="icono bandera" width="22" /><span class='nav-title'>Chile</span><i class="position-relative icon-Desplegar"></i></>} >
                                <Dropdown.Item href="#" className='dropdown-item'>
                                    <img src="/images/banderas/listado_nombres/col.svg" alt="icono bandera" width="22" className='inline-block' /> <span>Colombia</span>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#" className='dropdown-item'>
                                    <img src="/images/banderas/listado_nombres/ecu.svg" alt="icono bandera" width="22" className='inline-block' /> <span>Ecuador</span>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#" className='dropdown-item'>
                                    <img src="/images/banderas/listado_nombres/pan.svg" alt="icono bandera" width="22" className='inline-block' /> <span>Panama</span>
                                </Dropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav id="account" className='dropdown-perfil'>
                            <NavDropdown id="inicialesUsuarioDropdown" className='nav-link pl-0' title={<><img id="dropdownAvatar" width="35" src="https://col.licitaciones.info/img/mi_cuenta/svg/default_avatar.svg" alt="Avatar" class="avatar-dropdown" /><span id="headerUserName" data-value="Leonardo Ortiz" class="name_header_title">Leonardo Ortiz</span><i class="position-relative icon-Desplegar"></i></>} >
                                <div class="d-flex px-2">
                                    <div class="flex-shrink-1 align-self-center">
                                        <img id="dropdownAvatar" width="50" src="https://col.licitaciones.info/img/mi_cuenta/svg/default_avatar.svg" alt="Avatar" class="avatar-dropdown" />
                                    </div>
                                    <div class="w-100 pl-3 align-self-center">
                                        <p class="mb-0">{auth.user.nombre_completo}</p>
                                        <p class="mb-0">{auth.user.email}</p>
                                    </div>
                                </div>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#" className='dropdown-item item-dropdown-menu d-flex align-items-center'>
                                    <span class="icon-Datos1 align-self-center"></span>
                                    <span class="pl-4 w-100 text-left">Mis datos personales</span>
                                    <span class="icon-Siguiente1 align-self-center"></span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#action/1.2" className='dropdown-item item-dropdown-menu d-flex align-items-center'>
                                    <span class="icon-Mis-subcuentas align-self-center"></span>
                                    <span class="pl-4 w-100 text-left">Mis subcuentas</span>
                                    <span class="icon-Siguiente1 align-self-center"></span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#" className='dropdown-item item-dropdown-menu d-flex align-items-center button_cambio_contrasena'>
                                    <span class="icon-Cambiar-contrasea align-self-center"></span>
                                    <span class="pl-4 w-100 text-left">Cambiar contraseña</span>
                                    <span class="icon-Siguiente1 align-self-center"></span>
                                </Dropdown.Item>

                                <Dropdown.Item href="#" className='dropdown-item item-dropdown-menu d-flex align-items-center'>
                                    <span class="icon-Renovar-servicio align-self-center"></span>
                                    <span class="pl-4 w-100 text-left">Renovar servicio</span>
                                    <span class="icon-Siguiente1 align-self-center"></span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#" className='dropdown-item item-dropdown-menu d-flex align-items-center'>
                                    <span class="icon-Facturacion align-self-center"></span>
                                    <span class="pl-4 w-100 text-left">Facturación y pagos</span>
                                    <span class="icon-Siguiente1 align-self-center"></span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#" className='dropdown-item item-dropdown-menu d-flex align-items-center'>
                                    <span class="icon-Mis-dispositivos align-self-center"></span>
                                    <span class="pl-4 w-100 text-left">Mis dispositivos</span>
                                    <span class="icon-Siguiente1 align-self-center"></span>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="/logout" className='dropdown-item red-dropdown justify-content-center d-flex m-0 py-3' onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                    <img src="https://col.licitaciones.info/img/cerrar_session.svg" width="20" alt="cerrar session" class="align-self-center mr-2" />
                                    <span class="align-self-center">Cerrar sesión</span>
                                </Dropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header