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

const Index = ({ auth, actividades_economicas, tiposcompras, localizacion }) => {
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
    const [openSegmentos, setOpenSegmentos] = useState([]);

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

    const checked = (current) => {
        var array_checks = []//Conserva el id de las actividades economicas 
        checksActividadesEconomicas.forEach(checks => {
            array_checks.push(checks)
        })
        var segmentos = fakeSectores.filter(fs => fs.id_padre_sub_categoria == current.id && fs.id_abuelo_sub_categoria == null)
        if (segmentos.length > 0) {//Click en check sector
            if (!array_checks.includes(current.id)) {//Si no esta seleccionado el sector
                array_checks.push(current.id)//Se agrega el sector
                array_checks = toggleCheked(array_checks, segmentos, 'segmento', 'remove')
                array_checks = toggleCheked(array_checks, segmentos, 'segmento', 'add')
            } else {//Si ya esta seleccionado el sector
                array_checks = deleteActividadEconomica(array_checks, current)//Se elimina el sector
                array_checks = toggleCheked(array_checks, segmentos, 'segmento', 'remove')
            }
        } else {//Click en segmento o actividad economica
            var actividades_economicas = fakeSectores.filter(fs => fs.id_padre_sub_categoria == current.id)
            //Si tiene actividades economicas es un segmento
            if (actividades_economicas.length > 0) {//Click en segmento
                if (!array_checks.includes(current.id)) {
                    array_checks.push(current.id)
                    array_checks = toggleCheked(array_checks, actividades_economicas, 'actividad_economica', 'add')
                } else {
                    array_checks = deleteActividadEconomica(array_checks, current)
                    array_checks = toggleCheked(array_checks, actividades_economicas, 'actividad_economica', 'remove')
                }
            } else {//Click en actividad economica
                if (!array_checks.includes(current.id)) {
                    array_checks.push(current.id)
                } else {
                    array_checks = deleteActividadEconomica(array_checks, current)
                }
            }
        }
        setChecksActividadesEconomicas(array_checks)
    };

    const deleteActividadEconomica = (array, actividad_economica) => {
        const index = array.indexOf(actividad_economica.id)
        if (index > -1) {
            array.splice(index, 1)
        }
        return array
    }

    //Se eliminan/agregan los segmentos y/o actividades economicas
    const toggleCheked = (array, sectores, level = null, action) => {
        sectores.forEach(sc => {
            switch (action) {
                case 'add':
                    array.push(sc.id)
                    if (level == 'segmento') {
                        const actividades_economicas = fakeSectores.filter(fsa => fsa.id_padre_sub_categoria == sc.id)
                        actividades_economicas.forEach(ac => {
                            array.push(ac.id)
                        })
                    }
                    break;
                case 'remove':
                    array = deleteActividadEconomica(array, sc)
                    if (level == 'segmento') {
                        const actividades_economicas = fakeSectores.filter(fsa => fsa.id_padre_sub_categoria == sc.id)
                        actividades_economicas.forEach(ac => {
                            array = deleteActividadEconomica(array, ac)
                        })
                    }
                    break;

                default:
                    break;
            }
        })
        return array
    }

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
                    if (!segmentos_filtrados.includes(segmento)) {
                        segmentos_filtrados.push(segmento)
                    }
                    if (!open_segmentos.includes(element.id_padre_sub_categoria)) {
                        open_segmentos.push(element.id_padre_sub_categoria)
                    }

                    //BUSCAMOS EL SECTOR DE LA ACTIVIDAD ECONOMICA
                    var sector = fakeSectores.filter((fs) => fs.id == element.id_abuelo_sub_categoria)[0]
                    if (!sectores_filtrados.includes(sector)) {
                        sectores_filtrados.push(sector);
                    }
                    if (!open_sectores.includes(element.id_abuelo_sub_categoria)) {
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
                    if (!sectores_filtrados.includes(sector)) {
                        sectores_filtrados.push(sector);
                    }
                    if (!open_sectores.includes(element.id_padre_sub_categoria)) {
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


    /*################################### TIPO COMPRAS #############################################*/
    const [fakeTipoCompras, setFakeTipoCompras] = useState(tiposcompras);
    const [tipoCompras, setTipoComras] = useState(tiposcompras);

    const [showSegmentoTipoCompras, setShowSegmentoTipoCompras] = useState(false);
    const [showTipoCompra, setShowTipoCompra] = useState(false);
    const [selectedSegmentoTipoCompra, setSelectedSegmentoTipoCompra] = useState(0);
    const [selectedTipoCompra, setSelectedTipoCompra] = useState(0);

    const [openSectoresTipoCompras, setOpenSectoresTipoCompras] = useState([]);
    const [openTiposCompras, setOpenTiposCompras] = useState([]);

    const [inputTiposCompras, setInputTiposCompras] = useState({ id: 0, nombre: "", });

    const [checksTipoCompras, setChecksTipoCompras] = useState([])
    const [segmentosTipoCompras, setSegmentosTipoCompras] = useState([]);
    const [tiposCompras, setTiposCompras] = useState([]);
    const [showModalTipoCompra, setShowModalTipoCompra] = useState(false);
    const handleCloseModalTipoCompra = () => setShowModalTipoCompra(false);

    const handleShowModalTipoCompra = () => {
        if (inputTiposCompras.id != 0) {
            setShowModalTipoCompra(true);
        } else {
            setToastMessage("Debes seleccionar un tipo de compra");
            setToastIcon("icon-error");
            setShowToast(true);
        }
    };

    const getSegmentoTipoCompras = (parent) => {
        if (openSectoresTipoCompras.includes(parent)) {
            //SE ELIMINA EL SECTOR AL QUE SE LE DIO CLICK SI YA EXISTE EN EL ARRAY OPENSEGMENTOS
            setOpenSectoresTipoCompras(
                openSectoresTipoCompras.filter((element) => element != parent)
            );
        } else {
            //SE AGREGA EL SECTOR AL QUE SE LE DIO CLICK SI NO EXISTE EN EL ARRAY OPENSEGMENTOS
            setOpenSectoresTipoCompras([...openSectoresTipoCompras, parent]); //SE AÑADE EL NUEVO PARENT
        }

        //SE BUSCAN LOS SEGMENTOS QUE TENGAN EL id_padre_sub_categoria == AL SECTOR QUE SE LE DIO CLICK
        const pattern = new RegExp(parent, "i");
        const FilteredSegmentos = tipoCompras.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });

        //EN LOS SEGMENTOS QUE SE ENCONTRARON
        FilteredSegmentos.forEach((element) => {
            if (!segmentosTipoCompras.includes(element)) {
                //SI NO EXISTE, SE AGREGA
                segmentosTipoCompras.push(element);
            } else {
                //SI YA EXISTE, SE ELIMINA
                const resultado = segmentosTipoCompras.filter(
                    (segmento) => segmento.id_padre_sub_categoria != parent
                );
                setSegmentosTipoCompras(resultado);
            }
        });
    };

    /* const checkedTipoCompras = (tipo_compra) => {
        setInputTiposCompras(tipo_compra);
    }; */

    const checkedTipoCompras = (tipo_compra) => {
        var array_checks = []

        //Se conservan los checks que ya estan guardandolos en el array (array_checks)
        checksTipoCompras.forEach(checks => {
            array_checks.push(checks)
        })

        //Buscar si es un sector
        var sector_childs = fakeTipoCompras.filter(fs => fs.id_padre_sub_categoria == tipo_compra.id && fs.id_abuelo_sub_categoria == null)

        if (sector_childs.length > 0) {
            //CHECK SECTOR - Agregar/Eliminar al array (array_checks)
            if (!array_checks.includes(tipo_compra.id)) {
                array_checks.push(tipo_compra.id)
            } else {
                const index = array_checks.indexOf(tipo_compra.id)
                if (index > -1) {
                    array_checks.splice(index, 1)
                }
            }

            //Recorrer segmentos del sector
            sector_childs.forEach(sc => {
                //Seleccionar actividades economicas de segmentos
                const ac_segmento = fakeTipoCompras.filter(fsa => fsa.id_padre_sub_categoria == sc.id)

                //Si el segmento no esta incluido en el array (array_checks), se agrega
                if (!checksTipoCompras.includes(sc.id)) {
                    array_checks.push(sc.id)

                    //Agregar actividades economicas de segmentos
                    ac_segmento.forEach(ac => {
                        if (!checksTipoCompras.includes(ac.id)) {
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
                setChecksTipoCompras(array_checks)
            })


        } else {
            //Buscar si es un segmento
            var segmento_childs = fakeTipoCompras.filter(fs => fs.id_padre_sub_categoria == tipo_compra.id)

            //Si se selecciono un check, se deben buscar las actividades economicas que pertenecen a el y se guardan en el array (array_checks)
            if (segmento_childs.length > 0) {

                //CHECK SEGMENTO - Agregar/Eliminar al array (array_checks)
                if (!array_checks.includes(tipo_compra.id)) {
                    array_checks.push(tipo_compra.id)
                } else {
                    const index = array_checks.indexOf(tipo_compra.id)
                    if (index > -1) {
                        array_checks.splice(index, 1)
                    }
                }


                //Recorrer actividades economicas del segmento
                segmento_childs.forEach(sc => {

                    //Si la actividad economica no esta incluida en el array (array_checks), se agrega
                    if (!checksTipoCompras.includes(sc.id)) {
                        array_checks.push(sc.id)
                    } else {
                        //Si la actividad economica ya esta incluida en el array (array_checks), se elimina
                        const index = array_checks.indexOf(sc.id)
                        if (index > -1) {
                            array_checks.splice(index, 1)
                        }
                    }
                    setchecksTipoCompras(array_checks)
                })
            } else {
                //CHECK SEGMENTO - Agregar/Eliminar al array (array_checks)
                if (!array_checks.includes(tipo_compra.id)) {
                    array_checks.push(tipo_compra.id)
                } else {
                    const index = array_checks.indexOf(tipo_compra.id)
                    if (index > -1) {
                        array_checks.splice(index, 1)
                    }
                }
                setchecksTipoCompras(array_checks)
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






    const inputSearchTipoCompra = (e) => {
        if (e.target.value == "") {
            setTipoComras(fakeTipoCompras);
            setSegmentosTipoCompras([]);
            setTiposCompras([]);
            setOpenSectoresTipoCompras([]);
            setOpenTiposCompras([]);
            return;
        }

        if (e.key === "Enter") {
            //SE BUSCAN LAS LOCALIZACIONES QUE COINCIDAN CON EL NOMBRE QUE SE INGRESO
            const pattern = new RegExp(e.target.value, "i");
            // debugger
            const FilteredTiposCompras = fakeTipoCompras.filter(function (el) {
                if (pattern.test(el.nombre)) {
                    return el;
                }
            });

            var tipo_compras_filtrados = [];
            var segmentos_filtrados_tipo_compras = [];
            var tipos_compras_filtrados = [];
            var open_tipos_compras = [];
            var open_segmentos_tipo_compras = [];

            // debugger;
            FilteredTiposCompras.forEach((element) => {
                if (element.id_padre_sub_categoria != null) {
                    //ae
                    tipos_compras_filtrados.push(element);
                    open_tipos_compras.push(element.id_padre_sub_categoria);

                    //BUSCAMOS
                    const padre = fakeTipoCompras.find(
                        (fs) => fs.id == element.id_padre_sub_categoria
                    );

                    const x = segmentos_filtrados_tipo_compras.find(
                        (fs) => fs.id == padre.id
                    );

                    if (!x) {
                        segmentos_filtrados_tipo_compras.push(padre);
                    }
                    if (!segmentos_filtrados_tipo_compras.includes(element)) {
                        segmentos_filtrados_tipo_compras.push(element);
                        open_segmentos_tipo_compras.push(element.id_padre_sub_categoria); // DESPLIEGA RESULTADOS
                    }
                }
            });

            //BUSCAR TODOS LOS regiones Y ciudades DE tipos_compras_filtrados
            var ae_sector = null;
            var ae_segmento = null;

            debugger
            tipos_compras_filtrados.forEach((ae) => {
                //OBTENER SECTOR DE LA ACTIVIDAD ECONOMICA
                //OBTENER TIPOS COMPRAS
                ae_sector = fakeTipoCompras.filter((fs) => fs.id == ae.id)[0];
                ae_segmento = fakeTipoCompras.filter(
                    (fs) => fs.id == ae.id_padre_sub_categoria
                )[0];

                //SI EL ae_sector NO ESTA INCLUIDO EN regiones
                // debugger
                if (!tipo_compras_filtrados.includes(ae_sector)) {
                    //BUSCAR Region Y GUARDAR
                    tipo_compras_filtrados.push(
                        fakeTipoCompras.filter(
                            (sector) => sector.id == ae.id_padre_sub_categoria
                        )[0]
                    );
                }
            });

            setTipoComras(tipo_compras_filtrados);
            setSegmentosTipoCompras(segmentos_filtrados_tipo_compras);
            setTiposCompras(tipos_compras_filtrados);
            setOpenSectoresTipoCompras(open_segmentos_tipo_compras);
            setOpenTiposCompras(open_tipos_compras);
        }
    };

    /*################################### TIPO COMPRAS #############################################*/

    const [contenedorPaso1Actividades, setContenedorPaso1Actividades] = useState(true)
    const [contenedorBotonVolver, setcontenedorBotonVolver] = useState(false)
    const [contenedorPaso2TipoCompras, setContenedorPaso2TipoCompras] = useState(false)
    const [contenedorPaso3Localizaciones, setContenedorPaso3Localizaciones] = useState(false)

    useEffect(() => { setContenedorPaso2TipoCompras(false) }, []) //cambiar por false
    useEffect(() => { setcontenedorBotonVolver(false) }, []) //cambiar por false
    useEffect(() => { setContenedorPaso3Localizaciones(false) }, [])

    const SiguientePaso2 = () => {
        console.log("paso 2");
        setContenedorPaso1Actividades(false)
        setContenedorPaso2TipoCompras(true)
        setcontenedorBotonVolver(true)
    }

    const VolverPaso1 = () => {
        setContenedorPaso1Actividades(true)
        setContenedorPaso2TipoCompras(false)
        setcontenedorBotonVolver(false)
    }
   

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
                                    <i className="icon-Paso-2-click" id="pleft2"></i> <span>Tipo de compra</span>
                                    <i className="icon-Paso-3-click" id="pleft2"></i> <span>Localizaciones</span>

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
                                        <img className="bandera" src="/public/images/banderas/listado_nombres/CHL.svg" alt="Bandera Chile" />
                                    </h2>

                                </div>
                                <br></br>


                                <>{/* Paso 1*/}
                                    {contenedorPaso1Actividades &&
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
                                                                    {/* p1*/}
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
                                                                                                    className={`tree-node has-child draggable segmento ${openSegmentos.includes(segmento.id) ? "expanded" : ""}`}
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
                                    }
                                </>
                                <>{/* Paso 2*/}
                                    {contenedorPaso2TipoCompras &&
                                        <ul className="tree-root">
                                            {tipoCompras.map((sector) => (
                                                <>
                                                    {sector.id_padre_sub_categoria ==
                                                        null && (
                                                            <li className={`tree-node has-child draggable ${openSectoresTipoCompras.includes(sector.id) ? "expanded" : ""}`} id={"sector_" + sector.id}>
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
                                                                    {/* p2c */}
                                                                    <input
                                                                        type="checkbox"
                                                                        name="tipo_compras"
                                                                        onChange={() =>
                                                                            checkedTipoCompras(
                                                                                sector
                                                                            )
                                                                        }
                                                                        checked={
                                                                            /* childs.id == inputActividadEconomica.id */

                                                                            checksTipoCompras.includes(sector.id)
                                                                                ? "checked"
                                                                                : ""
                                                                        }
                                                                    />
                                                                    <span className="tree-anchor">
                                                                        <span className="tree-division tree-division1" onClick={() =>
                                                                            getSegmentoTipoCompras(
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
                                                                {openSectoresTipoCompras.includes(
                                                                    sector.id
                                                                ) && (
                                                                        <ul className="tree-children new-class">
                                                                            {segmentosTipoCompras.map(
                                                                                (
                                                                                    segmento,
                                                                                    index
                                                                                ) => (
                                                                                    <>
                                                                                        {sector.id ==
                                                                                            segmento.id_padre_sub_categoria && (
                                                                                                <li
                                                                                                    className={`tree-node has-child draggable segmento ${openTiposCompras.includes(segmento.id) ? "expanded" : ""}`}
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
                                                                                                                checkedTipoCompras(
                                                                                                                    segmento
                                                                                                                )
                                                                                                            }
                                                                                                            checked={
                                                                                                                /* childs.id == inputActividadEconomica.id */

                                                                                                                checksTipoCompras.includes(segmento.id)
                                                                                                                    ? "checked"
                                                                                                                    : ""
                                                                                                            }
                                                                                                        />
                                                                                                        <span className="tree-anchor">
                                                                                                            <span className="tree-division tree-division1" onClick={() =>
                                                                                                                getSegmentoTipoCompras(
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
                                    }
                                </>

    
                                <>{/* Paso 3*/}
                                    {contenedorPaso3Localizaciones &&
                                        <ul className="tree-root">
                                            <p>Paso 3</p>
                                        </ul>
                                    }
                                </>

                            </div>
                        </div>

                    </div>
                    <div className="perfil-bottons-footer position-relative text-center mt-4">
                        {/* <button type="button" className="btn btnRadius btn-new-blue">
                            Siguiente
                        </button> */}

                        <a onClick={SiguientePaso2} className="btn btnRadius btn-new-blue">
                            <span className="bloque__info-header-cuenta-text--modifier">
                                Siguiente
                            </span>
                        </a>
                        <>
                            {contenedorBotonVolver &&
                                <a onClick={VolverPaso1} className="btn btnRadius btn-new-blue">
                                    <span className="bloque__info-header-cuenta-text--modifier">
                                        Volver
                                    </span>
                                </a>
                            }
                        </>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;