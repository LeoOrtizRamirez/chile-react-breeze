import React, { useEffect, useState } from "react";
// import "./BusquedaActividad.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

export const BusquedaActividad = ({
    showBusquedaActividad,
    handleCloseBusquedaActividad,
}) => {
    useEffect(() => {
        fetch("/actividades-economicas/json")
            .then((response) => response.json()) // convertir a json
            .then((data) => {
                setSectores(data);
                setFakeSectores(data);
            }) //imprimir los datos en la consola
            .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores
    }, []);

    const [fakeSectores, setFakeSectores] = useState([]);
    const [sectores, setSectores] = useState([]);
    const [openSectores, setOpenSectores] = useState([]);
    const [openSegmentos, setOpenSegmentos] = useState([]);
    const [sectoresIds, setSectoresIds] = useState([]);

    useEffect(() => {
        var full_array = [];
        fakeSectores.forEach((sector) => {
            if (sector.childs.length > 0) {
                var array_segmentos = [];
                var array_actividades_economicas = [];
                if (sector.id_padre_sub_categoria == null) {
                    //Sectores
                    sector.childs.forEach((segmento) => {
                        array_segmentos.push(segmento.id);
                        var segmento_object = fakeSectores.filter(
                            (sectores) => sectores.id == segmento.id
                        )[0];
                        if (segmento_object.childs.length > 0) {
                            segmento_object.childs.forEach(
                                (actividad_economica) => {
                                    array_actividades_economicas.push(
                                        actividad_economica.id
                                    );
                                }
                            );
                        }
                    });
                    full_array[sector.id] = ["sectores"];
                    full_array[sector.id]["segmentos"] = array_segmentos;
                    full_array[sector.id]["actividades_economicas"] =
                        array_actividades_economicas;
                }
            }
        });
        setSectoresIds(full_array);
    }, []);

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

    const getActividadEconomica = (parent) => {
        var dom_segmento = document.getElementById("segmento_" + parent);
        dom_segmento.classList.toggle("expanded");
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
                array_checks = deleteActividadEconomica(
                    array_checks,
                    current.id
                ); //Se elimina el sector
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
                    //Si no esta seleccionada el segmento
                    //checksActividadesEconomicas.push(current.id_padre_sub_categoria)
                    //array_checks.push(current.id_padre_sub_categoria)//Se agrega el segmento
                    array_checks.push(current.id); //Se agrega el segmento
                    array_checks = toggleCheked(
                        array_checks,
                        actividades_economicas,
                        "actividades_economicas",
                        "remove"
                    );
                    array_checks = toggleCheked(
                        array_checks,
                        actividades_economicas,
                        "actividad_economica",
                        "add"
                    );
                } else {
                    //Si ya esta seleccionada el segmento
                    array_checks = deleteActividadEconomica(
                        array_checks,
                        current.id
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
                        current.id
                    );
                }
            }
        }
        array_checks = [...new Set(array_checks)];
        setChecksActividadesEconomicas(array_checks);
        checkClassValidate(array_checks, current);
    };

    const isSector = (id) => {
        var sector = fakeSectores.filter((el) => el.id == id)[0];
        if (
            sector.id_abuelo_sub_categoria == null &&
            sector.id_padre_sub_categoria == null
        ) {
            return sector;
        } else {
            return false;
        }
    };

    const isSegmento = (id) => {
        var sector = fakeSectores.filter((el) => el.id == id)[0];
        if (
            sector.id_abuelo_sub_categoria == null &&
            sector.id_padre_sub_categoria != null
        ) {
            return sector;
        } else {
            return false;
        }
    };

    const isActividadEconomica = (id) => {
        var sector = fakeSectores.filter((el) => el.id == id)[0];
        if (
            sector.id_abuelo_sub_categoria != null &&
            sector.id_padre_sub_categoria != null
        ) {
            return sector;
        } else {
            return false;
        }
    };

    //array = todas las actividades economicas que estan seleccionadas actualmente
    //current = actividad economica seleccionada actualmente
    const checkClassValidate = (array, current) => {
        if (isActividadEconomica(current.id)) {
            var array_actividades_economicas = [];
            array.forEach((el) => {
                if (isActividadEconomica(el)) {
                    array_actividades_economicas.push(el);
                }
            });
            var sectorValidator = true;
            var segmentoValidator = true;
            var sectorValidatorTotal = 0;
            var segmentoValidatorTotal = 0;
            if (array_actividades_economicas.length > 0) {
                array_actividades_economicas.forEach((el) => {
                    var actividad_economica = fakeSectores.filter(
                        (item) => item.id == el
                    )[0];
                    sectoresIds[actividad_economica.id_abuelo_sub_categoria][
                        "actividades_economicas"
                    ].forEach((el) => {
                        if (!array_actividades_economicas.includes(el)) {
                            sectorValidator = false;
                        } else {
                            sectorValidatorTotal += 1;
                        }
                    });
                });
            } else {
                sectorValidator = false;
            }

            var actividades_economicas_segmento_actual = [];
            fakeSectores.forEach((el) => {
                if (
                    el.id_padre_sub_categoria == current.id_padre_sub_categoria
                ) {
                    actividades_economicas_segmento_actual.push(el.id);
                }
            });
            actividades_economicas_segmento_actual.forEach((el) => {
                if (!array_actividades_economicas.includes(el)) {
                    segmentoValidator = false;
                } else {
                    segmentoValidatorTotal += 1;
                }
            });
            var input_segmento = document.getElementById(
                "segmento_check_" + current.id_padre_sub_categoria
            );
            var input_sector = document.getElementById(
                "sector_check_" + current.id_abuelo_sub_categoria
            );
            if (segmentoValidator) {
                //checksActividadesEconomicas.push(current.id_padre_sub_categoria)
                array.push(current.id_padre_sub_categoria);
                input_segmento.classList.remove("check-minus");
            } else {
                array = deleteActividadEconomica(
                    array,
                    current.id_padre_sub_categoria
                );
                array = deleteActividadEconomica(
                    array,
                    current.id_abuelo_sub_categoria
                );
                setChecksActividadesEconomicas(array);
                if (segmentoValidatorTotal > 0) {
                    input_segmento.classList.add("check-minus");
                } else {
                    input_segmento.classList.remove("check-minus");
                }
                if (sectorValidatorTotal > 0) {
                    input_sector.classList.add("check-minus");
                } else {
                    input_sector.classList.remove("check-minus");
                }
            }
            if (sectorValidator) {
                //checksActividadesEconomicas.push(current.id_abuelo_sub_categoria)
                array.push(current.id_abuelo_sub_categoria);
            }
        }
        if (isSegmento(current.id)) {
            var array_segmentos = [];
            array.forEach((el) => {
                if (isSegmento(el)) {
                    array_segmentos.push(el);
                }
            });

            var sectorValidator = true;
            var sectorValidatorTotal = 0;
            if (array_segmentos.length > 0) {
                array_segmentos.forEach((el) => {
                    var segmento = fakeSectores.filter(
                        (item) => item.id == el
                    )[0];
                    sectoresIds[segmento.id_padre_sub_categoria][
                        "segmentos"
                    ].forEach((el) => {
                        if (!array_segmentos.includes(el)) {
                            sectorValidator = false;
                        } else {
                            sectorValidatorTotal += 1;
                        }
                    });
                });
            } else {
                sectorValidator = false;
            }

            var input_sector = document.getElementById(
                "sector_check_" + current.id_padre_sub_categoria
            );
            var input_segmento = document.getElementById(
                "segmento_check_" + current.id
            );
            if (sectorValidator) {
                array.push(current.id_padre_sub_categoria); //Se agrega el segmento
            } else {
                array = deleteActividadEconomica(
                    array,
                    current.id_padre_sub_categoria
                );
                setChecksActividadesEconomicas(array);
                if (sectorValidatorTotal > 0) {
                    console.log("here");
                    input_sector.classList.add("check-minus");
                } else {
                    input_sector.classList.remove("check-minus");
                    input_segmento.classList.remove("check-minus");
                }
            }
        }
        if (isSector(current.id)) {
            var input_sector = document.getElementById(
                "sector_check_" + current.id
            );
            input_sector.classList.remove("check-minus");
        }
    };

    const deleteActividadEconomica = (array, id_actividad_economica) => {
        const index = array.indexOf(id_actividad_economica);
        if (index > -1) {
            array.splice(index, 1);
        }
        return array;
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
                    array = deleteActividadEconomica(array, sc.id);
                    if (level == "segmento") {
                        const actividades_economicas = fakeSectores.filter(
                            (fsa) => fsa.id_padre_sub_categoria == sc.id
                        );
                        actividades_economicas.forEach((ac) => {
                            array = deleteActividadEconomica(array, ac.id);
                        });
                    }
                    break;

                default:
                    break;
            }
        });
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

    return (
        <Modal
            size="xl"
            dialogClassName=""
            contentClassName=""
            backdropClassName=""
            className=""
            centered
            show={showBusquedaActividad}
            onHide={handleCloseBusquedaActividad}
            id=""
        >
            <Modal.Header closeButton>
                <h2 className="name_section_app">
                    Selecciona la(s) actividad(es) economica(s) de tu interes.
                </h2>
            </Modal.Header>
            <Modal.Body className="contenedor-planes">
                <div className="bg-white overflow-auto w-full text-center margen-superior custom-scroll">
                    <div className="container mt-4">
                        <div className="tree_categorias tree_1">
                            <div className="tree_categorias__busqueda mb-3 mb-md-4 ">
                                <input
                                    type="text"
                                    placeholder="Busca por actividad económica o UNSPSC"
                                    autoComplete="off"
                                    className="form-control busqueda-input"
                                    onKeyDown={inputSearchActividadEconomica}
                                />
                                <>
                                    <ul className="tree-root">
                                        {sectores.map((sector) => (
                                            <>
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
                                                                id={
                                                                    "sector_check_" +
                                                                    sector.id
                                                                }
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
                                                                                        <i className="tree-arrow expanded has-child ltr"></i>
                                                                                        <input
                                                                                            id={
                                                                                                "segmento_check_" +
                                                                                                segmento.id
                                                                                            }
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
                                                                                    {openSegmentos.includes(
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
                                                                                                                    <input
                                                                                                                        type="checkbox"
                                                                                                                        name="actividad_economica"
                                                                                                                        onChange={() =>
                                                                                                                            checked(
                                                                                                                                childs
                                                                                                                            )
                                                                                                                        }
                                                                                                                        checked={
                                                                                                                            checksActividadesEconomicas.includes(
                                                                                                                                childs.id
                                                                                                                            )
                                                                                                                                ? "checked"
                                                                                                                                : ""
                                                                                                                        }
                                                                                                                    />
                                                                                                                    <span className="tree-anchor children">
                                                                                                                        <span className="tree-division tree-division1">
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
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default BusquedaActividad;
