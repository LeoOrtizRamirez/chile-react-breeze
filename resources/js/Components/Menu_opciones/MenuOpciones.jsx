import { useState } from "react";
import "../../../css/estilos-menu-opciones.css";

import './MenuOpciones.css'
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
const App = () => {
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const Menus = [
        {
            title: "Menú Admin",
            icon: "bi bi-shield text-base material-symbols-outlined iconos-tamano",
            submenu: true,
            submenuItems: [
                { title: "Usuarios", href: "/usuarios" },
                { title: "Planes", href: "/planes" },
            ],
        },
        {
            title: "Perfiles",
            icon: "bi bi-funnel text-base material-symbols-outlined iconos-tamano",
            href: "",
        },
        {
            title: "Mis Seguimientos",
            icon: "bi bi-eye text-base material-symbols-outlined iconos-tamano",
            href: "",
        },
        {
            title: "Carpetas ",
            icon: "bi bi-folder text-base material-symbols-outlined iconos-tamano",
            href: "",
        },
        {
            title: "Todos los Contratos",
            icon: "bi bi-search text-base material-symbols-outlined iconos-tamano",
            href: "/contratos",
        },
        {
            title: "Ajustes",
            icon: "bi bi-gear text-base material-symbols-outlined iconos-tamano",
            href: "",
        },
    ];

    return (
        <div className="contenedor-opciones">
            <div
                className={` ${open ? "w-30" : "w-20 "
                    } h-screen p-10 relative lista-opciones`}
            >
                {/*<BsArrowLeftShort className={`z-10 bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border Oborder-dark-purple cursor-pointer ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)} />*/}
                <ul className="lista-opciones margen-nav">
                    {Menus.map((Menu, index) => (
                        <>
                            <li
                                key={index}
                                className={`text-center rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-500 text-sm items-center gap-x-4 ${index === 0 && "bg-light-white"
                                    }`}
                            >
                                {Menu.submenu && open ? (
                                    <>
                                        <i
                                            className={Menu.icon}
                                            onClick={() => {
                                                setSubMenuOpen(!subMenuOpen);
                                            }}
                                        ></i>
                                        <p
                                            className={`${!open && "hidden"
                                                } origin-left`}
                                        >
                                            {Menu.title}
                                        </p>

                                        {/*<BsChevronDown className={`${subMenuOpen && "rotate-180"}`} onClick={() => { setSubMenuOpen(!subMenuOpen) }} />*/}
                                    </>
                                ) : (
                                    <>
                                        <a href={Menu.href}>
                                            <i className={Menu.icon}></i>
                                            <p
                                                className={`${!open && "hidden"
                                                    } origin-left`}
                                            >
                                                {Menu.title}
                                            </p>
                                        </a>
                                    </>
                                )}
                            </li>

                            <hr />

                            {Menu.submenu && subMenuOpen && open && (
                                <ul className="submenu">
                                    <span className="angle_dropdown_menu" ></span>
                                    <div className="drop-perfiles drop-carpetas position-relative">
                                        <span className="icon-Contraer-campana-click ">
                                            <i class="bi bi-chevron-double-left" onClick={() => setSubMenuOpen(false)} />
                                        </span>
                                        <div className="item-checkbox-menu item-checkbox-menu-subtitle"><label className="submenu-title">Administración</label>
                                        </div>
                                        <div className="body-all-perfiles">
                                            <div className="contenedor_carpetas">
                                                {Menu.submenuItems.map(
                                                    (submenuItem, index) => (
                                                        <div>
                                                            <a className="submenu-item" href={submenuItem.href}>
                                                                {submenuItem.title}
                                                            </a>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            )}
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default App;
