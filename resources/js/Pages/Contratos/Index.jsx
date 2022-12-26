import React, { useState, useEffect } from "react";
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
import ContenedorFiltros from "@/Components/Filtros/ContenedorFiltros";
import Paginador from "@/Components/Paginador";

// import {Compartir, Eliminar, Enviar, Favoritos, Pdf, Visualizar } from "../../Components/Acciones";

const Index = ({ auth, contratos }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        body: "",
    });


 /* paginador*/

 const itemsPagina = 30;

 const totalElementos = contratos.length

 const totalPaginas = parseInt(totalElementos / itemsPagina) + 1

 const [datos, setDatos] = useState(contratos)

 const [items, setItems] = useState([...contratos].splice(0, itemsPagina))

 const [currentPage, setCurrentPage] = useState(0)

 const nextHandler = () => {

     const nextPage = currentPage + 1

     const firstIndex = nextPage * itemsPagina

     if (firstIndex >= totalElementos) return;

     setItems([...datos].splice(firstIndex, itemsPagina))

     setCurrentPage(nextPage)
 }

 const prevHandler = () => {
     const prevPage = currentPage -1 ;

     if(prevPage < 0) return

     const firstIndex = prevPage * itemsPagina

     setItems([...datos].splice(firstIndex, itemsPagina))

     setCurrentPage(prevPage)

 }

 /* end  paginador */







    const submit = (e) => {
        e.preventDefault();
        //console.log(data)
        post(route("contratos.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Contratos" />
            <ContenedorFiltros/>
            <div className="contenedor-contratos">
                <MenuOpciones />
                <div className="alto-tabla bg-white overflow-auto ">
                    <table className="w-full bg-white border tabla ">
                        <thead
                            className="cabecera-tabla"
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
                            {items.map((contrato) => (
                                <tr key={contrato.id}>
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
                                        {contrato.fuente.alias_portal}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        <span className="data-text ">
                                            {contrato.entidad_contratante}
                                        </span>
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        <span className="data-text">
                                            {contrato.objeto.substr(0, 30)}...{" "}
                                        </span>
                                        <a href="" className="text-primary">
                                            Ver más
                                        </a>
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {contrato.valor > 0
                                            ? contrato.valor.toLocaleString(
                                                  "co-CO"
                                              )
                                            : contrato.valor_texto}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {contrato.modalidad}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {contrato.codigo_proceso}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {contrato.estado_proceso}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {contrato.fecha_publicacion}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {contrato.ubicacion}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        <span className="data-text ">
                                            {contrato.contratista}
                                        </span>
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {contrato.actividad_economica}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Paginador nextHandler={nextHandler}  prevHandler={prevHandler} currentPage={currentPage} itemsPagina={itemsPagina} totalElementos={totalElementos} totalPaginas={totalPaginas}></Paginador>

                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
