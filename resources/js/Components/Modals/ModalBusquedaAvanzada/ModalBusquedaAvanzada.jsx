import React, { useState, useRef, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import BusquedaEstado from "./BusquedaEstado";
import BusquedaUbicacion from "./BusquedaUbicacion";
import BusquedaActividad from "./BusquedaActividad";
import BusquedaTiposCompras from "./BusquedaTiposCompras";
import { Head } from "@inertiajs/inertia-react";
import "./ModalBusquedaAvanzada.css";

export const ModalBusquedaAvanzada = ({
    showBusquedaAvanzada,
    handleCloseBusquedaAvanzada,
    handleBusqueda,
}) => {
    const [formValues, setFormValues] = useState({
        entidad_contratante: "",
        objeto: "",
        codigo_proceso: "",
        modalidad: "",
        actividadEconomica: "",
        ubicacion: "",
        estado_proceso: "",
        portalOrigen: "",
        cuantiaDesde: "",
        cuantiaHasta: "",
        fecha_desde: "",
        fecha_hasta: "",
        contratista: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Reinicia todos los input
    const handleClear = () => {
        setFormValues({
            entidad_contratante: "",
            objeto: "",
            codigo_proceso: "",
            modalidad: "",
            actividadEconomica: "",
            ubicacion: "",
            estado_proceso: "",
            portalOrigen: "",
            cuantiaDesde: "",
            cuantiaHasta: "",
            fecha_desde: "",
            fecha_hasta: "",
            contratista: "",
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes hacer lo que necesites con los valores del formulario
        // console.log(formValues);
        // debugger
        handleBusqueda(getUrlParams());
    };

    const getUrlParams = () => {
        //Obtener inputs de formulario y guardarlos en objeto
        var form = document.getElementById("form_busqueda_avanzada");
        let formData = new FormData(form);
        let object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        const querystring = encodeQueryData(object);
        // debugger;
        return querystring;
    };

    const encodeQueryData = (data) => {
        //Convertir objeto en url
        const ret = [];
        for (let d in data)
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return ret.join("&");
    };

    // Selecionamos el elemento de entrada utilizando una referencia
    const inputRef = useRef(null);
    // Asignamos un estado_proceso para el tipo de entrada (type)
    // Inicialmente,  el tipo de entrada es un campo de texto.
    const [type, setType] = useState("text");

    // Inicio Controladores de eventos para escuchar los cambios  onFocus y onBlur

    // onFocus, actualiza el estado_proceso del tipo de entrada del campo de texto a un campo de fecha utilizando el método setType().
    const onFocus = () => {
        setType("date");
        inputRef.current.defaultValue = "";
    };

    // onBlur, actualiza el estado_proceso del tipo de entrada del campo de fecha a un campo de texto utilizando el método setType().
    const onBlur = () => {
        setType("text");
        // inputRef.current.defaultValue = '2022-01-01';
    };
    // Fin Controladores

    // Inicio Modal estado_proceso
    const [showBusquedaEstado, setShowBusquedaEstado] = useState(false);
    const handleCloseBusquedaEstado = () => setShowBusquedaEstado(false);
    const handleShowBusquedaEstado = () => setShowBusquedaEstado(true);
    // Fin Modal estado_proceso

    // Inicio Modal ubicacion
    const [showBusquedaUbicacion, setShowBusquedaUbicacion] = useState(false);
    const handleCloseBusquedaUbicacion = () => setShowBusquedaUbicacion(false);
    const handleShowBusquedaUbicacion = () => setShowBusquedaUbicacion(true);
    // Fin Modal ubicacion

    // Inicio Modal actividad
    const [showBusquedaActividad, setShowBusquedaActividad] = useState(false);
    const handleCloseBusquedaActividad = () => setShowBusquedaActividad(false);
    const handleShowBusquedaActividad = () => setShowBusquedaActividad(true);
    // Fin Modal actividad

    // Inicio Modal actividad
    const [showBusquedaTiposCompras, setShowBusquedaTiposCompras] =
        useState(false);
    const handleCloseBusquedaTiposCompras = () =>
        setShowBusquedaTiposCompras(false);
    const handleShowBusquedaTiposCompras = () =>
        setShowBusquedaTiposCompras(true);
    // Fin Modal actividad

    return (
        <Modal
            size="lg"
            dialogClassName=""
            contentClassName=""
            backdropClassName=""
            className="content-modal-busqueda-avanzada"
            centered
            show={showBusquedaAvanzada}
            onHide={handleCloseBusquedaAvanzada}
            id="modalBusquedaAvanzada"
        >
            <Modal.Header closeButton id="header-modal-busqueda-avanzada">
                <Head title="Busqueda Avanzada" />
                <button
                    className="circulo"
                    onClick={handleCloseBusquedaAvanzada}
                >
                    <i class="bi bi-arrow-left iconos"></i>
                </button>
                <div className="titulo">
                    <span>Búsqueda avanzada</span>
                </div>
            </Modal.Header>
            <Modal.Body className="test">
                <div id="modal-busqueda-avanzada">
                    <Form
                        onSubmit={handleSubmit}
                        className="form-container"
                        id="form_busqueda_avanzada"
                    >
                        <span>
                            <i class="bi bi-bank iconos"></i>
                            Entidad contratante:
                        </span>
                        <input
                            type="text"
                            name="entidad_contratante"
                            value={formValues.entidad_contratante}
                            onChange={handleChange}
                            placeholder="Ingresa la entidad contratante"
                        />
                        <span>
                            <i class="bi bi-list-nested iconos"></i>
                            Objeto:
                        </span>
                        <input
                            type="text"
                            name="objeto"
                            value={formValues.objeto}
                            onChange={handleChange}
                            placeholder="Ingresa palabras claves del objeto del proceso"
                        />
                        <div className="pareja">
                            <div className="size">
                                <span>
                                    <i class="bi bi-asterisk iconos"></i>
                                    Numero de contrato:
                                </span>
                                <input
                                    type="text"
                                    name="codigo_proceso"
                                    value={formValues.codigo_proceso}
                                    onChange={handleChange}
                                    placeholder="Ingresa el número del proceso"
                                />
                            </div>
                            <div className="size">
                                <span>
                                    <i class="bi bi-tag iconos"></i>
                                    Modalidad:
                                </span>
                                <input
                                    type="text"
                                    name="modalidad"
                                    value={formValues.modalidad}
                                    onChange={handleChange}
                                    onClick={handleShowBusquedaTiposCompras}
                                    placeholder="Ingresa la modalidad de contrato"
                                />
                                <BusquedaTiposCompras
                                    showBusquedaTiposCompras={
                                        showBusquedaTiposCompras
                                    }
                                    handleCloseBusquedaTiposCompras={
                                        handleCloseBusquedaTiposCompras
                                    }
                                ></BusquedaTiposCompras>
                            </div>
                        </div>
                        <span>
                            <i class="bi bi-lightning-fill iconos"></i>
                            Actividad económica:
                        </span>
                        <input
                            type="text"
                            name="actividadEconomica"
                            value={formValues.actividadEconomica}
                            onChange={handleChange}
                            onClick={handleShowBusquedaActividad}
                            placeholder="Ingresa la(s) actividade(s) económica(s)"
                        />
                        <BusquedaActividad
                            showBusquedaActividad={showBusquedaActividad}
                            handleCloseBusquedaActividad={
                                handleCloseBusquedaActividad
                            }
                        ></BusquedaActividad>
                        <span>
                            <i class="bi bi-geo-alt-fill iconos"></i>
                            Ubicación:
                        </span>
                        <input
                            type="text"
                            name="ubicacion"
                            value={formValues.ubicacion}
                            onChange={handleChange}
                            onClick={handleShowBusquedaUbicacion}
                            placeholder="Ingresa la(s) ubicacióne(s)"
                        />
                        <BusquedaUbicacion
                            showBusquedaUbicacion={showBusquedaUbicacion}
                            handleCloseBusquedaUbicacion={
                                handleCloseBusquedaUbicacion
                            }
                        ></BusquedaUbicacion>
                        <div className="pareja">
                            <div className="size">
                                <span>
                                    <i class="bi bi-clipboard2-fill iconos"></i>
                                    Estados:
                                </span>
                                <input
                                    type="text"
                                    onClick={handleShowBusquedaEstado}
                                    placeholder="Selecione los estado_procesos de proceso"
                                    // value={checkedValues}
                                />
                                <BusquedaEstado
                                    showBusquedaEstado={showBusquedaEstado}
                                    handleCloseBusquedaEstado={
                                        handleCloseBusquedaEstado
                                    }
                                ></BusquedaEstado>
                            </div>
                            <div className="size">
                                <span>
                                    <i class="bi bi-globe iconos"></i>
                                    Portal de origen:
                                </span>
                                <input
                                    type="text"
                                    name="portalOrigen"
                                    value={formValues.portalOrigen}
                                    onChange={handleChange}
                                    placeholder="Ingresa el portal de origen"
                                />
                            </div>
                        </div>
                        <div className="pareja">
                            <div className="size">
                                <span>
                                    <i class="bi bi-cash-coin iconos"></i>
                                    Cuantía:
                                </span>
                                <input
                                    type="text"
                                    name="cuantiaDesde"
                                    value={formValues.cuantiaDesde}
                                    onChange={handleChange}
                                    placeholder="Desde"
                                />
                            </div>
                            <div className="size">
                                <span>&nbsp;</span>
                                <input
                                    type="text"
                                    name="cuantiaHasta"
                                    value={formValues.cuantiaHasta}
                                    onChange={handleChange}
                                    placeholder="Hasta"
                                />
                            </div>
                        </div>
                        <div className="pareja">
                            <div className="size">
                                <span>
                                    <i class="bi bi-calendar-date-fill iconos"></i>
                                    Fecha de publicación:
                                </span>
                                <input
                                    type={type}
                                    name="fecha_desde"
                                    value={formValues.fecha_desde}
                                    onChange={handleChange}
                                    placeholder="Inicio"
                                    ref={inputRef}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                />
                            </div>
                            <div className="size">
                                <span>&nbsp;</span>
                                <input
                                    type={type}
                                    name="fecha_hasta"
                                    value={formValues.fecha_hasta}
                                    onChange={handleChange}
                                    placeholder="Fin"
                                    ref={inputRef}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                />
                            </div>
                        </div>
                        <span>
                            <i class="bi bi-person-fill iconos"></i>
                            Contratista(s):
                        </span>
                        <input
                            type="text"
                            name="contratista"
                            value={formValues.contratista}
                            onChange={handleChange}
                            placeholder="Ingresa el contratista"
                        />
                        <div className="botones">
                            <button
                                className="limpiar"
                                type="button"
                                onClick={handleClear}
                            >
                                Limpiar
                            </button>
                            <button className="buscar" type="submit">
                                Buscar
                            </button>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
            {/* <Modal.Footer></Modal.Footer> */}
        </Modal>
    );
};
export default ModalBusquedaAvanzada;
