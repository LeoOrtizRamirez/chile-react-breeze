import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
import './Index.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Modal from "react-bootstrap/Modal";

/*Toast*/
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import '../../../css/estilos-toast.css'
import "../../../css/font-unicolor.css";
/*Toast*/

const Index = ({ auth, actividades_economicas }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastIcon, setToastIcon] = useState("");
    const [fakeSectores, setFakeSectores] = useState(actividades_economicas);
    const [sectores, setSectores] = useState(actividades_economicas);
    const [showSegmento, setShowSegmento] = useState(false);
    const [showActividadEconomica, setShowActividadEconomica] = useState(false);
    const [selectedSegmento, setSelectedSegmento] = useState(0);
    const [selectedActividadEconomica, setSelectedActividadEconomica] = useState(0);
    const [inputActividadEconomica, setInputActividadEconomica] = useState({
        id: 0,
        nombre: "",
    });
    const [segmentos, setSegmentos] = useState([]);
    const [actividadesEconomicas, setActividadesEconomicas] = useState([]);
    const [showModalActividadEconomica, setShowModalActividadEconomica] = useState(false);
    const handleCloseModalActividadEconomica = () => setShowModalActividadEconomica(false);
    const handleShowModalActividadEconomica = () => {
        if (inputActividadEconomica.id != 0) {
            setShowModalActividadEconomica(true)
        } else {
            setToastMessage("Debes seleccionar una Actividad Ecónomica")
            setToastIcon('icon-error')
            setShowToast(true)
        }
    };
    console.log("Actividad economica")
    console.log(inputActividadEconomica)
    const editActividadEconomica = () => {
        if (inputActividadEconomica.id != 0) {
            console.log(inputActividadEconomica)
           /*  window.location.replace('/actividades-economicas/' + inputActividadEconomica.id + '/edit') */
        } else {
            setToastMessage("Debes seleccionar una Actividad Ecónomica")
            setToastIcon('icon-error')
            setShowToast(true)
        }
    }

    const getSegmento = (parent) => {
        //setSectores(fakeSectores);
        const input_filter = parent
        const pattern = new RegExp(input_filter, "i");
        const FilteredActividadesEcomomicas = fakeSectores.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });
        setSegmentos(FilteredActividadesEcomomicas);
        setShowSegmento(!showSegmento)
        setSelectedSegmento(parent)
    }

    const getActividadEconomica = (parent) => {
        //setSectores(fakeSectores);
        const pattern = new RegExp(parent, "i");
        const FilteredActividadesEcomomicas = fakeSectores.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });
        setActividadesEconomicas(FilteredActividadesEcomomicas);
        setShowActividadEconomica(!showActividadEconomica)
        setSelectedActividadEconomica(parent)
    }

    const checked = (actividad_economica) => {
        setInputActividadEconomica(actividad_economica)
    }

    const filterActividadEconomica = (e) => {
        const pattern = new RegExp(e.target.value, "i");
        const FilteredActividadesEcomomicas = fakeSectores.filter(function (el) {
            if (pattern.test(el.nombre)) {
                return el;
            }
        });
        setSectores(FilteredActividadesEcomomicas);
        setShowActividadEconomica(!showActividadEconomica)
    }


    const deleteActividadEconomica = () => {

        fetch('/actividades-economicas/' + inputActividadEconomica.id + '/delete')
            .then((response) => response.json())
            .then((data) => {
                if (data.type == "Success") {
                    setToastIcon('icon-check')
                    var new_data = actividadesEconomicas.filter(ae => ae.id != inputActividadEconomica.id);
                    setActividadesEconomicas(new_data)
                    setInputActividadEconomica({id: 0, nombre: ''})
                } else {
                    setToastIcon('icon-error')
                }
                setToastMessage(data.message)
                setShowToast(true)
                setShowModalActividadEconomica(false)
            })
    }
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Actividades económicas" />
            <ToastContainer position='bottom-start'>
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <div className={`notification-toast ${toastIcon == "icon-error" ? "error" : "success"}`}>
                        <span className={`toast-icon ${toastIcon == "icon-error" ? "toast-danger" : "toast-success"}`}>
                            <span className={toastIcon}></span>
                        </span>
                        <p className="title">{toastMessage}</p>
                        <button
                            type="button"
                            className="icon-close m-auto"
                            onClick={() => setShowToast(false)}
                        />
                    </div>
                </Toast>
            </ToastContainer>
            <div className="contenedor-planes">
                <div className="posicion-opciones-planes">
                    <MenuOpciones />
                </div>
                <div className="bg-white overflow-auto w-full text-center margen-superior">
                    <h2 className="name_section_app">Actividad económica</h2>
                    <div className="container mt-4">
                        <div className="tree_categorias tree_1">
                            <div className="tree_categorias__busqueda mb-3 mb-md-4">
                                <div className="mx-auto">
                                    <input
                                        type="text"
                                        placeholder="Busca por actividad económica"
                                        autoComplete="off"
                                        className="form-control m-auto"
                                        onChange={filterActividadEconomica}
                                    />
                                    <i className="icon-Cancelar"></i>
                                    <button type="button" className="icon-Buscar-click"><i className="bi bi-search"></i></button>
                                    <br></br>
                                    <div className="botones">
                                        <Nav.Link href={route("actividades-economicas.create")} className="flex  ml-4 text-probar " >
                                            <i className="bi bi-plus-square-fill"></i>
                                        </Nav.Link>
                                        <Nav.Link onClick={editActividadEconomica} className="flex  ml-4 text-probar " >
                                            <i className="bi bi-pencil-fill"></i>
                                        </Nav.Link>
                                        <Nav.Link onClick={handleShowModalActividadEconomica} className="flex  ml-4 text-probar " >
                                            <i className="bi bi-trash3"></i>
                                        </Nav.Link>
                                    </div>
                                    {sectores.map((sector) => (
                                        <>
                                            {sector.id_padre_sub_categoria == null &&
                                                <>
                                                    <div className="tree-content mt-3 sector" key={sector.id} onClick={() => getSegmento(sector.id)}>
                                                        <i className={`tree-arrow has-child ${sector.childs.length > 0 ? "bi bi-chevron-down" : ""}`}></i>
                                                        <span className="tree-anchor">
                                                            <span className="tree-division tree-division1">
                                                                <span className="tree-division__title my-auto">{sector.nombre}</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    {showSegmento && sector.id == selectedSegmento &&
                                                        <ul className="tree-children">
                                                            {segmentos.map((segmento) => (


                                                                <li data-id="20504" className="tree-node has-child expanded draggable">
                                                                    <div className="tree-content segmento" onClick={() => getActividadEconomica(segmento.id)}>
                                                                        <i className="tree-arrow expanded has-child ltr"></i>
                                                                        {/* <i className="tree-checkbox"></i> */}
                                                                        <span className="tree-anchor">
                                                                            <span className="tree-division tree-division1">
                                                                                <span className="tree-division__title my-auto">{segmento.nombre}</span>
                                                                            </span>
                                                                        </span>
                                                                    </div>

                                                                    {showActividadEconomica && selectedActividadEconomica == segmento.id &&
                                                                        <ul className="tree-children">
                                                                            {actividadesEconomicas.map((childs,index) => (
                                                                                <li className="tree-node draggable">
                                                                                    <div className="tree-content actividad-economica" onClick={() => checked(childs)}>
                                                                                        <input
                                                                                            type="radio"
                                                                                            name="actividad_economica"
                                                                                            onClick={() => checked(childs)}
                                                                                            checked={childs.id == inputActividadEconomica.id ? "checked" : ""}
                                                                                        />
                                                                                        <span className="tree-anchor children">
                                                                                            <span className="tree-division tree-division1">
                                                                                                {/*  <span className="tree-division__title my-auto">{childs.nombre}</span> */}
                                                                                                <>
                                                                                                    {index % 2 == 0 ? (
                                                                                                        <span className="tree-division__title my-auto">{childs.nombre}</span>
                                                                                                    ) : (
                                                                                                        <span className="tree-division__title-gray my-auto">{childs.nombre}</span>
                                                                                                    )}
                                                                                                </>
                                                                                            </span>
                                                                                        </span>
                                                                                    </div>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    }
                                                                </li>
                                                            ))}

                                                        </ul>
                                                    }
                                                </>
                                            }
                                        </>

                                    ))}

                                </div>
                            </div>
                        </div>
                        <Modal
                            show={showModalActividadEconomica}
                            onHide={handleCloseModalActividadEconomica}
                            id="removeActividadEconomica"
                            className="modal-dialog-centered"
                        >
                            <Modal.Header id="removeActividadEconomicaHeader">
                                <h5 className="modal-title">Eliminar</h5>
                                <button type="button" className="btn-close btn-close-white" onClick={handleCloseModalActividadEconomica}></button>
                            </Modal.Header>
                            <Modal.Body id="removeActividadEconomicaBody">
                                <p>Desea eliminar la actividad económica ({inputActividadEconomica.id}) {inputActividadEconomica.nombre}?</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <button type="submit" className="btn btnRadius btn-new-blue mr-2" onClick={handleCloseModalActividadEconomica}>Cancelar</button>
                                <button
                                    onClick={deleteActividadEconomica}
                                    className="btn btnRadius btn-new-red ml-2">
                                    Eliminar</button>
                            </Modal.Footer>
                        </Modal>


                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
};

export default Index;