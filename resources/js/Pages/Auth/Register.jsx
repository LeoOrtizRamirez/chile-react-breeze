import React from "react";
import { useEffect, useState } from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import Modal from "react-bootstrap/Modal";
//
import { Paises } from "@/Components/Paises";
import PasswordSecurity from "@/Components/PasswordSecurity";
import Header from "@/Components/Header/HeaderLite";
import ModalTC from "@/Components/Modals/ModalTC";
import ModalPP from "@/Components/Modals/ModalPP";
import ModalLoginSesion from "@/Components/Modals/ModalLoginSesion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//
import "@fontsource/poppins";
import "./Register.css";

export default function Register(props) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        phone: "",
        password_confirmation: "",

    });

    const [errorIconStatus, setIconStatus] = useState(false);

    const [disabledBtnRegister, setDisableddisabledBtnRegister] =
        useState(true);
    const [disabledClass, setDisabledClass] = useState("disabled");
    const [showModalPaises, setShowModalPaises] = useState(false);
    const [Country, SetCountry] = useState({
        image: "",
        title: null,
        indicative: "+0",
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
            phone: ""
        });
        setInputClass("form-input-section__container-input");
        setValidForm(true);
        props.closeModal(false);
    };

    const onHandleChange = (event) => {
        console.log(event.target);
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const [validated, setValidated] = useState(false);

    /**popup*/
    const [contenedorAvisoCookies, setContenedorAvisoCookies] = useState(false)
    useEffect(() => { setContenedorAvisoCookies(false) }, [])

    const handleSubmit = (event) => {

        var token = document.querySelector('meta[name="csrf-token"]').content;
        document.getElementById("token").value = token;

        var phone = document.getElementById("tel").value;
        var name = document.getElementById("name").value;
        var indicativo = document.getElementById("indicativo").textContent;

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();

        fetch("register/modal", {
            headers: {
                'X-CSRF-TOKEN': token// <--- aquí el token
            },
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "email": data.email,
                "password": data.password,
                "phone": phone,
                "indicativo": indicativo
            })
        })
            .then(r => r.json())
            .then(respuesta => {
                //Abre el popup
                setContenedorAvisoCookies(true)
            });
        /*  post(route("register")); */
    };


    const continuarPopup = () => {
        setContenedorAvisoCookies(false)

        window.location.href = "/perfiles";
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

    function limpiarNumero(obj) {
        /* El evento "change" sólo saltará si son diferentes */
        obj.value = obj.value.replace(/\D/g, "");
    }

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
                        <Form
                            id="form"
                            name="form"
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            <div className="bloque__registro-form">
                                <Form.Group className="bloque__registro-form-div">
                                    <div className="bloque__registro-form-title">
                                        <span className="icon-datos bloque__registro-form-title-span"></span>
                                        <Form.Label
                                            htmlFor=""
                                            for="validationInput"
                                            className="bloque__registro-form-title-label"
                                        >
                                            Nombre:
                                        </Form.Label>
                                    </div>
                                    <div className="bloque__registro-form-container">
                                        <Form.Control
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Ingresa tu nombre completo"
                                            value={data.name}
                                            className="bloque__registro-form-container-input"
                                            autoComplete="name"
                                            isFocused={true}
                                            onChange={(e) => onHandleChange(e)}
                                            pattern="^[A-Za-z\s]+$"
                                            required
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="bloque__registro-form-div">
                                    <div className="bloque__registro-form-title">
                                        <span className="icon-mail bloque__registro-form-title-span"></span>
                                        <Form.Label
                                            htmlFor=""
                                            for="validationInput"
                                            className="bloque__registro-form-title-label"
                                        >
                                            Correo electrónico:
                                        </Form.Label>
                                    </div>
                                    <div className="bloque__registro-form-container">
                                        <Form.Control
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Ingresa tu correo electrónico"
                                            value={data.email}
                                            className="bloque__registro-form-container-input"
                                            autoComplete="username"
                                            onChange={(e) => onHandleChange(e)}
                                            required
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="bloque__registro-form-div">
                                    <div
                                        id="inputPaswordUserRegisterComponent"
                                        className="contenido InputPassword"
                                        name="password"
                                        type="password"
                                    >
                                        <Form.Label
                                            htmlFor=""
                                            for="validationInput"
                                            className="contenido__password-titulo"
                                        >
                                            <span className="contenido__password-titulo-icon icon-lock"></span>
                                            <span>Contraseña:</span>
                                        </Form.Label>
                                        <div className="content-inputs">
                                            <PasswordSecurity
                                                value={data.password}
                                                required
                                                onHandleChange={onHandleChange}
                                                errorIcon="contenido__password-div-icon icon-alert error-icon"
                                                errorIconStatus={
                                                    errorIconStatus
                                                }
                                            />
                                        </div>
                                    </div>
                                </Form.Group>

                                <Form.Group className="bloque__registro-form-div">
                                    <div className="bloque__registro-form-title">
                                        <span className="icon-phone bloque__registro-form-title-span"></span>
                                        <Form.Label
                                            htmlFor=""
                                            className="bloque__registro-form-title-label"
                                        >
                                            Telefono:
                                        </Form.Label>
                                    </div>
                                    <div className="bloque__registro-form-telefono">
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
                                                id="indicativo"
                                            >
                                                {Country.indicative}
                                            </label>
                                            <span className="icon-down bloque__registro-form-telefono-flecha"></span>
                                            <hr className="bloque__registro-form-telefono-linea" />
                                        </div>
                                        <div className="bloque__registro-form-telefono-div">
                                            <Form.Control
                                                id="tel"
                                                name="phone"
                                                type="text"
                                                placeholder="Ingresa tu número"
                                                className="bloque__registro-form-telefono-input"
                                                aria-required="true"
                                                aria-invalid="false"
                                                value={data.phone}
                                                // onChange={handlePhone}
                                                required
                                                pattern="(?=\w*[0-9])\S{10,10}$"
                                            />
                                        </div>
                                    </div>
                                </Form.Group>

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

                                <Form.Group className="bloque__registro-form-text">
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
                                </Form.Group>

                                <Form.Group className="bloque__registro-form-registrarse">
                                    <Button
                                        id="submit"
                                        type="submit"
                                        name="submit"
                                        disabled={disabledBtnRegister}
                                        className={`bloque__registro-form-button ${disabledClass}`}
                                    >
                                        {" "}
                                        Registrarme{" "}
                                    </Button>
                                </Form.Group>
                            </div>
                            <input
                                type="hidden"
                                name="_token"
                                id="token"
                            />

                        </Form>
                        {/*   <PopUpRegistrarse /> */}
                    </div>
                </div>
            </div>

            <>
                {contenedorAvisoCookies &&
                    <div id="modalUsuarioRegistrado" role="dialog" aria-describedby="modalUsuarioRegistrado___BV_modal_body_" className="modal fade show" aria-modal="true" >
                        <div className="modal-dialog modal-md modal-dialog-centered">
                            <span tabindex="0">  </span>
                            <div id="modalUsuarioRegistrado___BV_modal_content_" tabindex="-1" className="modal-content">
                                <div id="modalUsuarioRegistrado___BV_modal_body_" >
                                    <div className="titulo">
                                        <span className="titulo__icono icon-success">  </span>
                                        <span className="titulo__texto">
                                            Bienvenido {data.name}, <span className="titulo__texto--modifier"> creaste</span> tu cuenta </span>
                                    </div>

                                    <div className="texto-informacion">
                                        <p className="informacion__texto">
                                            Crea <span className="informacion__texto--modifier">
                                                tu primer perfil de negocio, </span>
                                            después de este paso te enviaremos un email de verificación a tu dirección de correo para confirmar tu cuenta. </p></div>

                                    <div className="boton">
                                        <a onClick={continuarPopup}>
                                            <span className="boton__continuar">
                                                Continuar
                                            </span>
                                        </a>

                                        {/*  <button className="boton__continuar"> Continuar </button> */}
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>



                }
            </>


        </>
    );
}
