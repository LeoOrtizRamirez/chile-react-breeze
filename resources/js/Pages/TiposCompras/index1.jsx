import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";

const Index = ({ tiposcompras }) => {
    const [fakeSectores22, setFakeSectores22] = useState(tiposcompras);
    const [sectores22, setSectores22] = useState(tiposcompras);
    const [openSectores22, setOpenSectores22] = useState([]);
    const [openSegmentos22, setOpenSegmentos22] = useState([]);
    const [checkedSegmentos22, setCheckedSegmentos22] = useState([]);
    const [sectoresIds22, setSectoresIds22] = useState([]);
    const [checksSegmentos22, setChecksTiposCompras22] = useState([]);
    const [segmentos22, setSegmentos22] = useState([]);




    useEffect(() => {
        var full_array = [];
        fakeSectores22.forEach((sector) => {
            if (sector.childs.length > 0) {
                var array_segmentos = [];
                if (sector.id_padre_sub_categoria == null) {
                    //Sectores
                    sector.childs.forEach((segmento) => {
                        array_segmentos.push(segmento.id);
                        var segmento_object = fakeSectores22.filter(
                            (sectores) => sectores.id == segmento.id
                        )[0];
                    });
                    full_array[sector.id] = ["sectores"];
                    full_array[sector.id]["segmentos"] = array_segmentos;
                }
            }
        });
        setSectoresIds22(full_array);
    }, []);

    

    const getSegmento22 = (parent) => {
        var dom_sector = document.getElementById("sector_" + parent);
        dom_sector.classList.toggle("expanded");
        if (openSectores22.includes(parent)) {
            //SE ELIMINA EL SECTOR AL QUE SE LE DIO CLICK SI YA EXISTE EN EL ARRAY openSectores
            setOpenSectores22(
                openSectores22.filter((element) => element != parent)
            );
        } else {
            //SE AGREGA EL SECTOR AL QUE SE LE DIO CLICK SI NO EXISTE EN EL ARRAY openSectores
            setOpenSectores22([...openSectores22, parent]); //Se añade el nuevo parent
        }

        //SE BUSCAN LOS SEGMENTOS QUE TENGAN EL id_padre_sub_categoria == AL SECTOR QUE SE LE DIO CLICK
        const pattern = new RegExp(parent, "i");
        const FilteredSegmentos = sectores22.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });

        //EN LOS SEGMENTOS QUE SE ENCONTRARON
        FilteredSegmentos.forEach((element) => {
            if (!segmentos22.includes(element)) {
                //SI NO EXISTE, SE AGREGA
                segmentos22.push(element);
            } else {
                //SI YA EXISTE, SE ELIMINA
                const resultado = segmentos22.filter(
                    (segmento) => segmento.id_padre_sub_categoria != parent
                );
                setSegmentos22(resultado);
            }
        });
    };

    const checked22 = (current) => {
        var array_checks = []; //Conserva el id de las actividades economicas
        checksSegmentos22.forEach((checks) => {
            array_checks.push(checks);
        });
        var segmentos = fakeSectores22.filter(
            (fs) =>
                fs.id_padre_sub_categoria == current.id &&
                fs.id_abuelo_sub_categoria == null
        );
        if (segmentos.length > 0) {
            //Click en check sector
            if (!array_checks.includes(current.id)) {
                //Si no esta seleccionado el sector
                array_checks.push(current.id); //Se agrega el sector
                array_checks = toggleCheked22(
                    array_checks,
                    segmentos,
                    "segmento",
                    "remove"
                );
                array_checks = toggleCheked22(
                    array_checks,
                    segmentos,
                    "segmento",
                    "add"
                );
            } else {
                //Si ya esta seleccionado el sector
                array_checks = deleteTipoCompra22(array_checks, current.id); //Se elimina el sector
                array_checks = toggleCheked22(
                    array_checks,
                    segmentos,
                    "segmento",
                    "remove"
                );
            }
        } else {
            //Click en segmento o actividad economica
            var tiposcompras = fakeSectores22.filter(
                (fs) => fs.id_padre_sub_categoria == current.id
            );
            //Si tiene actividades economicas es un segmento
            if (tiposcompras.length > 0) {
                //Click en segmento
                if (!array_checks.includes(current.id)) {
                    //Si no esta seleccionada el segmento
                    //checksSegmentos22.push(current.id_padre_sub_categoria)
                    //array_checks.push(current.id_padre_sub_categoria)//Se agrega el segmento
                    array_checks.push(current.id); //Se agrega el segmento
                    array_checks = toggleCheked22(
                        array_checks,
                        tiposcompras,
                        "tiposcompras",
                        "remove"
                    );
                    array_checks = toggleCheked22(
                        array_checks,
                        tiposcompras,
                        "tipo_compra",
                        "add"
                    );
                } else {
                    //Si ya esta seleccionada el segmento
                    array_checks = deleteTipoCompra22(array_checks, current.id);
                    array_checks = toggleCheked22(
                        array_checks,
                        tiposcompras,
                        "tipo_compra",
                        "remove"
                    );
                }
            } else {
                //Click en actividad economica
                if (!array_checks.includes(current.id)) {
                    array_checks.push(current.id);
                } else {
                    array_checks = deleteTipoCompra22(array_checks, current.id);
                }
            }
        }
        array_checks = [...new Set(array_checks)];
        setChecksTiposCompras22(array_checks);
        checkClassValidate22(array_checks, current);
    };

    const isSector22 = (id) => {
        var sector = fakeSectores22.filter((el) => el.id == id)[0];
        if (
            sector.id_abuelo_sub_categoria == null &&
            sector.id_padre_sub_categoria == null
        ) {
            return sector;
        } else {
            return false;
        }
    };

    const isSegmento22 = (id) => {
        var sector = fakeSectores22.filter((el) => el.id == id)[0];
        if (
            sector.id_abuelo_sub_categoria == null &&
            sector.id_padre_sub_categoria != null
        ) {
            return sector;
        } else {
            return false;
        }
    };

    //array = todas las actividades economicas que estan seleccionadas actualmente
    //current = actividad economica seleccionada actualmente
    const checkClassValidate22 = (array, current) => {
        if (isSegmento22(current.id)) {
            var array_segmentos = [];
            array.forEach((el) => {
                if (isSegmento22(el)) {
                    array_segmentos.push(el);
                }
            });

            var sectorValidator = true;
            var sectorValidatorTotal = 0;
            if (array_segmentos.length > 0) {
                array_segmentos.forEach((el) => {
                    var segmento = fakeSectores22.filter(
                        (item) => item.id == el
                    )[0];
                    sectoresIds22[segmento.id_padre_sub_categoria][
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
                array = deleteTipoCompra22(array, current.id_padre_sub_categoria);
                setChecksTiposCompras22(array);
                if (sectorValidatorTotal > 0) {
                    console.log("here");
                    input_sector.classList.add("check-minus");
                } else {
                    input_sector.classList.remove("check-minus");
                    input_segmento.classList.remove("check-minus");
                }
            }
        }
        if (isSector22(current.id)) {
            var input_sector = document.getElementById(
                "sector_check_" + current.id
            );
            input_sector.classList.remove("check-minus");
        }
    };

    const deleteTipoCompra22 = (array, id_tipo_compra) => {
        const index = array.indexOf(id_tipo_compra);
        if (index > -1) {
            array.splice(index, 1);
        }
        return array;
    };

    //Se eliminan/agregan los segmentos y/o actividades economicas
    const toggleCheked22 = (array, sectores, level = null, action) => {
        sectores.forEach((sc) => {
            switch (action) {
                case "add":
                    array.push(sc.id);
                    if (level == "segmento") {
                        const tiposcompras = fakeSectores22.filter(
                            (fsa) => fsa.id_padre_sub_categoria == sc.id
                        );
                        tiposcompras.forEach((ac) => {
                            array.push(ac.id);
                        });
                    }
                    break;
                case "remove":
                    array = deleteTipoCompra22(array, sc.id);
                    if (level == "segmento") {
                        const tiposcompras = fakeSectores22.filter(
                            (fsa) => fsa.id_padre_sub_categoria == sc.id
                        );
                        tiposcompras.forEach((ac) => {
                            array = deleteTipoCompra22(array, ac.id);
                        });
                    }
                    break;

                default:
                    break;
            }
        });
        return array;
    };

    const inputSearchTipoCompra22 = (e) => {
        if (e.target.value == "") {
            setSectores22(fakeSectores22);
            setSegmentos22([]);
            setOpenSectores22([]);
            setOpenSegmentos22([]);
            return;
        }

        if (e.key === "Enter") {
            //SE BUSCAN LAS ACTIVIDADES ECONOMICAS QUE COINCIDAN CON EL NOMBRE QUE SE INGRESO
            const pattern = new RegExp(e.target.value, "i");
            const FilteredTiposCompras = fakeSectores22.filter(function (el) {
                if (pattern.test(el.nombre) || e.target.value == el.id) {
                    return el;
                }
            });

            var sectores_filtrados = [];
            var segmentos_filtrados = [];
            var open_segmentos = [];
            var open_sectores = [];

            FilteredTiposCompras.forEach((element) => {
                //SI ES ACTIVIDAD ECONOMICA, SE GUARDA SECTOR Y SEGMENTOS TAMBIEN
                if (
                    element.id_abuelo_sub_categoria != null &&
                    element.id_padre_sub_categoria != null
                ) {
                    //BUSCAMOS EL SEGMENTO DE LA ACTIVIDAD ECONOMICA
                    var segmento = fakeSectores22.filter(
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
                    var sector = fakeSectores22.filter(
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
            setSectores22(sectores_filtrados);
            setSegmentos22(segmentos_filtrados);
            setOpenSectores22(open_sectores);
            setOpenSegmentos22(open_segmentos);
        }
    };
    return (
        <div className="contenedor-planes">
            <div className="bg-white overflow-auto w-full text-center margen-superior custom-scroll">
                <div className="container mt-4">
                    <div className="tree_categorias tree_1">
                        <div className="tree_categorias__busqueda mb-3 mb-md-4">
                            <div className="mx-60 mt-30 d-flex">
                                <button
                                    button
                                    type="button"
                                    className="icon-Buscar-click"
                                ></button>
                                <input
                                    type="text"
                                    placeholder="Busca por modalidad"
                                    autoComplete="off"
                                    className="form-control busqueda-input"
                                    onKeyDown={inputSearchTipoCompra22}
                                />
                            </div>
                            <div>
                                <ul className="tree-root">
                                    {sectores22.map((sector) => (
                                        <>
                                            {sector.id_padre_sub_categoria ==
                                                null && (
                                                <li
                                                    className={`tree-node has-child draggable ${
                                                        openSectores22.includes(
                                                            sector.id
                                                        )
                                                            ? "expanded"
                                                            : ""
                                                    }`}
                                                    id={"sector_" + sector.id}
                                                >
                                                    <div
                                                        id={sector.id}
                                                        className="tree-content mt-3 sector"
                                                        key={sector.id}
                                                    >
                                                        <i
                                                            className={`tree-arrow has-child ${
                                                                sector.childs
                                                                    .length > 0
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
                                                            name="tipo_compra"
                                                            onChange={() =>
                                                                checked22(sector)
                                                            }
                                                            checked={
                                                                checksSegmentos22.includes(
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
                                                                    getSegmento22(
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
                                                    {openSectores22.includes(
                                                        sector.id
                                                    ) && (
                                                        <ul className="tree-children new-class">
                                                            {segmentos22.map(
                                                                (
                                                                    segmento,
                                                                    index
                                                                ) => (
                                                                    <>
                                                                        {sector.id ==
                                                                            segmento.id_padre_sub_categoria && (
                                                                            <li
                                                                                className={`tree-node has-child draggable segmento ${
                                                                                    openSegmentos22.includes(
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
                                                                                        name="tipo_compra"
                                                                                        onChange={() =>
                                                                                            checked22(
                                                                                                segmento
                                                                                            )
                                                                                        }
                                                                                        checked={
                                                                                            checksSegmentos22.includes(
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
    );
};

export default Index;
