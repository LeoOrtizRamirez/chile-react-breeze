import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Head } from "@inertiajs/inertia-react";
import "./BusquedaEstado.css";

export const BusquedaEstado = ({
    showBusquedaEstado,
    handleCloseBusquedaEstado,
}) => {
    return (
        <Modal
            size="md"
            dialogClassName=""
            contentClassName=""
            backdropClassName=""
            className=""
            centered
            show={showBusquedaEstado}
            onHide={handleCloseBusquedaEstado}
            id="BusquedaEstado"
        >
            <Modal.Header closeButton>
                <Head title="Busqueda estado" />
                <div className="titulo">
                    <span>Seleciona el estado</span>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="busqueda-estado">
                    <div>
                        <input
                            type="text"
                            className="buscador"
                            placeholder="Buscar estado"
                        />
                    </div>
                    <div>
                        <Form>
                            <div className="form">
                                <Form.Group>
                                    <Form.Check className="todos">
                                        <Form.Check.Label>
                                            Seleciona todos los estados
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="todos" />
                                    </Form.Check>
                                    <hr />
                                    <Form.Check>
                                        <Form.Check.Label>
                                            Convocatoria
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="convocatoria" />
                                    </Form.Check>
                                    <hr />
                                    <Form.Check>
                                        <Form.Check.Label>
                                            En evaluacion
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="evaluacion" />
                                    </Form.Check>
                                    <hr />
                                    <Form.Check>
                                        <Form.Check.Label>
                                            Adjudicado
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="adjudicado" />
                                    </Form.Check>
                                    <hr />
                                    <Form.Check>
                                        <Form.Check.Label>
                                            Liquidado
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="liquidado" />
                                    </Form.Check>
                                    <hr />
                                    <Form.Check>
                                        <Form.Check.Label>
                                            Terminado anormalmente o descartado
                                        </Form.Check.Label>
                                        <Form.Check.Input aria-label="terminado" />
                                    </Form.Check>
                                    <hr />
                                </Form.Group>
                                <button type="submit" className="boton">
                                    Seleccionar
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
            {/* <Modal.Footer></Modal.Footer> */}
        </Modal>
    );
};
export default BusquedaEstado;

// import React, { useState, useRef } from "react";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import { Head } from "@inertiajs/inertia-react";
// import "./BusquedaEstado.css";
// const BusquedaEstado = ({
//     onChange,
//     showBusquedaEstado,
//     handleCloseBusquedaEstado,
// }) => {
//     const [checked, setChecked] = useState({
//         checkbox1: false,
//         checkbox2: false,
//         checkbox3: false,
//         checkbox4: false,
//         checkbox5: false,
//     });
//     const handleAllChecked = (event) => {
//         const { checked: isChecked } = event.target;
//         setChecked({
//             checkbox1: isChecked,
//             checkbox2: isChecked,
//             checkbox3: isChecked,
//             checkbox4: isChecked,
//             checkbox5: isChecked,
//         });
//         const selectedValues = Object.keys(checked)
//             .filter((key) => checked[key])
//             .map((key) => key.replace("checkbox", ""));
//         onChange(selectedValues);
//     };
//     const handleCheckboxChange = (event) => {
//         const { id, checked: isChecked } = event.target;
//         setChecked({ ...checked, [id]: isChecked });
//         const selectedValues = Object.keys(checked)
//             .filter((key) => checked[key])
//             .map((key) => key.replace("checkbox", ""));
//         onChange(selectedValues);
//     };
//     return (
//         <Modal
//             size="md"
//             dialogClassName=""
//             contentClassName=""
//             backdropClassName=""
//             className=""
//             centered
//             show={showBusquedaEstado}
//             onHide={handleCloseBusquedaEstado}
//             id="BusquedaEstado"
//         >
//             <div>
//                 <input
//                     type="checkbox"
//                     name=""
//                     id=""
//                     onChange={handleAllChecked}
//                     value="1"
//                 />
//                 1
//                 <input
//                     type="checkbox"
//                     name=""
//                     id=""
//                     onChange={handleAllChecked}
//                     value="2"
//                 />
//                 <input
//                     type="checkbox"
//                     name=""
//                     id=""
//                     onChange={handleAllChecked}
//                     value="3"
//                 />
//                 <input
//                     type="checkbox"
//                     name=""
//                     id=""
//                     onChange={handleAllChecked}
//                     value="4"
//                 />
//                 <input
//                     type="checkbox"
//                     name=""
//                     id=""
//                     onChange={handleAllChecked}
//                     value="5"
//                 />
//             </div>
//         </Modal>
//     );
// };
// export default BusquedaEstado;
