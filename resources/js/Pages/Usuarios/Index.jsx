import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
/* import Paginador from "@/Components/Paginador"; */
import Paginador from "@/Components/PaginadorContratos";
import "../../../css/estilos-usuarios-index.css";
import DeleteModal from "@/Components/Modals/DeleteModalUsers";
import "bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery";

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

const Index = ({ auth, usuarios, totalUsuarios, pagina, numElementosPagina,totalElemetosPaginados }) => {
    const { data, setData, post, get, processing, reset, errors } = useForm({});

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

    //

    // Inicio Paginador

    const ultimoElemento = usuarios[usuarios.length - 1].id;
    var idUsuarioNext = ultimoElemento;
    const primerElemento = usuarios[0].id;

    console.log(usuarios);
    console.log("Usuarios.leng " + usuarios.length);
    console.log("ultimo elemeto: " + ultimoElemento);
    console.log("IDUSUARIO:" + idUsuarioNext);
    console.log("primerElemento: " + primerElemento);

    const idUsuarioPrev = usuarios[0].id;
    const itemsPagina = 30;
    const totalElementos = totalUsuarios;
    const totalPaginas = parseInt(totalElementos / itemsPagina) + 1;
    const currentPage = pagina;

    const nextHandler = () => {
        if (pagina >= totalPaginas) return;
        get("/usuarios/" + idUsuarioNext + "/" + pagina + "/next"),
            { onSuccess: () => reset() };
    };

    const prevHandler = () => {
        if (pagina == 1) return;
        get("/usuarios/" + primerElemento + "/" + pagina + "/prev"),
            { onSuccess: () => reset() };
    };

    // FIN Paginador

    const submit = (e) => {
        e.preventDefault();
        //console.log(data)
        post(route("usuarios.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Usuarios" />

            <div className="contenedor-usuarios">
                <div className="posicion-opciones-usuarios">
                    <MenuOpciones />
                </div>
                <div className="alto-tabla bg-white overflow-scroll ">
                    <div className="usuarios">
                        <div className="contenedor-botones">
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
                        <div className="margen-titulo">Usuarios</div>
                        <div></div>
                    </div>
                    <table id="tabla" className="w-full bg-white border tabla ">
                        <thead
                            className="cabecera-tabla "
                            style={{ backgroundColor: "#00a1c9" }}
                        >
                            <tr className="bg-paginador text-white uppercase leading-normal">
                                <th>Acciones</th>
                                <th># Documento</th>
                                <th>Nombre</th>
                                <th>País</th>
                                <th>Ciudad</th>
                                <th>Dirección</th>
                                <th>indicativo</th>
                                <th>Celular</th>
                                <th>teléfono fijo</th>
                                <th>Email</th>
                                <th>Plan</th>
                                {/* <th>Email confirmado</th> */}
                                <th>Creacion</th>
                                <th>Final Plan</th>
                                <th>Estado</th>
                                <th>Como se entero de Licitaciones</th>
                                <th>NIT</th>
                                <th>Empresa</th>
                                <th>País empresa</th>
                                <th>Ciudad empresa</th>
                                <th>Dirección empresa</th>
                                <th>Indicativo empresa</th>
                                <th>Celular empresa</th>
                                <th>Telefono fijo empresa</th>
                                <th>Email empresa</th>
                                <th>Actividad economica</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td className="border border-gray-200 text-left px-4 ">
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
                                                            usuario={usuario}
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
                                                        ) + "/edit"
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
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.identificacion}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.nombre_completo}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.pais}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.ciudad}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.direccion}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.indicativo}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.celular}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.telefono_fijo}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.email}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.idplan}
                                    </td>
                                    {/* <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.email_verified_at}
                                    </td> */}
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.created_at.substr(0, 10)}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.fecha_vencimiento}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.estado}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.origen}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.nit_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.nombre_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.pais_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.ciudad_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.direccion_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.indicativo_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.celular_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.telefono_fijo_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.email_facturacion_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {
                                            usuario.descripcion_actividad_economica
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <Paginador
                        nextHandler={nextHandler}
                        prevHandler={prevHandler}
                        currentPage={totalElemetosPaginados}
                        itemsPagina={itemsPagina}
                        totalElementos={totalElementos}
                        totalPaginas={numElementosPagina}
                    ></Paginador>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
