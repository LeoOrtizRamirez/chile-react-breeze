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
                                <th>Nombre</th>
                                <th># Documento</th>
                                <th>Celular</th>
                                <th>indicativo</th>
                                <th>teléfono fijo</th>
                                <th>Dirección</th>
                                <th>Ciudad</th>
                                <th>País</th>
                                <th>Plan</th>
                                <th>Email</th>
                                <th>Email confirmado</th>
                                <th>Creacion</th>
                                <th>Final Plan</th>
                                <th>Estado</th>
                                <th>Como se entero de Licitaciones</th>
                                <th className="color-titulos-empresa">
                                    Empresa
                                </th>
                                <th className="color-titulos-empresa">NIT</th>
                                <th className="color-titulos-empresa">País</th>
                                <th className="color-titulos-empresa">
                                    Ciudad
                                </th>
                                <th className="color-titulos-empresa">
                                    Dirección
                                </th>
                                <th className="color-titulos-empresa">
                                    Celular
                                </th>
                                <th className="color-titulos-empresa">
                                    Indicativo
                                </th>
                                <th className="color-titulos-empresa">
                                    Telefono fijo
                                </th>
                                <th className="color-titulos-empresa">Email</th>
                                <th className="color-titulos-empresa">
                                    Actividad economica
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td className="border border-gray-200 text-left px-4 ">
                                        <div className="iconos-horizontal">
                                            <div className="">
                                                <span class="material-symbols-outlined text-red-500 iconos-tamano-margen">
                                                    delete
                                                </span>
                                            </div>
                                            <div className="">
                                                <span class="material-symbols-outlined text-cyan-500 iconos-tamano-margen">
                                                    edit
                                                </span>
                                            </div>
                                            <div className="">
                                                <span class="material-symbols-outlined text-gray-500 iconos-tamano-margen">
                                                    mail
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.nombre_completo}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.identificacion}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.celular}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.indicativo}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.telefono_fijo}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.direccion}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.ciudad}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.pais}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.idplan}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.email}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.email_verified_at}
                                    </td>
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
                                    <td className="border border-gray-200 text-left margen-textos color-data-empresa">
                                        {usuario.nombre_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos color-data-empresa">
                                        {usuario.nit_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos color-data-empresa">
                                        {usuario.pais_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos color-data-empresa">
                                        {usuario.ciudad_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos color-data-empresa">
                                        {usuario.direccion_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos color-data-empresa">
                                        {usuario.celular_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos color-data-empresa">
                                        {usuario.indicativo_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos color-data-empresa">
                                        {usuario.telefono_fijo_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos color-data-empresa">
                                        {usuario.email_facturacion_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos color-data-empresa">
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
