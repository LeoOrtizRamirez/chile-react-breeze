import React from "react";
import ApplicationLogoLiciWhite from "@/Components/ApplicationLogoLiciWhite";
import "@/Components/Footer/footer.css";

export const Footer = () => {
    return (
        <footer className="container">
            <div className="">
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap"
                    rel="stylesheet"
                ></link>

                <div className="container-flex">
                    <div className="size-msj">
                        <span className="typography-msj font-bold">
                            Un mundo de <br />
                            oportunidades de negocio <br />
                            te está esperando
                        </span>
                    </div>

                    <div className="size-support">
                        <h2 className="typography-support-politics font-bold">
                            Soporte
                        </h2>
                        <ul>
                            <li className="support-text">
                                <span>servicioalcliente@licitaciones.info</span>
                            </li>
                            <li className="support-text">
                                <span>+57 601 5086155</span>
                            </li>
                            <li className="support-text">
                                <span>+57 310 370 82 76</span>
                            </li>
                            <li className="support-text">
                                <span>Cra 23 # 70a - 44</span>
                            </li>
                            <li className="support-text">
                                <span>Manizales, Colombia</span>
                            </li>
                        </ul>
                    </div>

                    <div className="size-politics text-footer">
                        <h2 className="typography-support-politics font-bold">
                            Políticas
                        </h2>
                        <ul>
                            <li>
                                <a
                                    href={route("politicasp")}
                                    className="no-underline hover:underline support-text"
                                >
                                    Política de privacidad
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="no-underline hover:underline support-text"
                                >
                                    Términos y condiciones
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("politicasc")}
                                    className="no-underline hover:underline support-text"
                                >
                                    Política de cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="h-0.5 bg-white border-0 mx-11 mt-24 mb-10"></hr>

                <div className="sm:flex sm:items-center sm:justify-between mx-11 pb-10 text-footer margin-txt-footer">
                    <span className="flex text-sm text-white sm:text-center">
                        <a href="https://flowbite.com/">
                            <ApplicationLogoLiciWhite />
                        </a>
                        <span className="margin-text-lici">
                            © 2022 Licitaciones.info S.A.S - Todos los Derechos
                            reservados
                        </span>
                    </span>

                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 items-center">
                        <a href="https://www.facebook.com/licitacionesInfo/">
                            <svg
                                className="w-5 h-5 facebook"
                                fill="currentColor"
                                viewBox="0 0 25 25"
                                // aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>

                        <a href="https://www.facebook.com/licitacionesInfo/">
                            <svg
                                className="w-6 h-7 ml-1.5 mt-1.5 youtube"
                                fill="currentColor"
                                viewBox="0 0 25 25"
                                // aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only ">Youtube page</span>
                        </a>

                        <a href="https://twitter.com/licitacionesinf?lang=es">
                            <svg
                                className="w-5 h-5 twitter"
                                fill="currentColor"
                                viewBox="0 0 25 25"
                                // aria-hidden="true"
                            >
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
