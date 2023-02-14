import React, { useState, useRef } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover ";
import Form from "react-bootstrap/Form";
import "./PasswordSecurity.css";
import PopoverBody from "react-bootstrap/PopoverBody";

const PasswordSecurity = (props, onHandleChange) => {
    const [securityColor, setSecurityColor] = useState("gray");
    const [securityName, setSecurityName] = useState("no ingresada");
    const [securityMinima, setsecurityMinima] = useState(false);
    const [securityMedia, setsecurityMedia] = useState(false);
    const [securityFuerte, setsecurityFuerte] = useState(false);
    const [securityMuyFuerte, setsecurityMuyFuerte] = useState(false);

    let refPasswordIcon = useRef();
    let refPasswordInput = useRef();

    const checkSecurity = (words) => {
        words = String(words).trim();
        const regxs = {
            lower: /^[a-z?]+$/,
            upper: /^[A-Z]+$/,
            number: /^[0-9]+$/,
            upperLower: /^[A-Za-z]+$/,
            upperNumber: /^[A-Z0-9]+$/,
            lowerNumber: /^[a-z0-9]+$/,
            upperLowerNumber: /^[A-Za-z0-9]+$/,
        };
        if (words.length > 0 && words.length < 6) {
            if (
                regxs.lower.test(words) ||
                regxs.upper.test(words) ||
                regxs.number.test(words)
            ) {
                setSecurityColor("red");
                setSecurityName("Mínima");
                setsecurityMinima(true);
                setsecurityMedia(false);
                setsecurityFuerte(false);
                setsecurityMuyFuerte(false);
            } else if (
                regxs.upperLower.test(words) ||
                regxs.upperNumber.test(words) ||
                regxs.lowerNumber.test(words)
            ) {
                setSecurityColor("yellow");
                setSecurityName("Media");
                setsecurityMedia(true);

                setsecurityMinima(false);
                setsecurityFuerte(false);
                setsecurityMuyFuerte(false);
            } else if (regxs.upperLowerNumber.test(words)) {
                setSecurityColor("green");
                setSecurityName("Fuerte");
                setsecurityFuerte(true);

                setsecurityMinima(false);
                setsecurityMedia(false);
                setsecurityMuyFuerte(false);
            }
        } else if (words.length == 0) {
            setSecurityColor("gray");
            setSecurityName("no ingresada");
            setsecurityMinima(false);
            setsecurityMedia(false);
            setsecurityFuerte(false);
            setsecurityMuyFuerte(false);
        } else {
            if (
                regxs.lower.test(words) ||
                regxs.upper.test(words) ||
                regxs.number.test(words)
            ) {
                setSecurityColor("yellow");
                setSecurityName("Media");
                setsecurityMedia(true);

                setsecurityMinima(false);
                setsecurityFuerte(false);
                setsecurityMuyFuerte(false);
            } else if (
                regxs.upperLower.test(words) ||
                regxs.upperNumber.test(words) ||
                regxs.lowerNumber.test(words)
            ) {
                setSecurityColor("green");
                setSecurityName("Fuerte");
                setsecurityFuerte(true);

                setsecurityMinima(false);
                setsecurityMedia(false);
                setsecurityMuyFuerte(false);
            } else if (regxs.upperLowerNumber.test(words)) {
                setSecurityColor("green-dark");
                setSecurityName("Muy fuerte");
                setsecurityMuyFuerte(true);

                setsecurityMinima(false);
                setsecurityMedia(false);
                setsecurityFuerte(false);
            }
        }
    };

    const [minCharacter, setMinCharacter] = useState(false);
    const popoverSecurityMinCharacter = (words) => {
        words = String(words).trim();
        const regxs = {
            lower: /(?=\w*[a-z])/,
            upper: /(?=\w*[A-Z])/,
            number: /(?=\w*\d)/,
            especial: /(?=\w*[\u0021-\u002b\u003c-\u0040])/,
        };
        if (words.length >= 6) {
            if (
                regxs.lower.test(words) ||
                regxs.upper.test(words) ||
                regxs.number.test(words) ||
                regxs.especial.test(words)
            ) {
                setMinCharacter("green");
            }
        } else {
            setMinCharacter("gray");
        }
    };

    const [capitalCharacter, setCapitalCharacter] = useState(false);
    const popoverSecurityCapitalCharacter = (words) => {
        words = String(words).trim();
        const regxs = {
            upper: /(?=\w*[A-Z])/,
        };
        if (regxs.upper.test(words)) {
            if (regxs.upper.test(words)) {
                setCapitalCharacter("green");
            }
        } else {
            setCapitalCharacter("gray");
        }
    };

    const [lowerCharacter, setLowerCharacter] = useState(false);
    const popoverSecurityLowerCharacter = (words) => {
        words = String(words).trim();
        const regxs = {
            lower: /(?=\w*[a-z])/,
        };
        if (regxs.lower.test(words)) {
            if (regxs.lower.test(words)) {
                setLowerCharacter("green");
            }
        } else {
            setLowerCharacter("gray");
        }
    };

    const [numberCharacter, setNumberCharacter] = useState(false);
    const popoverSecurityNumberCharacter = (words) => {
        words = String(words).trim();
        const regxs = {
            number: /(?=\w*\d)/,
        };
        if (regxs.number.test(words)) {
            if (regxs.number.test(words)) {
                setNumberCharacter("green");
            }
        } else {
            setNumberCharacter("gray");
        }
    };

    const handleInputChange = (event) => {
        checkSecurity(event.target.value);
        props.onHandleChange(event);

        popoverSecurityMinCharacter(event.target.value);
        props.onHandleChange(event);

        popoverSecurityCapitalCharacter(event.target.value);
        props.onHandleChange(event);

        popoverSecurityLowerCharacter(event.target.value);
        props.onHandleChange(event);

        popoverSecurityNumberCharacter(event.target.value);
        props.onHandleChange(event);
    };

    const handleTogglePasswordIcon = (e) => {
        if (
            refPasswordIcon.current.className ==
            "contenido__password-div-icon icon-show"
        ) {
            refPasswordIcon.current.className =
                "contenido__password-div-icon icon-hide";
            refPasswordInput.current.type = "text";
            refPasswordInput.current.placeholder = "Ingresa tu contraseña";
        } else if (
            refPasswordIcon.current.className ==
            "contenido__password-div-icon icon-hide"
        ) {
            refPasswordIcon.current.className =
                "contenido__password-div-icon icon-show";
            refPasswordInput.current.type = "password";
            refPasswordInput.current.placeholder = "Contraseña1234";
        } else {
            if (refPasswordInput.current.type == "text") {
                refPasswordInput.current.type = "password";
                refPasswordInput.current.placeholder = "Contraseña1234";
            } else {
                refPasswordInput.current.type = "text";
                refPasswordInput.current.placeholder = "Ingresa tu contraseña";
            }
        }
    };

    const popoverHoverFocus = (
        <Popover
            bsPrefix="popover"
            id="popover-trigger-hover-focus"
            title="Popover top"
        >
            <PopoverBody bsPrefix="popover-body">
                <div className="contenido-popover-register">
                    <div className="contenido__informacion-seguridad">
                        <div className="title">
                            <span>Requisito de contraseña</span>
                        </div>
                        <div className="espacio-opciones">
                            <span
                                className={`contenido__seguridad-icon icon-info c-${minCharacter}`}
                            ></span>
                            <p>Mínimo 6 caracteres</p>
                        </div>
                        <hr />
                        <div className="title">
                            <span>Puede ser más segura si contiene</span>
                        </div>
                        <div className="espacio-opciones">
                            <span
                                className={`contenido__seguridad-icon icon-info c-${capitalCharacter}`}
                            ></span>
                            <p>1 carácter en mayúscula</p>
                        </div>
                        <div className="espacio-opciones">
                            <span
                                className={`contenido__seguridad-icon icon-info c-${lowerCharacter}`}
                            ></span>
                            <p>1 carácter en minúscula</p>
                        </div>
                        <div className="espacio-opciones">
                            <span
                                className={`contenido__seguridad-icon icon-info c-${numberCharacter}`}
                            ></span>
                            <p>1 carácter numérico</p>
                        </div>
                    </div>
                </div>
            </PopoverBody>
        </Popover>
    );

    return (
        <>
            <div className="contenido__password">
                <div className="contenido__password-div">
                    <Form.Control
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        name="password"
                        className="contenido__password-div-input"
                        autoComplete="new-password"
                        onChange={handleInputChange}
                        required
                        pattern="^\S{6,20}$"
                        ref={refPasswordInput}
                    />
                    <span
                        className="contenido__password-div-icon icon-show"
                        onClick={handleTogglePasswordIcon}
                        ref={refPasswordIcon}
                    />
                </div>
            </div>

            <div className="contenido__nivel">
                <OverlayTrigger
                    trigger={["hover", "focus"]}
                    placement="top"
                    overlay={popoverHoverFocus}
                >
                    <div
                        id="tooltip-informacion"
                        className="contenido__nivel-iconos"
                    >
                        <div className="contenido__iconos-seguridad">
                            <div className="contenido__circulo">
                                <div
                                    className={`${
                                        securityMinima &&
                                        `bt-2-${securityColor} br-2-${securityColor} `
                                    } ${
                                        securityMedia &&
                                        `bt-2-${securityColor} br-2-${securityColor} `
                                    } ${
                                        securityFuerte &&
                                        `bt-2-${securityColor} br-2-${securityColor} `
                                    }  ${
                                        securityMuyFuerte &&
                                        `bt-2-${securityColor} br-2-${securityColor} `
                                    } contenido__circulo-esquina__sup-der`}
                                ></div>
                                <div
                                    className={`${
                                        securityMedia &&
                                        `bb-2-${securityColor} br-2-${securityColor} `
                                    } ${
                                        securityFuerte &&
                                        `bb-2-${securityColor} br-2-${securityColor} `
                                    } ${
                                        securityMuyFuerte &&
                                        `bb-2-${securityColor} br-2-${securityColor} `
                                    } contenido__circulo-esquina__inf-der`}
                                ></div>
                                <div
                                    className={`${
                                        securityFuerte &&
                                        `bb-2-${securityColor} bl-2-${securityColor} `
                                    } ${
                                        securityMuyFuerte &&
                                        `bb-2-${securityColor} bl-2-${securityColor} `
                                    } contenido__circulo-esquina__inf-izq securityColor__gris-inf-izq`}
                                ></div>
                                <div
                                    className={`${
                                        securityMuyFuerte &&
                                        `bt-2-${securityColor} bl-2-${securityColor} `
                                    } contenido__circulo-esquina__sup-izq securityColor__gris-sup-izq `}
                                ></div>
                                <span
                                    className={`contenido__seguridad-icon icon-shield c-${securityColor}`}
                                ></span>
                            </div>
                            <span className="contenido__seguridad-text">
                                {" "}
                                Seguridad <br />
                                <span
                                    className={`contenido__seguridad-text--modifier c-${securityColor}`}
                                >
                                    {securityName}
                                </span>
                            </span>
                        </div>
                    </div>
                </OverlayTrigger>
            </div>
        </>
    );
};

export default PasswordSecurity;
