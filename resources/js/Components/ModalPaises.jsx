import React from 'react'
import './ModalPaises.css'
import { Modal } from 'react-bootstrap';
import Paises from '@/Components/Paises';

const ModalPaises = ({data, showModal, handleCloseModal, modalId}) => {
    const addCountry = (country) => {
        handleCloseModal(country)
    }
    return (
        <Modal show={showModal} onHide={()=>handleCloseModal(null)} id={modalId}>
            <Modal.Header>
                <button type="button" className="close icon-Cerrar-modal" onClick={()=>handleCloseModal(null)}></button>
            </Modal.Header>
            <Modal.Body>
                <Paises data={data} addCountry={addCountry} />
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPaises