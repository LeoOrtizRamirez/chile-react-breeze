import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import MenuOpciones from "@/Components/Menu_opciones/MenuOpciones";
import { useForm, Head } from "@inertiajs/inertia-react";
import Form from "react-bootstrap/Form";
import paises from "../../../../public/data/paises.json";
import "./Crear.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Crear = ({ auth }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        identificacion: "",
        nombre_completo: "",
        estado: "",
        email: "",
        indicativo: "",
        celular: "",
        telefono_fijo: "",
        pais: "",
        ciudad: "",
        direccion: "",
        idplan: "",
        fecha_vencimiento: "",
        origen: "",
        nit_empresa: "",
        nombre_empresa: "",
        email_facturacion_empresa: "",
        indicativo_empresa: "",
        celular_empresa: "",
        telefono_fijo_empresa: "",
        pais_empresa: "",
        ciudad_empresa: "",
        direccion_empresa: "",
        descripcion_actividad_economica: "",
        password: "",
    });

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();
        post(route("usuarios.store"), { onSuccess: () => reset() });
    };

    const handlePais = (e) => {
        setData("pais", e.target.value);
        paises.find((pais) => pais.title === e.target.value);
    };

    const handlePaisEmpresa = (e) => {
        setData("pais_empresa", e.target.value);
        paises.find((pais_empresa) => pais_empresa.title === e.target.value);
    };

    const handleIndicativo = (e) => {
        setData("indicativo", e.target.value);
        paises.find((indicativo) => indicativo.indicative === e.target.value);
    };

    const handleIndicativoEmpresa = (e) => {
        setData("indicativo_empresa", e.target.value);
        paises.find(
            (indicativo_empresa) =>
                indicativo_empresa.indicative === e.target.value
        );
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Crear Usuario" />
            <div className="content">
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                />
                <div className="titulo">Creación de usuario</div>
                <a href="/usuarios" className="arrow-left usuarios-regresar">
                    Regresar
                </a>
                <div className="separacion">
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    - -
                </div>
                <div className="content-menu-form">
                    <div className="content-menu-create">
                        <MenuOpciones />
                    </div>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <div className="container-create">
                            <div className="content-form">
                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="identificacion"
                                    >
                                        Documento De Identidad:
                                    </Form.Label>
                                    <Form.Control
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="nombre_completo"
                                    >
                                        Nombre Completo:
                                    </Form.Label>
                                    <Form.Control
                                        id="nombre_completo"
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="Estado"
                                    >
                                        Estado:
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        value={data.estado}
                                        onChange={(e) =>
                                            setData("estado", e.target.value)
                                        }
                                        type="number"
                                        placeholder="Estado"
                                        autoFocus
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>
                            </div>

                            <div className="content-form">
                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="email"
                                    >
                                        Email:
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        type="email"
                                        placeholder="Email"
                                        autoFocus
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>
                            </div>

                            <div className="content-form">
                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="pais"
                                    >
                                        País:
                                    </Form.Label>
                                    <Form.Select
                                        required
                                        onChange={(e) => handlePais(e)}
                                        placeholder="Selecione su pais"
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    >
                                        <option>{data.pais}</option>
                                        {paises.map((getPais, index) => (
                                            <option
                                                autoFocus
                                                value={getPais.title}
                                                key={index}
                                            >
                                                {getPais.title}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="indicativo"
                                    >
                                        Indicativo:
                                    </Form.Label>
                                    <Form.Select
                                        required
                                        onChange={(e) => handleIndicativo(e)}
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    >
                                        <option>{data.indicativo}</option>
                                        {paises.map((getIndicativo, index) => (
                                            <option
                                                autoFocus
                                                value={getIndicativo.indicative}
                                                key={index}
                                            >
                                                {getIndicativo.indicative}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="celular"
                                    >
                                        Celular:
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        value={data.celular}
                                        onChange={(e) =>
                                            setData("celular", e.target.value)
                                        }
                                        type="text"
                                        placeholder="Celular"
                                        autoFocus
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="telefono_fijo"
                                    >
                                        Teléfono Fijo:
                                    </Form.Label>
                                    <Form.Control
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>
                            </div>

                            <div className="content-form">
                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="ciudad"
                                    >
                                        Ciudad:
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        value={data.ciudad}
                                        onChange={(e) =>
                                            setData("ciudad", e.target.value)
                                        }
                                        type="text"
                                        placeholder="Ciudad"
                                        autoFocus
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="direccion"
                                    >
                                        Dirección:
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        value={data.direccion}
                                        onChange={(e) =>
                                            setData("direccion", e.target.value)
                                        }
                                        type="text"
                                        placeholder="Dirección"
                                        autoFocus
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>
                            </div>

                            <div className="content-form">
                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="idplan"
                                    >
                                        Id plan:
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        value={data.idplan}
                                        // value="1"
                                        // disabled
                                        onChange={(e) =>
                                            setData("idplan", e.target.value)
                                        }
                                        type="number"
                                        placeholder="Id plan"
                                        autoFocus
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="fecha_vencimiento"
                                    >
                                        Fecha Fin Plan:
                                    </Form.Label>
                                    <Form.Control
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="origen"
                                    >
                                        Origen:
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        value={data.origen}
                                        onChange={(e) =>
                                            setData("origen", e.target.value)
                                        }
                                        type="text"
                                        placeholder="Origen"
                                        autoFocus
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>
                            </div>

                            <div className="content-form">
                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="nit_empresa"
                                    >
                                        Nit Empresa:
                                    </Form.Label>
                                    <Form.Control
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="nombre_empresa"
                                    >
                                        Nombre Empresa:
                                    </Form.Label>
                                    <Form.Control
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>
                            </div>

                            <div className="content-form">
                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="email_facturacion_empresa"
                                    >
                                        Email Facturación Empresa:
                                    </Form.Label>
                                    <Form.Control
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>
                            </div>

                            <div className="content-form">
                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="pais_empresa"
                                    >
                                        País:
                                    </Form.Label>
                                    <Form.Select
                                        required
                                        onChange={(e) => handlePaisEmpresa(e)}
                                        placeholder="Selecione su pais"
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    >
                                        <option>{data.pais_empresa}</option>
                                        {paises.map((getPaisEmpresa, index) => (
                                            <option
                                                autoFocus
                                                value={getPaisEmpresa.title}
                                                key={index}
                                            >
                                                {getPaisEmpresa.title}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="indicativo_empresa"
                                    >
                                        Indicativo:
                                    </Form.Label>
                                    <Form.Select
                                        required
                                        onChange={(e) =>
                                            handleIndicativoEmpresa(e)
                                        }
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    >
                                        <option>
                                            {data.indicativo_empresa}
                                        </option>
                                        {paises.map(
                                            (getIndicativoEmpresa, index) => (
                                                <option
                                                    autoFocus
                                                    value={
                                                        getIndicativoEmpresa.indicative
                                                    }
                                                    key={index}
                                                >
                                                    {
                                                        getIndicativoEmpresa.indicative
                                                    }
                                                </option>
                                            )
                                        )}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="celular_empresa"
                                    >
                                        Celular Empresa:
                                    </Form.Label>
                                    <Form.Control
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="telefono_fijo_empresa"
                                    >
                                        Teléfono Fijo Empresa:
                                    </Form.Label>
                                    <Form.Control
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>
                            </div>

                            <div className="content-form">
                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="ciudad_empresa"
                                    >
                                        Ciudad Empresa:
                                    </Form.Label>
                                    <Form.Control
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>

                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="direccion_empresa"
                                    >
                                        Dirección Empresa:
                                    </Form.Label>
                                    <Form.Control
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>
                            </div>

                            <div className="content-form">
                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="descripcion_actividad_economica"
                                    >
                                        Descripción Actividad Económica
                                    </Form.Label>
                                    <Form.Control
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
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>
                            </div>

                            <div className="content-form">
                                <Form.Group className="w-full mx-2">
                                    <Form.Label
                                        for="validationInput"
                                        htmlFor="password"
                                    >
                                        Contraseña:
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        type="password"
                                        placeholder="Contraseña"
                                        autoFocus
                                        className="mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
                                    />
                                </Form.Group>
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
                    </Form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Crear;
