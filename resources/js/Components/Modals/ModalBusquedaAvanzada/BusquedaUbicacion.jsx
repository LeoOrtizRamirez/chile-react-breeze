import React, { useEffect, useState, memo } from "react";
import Modal from "react-bootstrap/Modal";
import ActividadEconomica from "@/Components/ActividadEconomica";

const BusquedaUbicacion = memo(
    ({ showBusquedaUbicacion, handleCloseBusquedaUbicacion }) => {
        const [sectores, setSectores] = useState([]);
        const [fakeSectores, setFakeSectores] = useState([]);
        const [
            checkedsLocalizaciones,
            setCheckedsLocalizaciones,
        ] = useState([]);

        useEffect(() => {
            async function fetchSectores() {
                try {
                    const response = await fetch(
                        "/localizacion/json"
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
                case "Localizaciones":
                    if (data.length > 0) {
                        setCheckedsLocalizaciones(data);
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
                show={showBusquedaUbicacion}
                onHide={handleCloseBusquedaUbicacion}
                id=""
            >
                <Modal.Header closeButton>
                    <h2 className="name_section_app">
                        Selecciona la(s) ubicacion(es) de tu
                        interes.
                    </h2>
                </Modal.Header>
                <Modal.Body>
                    <ActividadEconomica
                        subcategorias={sectores}
                        nameBuscador={"Busca por ubicacion"}
                        onHandleSectores={onHandleSectores}
                        tipo={"Localizaciones"}
                        checkeds={checkedsLocalizaciones}
                    />
                </Modal.Body>
            </Modal>
        );
    }
);

export default BusquedaUbicacion;
