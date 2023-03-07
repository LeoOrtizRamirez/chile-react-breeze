import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import "./BusquedaUbicacion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

export const BusquedaUbicacion = ({
    showBusquedaUbicacion,
    handleCloseBusquedaUbicacion,
}) => {
    useEffect(() => {
        fetch("/localizacion/json")
            .then((response) => response.json()) // convertir a json
            .then((data) => setSectores(data)) //imprimir los datos en la consola
            .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores
    }, []);

    const [fakeSectores, setFakeSectores] = useState([]);
    const [sectores, setSectores] = useState([]);
    const [openSectores, setOpenSectores] = useState([]);
    const [openSegmentos, setOpenSegmentos] = useState([]);
    const [checksActividadesEconomicas, setChecksActividadesEconomicas] =
        useState([]);
    const [segmentos, setSegmentos] = useState([]);
    const [actividadesEconomicas, setActividadesEconomicas] = useState([]);

    const getSegmento = (parent) => {
        var dom_sector = document.getElementById("sector_" + parent);
        dom_sector.classList.toggle("expanded");
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

    //Se eliminan/agregan los segmentos y/o actividades economicas
    const toggleCheked = (array, sectores, level = null, action) => {
        sectores.forEach((sc) => {
            switch (action) {
                case "add":
                    array.push(sc.id);
                    if (level == "segmento") {
                        const actividades_economicas = fakeSectores.filter(
                            (fsa) => fsa.id_padre_sub_categoria == sc.id
                        );
                        actividades_economicas.forEach((ac) => {
                            array.push(ac.id);
                        });
                    }
                    break;
                case "remove":
                    array = deleteActividadEconomica(array, sc);
                    if (level == "segmento") {
                        const actividades_economicas = fakeSectores.filter(
                            (fsa) => fsa.id_padre_sub_categoria == sc.id
                        );
                        actividades_economicas.forEach((ac) => {
                            array = deleteActividadEconomica(array, ac);
                        });
                    }
                    break;

                default:
                    break;
            }
        });
        return array;
    };

    const checked = (current) => {
        var array_checks = []; //Conserva el id de las actividades economicas
        checksActividadesEconomicas.forEach((checks) => {
            array_checks.push(checks);
        });

        var segmentos = fakeSectores.filter(
            (fs) =>
                fs.id_padre_sub_categoria == current.id &&
                fs.id_abuelo_sub_categoria == null
        );

        if (segmentos.length > 0) {
            //Click en check sector
            if (!array_checks.includes(current.id)) {
                //Si no esta seleccionado el sector
                array_checks.push(current.id); //Se agrega el sector
                array_checks = toggleCheked(
                    array_checks,
                    segmentos,
                    "segmento",
                    "remove"
                );
                array_checks = toggleCheked(
                    array_checks,
                    segmentos,
                    "segmento",
                    "add"
                );
            } else {
                //Si ya esta seleccionado el sector
                array_checks = deleteActividadEconomica(array_checks, current); //Se elimina el sector
                array_checks = toggleCheked(
                    array_checks,
                    segmentos,
                    "segmento",
                    "remove"
                );
            }
        } else {
            //Click en segmento o actividad economica
            var actividades_economicas = fakeSectores.filter(
                (fs) => fs.id_padre_sub_categoria == current.id
            );
            //Si tiene actividades economicas es un segmento
            if (actividades_economicas.length > 0) {
                //Click en segmento
                if (!array_checks.includes(current.id)) {
                    array_checks.push(current.id);
                    array_checks = toggleCheked(
                        array_checks,
                        actividades_economicas,
                        "actividad_economica",
                        "add"
                    );
                } else {
                    array_checks = deleteActividadEconomica(
                        array_checks,
                        current
                    );
                    array_checks = toggleCheked(
                        array_checks,
                        actividades_economicas,
                        "actividad_economica",
                        "remove"
                    );
                }
            } else {
                //Click en actividad economica
                if (!array_checks.includes(current.id)) {
                    array_checks.push(current.id);
                } else {
                    array_checks = deleteActividadEconomica(
                        array_checks,
                        current
                    );
                }
            }
        }
        setChecksActividadesEconomicas(array_checks);
    };

    const deleteActividadEconomica = (array, actividad_economica) => {
        const index = array.indexOf(actividad_economica.id);
        if (index > -1) {
            array.splice(index, 1);
        }
        return array;
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

            const FilteredActividadesEcomomicas = fakeSectores.filter(function (
                el
            ) {
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
                if (
                    element.id_abuelo_sub_categoria != null &&
                    element.id_padre_sub_categoria != null
                ) {
                    //BUSCAMOS LA ACTIVIDAD ECONOMICA
                    actividades_economicas_filtrados.push(element);
                    /* open_segmentos.push(
                        element.id_padre_sub_categoria
                    ); */

                    //BUSCAMOS EL SEGMENTO DE LA ACTIVIDAD ECONOMICA
                    var segmento = fakeSectores.filter(
                        (fs) => fs.id == element.id_padre_sub_categoria
                    )[0];
                    if (!segmentos_filtrados.includes(segmento)) {
                        segmentos_filtrados.push(segmento);
                    }
                    if (
                        !open_segmentos.includes(element.id_padre_sub_categoria)
                    ) {
                        open_segmentos.push(element.id_padre_sub_categoria);
                    }

                    //BUSCAMOS EL SECTOR DE LA ACTIVIDAD ECONOMICA
                    var sector = fakeSectores.filter(
                        (fs) => fs.id == element.id_abuelo_sub_categoria
                    )[0];
                    if (!sectores_filtrados.includes(sector)) {
                        sectores_filtrados.push(sector);
                    }
                    if (
                        !open_sectores.includes(element.id_abuelo_sub_categoria)
                    ) {
                        open_sectores.push(element.id_abuelo_sub_categoria);
                    }
                }

                //SI ES SEGMENTO, SE GUARDA SECTOR TAMBIEN
                if (
                    element.id_abuelo_sub_categoria == null &&
                    element.id_padre_sub_categoria != null
                ) {
                    if (!segmentos_filtrados.includes(element)) {
                        segmentos_filtrados.push(element);
                    }
                    if (!open_segmentos.includes(element.id)) {
                        open_segmentos.push(element.id);
                    }

                    //BUSCAMOS EL SECTOR DEL SEGMENTOS
                    var sector = fakeSectores.filter(
                        (fs) => fs.id == element.id_padre_sub_categoria
                    )[0];
                    if (!sectores_filtrados.includes(sector)) {
                        sectores_filtrados.push(sector);
                    }
                    if (
                        !open_sectores.includes(element.id_padre_sub_categoria)
                    ) {
                        open_sectores.push(element.id_padre_sub_categoria);
                    }
                }

                //SECTOR
                if (
                    element.id_abuelo_sub_categoria == null &&
                    element.id_padre_sub_categoria == null
                ) {
                    if (!sectores_filtrados.includes(element)) {
                        sectores_filtrados.push(element);
                    }
                    if (!open_sectores.includes(element.id)) {
                        open_sectores.push(element.id);
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
    // console.log("sectores:", sectores);

    return (
        <Modal
            size="xl"
            dialogClassName=""
            contentClassName=""
            backdropClassName=""
            className=""
            centered
            show={showBusquedaUbicacion}
            onHide={handleCloseBusquedaUbicacion}
            id="BusquedaUbicacion"
        >
            <>
                <Modal.Header closeButton className="header">
                    <h2 className="name_section_app">
                        Seleccione la ubicacion
                    </h2>
                </Modal.Header>
                <Modal.Body className="contenedor-planes" id="">
                    <div className="bg-white overflow-auto w-full text-center margen-superior custom-scroll">
                        <div className="container mt-4">
                            <div className="tree_categorias tree_1">
                                <div className="tree_categorias__busqueda mb-3 mb-md-4">
                                    <div className="mx-60 mt-30 d-flex justify-content-center">
                                        <input
                                            type="text"
                                            placeholder="Buscar por ubicacion"
                                            autoComplete="off"
                                            className="form-control busqueda-input"
                                            onKeyDown={
                                                inputSearchActividadEconomica
                                            }
                                        />
                                    </div>
                                    <br></br>
                                    <ul className="tree-root">
                                        {sectores.map((sector) => (
                                            <>
                                                {/* Inicio Sectores */}
                                                {sector.id_padre_sub_categoria ==
                                                    null && (
                                                    <li
                                                        className={`tree-node has-child draggable ${
                                                            openSectores.includes(
                                                                sector.id
                                                            )
                                                                ? "expanded"
                                                                : ""
                                                        }`}
                                                        id={
                                                            "sector_" +
                                                            sector.id
                                                        }
                                                    >
                                                        <div
                                                            id={sector.id}
                                                            className="tree-content mt-3 sector"
                                                            key={sector.id}
                                                        >
                                                            <i
                                                                className={`tree-arrow has-child ${
                                                                    sector
                                                                        .childs
                                                                        .length >
                                                                    0
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
                                                                    checksActividadesEconomicas.includes(
                                                                        sector.id
                                                                    )
                                                                        ? "checked"
                                                                        : ""
                                                                }
                                                            />
                                                            <span className="tree-anchor">
                                                                <span
                                                                    className="tree-division tree-division1"
                                                                    onClick={() =>
                                                                        getSegmento(
                                                                            sector.id
                                                                        )
                                                                    }
                                                                >
                                                                    <span className="tree-division__title my-auto">
                                                                        {
                                                                            sector.nombre
                                                                        }
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                        {/* Fin Sectores */}
                                                        {/* Inicio Sectores */}
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
                                                                                    className={`tree-node has-child draggable segmento ${
                                                                                        openSegmentos.includes(
                                                                                            segmento.id
                                                                                        )
                                                                                            ? "expanded"
                                                                                            : ""
                                                                                    }`}
                                                                                    id={
                                                                                        "segmento_" +
                                                                                        segmento.id
                                                                                    }
                                                                                >
                                                                                    <div className="tree-content segmento">
                                                                                        <i className="tree-arrow has-child ltr"></i>
                                                                                        <input
                                                                                            type="checkbox"
                                                                                            name="actividad_economica"
                                                                                            onChange={() =>
                                                                                                checked(
                                                                                                    segmento
                                                                                                )
                                                                                            }
                                                                                            checked={
                                                                                                checksActividadesEconomicas.includes(
                                                                                                    segmento.id
                                                                                                )
                                                                                                    ? "checked"
                                                                                                    : ""
                                                                                            }
                                                                                        />
                                                                                        <span className="tree-anchor">
                                                                                            <span className="tree-division tree-division1">
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
                                                                                </li>
                                                                            )}
                                                                        </>
                                                                    )
                                                                )}
                                                            </ul>
                                                        )}
                                                        {/* Fin Sectores */}
                                                    </li>
                                                )}
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="perfil-bottons-footer position-relative text-center mt-4">
                            <button
                                type="button"
                                className="btn btnRadius btn-new-green"
                            >
                                Seleccionar
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </>
        </Modal>
    );
};

export default BusquedaUbicacion;
