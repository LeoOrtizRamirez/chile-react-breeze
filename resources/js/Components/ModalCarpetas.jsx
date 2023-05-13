import React, { useState, useRef } from 'react'
import './ModalCarpetas.css'
import { Modal } from 'react-bootstrap';
import CrearCarpeta from "@/Components/CrearCarpeta";
import { Toast } from 'primereact/toast';
const ModalCarpetas = ({ title = null, handleCloseModal, modalId, showModal, contrato, folders, onHandleContrato, onHandleFolders, globalLoading }) => {
    const [showModalCrearCarpeta, setShowModalCrearCarpeta] = useState(false);
    const handleOpenModalCrearCarpeta = () => {
        setShowModalCrearCarpeta(true);
    };
    const handleCloseModalCrearCarpeta = () => {
        setCarpetaSelected(null)
        setShowModalCrearCarpeta(false);
    };

    const [carpetasSeleccionadas, setCarpetasSeleccionadas] = useState([])

    const toggleCarpetasSeleccionadas = (e, id_carpeta) => {
        if (e.target.checked) {
            if (!carpetasSeleccionadas.includes(id_carpeta)) {
                setCarpetasSeleccionadas([...carpetasSeleccionadas, id_carpeta]);
            }
        } else {
            const newCarpetas = carpetasSeleccionadas.filter((item) => item !== id_carpeta);
            setCarpetasSeleccionadas(newCarpetas);
        }
    }

    const saveCarpetasSeleccionadas = () => {
        globalLoading(true)
        var token = document.querySelector('meta[name="csrf-token"]')
        var contratos = [];
        if (contrato.length == undefined) {
            contratos = [contrato]
        } else {
            contratos = contrato
        }
        axios.post('/cliente/carpeta/add-contrato', {
            contratos: contratos,
            carpetas: carpetasSeleccionadas
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                if (response.data.status == 1) {
                    const carpetas_actuales = contrato.carpetas_ids
                    const carpetas_contrato_actuales = contrato.carpetas
                    carpetasSeleccionadas.forEach(item => {
                        if (!carpetas_actuales.includes(item)) {
                            carpetas_actuales.push(item)
                        }
                        if (!carpetas_contrato_actuales.includes(item)) {
                            const carpeta = folders.filter(c => c.id == item)[0]
                            carpetas_contrato_actuales.push(carpeta)
                        }
                    })
                    contrato = { ...contrato, carpetas_ids: carpetas_actuales };
                    contrato = { ...contrato, carpetas: carpetas_contrato_actuales };
                    onHandleContrato(contrato)

                    /* setSelectedContratos([])
                    setTabla(prevTabla => {
                        const newData = [...prevTabla.data];
                        contratos.forEach(contrato => {
                            const index = prevTabla.data.findIndex(item => item.id === contrato.id);
                            if (index === -1) {
                                return { ...prevTabla };
                            } else {
                                const carpetas_actuales = newData[index].carpetas_ids
                                const carpetas_contrato_actuales = newData[index].carpetas
                                carpetasSeleccionadas.forEach(item => {
                                    if (!carpetas_actuales.includes(item)) {
                                        carpetas_actuales.push(item)
                                    }
                                    if (!carpetas_contrato_actuales.includes(item)) {
                                        const carpeta = folders.filter(c => c.id == item)[0]
                                        carpetas_contrato_actuales.push(carpeta)
                                    }
                                })
                                newData[index] = { ...newData[index], carpetas_ids: carpetas_actuales };
                                newData[index] = { ...newData[index], carpetas: carpetas_contrato_actuales };
                            }
                        })
                        return { ...prevTabla, data: newData };
                    }); */
                }
                globalLoading(false)
                handleCloseModal()
                toastBL.current.show({ severity: 'success', summary: 'Has agregado el proceso de contratación a tus carpetas.'/* , detail: 'Message Content' */, life: 3000 });

            })
            .catch(error => {
                console.log(error)
            })
    }

    const [carpetaSelected, setCarpetaSelected] = useState([])

    const handleCarpetas = (carpetas) => {
        onHandleFolders(carpetas)
        setShowModalCrearCarpeta(false)
    }

    const deleteContrato = (carpeta, contratos) => {
        globalLoading(true)
        var _contratos = [];
        if (contratos.length == undefined) {
            _contratos = [contratos]
        } else {
            contratos.forEach(c => {
                _contratos.push(c.id)
            })
        }
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/carpeta/delete-contrato', {
            contratos: _contratos,
            carpeta: carpeta
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                if (response.data.status == 1) {



                    console.log("old", contrato)

                    const carpetas_ids = contrato.carpetas_ids.filter(c => c != carpeta)
                    const carpetas_contrato = contrato.carpetas.filter(c => c.id != carpeta);
                    contrato = { ...contrato, carpetas_ids: carpetas_ids };
                    contrato = { ...contrato, carpetas: carpetas_contrato };
                    console.log("current", contrato)
                    onHandleContrato(contrato)
                    /*  setSelectedContratos([])
                     setTabla(prevTabla => {
                         var newData = [...prevTabla.data];
                         _contratos.forEach(c => {
                             const index = prevTabla.data.findIndex(item => item.id === c);
                             if (index === -1) {
                                 return { ...prevTabla };
                             } else {
                                 if (zona == "C" && carpeta_actual?.id == carpeta) {
                                     newData = newData.filter(item => item.id != c)
                                 } else {
                                     const carpetas_ids = newData[index].carpetas_ids.filter(c => c != carpeta)
                                     const carpetas_contrato = newData[index].carpetas.filter(c => c.id != carpeta);
                                     newData[index] = { ...newData[index], carpetas_ids: carpetas_ids };
                                     newData[index] = { ...newData[index], carpetas: carpetas_contrato };
                                 }
                             }
                         })
                         return { ...prevTabla, data: newData };
                     }); */
                }
                globalLoading(false)
                handleCloseModal()
                toastBL.current.show({ severity: 'success', summary: 'Has eliminado el proceso de contratación de tus carpetas'/* , detail: 'Message Content' */, life: 3000 });
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
                    {folders.length == 0 ?
                        <h4 className="modal-title">Aún no tienes carpetas creadas</h4>
                        :
                        <h4 className="modal-title">Selecciona carpeta(s) destino</h4>
                    }
                    <button type="button" aria-label="Close" className="close icon-Cerrar-modal" onClick={handleCloseModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="contenedor_carpetas_seleccion">
                        {folders.length == 0 ?
                            <div id="mensajes-sin-carpetas" className="container content_blank_intern">
                                <img src="/public/images/mensajes-personalizados/sin-carpetas-modal.svg" alt="" className="imagen-sin-carpetas" />
                                <p>Añade tu primer carpeta</p>
                            </div>
                            :
                            <div className="carpetas_list_seleccion">
                                <ul className="row scroll_fit">
                                    {folders.map((carpeta) => (
                                        <li key={`carpeta_${carpeta.id}`} className="align-items-center col-md-3 col-sm-4 col-xs-12 d-flex selected_carpeta">
                                            <span className="body_checkbox">

                                                {contrato.length == undefined ? //Se selecciono la carpeta del contrato 
                                                    <>
                                                        {contrato.carpetas_ids.includes(carpeta.id) ?
                                                            <div className="checkbox" style={{ margin: 0 + 'px' }} onClick={() => deleteContrato(carpeta.id, contrato.id)}>
                                                                <i className="align-items-center cr-icon d-flex fa fa-times justify-content-center quitar_carpeta"></i>
                                                                <label>
                                                                    <input type="checkbox" name="carpeta_mover" value="22101" />
                                                                    <span className="cr">
                                                                        <i className="cr-icon fa fa-check"></i>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            :
                                                            <input type="checkbox" id="carpeta_mover" name="carpeta_mover" className="input_perfil_val" value={carpeta.id} onClick={(e) => toggleCarpetasSeleccionadas(e, carpeta.id)} />
                                                        }
                                                    </>
                                                    ://Se selecciono la carpeta del boton flotante
                                                    <input type="checkbox" id="carpeta_mover" name="carpeta_mover" className="input_perfil_val" value={carpeta.id} onClick={(e) => toggleCarpetasSeleccionadas(e, carpeta.id)} />
                                                }


                                            </span>
                                            <div className="body_icono_carpeta">
                                                <span title="Carpeta 1" className="ico-carpeta icon-Mis-carpetas" style={{ color: carpeta.color }}>
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                </span>
                                                <span title="Carpeta 1" className="title_icono_carpeta">{carpeta.nombre_carpeta}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="actions-buttons-modal buttons-modal-carpetas">
                        <button type="button" className="btn-new-green btnRadius text-center" onClick={handleOpenModalCrearCarpeta}>Crear carpeta</button>
                        <button type="button" className="btn-new-blue btnRadius text-center disable_button" disabled={carpetasSeleccionadas.length == 0} onClick={saveCarpetasSeleccionadas}>Guardar en</button>
                    </div>
                </Modal.Footer>
            </Modal>
            <CrearCarpeta showModal={showModalCrearCarpeta} handleCloseModal={handleCloseModalCrearCarpeta} carpeta={carpetaSelected} other_page={true} handleCarpetas={handleCarpetas} globalLoading={globalLoading} />
            <Toast ref={toastBL} position="bottom-left" />
        </>
    )
}

export default ModalCarpetas