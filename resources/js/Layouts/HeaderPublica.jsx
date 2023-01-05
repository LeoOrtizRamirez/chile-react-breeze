import ApplicationLogoLici from "@/Components/ApplicationLogoLici";
import ChileLogo from "@/Components/ChileLogo";
import "../../css/estilos-header-publica.css";


export default function Example(props) {


    return (
        <div className="customers-list">
            <div className="flex flex-wrap items-center justify-between lg:mx-3 md:mx-1 py-2">
                <a href="/" className="flex items-center">
                    <ApplicationLogoLici />
                </a>

                <div className="flex md:order-2">
                    <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">

                        {props.user.auth.user ? (
                            <>
                                <li>
                                    <a href={route("dashboard")} className="flex  items-center menu-header mx-3"> Dashboard</a>
                                </li>

                                <li>
                                    <a href="#" className="flex ml-4 ">
                                        <ChileLogo />
                                    </a>
                                </li>


                            </>
                        ) : (
                            <>

                                <li>
                                    <a href={route("login")} className="flex  items-center ml-4 text-iniciar">
                                        <span className="mr-2 icon-logout"></span>
                                        Iniciar sesión
                                    </a>
                                </li>

                                <li>
                                    <a href={route("register")} className="flex  ml-4 text-probar ">
                                        Probar 30 días gratis
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex ml-4 ">
                                        <ChileLogo />
                                    </a>
                                </li>

                            </>
                        )}




                    </ul>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li>
                            <a href="/funcionalidades" className="flex  items-center menu-header mx-3"> Funcionalidades</a>
                        </li>
                        <li>
                            <a href="/planes" className="flex items-center menu-header mx-3  "> Planes </a>
                        </li>
                        <li>
                            <a href="/nosotros" className="flex items-center menu-header mx-3 ">Nosotros</a>                    </li>
                        <li>
                            <a href="/contactanos" className="flex items-center menu-header mx-3  ">Contáctanos </a>                    </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}