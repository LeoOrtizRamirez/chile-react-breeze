import React, { useState, useEffect, Suspense, lazy } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
//const AuthenticatedLayout = lazy(() => import("@/Layouts/AuthenticatedLayout"));
import { useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
//const MenuOpciones = lazy(() => import("@/Layouts/AuthenticatedLayout"));
import "./Index.css";
import Compartir from "../../Components/Acciones/Compartir";
import Eliminar from "../../Components/Acciones/Eliminar";
import Enviar from "../../Components/Acciones/Enviar";
import Favoritos from "../../Components/Acciones/Favoritos";
import Pdf from "../../Components/Acciones/Pdf";
import Visualizar from "../../Components/Acciones/Visualizar";
import Paginador from "@/Components/PaginadorContratos";
import $ from "jquery";
// import { TypeH1 } from "react-bootstrap-icons";
import "@fontsource/poppins";
// import axios from "axios";

const Index = ({
    auth,
    contratos,
    totalContratos,
    pagina,
    numElementosPagina,
    totalElemetosPaginados,
    usuariosTotales
}) => {
    const { data, setData, post, get, processing, reset, errors } = useForm({});
    const [showLess, setShowLess] = useState(true);
    const [showMoreSelected, setShowMoreSelected] = useState(0);

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

    var idContrato = 0;

    // Inicio Paginador
    var ultimoElemento = 0;
    var primerElemento = 0;

    if (contratos.length > 0) {
        ultimoElemento = contratos[contratos.length - 1].id;
        primerElemento = contratos[0].id;
    }

    var idUsuarioNext = ultimoElemento;
    const itemsPagina = 30;
    const totalElementos = totalContratos;
    const totalPaginas = parseInt(totalElementos / itemsPagina) + 1;
    const currentPage = pagina;

    var url_fecha_publicacion = "";

    if (contratos.length > 0) {
        ultimoElemento = contratos[contratos.length - 1].id;
        primerElemento = contratos[0].id;
    }

    /*  var idUsuarioNext = ultimoElemento
    const itemsPagina = 30;
    const totalElementos = totalContratos;
    const totalPaginas = parseInt(totalElementos / itemsPagina) + 1;
    const currentPage = pagina;

    var url_fecha_publicacion = "" */

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const fecha_publicacion = urlParams.get("fecha_publicacion");

    if (fecha_publicacion != null) {
        url_fecha_publicacion = "fecha_publicacion=" + fecha_publicacion;
    }

    const nextHandler = () => {
        if (pagina >= totalPaginas) return;
        get(
            "/contratos/" +
            idUsuarioNext +
            "/" +
            pagina +
            "/next?" +
            url_fecha_publicacion
        ),
            { onSuccess: () => reset() };
    };

    const prevHandler = () => {
        if (pagina == 1) return;
        get(
            "/contratos/" +
            primerElemento +
            "/" +
            pagina +
            "/prev?" +
            url_fecha_publicacion
        ),
            { onSuccess: () => reset() };
    };

    // FIN Paginador

    /*   const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const fecha_publicacion = urlParams.get('fecha_publicacion')

    if (fecha_publicacion != null) {
        url_fecha_publicacion = "fecha_publicacion=" + fecha_publicacion
    }

    const nextHandler = () => {
       
        get("/contratos/" + idUsuarioNext + "/" + pagina + "/next?" + url_fecha_publicacion), { onSuccess: () => reset() };
    };

    const prevHandler = () => {
        if (pagina == 1) return;
        get("/contratos/" + primerElemento + "/" + pagina + "/prev?" + url_fecha_publicacion), { onSuccess: () => reset() };
    };
 */
    // FIN Paginador

    // Inicio Filtro rapido
    const busquedaRapida = (event) => {
        const value = event.target.value;
        const itemsFiltered = datos.filter(function (el) {
            // debugger;
            return (
                el.entidad_contratante
                    .toUpperCase()
                    .indexOf(value.toUpperCase()) !== -1 ||
                el.objeto.toUpperCase().indexOf(value.toUpperCase()) !== -1 ||
                el.ubicacion.toUpperCase().indexOf(value.toUpperCase()) !== -1
            );
        });
        setItems([...itemsFiltered].splice(0, itemsPagina));
    };
    // Fin Filtro rapido

    const submit = (e) => {
        e.preventDefault();
        post(route("contratos.store"), { onSuccess: () => reset() });
    };

    const getData = (data) => {
        setShowMoreSelected(data.id);
    };


    //Inicio Buscador rapido

    const [usuariosBuscador, setusuariosBuscador] = useState([]);
    const [tablaUsuariosBuscador, setTablaUsuariosBuscador] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const peticionGet = () => {
        setusuariosBuscador(contratos);
        setTablaUsuariosBuscador(usuariosTotales);
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuariosBuscador.filter((elemento) => {

            try {
                if (elemento.entidad_contratante.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                    document.querySelectorAll("span.font-black.numero-elementos-pagina")[0].style.display="none"
                    document.querySelectorAll("span.guion-paginador")[0].style.display="none"    
                    var selectores = document.getElementsByClassName("tr-users").length;
                    document.querySelectorAll("#TotalPaginasPaginador")[0].textContent=selectores;
                    return elemento;
                }
            } catch (error) {
                console.error(error);
            }
        });
        setusuariosBuscador(resultadosBusqueda);
    }

    useEffect(() => {
        peticionGet();
    }, [])

    /* Fin Buscador*/




    const hideData = () => {
        setShowMoreSelected(0);
    };


    const [fakeScrollContentWidth, setFakeScrollContentWidth] = useState(0)
    const [fakeScrollContainerWidth, setFakeScrollContainertWidth] = useState(0)
    useEffect(() => {
        var fake_contenido_tabla = document.getElementById('div1')
        var contenido_tabla = document.getElementById('tabla')

        var fake_contenedor_tabla = document.getElementById('wrapper1')
        var contenedor_tabla = document.getElementById('scroll-table')


        console.log("fake_contenido_tabla", fake_contenido_tabla.offsetWidth)
        console.log("contenido_tabla", contenido_tabla.offsetWidth)

        console.log("fake_contenedor_tabla", fake_contenedor_tabla.offsetWidth)
        console.log("contenedor_tabla", contenedor_tabla.offsetWidth)



        setFakeScrollContentWidth(contenido_tabla.offsetWidth)
        setFakeScrollContainertWidth(contenedor_tabla.offsetWidth)
        var wrapper1 = document.getElementById('wrapper1');
        var wrapper2 = document.querySelector('#scroll-table');

        wrapper1.onscroll = function () {
            wrapper2.scrollLeft = wrapper1.scrollLeft;
        };
        wrapper2.onscroll = function () {
            wrapper1.scrollLeft = wrapper2.scrollLeft;
        };
    })



    return (
        <AuthenticatedLayout auth={auth}>
            <link rel="shortcut icon" href="#"></link>

            <div>
                <div className="contenedor-filtros">
                    <div className="">
                        <input
                            className="buscador_rapido"
                            id="buscar"
                            type="text"
                            placeholder="Búsqueda rápida"
                            onChange={handleChange}
                        />
                        <span className="material-symbols-outlined posicion-color">
                            search
                        </span>
                    </div>
                    <div className="">
                        <button className="buscador_avanzado mb-3">
                            <span className="material-symbols-outlined margen-color">
                                list
                            </span>
                            <span className="color-texto">
                                Búsqueda avanzada
                            </span>
                        </button>
                    </div>
                    <div className="input-filtro-estado">
                        <span className="span-visualizar">Visualizar:</span>
                        <select className="input-visualizar">
                            <option value="">todos</option>
                            <option value="">Vistos recientemente</option>
                            <option value="">No Leidos</option>
                        </select>
                    </div>
                    <Paginador
                        nextHandler={nextHandler}
                        prevHandler={prevHandler}
                        currentPage={totalElemetosPaginados}
                        itemsPagina={itemsPagina}
                        totalElementos={totalElementos}
                        totalPaginas={numElementosPagina}
                    ></Paginador>
                </div>
                <div className="contenedor-contratos">
                    <div className="contenedor-opciones-usuarios">
                        <MenuOpciones />
                    </div>

                    <div className="alto-tabla bg-white overflow-auto " id="scroll-table">

                        <div id="wrapper1" style={{ width: fakeScrollContainerWidth > 0 ? fakeScrollContainerWidth : 0 + 'px' }}>
                            <div id="div1" style={{ width: fakeScrollContentWidth > 0 ? fakeScrollContentWidth : 0 + 'px' }} >
                            </div>
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
                                    <th>Acciones</th>
                                    <th>Portal</th>
                                    <th>Entidad</th>
                                    <th>Objeto</th>
                                    <th>Cuantía</th>
                                    <th>Modalidad</th>
                                    <th>Número</th>
                                    <th>Estado</th>
                                    <th>Publicada</th>
                                    <th>Ubicación</th>
                                    <th>Contratista</th>
                                    <th>Actividad económica</th>
                                </tr>
                            </thead>

                            <tbody>

                                {usuariosBuscador.map((contrato) => (
                                    <tr key={contrato.id} className="tr-users">
                                        <td className="border border-gray-200 text-left">

                              {/*   {contratos.map((contrato) => (
                                    <tr key={contrato.id} className="tr">
                                        <td className="border border-gray-200 text-left mw-90"> */}
                                            <div className="iconos-horizontal width-columna-acciones">
                                                <div>
                                                    <Pdf />
                                                    <Enviar
                                                        url={contrato.link}
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
                                                {contrato.fuente.alias_portal}
                                            </span>
                                        </td>
                                        <td className="border border-gray-200 text-left margen-textos">
                                            <span className="data-text width-columna-menor">
                                                {contrato.entidad_contratante}
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
                                                            {contrato.objeto}

                                                            <a
                                                                className="text-primary"
                                                                onClick={() => hideData()}
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
                                                {contrato.codigo_proceso}
                                            </span>
                                        </td>
                                        <td className="border border-gray-200 text-left color-estado margen-textos width-columna-menor">
                                            <span className="data-text ">
                                                {contrato.estado_proceso}
                                            </span>
                                        </td>
                                        <td className="border border-gray-200 text-left margen-textos">
                                            <span className="data-text width-columna-menor">
                                                {contrato.fecha_publicacion}
                                            </span>
                                        </td>
                                        <td className="border border-gray-200 text-left margen-textos width-columna-menor">
                                            <span className="data-text ">
                                                {contrato.ubicacion}
                                            </span>
                                        </td>
                                        <td className="border border-gray-200 text-left margen-textos mw-200">
                                            <span className="data-text ">
                                                {contrato.contratista}
                                            </span>
                                        </td>
                                        <td className="border border-gray-200 text-left margen-textos">
                                            <span className="data-text ">
                                                {contrato.actividad_economica}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
