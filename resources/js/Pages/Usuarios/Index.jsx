import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Paginador from "@/Components/PaginadorContratos";
import DeleteModal from "@/Components/Modals/DeleteModalUsers";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";
import "./font-web.css";
import "./index.css";

import Loader from "@/Components/Loader";

const Index = ({ auth, usuarios }) => {
    const [tableUsuarios, setTableUsuarios] = useState(usuarios.data);

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

    //Modal delete users
    const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);
    const [openDeleteUserModalId, setOpenDeleteUserModalId] = useState(0);

    const getUsuarioDelete = (usuario) => {
        setOpenDeleteUserModal(true);
        setOpenDeleteUserModalId(usuario.id);
    };

    const handleSearch = (e) => {
        setOpenDeleteUserModal(false);
    };

    //Fin Modal delete users

    /*Inicio Buscador rapido y paginador */
    const [totalPaginas, setTotalPaginas] = useState(usuarios.to);
    const [currentPage, setCurrentPage] = useState(usuarios.from);
    const [totalElementos, setTotalElementos] = useState(usuarios.total);
    const [nextPage, setNextPage] = useState(usuarios.next_page_url);
    const [prevPage, setPrevPage] = useState(usuarios.prev_page_url);

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
        fetch(url + "&" + querystring)
            .then((response) => response.json())
            .then((data) => {
                tableFormat(data);
            });
    };

    const buscadorRapido = useRef(0);

    useEffect(() => {
        function addKeypressEvent(event) {
            console.log("entro");
            if (event.key === "Enter") {
                event.preventDefault();
                const querystring = getUrlParams();
                setLoading(true);
                fetch("/usuarios/?" + querystring)
                    .then((response) => response.json())
                    .then((data) => {
                        tableFormat(data);
                        setLoading(false);
                    });
            }
        }

        if (buscadorRapido.current != 0) {
            buscadorRapido.current.addEventListener(
                "keypress",
                addKeypressEvent
            );
        }
        return () => {
            buscadorRapido.current.removeEventListener(
                "keypress",
                addKeypressEvent
            );
        };
    }, [tableUsuarios]);

    const tableFormat = (data) => {
        //Formatear valores del paginador
        setTableUsuarios(data.data);
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

    /*Fin Buscador rapido y paginador */

    /*Inicio Loader */
    const [loading, setLoading] = useState(false);
    /*Fin Loader */
    return (
        <AuthenticatedLayout auth={auth} className="testindexusers">
            <link rel="shortcut icon" href="#"></link>
            <div>
                <div className="contenedor-usuarios">
                    {!loading ? (
                        <>
                            <div className="contenedor-informacion-usuarios bg-white">
                                <div className="usuarios">
                                    <div className="contenedor-botones">
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
                                                    onChange={(e) =>
                                                        setInputSearch(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <input
                                                    name="fecha_publicacion"
                                                    type="hidden"
                                                    value={
                                                        inputFechaPublicacion
                                                    }
                                                />
                                                <input
                                                    name="type"
                                                    type="hidden"
                                                    value="fetch"
                                                />
                                            </form>
                                            <span className="material-symbols-outlined posicion-lupa-color">
                                                search
                                            </span>
                                        </div>

                                        <a
                                            className="autorenew"
                                            href="javascript:location.reload()"
                                        >
                                            <span className="material-symbols-outlined actualizar-color">
                                                autorenew
                                            </span>
                                        </a>
                                        <a
                                            className="add_circle"
                                            href={route("usuarios.create")}
                                        >
                                            <span className="material-symbols-outlined material-symbols-outlined-color">
                                                add_circle
                                            </span>
                                        </a>
                                    </div>
                                    <div className="margen-titulo">
                                        Usuarios
                                    </div>
                                    <div></div>
                                </div>
                                <div className="tabla-ubicacion-usuarios">
                                    <table id="tabla" className="">
                                        <thead
                                            className="cabecera-tabla "
                                            style={{
                                                backgroundColor: "#00a1c9",
                                            }}
                                        >
                                            <tr className="bg-paginador text-white uppercase leading-normal">
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Acciones
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 10px",
                                                    }}
                                                >
                                                    Documento
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Nombre
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 10px",
                                                    }}
                                                >
                                                    País
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 10px",
                                                    }}
                                                >
                                                    Ciudad
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Dirección
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    indicativo
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Celular
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    teléfono fijo
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 0px",
                                                    }}
                                                >
                                                    Plan
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Creacion
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Final Plan
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 10px",
                                                    }}
                                                >
                                                    Estado
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Como se entero de
                                                    Licitaciones
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    NIT
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Empresa
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    País empresa
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Ciudad empresa
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Dirección empresa
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 10px",
                                                    }}
                                                >
                                                    Indicativo empresa
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 10px",
                                                    }}
                                                >
                                                    Celular empresa
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Telefono fijo empresa
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Email empresa
                                                </th>
                                                <th
                                                    style={{
                                                        padding: "0px 35px",
                                                    }}
                                                >
                                                    Actividad economica
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableUsuarios.map((usuario) => (
                                                <tr
                                                    key={usuario.id}
                                                    className="tr-users"
                                                >
                                                    <td className="border border-gray-200 px-4 ">
                                                        <div className="iconos-horizontal">
                                                            <div className="estilos-boton-eliminar">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger btn-sm usuarios"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target={
                                                                        "#deleteModal" +
                                                                        usuario.id
                                                                    }
                                                                    onClick={() => {
                                                                        getUsuarioDelete(
                                                                            usuario
                                                                        );
                                                                    }}
                                                                >
                                                                    <span className="material-symbols-outlined text-white iconos-tamano-margen align-middle">
                                                                        delete
                                                                    </span>
                                                                </button>

                                                                {openDeleteUserModal &&
                                                                    openDeleteUserModalId ==
                                                                        usuario.id && (
                                                                        <DeleteModal
                                                                            usuario={
                                                                                usuario
                                                                            }
                                                                            openDeleteModal={
                                                                                openDeleteUserModal
                                                                            }
                                                                            handleSearch={
                                                                                handleSearch
                                                                            }
                                                                        />
                                                                    )}
                                                            </div>

                                                            <div className="estilos-boton-editar">
                                                                <a
                                                                    href={
                                                                        route(
                                                                            "usuarios.update",
                                                                            usuario.uuid
                                                                        ) +
                                                                        "/edit"
                                                                    }
                                                                >
                                                                    <span className="material-symbols-outlined">
                                                                        edit
                                                                    </span>
                                                                </a>
                                                            </div>

                                                            <div className="estilos-boton-email">
                                                                <span className="material-symbols-outlined">
                                                                    mail
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.identificacion}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {
                                                            usuario.nombre_completo
                                                        }
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.pais}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.ciudad}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.direccion}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.indicativo}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.celular}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.telefono_fijo}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.email}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.idplan}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.created_at.substr(
                                                            0,
                                                            10
                                                        )}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {
                                                            usuario.fecha_vencimiento
                                                        }
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.estado}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.origen}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.nit_empresa}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.nombre_empresa}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.pais_empresa}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {usuario.ciudad_empresa}
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {
                                                            usuario.direccion_empresa
                                                        }
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {
                                                            usuario.indicativo_empresa
                                                        }
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {
                                                            usuario.celular_empresa
                                                        }
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {
                                                            usuario.telefono_fijo_empresa
                                                        }
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {
                                                            usuario.email_facturacion_empresa
                                                        }
                                                    </td>
                                                    <td className="border border-gray-200 margen-textos">
                                                        {
                                                            usuario.descripcion_actividad_economica
                                                        }
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {tableUsuarios.length <= 0 && (
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
                                                                Prueba cambiando
                                                                tus opciones de
                                                                búsqueda e
                                                                intentalo
                                                                nuevamente.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
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
                        </>
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
