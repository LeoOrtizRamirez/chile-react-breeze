import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";
import "../../../css/font-unicolor.css";

import '../../../css/font-web.css'
/*Toast*/

const Index = ({ auth, actividades_economicas }) => {
    const myRefs = useRef([]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastIcon, setToastIcon] = useState("");
    const [fakeSectores, setFakeSectores] = useState(actividades_economicas);
    const [sectores, setSectores] = useState(actividades_economicas);
    const [showSegmento, setShowSegmento] = useState(false);
    const [showActividadEconomica, setShowActividadEconomica] = useState(false);
    const [selectedSegmento, setSelectedSegmento] = useState(0);
    const [selectedActividadEconomica, setSelectedActividadEconomica] = useState(0);

    const [openSectores, setOpenSectores] = useState([]);
    const [opeSegmentos, setOpenSegmentos] = useState([]);

    const [inputActividadEconomica, setInputActividadEconomica] = useState({
        id: 0,
        nombre: "",
    });

    const [checksActividadesEconomicas, setChecksActividadesEconomicas] = useState([])

    const [segmentos, setSegmentos] = useState([]);
    const [actividadesEconomicas, setActividadesEconomicas] = useState([]);

    const getSegmento = (parent) => {
        var dom_sector = document.getElementById("sector_" + parent)
        dom_sector.classList.toggle("expanded")
        if (openSectores.includes(parent)) {
            //SE ELIMINA EL SECTOR AL QUE SE LE DIO CLICK SI YA EXISTE EN EL ARRAY openSectores
            setOpenSectores(
                openSectores.filter((element) => element != parent)
            );
        } else {
            //SE AGREGA EL SECTOR AL QUE SE LE DIO CLICK SI NO EXISTE EN EL ARRAY openSectores
            setOpenSectores([...openSectores, parent]); //Se añade el nuevo parent
        }



        //SE BUSCAN LOS SEGMENTOS QUE TENGAN EL id_padre_sub_categoria == AL SECTOR QUE SE LE DIO CLICK
        const pattern = new RegExp(parent, "i");
        const FilteredSegmentos = sectores.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });

        //EN LOS SEGMENTOS QUE SE ENCONTRARON
        FilteredSegmentos.forEach((element) => {
            if (!segmentos.includes(element)) {
                //SI NO EXISTE, SE AGREGA
                segmentos.push(element);
            } else {
                //SI YA EXISTE, SE ELIMINA
                const resultado = segmentos.filter(
                    (segmento) => segmento.id_padre_sub_categoria != parent
                );
                setSegmentos(resultado);
            }
        });
    };

    const getActividadEconomica = (parent) => {
        var dom_segmento = document.getElementById("segmento_" + parent)
        dom_segmento.classList.toggle("expanded")
        if (opeSegmentos.includes(parent)) {
            //SE ELIMINA EL SECTOR AL QUE SE LE DIO CLICK SI YA EXISTE EN EL ARRAY opeSegmentos
            setOpenSegmentos(
                opeSegmentos.filter((element) => element != parent)
            );
        } else {
            //SE AGREGA EL SECTOR AL QUE SE LE DIO CLICK SI NO EXISTE EN EL ARRAY opeSegmentos
            setOpenSegmentos([
                ...opeSegmentos,
                parent,
            ]); //Se añade el nuevo parent
        }

        //SE BUSCAN LOS SEGMENTOS QUE TENGAN EL id_padre_sub_categoria == AL SECTOR QUE SE LE DIO CLICK
        const pattern = new RegExp(parent, "i");
        const FilteredActividadesEcomomicas = sectores.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });

        //EN LOS SEGMENTOS QUE SE ENCONTRARON
        FilteredActividadesEcomomicas.forEach((element) => {
            if (!actividadesEconomicas.includes(element)) {
                //SI NO EXISTE, SE AGREGA
                actividadesEconomicas.push(element);
            } else {
                //SI YA EXISTE, SE ELIMINA
                const resultado = actividadesEconomicas.filter(
                    (segmento) => segmento.id_padre_sub_categoria != parent
                );
                setActividadesEconomicas(resultado);
            }
        });
        setSelectedActividadEconomica(parent);
    };

    const checked = (actividad_economica) => {
        var array_checks = []

        //Se conservan los checks que ya estan guardandolos en el array (array_checks)
        checksActividadesEconomicas.forEach(checks => {
            array_checks.push(checks)
        })

        //Buscar si es un sector
        var sector_childs = fakeSectores.filter(fs => fs.id_padre_sub_categoria == actividad_economica.id && fs.id_abuelo_sub_categoria == null)

        if (sector_childs.length > 0) {
            //CHECK SECTOR - Agregar/Eliminar al array (array_checks)
            if (!array_checks.includes(actividad_economica.id)) {
                array_checks.push(actividad_economica.id)
            } else {
                const index = array_checks.indexOf(actividad_economica.id)
                if (index > -1) {
                    array_checks.splice(index, 1)
                }
            }

            //Recorrer segmentos del sector
            sector_childs.forEach(sc => {
                //Seleccionar actividades economicas de segmentos
                const ac_segmento = fakeSectores.filter(fsa => fsa.id_padre_sub_categoria == sc.id)

                //Si el segmento no esta incluido en el array (array_checks), se agrega
                if (!checksActividadesEconomicas.includes(sc.id)) {
                    array_checks.push(sc.id)

                    //Agregar actividades economicas de segmentos
                    ac_segmento.forEach(ac => {
                        if (!checksActividadesEconomicas.includes(ac.id)) {
                            array_checks.push(ac.id)
                        } else {
                            //Si el segmento ya esta incluido en el array (array_checks), se elimina
                            const index = array_checks.indexOf(ac.id)
                            if (index > -1) {
                                array_checks.splice(index, 1)
                            }
                        }
                    })

                } else {
                    //Si el segmento ya esta incluido en el array (array_checks), se elimina
                    const index = array_checks.indexOf(sc.id)
                    if (index > -1) {
                        array_checks.splice(index, 1)
                    }

                    //Eliminar actividades economicas de segmentos
                    ac_segmento.forEach(ac => {
                        const index = array_checks.indexOf(ac.id)
                        if (index > -1) {
                            array_checks.splice(index, 1)
                        }
                    })
                }
                setChecksActividadesEconomicas(array_checks)
            })


        } else {
            //Buscar si es un segmento
            var segmento_childs = fakeSectores.filter(fs => fs.id_padre_sub_categoria == actividad_economica.id)

            //Si se selecciono un check, se deben buscar las actividades economicas que pertenecen a el y se guardan en el array (array_checks)
            if (segmento_childs.length > 0) {

                //CHECK SEGMENTO - Agregar/Eliminar al array (array_checks)
                if (!array_checks.includes(actividad_economica.id)) {
                    array_checks.push(actividad_economica.id)
                } else {
                    const index = array_checks.indexOf(actividad_economica.id)
                    if (index > -1) {
                        array_checks.splice(index, 1)
                    }
                }


                //Recorrer actividades economicas del segmento
                segmento_childs.forEach(sc => {

                    //Si la actividad economica no esta incluida en el array (array_checks), se agrega
                    if (!checksActividadesEconomicas.includes(sc.id)) {
                        array_checks.push(sc.id)
                    } else {
                        //Si la actividad economica ya esta incluida en el array (array_checks), se elimina
                        const index = array_checks.indexOf(sc.id)
                        if (index > -1) {
                            array_checks.splice(index, 1)
                        }
                    }
                    setChecksActividadesEconomicas(array_checks)
                })
            } else {
                //CHECK SEGMENTO - Agregar/Eliminar al array (array_checks)
                if (!array_checks.includes(actividad_economica.id)) {
                    array_checks.push(actividad_economica.id)
                } else {
                    const index = array_checks.indexOf(actividad_economica.id)
                    if (index > -1) {
                        array_checks.splice(index, 1)
                    }
                }
                setChecksActividadesEconomicas(array_checks)
            }


            //setInputActividadEconomica(actividad_economica);
            /* if (!checksActividadesEconomicas.includes(actividad_economica.id)) {
                setChecksActividadesEconomicas([...checksActividadesEconomicas, actividad_economica.id])
                //array_checks.push(actividad_economica.id)
            } else {
                //SI YA EXISTE, SE ELIMINA
                const resultado = checksActividadesEconomicas.filter(
                    (check) => check != actividad_economica.id
                );
                setChecksActividadesEconomicas(resultado)
                //array_checks.push(resultado)
            } */
            //setChecksActividadesEconomicas([...checksActividadesEconomicas, actividad_economica.id])
        }


    };



    const inputSearchActividadEconomica = (e) => {
        if (e.target.value == "") {
            setSectores(fakeSectores);
            setSegmentos([]);
            setActividadesEconomicas([]);
            setOpenSectores([]);
            setOpenSegmentos([]);
            return;
        }

        if (e.key === "Enter") {
            //SE BUSCAN LAS ACTIVIDADES ECONOMICAS QUE COINCIDAN CON EL NOMBRE QUE SE INGRESO
            const pattern = new RegExp(e.target.value, "i");

            const FilteredActividadesEcomomicas = fakeSectores.filter(function (el) {
                if (pattern.test(el.nombre) || e.target.value == el.id) {
                    return el;
                }
            });

            var sectores_filtrados = [];
            var segmentos_filtrados = [];
            var actividades_economicas_filtrados = [];
            var open_segmentos = [];
            var open_sectores = [];

            FilteredActividadesEcomomicas.forEach((element) => {
                //SI ES ACTIVIDAD ECONOMICA, SE GUARDA SECTOR Y SEGMENTOS TAMBIEN
                if (element.id_abuelo_sub_categoria != null && element.id_padre_sub_categoria != null) {
                    //BUSCAMOS LA ACTIVIDAD ECONOMICA
                    actividades_economicas_filtrados.push(element);
                    open_segmentos.push(
                        element.id_padre_sub_categoria
                    );

                    //BUSCAMOS EL SEGMENTO DE LA ACTIVIDAD ECONOMICA
                    var segmento = fakeSectores.filter((fs) => fs.id == element.id_padre_sub_categoria)[0]
                    if(!segmentos_filtrados.includes(segmento)){
                        segmentos_filtrados.push(segmento)
                    }
                    if(!open_segmentos.includes(element.id_padre_sub_categoria)){
                        open_segmentos.push(element.id_padre_sub_categoria)    
                    }

                    //BUSCAMOS EL SECTOR DE LA ACTIVIDAD ECONOMICA
                    var sector = fakeSectores.filter((fs) => fs.id == element.id_abuelo_sub_categoria)[0]
                    if(!sectores_filtrados.includes(sector)){
                        sectores_filtrados.push(sector);
                    }
                    if(!open_sectores.includes(element.id_abuelo_sub_categoria)){
                        open_sectores.push(element.id_abuelo_sub_categoria);
                    }
                }

                //SI ES SEGMENTO, SE GUARDA SECTOR TAMBIEN
                if (element.id_abuelo_sub_categoria == null && element.id_padre_sub_categoria != null) {
                    if (!segmentos_filtrados.includes(element)) {
                        segmentos_filtrados.push(element);
                    }
                    if (!open_sectores.includes(element.id_padre_sub_categoria)) {
                        open_sectores.push(element.id_padre_sub_categoria);
                    }

                    //BUSCAMOS EL SECTOR DEL SEGMENTOS
                    var sector = fakeSectores.filter((fs) => fs.id == element.id_padre_sub_categoria)[0]
                    if(!sectores_filtrados.includes(sector)){
                        sectores_filtrados.push(sector);
                    }
                    if(!open_sectores.includes(element.id_padre_sub_categoria)){
                        open_sectores.push(element.id_padre_sub_categoria);
                    }
                }

                //SECTOR
                if (element.id_abuelo_sub_categoria == null && element.id_padre_sub_categoria == null) {
                    if (!sectores_filtrados.includes(element)) {
                        sectores_filtrados.push(element);
                    }
                }
            });

            setSectores(sectores_filtrados);
            setSegmentos(segmentos_filtrados);
            setActividadesEconomicas(actividades_economicas_filtrados);
            setOpenSectores(open_sectores);
            setOpenSegmentos(open_segmentos);
        }
    };

    useEffect(() => {

    }, [sectores])

    return (
        <>
            <ToastContainer position="bottom-start">
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={3000}
                    autohide
                >
                    <div
                        className={`notification-toast ${toastIcon == "icon-error" ? "error" : "success"}`}
                    >
                        <span
                            className={`toast-icon ${toastIcon == "icon-error"
                                ? "toast-danger"
                                : "toast-success"
                                }`}
                        >
                            <span className={toastIcon}></span>
                        </span>
                        <p className="title">{toastMessage}</p>
                        <button
                            type="button"
                            className="icon-close m-auto"
                            onClick={() => setShowToast(false)}
                        />
                    </div>
                </Toast>
            </ToastContainer>
            <div className="contenedor-planes">
                <div className="bg-white overflow-auto w-full text-center margen-superior custom-scroll">
                    {/* <h2 className="name_section_app">Crear perfil de negocio</h2>
                    <div className="perfil-guias">
                        <ul>
                            <li>
                                <div className="perfil-guias__indicador perfil-guias__indicador--activo">
                                    <i className="icon-Paso-1-click"></i> <span>Actividad económica</span>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                    <h2 className="perfiles-titulos crear"><span className="c-verde">Crea</span> tu primer perfil de negocio</h2>
                    <div className="container mt-4">
                        <div className="tree_categorias tree_1">
                            <div className="tree_categorias__busqueda mb-3 mb-md-4">
                                {/* <div className="mx-auto">
                                    <input
                                        type="text"
                                        placeholder="Busca por actividad económica o UNSPSC"
                                        autocomplete="off"
                                        className="form-control"
                                        onKeyDown={
                                            inputSearchActividadEconomica
                                        }
                                    />
                                    <i className="icon-Cancelar" style="display: none;"></i>
                                    <button type="button" className="icon-Buscar-click"></button>
                                </div> */}
                                <div className="perfil-guias__indicador perfil-guias__indicador--activo">
                                    <i className="icon-Paso-1-click"></i> <span>Actividad económica</span>
                                </div>
                                <div className="mx-60 mt-30 d-flex">
                                    <button
                                        type="button"
                                        className="icon-Buscar-click"
                                    >
                                        {/* <i className="bi bi-search"></i> */}
                                    </button>
                                    <input
                                        type="text"
                                        placeholder="Busca por actividad económica o UNSPSC"
                                        autoComplete="off"
                                        className="form-control busqueda-input"
                                        onKeyDown={
                                            inputSearchActividadEconomica
                                        }
                                    />
                                    <h2 className="perfiles-titulos d-flex"> Pais de contratación
                                    <img class="bandera" src="/public/images/banderas/listado_nombres/CHL.svg" alt="Bandera Chile"/>
                                    </h2>

                                </div>
                                <br></br>
                                <ul className="tree-root">

                                    {sectores.map((sector) => (
                                        <>
                                            {sector.id_padre_sub_categoria ==
                                                null && (
                                                    <li className={`tree-node has-child draggable ${openSectores.includes(sector.id) ? "expanded" : ""}`} id={"sector_" + sector.id}>
                                                        <div
                                                            id={sector.id}
                                                            className="tree-content mt-3 sector"
                                                            key={sector.id}
                                                        /* onClick={() =>
                                                            getSegmento(
                                                                sector.id
                                                            )
                                                        } */
                                                        >
                                                            <i
                                                                className={`tree-arrow has-child ${sector.childs
                                                                    .length > 0
                                                                    ? "bi bi-chevron-down"
                                                                    : ""
                                                                    }`}
                                                            ></i>
                                                            <input
                                                                type="checkbox"
                                                                name="actividad_economica"
                                                                onChange={() =>
                                                                    checked(
                                                                        sector
                                                                    )
                                                                }
                                                                checked={
                                                                    /* childs.id == inputActividadEconomica.id */

                                                                    checksActividadesEconomicas.includes(sector.id)
                                                                        ? "checked"
                                                                        : ""
                                                                }
                                                            />
                                                            <span className="tree-anchor">
                                                                <span className="tree-division tree-division1" onClick={() =>
                                                                    getSegmento(
                                                                        sector.id
                                                                    )
                                                                }>
                                                                    <span className="tree-division__title my-auto">
                                                                        {
                                                                            sector.nombre
                                                                        }
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                        {/* {showSegmento && sector.id == selectedSegmento && */}
                                                        {openSectores.includes(
                                                            sector.id
                                                        ) && (
                                                                <ul className="tree-children new-class">
                                                                    {segmentos.map(
                                                                        (
                                                                            segmento,
                                                                            index
                                                                        ) => (
                                                                            <>
                                                                                {sector.id ==
                                                                                    segmento.id_padre_sub_categoria && (
                                                                                        <li
                                                                                            className={`tree-node has-child draggable segmento ${opeSegmentos.includes(segmento.id) ? "expanded" : ""}`}
                                                                                            id={"segmento_" + segmento.id}
                                                                                        >
                                                                                            <div
                                                                                                className="tree-content segmento"

                                                                                            >

                                                                                                <i className="tree-arrow has-child ltr"></i>
                                                                                                {/* <i className="tree-checkbox"></i> */}
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    name="actividad_economica"
                                                                                                    onChange={() =>
                                                                                                        checked(
                                                                                                            segmento
                                                                                                        )
                                                                                                    }
                                                                                                    checked={
                                                                                                        /* childs.id == inputActividadEconomica.id */

                                                                                                        checksActividadesEconomicas.includes(segmento.id)
                                                                                                            ? "checked"
                                                                                                            : ""
                                                                                                    }
                                                                                                />
                                                                                                <span className="tree-anchor">
                                                                                                    <span className="tree-division tree-division1" onClick={() =>
                                                                                                        getActividadEconomica(
                                                                                                            segmento.id
                                                                                                        )
                                                                                                    }>
                                                                                                        <>
                                                                                                            {index %
                                                                                                                2 ==
                                                                                                                0 ? (
                                                                                                                <span className="tree-division__title my-auto">
                                                                                                                    {
                                                                                                                        segmento.nombre
                                                                                                                    }
                                                                                                                </span>
                                                                                                            ) : (
                                                                                                                <span className="tree-division__title-gray my-auto">
                                                                                                                    {
                                                                                                                        segmento.nombre
                                                                                                                    }
                                                                                                                </span>
                                                                                                            )}
                                                                                                        </>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>

                                                                                            {/* {showActividadEconomica && selectedActividadEconomica == segmento.id && */}
                                                                                            {opeSegmentos.includes(
                                                                                                segmento.id
                                                                                            ) && (
                                                                                                    <ul className="tree-children actividad-economica">
                                                                                                        {actividadesEconomicas.map(
                                                                                                            (
                                                                                                                childs,
                                                                                                                index
                                                                                                            ) => (
                                                                                                                <>
                                                                                                                    {segmento.id ==
                                                                                                                        childs.id_padre_sub_categoria && (
                                                                                                                            <li className="tree-node draggable">
                                                                                                                                <div
                                                                                                                                    className="tree-content actividad-economica"
                                                                                                                                    onClick={() =>
                                                                                                                                        checked(
                                                                                                                                            childs
                                                                                                                                        )
                                                                                                                                    }
                                                                                                                                >
                                                                                                                                    {/* {childs.id} */}
                                                                                                                                    <input
                                                                                                                                        type="checkbox"
                                                                                                                                        name="actividad_economica"
                                                                                                                                        onChange={() =>
                                                                                                                                            checked(
                                                                                                                                                childs
                                                                                                                                            )
                                                                                                                                        }
                                                                                                                                        checked={
                                                                                                                                            /* childs.id == inputActividadEconomica.id */

                                                                                                                                            checksActividadesEconomicas.includes(childs.id)
                                                                                                                                                ? "checked"
                                                                                                                                                : ""
                                                                                                                                        }
                                                                                                                                    />
                                                                                                                                    <span className="tree-anchor children">
                                                                                                                                        <span className="tree-division tree-division1">
                                                                                                                                            {/*  <span className="tree-division__title my-auto">{childs.nombre}</span> */}
                                                                                                                                            <>

                                                                                                                                                <span className="tree-division__title my-auto">
                                                                                                                                                    {
                                                                                                                                                        childs.nombre
                                                                                                                                                    }
                                                                                                                                                </span>

                                                                                                                                            </>
                                                                                                                                        </span>
                                                                                                                                    </span>
                                                                                                                                </div>
                                                                                                                            </li>
                                                                                                                        )}
                                                                                                                </>
                                                                                                            )
                                                                                                        )}
                                                                                                    </ul>
                                                                                                )}
                                                                                        </li>
                                                                                    )}
                                                                            </>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            )}
                                                    </li>
                                                )}
                                        </>
                                    ))}
                                </ul>

                            </div>
                        </div>

                    </div>
                    <div className="perfil-bottons-footer position-relative text-center mt-4">
                        <button type="button" className="btn btnRadius btn-new-blue">
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
