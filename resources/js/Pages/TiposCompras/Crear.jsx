import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "./Crear.css";

/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";
import "../../../css/font-web.css";
/*Toast*/

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

/*Form */
import Form from "react-bootstrap/Form";
import { useForm, Head } from "@inertiajs/inertia-react";
/*Form */

const Crear = ({ auth, tiposcompras, solo_sectores }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const { data, setData, post, processing, reset, errors } = useForm({
        id: "",
        nombre: "",
        sector: "",
        segmento: "",
        tipo_categoria: 5,
    });
    const [fakeSectores, setFakeSectores] = useState(tiposcompras);
    const [sectores, setSectores] = useState(solo_sectores);
    const [segmentos, setSegmentos] = useState([]);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            post(route("storeTiposCompras"), { onSuccess: () => reset() });
        }
    };

    useEffect(() => {
        if (Object.entries(errors).length > 0) {
            var responses = Object.values(errors);
            var message = "";
            {
                responses.map((response) => (message += response));
            }
            setToastMessage(message);
            setShowToast(true);
        }
    }, [errors]);

    const getSegmentos = (e) => {
        setData("sector", e.target.value);
        var parent = e.target.value;
        const input_filter = parent;
        const pattern = new RegExp(input_filter, "i");
        const FilteredTiposCompras = fakeSectores.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });
        setSegmentos(FilteredTiposCompras);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Tipos Compras" />
            <ToastContainer position="bottom-start">
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={300000}
                    autohide
                >
                    <div className="notification-toast error">
                        <span className="toast-icon toast-danger">
                            <span className="icon-error"></span>
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
                    <h2 className="name_section_app">Crear Tipos Compras</h2>
                    <div className="container mt-4">
                        <Form
                            id="form"
                            name="form"
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            <Form.Group className="row">
                                <div className="col-12 col-sm-4">
                                    <Form.Label
                                        htmlFor=""
                                        for="validationInput"
                                        className="bloque__registro-form-title-label"
                                    >
                                        Tipo de entidad
                                    </Form.Label>
                                </div>
                                <div className="col-12 col-sm-8">
                                    <Form.Select
                                        type="text"
                                        name="sector"
                                        className="sector"
                                        onChange={getSegmentos}
                                        pattern="^[A-Za-z\s]+$"
                                        required
                                    >
                                        <option
                                            value=""
                                            disabled
                                            selected
                                            hidden
                                        >
                                            Selecciona una entidad
                                        </option>
                                        {sectores.map((sector) => (
                                            <option value={sector.id}>
                                                {sector.nombre}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                            </Form.Group>
                            <Form.Group className="row mt-3">
                                <div className="col-12 col-sm-4">
                                    <Form.Label
                                        htmlFor=""
                                        for="validationInput"
                                        className="bloque__registro-form-title-label"
                                    >
                                        Nombre Tipos Compras
                                    </Form.Label>
                                </div>
                                <div className="col-12 col-sm-8">
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        value={data.nombre}
                                        onChange={(e) =>
                                            setData("nombre", e.target.value)
                                        }
                                        className="actividad-economica"
                                        pattern="^[A-Za-z\s]+$"
                                        required
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="mt-4">
                                <button
                                    type="submit"
                                    className={`btn btnRadius btn-new-blue mr-2`}
                                >
                                    Crear
                                </button>
                                <a
                                    href={route("indexTiposCompras")}
                                    className="btn btnRadius btn-new-red ml-2"
                                >
                                    Cancelar
                                </a>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Crear;
