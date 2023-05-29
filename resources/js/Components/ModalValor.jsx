import React, { useState, useEffect } from 'react'
import './ModalValor.css'
import { Modal } from 'react-bootstrap';
const ModalValor = ({ data, showModal, handleCloseModal, modalId }) => {
    const options = { style: "currency", currency: "COP", minimumFractionDigits: 0 };
    const [cuantiaDesde, setCuantiaDesde] = useState(data.length > 0 ? (data[0]).toLocaleString("en-US", options).replace('COP', '$') : (0).toLocaleString("en-US", options).replace('COP', '$'));
    const [cuantiaHasta, setCuantiaHasta] = useState(data.length > 0 ? (data[1]).toLocaleString("en-US", options).replace('COP', '$') : "");

    const handleChange = (e) => {
        const numericValue = parseInt(e.target.value.replace(/[^0-9]+/g, "")) || 0;
        return numericValue.toLocaleString("en-US", options).replace('COP', '$')
    };

    useEffect(()=>{
        setCuantiaDesde(data.length > 0 ? (data[0]).toLocaleString("en-US", options).replace('COP', '$') : (0).toLocaleString("en-US", options).replace('COP', '$'))
        setCuantiaHasta(data.length > 0 ? (data[1] > 0 ? (data[1]).toLocaleString("en-US", options).replace('COP', '$') : "") : "")
    },[showModal])
    return (
        <Modal show={showModal} onHide={() => handleCloseModal(null)} id={modalId} centered size="lg">
            <Modal.Header>
                <h4 className="modal-title">Establece los rangos de la cuantía</h4>
                <button type="button" aria-label="Close" className="close icon-Cerrar-modal" onClick={() => handleCloseModal(null)}></button>
            </Modal.Header>
            <Modal.Body>

                <div className="row m-0">
                    <div className="col-md-6 margtop col-xs-12 p-0">
                        <div className="cuadro_text_cuantia">
                            <label className="text-center">
                                <span className="icon-Cuantia">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                </span>
                                Cuantía desde:
                            </label>
                            <input
                                type="text"
                                className="v-money form-control inputmodal color_black"
                                value={cuantiaDesde}
                                onChange={(e) => setCuantiaDesde(handleChange(e))}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 margtop col-xs-12 p-0">
                        <div className="cuadro_text_cuantia">
                            <label className="text-center">
                                <span className="icon-Cuantia-2">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                </span>
                                Cuantía hasta:
                            </label>
                            <input
                                name="cuantia_hasta"
                                placeholder="Sin limite superior"
                                className="form-control inputmodal color_black"
                                value={cuantiaHasta}
                                onChange={(e) => setCuantiaHasta(handleChange(e))} />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    className="btnAceptarModal btn btn-new-green"
                    onClick={() => handleCloseModal([
                        parseInt(cuantiaDesde.replace(/[^0-9]+/g, "")) || 0,
                        parseInt(cuantiaHasta.replace(/[^0-9]+/g, "")) || 0
                        ]
                    )}>Seleccionar</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalValor