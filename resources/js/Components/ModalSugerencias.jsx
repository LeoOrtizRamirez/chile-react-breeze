import React, { useState, useEffect } from 'react'
import './ModalSugerencias.css'
import { Modal } from 'react-bootstrap';

const ModalSugerencias = ({ showModal, handleCloseModal, modalId }) => {
    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal} id={modalId} centered>
                <Modal.Header>
                    <img src="/images/sugerencia_entidades/sugerir_entidad.svg" alt="Sugerir entidad" />
                    <h3 class="modal-title">Rellena los siguientes campos:</h3>
                    <button type="button" aria-label="Close" className="close icon-Cerrar-modal" onClick={handleCloseModal}></button>
                </Modal.Header>
                <form action="">
                    <Modal.Body>
                        <p class="mx-auto subtitulo-form-sugerencia">Te notificaremos cuando hayamos revisado tu información.</p>
                        <div class="mx-auto max-form-w">
                            <div class="justify-content-left d-flex subtitulo-recomendar-entidad align-items-center">
                                <i class="icon-Entidad icono-azul"></i>
                                <label for="nombreEntidad">Nombre de la entidad:</label>
                            </div>
                            <input type="text" name="nombreEntidad" placeholder="Escribe el nombre de la entidad" data-vv-as="nombre de la entidad" class="form-control input-recomienda mx-auto" />
                            <span class="is-danger-message" style={{ display: 'none' }}>El campo nombre de la entidad es obligatorio</span>
                            <div class="justify-content-left mt-4 d-flex subtitulo-recomendar-entidad align-items-center">
                                <i class="icon-Pagina-entidad icono-azul"></i>
                                <label for="nombreEntidad">Pagina web de la entidad:</label>
                            </div>
                            <input type="text" name="paginaEntidad" placeholder="Escribe la pagina web de la entidad" data-vv-as="página web de la entidad" class="form-control input-recomienda" />
                            <span class="is-danger-message" style={{ display: 'none' }}>El campo página web de la entidad es obligatorio</span>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='modal_footer_sugerencia'>
                        <input type="submit" id="btn-enviar-sugerencia" value="Enviar solicitud" class="btn btn-outline btn-new-green btnRadius" />
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalSugerencias