import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "./Editar.css";

/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";
import "../../../css/font-web.css";
/*Toast*/

/*Form */
import Form from "react-bootstrap/Form";
import { useForm, Head } from "@inertiajs/inertia-react";
/*Form */

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const Editar = ({ auth, actividades_economicas, solo_sectores, ae_actual }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const { data, setData, patch, processing, reset, errors } = useForm({
        id: ae_actual.id,
        nombre: ae_actual.nombre,
        sector: ae_actual.parent.id_padre_sub_categoria,
        segmento: ae_actual.id_padre_sub_categoria,
        tipo_categoria: 3,
        new_id: ae_actual.id,
    });

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            patch(route("updateLocalizacion", data.id), {
                onSuccess: () => reset(),
            });
        }
    };

    const [fakeSectores, setFakeSectores] = useState(actividades_economicas);
    const [sectores, setSectores] = useState(solo_sectores);
    const [segmentos, setSegmentos] = useState([]);

    const getSegmentos = (value) => {
        setData("sector", value);
        const pattern = new RegExp(value, "i");
        const FilteredActividadesEcomomicas = fakeSectores.filter(function (
            el
        ) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });
        setSegmentos(FilteredActividadesEcomomicas);
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

    useEffect(() => {
        getSegmentos(data.sector);
    }, []);

    const submit = (e) => {
        e.preventDefault();
        patch(route("updateLocalizacion", data.id), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Localización" />
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
                    <h2 className="name_section_app">
                        Edición comuna o ciudad
                    </h2>
                    <div className="container mt-4">
                        <Form
                            id="form"
                            name="form"
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            <Form.Group className="row mt-3">
                                <div className="col-12 col-sm-4">
                                    <Form.Label
                                        htmlFor=""
                                        for="validationInput"
                                        className="bloque__registro-form-title-label"
                                    >
                                        Región
                                    </Form.Label>
                                </div>
                                <div className="col-12 col-sm-8">
                                    <Form.Select
                                        name="segmento"
                                        className="segmento"
                                        id=""
                                        onChange={(e) =>
                                            setData("segmento", e.target.value)
                                        }
                                        value={data.segmento}
                                    >
                                        <option value="">
                                            Selecciona una región
                                        </option>
                                        {segmentos.map((segmento) => (
                                            <option
                                                key={segmento.id}
                                                value={segmento.id}
                                            >
                                                {segmento.nombre}
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
                                        Nombre de la comuna o ciudad
                                    </Form.Label>
                                </div>
                                <div className="col-12 col-sm-8">
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombre de la comuna o ciudad"
                                        value={data.nombre}
                                        onChange={(e) =>
                                            setData("nombre", e.target.value)
                                        }
                                        className="actividad-economica"
                                        required
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="mt-4">
                                <button
                                    type="submit"
                                    className={`btn btnRadius btn-new-blue mr-2`}
                                >
                                    Editar
                                </button>
                                <a
                                    href={route("indexLocalizacion")}
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

export default Editar;
