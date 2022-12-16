import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";
import Post from "@/Components/Post";
import MenuOpciones from "../../Components/MenuOpciones";
import "../../../css/estilos-contratos-index.css";

const Index = ({ auth, contratos }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        body: "",
    });

    const submit = (e) => {
        e.preventDefault();
        //console.log(data)
        post(route("contratos.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Contratos" />
            <div className="contenedor-contratos">
                <MenuOpciones />
                <div className="alto-tabla bg-white overflow-auto ">
                    <table className="w-full bg-white border tabla ">
                        <thead
                            className="cabecera-tabla "
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
                            {contratos.map((contrato) => (
                                <tr key={contrato.id}>
                                    <td className="border border-gray-200 text-left px-4 ">
                                        <div className="iconos-horizontal">
                                            <div>
                                                <button className="">
                                                    <span className="material-symbols-outlined text-gray-500 iconos-tamano-margen">
                                                        picture_as_pdf
                                                    </span>
                                                </button>
                                                <button className="">
                                                    <span className="material-symbols-outlined text-gray-500 iconos-tamano-margen">
                                                        ios_share
                                                    </span>
                                                </button>
                                            </div>

                                            <div className="">
                                                <button className="">
                                                    <span className="material-symbols-outlined text-gray-500 iconos-tamano-margen">
                                                        star
                                                    </span>
                                                </button>
                                                <button className="">
                                                    <span className="material-symbols-outlined text-gray-500 iconos-tamano-margen">
                                                        visibility
                                                    </span>
                                                </button>
                                            </div>

                                            <div className="">
                                                <button className="">
                                                    <span className="material-symbols-outlined text-gray-500 iconos-tamano-margen">
                                                        share
                                                    </span>
                                                </button>
                                                <button className="">
                                                    <span className="material-symbols-outlined text-gray-500 iconos-tamano-margen">
                                                        folder_delete
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {" "}
                                        {contrato.fuente.alias_portal}{" "}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {" "}
                                        {contrato.entidad_contratante}{" "}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {" "}
                                        {contrato.objeto.substr(0, 30)}...{" "}
                                        <a href="" className="text-primary">
                                            Ver más
                                        </a>
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {" "}
                                        {contrato.valor > 0
                                            ? contrato.valor.toLocaleString(
                                                  "co-CO"
                                              )
                                            : contrato.valor_texto}{" "}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {" "}
                                        {contrato.modalidad}{" "}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {" "}
                                        {contrato.codigo_proceso}{" "}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {" "}
                                        {contrato.estado_proceso}{" "}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {" "}
                                        {contrato.fecha_publicacion}{" "}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {" "}
                                        {contrato.ubicacion}{" "}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {" "}
                                        {contrato.contratista}{" "}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {" "}
                                        {contrato.actividad_economica}{" "}
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
