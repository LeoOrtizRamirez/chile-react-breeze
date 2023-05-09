import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import './ResumenPerfil.css';

const ResumenPerfil = ({ showModal, handleCloseModal, data }) => {
    return (
        <Modal show={showModal} onHide={handleCloseModal} centered size='lg' id="modal-resumen-perfil">
            <Modal.Header>
                <Modal.Title>
                    <h4 class="modal-title">Resumen</h4>
                    <button type="button" class="close icon-Cerrar-modal icon-Cerrar-modal-click" onClick={handleCloseModal}>
                        <span class="path1"></span> <span class="path2"></span>
                    </button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id="categorias-resumen" className='accordion-resumen--card card'>
                    <Accordion defaultActiveKey={['0', '1', '2', '3']} alwaysOpen class="accordion-resumen accordion-resumen--top">
                        <Accordion.Item eventKey="0" class="accordion-resumen--card card">
                            <Accordion.Header className="accordion-resumen--header">
                                <span class="icon-Menos accordion-resumen--icono"></span>
                                <div class="accordion-resumen--titulo"><span>Actividad económica</span></div>
                            </Accordion.Header>
                            <Accordion.Body className="accordion-resumen--body">
                                <div className='tree'>
                                    <div className='tree-root'>
                                        {data?.actividades_economicas?.length > 0 &&
                                            <>
                                                {
                                                    data.actividades_economicas.map((ae) => (
                                                        <li className='tree-node draggable'>
                                                            <div className='tree-content'>
                                                                <i class="tree-arrow ltr"></i>
                                                                <span tabindex="-1" class="tree-anchor">
                                                                    <span class="tree-division">
                                                                        <span class="fa fa-circle"></span>
                                                                        <span class="tree-division__title my-auto">{ae}</span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='accordion-resumen--card card'>
                            <Accordion.Header className="accordion-resumen--header">
                                <span class="icon-Menos accordion-resumen--icono"></span>
                                <div class="accordion-resumen--titulo"><span>Modalidad</span></div>
                            </Accordion.Header>
                            <Accordion.Body className="accordion-resumen--body">
                                <div className='tree'>
                                    <div className='tree-root'>
                                        {data?.tiposcompras?.length > 0 ?
                                            <>
                                                {
                                                    data.tiposcompras.map((ae) => (
                                                        <li className='tree-node draggable'>
                                                            <div className='tree-content'>
                                                                <i class="tree-arrow ltr"></i>
                                                                <span tabindex="-1" class="tree-anchor">
                                                                    <span class="tree-division">
                                                                        <span class="fa fa-circle"></span>
                                                                        <span class="tree-division__title my-auto">{ae}</span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </>
                                            :
                                            <p class="sin_items_resumen">Todas las modalidades</p>
                                        }
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='accordion-resumen--card card'>
                            <Accordion.Header className="accordion-resumen--header">
                                <span class="icon-Menos accordion-resumen--icono"></span>
                                <div class="accordion-resumen--titulo"><span>Ubicación</span></div>
                            </Accordion.Header>
                            <Accordion.Body className="accordion-resumen--body">
                                <div className='tree'>
                                    <div className='tree-root'>
                                        {data?.localizaciones?.length > 0 ?
                                            <>
                                                {
                                                    data.localizaciones.map((ae) => (
                                                        <li className='tree-node draggable'>
                                                            <div className='tree-content'>
                                                                <i class="tree-arrow ltr"></i>
                                                                <span tabindex="-1" class="tree-anchor">
                                                                    <span class="tree-division">
                                                                        <span class="fa fa-circle"></span>
                                                                        <span class="tree-division__title my-auto">{ae}</span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </>
                                            :
                                            <p class="sin_items_resumen">Todas las ubicaciones</p>
                                        }
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='accordion-resumen--card card'>
                            <Accordion.Header className="accordion-resumen--header">
                                <span class="icon-Menos accordion-resumen--icono"></span>
                                <div class="accordion-resumen--titulo"><span>Rango de cuantía</span></div>
                            </Accordion.Header>
                            <Accordion.Body className="accordion-resumen--body">
                                <div id="campos-cuantias" class="justify-content-center pt-2 pb-5 py-md-5 row">
                                    <div class="col-10 col-sm-8 col-lg-4 col-md-5">
                                        <div class="form-group mb-5 mb-md-1 campos-cuantias__form">
                                            <span class="icon-Cuantia campos-cuantias__icon">
                                                <span class="path1"></span>
                                                <span class="path2"></span>
                                                <span class="path3"></span>
                                                <span class="path4">
                                                </span>
                                            </span>
                                            <label>Cuantía <span class="azul"> desde</span>:</label>
                                            <span id="cuantia_desde" class="type_text"> {data?.perfil?.limite_inferior_cuantia}</span>
                                        </div>
                                    </div>
                                    <div class="col-10 col-sm-8 col-lg-4 col-md-5">
                                        <div class="form-group campos-cuantias__form">
                                            <span class="icon-Cuantia-2 campos-cuantias__icon">
                                                <span class="path1"></span>
                                                <span class="path2"></span>
                                                <span class="path3"></span>
                                                <span class="path4"></span>
                                            </span>
                                            <label id="descripcion">Cuantía <span class="azul"> hasta</span>:</label>
                                            <span id="cuantia_hasta" class="type_text"> {data?.perfil?.limite_superior_cuantia > 0 ? "$ " + data?.perfil?.limite_superior_cuantia : "Sin limite superior"}</span>
                                        </div>
                                    </div>
                                    <div class="align-items-center col-11 col-lg-8 col-md-9 col-sm-10 justify-content-between campos-cuantias__block row type_text_two">
                                        <div class="col-8 p-0"><span>Opción contratos <span class="azul"> sin presupuesto asignado </span> o con cuantía de <span class="azul">$0</span>:</span></div>
                                        <div class="col-4 text-left"><span>

                                            {data?.perfil?.sin_presupuesto == 1 ?
                                                <span class="verde">Activado</span>
                                                :
                                                <span class="verde">Desactivado</span>
                                            }
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ResumenPerfil