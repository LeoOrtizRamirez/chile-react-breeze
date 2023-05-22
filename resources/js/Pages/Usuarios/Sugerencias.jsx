import React, { useState } from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import './Sugerencias.css'
import ModalSugerencias from '@/Components/ModalSugerencias';
import ModalSolicitudCreada from '@/Components/ModalSolicitudCreada';

const Sugerencias = ({ auth }) => {

    const [modalSugerencias, setModalSugerencias] = useState(false)
    const handleCloseModalSugerencias = () => {
        setModalSugerencias(false)
    }
    const handleShowModalSugerencias = () => setModalSugerencias(true);

    const [modalSolicitudCreada, setModalSolicitudCreada] = useState(false)
    const handleCloseModalSolicitudCreada = () => {
        setModalSolicitudCreada(false)
    }
    const handleShowModalSolicitudCreada = () => setModalSolicitudCreada(true);

    return (
        <AuthenticatedLayout auth={auth} page={'sugerencias'}>
            <div className="content_blank_interno margin_left_layout">
                <div className="col">
                    <h2 className="name_seccion_app">Sugerencia de entidades</h2>
                </div>

                <div className="col col-lg-10 col-md-12 col-sm-12 mx-auto py-4 ">
                    <div id="sugerencia-entidades-web" className="sugerencia-entidad-container">
                        <div id="busqueda-entidad-container" className="form-group text-center">
                            <br /><br />
                            <label for="entidad" className="label-entidad">Escribe el nombre o URL de la entidad de tu interés:</label>
                            <br /><br />
                            <div className="franja-busqueda align-items-center">
                                <input type="text" name="entidad" placeholder="Buscar entidad o URL" data-vv-name="busqueda" id="entidadBuscada" className="form-control" />
                                <button type="button" className="submit-busqueda icon-Buscar-click icono-busqueda"></button>
                                <span className="borrar-busqueda icon-Cancelar icono-busqueda" style={{ display: 'none' }}></span>
                            </div>
                            <span className="is-danger-message" style={{ display: 'none' }}>La busqueda debe tener minimo 3 carateres</span>
                        </div>
                        {true &&
                            <div className="results container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="/public/images/sugerencia_entidades/busqueda.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-7 offset-md-1 d-flex align-items-center">
                                        <span className="icon-Bombillo icono-foco d-block "></span>
                                        <p className="mensaje-respuesta d-block text-justify">¿No sabes si actualmente monitoreamos la entidad que te interesa? <span className="mensaje-verde">Búscala ahora</span> mismo y resuelve tu inquietud.</p>
                                    </div>
                                </div>
                            </div>
                        }
                        {false &&
                            <div className="container-fluid results_new">
                                <div className="row  align-items-center text-center">
                                    <div className="text-center col-12 results__menos_resultados">
                                        <p className="my-3">Hemos encontrado <span className="mensaje-amarillo">demasiados resultados</span> con tu búsqueda, aquí te mostraremos algunas <span className="mensaje-azul">sugerencias</span>:</p>
                                        <div className="tablescoop tablebordeada">
                                            <div className="table-responsive">
                                                <div className="tabla_impostor">
                                                    <div className="tabla_impostor__head">
                                                        <div className="tabla_impostor__th">Entidad</div>
                                                        <div className="tabla_impostor__th">Página web de la entidad</div>
                                                    </div>
                                                    <div className="tabla_impostor__body">
                                                        <div className="tabla_impostor__body__results">
                                                            <div className="tabla_impostor__body__td-izq">
                                                                <div className="text-left">
                                                                    <span className="icon-Aprobada"></span>
                                                                    <span className="text-tds">UNIVERSIDAD NACIONAL-SEDE MEDELLIN (Ciencias Agrarias)</span>
                                                                </div>
                                                            </div>
                                                            <div className="tabla_impostor__body__td-der">
                                                                <div className="text-left"><span className="text-tds">http://contratacion.medellin.unal.edu.co/procesos-contratacion/Home.php?action=Mostrarcarpeta&amp;repo_id=e2843c1b-940d-4b68-bd6b-1b205e4ff939&amp;unidad=CIENCIAS%20AGRARIAS&amp;dependencia=ciencias_agrarias</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="separador-dasheado"></div>
                                    </div>
                                    <button className="btn-reintentar btn btn-outline btn-new-gray mx-auto btnRadius d-inline-block">Reintentar búsqueda</button>
                                </div>
                            </div>
                        }

                        {false &&
                            <div className="container-fluid results_new">
                                <div className="row  align-items-center text-center">
                                    <div className="text-center col-12 results__menos_resultados">
                                        <p class="my-3">Entidades <span class="mensaje-azul">similares</span> encontradas con la búsqueda "CAJA DE SUELDOS DE RETIRO DE LA POLICIA NACIONALe"</p>
                                        <div className="tablescoop tablebordeada">
                                            <div className="table-responsive">
                                                <div className="tabla_impostor">
                                                    <div className="tabla_impostor__head">
                                                        <div className="tabla_impostor__th">Entidad</div>
                                                        <div className="tabla_impostor__th">Página web de la entidad</div>
                                                    </div>
                                                    <div className="tabla_impostor__body">
                                                        <div className="tabla_impostor__body__results">
                                                            <div className="tabla_impostor__body__td-izq">
                                                                <div className="text-left">
                                                                    <span className="icon-Aprobada"></span>
                                                                    <span className="text-tds">UNIVERSIDAD NACIONAL-SEDE MEDELLIN (Ciencias Agrarias)</span>
                                                                </div>
                                                            </div>
                                                            <div className="tabla_impostor__body__td-der">
                                                                <div className="text-left"><span className="text-tds">http://contratacion.medellin.unal.edu.co/procesos-contratacion/Home.php?action=Mostrarcarpeta&amp;repo_id=e2843c1b-940d-4b68-bd6b-1b205e4ff939&amp;unidad=CIENCIAS%20AGRARIAS&amp;dependencia=ciencias_agrarias</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="separador-dasheado"></div>
                                        <p class="my-3 text-left">Si <span class="mensaje-rojo">no encontraste</span> la entidad que estabas buscando, si deseas que hagamos un monitoreo por favor da click en "<span class="mensaje-azul">Sugerir entidad</span>"</p>
                                    </div>
                                    <button class="btn-sugerencia btn btn-outline btn-new-blue mx-auto btnRadius d-inline-block" onClick={handleShowModalSugerencias}>Sugerir entidad</button>
                                </div>
                            </div>
                        }

                        {false &&
                            <div class="container-fluid results_new">
                                <div class="row align-items-center">
                                    <div class="col-md-5">
                                        <img src="/public/images/sugerencia_entidades/no_monitoreada.png" alt="" class="img-fluid" />
                                    </div>
                                    <div class="col-md-6 offset-md-1 text-center">
                                        <div class=" d-flex align-items-center">
                                            <span class="icon-Bombillo icono-foco d-block "></span>
                                            <p class="mensaje-respuesta respuesta-ausente d-block text-justify"><span class="mensaje-rojo">Actualmente no monitoreamos</span> la entidad que estás buscando, si deseas que hagamos un monitoreo por favor da click en    "<span class="mensaje-azul">Sugerir entidad</span>"</p>
                                        </div>
                                        <button class="btn-sugerencia btn btn-outline btn-new-blue mx-auto btnRadius d-inline-block">Sugerir entidad</button>
                                    </div>
                                </div>
                            </div>
                        }
                        {false &&
                            < div class="container-fluid results_new">
                                <div class="row  align-items-center">
                                    <div class="col-md-4">
                                        <img src="/images/sugerencia_entidades/entidad_monitoreada.png" alt="" class="img-fluid" />
                                    </div>
                                    <div class="col-md-7 offset-md-1 text-center">
                                        <div class="d-flex align-items-center">
                                            <span class="icon-Bombillo icono-foco d-block "></span>
                                            <p class="mensaje-respuesta d-block text-justify respuesta-encontrada"><span class="mensaje-verde">¡ Excelente !</span> Actualmente monitoreamos todas las oportunidades de negocio de esta entidad.</p>
                                        </div>
                                        <a href="https://col.licitaciones.info/cliente/contratos#/?letra=ALL&amp;EntidadContratante=CAJA%20DE%20SUELDOS%20DE%20RETIRO%20DE%20LA%20POLICIA%20NACIONAL" class="btn-ver-procesos btn btn-outline btn-new-green mx-auto btnRadius d-inline-block">Ver todos los procesos de la entidad</a>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <ModalSugerencias
                showModal={modalSugerencias}
                modalId="modalSugerir"
                handleCloseModal={handleCloseModalSugerencias}
            />
            <ModalSolicitudCreada
                showModal={modalSolicitudCreada}
                modalId="modalSolicitudCreada"
                handleCloseModal={handleCloseModalSolicitudCreada}
            />
        </AuthenticatedLayout >
    )
}

export default Sugerencias