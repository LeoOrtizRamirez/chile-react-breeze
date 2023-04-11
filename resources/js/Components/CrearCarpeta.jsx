import React, { useEffect, useRef } from 'react'
import Modal from 'react-bootstrap/Modal';
import './CrearCarpeta.css';
import { useForm, Head } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";

const CrearCarpeta = ({ showModal, handleCloseModal, carpeta }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        id: "",
        id_usuario: "",
        nombre_carpeta: "",
        color: "",
        orden: "",
    });
    const submit = (e) => {
        e.preventDefault();
        if(data?.id != undefined){
            post(route("carpetas.update"), { onSuccess: () => handleCloseModal() });
        }else{
            post(route("carpetas.store"), { onSuccess: () => handleCloseModal() });
        }
        
    };

    useEffect(() => {
        setData(carpeta)
    }, [carpeta])

    const refInputNombre = useRef()

    return (
        <Modal show={showModal} onHide={handleCloseModal} centered size='lg' id="modal_crear_carpeta">
            <Modal.Header>
                <Modal.Title>
                    <h4 className="modal-title">
                        {data?.id != undefined ?
                            "Editar carpeta."
                            :
                            "Crear carpeta."
                        }
                    </h4>
                    <button type="button" className="close icon-Cerrar-modal icon-Cerrar-modal-click" onClick={handleCloseModal}>
                        <span className="path1"></span> <span className="path2"></span>
                    </button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form novalidate="novalidate" className="text-center" onSubmit={submit}>
                    <div className="crear_carpeta__cuerpo">
                        <p>
                            <img src="/public/images/bombillo.svg" width="35px" />
                            <span>Las carpetas te permiten mantener organizada toda tu información de interés y en un solo lugar.</span>
                        </p>
                        <div class="form">
                            <div className="space_gris_input text-left">
                                <label>Dale un nombre a tu carpeta:</label>
                                <input
                                    ref={refInputNombre}
                                    type="text"
                                    name="nombre_carpeta"
                                    className={`form-control text-left ${errors?.nombre_carpeta ? "is-invalid" : ""}`}
                                    value={data?.nombre_carpeta}
                                    onChange={(e) =>
                                        setData("nombre_carpeta", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.nombre_carpeta}
                                    className="input-error"
                                />
                            </div>
                            <div className="crear_carpeta__colors">
                                <h6><span className="icon-Color"></span>Selecciona un color para tu carpeta:</h6>
                                <div className="crear_carpeta__item_colors">
                                    <label className="color_active">
                                        <input type="radio" name="color" value="" onClick={(e) => setData("color", e.target.value)} checked={data?.color == "" || data?.color == undefined || data?.color == "#ffc107" ? true : false} />
                                        <img src="/public/images/carpetas/Aleatorio.svg" title="Aleatorio" alt="Aleatorio" />
                                    </label>
                                    <label className="">
                                        <input type="radio" name="color" value="#00A1C9" onClick={(e) => setData("color", e.target.value)} checked={data?.color == "#00A1C9" ? true : false} />
                                        <span style={{ backgroundColor: "rgb(0, 161, 201)" }}></span>
                                    </label>
                                    <label className="">
                                        <input type="radio" name="color" value="#FFC107" onClick={(e) => setData("color", e.target.value)} checked={data?.color == "#FFC107" ? true : false} />
                                        <span style={{ backgroundColor: "rgb(255, 193, 7)" }}></span>
                                    </label>
                                    <label className="">
                                        <input type="radio" name="color" value="#003DC9" onClick={(e) => setData("color", e.target.value)} checked={data?.color == "#003DC9" ? true : false} />
                                        <span style={{ backgroundColor: "rgb(0, 61, 201)" }}>
                                        </span>
                                    </label>
                                    <label className="">
                                        <input type="radio" name="color" value="#C900A1" onClick={(e) => setData("color", e.target.value)} checked={data?.color == "#C900A1" ? true : false} />
                                        <span style={{ backgroundColor: "rgb(201, 0, 161)" }}>
                                        </span>
                                    </label>
                                    <label className="">
                                        <input type="radio" name="color" value="#8C00C9" onClick={(e) => setData("color", e.target.value)} checked={data?.color == "#8C00C9" ? true : false} />
                                        <span style={{ backgroundColor: "rgb(140, 0, 201)" }}>
                                        </span>
                                    </label>
                                    <label className="">
                                        <input type="radio" name="color" value="#C9003D" onClick={(e) => setData("color", e.target.value)} checked={data?.color == "#C9003D" ? true : false} />
                                        <span style={{ backgroundColor: "rgb(201, 0, 61)" }}>
                                        </span>
                                    </label>
                                    <label className="">
                                        <input type="radio" name="color" value="#73C914" onClick={(e) => setData("color", e.target.value)} checked={data?.color == "#73C914" ? true : false} />
                                        <span style={{ backgroundColor: "rgb(115, 201, 20)" }}>
                                        </span>
                                    </label>
                                    <label className="">
                                        <input type="radio" name="color" value="#686868" onClick={(e) => setData("color", e.target.value)} checked={data?.color == "#686868" ? true : false} />
                                        <span style={{ backgroundColor: "rgb(104, 104, 104)" }}>
                                        </span>
                                    </label>
                                    <label className="">
                                        <input type="radio" name="color" value="#000000" onClick={(e) => setData("color", e.target.value)} checked={data?.color == "#000000" ? true : false} />
                                        <span style={{ backgroundColor: "rgb(0, 0, 0)" }}>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btnsModal text-center">
                        <button type="button" class="btnRadius btn-new-gray">Atrás</button>
                        <button type="submit" class="btnRadius btn-new-green">
                            {data?.id != undefined ?
                                "Editar"
                                :
                                "Crea una carpeta"
                            }
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default CrearCarpeta