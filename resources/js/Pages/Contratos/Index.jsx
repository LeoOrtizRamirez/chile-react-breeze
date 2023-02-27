import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Compartir from "../../Components/Acciones/Compartir";
import Eliminar from "../../Components/Acciones/Eliminar";
import Enviar from "../../Components/Acciones/Enviar";
import Favoritos from "../../Components/Acciones/Favoritos";
import Pdf from "../../Components/Acciones/Pdf";
import Visualizar from "../../Components/Acciones/Visualizar";
import Paginador from "@/Components/PaginadorContratos";
import ModalBusquedaAvanzada from "@/Components/Modals/ModalBusquedaAvanzada";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/font-web.css";
import "./Index.css";
import "@fontsource/poppins";

import Loader from "@/Components/Loader";
const Index = ({ auth, contratos }) => {
    const [tableContratos, setTableContratos] = useState(contratos.data);

    // Inicio Ordenar tabla por columna
    $("th").click(function () {
        var table = $(this).parents("table").eq(0);
        var rows = table
            .find("tr:gt(0)")
            .toArray()
            .sort(comparer($(this).index()));
        this.asc = !this.asc;
        if (!this.asc) {
            rows = rows.reverse();
        }
        for (var i = 0; i < rows.length; i++) {
            table.append(rows[i]);
        }
        setIcon($(this), this.asc);
    });

    function comparer(index) {
        return function (a, b) {
            var valA = getCellValue(a, index),
                valB = getCellValue(b, index);
            return $.isNumeric(valA) && $.isNumeric(valB)
                ? valA - valB
                : valA.localeCompare(valB);
        };
    }

    function getCellValue(row, index) {
        return $(row).children("td").eq(index).html();
    }

    function setIcon(element, asc) {
        $("th").each(function (index) {
            $(this).removeClass("sorting");
            $(this).removeClass("asc");
            $(this).removeClass("desc");
        });
        element.addClass("sorting");
        if (asc) element.addClass("asc");
        else element.addClass("desc");
    }
    // Fin Ordenar tabla por columna

    /*Inicio - ver más, ver menos */
    const [showLess, setShowLess] = useState(true);
    const [showMoreSelected, setShowMoreSelected] = useState(0);
    const getData = (data) => {
        setShowMoreSelected(data.id);
    };

    const hideData = () => {
        setShowMoreSelected(0);
    };
    /*Fin - ver más, ver menos */

    /*Inicio Scroll*/
    const [fakeScrollContentWidth, setFakeScrollContentWidth] = useState(0);
    const [fakeScrollContainerWidth, setFakeScrollContainertWidth] =
        useState(0);

    useEffect(() => {
        var fake_contenido_tabla = document.getElementById("div1");
        var contenido_tabla = document.getElementById("tabla");

        var fake_contenedor_tabla = document.getElementById("wrapper1");
        var contenedor_tabla = document.getElementById("scroll-table");

        if (contenido_tabla) {
            setFakeScrollContentWidth(contenido_tabla.offsetWidth);
        }
        if (contenedor_tabla) {
            setFakeScrollContainertWidth(contenedor_tabla.offsetWidth);
        }

        var wrapper1 = document.getElementById("wrapper1");
        var wrapper2 = document.querySelector("#scroll-table");

        if (wrapper1) {
            wrapper1.onscroll = function () {
                wrapper2.scrollLeft = wrapper1.scrollLeft;
            };
        }

        if (wrapper2) {
            wrapper2.onscroll = function () {
                wrapper1.scrollLeft = wrapper2.scrollLeft;
            };
        }
    });
    /*Fin Scroll*/

    /*Inicio Buscador rapido y paginador */
    const [totalPaginas, setTotalPaginas] = useState(contratos.to);
    const [currentPage, setCurrentPage] = useState(contratos.from);
    const [totalElementos, setTotalElementos] = useState(contratos.total);
    const [nextPage, setNextPage] = useState(contratos.next_page_url);
    const [prevPage, setPrevPage] = useState(contratos.prev_page_url);
    const [inputSearch, setInputSearch] = useState("");
    const [inputFechaPublicacion, setInputFechaPublicacion] = useState("");

    const getUrlParams = () => {
        //Obtener inputs de formulario y guardarlos en objeto
        var form = document.getElementById("form_busqueda_rapida");
        let formData = new FormData(form);
        let object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        const querystring = encodeQueryData(object);
        return querystring;
    };

    const encodeQueryData = (data) => {
        //Convertir objeto en url
        const ret = [];
        for (let d in data)
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return ret.join("&");
    };

    const pageChange = (url) => {
        //Peticiones por paginador
        if (url == null) return;
        const querystring = getUrlParams();
        setLoading(true);
        fetch(url + "&" + querystring)
            .then((response) => response.json())
            .then((data) => {
                tableFormat(data);
                setLoading(false);
            });
    };

    const buscadorRapido = useRef(0);

    useEffect(() => {
        if (buscadorRapido.current != 0) {
            buscadorRapido.current.addEventListener(
                "keypress",
                function (event) {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const querystring = getUrlParams();

                        console.log(querystring);

                        setLoading(true);
                        fetch("/contratos/?" + querystring)
                            .then((response) => response.json())
                            .then((data) => {
                                tableFormat(data);
                                setLoading(false);
                            });
                    }
                }
            );
        }
    }, []);

    const tableFormat = (data) => {
        //Formatear valores del paginador
        setTableContratos(data.data);
        setTotalPaginas(data.to);
        setCurrentPage(data.from);
        setTotalElementos(data.total);
        setNextPage(data.next_page_url);
        setPrevPage(data.prev_page_url);
    };

    useEffect(() => {
        //Al cargar la pagina, si hay parametros asignar valores al formulario
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const fecha_publicacion = urlParams.get("fecha_publicacion");
        if (fecha_publicacion != null) {
            setInputFechaPublicacion(fecha_publicacion);
        }
        const buscador_rapido = urlParams.get("buscador_rapido");
        if (buscador_rapido != null) {
            setInputSearch(buscador_rapido);
        }
    }, []);

    /*Inicio Loader */
    const [loading, setLoading] = useState(false);
    /*Fin Loader */

    // Inicio buscador avanzado
    const [showBusquedaAvanzada, setShowBusquedaAvanzada] = useState(false);
    const handleCloseBusquedaAvanzada = () => setShowBusquedaAvanzada(false);
    const handleShowBusquedaAvanzada = () => setShowBusquedaAvanzada(true);
    // fin buscador avanzado

    return (
        <AuthenticatedLayout auth={auth}>
            <link rel="shortcut icon" href="#"></link>
            <div>
                <div className="contenedor-filtros">
                    <div className="">
                        <form
                            method="get"
                            name="form_busqueda_rapida"
                            id="form_busqueda_rapida"
                        >
                            <input
                                ref={buscadorRapido}
                                id="buscador_rapido"
                                className="buscador_rapido"
                                name="buscador_rapido"
                                type="text"
                                value={inputSearch}
                                placeholder="Búsqueda rápida"
                                onChange={(e) => setInputSearch(e.target.value)}
                            />
                            <input
                                name="fecha_publicacion"
                                type="hidden"
                                value={inputFechaPublicacion}
                            />
                            <input name="type" type="hidden" value="fetch" />
                        </form>
                        <span className="material-symbols-outlined posicion-lupa-contratos">
                            search
                        </span>
                    </div>

                    <div className="">
                        <span>
                            <button
                                onClick={handleShowBusquedaAvanzada}
                                className="mb-2"
                            >
                                <span className="material-symbols-outlined text-btn-avanzado">
                                    list
                                </span>
                                <span className="text-btn-avanzado">
                                    Búsqueda avanzada
                                </span>
                            </button>
                            <ModalBusquedaAvanzada
                                showBusquedaAvanzada={showBusquedaAvanzada}
                                handleCloseBusquedaAvanzada={
                                    handleCloseBusquedaAvanzada
                                }
                            ></ModalBusquedaAvanzada>
                        </span>
                    </div>

                    <div className="input-filtro-estado">
                        <span className="input-filtro-estado-span">
                            Visualizar:
                        </span>
                        <select className="input-visualizar">
                            <option value="">todos</option>
                            <option value="">Vistos recientemente</option>
                            <option value="">No Leidos</option>
                        </select>
                    </div>

                    <div>
                        <Paginador
                            nextHandler={() => pageChange(nextPage)}
                            prevHandler={() => pageChange(prevPage)}
                            currentPage={currentPage}
                            totalPaginas={totalPaginas}
                            totalElementos={totalElementos}
                        ></Paginador>
                    </div>
                </div>

                <div className="contenedor-contratos">
                    <div
                        className="alto-tabla bg-white overflow-auto"
                        id="scroll-table"
                    >
                        {!loading ? (
                            <>
                                <div
                                    id="wrapper1"
                                    style={{
                                        width:
                                            fakeScrollContainerWidth > 0
                                                ? fakeScrollContainerWidth
                                                : 0 + "px",
                                    }}
                                >
                                    <div
                                        id="div1"
                                        style={{
                                            width:
                                                fakeScrollContentWidth > 0
                                                    ? fakeScrollContentWidth
                                                    : 0 + "px",
                                        }}
                                    ></div>
                                </div>

                                <table
                                    id="tabla"
                                    className="w-full bg-white border tabla table-hover"
                                >
                                    <thead
                                        className="cabecera-tabla"
                                        style={{ backgroundColor: "#00a1c9" }}
                                    >
                                        <tr className="bg-paginador text-white uppercase leading-normal">
                                            <th style={{ padding: "0px 0px" }}>
                                                Acciones
                                            </th>
                                            <th style={{ padding: "0px 5px" }}>
                                                Portal
                                            </th>
                                            <th style={{ padding: "0px 80px" }}>
                                                Entidad
                                            </th>
                                            <th style={{ padding: "0px 80px" }}>
                                                Objeto
                                            </th>
                                            <th style={{ padding: "0px 35px" }}>
                                                Cuantía
                                            </th>
                                            <th style={{ padding: "0px 80px" }}>
                                                Modalidad
                                            </th>
                                            <th style={{ padding: "0px 30px" }}>
                                                Número
                                            </th>
                                            <th style={{ padding: "0px 0px" }}>
                                                Estado
                                            </th>
                                            <th style={{ padding: "0px 35px" }}>
                                                Publicada
                                            </th>
                                            <th style={{ padding: "0px 35px" }}>
                                                Ubicación
                                            </th>
                                            {/* <th style={{ padding: "0px 80px" }}>
                                                Contratista
                                            </th> */}
                                            <th style={{ padding: "0px 80px" }}>
                                                Actividad económica
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {tableContratos.map((contrato) => (
                                            <tr
                                                key={contrato.id}
                                                className="tr-users"
                                            >
                                                <td className="border border-gray-200 text-left mw-90">
                                                    <div className="iconos-horizontal width-columna-acciones">
                                                        <div>
                                                            <Pdf />
                                                            <Enviar
                                                                url={
                                                                    contrato.link
                                                                }
                                                            />
                                                            <Favoritos />
                                                        </div>
                                                        <div className="">
                                                            <Compartir />
                                                            <Eliminar />
                                                            <Visualizar />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="border border-gray-200 text-left margen-textos">
                                                    <span className="circulo">
                                                        {
                                                            contrato.fuente
                                                                .alias_portal
                                                        }
                                                    </span>
                                                </td>
                                                <td className="border border-gray-200 text-left margen-textos">
                                                    <span className="data-text width-columna-menor">
                                                        {
                                                            contrato.entidad_contratante
                                                        }
                                                    </span>
                                                </td>
                                                <td className="border border-gray-200 text-left margen-textos mw-200">
                                                    {showLess && (
                                                        <>
                                                            {showMoreSelected !=
                                                                contrato.id && (
                                                                <span className="data-text">
                                                                    {contrato.objeto.substr(
                                                                        0,
                                                                        40
                                                                    )}
                                                                    ...{" "}
                                                                    <a
                                                                        className="text-primary"
                                                                        onClick={() =>
                                                                            getData(
                                                                                contrato
                                                                            )
                                                                        }
                                                                    >
                                                                        Ver más
                                                                    </a>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}

                                                    {showMoreSelected ==
                                                        contrato.id && (
                                                        <div className="showmore">
                                                            <span className="data-text">
                                                                {
                                                                    contrato.objeto
                                                                }
                                                                <a
                                                                    className="text-primary"
                                                                    onClick={() =>
                                                                        hideData()
                                                                    }
                                                                >
                                                                    Ver menos
                                                                </a>
                                                            </span>
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="border border-gray-200 text-left margen-textos width-columna-menor">
                                                    {contrato.valor > 0
                                                        ? "$" +
                                                          contrato.valor.toLocaleString(
                                                              "ch-CH"
                                                          )
                                                        : contrato.valor_texto}
                                                </td>
                                                <td className="border border-gray-200 text-left margen-textos mw-200">
                                                    <span className="data-text ">
                                                        {contrato.modalidad}
                                                    </span>
                                                </td>
                                                <td className="border border-gray-200 text-left margen-textos ">
                                                    <span className="data-text ">
                                                        {
                                                            contrato.codigo_proceso
                                                        }
                                                    </span>
                                                </td>
                                                <td className="border border-gray-200 text-left color-estado margen-textos width-columna-menor">
                                                    <span className="data-text ">
                                                        {
                                                            contrato.estado_proceso
                                                        }
                                                    </span>
                                                </td>
                                                <td className="border border-gray-200 text-left margen-textos">
                                                    <span className="data-text width-columna-menor">
                                                        {
                                                            contrato.fecha_publicacion
                                                        }
                                                    </span>
                                                </td>
                                                <td className="border border-gray-200 text-left margen-textos width-columna-menor">
                                                    <span className="data-text ">
                                                        {contrato.ubicacion}
                                                    </span>
                                                </td>
                                                {/* <td className="border border-gray-200 text-left margen-textos mw-200">
                                                    <span className="data-text ">
                                                        {contrato.contratista}
                                                    </span>
                                                </td> */}
                                                <td className="border border-gray-200 text-left margen-textos">
                                                    <span className="data-text ">
                                                        {
                                                            contrato.actividad_economica
                                                        }
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {tableContratos.length <= 0 && (
                                    <div
                                        id="mensajes-personalizado-busqueda"
                                        className="container-fluid content_blank_interno"
                                    >
                                        <div className="row justify-content-center align-items-center">
                                            <div className="col-md-4 col-sm-4 offset-md-1 offset-sm-1">
                                                <img
                                                    src="https://col.licitaciones.info/img/mensajes-personalisados/sin-resultados-busqueda.png"
                                                    alt=""
                                                    className="img-fluid mensaje-imagen"
                                                />
                                            </div>
                                            <div className="col-md-5 col-sm-5 offset-sm-1 offset-md-1">
                                                <div className="estructura-mensaje-personalizado">
                                                    <h4 className="text-center titulo-personalizado">
                                                        <b className="text-rojo">
                                                            No se encontró
                                                        </b>{" "}
                                                        el resultado.
                                                    </h4>
                                                    <div className="position-relative">
                                                        <span className="icon-Bombillo mensaje-icono"></span>
                                                        <p className="mensaje-personalizado d-block text-left">
                                                            Prueba cambiando tus
                                                            opciones de búsqueda
                                                            e intentalo
                                                            nuevamente.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
