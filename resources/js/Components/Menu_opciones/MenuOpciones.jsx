import { useState } from "react";
// import "../../../css/estilos-menu-opciones.css";
import cssMO from "./MenuOpciones.module.css";
import "./MenuOpciones.css";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
const App = () => {
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const Menus = [
        {
            title: <a className="opciones-menu-text">Menú Admin</a>,
            icon: "bi bi-shield text-base material-symbols-outlined iconos-tamano",
            submenu: true,
            submenuItems: [
                { title: "Usuarios", href: "/usuarios" },
                { title: "Planes", href: "/planes" },
                {
                    title: "Actividades económicas",
                    href: "/actividades-economicas",
                },
                { title: "Localización", href: "/localizacion" },
            ],
        },
        {
            title: <a className="opciones-menu-text">Perfiles</a>,
            icon: "bi bi-funnel text-base material-symbols-outlined iconos-tamano",
            // href: "",
        },
        {
            title: <a className="opciones-menu-text">Mis Seguimientos</a>,
            icon: "bi bi-eye text-base material-symbols-outlined iconos-tamano",
            // href: "",
        },
        {
            title: <a className="opciones-menu-text">Carpetas</a>,
            icon: "bi bi-folder text-base material-symbols-outlined iconos-tamano",
            // href: "",
        },
        {
            title: <a className="opciones-menu-text">Todos los Contratos</a>,
            icon: "bi bi-search text-base material-symbols-outlined iconos-tamano",
            href: "/contratos",
        },
        {
            title: <a className="opciones-menu-text">Ajustes</a>,
            icon: "bi bi-gear text-base material-symbols-outlined iconos-tamano",
            // href: "",
        },
    ];

    return (
        <div>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <div className="contenedor-opciones">
                <div
                    className={` ${
                        open ? "w-30" : "w-20 "
                    } h-screen p-10 relative lista-opciones`}
                >
                    <ul className="lista-opciones margen-nav">
                        {Menus.map((Menu, index) => (
                            <>
                                <li
                                    key={index}
                                    className={`text-center rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-500 text-sm items-center gap-x-4 ${
                                        index === 0 ? "bg-light-white" : ""
                                    }`}
                                >
                                    {Menu.submenu && open ? (
                                        <>
                                            <i
                                                className={Menu.icon}
                                                onClick={() => {
                                                    setSubMenuOpen(
                                                        !subMenuOpen
                                                    );
                                                }}
                                            ></i>
                                            <p
                                                className={`${
                                                    !open && "hidden"
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
                                                    className={`${
                                                        !open && "hidden"
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
                                    <ul className={cssMO.submenu}>
                                        <span
                                            className={cssMO.angleDropdownMenu}
                                        ></span>
                                        <div className="drop-perfiles drop-carpetas position-relative">
                                            <span
                                                className={
                                                    cssMO.iconContraerCampanaClick
                                                }
                                            >
                                                <i
                                                    className="bi bi-chevron-double-left"
                                                    onClick={() =>
                                                        setSubMenuOpen(false)
                                                    }
                                                />
                                            </span>
                                            <div
                                                className={
                                                    cssMO.itemCheckboxMenuSubtitle
                                                }
                                            >
                                                <label
                                                    className={
                                                        cssMO.submenuTitle
                                                    }
                                                >
                                                    Administración
                                                </label>
                                            </div>
                                            <div
                                                className={
                                                    cssMO.bodyAllPerfiles
                                                }
                                            >
                                                <div
                                                    className={
                                                        cssMO.contenedorCarpetas
                                                    }
                                                >
                                                    {Menu.submenuItems.map(
                                                        (
                                                            submenuItem,
                                                            index
                                                        ) => (
                                                            <div>
                                                                <a
                                                                    className={
                                                                        cssMO.submenuItem
                                                                    }
                                                                    href={
                                                                        submenuItem.href
                                                                    }
                                                                >
                                                                    {
                                                                        submenuItem.title
                                                                    }
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
        </div>
    );
};
export default App;
