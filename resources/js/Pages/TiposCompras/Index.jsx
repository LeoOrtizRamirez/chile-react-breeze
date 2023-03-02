import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, Head } from "@inertiajs/inertia-react";
import "./Index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";

/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";
import "../../../css/font-unicolor.css";
/*Toast*/

const Index = ({ auth, tiposcompras }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastIcon, setToastIcon] = useState("");
   

    const [fakeTipoCompras, setFakeTipoCompras] = useState(tiposcompras);
    const [tipoCompras, setTipoComras] = useState(tiposcompras);

    const [showSegmentoTipoCompras, setShowSegmentoTipoCompras] = useState(false);
    const [showTipoCompra, setShowTipoCompra] = useState(false);
    const [selectedSegmentoTipoCompra, setSelectedSegmentoTipoCompra] = useState(0);
    const [selectedTipoCompra, setSelectedTipoCompra] = useState(0);

    const [openSegmentosTipoCompras, setOpenSegmentosTipoCompras] = useState([]);
    const [openTiposCompras, setOpenTiposCompras] = useState([]);

    const [inputTiposCompras, setInputTiposCompras] = useState({
        id: 0,
        nombre: "",
    });

    const [segmentosTipoCompras, setSegmentosTipoCompras] = useState([]);
    const [tiposCompras, setTiposCompras] = useState([]);
    const [showModalTipoCompra, setShowModalTipoCompra] = useState(false);
    const handleCloseModalTipoCompra = () => setShowModalTipoCompra(false);

    const handleShowModalTipoCompra = () => {
        if (inputTiposCompras.id != 0) {
            setShowModalTipoCompra(true);
        } else {
            setToastMessage("Debes seleccionar un tipo de compra");
            setToastIcon("icon-error");
            setShowToast(true);
        }
    };

    const editTiposCompras = () => {
        if (inputTiposCompras.id != 0) {
            window.location.replace(
                "/tiposcompras/" + inputTiposCompras.id + "/edit"
            );
        } else {
            setToastMessage("Debes seleccionar un tipo de compra");
            setToastIcon("icon-error");
            setShowToast(true);
        }
    };

    const getSegmentoTipoCompras = (parent) => {
        if (openSegmentosTipoCompras.includes(parent)) {
            //SE ELIMINA EL SECTOR AL QUE SE LE DIO CLICK SI YA EXISTE EN EL ARRAY OPENSEGMENTOS
            setOpenSegmentosTipoCompras(
                openSegmentosTipoCompras.filter((element) => element != parent)
            );
        } else {
            //SE AGREGA EL SECTOR AL QUE SE LE DIO CLICK SI NO EXISTE EN EL ARRAY OPENSEGMENTOS
            setOpenSegmentosTipoCompras([...openSegmentosTipoCompras, parent]); //SE AÑADE EL NUEVO PARENT
        }

        //SE BUSCAN LOS SEGMENTOS QUE TENGAN EL id_padre_sub_categoria == AL SECTOR QUE SE LE DIO CLICK
        const pattern = new RegExp(parent, "i");
        const FilteredSegmentos = tipoCompras.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });

        //EN LOS SEGMENTOS QUE SE ENCONTRARON
        FilteredSegmentos.forEach((element) => {
            if (!segmentosTipoCompras.includes(element)) {
                //SI NO EXISTE, SE AGREGA
                segmentosTipoCompras.push(element);
            } else {
                //SI YA EXISTE, SE ELIMINA
                const resultado = segmentosTipoCompras.filter(
                    (segmento) => segmento.id_padre_sub_categoria != parent
                );
                setSegmentosTipoCompras(resultado);
            }
        });
    };
    
    const checkedTipoCompras = (tipo_compra) => {
        setInputTiposCompras(tipo_compra);
    };

    const inputSearchTipoCompra = (e) => {
        if (e.target.value == "") {
            setTipoComras(fakeTipoCompras);
            setSegmentosTipoCompras([]);
            setTiposCompras([]);
            setOpenSegmentosTipoCompras([]);
            setOpenTiposCompras([]);
            return;
        }

        if (e.key === "Enter") {
            //SE BUSCAN LAS LOCALIZACIONES QUE COINCIDAN CON EL NOMBRE QUE SE INGRESO
            const pattern = new RegExp(e.target.value, "i");
            // debugger
            const FilteredTiposCompras = fakeTipoCompras.filter(function (el) {
                if (pattern.test(el.nombre)) {
                    return el;
                }
            });

            var tipo_compras_filtrados = [];
            var segmentos_filtrados_tipo_compras = [];
            var tipos_compras_filtrados = [];
            var open_tipos_compras = [];
            var open_segmentos_tipo_compras = [];

            // debugger;
            FilteredTiposCompras.forEach((element) => {
                if (element.id_padre_sub_categoria != null) {
                    //ae
                    tipos_compras_filtrados.push(element);
                    open_tipos_compras.push(element.id_padre_sub_categoria);

                    //BUSCAMOS
                    const padre = fakeTipoCompras.find(
                        (fs) => fs.id == element.id_padre_sub_categoria
                    );

                    const x = segmentos_filtrados_tipo_compras.find(
                        (fs) => fs.id == padre.id
                    );

                    if (!x) {
                        segmentos_filtrados_tipo_compras.push(padre);
                    }
                    if (!segmentos_filtrados_tipo_compras.includes(element)) {
                        segmentos_filtrados_tipo_compras.push(element);
                        open_segmentos_tipo_compras.push(element.id_padre_sub_categoria); // DESPLIEGA RESULTADOS
                    }
                }
            });

            //BUSCAR TODOS LOS regiones Y ciudades DE tipos_compras_filtrados
            var ae_sector = null;
            var ae_segmento = null;

            debugger
            tipos_compras_filtrados.forEach((ae) => {
                //OBTENER SECTOR DE LA ACTIVIDAD ECONOMICA
                //OBTENER TIPOS COMPRAS
                ae_sector = fakeTipoCompras.filter((fs) => fs.id == ae.id)[0];
                ae_segmento = fakeTipoCompras.filter(
                    (fs) => fs.id == ae.id_padre_sub_categoria
                )[0];

                //SI EL ae_sector NO ESTA INCLUIDO EN regiones
                // debugger
                if (!tipo_compras_filtrados.includes(ae_sector)) {
                    //BUSCAR Region Y GUARDAR
                    tipo_compras_filtrados.push(
                        fakeTipoCompras.filter(
                            (sector) => sector.id == ae.id_padre_sub_categoria
                        )[0]
                    );
                }
            });

            setTipoComras(tipo_compras_filtrados);
            setSegmentosTipoCompras(segmentos_filtrados_tipo_compras);
            setTiposCompras(tipos_compras_filtrados);
            setOpenSegmentosTipoCompras(open_segmentos_tipo_compras);
            setOpenTiposCompras(open_tipos_compras);
        }
    };

    const deleteTiposCompras = () => {
        fetch("/tiposcompras/" + inputTiposCompras.id + "/delete")
            .then((response) => response.json())
            .then((data) => {
                if (data.type == "Success") {
                    setToastIcon("icon-check");
                    var new_data = segmentosTipoCompras.filter(
                        (ae) => ae.id != inputTiposCompras.id
                    );
                    setSegmentosTipoCompras(new_data);
                    setInputTiposCompras({ id: 0, nombre: "" });
                } else {
                    setToastIcon("icon-error");
                }
                setToastMessage(data.message);
                setShowToast(true);
                setShowModalTipoCompra(false);
            });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Tipos Compras" />
            <ToastContainer position="bottom-start">
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={3000}
                    autohide
                >
                    <div
                        className={`notification-toast ${
                            toastIcon == "icon-error" ? "error" : "success"
                        }`}
                    >
                        <span
                            className={`toast-icon ${
                                toastIcon == "icon-error"
                                    ? "toast-danger"
                                    : "toast-success"
                            }`}
                        >
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
                <div className="bg-white overflow-auto w-full text-center margen-superior">
                    <h2 className="name_section_app">Tipos Compras</h2>
                    <div className="container mt-4">
                        <div className="tree_categorias tree_1">
                            <div className="tree_categorias__busqueda mb-3 mb-md-4">
                                <div className="mx-auto">
                                    <input
                                        type="text"
                                        placeholder="Buscar tipo de compra"
                                        autoComplete="off"
                                        className="form-control m-auto"
                                        onKeyDown={inputSearchTipoCompra}
                                    />
                                    <i className="icon-Cancelar"></i>
                                    <button
                                        type="button"
                                        className="icon-Buscar-click"
                                    >
                                        <i className="bi bi-search"></i>
                                    </button>
                                    <br></br>
                                    <div className="botones">
                                        <Nav.Link
                                            href={route("createTiposCompras")}
                                            className="flex  ml-4 text-probar "
                                        >
                                            <i className="bi bi-plus-square-fill"></i>
                                        </Nav.Link>
                                        <Nav.Link
                                            onClick={editTiposCompras}
                                            className="flex  ml-4 text-probar "
                                        >
                                            <i className="bi bi-pencil-fill"></i>
                                        </Nav.Link>
                                        <Nav.Link
                                            onClick={handleShowModalTipoCompra}
                                            className="flex  ml-4 text-probar "
                                        >
                                            <i className="bi bi-trash3"></i>
                                        </Nav.Link>
                                    </div>

                                    {tipoCompras.map((sector) => (
                                        <>
                                            {sector.id_padre_sub_categoria ==
                                                null && (
                                                <>
                                                    <div
                                                        id={sector.id}
                                                        className="tree-content mt-3 sector"
                                                        key={sector.id}
                                                        onClick={() =>
                                                            getSegmentoTipoCompras(
                                                                sector.id
                                                            )
                                                        }
                                                    >
                                                        <i
                                                            className={`tree-arrow has-child ${
                                                                sector.childs
                                                                    .length > 0
                                                                    ? "bi bi-chevron-down"
                                                                    : ""
                                                            }`}
                                                        ></i>
                                                        <span className="tree-anchor">
                                                            <span className="tree-division tree-division1">
                                                                <span className="tree-division__title my-auto">
                                                                    {
                                                                        sector.nombre
                                                                    }
                                                                    {sector.id}
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    {openSegmentosTipoCompras.includes(
                                                        sector.id
                                                    ) && (
                                                        <ul className="tree-children">
                                                            {segmentosTipoCompras.map(
                                                                (
                                                                    segmento,
                                                                    index
                                                                ) => (
                                                                    <>
                                                                        {sector.id ==
                                                                            segmento.id_padre_sub_categoria && (
                                                                            <li
                                                                                data-id="20504"
                                                                                className="tree-node has-child expanded draggable"
                                                                                onClick={() =>
                                                                                    checkedTipoCompras(
                                                                                        segmento
                                                                                    )
                                                                                }
                                                                            >
                                                                                <div
                                                                                    className="tree-content segmento"
                                                                                  
                                                                                >
                                                                                    <i className="tree-arrow expanded has-child ltr"></i>
                                                                                    <input
                                                                                        type="radio"
                                                                                        name="tipo_compra"
                                                                                        onClick={() =>
                                                                                            checked(
                                                                                                segmento
                                                                                            )
                                                                                        }
                                                                                        checked={
                                                                                            segmento.id ==
                                                                                            inputTiposCompras.id
                                                                                                ? "checked"
                                                                                                : ""
                                                                                        }
                                                                                    />

                                                                                    <span className="tree-anchor">
                                                                                        <span className="tree-division tree-division1">
                                                                                            <>
                                                                                                {index %
                                                                                                    2 ==
                                                                                                0 ? (
                                                                                                    <span className="tree-division__title my-auto">
                                                                                                        {
                                                                                                            segmento.nombre
                                                                                                        }
                                                                                                        {
                                                                                                            segmento.id
                                                                                                        }
                                                                                                    </span>
                                                                                                ) : (
                                                                                                    <span className="tree-division__title-gray my-auto">
                                                                                                        {
                                                                                                            segmento.nombre
                                                                                                        }
                                                                                                        {
                                                                                                            segmento.id
                                                                                                        }
                                                                                                    </span>
                                                                                                )}
                                                                                            </>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>

                                                                                {
                                                                                    openTiposCompras.includes(
                                                                                        segmento.id
                                                                                    )
                                                                                    // && (
                                                                                    //     <ul className="tree-children">
                                                                                    //         {tiposCompras.map(
                                                                                    //             (
                                                                                    //                 childs
                                                                                    //             ) => (
                                                                                    //                 <li className="tree-node draggable">
                                                                                    //                     <div
                                                                                    //                         className="tree-content actividad-economica"
                                                                                    //                         onClick={() =>
                                                                                    //                             checked(
                                                                                    //                                 childs
                                                                                    //                             )
                                                                                    //                         }
                                                                                    //                     >
                                                                                    //                         <span className="tree-anchor children">
                                                                                    //                             <span className="tree-division tree-division1">
                                                                                    //                                 <span className="tree-division__title my-auto">
                                                                                    //                                     {
                                                                                    //                                         childs.nombre
                                                                                    //                                     }
                                                                                    //                                 </span>
                                                                                    //                             </span>
                                                                                    //                         </span>
                                                                                    //                     </div>
                                                                                    //                 </li>
                                                                                    //             )
                                                                                    //         )}
                                                                                    //     </ul>
                                                                                    // )
                                                                                }
                                                                            </li>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </ul>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Modal
                            show={showModalTipoCompra}
                            onHide={handleCloseModalTipoCompra}
                            id="removeTipoCompra"
                            className="modal-dialog-centered"
                        >
                            <Modal.Header id="removeTipoCompraHeader">
                                <h5 className="modal-title">Eliminar</h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    onClick={handleCloseModalTipoCompra}
                                ></button>
                            </Modal.Header>
                            <Modal.Body id="removeTipoCompraBody">
                                <p>
                                    Desea eliminar el tipo de compra{" "}
                                    {inputTiposCompras.nombre}?
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <button
                                    type="submit"
                                    className="btn btnRadius btn-new-blue mr-2"
                                    onClick={handleCloseModalTipoCompra}
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={deleteTiposCompras}
                                    className="btn btnRadius btn-new-red ml-2"
                                >
                                     Eliminar
                                </button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div> 
        </AuthenticatedLayout>
    );
};

export default Index;
