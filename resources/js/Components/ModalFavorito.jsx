import React, { useState, useRef } from 'react'
import './ModalFavorito.css'
import { Modal } from 'react-bootstrap';
import { Toast } from 'primereact/toast';

const ModalFavorito = ({ title, handleCloseModal, modalId, showModal, contrato, onHandleContrato, globalLoading }) => {

    const [isFavorito, setIsFavorito] = useState(true)
    const deleteFavorito = (favoritos) => {
        globalLoading(true)
        var contratos = [];
        if (favoritos.length == undefined) {
            contratos = [favoritos]
        } else {
            contratos = favoritos.filter(item => checksContratos.includes(item.id))
        }

        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/contratos/delete_favorito', {
            contratos: contratos
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                if (response.data.status == 1) {
                    contrato = { ...contrato, favorito: false };
                    onHandleContrato(contrato)

                    /* setSelectedContratos([])
                    setTabla(prevTabla => {
                        var newData = [...prevTabla.data];
                        contratos.forEach(contrato => {
                            const index = prevTabla.data.findIndex(item => item.id === contrato.id);
                            if (zona == "F") {//Si esta en la carpeta favoritos, elimina el indice
                                newData = newData.filter(item => item.id != contrato.id)
                            } else {//Si esta en otra carpeta, cambia el estado del atributo favorito
                                newData[index] = { ...newData[index], favorito: false }; // modify the 'favorito' property
                            }
                        })
                        return { ...prevTabla, data: newData };
                    }); */
                }
                globalLoading(false)
                handleCloseModal()
                toastBL.current.show({ severity: 'success', summary: 'Has eliminado el proceso de tus favoritos'/* , detail: 'Message Content' */, life: 3000 });
            })
            .catch(error => {
                console.log(error)
            })
    };

    const toastBL = useRef(null);
    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal} id={modalId} centered>
                <Modal.Header>
                    <h4 className="modal-title" dangerouslySetInnerHTML={{ __html: title }}></h4>
                    <button type="button" aria-label="Close" className="close icon-Cerrar-modal" onClick={handleCloseModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <div className="descripcion_delete">
                            <p>Al aceptar esto el proceso se eliminará junto con el siguiente contenido:</p>
                        </div>
                        <div className="informacion_contratos">
                            <table className="w-100">
                                <thead className="informacion_contratos--cabeceras">
                                    <th className="columna_informacion">
                                        <span>Información del proceso</span>
                                    </th>
                                    <th className="columna_icono">
                                        {isFavorito ?
                                            <span>Favoritos</span>
                                            :
                                            <span>Carpeta</span>
                                        }
                                    </th>
                                </thead>
                                <tbody>
                                    {contrato.length == undefined ?
                                        <tr className="informacion_contratos--listado">
                                            <td className="informacion_contratos--contrato_info columna_informacion">
                                                <div>
                                                    <i id="iconFuente-8119752" className="icono_fuente__list" style={{ background: 'rgb(0, 61, 201)' }}>MP</i>
                                                    <div className="informacion_contratos--contrato_nombre">
                                                        <b>{contrato.entidad_contratante}</b>
                                                        <br />
                                                        <span>{contrato.objeto}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="informacion_contratos--icono columna_icono">
                                                {isFavorito ?
                                                    <img src="https://col.licitaciones.info/img/listado/quitar_favoritos.svg" />
                                                    :
                                                    <span>
                                                        <span className="icon-Mis-carpetas" style={{ color: carpeta_actual?.color }}>
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </span>
                                                        {carpeta_actual?.nombre_carpeta}
                                                    </span>
                                                }
                                            </td>
                                        </tr>
                                        :
                                        <>
                                            {selectedContratos.map((contrato, index) => (
                                                <tr className="informacion_contratos--listado borde">
                                                    <td className="informacion_contratos--contrato_info columna_informacion">
                                                        <div>
                                                            <div className="checkbox informacion_contratos--contrato_check">
                                                                <input
                                                                    type="checkbox"
                                                                    id="checkboxPerfil0"
                                                                    className="input_perfil_val"
                                                                    value={contrato.id}
                                                                    checked={checksContratos.includes(contrato.id) ? true : false}
                                                                    onChange={handleChecksContratos}
                                                                    name="remove_favoritos"
                                                                />
                                                            </div>
                                                            <i id="iconFuente-8119752" className="icono_fuente__list" style={{ background: 'rgb(0, 61, 201)' }}>MP</i>
                                                            <div className="informacion_contratos--contrato_nombre">
                                                                <b>{contrato.entidad_contratante}</b>
                                                                <br />
                                                                <span>{contrato.objeto}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="informacion_contratos--icono columna_icono">
                                                        {isFavorito ?
                                                            <img src="https://col.licitaciones.info/img/listado/quitar_favoritos.svg" />
                                                            :
                                                            <span>
                                                                <span className="icon-Mis-carpetas" style={{ color: carpeta_actual?.color }}>
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </span>
                                                                {carpeta_actual?.nombre_carpeta}
                                                            </span>
                                                        }
                                                    </td>
                                                </tr>
                                            ))}
                                        </>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <>
                        {isFavorito ?
                            <button className="btnRadius btn-action btn-new-danger" onClick={() => deleteFavorito(contrato)}>Eliminar</button>
                            :
                            <button className="btnRadius btn-action btn-new-danger" onClick={() => deleteContrato(carpeta_actual?.id, contrato)}>Eliminar</button>
                        }
                    </>
                </Modal.Footer>
            </Modal>
            <Toast ref={toastBL} position="bottom-left" />
        </>
    )
}

export default ModalFavorito