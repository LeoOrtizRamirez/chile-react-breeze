import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
import './Index.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import { useEffect } from "react";

const Index = ({ auth, actividades_economicas }) => {
    const [fakeSectores, setFakeSectores] = useState(actividades_economicas);
    const [sectores, setSectores] = useState(actividades_economicas);
    const [showSegmento, setShowSegmento] = useState(false);
    const [showActividadEconomica, setShowActividadEconomica] = useState(false);
    const [selectedSegmento, setSelectedSegmento] = useState(0);
    const [selectedActividadEconomica, setSelectedActividadEconomica] = useState(0);
    const [inputActividadEconomica, setInputActividadEconomica] = useState(0);



    const [segmentos, setSegmentos] = useState([]);
    const [actividadesEconomicas, setActividadesEconomicas] = useState([]);


    const getSegmento = (parent) => {
        console.log(sectores)
        setSectores(fakeSectores);
        console.log(sectores)
        const input_filter = parent
        const pattern = new RegExp(input_filter, "i");
        const FilteredActividadesEcomomicas = fakeSectores.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });
        setSegmentos(FilteredActividadesEcomomicas);
        setShowSegmento(!showSegmento)
        setSelectedSegmento(parent)
        console.log("here" + selectedSegmento)
    }

    const getActividadEconomica = (parent) => {
        setSectores(fakeSectores);
        const input_filter = parent
        const pattern = new RegExp(input_filter, "i");
        const FilteredActividadesEcomomicas = fakeSectores.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });
        setActividadesEconomicas(FilteredActividadesEcomomicas);
        setShowActividadEconomica(!showActividadEconomica)
        setSelectedActividadEconomica(parent)
    }

    const checked = (id) => {
        setInputActividadEconomica(id)
    }

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Actividades económicas" />
            <div className="contenedor-planes">
                <div className="posicion-opciones-planes">
                    <MenuOpciones />
                </div>
                <div className="bg-white overflow-auto w-full text-center margen-superior">
                    <h2 className="name_section_app">Actividad económica</h2>
                    <div className="container mt-4">
                        <div className="tree_categorias tree_1">
                            <div className="tree_categorias__busqueda mb-3 mb-md-4">
                                <div className="mx-auto">
                                    <input type="text" placeholder="Busca por actividad económica" autocomplete="off" className="form-control m-auto" />
                                    <i className="icon-Cancelar"></i>
                                    <button type="button" className="icon-Buscar-click"><i className="bi bi-search"></i></button>

                                    {sectores.map((sector) => (
                                        <>
                                            {sector.id_padre_sub_categoria == null &&
                                                <>
                                                    <div className="tree-content mt-3 sector" key={sector.id} onClick={() => getSegmento(sector.id)}>
                                                        <i className={`tree-arrow has-child ${sector.childs.length > 0 ? "bi bi-chevron-down" : ""}`}></i>
                                                        <span className="tree-anchor">
                                                            <span className="tree-division tree-division1">
                                                                <span className="tree-division__title my-auto">{sector.nombre}</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    {showSegmento && sector.id == selectedSegmento &&
                                                        <ul className="tree-children">
                                                            {segmentos.map((segmento) => (


                                                                <li data-id="20504" className="tree-node has-child expanded draggable">
                                                                    <div className="tree-content segmento" onClick={() => getActividadEconomica(segmento.id)}>
                                                                        <i className="tree-arrow expanded has-child ltr"></i>
                                                                        {/* <i className="tree-checkbox"></i> */}
                                                                        <span className="tree-anchor">
                                                                            <span className="tree-division tree-division1">
                                                                                <span className="tree-division__title my-auto">{segmento.nombre}</span>
                                                                            </span>
                                                                        </span>
                                                                    </div>

                                                                    {showActividadEconomica && selectedActividadEconomica == segmento.id &&
                                                                        <ul className="tree-children">
                                                                            {actividadesEconomicas.map((childs) => (
                                                                                <li className="tree-node draggable">
                                                                                    <div className="tree-content actividad-economica" onClick={() => checked(childs.id)}>
                                                                                        <input
                                                                                            type="radio"
                                                                                            name="actividad_economica"
                                                                                            onClick={() => checked(childs.id)}
                                                                                            checked={childs.id == inputActividadEconomica ? "checked" : ""}
                                                                                        />
                                                                                        <span className="tree-anchor children">
                                                                                            <span className="tree-division tree-division1">
                                                                                                <span className="tree-division__title my-auto">{childs.nombre}</span>
                                                                                            </span>
                                                                                        </span>
                                                                                    </div>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    }
                                                                </li>



                                                            ))}

                                                        </ul>
                                                    }
                                                </>
                                            }
                                        </>

                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="botones">
                            <Nav.Link href={route("actividades-economicas.create")} className="flex  ml-4 text-probar " >
                            <i class="bi bi-plus-square-fill"></i>
                            </Nav.Link>
                            <Nav.Link href={route("register")} className="flex  ml-4 text-probar " >
                            <i class="bi bi-pencil-fill"></i>
                            </Nav.Link>
                            <Nav.Link href={route("register")} className="flex  ml-4 text-probar " >
                                <i class="bi bi-trash3"></i>
                            </Nav.Link>
                        </div>
                    </div>


                </div>
            </div>
        </AuthenticatedLayout >
    );
};

export default Index;
