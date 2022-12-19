import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
import "../../../css/estilos-contratos-index.css";
import Compartir from "../../Components/Acciones/Compartir";
import Eliminar from "../../Components/Acciones/Eliminar";
import Enviar from "../../Components/Acciones/Enviar";
import Favoritos from "../../Components/Acciones/Favoritos";
import Pdf from "../../Components/Acciones/Pdf";
import Visualizar from "../../Components/Acciones/Visualizar";

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
                                <th>Nombre Completo</th>
                                <th>Documento de <br />identidad</th>
                                <th>Celular</th>
                                <th>indicativo</th>
                                <th>teléfono fijo</th>
                                <th>Dirección</th>
                                <th>Ciudad</th>
                                <th>País</th>
                                <th>Plan</th>
                                <th>Email</th>
                                <th>Email confirmado</th>
                                <td>Fecha de <br />creacion</td>
                                <td>Fecha Final Plan</td>
                                <td> Estado</td>
                                <td>Como se entero <br />de Licitaciones</td>
                                <td> Nombre de la<br />empresa</td>
                                <td>NIT</td>
                                <td> País</td>
                                <td>Ciudad Empresa</td>
                                <td> Dirección</td>
                                <td> Celular empresa</td>
                                <td>Indicativo</td>
                                <td> Telefono fijo</td>
                                <td> Email de <br />facturación de la<br />empresa</td>
                                <td> Descripción de la
                                    <br />actividad<br />economica
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td className="border border-gray-200 text-left px-4 ">
                                        <div className="iconos-horizontal">
                                            <div>
                                                <Pdf />
                                                <Enviar />
                                            </div>

                                            <div className="">
                                                <Favoritos />
                                                <Visualizar />
                                            </div>

                                            <div className="">
                                                <Compartir />
                                                <Eliminar />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.nombre_completo}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        <span className="data-text ">
                                            {usuario.identificacion}
                                        </span>
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
                                        <span className="data-text ">
                                            { usuario.email}
                                        </span>
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        { usuario.email_verified_at }
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        { usuario.created_at }
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        { usuario.fecha_vencimiento }
                                    </td>


                                    
                                    <td className="border border-gray-200 text-left margen-textos">
                                        { usuario.estado }
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.origen}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.nombre_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.nit_empresa}
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
                                        {usuario.celular_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.indicativo_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.telefono_fijo_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.email_facturacion_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.descripcion_actividad_economica}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}

export default Index