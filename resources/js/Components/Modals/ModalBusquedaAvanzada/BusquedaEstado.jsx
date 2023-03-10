import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Head } from "@inertiajs/inertia-react";
import "./BusquedaEstado.css";

export const BusquedaEstado = ({
    showBusquedaEstado,
    handleCloseBusquedaEstado,
    onClose,
    onValuesSelected,
}) => {
    const [checkboxValues, setCheckboxValues] = useState({
        todos: false,
        publicada: false,
        evaluacion: false,
        adjudicada: false,
        revocada: false,
        cerrada: false,
    });
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        if (name === "todos") {
            setCheckboxValues({
                todos: checked,
                publicada: checked,
                evaluacion: checked,
                adjudicada: checked,
                revocada: checked,
                cerrada: checked,
            });
        } else {
            setCheckboxValues({
                ...checkboxValues,
                [name]: checked,
            });
        }
    };

    const handleSaveClick = () => {
        const selectedValues = Object.keys(checkboxValues).filter(
            (key) => checkboxValues[key]
        );
        onValuesSelected(selectedValues);
        handleCloseBusquedaEstado();
    };
    return (
        <Modal
            size="md"
            dialogClassName=""
            contentClassName=""
            backdropClassName=""
            className=""
            centered
            show={showBusquedaEstado}
            onHide={handleCloseBusquedaEstado}
            id="BusquedaEstado"
        >
            <Modal.Header closeButton>
                <Head title="Busqueda estado" />
                <div className="titulo">
                    <span>Seleciona el estado</span>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="busqueda-estado">
                    <div>
                        <input
                            type="text"
                            className="buscador"
                            placeholder="Buscar estado"
                        />
                    </div>
                    <div>
                        <div className="form">
                            <div className="todos">
                                <input
                                    type="checkbox"
                                    name="todos"
                                    checked={checkboxValues.todos}
                                    onChange={handleCheckboxChange}
                                />
                                <label>Seleciona todoss los estados</label>
                            </div>
                            <hr />
                            <div>
                                <input
                                    type="checkbox"
                                    name="publicada"
                                    checked={checkboxValues.publicada}
                                    onChange={handleCheckboxChange}
                                />
                                <label>Publicada</label>
                            </div>
                            <hr />
                            <div>
                                <input
                                    type="checkbox"
                                    name="evaluacion"
                                    checked={checkboxValues.evaluacion}
                                    onChange={handleCheckboxChange}
                                />
                                <label>En evaluacion</label>
                            </div>
                            <hr />
                            <div>
                                <input
                                    type="checkbox"
                                    name="adjudicada"
                                    checked={checkboxValues.adjudicada}
                                    onChange={handleCheckboxChange}
                                />
                                <label>Adjudicada</label>
                            </div>
                            <hr />
                            <div>
                                <input
                                    type="checkbox"
                                    name="revocada"
                                    checked={checkboxValues.revocada}
                                    onChange={handleCheckboxChange}
                                />
                                <label>Revocada</label>
                            </div>
                            <hr />
                            <div>
                                <input
                                    type="checkbox"
                                    name="cerrada"
                                    checked={checkboxValues.cerrada}
                                    onChange={handleCheckboxChange}
                                />
                                <label>
                                    Terminado anormalmente o descartado
                                </label>
                            </div>
                            <hr />
                        </div>
                        <button className="boton" onClick={handleSaveClick}>
                            Seleccionar
                        </button>
                    </div>
                </div>
            </Modal.Body>
            {/* <Modal.Footer></Modal.Footer> */}
        </Modal>
    );
};
export default BusquedaEstado;
