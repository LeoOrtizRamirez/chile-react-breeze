import React, { useEffect, useState } from "react";
// import "./BusquedaActividad.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import ActividadEconomica from "@/Components/ActividadEconomica";

export const BusquedaActividad = ({
    showBusquedaActividad,
    handleCloseBusquedaActividad,
}) => {
    useEffect(() => {
        fetch("/actividades-economicas/json")
            .then((response) => response.json()) // convertir a json
            .then((data) => {
                setSectores(data);
                setFakeSectores(data);
            }) //imprimir los datos en la consola
            .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores
    }, []);

    const [sectores, setSectores] = useState([]);
    const [fakeSectores, setFakeSectores] = useState([]);
    const [checkedsActividadesEconomicas, setCheckedsActividadesEconomicas] =
        useState([]);

    // debugger;
    const onHandleSectores = (data, tipo) => {
        switch (tipo) {
            case "ActividadEconomica":
                if (data.length > 0) {
                    setCheckedsActividadesEconomicas(data);
                }
                break;
        }
    };
    return (
        <Modal
            size="xl"
            dialogClassName=""
            contentClassName=""
            backdropClassName=""
            className=""
            centered
            show={showBusquedaActividad}
            onHide={handleCloseBusquedaActividad}
            id=""
        >
            <Modal.Header closeButton>
                <h2 className="name_section_app">
                    Selecciona la(s) actividad(es) economica(s) de tu interes.
                </h2>
            </Modal.Header>
            <Modal.Body>
                <ActividadEconomica
                    subcategorias={sectores}
                    nameBuscador={"Busca por actividad económica o UNSPSC"}
                    onHandleSectores={onHandleSectores}
                    tipo={"ActividadEconomica"}
                    checkeds={checkedsActividadesEconomicas}
                />
            </Modal.Body>
        </Modal>
    );
};

export default BusquedaActividad;
