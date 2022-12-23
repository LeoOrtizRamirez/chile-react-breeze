import React from "react";
import "../../../css/estilos-contenedor-filtros.css";
import FiltroRapido from "./FiltroRapido";
import FiltroAvanzado from "./FiltroAvanzado";
import FiltroEstado from "./FiltroEstado";

export default function ContenedorFiltros() {
    return (
        <div className="contenedor-filtros">
            <FiltroRapido />
            <FiltroAvanzado />
            <FiltroEstado />
        </div>
    );
}
