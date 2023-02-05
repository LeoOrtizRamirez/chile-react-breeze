import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import MenuOpciones from "@/Components/Menu_opciones/MenuOpciones";
import { useForm, usePage, Head } from "@inertiajs/inertia-react";
import "./Editar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const editar = ({ usuario }) => {
    const { auth } = usePage().props;
    const [editing, setEditing] = useState(false);
    const { data, setData, patch, processing, reset, errors } = useForm({
        nombre_completo: usuario.nombre_completo,
        identificacion: usuario.identificacion,
        celular: usuario.celular,
        indicativo: usuario.identificacion,
        telefono_fijo: usuario.telefono_fijo,
        direccion: usuario.direccion,
        ciudad: usuario.ciudad,
        pais: usuario.pais,
        idplan: usuario.idplan,
        email: usuario.email,
        fecha_vencimiento: usuario.fecha_vencimiento,
        estado: usuario.estado,
        origen: usuario.origen,
        password: usuario.password,
        nombre_empresa: usuario.nombre_empresa,
        nit_empresa: usuario.nit_empresa,
        pais_empresa: usuario.pais_empresa,
        ciudad_empresa: usuario.ciudad_empresa,
        direccion_empresa: usuario.direccion_empresa,
        celular_empresa: usuario.celular,
        indicativo_empresa: usuario.indicativo_empresa,
        telefono_fijo_empresa: usuario.telefono_fijo_empresa,
        email_facturacion_empresa: usuario.email_facturacion_empresa,
        descripcion_actividad_economica:
            usuario.descripcion_actividad_economica,
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(usuario.id);
        patch(route("usuarios.update", usuario.id), {
            onSuccess: () => setEditing(false),
        });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Crear Usuario" />
            <div className="content">
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                />
                <div className="titulo">
                    <a href="/usuarios" className="usuarios-regresar">
                        Regresar
                    </a>
                    <span>Actualizar de usuario</span>
                </div>
                <div className="separacion">
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    - -
                </div>
                <div className="content-menu-form">
                    <div className="content-menu">
                        <MenuOpciones />
                    </div>
                    <form onSubmit={submit} className="was-validated">
                        <div className="container-create">
                            <div className="content-form">
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="identificacion"
                                    >
                                        Documento De Identidad:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.identificacion}
                                        onChange={(e) =>
                                            setData(
                                                "identificacion",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Documento De Identidad"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.identificacion}
                                        className="mt-2"
                                    /> */}
                                </div>

                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="nombre_completo"
                                    >
                                        Nombre Completo:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.nombre_completo}
                                        onChange={(e) =>
                                            setData(
                                                "nombre_completo",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Nombre Completo"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.nombre_completo}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>

                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="Estado"
                                    >
                                        Estado:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.estado}
                                        onChange={(e) =>
                                            setData("estado", e.target.value)
                                        }
                                        type="number"
                                        placeholder="Estado"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.estado}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                            </div>

                            <div className="content-form">
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="email"
                                    >
                                        Email:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        type="email"
                                        placeholder="Email"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.email}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                            </div>

                            <div className="content-form">
                                <div className="w-full mx-2">
                                    <label for="validationInput" htmlFor="pais">
                                        País:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.pais}
                                        onChange={(e) =>
                                            setData("pais", e.target.value)
                                        }
                                        type="text"
                                        placeholder="País"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.pais}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>

                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="indicativo"
                                    >
                                        Indicativo:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.indicativo}
                                        onChange={(e) =>
                                            setData(
                                                "indicativo",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Indicativo"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.indicativo}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="celular"
                                    >
                                        Celular:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.celular}
                                        onChange={(e) =>
                                            setData("celular", e.target.value)
                                        }
                                        type="text"
                                        placeholder="Celular"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.celular}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="telefono_fijo"
                                    >
                                        Teléfono Fijo:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.telefono_fijo}
                                        onChange={(e) =>
                                            setData(
                                                "telefono_fijo",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Teléfono Fijo"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.telefono_fijo}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                            </div>

                            <div className="content-form">
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="ciudad"
                                    >
                                        Ciudad:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.ciudad}
                                        onChange={(e) =>
                                            setData("ciudad", e.target.value)
                                        }
                                        type="text"
                                        placeholder="Ciudad"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.ciudad}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="direccion"
                                    >
                                        Dirección:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.direccion}
                                        onChange={(e) =>
                                            setData("direccion", e.target.value)
                                        }
                                        type="text"
                                        placeholder="Dirección"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.direccion}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                            </div>

                            <div className="content-form">
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="idplan"
                                    >
                                        Id plan:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.idplan}
                                        onChange={(e) =>
                                            setData("idplan", e.target.value)
                                        }
                                        type="number"
                                        placeholder="Id plan"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.idplan}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="fecha_vencimiento"
                                    >
                                        Fecha Fin Plan:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.fecha_vencimiento}
                                        onChange={(e) =>
                                            setData(
                                                "fecha_vencimiento",
                                                e.target.value
                                            )
                                        }
                                        type="date"
                                        placeholder=""
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.fecha_vencimiento}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="origen"
                                    >
                                        Origen:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.origen}
                                        onChange={(e) =>
                                            setData("origen", e.target.value)
                                        }
                                        type="text"
                                        placeholder="Origen"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.origen}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                            </div>

                            <div className="content-form">
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="nit_empresa"
                                    >
                                        Nit Empresa:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.nit_empresa}
                                        onChange={(e) =>
                                            setData(
                                                "nit_empresa",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Nit Empresa"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.nit_empresa}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="nombre_empresa"
                                    >
                                        Nombre Empresa:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.nombre_empresa}
                                        onChange={(e) =>
                                            setData(
                                                "nombre_empresa",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Nombre Empresa"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.nombre_empresa}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                            </div>

                            <div className="content-form">
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="email_facturacion_empresa"
                                    >
                                        Email Facturación Empresa:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.email_facturacion_empresa}
                                        onChange={(e) =>
                                            setData(
                                                "email_facturacion_empresa",
                                                e.target.value
                                            )
                                        }
                                        type="email"
                                        placeholder="Email Facturación Empresa"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={
                                            errors.email_facturacion_empresa
                                        }
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                            </div>

                            <div className="content-form">
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="pais_empresa"
                                    >
                                        País Empresa:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.pais_empresa}
                                        onChange={(e) =>
                                            setData(
                                                "pais_empresa",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="País Empresa"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.pais_empresa}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="indicativo_empresa"
                                    >
                                        Indicativo Empresa:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.indicativo_empresa}
                                        onChange={(e) =>
                                            setData(
                                                "indicativo_empresa",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Indicativo Empresa"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.indicativo_empresa}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="celular_empresa"
                                    >
                                        Celular Empresa:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.celular_empresa}
                                        onChange={(e) =>
                                            setData(
                                                "celular_empresa",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Celular Empresa"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.celular_empresa}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="telefono_fijo_empresa"
                                    >
                                        Teléfono Fijo Empresa:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.telefono_fijo_empresa}
                                        onChange={(e) =>
                                            setData(
                                                "telefono_fijo_empresa",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Teléfono Fijo Empresa"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.telefono_fijo_empresa}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                            </div>

                            <div className="content-form">
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="ciudad_empresa"
                                    >
                                        Ciudad Empresa:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.ciudad_empresa}
                                        onChange={(e) =>
                                            setData(
                                                "ciudad_empresa",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Ciudad Empresa"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.ciudad_empresa}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="direccion_empresa"
                                    >
                                        Dirección Empresa:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.direccion_empresa}
                                        onChange={(e) =>
                                            setData(
                                                "direccion_empresa",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Dirección Empresa"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.direccion_empresa}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                            </div>

                            <div className="content-form">
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="descripcion_actividad_economica"
                                    >
                                        Descripción Actividad Económica
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={
                                            data.descripcion_actividad_economica
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "descripcion_actividad_economica",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        placeholder="Descripción Actividad Económica"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={
                                            errors.descripcion_actividad_economica
                                        }
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                            </div>

                            <div className="content-form">
                                <div className="w-full mx-2">
                                    <label
                                        for="validationInput"
                                        htmlFor="password"
                                    >
                                        Contraseña:
                                    </label>
                                    <br />
                                    <input
                                        required
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        type="password"
                                        placeholder="Contraseña"
                                        autoFocus
                                        className="form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                    {/* <InputError
                                        message={errors.password}
                                        className="mt-2 input-error-usuarios"
                                    /> */}
                                </div>
                            </div>

                            <div className="content-form-btn">
                                <PrimaryButton
                                    className="mt-4 
                        text-white 
                        bg-gradient-to-br
                        from-sky-600
                        to-sky-600 
                        hover:bg-gradient-to-bl 
                        focus:ring-1 
                        focus:outline-none 
                        focus:ring-blue-300
                        dark:focus:ring-blue-800 
                        font-medium 
                        rounded-lg 
                        text-sm 
                        px-5 
                        py-2.5 
                        text-center 
                        mr-2 
                        mb-2"
                                    disabled={processing}
                                >
                                    Crear Usuario
                                </PrimaryButton>
                                <SecondaryButton
                                    className="mt-4 
                        text-black 
                        bg-gradient-to-br
                        from-gray-200
                        to-gray-200 
                        hover:bg-gradient-to-bl 
                        focus:ring-1 
                        focus:outline-none 
                        focus:ring-blue-300
                        dark:focus:ring-blue-800 
                        font-medium 
                        rounded-lg 
                        text-sm 
                        px-5 
                        py-2.5 
                        text-center 
                        mr-2 
                        mb-2"
                                    disabled={processing}
                                >
                                    Cancelar
                                </SecondaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default editar;
