import React, { useEffect, useState, memo } from "react";
import Modal from "react-bootstrap/Modal";
import ActividadEconomica from "@/Components/ActividadEconomica";

const BusquedaTiposCompras = memo(
    ({ showBusquedaTiposCompras, handleCloseBusquedaTiposCompras }) => {
        const [sectores, setSectores] = useState([]);
        const [fakeSectores, setFakeSectores] = useState([]);
        const [checkedsTiposCompras, setCheckedsTiposCompras] = useState([]);

        useEffect(() => {
            async function fetchSectores() {
                try {
                    const response = await fetch("/tiposcompras/json");
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
                case "TiposCompras":
                    if (data.length > 0) {
                        setCheckedsTiposCompras(data);
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
                show={showBusquedaTiposCompras}
                onHide={handleCloseBusquedaTiposCompras}
                id=""
            >
                <Modal.Header closeButton>
                    <h2 className="name_section_app">
                        Selecciona la(s) modalidad(es) de tu interes.
                    </h2>
                </Modal.Header>
                <Modal.Body>
                    <ActividadEconomica
                        subcategorias={sectores}
                        nameBuscador={"Busca por modalidad"}
                        onHandleSectores={onHandleSectores}
                        tipo={"TiposCompras"}
                        checkeds={checkedsTiposCompras}
                    />
                </Modal.Body>
            </Modal>
        );
    }
);

export default BusquedaTiposCompras;
