import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import './Solicitud.css'

const Solicitud = ({auth }) => {
    return (
        <AuthenticatedLayout auth={auth} page={'solicitud'}>
            <div className="content_blank_interno margin_left_layout">
                <div className="col">
                    <h2 className="name_seccion_app">Solicitud de publicación</h2>
                </div>
                <div className="procesando-solicitud col">
                    <div className="row justify-content-center ">
                        <div className="col-4 col-md-offset-1">
                            <img src="/public/images/solicitudes/Solicitud.png" alt="" className="procesando-solicitud__imagen-nueva img-fluid"/>
                        </div>
                        <div className="procesando-solicitud__text-dinamic col-6 offset-1">
                            <div className="procesando-solicitud__contenedor-text-dinamic">
                                <span className="procesando-solicitud__iconoB icon-Bombillo"></span>
                                <p className="procesando-solicitud__span"><span className="blue">¡ Tu solicitud fue creada !</span> Estamos validando la información para que puedas publicarle tu información a todos nuestros usuarios.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    )
}

export default Solicitud