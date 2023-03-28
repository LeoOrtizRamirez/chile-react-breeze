import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="fixed-top new-header-licitaciones margin_left_layout">
            <nav id="nav-principal" className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid pr-0">
                    <a href="https://www.licitaciones.info/colombia" className="navbar-brand p-0">
                        <img src="https://col.licitaciones.info/img/logos/licitacionesinfo.png" alt="Licitaciones.info" id="logo-col"/></a>
                    <div id="navbarSupportedContent" className="d-flex ml-auto position-relative">
                        <ul className="navbar-nav ml-auto d-sm-inline-flex flex-row">
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header