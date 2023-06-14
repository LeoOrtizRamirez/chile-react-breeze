import React, { useState, useEffect } from 'react'
import './ModalCalendario.css'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import es from 'date-fns/locale/es'
import { Modal } from 'react-bootstrap';

const ModalCalendario = ({ data, showModal, handleCloseModal, modalId }) => {
    const [selectedDateRange, setSelectedDateRange] = useState({
        startDate: data == "" ? new Date() : new Date(data.start),
        endDate: data == "" ? new Date() : new Date(data.end),
        key: 'selection',
        locale: es
    });
    var maxDate = new Date();

    const handleDateSelect = date => {
        setSelectedDateRange(date.selection);
    };

    const removeDefaultRanges = {
        staticRanges: [],
        inputRanges: [],
    };

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        setSelectedDateRange({
            startDate: data == "" ? new Date() : new Date(data.start),
            endDate: data == "" ? new Date() : new Date(data.end),
            key: 'selection',
            locale: es
        })
    }, [showModal])

    return (
        <>
            <Modal show={showModal} onHide={() => handleCloseModal()} id={modalId} centered size="lg">
                <Modal.Header>
                    <h4 className="modal-title">Fecha de publicación</h4>
                    <button type="button" aria-label="Close" className="close icon-Cerrar-modal" onClick={handleCloseModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <DateRangePicker
                        ranges={[selectedDateRange]}
                        onChange={handleDateSelect}
                        showSelectionPreview="false"
                        moveRangeOnFirstSelection="false"
                        months={2}
                        direction="horizontal"
                        maxDate={maxDate}
                    />
                    <div id="resultados" class="row"><div class="col text-center"><span>Desde: </span> <span>
                        {formatDate(selectedDateRange.startDate)}
                    </span></div> <div class="col text-center"><span>Hasta: </span> <span>
                        {formatDate(selectedDateRange.endDate)}
                    </span></div></div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn-new-green btnRadius text-center bg-transparent px-5" onClick={() => handleCloseModal(formatDate(selectedDateRange.startDate), formatDate(selectedDateRange.endDate))}>Seleccionar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalCalendario