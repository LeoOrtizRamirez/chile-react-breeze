import React, { useState, useRef, useEffect } from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import './MiCuenta.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import { Toast } from 'primereact/toast';
import { Modal } from 'react-bootstrap';
const MiCuenta = ({ auth, _plan, _publicidad }) => {
    const toastBL = useRef(null);
    const [data, setData] = useState({
        celular: auth.user.celular,
        celular_empresa: auth.user.celular_empresa,
        ciudad: auth.user.ciudad,
        ciudad_empresa: auth.user.ciudad_empresa,
        created_at: auth.user.created_at,
        current_team_id: auth.user.current_team_id,
        descripcion_actividad_economica: auth.user.descripcion_actividad_economica,
        direccion: auth.user.direccion,
        direccion_empresa: auth.user.direccion_empresa,
        email: auth.user.email,
        email_facturacion_empresa: auth.user.email_facturacion_empresa,
        email_verified_at: auth.user.email_verified_at,
        estado: auth.user.estado,
        fecha_vencimiento: auth.user.fecha_vencimiento,
        id: auth.user.id,
        identificacion: auth.user.identificacion,
        idplan: auth.user.idplan,
        indicativo: auth.user.indicativo,
        indicativo_empresa: auth.user.indicativo_empresa,
        name: auth.user.name,
        nit_empresa: auth.user.nit_empresa,
        nombre_completo: auth.user.nombre_completo,
        nombre_empresa: auth.user.nombre_empresa,
        origen: auth.user.origen,
        ocupacion: auth.user.ocupacion,
        pais: auth.user.pais,
        pais_empresa: auth.user.pais_empresa,
        plan: auth.user.plan,
        profile_photo_path: auth.user.profile_photo_path,
        telefono_fijo: auth.user.telefono_fijo,
        telefono_fijo_empresa: auth.user.telefono_fijo_empresa,
        updated_at: auth.user.updated_at,
        uuid: auth.user.uuid,
        verification_code: auth.user.verification_code,
    })
    const [plan, setPlan] = useState(_plan)
    const [publicidad, setPublicidad] = useState({
        'id': _publicidad?.id,
        'titulo': _publicidad?.titulo == undefined ? "" : _publicidad?.titulo,
        'contenido1': _publicidad?.contenido1 == undefined ? "" : _publicidad?.contenido1,
        'contenido2': _publicidad?.contenido2 == undefined ? "" : _publicidad?.contenido2,
        'enlace': _publicidad?.enlace == undefined ? "" : _publicidad?.enlace,
    })
    const [errors, setErrors] = useState({});
    const [selectedOptionTratamiento, setSelectedOptionTratamiento] = useState('Selecciona');
    const handleSelectTratamiento = (eventKey) => {
        setSelectedOptionTratamiento(eventKey)
    };
    const [selectedOptionPaisInteres, setSelectedOptionPaisInteres] = useState(data.pais);
    const handleSelectPaisInteres = (eventKey) => {
        setSelectedOptionPaisInteres(eventKey)
    };

    const savePublicidad = (ruta) => {
        if (!handleValidation()) { return; }
        setGlobalLoading(true)
        modalContent.current = ""
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post(`/cliente/difusion/${ruta}`, {
            'id': publicidad?.id,
            'titulo': publicidad?.titulo,
            'contenido1': publicidad?.contenido1,
            'contenido2': publicidad?.contenido2,
            'enlace': publicidad?.enlace,
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setGlobalLoading(false)
                console.log("response", response.data.id)
                setPublicidad({ ...publicidad, 'id': response.data.id })
                switch (ruta) {
                    case "update":
                        toastBL.current.show({ severity: 'success', summary: 'Publicidad actualizada correctamente'/* , detail: 'Message Content' */, life: 3000 });
                        break;
                    case "store":
                        toastBL.current.show({ severity: 'success', summary: 'Publicidad creada correctamente'/* , detail: 'Message Content' */, life: 3000 });
                        break;
                    default:
                        break;
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    const deletePublicidad = () => {
        setGlobalLoading(true)
        modalContent.current = ""
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post(`/cliente/difusion/destroy`, {
            'id': publicidad?.id
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setGlobalLoading(false)
                console.log("response", response.data.id)
                setPublicidad({
                    'id': undefined,
                    'titulo': "",
                    'contenido1': "",
                    'contenido2': "",
                    'enlace': "",
                })
                handleCloseModal()
                toastBL.current.show({ severity: 'success', summary: 'Se ha eliminado correctamente'/* , detail: 'Message Content' */, life: 3000 });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const modalContent = useRef("")
    const [showModal, setShowModal] = useState(false)
    const handleCloseModal = () => {
        modalContent.current = ""
        setShowModal(false)
    }
    const handleShowModal = (type) => {
        modalContent.current = type
        setShowModal(true)
    }

    const [globalLoading, setGlobalLoading] = useState(false)


    const isFirstTitulo = useRef(true)
    const isFirstContenido1 = useRef(true)
    const isFirstContenido2 = useRef(true)
    useEffect(() => {
        console.log("titulo")
        if (isFirstTitulo.current) {
            isFirstTitulo.current = false
            return;
        }
        handleValidation('titulo')
    }, [publicidad.titulo])
    useEffect(() => {
        console.log("c1")
        if (isFirstContenido1.current) {
            isFirstContenido1.current = false
            return;
        }
        handleValidation('contenido1')
    }, [publicidad.contenido1])
    useEffect(() => {
        console.log("c2")
        if (isFirstContenido2.current) {
            isFirstContenido2.current = false
            return;
        }
        handleValidation('contenido2')
    }, [publicidad.contenido2])


    const handleValidation = (input = null) => {
        let errors = {};
        let formIsValid = true;

        if (input == null) {
            if (!publicidad.titulo) {
                formIsValid = false;
                errors["titulo"] = "El campo Título: (Máximo 30 caracteres) es obligatorio.";
            } else if (publicidad.titulo.length > 30) {
                formIsValid = false;
                errors["titulo"] = "El campo Título: (Máximo 30 caracteres) no debe ser mayor a 30 caracteres.";
            }

            if (!publicidad.contenido1) {
                formIsValid = false;
                errors["contenido1"] = "El campo Descripción - Primera linea: (Máximo 40 caracteres) es obligatorio.";
            } else if (publicidad.contenido1.length > 40) {
                formIsValid = false;
                errors["contenido1"] = "El campo Descripción - Primera linea: (Máximo 40 caracteres) no debe ser mayor a 40 caracteres.";
            }

            if (!publicidad.contenido2) {
                formIsValid = false;
                errors["contenido2"] = "El campo Descripción - Segunda linea: (Máximo 40 caracteres) es obligatorio.";
            } else if (publicidad.contenido2.length > 40) {
                formIsValid = false;
                errors["contenido2"] = "El campo Descripción - Segunda linea: (Máximo 40 caracteres) no debe ser mayor a 30 caracteres.";
            }
        } else {
            switch (input) {
                case 'titulo':
                    if (!publicidad.titulo) {
                        formIsValid = false;
                        errors["titulo"] = "El campo Título: (Máximo 30 caracteres) es obligatorio.";
                    } else if (publicidad.titulo.length > 30) {
                        formIsValid = false;
                        errors["titulo"] = "El campo Título: (Máximo 30 caracteres) no debe ser mayor a 30 caracteres.";
                    }
                    break;
                case 'contenido1':
                    if (!publicidad.contenido1) {
                        formIsValid = false;
                        errors["contenido1"] = "El campo Descripción - Primera linea: (Máximo 40 caracteres) es obligatorio.";
                    } else if (publicidad.contenido1.length > 40) {
                        formIsValid = false;
                        errors["contenido1"] = "El campo Descripción - Primera linea: (Máximo 40 caracteres) no debe ser mayor a 40 caracteres.";
                    }
                    break;
                case 'contenido2':
                    if (!publicidad.contenido2) {
                        formIsValid = false;
                        errors["contenido2"] = "El campo Descripción - Segunda linea: (Máximo 40 caracteres) es obligatorio.";
                    } else if (publicidad.contenido2.length > 40) {
                        formIsValid = false;
                        errors["contenido2"] = "El campo Descripción - Segunda linea: (Máximo 40 caracteres) no debe ser mayor a 30 caracteres.";
                    }
                    break;
                default:
                    break;
            }
        }
        setErrors(errors);
        return formIsValid;
    }
    return (
        <AuthenticatedLayout auth={auth} page={'mi-cuenta'} globalLoading={globalLoading}>
            <div className="content_not_blank_interno">
                <div className="user-data-container mi-cuenta-container my-4">
                    <div className="row">
                        <div className="col-lg-12 col-xl-3 col-avatar">
                            <div className="avatar sub-seccion text-center">
                                <div className="avatar__info">
                                    <div className="imagen">
                                        <img width="175" height="175" src="https://col.licitaciones.info/img/mi_cuenta/svg/default_avatar.svg" alt="Avatar" className="imagen__avatar" />
                                        <button className="imagen__cambiar-avatar-button">
                                            <img src="https://col.licitaciones.info/img/mi_cuenta/svg/cambiarImagen.svg" alt="Cambiar imágen" />
                                        </button></div>
                                    <div className="nombre">
                                        <p>{data.nombre_completo}</p>
                                    </div>
                                    <div className="ocupacion">
                                        <p>Desarrollador</p>
                                    </div>
                                </div>
                                <div className="avatar__plan">
                                    <div className="info-plan tipo-plan mb-4">
                                        <span className="info-label">Plan:</span>
                                        <span className="info-valor">TRIAL</span>
                                    </div>
                                    <div className="info-plan info-fecha-final-plan"><span className="info-label">Fin de plan</span> <span className="info-valor">2023/12/31</span></div></div>
                            </div>
                            <div className="sub-seccion pais-zona-horaria--sub-seccion text-center">
                                <div id="paisInteres" className="select-pais">




                                    <span className="select-pais__title">País de interés</span>
                                    <Dropdown onSelect={handleSelectPaisInteres}>
                                        <Dropdown.Toggle variant="success" id="mi-cuenta" drop="end" className="dropdown b-dropdown lici-dropdown btn-group">
                                            <div className="option option-display">
                                                {selectedOptionPaisInteres == "Chile" &&
                                                    <>
                                                        <img width="22" src="/public/images/banderas/listado_nombres/CHL.svg" alt="Flag" className="flag" />
                                                        <span className="option__item-text ml-2">Chile</span>
                                                    </>
                                                }

                                                {selectedOptionPaisInteres == "Colombia" &&
                                                    <>
                                                        <img width="22" src="/public/images/banderas/listado_nombres/col.svg" alt="Flag" className="flag" />
                                                        <span className="option__item-text ml-2">Colombia</span>
                                                    </>
                                                }

                                                {selectedOptionPaisInteres == "Ecuador" &&
                                                    <>
                                                        <img width="22" src="/public/images/banderas/listado_nombres/ecu.svg" alt="Flag" className="flag" />
                                                        <span className="option__item-text ml-2">Ecuador</span>
                                                    </>
                                                }
                                                {selectedOptionPaisInteres == "Panama" &&
                                                    <>
                                                        <img width="22" src="/public/images/banderas/listado_nombres/pan.svg" alt="Flag" className="flag" />
                                                        <span className="option__item-text ml-2">Panama</span>
                                                    </>
                                                }
                                            </div>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {selectedOptionPaisInteres != "Chile" &&
                                                <Dropdown.Item eventKey="Chile">
                                                    <div className="option__main-container">
                                                        <div className="content-wrapper d-flex justify-content-center">
                                                            <img width="22" src="/public/images/banderas/listado_nombres/CHL.svg" alt="Flag" className="flag mr-2" /> <span className="option__item-text">Colombia</span>
                                                        </div>
                                                    </div>
                                                </Dropdown.Item>
                                            }
                                            {selectedOptionPaisInteres != "Colombia" &&
                                                <Dropdown.Item eventKey="Colombia">
                                                    <div className="option__main-container">
                                                        <div className="content-wrapper d-flex justify-content-center">
                                                            <img width="22" src="/public/images/banderas/listado_nombres/col.svg" alt="Flag" className="flag mr-2" /> <span className="option__item-text">Colombia</span>
                                                        </div>
                                                    </div>
                                                </Dropdown.Item>
                                            }
                                            {selectedOptionPaisInteres != "Ecuador" &&
                                                <Dropdown.Item eventKey="Ecuador">
                                                    <div className="option__main-container">
                                                        <div className="content-wrapper d-flex justify-content-center">
                                                            <img width="22" src="/public/images/banderas/listado_nombres/ecu.svg" alt="Flag" className="flag mr-2" /> <span className="option__item-text">Ecuador</span>
                                                        </div>
                                                    </div>
                                                </Dropdown.Item>
                                            }
                                            {selectedOptionPaisInteres != "Panama" &&
                                                <Dropdown.Item eventKey="Panama">
                                                    <div className="option__main-container">
                                                        <div className="content-wrapper d-flex justify-content-center">
                                                            <img width="22" src="/public/images/banderas/listado_nombres/pan.svg" alt="Flag" className="flag mr-2" /> <span className="option__item-text">Panama</span>
                                                        </div>
                                                    </div>
                                                </Dropdown.Item>
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="zona-horaria">
                                    <span className="zona-horaria__title">Zona horaria</span>
                                    <Dropdown onSelect={handleSelectPaisInteres}>
                                        <Dropdown.Toggle variant="success" id="zona-horaria" drop="end" className="dropdown b-dropdown lici-dropdown btn-group">
                                            <div className="option option-display">
                                                <span className="option__item-text">America/Bogota</span>
                                            </div>
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-9 col-form-data">
                            <div className="navigation-component sub-seccion">
                                <div className="navigation-component__header">
                                    <div className="navigation">
                                        <Tabs
                                            defaultActiveKey="datos"
                                            id="justify-tab-example"
                                            className="mb-3"
                                            justify
                                        >
                                            <Tab
                                                eventKey="datos"
                                                title={
                                                    <div className="mis-datos">
                                                        <span className="tabs__tab-icon icon-Datos1"></span>
                                                        <span className="tabs__tab-label">Mis datos</span>
                                                    </div>
                                                }>
                                                <div className="navigation-component__content">
                                                    <div className="user-form user-personal-data sub-seccion mt-xl-0">
                                                        <div className="user-form__fields">
                                                            <div className="row">
                                                                <div className="col-12 col-lg-9 p-0">
                                                                    <div className="row user-fields-content">
                                                                        <div className="col-xs-12 col-sm-5 col-xl-6">
                                                                            <div className="form-group"><label for="tratamiento"
                                                                                className="form-group__label">Tratamiento:</label>
                                                                                <Dropdown onSelect={handleSelectTratamiento}>
                                                                                    <Dropdown.Toggle variant="success" id="tratamiento" className="dropdown b-dropdown lici-dropdown btn-group">
                                                                                        {selectedOptionTratamiento}
                                                                                    </Dropdown.Toggle>
                                                                                    <Dropdown.Menu>
                                                                                        <Dropdown.Item eventKey="Sr.">Sr.</Dropdown.Item>
                                                                                        <Dropdown.Item eventKey="Sra.">Sra.</Dropdown.Item>
                                                                                        <Dropdown.Item eventKey="No especificado.">No especificado.</Dropdown.Item>
                                                                                    </Dropdown.Menu>
                                                                                </Dropdown>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-12 col-sm-7 col-xl-6">
                                                                            <div className="form-group"><label for="nombreCompleto" className="form-group__label">Mi
                                                                                nombre es:</label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="nombreCompleto"
                                                                                    id="nombreCompleto"
                                                                                    placeholder="Ingresa tus nombres y apellidos"
                                                                                    className="form-group__input"
                                                                                    value={data.nombre_completo}
                                                                                    onChange={(e) => setData({ ...data, 'nombre_completo': e.target.value })}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-12 col-sm-12 col-xl-6">
                                                                            <div className="form-group">
                                                                                <label for="emailUsuario" className="form-group__label">Mi correo electrónico:</label>
                                                                                <div className="input-container">
                                                                                    <input
                                                                                        type="email"
                                                                                        name="emailUsuario"
                                                                                        id="emailUsuario"
                                                                                        placeholder="Ingresa el correo electrónico"
                                                                                        disabled="disabled"
                                                                                        className="form-group__input help-tooltip"
                                                                                        value={data.email}
                                                                                    />
                                                                                    <img width="18" src="/public/images/mi_cuenta/verificacion_icon.svg" alt="Verificacion" className="verify-icon" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-12 col-sm-7 col-xl-6">
                                                                            <div className="form-group"><label for="ocupacion"
                                                                                className="form-group__label">Ocupación:</label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="ocupacion"
                                                                                    id="ocupacion"
                                                                                    placeholder="Ingresa tu cargo u ocupación"
                                                                                    className="form-group__input"
                                                                                    value={data.ocupacion}
                                                                                    onChange={(e) => setData({ ...data, 'ocupacion': e.target.value })}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-12 col-sm-5 col-xl-6">
                                                                            <div className="form-group"><label for="ciudadUsuario"
                                                                                className="form-group__label">Ciudad:</label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="ciudadUsuario"
                                                                                    id="ciudadUsuario"
                                                                                    placeholder="Ingresa tu ciudad"
                                                                                    className="form-group__input"
                                                                                    value={data.ciudad}
                                                                                    onChange={(e) => setData({ ...data, 'ciudad': e.target.value })}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-12 col-xl-6 col-sm-7">
                                                                            <div className="form-group"><label for="telefonoUsuario"
                                                                                className="form-group__label">Teléfono fijo:</label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="telefonoUsuario"
                                                                                    id="telefonoUsuario"
                                                                                    placeholder="Ingresa tu # teléfono fijo"
                                                                                    className="form-group__input"
                                                                                    value={data.telefono_fijo}
                                                                                    onChange={(e) => setData({ ...data, 'telefono_fijo': e.target.value })}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-12 col-sm-5 col-xl-3">
                                                                            <div className="form-group">
                                                                                <label for="indicativoUsuario" className="form-group__label">Indicativo:</label>
                                                                                <Dropdown onSelect={handleSelectPaisInteres}>
                                                                                    <Dropdown.Toggle variant="success" id="indicativoUsuario" drop="end" className="dropdown b-dropdown lici-dropdown btn-group">
                                                                                        <div className="option option-display">
                                                                                            <span className="option__item-text">Colombia +57</span>
                                                                                        </div>
                                                                                    </Dropdown.Toggle>
                                                                                </Dropdown>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-12 col-sm-7 col-xl-3">
                                                                            <div className="form-group"><label for="movilUsuario" className="form-group__label">Número
                                                                                móvil:</label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="movilUsuario"
                                                                                    id="movilUsuario"
                                                                                    placeholder="Ingresa tu # movil"
                                                                                    className="form-group__input"
                                                                                    value={data.celular}
                                                                                    onChange={(e) => setData({ ...data, 'celular': e.target.value })}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="btn-action-container text-center"><button className="btnRadius btn-new-green">Guardar todos los
                                                        cambios</button>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab
                                                eventKey="facturacion"
                                                title={
                                                    <div className="datos-facturacion">
                                                        <span className="tabs__tab-icon icon-Datos-fact"></span>
                                                        <span className="tabs__tab-label">Datos de facturación</span>
                                                    </div>}
                                            >
                                                <div className="navigation-component__content">
                                                    <div className="user-form user-datos-facturacion sub-seccion">
                                                        <div className="user-form__fields">
                                                            <div className="row">
                                                                <div className="col-12 col-lg-9 p-0">
                                                                    <div className="row facturacion-fields-content">
                                                                        <div className="col-xs-12 col-sm-5 col-xl-6">
                                                                            <div className="form-group">
                                                                                <label for="nombreEmpresa" className="form-group__label">Nombre de la empresa:</label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="nombreEmpresa"
                                                                                    id="nombreEmpresa"
                                                                                    placeholder="Ingresa el nombre de tu empresa"
                                                                                    className="form-group__input"
                                                                                    value={data.nombre_empresa}
                                                                                    onChange={(e) => setData({ ...data, 'nombre_empresa': e.target.value })}
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-xs-12 col-sm-7 col-xl-6">
                                                                            <div className="form-group">
                                                                                <label for="nit" className="form-group__label">Nit:</label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="nit"
                                                                                    id="nit"
                                                                                    placeholder="Ingresa el nit de la empresa"
                                                                                    className="form-group__input"
                                                                                    value={data.nit_empresa}
                                                                                    onChange={(e) => setData({ ...data, 'nit_empresa': e.target.value })}
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-xs-12 col-sm-12 col-xl-6">
                                                                            <div className="form-group">
                                                                                <label for="correoEmpresa" className="form-group__label">Correo electrónico contabilidad:</label>
                                                                                <div className="input-container">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="correoEmpresa"
                                                                                        id="correoEmpresa"
                                                                                        placeholder="Ingresa el correo electrónico"
                                                                                        className="form-group__input help-tooltip"
                                                                                        value={data.email_facturacion_empresa}
                                                                                        onChange={(e) => setData({ ...data, 'email_facturacion_empresa': e.target.value })}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-xs-12 col-sm-5 col-xl-6">
                                                                            <div className="form-group">
                                                                                <label for="ciudadEmpresa" className="form-group__label">Ciudad sede principal:</label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="ciudadEmpresa"
                                                                                    id="ciudadEmpresa"
                                                                                    placeholder="Ingresa la ciudad"
                                                                                    className="form-group__input"
                                                                                    value={data.ciudad_empresa}
                                                                                    onChange={(e) => setData({ ...data, 'ciudad_empresa': e.target.value })}
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-xs-12 col-sm-7 col-xl-6">
                                                                            <div className="form-group">
                                                                                <label for="direccionEmpresa" className="form-group__label">Dirección sede principal:</label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="direccionEmpresa"
                                                                                    id="direccionEmpresa"
                                                                                    placeholder="Ingresa la dirección"
                                                                                    className="form-group__input"
                                                                                    value={data.direccion_empresa}
                                                                                    onChange={(e) => setData({ ...data, 'direccion_empresa': e.target.value })}
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-xs-12 col-xl-6 col-sm-7">
                                                                            <div className="form-group">
                                                                                <label for="telefonoEmpresa" className="form-group__label">Teléfono fijo:</label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="telefonoEmpresa"
                                                                                    id="telefonoEmpresa"
                                                                                    placeholder="Ingresa # teléfono fijo"
                                                                                    className="form-group__input"
                                                                                    value={data.telefono_fijo_empresa}
                                                                                    onChange={(e) => setData({ ...data, 'telefono_fijo_empresa': e.target.value })}
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-xs-12 col-sm-5 col-xl-3">
                                                                            <div className="form-group">
                                                                                <label for="indicativoEmpresa" className="form-group__label">Indicativo:</label>

                                                                                <Dropdown onSelect={handleSelectPaisInteres}>
                                                                                    <Dropdown.Toggle variant="success" id="indicativoEmpresa" drop="end" className="dropdown b-dropdown lici-dropdown btn-group">
                                                                                        <div className="option option-display">
                                                                                            <span className="option__item-text">Colombia +57</span>
                                                                                        </div>
                                                                                    </Dropdown.Toggle>
                                                                                </Dropdown>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-xs-12 col-sm-7 col-xl-3">
                                                                            <div className="form-group">
                                                                                <label for="movilEmpresa" className="form-group__label">Número móvil:</label>
                                                                                <input
                                                                                    type="text"
                                                                                    name="movilEmpresa"
                                                                                    id="movilEmpresa"
                                                                                    placeholder="Ingresa # móvil"
                                                                                    className="form-group__input"
                                                                                    value={data.celular_empresa}
                                                                                    onChange={(e) => setData({ ...data, 'celular_empresa': e.target.value })}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="btn-action-container text-center"><button className="btnRadius btn-new-green">Guardar todos los
                                                        cambios</button></div>
                                                </div>
                                            </Tab>
                                            <Tab
                                                eventKey="publicidad"
                                                title={
                                                    <div className="mi-publicidad"><span className="tabs__tab-icon icon-Mi-publicidad"></span> <span
                                                        className="tabs__tab-label">Mi publicidad</span>
                                                    </div>
                                                }
                                            >
                                                <div className="navigation-component__content">
                                                    <div className="publicidad__body">
                                                        <div className="content_publicidad">
                                                            <h6 className="contenido-publicitario">Los datos ingresados en esta pantalla son los que el sistema envía
                                                                <span> aleatoriamente</span> en los correos electrónicos dentro de la sección <span>"Publicidad"</span>
                                                                con el objetivo de que nuestros clientes puedan divulgar sus productos y servicios entre ellos mismos.
                                                            </h6>
                                                            <form id="form-publicidad">
                                                                <div className="row">
                                                                    <div className="col-12 col-md-6 col-sm-6 form-group new-padding">
                                                                        <label for="titulo">
                                                                            <span className="icon-Titulo"></span>Título:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Máximo 30 caracteres"
                                                                            name="titulo"
                                                                            className="form-control inputs-rounded"
                                                                            value={publicidad?.titulo}
                                                                            onChange={(e) => setPublicidad({ ...publicidad, titulo: e.target.value })}
                                                                            required
                                                                        />
                                                                        {errors["titulo"] &&
                                                                            <p className='invalid-feedback'>{errors["titulo"]}</p>
                                                                        }

                                                                    </div>
                                                                    <div className="col-12 col-md-6 col-sm-6 form-group new-padding">
                                                                        <label for="contenido1">
                                                                            <span className="icon-Primera-linea"></span>Descripción - Primera linea:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Máximo 40 caracteres"
                                                                            name="contenido1"
                                                                            className="form-control inputs-rounded"
                                                                            value={publicidad?.contenido1}
                                                                            onChange={(e) => setPublicidad({ ...publicidad, contenido1: e.target.value })}
                                                                        />
                                                                        {errors["contenido1"] &&
                                                                            <p className='invalid-feedback'>{errors["contenido1"]}</p>
                                                                        }
                                                                    </div>
                                                                    <div className="col-12 col-md-6 col-sm-6 form-group new-padding">
                                                                        <label for="contenido2">
                                                                            <span className="icon-Segunda-linea"></span>Descripción - Segunda linea:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Máximo 40 caracteres"
                                                                            name="contenido2"
                                                                            className="form-control inputs-rounded"
                                                                            value={publicidad?.contenido2}
                                                                            onChange={(e) => setPublicidad({ ...publicidad, contenido2: e.target.value })}
                                                                        />
                                                                        {errors["contenido2"] &&
                                                                            <p className='invalid-feedback'>{errors["contenido2"]}</p>
                                                                        }
                                                                    </div>
                                                                    <div className="col-12 col-md-6 col-sm-6 form-group new-padding">
                                                                        <label for="enlace">
                                                                            <span className="icon-Enlace"></span>Enlace visible:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Máximo 40 caracteres"
                                                                            name="enlace"
                                                                            className="form-control inputs-rounded"
                                                                            value={publicidad?.enlace}
                                                                            onChange={(e) => setPublicidad({ ...publicidad, enlace: e.target.value })}
                                                                        />
                                                                        {errors["enlace"] &&
                                                                            <p className='invalid-feedback'>{errors["enlace"]}</p>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div className="publicidad__vistaprevia">
                                                                <div className="vista_previa_publicidad text-center">
                                                                    <div className="vista_previa_publicidad__body">
                                                                        <p>Nuestros clientes también tienen su espacio. ¡Conócelos!</p>
                                                                        <div className="row">
                                                                            <div className="col-12 col-sm-4 col-md-3">
                                                                                <div className="vista_previa__esqueleto">
                                                                                    <span className="bar_previa__1"></span>
                                                                                    <span className="bar_previa__2"></span>
                                                                                    <span className="bar_previa__1"></span>
                                                                                    <span className="bar_previa__1"></span>
                                                                                    <span className="bar_previa__1"></span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 col-sm-4 col-md-6">
                                                                                <div className="vista_previa__data">
                                                                                    {publicidad.titulo || publicidad.enlace || publicidad.contenido1 || publicidad.contenido2 ?
                                                                                        <>
                                                                                            <h5>{publicidad.titulo}</h5>
                                                                                            <span>{publicidad.enlace}</span>
                                                                                            <p className="texto-previo">
                                                                                                {`${publicidad.contenido1} ${publicidad.contenido2}`}
                                                                                            </p>
                                                                                        </>
                                                                                        :
                                                                                        <p className="texto-previo">
                                                                                            La vista previa de tu publicidad, va aquí.
                                                                                        </p>
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 col-sm-4 col-md-3">
                                                                                <div className="vista_previa__esqueleto">
                                                                                    <span className="bar_previa__1"></span>
                                                                                    <span className="bar_previa__2"></span>
                                                                                    <span className="bar_previa__1"></span>
                                                                                    <span className="bar_previa__1"></span>
                                                                                    <span className="bar_previa__1"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-center footer-bottons">
                                                                    {publicidad.id == undefined ?
                                                                        <button
                                                                            type="button"
                                                                            className="btnRadius btn-new-green btn-izq"
                                                                            onClick={() => savePublicidad('store')}
                                                                        >Crea tu publicidad</button>

                                                                        :
                                                                        <>
                                                                            <button
                                                                                type="button"
                                                                                className="btnRadius btn-new-green btn-izq"
                                                                                onClick={() => savePublicidad('update')}
                                                                            >Actualizar</button>
                                                                            <button
                                                                                type="button"
                                                                                class="btnRadius btn-new-danger btn-der"
                                                                                onClick={() => handleShowModal('delete')}
                                                                            >Borrar</button>
                                                                        </>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toast ref={toastBL} position="bottom-left" />
            <Modal show={showModal} onHide={handleCloseModal} id="modalConfirm" centered size="lg">
                <Modal.Header>
                    {modalContent.current == "update" &&
                        <h4 className="modal-title">¿Deseas actualizar la información de tu cuenta?</h4>
                    }
                    {modalContent.current == "delete" &&
                        <h4 className="modal-title">¿Seguro deseas eliminar la publicidad?</h4>
                    }
                    <button type="button" aria-label="Close" className="close icon-Cerrar-modal" onClick={handleCloseModal}></button>
                </Modal.Header>
                <Modal.Footer>
                    {modalContent.current == "delete" &&
                        <>
                            <button class="btnRadius btn-action btn-new-blue" onClick={handleCloseModal}>No</button>
                            <button class="btnRadius btn-new-danger" onClick={deletePublicidad}>Si</button>
                        </>
                    }
                    {modalContent.current == "update" &&
                        <>
                            <button class="btnRadius btn-action btn-new-danger" onClick={handleCloseModal}>Cancelar</button>
                            <button class="btnRadius btn-new-green" onClick={savePublicidad}>Actualizar</button>
                        </>
                    }
                </Modal.Footer>
            </Modal>
        </AuthenticatedLayout >
    )
}

export default MiCuenta