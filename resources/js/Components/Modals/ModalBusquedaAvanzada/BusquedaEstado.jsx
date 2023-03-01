import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Head } from "@inertiajs/inertia-react";
import "./BusquedaEstado.css";

export const BusquedaEstado = ({
    showBusquedaEstado,
    handleCloseBusquedaEstado,
}) => {
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
                        <Form>
                            <div className="form">
                                <Form.Group>
                                    <Form.Check className="todos">
                                        <Form.Check.Label>
                                            Seleciona todos los estados
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="todos" />
                                    </Form.Check>
                                    <hr />
                                    <Form.Check>
                                        <Form.Check.Label>
                                            Convocatoria
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="convocatoria" />
                                    </Form.Check>
                                    <hr />
                                    <Form.Check>
                                        <Form.Check.Label>
                                            En evaluacion
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="evaluacion" />
                                    </Form.Check>
                                    <hr />
                                    <Form.Check>
                                        <Form.Check.Label>
                                            Adjudicado
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="adjudicado" />
                                    </Form.Check>
                                    <hr />
                                    <Form.Check>
                                        <Form.Check.Label>
                                            Liquidado
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="liquidado" />
                                    </Form.Check>
                                    <hr />
                                    <Form.Check>
                                        <Form.Check.Label>
                                            Terminado anormalmente o descartado
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="terminado" />
                                    </Form.Check>
                                    <hr />
                                </Form.Group>
                                <button type="submit" className="boton">
                                    Seleccionar
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
            {/* <Modal.Footer></Modal.Footer> */}
        </Modal>
    );
};
export default BusquedaEstado;
