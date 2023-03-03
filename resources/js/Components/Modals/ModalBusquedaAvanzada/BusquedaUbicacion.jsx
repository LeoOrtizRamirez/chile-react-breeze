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
    const [openSegmentos, setOpenSegmentos] = useState([]);
    const [checksActividadesEconomicas, setChecksActividadesEconomicas] =
        useState([]);
    const [segmentos, setSegmentos] = useState([]);
    const getSegmento = (parent) => {
        if (openSegmentos.includes(parent)) {
            //SE ELIMINA EL SECTOR AL QUE SE LE DIO CLICK SI YA EXISTE EN EL ARRAY openSegmentos
            setOpenSegmentos(
                openSegmentos.filter((element) => element != parent)
            );
        } else {
            //SE AGREGA EL SECTOR AL QUE SE LE DIO CLICK SI NO EXISTE EN EL ARRAY openSegmentos
            setOpenSegmentos([...openSegmentos, parent]); //Se añade el nuevo parent
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

    const checked = (actividad_economica) => {
        // debugger
        var array_checks = [];
        //Se conservan los checks que ya estan guardandolos en el array (array_checks)
        checksActividadesEconomicas.forEach((checks) => {
            array_checks.push(checks);
        });
        //Buscar si es un sector
        var sector_childs = fakeSectores.filter(
            (fs) =>
                // fs.id_padre_sub_categoria == actividad_economica.id
                // && fs.id_abuelo_sub_categoria == null
                fs.id_padre_sub_categoria == actividad_economica.id &&
                fs.id_abuelo_sub_categoria == null
        );
        if (sector_childs.length > 0) {
            //CHECK SECTOR - Agregar/Eliminar al array (array_checks)
            if (!array_checks.includes(actividad_economica.id)) {
                array_checks.push(actividad_economica.id);
            } else {
                const index = array_checks.indexOf(actividad_economica.id);
                if (index > -1) {
                    array_checks.splice(index, 1);
                }
            }
            //Recorrer segmentos del sector
            sector_childs.forEach((sc) => {
                //Seleccionar actividades economicas de segmentos
                const ac_segmento = fakeSectores.filter(
                    (fsa) => fsa.id_padre_sub_categoria == sc.id
                );
                //Si el segmento no esta incluido en el array (array_checks), se agrega
                if (!checksActividadesEconomicas.includes(sc.id)) {
                    array_checks.push(sc.id);

                    //Agregar actividades economicas de segmentos
                    ac_segmento.forEach((ac) => {
                        if (!checksActividadesEconomicas.includes(ac.id)) {
                            array_checks.push(ac.id);
                        } else {
                            //Si el segmento ya esta incluido en el array (array_checks), se elimina
                            const index = array_checks.indexOf(ac.id);
                            if (index > -1) {
                                array_checks.splice(index, 1);
                            }
                        }
                    });
                } else {
                    //Si el segmento ya esta incluido en el array (array_checks), se elimina
                    const index = array_checks.indexOf(sc.id);
                    if (index > -1) {
                        array_checks.splice(index, 1);
                    }
                    //Eliminar actividades economicas de segmentos
                    ac_segmento.forEach((ac) => {
                        const index = array_checks.indexOf(ac.id);
                        if (index > -1) {
                            array_checks.splice(index, 1);
                        }
                    });
                }
                console.log(sc);
                setChecksActividadesEconomicas(array_checks);
            });
        } else {
            //Buscar si es un segmento
            var segmento_childs = fakeSectores.filter(
                (fs) => fs.id_padre_sub_categoria == actividad_economica.id
            );

            //Si se selecciono un check, se deben buscar las actividades economicas que pertenecen a el y se guardan en el array (array_checks)
            if (segmento_childs.length > 0) {
                //CHECK SEGMENTO - Agregar/Eliminar al array (array_checks)
                if (!array_checks.includes(actividad_economica.id)) {
                    array_checks.push(actividad_economica.id);
                } else {
                    const index = array_checks.indexOf(actividad_economica.id);
                    if (index > -1) {
                        array_checks.splice(index, 1);
                    }
                }

                //Recorrer actividades economicas del segmento
                segmento_childs.forEach((sc) => {
                    //Si la actividad economica no esta incluida en el array (array_checks), se agrega
                    if (!checksActividadesEconomicas.includes(sc.id)) {
                        array_checks.push(sc.id);
                    } else {
                        //Si la actividad economica ya esta incluida en el array (array_checks), se elimina
                        const index = array_checks.indexOf(sc.id);
                        if (index > -1) {
                            array_checks.splice(index, 1);
                        }
                    }
                    setChecksActividadesEconomicas(array_checks);
                });
            } else {
                //console.log(array_checks)
                //CHECK SEGMENTO - Agregar/Eliminar al array (array_checks)
                if (!array_checks.includes(actividad_economica.id)) {
                    array_checks.push(actividad_economica.id);
                } else {
                    const index = array_checks.indexOf(actividad_economica.id);
                    if (index > -1) {
                        array_checks.splice(index, 1);
                    }
                }
                setChecksActividadesEconomicas(array_checks);
            }
        }
    };

    // const inputSearchActividadEconomica = (e) => {
    //     if (e.target.value == "") {
    //         setSectores(fakeSectores);
    //         setSegmentos([]);
    //         setActividadesEconomicas([]);
    //         setOpenSegmentos([]);
    //         setOpenActividadesEconomicas([]);
    //         return;
    //     }

    //     if (e.key === "Enter") {
    //         //SE BUSCAN LAS LOCALIZACIONES QUE COINCIDAN CON EL NOMBRE QUE SE INGRESO
    //         const pattern = new RegExp(e.target.value, "i");

    //         const FilteredActividadesEcomomicas = fakeSectores.filter(function (
    //             el
    //         ) {
    //             if (pattern.test(el.nombre)) {
    //                 return el;
    //             }
    //         });

    //         var sectores_filtrados = [];
    //         var segmentos_filtrados = [];
    //         var actividades_economicas_filtrados = [];
    //         var open_actividades_economicas = [];
    //         var open_segmentos = [];

    //         FilteredActividadesEcomomicas.forEach((element) => {
    //             if (element.id_padre_sub_categoria != null) {
    //                 //ae
    //                 actividades_economicas_filtrados.push(element);
    //                 open_actividades_economicas.push(
    //                     element.id_padre_sub_categoria
    //                 );

    //                 //BUSCAMOS la ciudad  DE LA localizacion
    //                 segmentos_filtrados.push(
    //                     fakeSectores.filter(
    //                         (fs) => fs.id == element.id_padre_sub_categoria
    //                     )[0]
    //                 );
    //                 open_segmentos.push(element.id_abuelo_sub_categoria);
    //             }

    //             if (element.id_padre_sub_categoria != null) {
    //                 //segmento
    //                 if (!segmentos_filtrados.includes(element)) {
    //                     segmentos_filtrados.push(element);
    //                 }
    //                 if (
    //                     !open_segmentos.includes(element.id_padre_sub_categoria)
    //                 ) {
    //                     open_segmentos.push(element.id_padre_sub_categoria);
    //                 }
    //             }

    //             if (element.id_padre_sub_categoria == null) {
    //                 //sector
    //                 sectores_filtrados.push(element);
    //             }
    //         });

    //         //BUSCAR TODOS LOS regiones Y ciudades DE actividades_economicas_filtrados
    //         var ae_sector = null;
    //         var ae_segmento = null;

    //         actividades_economicas_filtrados.forEach((ae) => {
    //             //OBTENER SECTOR DE LA ACTIVIDAD ECONOMICA
    //             //OBTENER region  DE LA localizaciones

    //             ae_sector = fakeSectores.filter((fs) => fs.id == ae.id)[0];

    //             ae_segmento = fakeSectores.filter(
    //                 (fs) => fs.id == ae.id_padre_sub_categoria
    //             )[0];

    //             //SI EL ae_sector NO ESTA INCLUIDO EN regiones
    //             if (!sectores_filtrados.includes(ae_sector)) {
    //                 //BUSCAR Region Y GUARDAR
    //                 sectores_filtrados.push(
    //                     fakeSectores.filter(
    //                         (sector) => sector.id == ae.id_padre_sub_categoria
    //                     )[0]
    //                 );
    //             }

    //             if (!segmentos_filtrados.includes(ae_segmento)) {
    //                 //BUSCAR SEGMENTO Y GUARDAR
    //                 sectores_filtrados.push(
    //                     fakeSectores.filter(
    //                         (sector) => sector.id == ae.id_padre_sub_categoria
    //                     )[0]
    //                 );
    //             }
    //         });

    //         setSectores(sectores_filtrados);
    //         setSegmentos(segmentos_filtrados);
    //         setActividadesEconomicas(actividades_economicas_filtrados);
    //         setOpenSegmentos(open_segmentos);
    //         setOpenActividadesEconomicas(open_actividades_economicas);
    //     }
    // };

    console.log("sectores:", sectores);

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
            <Head title="Localización" />
            <div className="contenedor-planes">
                <div className="bg-white overflow-auto w-full text-center margen-superior custom-scroll">
                    <h2 className="name_section_app">Ubicaciones</h2>
                    <div className="container mt-4">
                        <div className="tree_categorias tree_1">
                            <div className="tree_categorias__busqueda mb-3 mb-md-4">
                                <div className="mx-auto">
                                    <input
                                        type="text"
                                        placeholder="Busca por actividad económica"
                                        autoComplete="off"
                                        className="form-control m-auto"
                                        // onKeyDown={
                                        //     inputSearchActividadEconomica
                                        // }
                                    />
                                    <i className="icon-Cancelar"></i>
                                    <button
                                        type="button"
                                        className="icon-Buscar-click"
                                    >
                                        <i className="bi bi-search"></i>
                                    </button>
                                    <ul className="tree-root">
                                        {sectores.map((sector) => (
                                            <>
                                                {sector.id_padre_sub_categoria ==
                                                    null && (
                                                    <li
                                                        className="tree-node has-child draggable"
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
                                                        {openSegmentos.includes(
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
                                                                                    className="tree-node has-child draggable segmento"
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
                                                                                            <span
                                                                                                className="tree-division tree-division1"
                                                                                                onClick={() =>
                                                                                                    getActividadEconomica(
                                                                                                        segmento.id
                                                                                                    )
                                                                                                }
                                                                                            >
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
                                                    </li>
                                                )}
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default BusquedaUbicacion;
