import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "./Index.css";

import "bootstrap/dist/css/bootstrap.min.css";


const Index = ({ auth, carpetas }) => {
    console.log(carpetas)
    return (
        <>
            <AuthenticatedLayout auth={auth} page={'carpetas'}>

                <div className="content_blank_interno margin_left_layout">
                    <div className="col">
                        <h2 className="name_seccion_app">Administrar carpetas</h2>
                    </div>
                    <div>
                        <div class="cabecera">
                            <button class="cabecera__btn-crear-carpeta btnRadius btn-new-green">
                                <i class="icon-Crear"></i> Crea una carpeta</button>
                            <div class="paginacion">
                                <span class="paginacion__registros">1 - 5 de 5 registros</span>
                            </div>
                        </div>
                        <div className="carpetas">
                            <div className="busqueda-rapida">
                                <div class="busqueda-rapida__cont-buscar">
                                    <input type="search" placeholder="Buscar carpeta" class="form-control" />
                                    <button type="button" class="busqueda-rapida__btn-buscar icon-Buscar-click"></button>
                                </div>
                            </div>
                            <div className="list-carpetas">
                                <div className="list-carpetas__cont">
                                    <div className="carpeta">
                                        <div className="carpeta__cont-icon">
                                            <span class="icon-Favorito-click carpeta__icon--favorito"></span>
                                        </div>
                                        <span class="carpeta__nombre--favorito">Mis Favoritos</span>
                                    </div>
                                </div>
                                <div class="list-carpetas__cont">
                                    <div class="carpeta">
                                        <div class="carpeta__cont-icon">
                                            <span class="icon-Eliminar carpeta__icon--papelera">
                                            </span>
                                        </div>
                                        <span class="carpeta__nombre--papelera">Papelera</span>
                                    </div>
                                </div>

                                {carpetas.map((carpeta) => (
                                    <div class="list-carpetas__cont">
                                        <div class="carpeta">
                                            <div class="carpeta__cont-icon">
                                                <span class="icon-Mis-carpetas carpeta__icon" style={{ color: carpeta.color }}>
                                                    <span class="path1">
                                                    </span>
                                                    <span class="path2">
                                                    </span>
                                                </span>
                                            </div>
                                            <span class="carpeta__nombre">{carpeta.nombre_carpeta}</span>
                                            <div class="carpeta__acciones">
                                                <i class="icon-Editar carpeta__btn-editar"></i>
                                                <i class="icon-Eliminar carpeta__btn-eliminar"></i>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
