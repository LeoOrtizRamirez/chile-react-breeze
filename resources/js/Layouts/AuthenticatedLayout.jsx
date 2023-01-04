import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import ApplicationLogoLici from "@/Components/ApplicationLogoLici";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import "../../css/estilos-capa-autentificacion.css";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100 margen-nav">
            <nav className="border-b border-gray-100">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 margen-izquierda">
                    <div className="encabezado">
                        <div className="flex justify-between">
                            <div className="flex">
                                <div className="shrink-0 flex items-center margen-logo">
                                    <Link
                                        href={route("contratos.index")}
                                        active={route().current(
                                            "contratos.index"
                                        )}
                                        className=""
                                    >
                                        <ApplicationLogoLici className="block h-9 w-auto text-gray-500" />
                                    </Link>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    {/* <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    href={route("posts.index")}
                                    active={route().current("posts.index")}
                                >
                                    Posts
                                </NavLink> 
                                <NavLink
                                    href={route("contratos.index")}
                                    active={route().current("contratos.index")}
                                >
                                    Contratos
                                </NavLink>
                                <NavLink
                                    href={route("usuarios.index")}
                                    active={route().current("usuarios.index")}
                                >
                                    Usuarios
                                </NavLink>
                                <NavLink
                                    href={route("planes.index")}
                                    active={route().current("planes.index")}
                                >
                                    Planes
                                </NavLink>
                                */}
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                {/* Centro de ayuda */}
                                <div className="ml-3 relative mx-5">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-500 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    <span className="material-symbols-outlined mr-1 text-bold">
                                                        help
                                                    </span>
                                                    <span>Centro de ayuda</span>
                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("logout")} // Asignar
                                                method="post"
                                                as="button"
                                            >
                                                <span className="material-symbols-outlined centro-ayuda-iconos">
                                                    auto_stories
                                                </span>
                                                <span className="centro-ayuda-iconos-margen">
                                                    Instructivos
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")} // Asignar
                                                method="post"
                                                as="button"
                                            >
                                                <span className="material-symbols-outlined centro-ayuda-iconos">
                                                    visibility
                                                </span>
                                                <span className="centro-ayuda-iconos-margen">
                                                    Ver tour
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")} // Asignar
                                                method="post"
                                                as="button"
                                            >
                                                <span className="material-symbols-outlined centro-ayuda-iconos centro-ayuda-iconos-color">
                                                    smart_display
                                                </span>
                                                <span className="centro-ayuda-iconos-margen">
                                                    Videos
                                                </span>
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                                {/* logo chile */}
                                <Link href="/contratos" className="margen">
                                    <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                                </Link>
                                {/* Usuario cerrar sesion */}
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border-transparent text-sm leading-4 font-medium rounded-md text-cyan-500 hover:text-gray-500 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    <span className="material-symbols-outlined tamano-iconos">
                                                        account_circle
                                                    </span>
                                                    <span>
                                                        {auth.user.name}
                                                    </span>

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Cerrar sesión
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        {/*
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("posts.index")}
                            active={route().current("posts.index")}
                        >
                            Posts
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("contratos.index")}
                            active={route().current("contratos.index")}
                        >
                            Contratos
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("usuarios.index")}
                            active={route().current("usuarios.index")}
                        >
                            Usuarios
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("planes.index")}
                            active={route().current("planes.index")}
                        >
                            Planes
                        </ResponsiveNavLink>
                        */}
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Cerrar sesión
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
