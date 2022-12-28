import React from "react";

const Paginador = (props) => {
    return (
        <div className="">
            <div
                className="flex items-center justify-between px-4 sm:px-6"
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
                        <p className="text-xs text-gray-500">
                            <span className="font-medium">
                                Página {props.currentPage}
                            </span>{" "}
                            -{" "}
                            <span className="font-medium">
                                {props.totalPaginas}
                            </span>{" "}
                            de{" "}
                            <span className="font-medium">
                                {props.totalElementos}
                            </span>{" "}
                            Resultados{" "}
                        </p>
                    </div>
                    <div>
                        <nav
                            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                            aria-label="Pagination"
                        >
                            <a
                                onClick={props.prevHandler}
                                className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 hover:bg-cyan-50 focus:z-90 md:inline-flex"
                                href="#"
                            >
                                « Anterior
                            </a>
                            <a
                                className="px-4 py-2 text-sm font-medium text-gray-500 hover:bg-cyan-50 focus:z-20 md:inline-flex bg-indigo-50"
                                href="#"
                            >
                                {props.currentPage}
                            </a>

                            <a
                                onClick={props.nextHandler}
                                className=" px-4 py-2 text-sm font-medium text-gray-500 hover:bg-cyan-50 focus:z-20 md:inline-flex noactivo"
                                href="#"
                            >
                                Siguiente »
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Paginador;
