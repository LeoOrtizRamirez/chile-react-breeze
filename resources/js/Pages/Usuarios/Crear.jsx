import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";
import "../../../css/estilos-usuarios-index.css";

const Crear = ({ auth }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        
        nombre_completo: "",
        identificacion: "",
        celular: "",
        indicativo: "",
        telefono_fijo: "",
        direccion: "",
        ciudad: "",
        pais: "",
        idplan: "",
        email: "",
        fecha_vencimiento: "",
        estado: "",
        origen: "",
        password: "",
        nombre_empresa: "",
        nit_empresa: "",
        pais_empresa: "",
        ciudad_empresa: "",
        direccion_empresa: "",
        celular_empresa: "",
        indicativo_empresa: "",
        telefono_fijo_empresa: "",
        email_facturacion_empresa: "",
        descripcion_actividad_economica: "",
    });

    const submit = (e) => {
        e.preventDefault();
        //console.log(data)
        post(route("usuarios.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Crear Usuario" />
            <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div>
                        <div className="contenedor-usuarios">
                            <input
                                style={{ width: "250px" }}
                                value={data.identificacion}
                                onChange={(e) =>
                                    setData("identificacion", e.target.value)
                                }
                                type="text"
                                placeholder="Documento de identidad"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.identificacion}
                                className="mt-2"
                            />
                            <input
                                value={data.nombre_completo}
                                onChange={(e) =>
                                    setData("nombre_completo", e.target.value)
                                }
                                type="text"
                                placeholder="Nombre completo"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.nombre_completo}
                                className="mt-2"
                            />
                        </div>
                        <div className="contenedor-usuarios">
                            <input
                                style={{ width: "150px" }}
                                value={data.pais}
                                onChange={(e) =>
                                    setData("pais", e.target.value)
                                }
                                type="text"
                                placeholder="pais"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.pais}
                                className="mt-2"
                            />
                            <input
                                style={{ width: "150px" }}
                                value={data.indicativo}
                                onChange={(e) =>
                                    setData("indicativo", e.target.value)
                                }
                                type="text"
                                placeholder="Indicativo"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.indicativo}
                                className="mt-2"
                            />
                            <input
                                value={data.celular}
                                onChange={(e) =>
                                    setData("celular", e.target.value)
                                }
                                type="text"
                                placeholder="Celular"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.celular}
                                className="mt-2"
                            />
                            <input
                                value={data.telefono_fijo}
                                onChange={(e) =>
                                    setData("telefono_fijo", e.target.value)
                                }
                                type="text"
                                placeholder="Teléfono Fijo"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.telefono_fijo}
                                className="mt-2"
                            />
                        </div>
                        <div className="contenedor-usuarios">
                            <input
                                value={data.ciudad}
                                onChange={(e) =>
                                    setData("ciudad", e.target.value)
                                }
                                type="text"
                                placeholder="ciudad"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.ciudad}
                                className="mt-2"
                            />
                            <input
                                value={data.direccion}
                                onChange={(e) =>
                                    setData("direccion", e.target.value)
                                }
                                type="text"
                                placeholder="Direccion"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.direccion}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <input
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                type="text"
                                placeholder="email"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div className="contenedor-usuarios">
                            <input
                                value={data.idplan}
                                onChange={(e) =>
                                    setData("idplan", e.target.value)
                                }
                                type="number"
                                placeholder="idplan"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.idplan}
                                className="mt-2"
                            />
                            <input
                                value={data.fecha_vencimiento}
                                onChange={(e) =>
                                    setData("fecha_vencimiento", e.target.value)
                                }
                                type="date"
                                placeholder="fecha_vencimiento"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.fecha_vencimiento}
                                className="mt-2"
                            />
                        </div>
                        <div className="contenedor-usuarios">
                            <input
                                value={data.estado}
                                onChange={(e) =>
                                    setData("estado", e.target.value)
                                }
                                type="number"
                                placeholder="estado"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.estado}
                                className="mt-2"
                            />
                            <input
                                value={data.origen}
                                onChange={(e) =>
                                    setData("origen", e.target.value)
                                }
                                type="text"
                                placeholder="origen"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.origen}
                                className="mt-2"
                            />
                        </div>
                        <div className="contenedor-usuarios">
                            <input
                                style={{ width: "250px" }}
                                value={data.nit_empresa}
                                onChange={(e) =>
                                    setData("nit_empresa", e.target.value)
                                }
                                type="text"
                                placeholder="nit_empresa"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.nit_empresa}
                                className="mt-2"
                            />
                            <input
                                value={data.nombre_empresa}
                                onChange={(e) =>
                                    setData("nombre_empresa", e.target.value)
                                }
                                type="text"
                                placeholder="nombre_empresa"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.nombre_empresa}
                                className="mt-2"
                            />
                        </div>
                        <div className="contenedor-usuarios">
                            <input
                                style={{ width: "150px" }}
                                value={data.pais_empresa}
                                onChange={(e) =>
                                    setData("pais_empresa", e.target.value)
                                }
                                type="text"
                                placeholder="pais_empresa"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.pais_empresa}
                                className="mt-2"
                            />
                            <input
                                style={{ width: "150px" }}
                                value={data.indicativo_empresa}
                                onChange={(e) =>
                                    setData(
                                        "indicativo_empresa",
                                        e.target.value
                                    )
                                }
                                type="text"
                                placeholder="indicativo_empresa"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.indicativo_empresa}
                                className="mt-2"
                            />
                            <input
                                value={data.celular_empresa}
                                onChange={(e) =>
                                    setData("celular_empresa", e.target.value)
                                }
                                type="text"
                                placeholder="celular_empresa"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.celular_empresa}
                                className="mt-2"
                            />
                            <input
                                value={data.telefono_fijo_empresa}
                                onChange={(e) =>
                                    setData(
                                        "telefono_fijo_empresa",
                                        e.target.value
                                    )
                                }
                                type="text"
                                placeholder="telefono_fijo_empresa"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.telefono_fijo_empresa}
                                className="mt-2"
                            />
                        </div>
                        <div className="contenedor-usuarios">
                            <input
                                value={data.ciudad_empresa}
                                onChange={(e) =>
                                    setData("ciudad_empresa", e.target.value)
                                }
                                type="text"
                                placeholder="ciudad_empresa"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.ciudad_empresa}
                                className="mt-2"
                            />
                            <input
                                value={data.direccion_empresa}
                                onChange={(e) =>
                                    setData("direccion_empresa", e.target.value)
                                }
                                type="text"
                                placeholder="direccion_empresa"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.direccion_empresa}
                                className="mt-2"
                            />
                        </div>
                        <div className="contenedor-usuarios">
                            <input
                                value={data.email_facturacion_empresa}
                                onChange={(e) =>
                                    setData(
                                        "email_facturacion_empresa",
                                        e.target.value
                                    )
                                }
                                type="text"
                                placeholder="email_facturacion_empresa"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.email_facturacion_empresa}
                                className="mt-2"
                            />
                            <input
                                value={data.descripcion_actividad_economica}
                                onChange={(e) =>
                                    setData(
                                        "descripcion_actividad_economica",
                                        e.target.value
                                    )
                                }
                                type="text"
                                placeholder="descripcion_actividad_economica"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.descripcion_actividad_economica}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <input
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                type="text"
                                placeholder="password"
                                autoFocus
                                className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <PrimaryButton
                            className="mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            disabled={processing}
                        >
                            Crear
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Crear;
