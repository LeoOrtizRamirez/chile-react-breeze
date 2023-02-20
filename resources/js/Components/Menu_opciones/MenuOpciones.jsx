import React, { useState, useEffect, useRef } from "react";
import cssMO from "./MenuOpciones.module.css";
import "./MenuOpciones.css";

const App = () => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const Menus = [
        {
            title: (
                <button
                    onClick={() => setIsOpen(true)}
                    className="opciones-menu-text"
                >
                    Menú Admin
                </button>
            ),
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
            title: <button className="opciones-menu-text">Perfiles</button>,
            icon: "bi bi-funnel text-base material-symbols-outlined iconos-tamano",
            // href: "",
        },
        {
            title: (
                <button className="opciones-menu-text">Mis Seguimientos</button>
            ),
            icon: "bi bi-eye text-base material-symbols-outlined iconos-tamano",
            // href: "",
        },
        {
            title: <button className="opciones-menu-text">Carpetas</button>,
            icon: "bi bi-folder text-base material-symbols-outlined iconos-tamano",
            // href: "",
        },
        {
            title: (
                <button className="opciones-menu-text">
                    Todos los Contratos
                </button>
            ),
            icon: "bi bi-search text-base material-symbols-outlined iconos-tamano",
            href: "/contratos",
        },
        {
            title: <button className="opciones-menu-text">Ajustes</button>,
            icon: "bi bi-gear text-base material-symbols-outlined iconos-tamano",
            // href: "",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

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
                            <div>
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
                                        </>
                                    ) : (
                                        <>
                                            <button href={Menu.href}>
                                                <i className={Menu.icon}></i>
                                                <p
                                                    className={`${
                                                        !open && "hidden"
                                                    } origin-left`}
                                                >
                                                    {Menu.title}
                                                </p>
                                            </button>
                                        </>
                                    )}
                                </li>
                                <hr />
                                <div>
                                    {Menu.submenu && subMenuOpen && open && (
                                        <div>
                                            {isOpen && (
                                                <div ref={ref}>
                                                    <ul
                                                        className={
                                                            cssMO.submenu
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                cssMO.angleDropdownMenu
                                                            }
                                                        ></span>
                                                        <div className="drop-perfiles drop-carpetas position-relative">
                                                            <span
                                                                className={
                                                                    cssMO.iconContraerCampanaClick
                                                                }
                                                            >
                                                                {/* <button
                                                                    className="bi bi-chevron-double-left"
                                                                    onClick={() =>
                                                                        setIsOpen(
                                                                            true
                                                                        )
                                                                    }
                                                                ></button> */}
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
                                                                                <button
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
                                                                                </button>
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default App;
