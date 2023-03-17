import React, { useEffect, useState, memo } from "react";
import Modal from "react-bootstrap/Modal";
import ActividadEconomica from "@/Components/ActividadEconomica";

const BusquedaActividad = memo(
    ({ showBusquedaActividad, handleCloseBusquedaActividad }) => {
        const [sectores, setSectores] = useState([]);
        const [fakeSectores, setFakeSectores] = useState([]);
        const [
            checkedsActividadesEconomicas,
            setCheckedsActividadesEconomicas,
        ] = useState([]);

        useEffect(() => {
            async function fetchSectores() {
                try {
                    const response = await fetch(
                        "/actividades-economicas/json"
                    );
                    const data = await response.json();
                    setSectores(data);
                    setFakeSectores(data);
                } catch (err) {
                    console.log("Solicitud fallida", err);
                }
            }
            fetchSectores();
        }, []);

        const onHandleSectores = (data, tipo) => {
            switch (tipo) {
                case "ActividadEconomica":
                    if (data.length > 0) {
                        setCheckedsActividadesEconomicas(data);
                    }
                    break;
                default:
                    break;
            }
        };

        return (
            <Modal
                size="xl"
                centered
                show={showBusquedaActividad}
                onHide={handleCloseBusquedaActividad}
                id=""
            >
                <Modal.Header closeButton>
                    <h2 className="name_section_app">
                        Selecciona la(s) actividad(es) economica(s) de tu
                        interes.
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
    }
);

export default BusquedaActividad;
