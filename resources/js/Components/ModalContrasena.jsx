import React, { useState, useRef, useEffect } from 'react'
import './ModalContrasena.css'
import { Modal } from 'react-bootstrap';
import { Toast } from 'primereact/toast';

const ModalContrasena = ({ showModal, handleCloseModal, modalId }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const toastBL = useRef(null);
    const handleSubmit = (event) => {
        var token = document.querySelector('meta[name="csrf-token"]')
        if (currentPassword == "" || confirmPassword == "" || newPassword == "") {
            toastBL.current.show({ severity: 'error', summary: 'Verifique todos los campos', life: 3000 });
            return;
        }
        if (confirmPassword != newPassword) {
            toastBL.current.show({ severity: 'error', summary: 'Las contraseñas no coinciden', life: 3000 });
            return;
        }
        if (confirmPassword.length <= 5 || newPassword.length <= 5) {
            toastBL.current.show({ severity: 'error', summary: 'Las contraseñas deben tener mínimo 6 caracteres', life: 3000 });
            return;
        }


        axios.post('/cliente/mi-cuenta/cambio', {
            current_password: currentPassword,
            new_password: newPassword,
            new_password_confirmation: confirmPassword
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                console.log(response.data.message)
                toastBL.current.show({ severity: 'success', summary: response.data.message, life: 3000 });
                handleCloseModal()
            })
            .catch(error => {
                console.log(error.response.data.error)
                toastBL.current.show({ severity: 'error', summary: error.response.data.error, life: 3000 });
            })
    };

    useEffect(() => {
        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")
        setTextoSeguridad("Muy débil")
        setColorSeguridad("rgb(103, 103, 102)")
    }, [showModal])

    const toggleShowPassword = (selector) => {
        var input = document.getElementById(selector)
        var btn = document.getElementById(selector + "Icon")
        if (input.type == "password") {
            input.type = "text"
            btn.classList.remove("icon-Mostrar")
            btn.classList.add("icon-No-mostrar")
        } else {
            input.type = "password"
            btn.classList.remove("icon-No-mostrar")
            btn.classList.add("icon-Mostrar")
        }
    }

    const [textoSeguridad, setTextoSeguridad] = useState("Muy débil")
    const [colorSeguridad, setColorSeguridad] = useState("rgb(103, 103, 102)")
    const [seguridad, setSeguridad] = useState(0)
    const validateInput = (inputValue) => {
        setNewPassword(inputValue)
        const containsNumber = /\d+/g.test(inputValue);
        const containsUpperCase = /[A-Z]+/g.test(inputValue);
        const containsLowerCase = /[a-z]+/g.test(inputValue);
        const isLongEnough = inputValue.length >= 6;

        const isValid = containsNumber && containsUpperCase && containsLowerCase && isLongEnough;

        var _seguridad = 0;
        if (containsNumber) {
            _seguridad += 1
        }
        if (containsUpperCase) {
            _seguridad += 1
        }
        if (containsLowerCase) {
            _seguridad += 1
        }
        if (isLongEnough) {
            _seguridad += 1
        }
        setSeguridad(_seguridad)
        switch (_seguridad) {
            case 0:
                setTextoSeguridad("Muy débil")
                setColorSeguridad("rgb(103, 103, 102)")
                break;
            case 1:
                setTextoSeguridad("Débil")
                setColorSeguridad("rgb(201, 0, 61)")
                break;
            case 2:
                setTextoSeguridad("Medio")
                setColorSeguridad("rgb(226, 124, 55)")
                break;
            case 3:
                setTextoSeguridad("Fuerte")
                setColorSeguridad("rgb(115, 201, 20)")
                break;
            case 4:
                setTextoSeguridad("Muy fuerte")
                setColorSeguridad("rgb(102, 165, 19)")
                break;
            default:
                break;
        }
        console.log("seguridad", _seguridad)
        //return { isValid, errorMessage: '' };
    };
    return (
        <>
            <Modal show={showModal} onHide={() => handleCloseModal()} id={modalId} centered>
                <Modal.Header>
                    <button aria-label="Close" className="close icon-Cerrar-modal" onClick={handleCloseModal}></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="div_image_cambio_contrasena">
                        <div className="div_imagen_cambio_contrasena">
                            <img src="https://ecu.licitaciones.info/img/Contrasena.png" className="div_imagen_cambio_contrasena_img" />
                        </div>
                    </div>
                    <div className="modal-body div_cambio_contrasena">
                        <div className="div_cambio_contrasena_titulo">
                            Cambia tu contraseña
                        </div>
                        <div className="div_cambio_contrasena_form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group div_cambio_contrasena_form_div">
                                    <label id="label_actual" className="div_cambio_contrasena_form_div_label">Digita tu contraseña actual:</label>
                                    <div className="alineacion_boton_cambio_contrasena">
                                        <div className="div_cambio_contrasena_form_div_input">
                                            <div>
                                                <input
                                                    name="currentPassword"
                                                    id="currentPassword"
                                                    placeholder="Ingresa tu contraseña actual"
                                                    type="password"
                                                    className="form-control inputs_cambio_contrasena"
                                                    value={currentPassword}
                                                    onChange={(event) => setCurrentPassword(event.target.value)}
                                                />
                                            </div>
                                            <div className="div_cambio_contrasena_form_div_input_button">
                                                <button className="btnRadius_indicativo icono_mostrar_contrasena" type="button" onClick={() => toggleShowPassword('currentPassword')}>
                                                    <span className="icon-Mostrar" id="currentPasswordIcon"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group div_cambio_contrasena_form_div">
                                    <label className="div_cambio_contrasena_form_div_label">Digita tu nueva contraseña:</label>
                                    <div className="alineacion_boton_cambio_contrasena">
                                        <div className="div_cambio_contrasena_form_div_input">
                                            <div className="div_cambio_contrasena_form_div_input_div">
                                                <input
                                                    id="newPassword"
                                                    name="newPassword"
                                                    placeholder="Ingresa tu nueva contraseña - Mínimo 6 caracteres"
                                                    type="password"
                                                    className="form-control inputs_cambio_contrasena"
                                                    value={newPassword}
                                                    onChange={(event) => validateInput(event.target.value)}
                                                />
                                            </div>
                                            <div className="div_cambio_contrasena_form_div_input_button">
                                                <button className="btnRadius_indicativo icono_mostrar_contrasena" type="button" onClick={() => toggleShowPassword('newPassword')}>
                                                    <span className="icon-Mostrar" id="newPasswordIcon"></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="barra_progreso">
                                            <div className="top_barra_progreso">
                                                <div className="progress" style={{ backgroundColor: seguridad >= 1 && colorSeguridad }}>
                                                    <div role="progressbar" className="progress-bar regla">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="top_barra_progreso responsive_barra_progreso">
                                                <div className="progress" style={{ backgroundColor: seguridad >= 2 && colorSeguridad }}>
                                                    <div role="progressbar" className="progress-bar regla">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="top_barra_progreso responsive_barra_progreso">
                                                <div className="progress" style={{ backgroundColor: seguridad >= 3 && colorSeguridad }}>
                                                    <div role="progressbar" className="progress-bar regla">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="top_barra_progreso responsive_barra_progreso">
                                                <div className="progress" style={{ backgroundColor: seguridad >= 4 && colorSeguridad }}>
                                                    <div role="progressbar" className="progress-bar regla">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="div_texto_nivel_contrasena">
                                                <span className="texto_nivel_contrasena" style={{ color: colorSeguridad }}>
                                                    {textoSeguridad}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group div_cambio_contrasena_form_div" style={{ marginTop: -15 + 'px' }}>
                                    <label className="div_cambio_contrasena_form_div_label">Confirma tu nueva contraseña:</label>
                                    <div className="alineacion_boton_cambio_contrasena">
                                        <div className="div_cambio_contrasena_form_div_input">
                                            <div>
                                                <input
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    placeholder="Confirma la nueva contraseña"
                                                    type="password"
                                                    className="form-control inputs_cambio_contrasena"
                                                    value={confirmPassword}
                                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                                />
                                            </div>
                                            <div className="div_cambio_contrasena_form_div_input_button">
                                                <button className="btnRadius_indicativo icono_mostrar_contrasena" type="button" onClick={() => toggleShowPassword('confirmPassword')}>
                                                    <span className="icon-Mostrar" id="confirmPasswordIcon"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="botones_cambio_contrasena">
                            <button className="btn btn-new-gray btnRadius boton_actualizar_cambio_contrasena" onClick={handleCloseModal}>Atrás</button>
                            <button className="btn btn-new-green btnRadius boton_actualizar_cambio_contrasena" onClick={handleSubmit}>Cambiar</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Toast ref={toastBL} position="bottom-left" />
        </>
    )
}

export default ModalContrasena