import React, { useState, useEffect, useRef } from "react";

import "./PasswordSecurity.css";

import TextInput from "@/Components/TextInput";

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

    const handleInputChange = (event) => {
        checkSecurity(event.target.value);
        props.onHandleChange(event);
        /*
        setData({
            ...data,//Hace una pseudo copia de data
            [event.target.name]: event.target.value
        })
        */
    };

    const handleTogglePasswordIcon = (e) => {
        if (refPasswordIcon.current.className == "contenido__password-div-icon icon-show") {
            refPasswordIcon.current.className = "contenido__password-div-icon icon-hide";
            refPasswordInput.current.type = "text";
            refPasswordInput.current.placeholder = "Ingresa tu contraseña";
        } else if(refPasswordIcon.current.className == "contenido__password-div-icon icon-hide"){
            refPasswordIcon.current.className = "contenido__password-div-icon icon-show";
            refPasswordInput.current.type = "password";
            refPasswordInput.current.placeholder = "Contraseña1234";
        }else{
            if(refPasswordInput.current.type == "text"){
                refPasswordInput.current.type = "password";
                refPasswordInput.current.placeholder = "Contraseña1234";
            }else{
                refPasswordInput.current.type = "text";
                refPasswordInput.current.placeholder = "Ingresa tu contraseña";
            }
            
            
        }
    };

    return (
        <>
            <div className="contenido__password">
                <div className="contenido__password-div">
                    <input
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        name="password"
                        className={`contenido__password-div-input ${props.errorIconStatus && "error-input"}`}
                        autoComplete="new-password"
                        onChange={handleInputChange}
                        required
                        ref={refPasswordInput}
                    />
                    {props.errorIconStatus ?
                        <span 
                            className="contenido__password-div-icon icon-alert error-icon"
                            onClick={handleTogglePasswordIcon}
                            ref={refPasswordIcon}
                        >
                        </span>
                    :
                        <span
                            className="contenido__password-div-icon icon-show"
                            onClick={handleTogglePasswordIcon}
                            ref={refPasswordIcon}
                        />
                    }
                </div>
            </div>
            <div className="contenido__nivel">
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
            </div>
        </>
    );
};

export default PasswordSecurity;
