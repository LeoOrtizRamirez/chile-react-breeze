import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
import "../../../css/estilos-planes-index.css";
import { Link } from "@inertiajs/inertia-react";

import UpdateModal from "@/Components/Modals/UpdateModal";
import CreateModal from "@/Components/Modals/CreateModal";
import DeleteModal from "@/Components/Modals/DeleteModal";

import "bootstrap/dist/css/bootstrap.min.css";

const Index = ({ auth, planes }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        planes,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("planes.store"), { onSuccess: () => reset() });
    };

    const [openCreateModal, setOpenCreateModal] = useState(false);

    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [openUpdateModalId, setOpenUpdateModalId] = useState(0);

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openDeleteModalId, setOpenDeleteModalId] = useState(0);

    const getPlan = (plan) => {
        setOpenUpdateModal(true);
        setOpenUpdateModalId(plan.id);
        /*
        const modal_activo = document.getElementById("updateModal" + plan.id); //Buscar modal para abrir
        modal_activo.style.display = "block";
        modal_activo.classList.toggle("show");
        */
    };

    const getPlanDelete = (plan) => {
        setOpenDeleteModal(true);
        setOpenDeleteModalId(plan.id);
    };

    const handleSearch = (e) => {
        setOpenCreateModal(false);
        setOpenUpdateModal(false);
        setOpenDeleteModal(false);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Planes" />
            <div className="contenedor-planes">
                <div className="posicion-opciones-planes">
                    <MenuOpciones />
                </div>
                <div className="bg-white overflow-auto w-full text-center margen-superior">
                    <h2 className="name_section_app">Planes</h2>
                    <div className="planes">
                        <div className="contenedor-botones">
                            <a
                                className="autorenew"
                                href="javascript:location.reload()"
                            >
                                <span className="material-symbols-outlined">
                                    autorenew
                                </span>
                            </a>

                            <a
                                className="add_circle"
                                onClick={() => {
                                    setOpenCreateModal(true);
                                }}
                            >
                                <span className="material-symbols-outlined material-symbols-outlined-color cursor-pointer">
                                    add_circle
                                </span>
                            </a>

                            {openCreateModal && (
                                <CreateModal
                                    openCreateModal={openCreateModal}
                                    handleSearch={handleSearch}
                                />
                            )}
                        </div>
                    </div>
                    <table className="w-full bg-white border tabla ">
                        <thead
                            className="cabecera-tabla "
                            style={{ backgroundColor: "#00a1c9" }}
                        >
                            <tr className="bg-paginador text-white uppercase leading-normal">
                                <th>IdPlan</th>
                                <th>Nombre</th>
                                <th>Días</th>
                                <th>Tiempo</th>
                                <th>Valor</th>
                                <th>Descripción</th>
                                <th>Estado</th>
                                <th>Activar/Inactivar</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {planes.map((plan) => (
                                <tr key={plan.id}>
                                    <td className="border border-gray-200 margen-textos">
                                        {plan.id}
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        {plan.nombre}
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        {plan.dias}
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        {plan.tiempo}
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        {plan.valor}
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        {plan.descripcion}
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        {plan.estado}
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        {plan.estado == "Activo" ? (
                                            <Link
                                                href={route(
                                                    "planes.status",
                                                    plan.id
                                                )}
                                            >
                                                <img src="/icons/multicolor/toggle-on.svg" alt="" className="m-auto"/>
                                            </Link>
                                        ) : (
                                            <Link
                                                href={route(
                                                    "planes.status",
                                                    plan.id
                                                )}
                                            >
                                                <img src="/icons/multicolor/toggle-off.svg" alt="" className="m-auto"/>
                                            </Link>
                                        )}
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        <button
                                            type="button"
                                            className="btn btn-info btn-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target={
                                                "#updateModal" + plan.id
                                            }
                                            onClick={() => {
                                                getPlan(plan);
                                            }}
                                        >
                                            <span className="text-white material-symbols-outlined iconos-tamano-margen align-middle">
                                                edit
                                            </span>
                                        </button>
                                        {openUpdateModal &&
                                            openUpdateModalId == plan.id && (
                                                <UpdateModal
                                                    planData={plan}
                                                    openUpdateModal={
                                                        openUpdateModal
                                                    }
                                                    handleSearch={handleSearch}
                                                />
                                            )}
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target={
                                                "#deleteModal" + plan.id
                                            }
                                            onClick={() => {
                                                getPlanDelete(plan);
                                            }}
                                        >
                                            <span className="text-white material-symbols-outlined iconos-tamano-margen align-middle">
                                                delete
                                            </span>
                                        </button>
                                        {openDeleteModal &&
                                            openDeleteModalId == plan.id && (
                                                <DeleteModal
                                                    planData={plan}
                                                    openDeleteModal={
                                                        openDeleteModal
                                                    }
                                                    handleSearch={handleSearch}
                                                />
                                            )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
