import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
import "../../../css/estilos-contratos-index.css";
import "../../../css/estilos-usuarios-index.css";
import { Link } from "@inertiajs/inertia-react";

import UpdateModal from "@/Components/Modals/UpdateModal";
import CreateModal from "@/Components/Modals/CreateModal";


import 'bootstrap/dist/css/bootstrap.min.css';

const Index = ({ auth, planes }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        planes
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("planes.store"), { onSuccess: () => reset() });
    };


    const getPlan = (plan) => {
        data.nombre = plan.nombre
        data.dias = plan.dias
        const modal_activo = document.getElementById("updateModal" + plan.id)//Buscar modal para abrir
        modal_activo.style.display = "block";
        modal_activo.classList.toggle("show");
    }

    const openModal = () => {
        const modal_activo = document.getElementById("modalCreate")//Buscar modal para abrir
        modal_activo.style.display = "block";
        modal_activo.classList.toggle("show");
    }

    const all_close_btn = document.querySelectorAll("button[data-bs-dismiss]")//Buscar botones para cerrar modal
    if (all_close_btn) {
        all_close_btn.forEach(modalClose);
    }

    function modalClose(element, index, array) {//Al dar clic en cualquier boton
        element.onclick = function () {
            const modal = document.querySelector(".modal.fade.show")//Buscar modal abierto
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
                                        {plan.estado == "Activo"
                                            ? <Link href={route("planes.status", plan.id)} className="btn btn-danger">
                                                <span class="material-symbols-outlined text-white iconos-tamano-margen">
                                                    cancel
                                                </span>
                                            </Link>
                                            : (
                                                <Link href={route("planes.status", plan.id)} className="btn btn-success">
                                                    <span class="material-symbols-outlined text-white iconos-tamano-margen">
                                                        check
                                                    </span>
                                                </Link>
                                            )
                                        }
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        <button type="button"
                                            className="btn btn-info"
                                            data-bs-toggle="modal"
                                            data-bs-target={'#updateModal' + plan.id}
                                            onClick={() => { getPlan(plan) }}
                                        >
                                            <span class="material-symbols-outlined text-white iconos-tamano-margen">
                                                edit
                                            </span>
                                        </button>
                                        <UpdateModal planData={plan} />
                                    </td>
                                    <td className="border border-gray-200 margen-textos">
                                        <Link href={route('planes.destroy', plan)} method='delete' as="button" className="btn btn-danger">
                                            <span class="material-symbols-outlined text-white iconos-tamano-margen">
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
