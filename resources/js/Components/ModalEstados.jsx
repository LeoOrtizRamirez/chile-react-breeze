import React, { useState } from 'react'
import './ModalEstados.css'
import { Modal } from 'react-bootstrap';
const ModalEstados = ({ showModal, handleCloseModal, modalId }) => {
    const [estados, setEstados] = useState(["Publicada", "Cerrada", "Desierta", "Adjudicada", "Revocada", "Suspendida"])
    const [fakeEstados, setFakeEstados] = useState(estados)
    const [estadosSeleccionados, setEstadosSeleccionados] = useState([])

    const filtrarEstados = (event) => {
        setEstados(fakeEstados)
        var estadosFiltrados = [...fakeEstados]
        const pattern = new RegExp(event.target.value, "i");
        estadosFiltrados = estadosFiltrados.filter(function (el) {
            if (pattern.test(el)) {
                return el;
            }
        });
        setEstados(estadosFiltrados)
    }

    const checkAll = () => {
        var estados_seleccionados = []
        if (estadosSeleccionados.length != estados.length) {
            estados.forEach(estado => {
                estados_seleccionados.push(estado)
            })
        }
        setEstadosSeleccionados(estados_seleccionados)
    }

    const toggleEstadosSeleccionados = (event) => {
        if (estadosSeleccionados.includes(event.target.value)) {
            var estados_seleccionados = estadosSeleccionados.filter(estado => estado != event.target.value)
            setEstadosSeleccionados(estados_seleccionados)
        } else {
            setEstadosSeleccionados([...estadosSeleccionados, event.target.value])
        }

    }

    return (
        <>
            <Modal show={showModal} onHide={() => handleCloseModal(null)} id={modalId} centered size="lg">
                <Modal.Header>
                    <h4 className="modal-title">Selecciona el estado.</h4>
                    <button type="button" aria-label="Close" className="close icon-Cerrar-modal" onClick={()=>handleCloseModal(null)}></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-checkbox-modal">
                        <div className="padding_input_busqueda">
                            <input type="text" placeholder="*Buscar estado" className="form-control" onChange={filtrarEstados} />
                        </div>
                        <div className="input_all">
                            <span className="body_checkbox">
                                <div className="checkbox">
                                    <label>
                                        <input className={`${estadosSeleccionados.length > 0 ? "seleccionParcial" : ""}`} type="checkbox" onClick={checkAll} checked={estadosSeleccionados.length == estados.length} />
                                    </label>
                                </div>
                            </span>
                            <span className="text_option_modal">Selecciona todos los estados</span>
                        </div>
                        {estados.map((estado, key) => (
                            <div className="inputs_checkbox linea_divisoria" key={`estado_${key}`}>
                                <span className="body_checkbox">
                                    <div className="checkbox" style={{ margin: 0 + 'px' }}>
                                        <label>
                                            <input type="checkbox" name="estado_grid" value={estado} checked={estadosSeleccionados.includes(estado)} onChange={toggleEstadosSeleccionados} />
                                        </label>
                                    </div>
                                </span> <span className="text_option_modal">{estado}</span>
                            </div>
                        ))}


                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btnAceptarModal btn btn-new-green" onClick={() => handleCloseModal(estadosSeleccionados)}>Seleccionar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEstados