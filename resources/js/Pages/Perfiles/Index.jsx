import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
import ActividadEconomica from "@/Components/ActividadEconomica";

const Index = ({ actividades_economicas }) => {
    const [sectores, setSectores] = useState(actividades_economicas);
    const onHandleSectores = (data) => {
        // console.log("data:", sectores);
    };

    const Guardar = () => {
        alert("Guardando...");
    };

    return (
        <>
            <ActividadEconomica
                data={sectores}
                onHandleSectores={onHandleSectores}
            ></ActividadEconomica>
        </>
    );
};

export default Index;
