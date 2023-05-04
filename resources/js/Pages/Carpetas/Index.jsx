import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "./Index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CrearCarpeta from "@/Components/CrearCarpeta";
import { Modal, Button } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';

import { Toast } from 'primereact/toast';

const Index = ({ auth, carpetas }) => {
    const [folders, setFolders] = useState(carpetas)
    const [showModalCrearCarpeta, setShowModalCrearCarpeta] = useState(false);
    const handleOpenModalCrearCarpeta = () => {
        setShowModalCrearCarpeta(true);
    };
    const handleCloseModalCrearCarpeta = () => {
        setCarpetaSelected(null)
        setShowModalCrearCarpeta(false);
    };

    const handleGlobalLoading = (loading) => {
        setGlobalLoading(loading)
    }

    const [carpetaSelected, setCarpetaSelected] = useState([])

    const editCarpeta = (carpeta) => {
        setCarpetaSelected(carpeta)
        setShowModalCrearCarpeta(true)
    }

    const eliminarCarpeta = () => {
        setGlobalLoading(true)
        Inertia.post('/cliente/carpeta/eliminar', carpetaSelected, {
            onSuccess: () => {
                handleCloseEliminarCarpeta()
                setGlobalLoading(false)
                toastBL.current.show({ severity: 'success', summary: 'Carpeta eliminada exitosamente.'/* , detail: 'Message Content' */, life: 3000 });
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

    const [globalLoading, setGlobalLoading] = useState(false)

    const handleCarpetas = (carpetas) => {
        setGlobalLoading(false)
    }

    const toastBL = useRef(null);

    const refInputSearchFolder = useRef(null);
    const [inputSearchFolder, setInputSearchFolder] = useState("")
    const filterCarpetas = (event) => {
        console.log(event)
        if (event?.key === 'Enter' || event?.type == "click") {
            setInputSearchFolder(refInputSearchFolder.current.value)
            setGlobalLoading(true)
            let token = document.querySelector('meta[name="csrf-token"]')
            axios.get('/cliente/carpeta/get-carpetas-paginadas?filtroBusqueda=' + refInputSearchFolder.current.value, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log(response.data)
                    setFolders(response.data)
                    setGlobalLoading(false)
                })
                .catch(error => {
                    console.error('Request failed:', error.response.status, error.response.data);
                });
        }
    }
    return (
        <>
            <AuthenticatedLayout auth={auth} page={'carpetas'} carpetas={carpetas} globalLoading={globalLoading}>
                <div className="content_blank_interno margin_left_layout">
                    <div className="col">
                        <h2 className="name_seccion_app">Administrar carpetas</h2>
                    </div>
                    <div>
                        <div className="cabecera">
                            <button className="cabecera__btn-crear-carpeta btnRadius btn-new-green" onClick={handleOpenModalCrearCarpeta}>
                                <i className="icon-Crear"></i> Crea una carpeta</button>
                            {inputSearchFolder != "" && folders.length > 0 && 
                                <div className="paginacion">
                                    {inputSearchFolder != "" ?
                                        <span className="paginacion__registros">1 - {folders.length} de {folders.length} registros</span>
                                        :
                                        <span className="paginacion__registros">1 - {folders.length + 2} de {folders.length + 2} registros</span>
                                    }
                                </div>
                            }
                        </div>
                        <div className="carpetas">
                            <div className="busqueda-rapida">
                                <div className="busqueda-rapida__cont-buscar">
                                    <input
                                        type="text"
                                        placeholder="Buscar carpeta"
                                        className="form-control"
                                        /* onChange={(e) => setInputSearchFolder(e.target.value)} */
                                        onKeyDown={filterCarpetas}
                                        /* value={inputSearchFolder} */
                                        ref={refInputSearchFolder}
                                    />
                                    <button type="button" className="busqueda-rapida__btn-buscar icon-Buscar-click" onClick={filterCarpetas}></button>
                                </div>
                            </div>
                            {folders.length > 0 &&
                                <div className="list-carpetas">
                                    {inputSearchFolder == "" &&
                                        <>
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
                                        </>
                                    }

                                    {folders.map((carpeta, index) => (
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
                            }
                        </div>
                        <div className="mensajes-busqueda">
                            {folders.length == 0 && inputSearchFolder == "" &&
                                <div className="mensajes-busqueda">
                                    <div id="mensajes-sin-carpeta" className="container content_blank_intern">
                                        <div className="row">
                                            <div className="col-12 col-lg-5 text-center">
                                                <img src="/public/images/mensajes-personalizados/sin-carpetas-modal.svg" alt="sin carpetas" className="img-fluid imagen-sin-carpetas" />
                                            </div>
                                            <div className="col-12 col-lg-7 my-auto">
                                                <h5 className="text-center titulo-personalizado">Aún no has creado una carpeta.</h5>
                                                <div className="cont-mensaje-personalizado"><i className="icon-Bombillo"></i>
                                                    <p className="mensaje-personalizado">Las carpetas te permiten mantener organizada toda tu información de interés y en un solo lugar.</p>
                                                </div>
                                                <button className="btn btn-new-green btnRadius mx-auto d-block btn-sin-perfil-crear" onClick={handleOpenModalCrearCarpeta}>
                                                    <i className="icon-Crear"></i> Crea tu primera carpeta
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {folders.length == 0 && inputSearchFolder != "" &&
                                <div id="mensajes-personalizado-busqueda" className="container-fluid content_blank_interno">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-4 col-sm-4 offset-md-1 offset-sm-1">
                                            <img src="https://col.licitaciones.info/img/mensajes-personalisados/sin-resultados-busqueda.png" alt="" className="img-fluid mensaje-imagen" />
                                        </div>
                                        <div className="col-md-5 col-sm-5 offset-sm-1 offset-md-1">
                                            <div className="estructura-mensaje-personalisado">
                                                <h4 className="text-center titulo-personalizado"><b className="text-rojo">No se encontró</b> el resultado.</h4>
                                                <div className="position-relative">
                                                    <span className="icon-Bombillo mensaje-icono"></span>
                                                    <p className="mensaje-personalizado d-block text-left">Prueba cambiando tus opciones de búsqueda e intentalo nuevamente.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <CrearCarpeta showModal={showModalCrearCarpeta} handleCloseModal={handleCloseModalCrearCarpeta} carpeta={carpetaSelected} handleCarpetas={handleCarpetas} globalLoading={handleGlobalLoading} />

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
                <Toast ref={toastBL} position="bottom-left" />
            </AuthenticatedLayout >
        </>
    );
};

export default Index;
