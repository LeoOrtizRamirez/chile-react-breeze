import React, { useState, useRef, useEffect } from 'react'
import './ModalContrasena.css'
import { Modal } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';
import { Toast } from 'primereact/toast';

const ModalContrasena = ({ showModal, handleCloseModal, modalId }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const toastBL = useRef(null);
    const handleSubmit = (event) => {
        var token = document.querySelector('meta[name="csrf-token"]')
        if(confirmPassword != newPassword){
            toastBL.current.show({ severity: 'error', summary: 'Las contraseñas no coinciden', life: 3000 });
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

    useEffect(()=>{
        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")
    },[showModal])

    const toggleShowPassword = (selector) =>{
        var input = document.getElementById(selector)
        var btn = document.getElementById(selector + "Icon")
        if(input.type == "password"){
            input.type = "text"
            btn.classList.remove("icon-Mostrar")
            btn.classList.add("icon-No-mostrar")
        }else{
            input.type = "password"
            btn.classList.remove("icon-No-mostrar")
            btn.classList.add("icon-Mostrar")
        }
    }
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
                                                <button className="btnRadius_indicativo icono_mostrar_contrasena" type="button" onClick={()=>toggleShowPassword('currentPassword')}>
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
                                                    onChange={(event) => setNewPassword(event.target.value)}
                                                />
                                            </div>
                                            <div className="div_cambio_contrasena_form_div_input_button">
                                                <button className="btnRadius_indicativo icono_mostrar_contrasena" type="button" onClick={()=>toggleShowPassword('newPassword')}>
                                                    <span className="icon-Mostrar" id="newPasswordIcon"></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="barra_progreso">
                                            <div className="top_barra_progreso">
                                                <div className="progress">
                                                    <div role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" className="progress-bar regla" style={{ backgroundColor: 'rgb(102, 165, 19)' }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="top_barra_progreso responsive_barra_progreso">
                                                <div className="progress">
                                                    <div role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" className="progress-bar regla" style={{ backgroundColor: 'rgb(102, 165, 19)' }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="top_barra_progreso responsive_barra_progreso">
                                                <div className="progress">
                                                    <div role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" className="progress-bar regla" style={{ backgroundColor: 'rgb(102, 165, 19)' }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="top_barra_progreso responsive_barra_progreso">
                                                <div className="progress">
                                                    <div role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" className="progress-bar regla" style={{ backgroundColor: 'rgb(102, 165, 19)' }}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="div_texto_nivel_contrasena">
                                                <span className="texto_nivel_contrasena" style={{ color: 'rgb(102, 165, 19)' }}>Muy fuerte</span>
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
                                                <button className="btnRadius_indicativo icono_mostrar_contrasena" type="button" onClick={()=>toggleShowPassword('confirmPassword')}>
                                                    <span className="icon-Mostrar" id="confirmPasswordIcon"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="botones_cambio_contrasena">
                            <button className="btn btn-new-gray btnRadius boton_actualizar_cambio_contrasena">Atrás</button>
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