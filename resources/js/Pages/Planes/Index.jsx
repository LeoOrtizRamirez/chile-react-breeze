import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
import "../../../css/estilos-contratos-index.css";
import "../../../css/estilos-usuarios-index.css";
import { Link } from "@inertiajs/inertia-react";

import UpdateModal from "@/Components/Modals/UpdateModal";
import CreateModal from "@/Components/Modals/CreateModal";

import "bootstrap/dist/css/bootstrap.min.css";

const Index = ({ auth, planes }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        planes,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("planes.store"), { onSuccess: () => reset() });
    };

    const getPlan = (plan) => {
        data.nombre = plan.nombre;
        data.dias = plan.dias;
        const modal_activo = document.getElementById("updateModal" + plan.id); //Buscar modal para abrir
        modal_activo.style.display = "block";
        modal_activo.classList.toggle("show");
    };

    const openModal = () => {
        const modal_activo = document.getElementById("modalCreate"); //Buscar modal para abrir
        modal_activo.style.display = "block";
        modal_activo.classList.toggle("show");
    };

    const all_close_btn = document.querySelectorAll("button[data-bs-dismiss]"); //Buscar botones para cerrar modal
    if (all_close_btn) {
        all_close_btn.forEach(modalClose);
    }

    function modalClose(element, index, array) {
        //Al dar clic en cualquier boton
        element.onclick = function () {
            const modal = document.querySelector(".modal.fade.show"); //Buscar modal abierto
            if (modal) {
                modal.style.display = "none";
                modal.classList.toggle("show");
            }
        };
    }

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Planes" />
            <div className="contenedor-contratos">
                <MenuOpciones />
                <div className="bg-white overflow-auto w-full text-center">
                    <CreateModal />
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
                                                <span className="material-symbols-outlined text-red-500 iconos-tamano-margen">
                                                    cancel
                                                </span>
                                            </Link>
                                        ) : (
                                            <Link
                                                href={route(
                                                    "planes.status",
                                                    plan.id
                                                )}
                                            >
                                                <span className="material-symbols-outlined text-green-500 iconos-tamano-margen">
                                                    check
                                                </span>
                                            </Link>
                                        )}
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        <button
                                            type="button"
                                            className="btn btn-info"
                                            data-bs-toggle="modal"
                                            data-bs-target={
                                                "#updateModal" + plan.id
                                            }
                                            onClick={() => {
                                                getPlan(plan);
                                            }}
                                        >
                                            Update
                                        </button>
                                        <UpdateModal
                                            modalId={plan.id}
                                            employeeData={plan}
                                        />
                                        <Link
                                            href={route("planes.edit", plan.id)}
                                        >
                                            <span className="material-symbols-outlined text-cyan-500 iconos-tamano-margen">
                                                edit
                                            </span>
                                        </Link>
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        <Link
                                            href={route("planes.destroy", plan)}
                                            method="delete"
                                            as="button"
                                        >
                                            <span className="material-symbols-outlined text-red-500 iconos-tamano-margen">
                                                delete
                                            </span>
                                        </Link>
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
