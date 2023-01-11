import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Header from "@/Components/Header/HeaderLite";

import './Register.css';
import "@fontsource/poppins";

import Modal from 'react-bootstrap/Modal';
import { Paises } from '@/Components/Paises';
import PasswordSecurity from '@/Components/PasswordSecurity';

export default function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [disabledBtnRegister, setDisableddisabledBtnRegister] = useState(true);
    const [disabledClass, setDisabledClass] = useState("disabled");
    const [showModalPaises, setShowModalPaises] = useState(false);
    const [Country, SetCountry] = useState(
        { "image": "", "title": "", "indicative": "+0", "fixed": null },
    )

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    const handleCloseModalPaises = () => setShowModalPaises(false);
    const handleShowModalPaises = () => setShowModalPaises(true);

    const addCountry = (country) => {
        SetCountry(country)
        setShowModalPaises(false)
    }

    const handleInputChange = (event) => {
        if (event.target.name == "terms") {
            if (event.target.checked) {
                setDisableddisabledBtnRegister(false)
                setDisabledClass("")
            } else {
                setDisableddisabledBtnRegister(true)
                setDisabledClass("disabled")
            }
        }
        /*
        setData({
            ...data,//Hace una pseudo copia de data
            [event.target.name]: event.target.value
        })
        */
    }

    return (
        <>
            <Head title="Register" />
            <Header user={props}></Header>
            <div id="register-container" className='container'>
                <div className="bloque row">
                    <div className="bloque__info col-lg-6">
                        <div className="bloque__info-container">
                            <div className="bloque__info-header">
                                <div className="bloque__info-header-title">
                                    <span className="bloque__info-header-title-text">Crea una <img
                                        src="/icons/multicolor/crear cuenta.svg" alt="Crea una cuenta gratis"
                                        className="bloque__info-header-title-img" />
                                        <span
                                            className="bloque__info-header-title-text--modifier">cuenta gratis</span></span>
                                </div>
                                <div className="bloque__info-header-cuenta">
                                    <span className="bloque__info-header-cuenta-text"> ¿Ya tienes una cuenta?
                                        <a href={route('login')}>
                                            <span className="bloque__info-header-cuenta-text--modifier">Inicia sesión</span>
                                        </a>
                                    </span>

                                </div>
                            </div>
                            <div className="bloque__info-contenido">
                                <div className="bloque__info-contenido-div">
                                    <div className="bloque__info-contenido-img">
                                        <img src="/icons/multicolor/servicio.svg" alt="Servicio"
                                            className="bloque__info-contenido-img--modifier" />
                                    </div>
                                    <div className="bloque__info-contenido-text">
                                        <span className="bloque__info-contenido-text-span"> Al crear tu
                                            cuenta tendrás <span className="bloque__info-contenido-text-span--modifier">30 días de servicio
                                            </span> sin ningún costo. </span>
                                    </div>
                                </div>
                                <div className="bloque__info-contenido-div">
                                    <div className="bloque__info-contenido-img">
                                        <img src="/icons/multicolor/licitaciones.svg" alt=""
                                            className="bloque__info-contenido-img--modifier" />
                                    </div>
                                    <div className="bloque__info-contenido-text">
                                        <span className="bloque__info-contenido-text-span"> Te damos acceso
                                            a <span className="bloque__info-contenido-text-span--modifier">todas las Licitaciones </span> y
                                            contrataciones del estado en Colombia, Ecuador y Panamá. </span>
                                    </div>
                                </div>
                                <div className="bloque__info-contenido-div">
                                    <div className="bloque__info-contenido-img">
                                        <img src="/icons/multicolor/notificaciones.svg" alt=""
                                            className="bloque__info-contenido-img--modifier" />
                                    </div>
                                    <div className="bloque__info-contenido-text">
                                        <span className="bloque__info-contenido-text-span"> Te enviamos <span className="bloque__info-contenido-text-span--modifier">notificaciones diarias </span> con la
                                            información de tu interés. </span>
                                    </div>
                                </div>
                                <div className="bloque__info-contenido-div">
                                    <div className="bloque__info-contenido-img">
                                        <img src="/icons/multicolor/funcionalidades.svg" alt=""
                                            className="bloque__info-contenido-img--modifier" />
                                    </div>
                                    <div className="bloque__info-contenido-text">
                                        <span className="bloque__info-contenido-text-span"> Utiliza todas
                                            las <span className="bloque__info-contenido-text-span--modifier">funcionalidades </span> para
                                            ahorrar tiempo y dinero en la búsqueda de oportunidades de negocio. </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bloque__registro col-lg-6">
                        <form id="form" name="form" action="">
                            <div className="bloque__registro-form">
                                <div className="bloque__registro-form-div">
                                    <div className="bloque__registro-form-title">
                                        <span className="icon-datos bloque__registro-form-title-span"></span>
                                        <label htmlFor="" className="bloque__registro-form-title-label">Nombre:</label>
                                    </div>
                                    <div className="bloque__registro-form-container">
                                        <input id="name" name="name" type="text" placeholder="Ingresa tu nombre y apellido" className="bloque__registro-form-container-input" aria-required="true" aria-invalid="false" />
                                        <span className=""></span>
                                    </div>
                                </div>
                                <div className="bloque__registro-form-div">
                                    <div className="bloque__registro-form-title">
                                        <span className="icon-mail bloque__registro-form-title-span"></span>
                                        <label htmlFor="" className="bloque__registro-form-title-label">Correo electrónico:</label>
                                    </div>
                                    <div className="bloque__registro-form-container">
                                        <input id="email" name="email" type="email" placeholder="Ingresa tu correo electrónico" className="bloque__registro-form-container-input" aria-required="true" aria-invalid="false" />
                                        <span className=""></span>
                                    </div>
                                </div>
                                <div className="bloque__registro-form-div">
                                    <div id="inputPaswordUserRegisterComponent" className="contenido InputPassword"
                                        name="password" type="password">
                                        <div for="" className="contenido__password-titulo"><span
                                            className="contenido__password-titulo-icon icon-lock"></span><span
                                            >Contraseña:</span>
                                        </div>
                                        <div className="content-inputs">
                                            <PasswordSecurity />
                                        </div>
                                    </div>
                                </div>
                                <div className="bloque__registro-form-div">
                                    <div className="bloque__registro-form-title"><span
                                        className="icon-phone bloque__registro-form-title-span"></span><label for=""
                                            className="bloque__registro-form-title-label">Telefono:</label>
                                    </div>
                                    <div className="bloque__registro-form-telefono">
                                        <div className="bloque__registro-form-telefono-button" onClick={handleShowModalPaises}>
                                            {Country.image == "" ?
                                                <span className="icon-earth bloque__registro-form-telefono-icono"></span>
                                                :
                                                <img src={Country.image} alt="imagen bandera seleccionada" className="contactenos_form--campo-indicativo-bandera" />
                                            }
                                            <label for="" className="bloque__registro-form-telefono-label">{Country.indicative}</label>
                                            <span className="icon-down bloque__registro-form-telefono-flecha"></span>
                                        </div>
                                        <hr className="bloque__registro-form-telefono-linea" />
                                        <div className="bloque__registro-form-telefono-div">
                                            <input id="tel" name="tel" type="text"
                                                placeholder="Ingresa tu número" className="bloque__registro-form-telefono-input"
                                                aria-required="true" aria-invalid="false" /><span className=""></span>
                                        </div>
                                    </div>
                                </div>
                                <Modal show={showModalPaises} onHide={handleCloseModalPaises}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body><Paises addCountry={addCountry} /></Modal.Body>
                                    <Modal.Footer>
                                    </Modal.Footer>
                                </Modal>
                                <div className="bloque__registro-form-text"><label className="checkbox-contain"><span> Acepto <a
                                    href="#">términos,
                                    condiciones</a></span><span><a href="#"> y las políticas de privacidad</a> de
                                        Licitaciones.info S.A.S. </span>
                                    <input type="checkbox" name="terms" onChange={handleInputChange} />
                                    <div className="checkbox-input">

                                    </div>
                                </label>
                                </div>
                                <div className="bloque__registro-form-registrarse">
                                    <button
                                        id="submit"
                                        type="submit"
                                        name="submit"
                                        disabled={disabledBtnRegister}
                                        className={`bloque__registro-form-button ${disabledClass}`}
                                    > Registrarme </button>
                                </div>
                                <div className="bloque__registro-form-beneficios"><a> Conoce los beneficios al registrarse </a>
                                </div>
                            </div>
                            <div>
                            </div>
                            <div>
                            </div>
                            <div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <form onSubmit={submit}>
                <div>
                    <TextInput
                        placeholder="Nombre"
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <TextInput
                        placeholder="Correo"
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">

                    <TextInput
                        placeholder="Contraseña"
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">

                    <TextInput
                        placeholder="Confirmar contraseña"
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Ya estas Registrado?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Registrarme
                    </PrimaryButton>
                </div>
            </form> */}
        </>
    );
}
