import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
import "../../../css/estilos-contratos-index.css";
import "../../../css/estilos-usuarios-index.css";

const Index = ({ auth, usuarios }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        body: "",
    });

    const submit = (e) => {
        e.preventDefault();
        //console.log(data)
        post(route("usuarios.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Usuarios" />
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
                                            <div className="">
                                                <span className="material-symbols-outlined text-red-500 iconos-tamano-margen">
                                                    delete
                                                </span>
                                            </div>
                                            <div className="">
                                            <a href={route('usuarios.update',usuario.id) + "/edit"}>
                                                <span className="material-symbols-outlined text-cyan-500 iconos-tamano-margen">
                                                    edit
                                                </span>
                                                </a>
                                            </div>
                                            <div className="">
                                                <span className="material-symbols-outlined text-gray-500 iconos-tamano-margen">
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
