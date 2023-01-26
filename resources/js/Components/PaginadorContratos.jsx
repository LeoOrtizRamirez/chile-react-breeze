import React from "react";
import "../../css/estilos-paginador.css";

const Paginador = (props) => {
    return (
        <div className="">
            <div
                className="flex items-center justify-between sm:px-6"
                data-v-01f1da49=""
            >
                <div className="flex flex-1 justify-between sm:hidden">
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </a>
                    <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </a>
                </div>

                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <nav
                            className="isolate inline-flex -space-x-px rounded-md"
                            aria-label="Pagination"
                        >
                            <a
                                onClick={props.prevHandler}
                                className="mx-1 boton-paginador relative z-10 inline-flex items-center px-2 py-2 text-2xl text-gray-500 hover:bg-gray-300 focus:z-90 md:inline-flex"
                                href="#"
                            >
                                «
                            </a>
                            {/* <a
                                className="px-4 py-2 text-sm font-medium text-gray-500 hover:bg-cyan-50 focus:z-20 md:inline-flex bg-indigo-50"
                                href="#"
                            >
                                {props.currentPage}
                            </a> */}
                            <a
                                onClick={props.nextHandler}
                                className="mx-1 boton-paginador relative z-10 inline-flex items-center px-2 py-2 text-2xl text-gray-500 hover:bg-gray-300 focus:z-90 md:inline-flex"
                                href="#"
                            >
                                »
                            </a>
                        </nav>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 my-0 mx-3 font-black">
                            <span className="font-black">
                                {/* Página {props.currentPage} */}
                                {props.currentPage}
                            </span>{" "}
                            -{" "}
                            <span className="font-black">
                                {props.totalPaginas}
                            </span>{" "}
                            de{" "}
                            <span className="font-black ">
                                {props.totalElementos}
                            </span>{" "}
                            {/* Resultados{" "} */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Paginador;
