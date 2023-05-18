import React, { useState, useEffect } from 'react'
import './ModalDocumentos.css'
import { Modal } from 'react-bootstrap';

const ModalDocumentos = ({ showModal, handleCloseModal, modalId, data = [] }) => {
    const [documentos, setDocumentos] = useState([])

    useEffect(() => {
        /* var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/contratos/documentos', {
            contrato_id: data.id,
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                console.log("response", response.data)
                setDocumentos(response.data)
            })
            .catch(error => {
                console.log(error)
            }) */

        if (showModal) {
            setDocumentos(data.documentos)
        } else {
            setDocumentos([])
        }
    }, [showModal])

    const descargarDocumento = (documento) => {
        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        fetch('/cliente/contratos/descargar-documentos', {
            method: 'POST',
            body: JSON.stringify({
                documento: documento // pass the documento object
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
            },
            responseType: 'blob'
        })
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                link.setAttribute('download', documento.namedoc);
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('There was a problem with the Fetch request:', error);
            });
    }

    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal} id={modalId} centered>
                <Modal.Header>
                    <h4 className="modal-title">Documentos</h4>
                    <button type="button" aria-label="Close" className="close icon-Cerrar-modal" onClick={handleCloseModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="documentos">
                        <div className="row">
                            {documentos.map((documento) => (
                                <div className="col-12 contenedor_documentos col-lg-6">
                                    <div className="documentos_doc">
                                        {['docx', 'doc'].includes(documento.extension.toLowerCase()) &&
                                            <img src={`/images/extensiones/docx.svg`} width="30" className="documentos_doc_icono" />
                                        }
                                        {documento.extension.toLowerCase() == "pdf" &&
                                            <img src={`/images/extensiones/pdf.svg`} width="30" className="documentos_doc_icono" />
                                        }
                                        {documento.extension.toLowerCase() == "xlsx" &&
                                            <img src={`/images/extensiones/xlsx.svg`} width="30" className="documentos_doc_icono" />
                                        }
                                        {documento.extension.toLowerCase() == "zip" &&
                                            <img src={`/images/extensiones/zip.svg`} width="30" className="documentos_doc_icono" />
                                        }
                                        {documento.extension.toLowerCase() == "rar" &&
                                            <img src={`/images/extensiones/rar.svg`} width="30" className="documentos_doc_icono" />
                                        }
                                        <div className="documentos_doc_textos">
                                            <span className="texto_nombre_doc">{documento.namedoc}</span>
                                            <span className="texto_fecha_doc"></span>
                                        </div>
                                        <button className="btn-new-gray btnRadius documentos_doc_boton" onClick={() => descargarDocumento(documento)}>
                                            <span className="icon-Descargas-click boton_descargar"></span>
                                            <p className="texto_boton_descargar">Descargar</p>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalDocumentos