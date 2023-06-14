import React, { useState, useEffect } from 'react'
import './ModalSolicitudCreada.css'
import { Modal } from 'react-bootstrap';

const ModalSolicitudCreada = ({ showModal, handleCloseModal, modalId }) => {
    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal} id={modalId} centered>
                <Modal.Header>
                    <div className='exito_sugerencia_imagen_div'>
                        <img src="/images/sugerencia_entidades/enviado-azul.png" class="exito_sugerencia_imagen_div_img" />

                    </div>
                    <button type="button" aria-label="Close" className="close icon-Cerrar-modal" onClick={handleCloseModal}></button>
                </Modal.Header>
                    <Modal.Body className="exito_sugerencia_texto">
                        <div class="exito_sugerencia_texto_1">
                            <p>Tu solicitud fue <span class="mensaje-azul">creada</span>.</p>
                        </div>
                        <div class="exito_sugerencia_texto_2">
                            <p>verificaremos tu solicitud y en corto tiempo te daremos una respuesta.</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='modal_footer_sugerencia'>
                        <button class="btn btn-outline btn-new-green btnRadius" onClick={handleCloseModal}>Entendido</button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalSolicitudCreada