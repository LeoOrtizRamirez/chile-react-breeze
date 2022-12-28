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
import Paginador from "@/Components/PaginadorContratos";
import $ from "jquery";

const Index = ({ auth, contratos, totalContratos,pagina }) => {
    const { data, setData, post, get, processing, reset, errors } = useForm({
        title: "",
        body: "",
    });
  

    // Inicio Ordenar tabla por columna
    $("th").click(function () {
        var table = $(this).parents("table").eq(0);
        var rows = table
            .find("tr:gt(0)")
            .toArray()
            .sort(comparer($(this).index()));
        this.asc = !this.asc;
        if (!this.asc) {
            rows = rows.reverse();
        }
        for (var i = 0; i < rows.length; i++) {
            table.append(rows[i]);
        }
        setIcon($(this), this.asc);
    });

    function comparer(index) {
        return function (a, b) {
            var valA = getCellValue(a, index),
                valB = getCellValue(b, index);
            return $.isNumeric(valA) && $.isNumeric(valB)
                ? valA - valB
                : valA.localeCompare(valB);
        };
    }

    function getCellValue(row, index) {
        return $(row).children("td").eq(index).html();
    }

    function setIcon(element, asc) {
        $("th").each(function (index) {
            $(this).removeClass("sorting");
            $(this).removeClass("asc");
            $(this).removeClass("desc");
        });
        element.addClass("sorting");
        if (asc) element.addClass("asc");
        else element.addClass("desc");
    }
    // Fin Ordenar tabla por columna


    // Inicio Paginador

    const idContratoNext = contratos[29].id;
    const idContratoPrev = contratos[0].id;
    const itemsPagina = 30;
    const totalElementos = totalContratos;
    const totalPaginas = parseInt(totalElementos / itemsPagina) + 1;
    const currentPage = pagina;

    const nextHandler = () => {
        if (pagina >= totalPaginas) return;
        get("/contratos/"+ idContratoNext + "/"+ pagina + "/next"), { onSuccess: () => reset() };
    };

    const prevHandler = () => {
        if (pagina == 1) return;
        get("/contratos/"+ idContratoPrev + "/"+ pagina + "/prev"), { onSuccess: () => reset() };
    };

    // FIN Paginador

    // Fin Ordenar tabla por columna

    const busquedaRapida = (event) => {
        const value = event.target.value;
        const itemsFiltered = datos.filter(function (el) {
            // debugger;
            return (
                el.entidad_contratante
                    .toUpperCase()
                    .indexOf(value.toUpperCase()) !== -1 ||
                el.objeto.toUpperCase().indexOf(value.toUpperCase()) !== -1 ||
                el.ubicacion.toUpperCase().indexOf(value.toUpperCase()) !== -1
            );
        });
        setItems([...itemsFiltered].splice(0, itemsPagina));
    };

    const submit = (e) => {
        e.preventDefault();
        //console.log(data)
        post(route("contratos.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <div>
                <div className="contenedor-filtros">
                    <div className="">
                        <input
                            className="buscador_rapido"
                            id="buscar"
                            type="text"
                            placeholder="Escriba algo para filtrar"
                            onChange={busquedaRapida}
                        />
                        <span className="material-symbols-outlined posicion-color">
                            search
                        </span>
                    </div>
                    <div className="">
                        <button className="buscador_avanzado mb-3">
                            <span className="material-symbols-outlined margen-color">
                                {" "}
                                list{" "}
                            </span>
                            <span className="color-texto">
                                Búsqueda avanzada
                            </span>
                        </button>
                    </div>
                    <div className="input-filtro-estado">
                        <span className="span-visualizar">Visualizar</span>
                        <select className="input-visualizar">
                            <option value="">todos</option>
                            <option value="">Vistos Recientemente</option>
                            <option value="">No Leidos</option>
                        </select>
                    </div>
                    <Paginador
                        nextHandler={nextHandler}
                        prevHandler={prevHandler}
                        currentPage={currentPage}
                        itemsPagina={itemsPagina}
                        totalElementos={totalElementos}
                        totalPaginas={totalPaginas}
                    ></Paginador>
                </div>
                <div className="contenedor-contratos">
                    <MenuOpciones />
                    <div className="alto-tabla bg-white overflow-auto ">
                        <table
                            id="tabla"
                            className="w-full bg-white border tabla "
                        >
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
                                {contratos.map((contrato, index) => (
                                 
                                    <tr key={contrato.id}>
                                        <td className="border border-gray-200 text-left">
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

                                           {/*  Input Papginador contratos */}
                                           
                                            
                                        </td>
                                        <td className="border border-gray-200 text-left margen-textos">
                                            <span className="data-text ">
                                                {contrato.entidad_contratante}
                                            </span>
                                        </td>
                                        <td className="border border-gray-200 text-left margen-textos">
                                            <span className="data-text">
                                                {contrato.objeto.substr(0, 30)}
                                                ...{" "}
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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
