import { useState } from "react";
import "../../../css/estilos-menu-opciones.css";

import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
const App = () => {
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const Menus = [
        {
            title: "Menú Admin",
            icon: "admin_panel_settings",
            submenu: true,
            submenuItems: [
                { title: "Usuarios", href: "/usuarios" },
                { title: "Planes", href: "/planes" },
            ],
        },
        { title: "Perfiles", icon: "filter_alt", href: "" },
        { title: "Mis Seguimientos", icon: "visibility", href: "" },
        { title: "Carpetas ", icon: "folder", href: "" },
        { title: "Todos los Contratos", icon: "Search", href: "/contratos" },
        { title: "Ajustes", icon: "settings", href: "" },
    ];

    return (
        <div className="contenedor-opciones">
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <div
                className={` ${
                    open ? "w-30" : "w-20 "
                } h-screen p-10 relative duration-300 lista-opciones`}
            >
                {/*<BsArrowLeftShort className={`z-10 bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border Oborder-dark-purple cursor-pointer ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)} />*/}
                <ul className="lista-opciones margen-nav">
                    {Menus.map((Menu, index) => (
                        <>
                            <li
                                key={index}
                                className={`text-center rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-500 text-sm items-center gap-x-4 ${
                                    index === 0 && "bg-light-white"
                                }`}
                            >
                                {Menu.submenu && open ? (
                                    <>
                                        <span
                                            className="text-base material-symbols-outlined iconos-tamano"
                                            onClick={() => {
                                                setSubMenuOpen(!subMenuOpen);
                                            }}
                                        >
                                            {Menu.icon}
                                        </span>
                                        <p
                                            className={`${
                                                !open && "hidden"
                                            } origin-left duration-200`}
                                        >
                                            {Menu.title}
                                        </p>

                                        {/*<BsChevronDown className={`${subMenuOpen && "rotate-180"}`} onClick={() => { setSubMenuOpen(!subMenuOpen) }} />*/}
                                    </>
                                ) : (
                                    <>
                                        <a href={Menu.href}>
                                            <span className="text-base material-symbols-outlined iconos-tamano">
                                                {Menu.icon}
                                            </span>
                                            <p
                                                className={`${
                                                    !open && "hidden"
                                                } origin-left duration-200`}
                                            >
                                                {Menu.title}
                                            </p>
                                        </a>
                                    </>
                                )}
                            </li>

                            <hr color="#8b8b8b" />

                            {Menu.submenu && subMenuOpen && open && (
                                <ul className="submenu z-10">
                                    {Menu.submenuItems.map(
                                        (submenuItem, index) => (
                                            <li
                                                key={index}
                                                className="text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 Dhover:bg-light-white rounded-md"
                                            >
                                                <a href={submenuItem.href}>
                                                    {submenuItem.title}
                                                </a>
                                            </li>
                                        )
                                    )}
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
