import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "./Index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CrearCarpeta from "@/Components/CrearCarpeta";
import { Modal, Button } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';

const Index = ({ auth, carpetas }) => {
    const [showModalCrearCarpeta, setShowModalCrearCarpeta] = useState(false);
    const handleOpenModalCrearCarpeta = () => {
        setShowModalCrearCarpeta(true);
    };
    const handleCloseModalCrearCarpeta = () => {
        setCarpetaSelected(null)
        setShowModalCrearCarpeta(false);
    };

    const [carpetaSelected, setCarpetaSelected] = useState([])

    const editCarpeta = (carpeta) => {
        setCarpetaSelected(carpeta)
        setShowModalCrearCarpeta(true)
    }

    const eliminarCarpeta = () =>{
        Inertia.post('/cliente/carpeta/eliminar', carpetaSelected,{
            onSuccess: () => {
                handleCloseEliminarCarpeta()
            }
      });
    }

    /*Modal Eliminar carpeta */
    const [showModalEliminarCarpeta, setShowModalEliminarCarpeta] = useState(false);

    const handleCloseEliminarCarpeta = () => setShowModalEliminarCarpeta(false);
    const handleShowEliminarCarpeta = (carpeta) => {
        setCarpetaSelected(carpeta)
        setShowModalEliminarCarpeta(true)
    };
    /*Modal Eliminar carpeta */
    return (
        <>
            <AuthenticatedLayout auth={auth} page={'carpetas'}>
                <div className="content_blank_interno margin_left_layout">
                    <div className="col">
                        <h2 className="name_seccion_app">Administrar carpetas</h2>
                    </div>
                    <div>
                        <div className="cabecera">
                            <button className="cabecera__btn-crear-carpeta btnRadius btn-new-green" onClick={handleOpenModalCrearCarpeta}>
                                <i className="icon-Crear"></i> Crea una carpeta</button>
                            <div className="paginacion">
                                <span className="paginacion__registros">1 - 5 de 5 registros</span>
                            </div>
                        </div>
                        <div className="carpetas">
                            <div className="busqueda-rapida">
                                <div className="busqueda-rapida__cont-buscar">
                                    <input type="search" placeholder="Buscar carpeta" className="form-control" />
                                    <button type="button" className="busqueda-rapida__btn-buscar icon-Buscar-click"></button>
                                </div>
                            </div>
                            <div className="list-carpetas">
                                <div className="list-carpetas__cont">
                                    <div className="carpeta">
                                        <div className="carpeta__cont-icon">
                                            <span className="icon-Favorito-click carpeta__icon--favorito"></span>
                                        </div>
                                        <span className="carpeta__nombre--favorito">Mis Favoritos</span>
                                    </div>
                                </div>
                                <div className="list-carpetas__cont">
                                    <div className="carpeta">
                                        <div className="carpeta__cont-icon">
                                            <span className="icon-Eliminar carpeta__icon--papelera">
                                            </span>
                                        </div>
                                        <span className="carpeta__nombre--papelera">Papelera</span>
                                    </div>
                                </div>

                                {carpetas.map((carpeta, index) => (
                                    <div className="list-carpetas__cont" key={index}>
                                        <div className="carpeta">
                                            <div className="carpeta__cont-icon">
                                                <span className="icon-Mis-carpetas carpeta__icon" style={{ color: carpeta.color }}>
                                                    <span className="path1">
                                                    </span>
                                                    <span className="path2">
                                                    </span>
                                                </span>
                                            </div>
                                            <span className="carpeta__nombre">{carpeta.nombre_carpeta}</span>
                                            <div className="carpeta__acciones">
                                                <i className="icon-Editar carpeta__btn-editar" onClick={() => editCarpeta(carpeta)}></i>
                                                <i className="icon-Eliminar carpeta__btn-eliminar" onClick={() => handleShowEliminarCarpeta(carpeta)}></i>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                
                <CrearCarpeta showModal={showModalCrearCarpeta} handleCloseModal={handleCloseModalCrearCarpeta} carpeta={carpetaSelected}/>
                
                <Modal show={showModalEliminarCarpeta} onHide={handleCloseEliminarCarpeta} id="modal_eliminar_carpeta" size="lg" centered>
                    <Modal.Header >
                        <h4 className="modal-title">¿Deseas eliminar la carpeta?</h4>
                        <button type="button" className="close icon-Cerrar-modal" onClick={handleCloseEliminarCarpeta}>
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </button>
                    </Modal.Header>

                    <Modal.Body>
                        <p className="modal-message">Después de eliminarla ya no podrás recuperarla, deberás crear una nueva. De igual manera no podrás recuperar los procesos de contratación que estén contenidos en esta carpeta.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <button className="btnRadius btn-action btn-new-danger" onClick={eliminarCarpeta}>
                            Eliminar
                        </button>
                        <button className="btnRadius btn-new-blue" onClick={handleCloseEliminarCarpeta}>
                            Conservar
                        </button>
                    </Modal.Footer>
                </Modal>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;