import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, Head } from "@inertiajs/inertia-react";
import "./Index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";

/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";
import "../../../css/font-unicolor.css";
import "../../../css/font-web.css";

/*Toast*/

const Index = ({ auth, grupos }) => {
    const [data, setData] = useState(grupos)
    return (
        <>
            <AuthenticatedLayout auth={auth}>
                <div className="col contenido_internas ">
                    <div className="position-relative d-block">
                        <div className="content_blank_interno margin_left_layout">
                            <div className="col"><h2 className="name_seccion_app">Administrar perfil (es) de negocio</h2>
                            </div>
                            <div className="col">
                                <div id="perfil-list" className="">
                                    <div className="tablescoop position-relative tablebordeada">
                                        <div className="cargando_tables" style={{ display: 'none' }}>
                                            <div className="col">
                                                <img src="https://col.licitaciones.info/img/loading.gif" className="img-col" />
                                                <p>Cargando</p>
                                            </div>
                                        </div>
                                        <div className="befor_table">
                                        </div>
                                        <div className="VueTables VueTables--server">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group form-inline float-left VueTables__search">

                                                    </div>
                                                    <div className="form-group form-inline float-right VueTables__limit">
                                                        <div className="m-0 w-100">
                                                            <div className="text-left reloadTable row" style={{ margin: 0 + 'px !important;' }}>
                                                                <div id="top-botones" className="mb-2 mb-lg-0">
                                                                    <a role="button" className="btn btn-default fa fa-refresh btnsBoot" style={{ marginBottom: 10 + 'px;' }}></a>

                                                                    {/* <a role="button" className="btn btn-default btnsBoot">Limpiar</a> */}

                                                                    <a href="https://col.licitaciones.info/cliente/grupo/crear" role="button" className="btn btn-new-green btnRadius"><span className="icon-Crear volver_icon">
                                                                    </span> Crear perfil </a>

                                                                </div>
                                                                <div className="col-12 col-lg-7 col-xl-6 p-0 paginacion_grid text-center text-lg-right ">
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                
                                            </div>
                                            <div className="paginacion_grid">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
