import React from "react";
import "../../../css/estilos-menu-opciones.css";
import MenuAdmin from "./MenuAdmin";
import Perfiles from "./Perfiles";
import MisSeguimientos from "./MisSeguimientos";
import Carpetas from "./Carpetas";
import TodosContratos from "./TodosContratos";
import Ajustes from "./Ajustes";

export default function ManuOpciones() {
    return (
        <div className="contenedor-menu-opciones">
            <MenuAdmin />
            <Perfiles />
            <MisSeguimientos />
            <Carpetas />
            <TodosContratos />
            <Ajustes />
        </div>
    );
}
