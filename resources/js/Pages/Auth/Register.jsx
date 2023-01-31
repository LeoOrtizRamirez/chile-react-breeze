import React from "react";
import { useEffect, useState } from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Modal from "react-bootstrap/Modal";
//
import { Paises } from "@/Components/Paises";
import TextInput from "@/Components/TextInput";
import PasswordSecurity from "@/Components/PasswordSecurity";
import Header from "@/Components/Header/HeaderLite";
import ModalTC from "@/Components/Modals/ModalTC";
import ModalPP from "@/Components/Modals/ModalPP";
import ModalLoginSesion from "@/Components/Modals/ModalLoginSesion";
//
import "@fontsource/poppins";
import "./Register.css";

export default function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [inputClass, setInputClass] = useState(
        "bloque__registro-form-container-input"
    );

    const [inputClassPrefTel, setInputClassPrefTel] = useState(
        "bloque__registro-form-telefono"
    );

    const [inputClassTel, setInputClassTel] = useState(
        "bloque__registro-form-telefono-input"
    );

    const [errorIconStatus, setIconStatus] = useState(false);

    const [validForm, setValidForm] = useState(true);

    const [disabledBtnRegister, setDisableddisabledBtnRegister] =
        useState(true);
    const [disabledClass, setDisabledClass] = useState("disabled");
    const [showModalPaises, setShowModalPaises] = useState(false);
    const [Country, SetCountry] = useState({
        image: "/public/images/banderas/listado_nombres/CHL.svg",
        title: "Chile",
        indicative: "+56",
        fixed: null,
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const [showLS, setShowLS] = useState(props.setShowLS);
    useEffect(() => {
        setShowLS(props.setShowLS);

        setData({
            email: data.email,
            password: data.password,
            remember: data.remember,
            url_modal: props.url,
        });
    }, [props.setShowLS]);

    const handleShowLS = () => setShowLS(true);
    const handleCloseLS = () => {
        setShowLS(false);
        setData({
            email: "",
            password: "",
        });
        setInputClass("form-input-section__container-input");
        setValidForm(true);
        props.closeModal(false);
    };

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
        if (errors) {
            setInputClass("form-container-input-errors");
            setInputClassPrefTel("bloque__registro-form-telefono-errors");
            setInputClassTel(
                "form-container-input-errors bloque__registro-form-telefono-input-errors"
            );
            setIconStatus(
                "form-container-input-errors bloque__registro-form-telefono-input-errors"
            );
            setValidForm(false);
        }
    };

    const handleCloseModalPaises = () => setShowModalPaises(false);
    const handleShowModalPaises = () => setShowModalPaises(true);

    const addCountry = (country) => {
        SetCountry(country);
        setShowModalPaises(false);
    };

    const handleInputChange = (event) => {
        if (event.target.name == "terms") {
            if (event.target.checked) {
                setDisableddisabledBtnRegister(false);
                setDisabledClass("");
            } else {
                setDisableddisabledBtnRegister(true);
                setDisabledClass("disabled");
            }
        }

        setData({
            ...data, //Hace una pseudo copia de data
            [event.target.name]: event.target.value,
        });
    };

    const [showTC, setShowTC] = useState(false);
    const handleCloseTC = () => setShowTC(false);
    const handleShowTC = () => setShowTC(true);

    const [showPP, setShowPP] = useState(false);
    const handleClosePP = () => setShowPP(false);
    const handleShowPP = () => setShowPP(true);

    // const [showLS, setShowLS] = useState(false);
    // const handleCloseLS = () => setShowLS(false);
    // const handleShowLS = () => setShowLS(true);

    return (
        <>
            <Head title="Register" />
            <Header user={props}></Header>
            <div id="register-container" className="container">
                <div className="bloque row">
                    <div className="bloque__info col-lg-6">
                        <div className="bloque__info-container">
                            <div className="bloque__info-header">
                                <div className="bloque__info-header-title">
                                    <span className="bloque__info-header-title-text">
                                        Crea una{" "}
                                        <img
                                            src="/public/icons/multicolor/crear cuenta.svg"
                                            alt="Crea una cuenta gratis"
                                            className="bloque__info-header-title-img"
                                        />
                                        <span className="bloque__info-header-title-text--modifier">
                                            cuenta gratis
                                        </span>
                                    </span>
                                </div>
                                <div className="bloque__info-header-cuenta">
                                    <span className="bloque__info-header-cuenta-text">
                                        {" "}
                                        ¿Ya tienes una cuenta?&nbsp;&nbsp;&nbsp;
                                        <a onClick={handleShowLS}>
                                            <span className="bloque__info-header-cuenta-text--modifier">
                                                Inicia sesión
                                            </span>
                                        </a>
                                        <ModalLoginSesion
                                            showLS={showLS}
                                            handleCloseLS={handleCloseLS}
                                        ></ModalLoginSesion>
                                    </span>
                                </div>
                            </div>
                            <div className="bloque__info-contenido">
                                <div className="bloque__info-contenido-div">
                                    <div className="bloque__info-contenido-img">
                                        <img
                                            src="/public/icons/multicolor/servicio.svg"
                                            alt="Servicio"
                                            className="bloque__info-contenido-img--modifier"
                                        />
                                    </div>
                                    <div className="bloque__info-contenido-text">
                                        <span className="bloque__info-contenido-text-span">
                                            {" "}
                                            Al crear tu cuenta tendrás{" "}
                                            <span className="bloque__info-contenido-text-span--modifier">
                                                30 días de servicio
                                            </span>{" "}
                                            sin ningún costo.{" "}
                                        </span>
                                    </div>
                                </div>
                                <div className="bloque__info-contenido-div">
                                    <div className="bloque__info-contenido-img">
                                        <img
                                            src="/public/icons/multicolor/licitaciones.svg"
                                            alt=""
                                            className="bloque__info-contenido-img--modifier"
                                        />
                                    </div>
                                    <div className="bloque__info-contenido-text">
                                        <span className="bloque__info-contenido-text-span">
                                            {" "}
                                            Te damos acceso a{" "}
                                            <span className="bloque__info-contenido-text-span--modifier">
                                                todas las Licitaciones{" "}
                                            </span>{" "}
                                            y contrataciones del estado en
                                            Colombia, Ecuador y Panamá.{" "}
                                        </span>
                                    </div>
                                </div>
                                <div className="bloque__info-contenido-div">
                                    <div className="bloque__info-contenido-img">
                                        <img
                                            src="/public/icons/multicolor/notificaciones.svg"
                                            alt=""
                                            className="bloque__info-contenido-img--modifier"
                                        />
                                    </div>
                                    <div className="bloque__info-contenido-text">
                                        <span className="bloque__info-contenido-text-span">
                                            {" "}
                                            Te enviamos{" "}
                                            <span className="bloque__info-contenido-text-span--modifier">
                                                notificaciones diarias{" "}
                                            </span>{" "}
                                            con la información de tu interés.{" "}
                                        </span>
                                    </div>
                                </div>
                                <div className="bloque__info-contenido-div">
                                    <div className="bloque__info-contenido-img">
                                        <img
                                            src="/public/icons/multicolor/funcionalidades.svg"
                                            alt=""
                                            className="bloque__info-contenido-img--modifier"
                                        />
                                    </div>
                                    <div className="bloque__info-contenido-text">
                                        <span className="bloque__info-contenido-text-span">
                                            {" "}
                                            Utiliza todas las{" "}
                                            <span className="bloque__info-contenido-text-span--modifier">
                                                funcionalidades{" "}
                                            </span>{" "}
                                            para ahorrar tiempo y dinero en la
                                            búsqueda de oportunidades de
                                            negocio.{" "}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bloque__registro col-lg-6">
                        <form id="form" name="form" onSubmit={submit}>
                            <div className="bloque__registro-form">
                                <div className="bloque__registro-form-div">
                                    <div className="bloque__registro-form-title">
                                        <span className="icon-datos bloque__registro-form-title-span"></span>
                                        <label
                                            htmlFor=""
                                            className="bloque__registro-form-title-label"
                                        >
                                            Nombre:
                                        </label>
                                    </div>
                                    <div className="bloque__registro-form-container">
                                        <TextInput
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Ingresa tu nombre completo"
                                            value={data.name}
                                            className={inputClass}
                                            autoComplete="name"
                                            isFocused={true}
                                            handleChange={onHandleChange}
                                            // required
                                        />
                                        {!validForm && (
                                            <span className="icon-alert"></span>
                                        )}
                                    </div>
                                </div>
                                <div className="bloque__registro-form-div">
                                    <div className="bloque__registro-form-title">
                                        <span className="icon-mail bloque__registro-form-title-span"></span>
                                        <label
                                            htmlFor=""
                                            className="bloque__registro-form-title-label"
                                        >
                                            Correo electrónico:
                                        </label>
                                    </div>
                                    <div className="bloque__registro-form-container">
                                        <TextInput
                                            placeholder="Ingresa tu correo electrónico"
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className={inputClass}
                                            autoComplete="username"
                                            handleChange={onHandleChange}
                                            // required
                                        />
                                        {!validForm && (
                                            <span className="icon-alert"></span>
                                        )}
                                    </div>
                                </div>
                                <div className="bloque__registro-form-div">
                                    <div
                                        id="inputPaswordUserRegisterComponent"
                                        className="contenido InputPassword"
                                        name="password"
                                        type="password"
                                    >
                                        <div
                                            htmlFor=""
                                            className="contenido__password-titulo"
                                        >
                                            <span className="contenido__password-titulo-icon icon-lock"></span>
                                            <span>Contraseña:</span>
                                        </div>
                                        <div className="content-inputs">
                                            <PasswordSecurity
                                                onHandleChange={onHandleChange}
                                                errorIcon="contenido__password-div-icon icon-alert error-icon"
                                                errorIconStatus={
                                                    errorIconStatus
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bloque__registro-form-div">
                                    <div className="bloque__registro-form-title">
                                        <span className="icon-phone bloque__registro-form-title-span"></span>
                                        <label
                                            htmlFor=""
                                            className="bloque__registro-form-title-label"
                                        >
                                            Telefono:
                                        </label>
                                    </div>
                                    <div className={inputClassPrefTel}>
                                        <div
                                            className="bloque__registro-form-telefono-button"
                                            onClick={handleShowModalPaises}
                                        >
                                            {Country.image == "" ? (
                                                <span className="icon-earth bloque__registro-form-telefono-icono"></span>
                                            ) : (
                                                <img
                                                    src={Country.image}
                                                    alt="imagen bandera seleccionada"
                                                    className="contactenos_form--campo-indicativo-bandera"
                                                />
                                            )}
                                            <label
                                                htmlFor=""
                                                className="bloque__registro-form-telefono-label"
                                            >
                                                {Country.indicative}
                                            </label>
                                            <span className="icon-down bloque__registro-form-telefono-flecha"></span>
                                        </div>
                                        <hr className="bloque__registro-form-telefono-linea" />
                                        <div className="bloque__registro-form-telefono-div">
                                            <input
                                                id="tel"
                                                name="tel"
                                                type="text"
                                                placeholder="Ingresa tu número"
                                                className={inputClassTel}
                                                aria-required="true"
                                                aria-invalid="false"
                                                maxLength="10"
                                            />
                                            {!validForm && (
                                                <span className="icon-alert"></span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Modal
                                    show={showModalPaises}
                                    onHide={handleCloseModalPaises}
                                >
                                    <Modal.Header closeButton></Modal.Header>
                                    <Modal.Body>
                                        <Paises addCountry={addCountry} />
                                    </Modal.Body>
                                    <Modal.Footer></Modal.Footer>
                                </Modal>
                                <div className="bloque__registro-form-text">
                                    <label className="checkbox-contain">
                                        <span>
                                            {" "}
                                            Acepto&nbsp;&nbsp;{" "}
                                            <a onClick={handleShowTC}>
                                                términos, condiciones
                                            </a>
                                            <ModalTC
                                                showTC={showTC}
                                                handleCloseTC={handleCloseTC}
                                            ></ModalTC>
                                        </span>
                                        <span>
                                            &nbsp;&nbsp;y las &nbsp;&nbsp;
                                        </span>
                                        <span>
                                            <a onClick={handleShowPP}>
                                                políticas de privacidad
                                            </a>{" "}
                                            <ModalPP
                                                showPP={showPP}
                                                handleClosePP={handleClosePP}
                                            ></ModalPP>
                                            de Licitaciones.info S.A.S.{" "}
                                        </span>
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            onChange={handleInputChange}
                                        />
                                        <div className="checkbox-input"></div>
                                    </label>
                                    <div></div>
                                </div>
                                <div className="bloque__registro-form-registrarse">
                                    <button
                                        id="submit"
                                        type="submit"
                                        name="submit"
                                        disabled={disabledBtnRegister}
                                        className={`bloque__registro-form-button ${disabledClass}`}
                                    >
                                        {" "}
                                        Registrarme{" "}
                                    </button>
                                </div>
                                <div className="bloque__registro-form-beneficios">
                                    <a>
                                        {" "}
                                        Conoce los beneficios al registrarse{" "}
                                    </a>
                                </div>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
