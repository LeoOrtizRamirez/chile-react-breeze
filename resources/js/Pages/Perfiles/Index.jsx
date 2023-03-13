import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "bootstrap/dist/css/bootstrap.min.css";

/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";
import "../../../css/font-unicolor.css";

import "../../../css/font-web.css";

import ActividadEconomica from "@/Components/ActividadEconomica";
/*Toast*/

const Index = ({
    auth,
    actividades_economicas,
    tiposcompras,
    localizaciones,
}) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastIcon, setToastIcon] = useState("");

    const [sectores, setSectores] = useState(actividades_economicas);

    const onHandleSectores = (data) => {
        console.log(data)
    }
    

    /*################################### TIPO COMPRAS #############################################*/

    const [fakeSectoresTipoCompras, setFakeSectoresTipoCompras] = useState(tiposcompras);
    const [sectoresTipoCompras, setSectoresTipoCompras] = useState(tiposcompras);
    const [openSegmentosTipoCompras, setOpenSegmentosTipoCompras] = useState(
        []
    );
    const [openTiposCompras, setOpenTiposCompras] = useState([]);
    const [inputTiposCompras, setInputTiposCompras] = useState({
        id: 0,
        nombre: "",
    });
    const [segmentosTipoCompras, setSegmentosTipoCompras] = useState([]);
    const [tiposCompras, setTiposCompras] = useState([]);

    const getSegmentoTipoCompras = (parent) => {
        if (openSegmentosTipoCompras.includes(parent)) {
            //SE ELIMINA EL SECTOR AL QUE SE LE DIO CLICK SI YA EXISTE EN EL ARRAY OPENSEGMENTOS
            setOpenSegmentosTipoCompras(
                openSegmentosTipoCompras.filter((element) => element != parent)
            );
        } else {
            //SE AGREGA EL SECTOR AL QUE SE LE DIO CLICK SI NO EXISTE EN EL ARRAY OPENSEGMENTOS
            setOpenSegmentosTipoCompras([...openSegmentosTipoCompras, parent]); //SE AÑADE EL NUEVO PARENT
        }

        //SE BUSCAN LOS SEGMENTOS QUE TENGAN EL id_padre_sub_categoria == AL SECTOR QUE SE LE DIO CLICK
        const pattern = new RegExp(parent, "i");
        const FilteredSegmentos = sectoresTipoCompras.filter(function (el) {
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

    const checkedTipoCompra = (tipo_compra) => {
        setInputTiposCompras(tipo_compra);
    };

    const inputSearchTipoCompra = (e) => {
        if (e.target.value == "") {
            setSectoresTipoCompras(fakeSectoresTipoCompras);
            setSegmentosTipoCompras([]);
            setTiposCompras([]);
            setOpenSegmentosTipoCompras([]);
            setOpenTiposCompras([]);
            return;
        }

        if (e.key === "Enter") {
            //SE BUSCAN LAS LOCALIZACIONES QUE COINCIDAN CON EL NOMBRE QUE SE INGRESO
            const pattern = new RegExp(e.target.value, "i");
            const FilteredTiposCompras = fakeSectoresTipoCompras.filter(
                function (el) {
                    if (pattern.test(el.nombre)) {
                        return el;
                    }
                }
            );

            var sectores_filtrados = [];
            var segmentos_filtrados = [];
            var open_segmentos = [];

            FilteredTiposCompras.forEach((element) => {
                if (element.id_padre_sub_categoria != null) {
                    //Se guardan los segmentos
                    if (!segmentos_filtrados.includes(element)) {
                        segmentos_filtrados.push(element);
                    }
                } else {
                    //Se guardan los sectores
                    if (!sectores_filtrados.includes(element)) {
                        sectores_filtrados.push(element);
                    }
                    //Se guardan los id de los sectores para abrirlos
                    if (
                        !open_segmentos.includes(element.id_padre_sub_categoria)
                    ) {
                        open_segmentos.push(element.id_padre_sub_categoria);
                    }
                }
            });

            //Se recorren los segmentos para obtener el sector
            segmentos_filtrados.forEach((segmento_filtrado) => {
                //Buscar sector por medio del id_padre_sub_categoria
                var sector = fakeSectoresTipoCompras.filter(
                    (fs) => fs.id == segmento_filtrado.id_padre_sub_categoria
                )[0];
                if (!sectores_filtrados.includes(sector)) {
                    sectores_filtrados.push(
                        fakeSectoresTipoCompras.filter(
                            (fakeSector) =>
                                fakeSector.id ==
                                segmento_filtrado.id_padre_sub_categoria
                        )[0]
                    );
                }
                if (
                    !open_segmentos.includes(
                        segmento_filtrado.id_padre_sub_categoria
                    )
                ) {
                    open_segmentos.push(
                        segmento_filtrado.id_padre_sub_categoria
                    );
                }
            });
            setSectoresTipoCompras(sectores_filtrados);
            setSegmentosTipoCompras(segmentos_filtrados);
            setOpenSegmentosTipoCompras(open_segmentos);
        }
    };

    /*################################### TIPO COMPRAS #############################################*/

    /*################################### LOCALIZACIONES #############################################*/

    const [fakeSectoresLocalizaciones, setFakeSectoresLocalizaciones] = useState(localizaciones);
    const [sectoresLocalizaciones, setSectoresLocalizaciones] = useState(localizaciones);
    const [openSegmentosLocalizaiones, setOpenSegmentosLocalizaiones] = useState([]);
    const [openLocalizaciones, setOpenLocalizaciones] = useState([]);
    const [inputLocalizaciones, setInputLocalizaciones] = useState({
        id: 0,
        nombre: "",
    });
    const [segmentosLocalizaciones, setSegmentosLocalizaciones] = useState([]);
    const [localizacion, setLocalizacion] = useState([]);

    const getSegmentoLocalizaciones = (parent) => {
        if (openSegmentosLocalizaiones.includes(parent)) {
            //SE ELIMINA EL SECTOR AL QUE SE LE DIO CLICK SI YA EXISTE EN EL ARRAY OPENSEGMENTOS
            setOpenSegmentosLocalizaiones(
                openSegmentosLocalizaiones.filter((element) => element != parent)
            );
        } else {
            //SE AGREGA EL SECTOR AL QUE SE LE DIO CLICK SI NO EXISTE EN EL ARRAY OPENSEGMENTOS
            setOpenSegmentosLocalizaiones([...openSegmentosLocalizaiones, parent]); //SE AÑADE EL NUEVO PARENT
        }

        //SE BUSCAN LOS SEGMENTOS QUE TENGAN EL id_padre_sub_categoria == AL SECTOR QUE SE LE DIO CLICK
        const pattern = new RegExp(parent, "i");
        const FilteredSegmentos = sectoresLocalizaciones.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });

        //EN LOS SEGMENTOS QUE SE ENCONTRARON
        FilteredSegmentos.forEach((element) => {
            if (!segmentosLocalizaciones.includes(element)) {
                //SI NO EXISTE, SE AGREGA
                segmentosLocalizaciones.push(element);
            } else {
                //SI YA EXISTE, SE ELIMINA
                const resultado = segmentosLocalizaciones.filter(
                    (segmento) => segmento.id_padre_sub_categoria != parent
                );
                setSegmentosLocalizaciones(resultado);
            }
        });
    };

    const checkedLocalizaciones = (localizacion) => {
        setInputLocalizaciones(localizacion);
    };

    const inputSearchLocalizaiones = (e) => {
        if (e.target.value == "") {
            setSectoresLocalizaciones(fakeSectoresLocalizaciones);
            setSegmentosLocalizaciones([]);
            setLocalizacion([]);
            setOpenSegmentosLocalizaiones([]);
            setOpenLocalizaciones([]);
            return;
        }

        if (e.key === "Enter") {
            //SE BUSCAN LAS LOCALIZACIONES QUE COINCIDAN CON EL NOMBRE QUE SE INGRESO
            const pattern = new RegExp(e.target.value, "i");
            const FilteredTiposCompras = fakeSectoresLocalizaciones.filter(
                function (el) {
                    if (pattern.test(el.nombre)) {
                        return el;
                    }
                }
            );

            var sectores_filtrados = [];
            var segmentos_filtrados = [];
            var open_segmentos = [];

            FilteredTiposCompras.forEach((element) => {
                if (element.id_padre_sub_categoria != null) {
                    //Se guardan los segmentos
                    if (!segmentos_filtrados.includes(element)) {
                        segmentos_filtrados.push(element);
                    }
                } else {
                    //Se guardan los sectores
                    if (!sectores_filtrados.includes(element)) {
                        sectores_filtrados.push(element);
                    }
                    //Se guardan los id de los sectores para abrirlos
                    if (
                        !open_segmentos.includes(element.id_padre_sub_categoria)
                    ) {
                        open_segmentos.push(element.id_padre_sub_categoria);
                    }
                }
            });

            //Se recorren los segmentos para obtener el sector
            segmentos_filtrados.forEach((segmento_filtrado) => {
                //Buscar sector por medio del id_padre_sub_categoria
                var sector = fakeSectoresLocalizaciones.filter(
                    (fs) => fs.id == segmento_filtrado.id_padre_sub_categoria
                )[0];
                if (!sectores_filtrados.includes(sector)) {
                    sectores_filtrados.push(
                        fakeSectoresLocalizaciones.filter(
                            (fakeSector) =>
                                fakeSector.id ==
                                segmento_filtrado.id_padre_sub_categoria
                        )[0]
                    );
                }
                if (
                    !open_segmentos.includes(
                        segmento_filtrado.id_padre_sub_categoria
                    )
                ) {
                    open_segmentos.push(
                        segmento_filtrado.id_padre_sub_categoria
                    );
                }
            });
            setSectoresLocalizaciones(sectores_filtrados);
            setSegmentosLocalizaciones(segmentos_filtrados);
            setOpenSegmentosLocalizaiones(open_segmentos);
        }
    };

    /*###################################  END LOCALIZACIONES #############################################*/

    const [contenedorPaso1Actividades, setContenedorPaso1Actividades] = useState(true);
    const [contenedorPaso2TipoCompras, setContenedorPaso2TipoCompras] = useState(false);
    const [contenedorPaso3Localizaciones, setContenedorPaso3Localizaciones] = useState(false);
    const [contenedorPaso4Cuantia, setContenedorPaso4Cuantia] = useState(false);
    const [contenedorPaso5, setContenedorPaso5] = useState(false);

    const [contenedorBuscadorActividades, setContenedorBuscadorActividades] = useState(true);
    const [contenedorBuscadorTipoCompras, setContenedorBuscadorTipoCompras] = useState(false);
    const [contenedorBuscadorLocalizaciones, setContenedorBuscadorLocalizaciones,] = useState(false);

    const [contenedorBotonReturnTipoCompra, setContenedorBotonReturnTipoCompra] = useState(false);
    const [contenedorBotonReturnLocalizaciones, setContenedorBotonReturnLocalizaciones] = useState(false);
    const [contenedorBotonReturnCuantia, setContenedorBotonReturnCuantia] = useState(false);
    const [contenedorBotonReturnGuardar, setContenedorBotonReturnGuardar] = useState(false);
    const [contenedorBotonGuardar, setContenedorBotonGuardar] = useState(false);

    const [contenedorBotonNextActividadEconomica, setcontenedorBotonNextActividadEconomica] = useState(true);
    const [contenedorBotonNextTipoCompra, setcontenedorBotonNextTipoCompra] = useState(false);
    const [contenedorBotonNextLocalizacion, setcontenedorBotonNextLocalizacion] = useState(false);
    const [contenedorBotonNextCuantia, setcontenedorBotonNextCuantia] = useState(false);

    const icon1 = useRef();
    const span1 = useRef();
    const icon2 = useRef();
    const span2 = useRef();
    const icon3 = useRef();
    const span3 = useRef();
    const icon4 = useRef();
    const span4 = useRef();
    const icon5 = useRef();
    const span5 = useRef();

    /*     document.querySelectorAll("select.segmento.form-select")[0] .classList.remove("failed"); */

    const SiguientePaso2TipoCompra = () => {
        //Se muestran las tipo de compras
        icon1.current.classList.remove('c-activo-iconos');
        span1.current.classList.remove('c-activo-texto-iconos');

        icon2.current.classList.add('c-activo-iconos');
        span2.current.classList.add('c-activo-texto-iconos');

        setContenedorPaso1Actividades(false);
        setContenedorBuscadorActividades(false);

        setContenedorPaso2TipoCompras(true);
        setContenedorBuscadorTipoCompras(true);

        setContenedorBotonReturnTipoCompra(true);
        setcontenedorBotonNextActividadEconomica(false)
        setcontenedorBotonNextTipoCompra(true)

    };

    const VolverPaso1ActividadEconomica = () => {
        //Volver A actividades economicas

        icon1.current.classList.add('c-activo-iconos');
        span1.current.classList.add('c-activo-texto-iconos');

        icon2.current.classList.remove('c-activo-iconos');
        span2.current.classList.remove('c-activo-texto-iconos');

        setContenedorPaso2TipoCompras(false);
        setContenedorBuscadorTipoCompras(false);

        setContenedorPaso1Actividades(true);
        setContenedorBuscadorActividades(true);

        setContenedorBotonReturnTipoCompra(false);
        setcontenedorBotonNextTipoCompra(false)
        setcontenedorBotonNextActividadEconomica(true)

    };

    const SiguientePaso3Localizacion = () => {
        //Se muestran las localizaciones

        icon2.current.classList.remove('c-activo-iconos');
        span2.current.classList.remove('c-activo-texto-iconos');

        icon3.current.classList.add('c-activo-iconos');
        span3.current.classList.add('c-activo-texto-iconos');

        setcontenedorBotonNextTipoCompra(false)
        setcontenedorBotonNextLocalizacion(true)

        setContenedorPaso2TipoCompras(false);
        setContenedorBuscadorTipoCompras(false);

        setContenedorBuscadorLocalizaciones(true)
        setContenedorPaso3Localizaciones(true)

        //Oculto un boton de volver y muestro el otro
        setContenedorBotonReturnTipoCompra(false)
        setContenedorBotonReturnLocalizaciones(true)
    };

    const VolverPaso2TipoCompra = () => {
        //Volver A Tipo de compras


        icon2.current.classList.add('c-activo-iconos');
        span2.current.classList.add('c-activo-texto-iconos');

        icon3.current.classList.remove('c-activo-iconos');
        span3.current.classList.remove('c-activo-texto-iconos');


        setcontenedorBotonNextTipoCompra(true)
        setcontenedorBotonNextLocalizacion(false)

        setContenedorPaso2TipoCompras(true);
        setContenedorBuscadorTipoCompras(true);

        setContenedorBuscadorLocalizaciones(false)
        setContenedorPaso3Localizaciones(false)

        //Oculto un boton de volver y muestro el otro
        setContenedorBotonReturnTipoCompra(true)
        setContenedorBotonReturnLocalizaciones(false)

    };


    const SiguientePaso4Cuantia = () => {
        //Se muestran las cuantias
        icon4.current.classList.add('c-activo-iconos');
        span4.current.classList.add('c-activo-texto-iconos');

        icon3.current.classList.remove('c-activo-iconos');
        span3.current.classList.remove('c-activo-texto-iconos');

        setcontenedorBotonNextLocalizacion(false)
        setContenedorBotonReturnLocalizaciones(false)

        setContenedorBuscadorLocalizaciones(false)
        setContenedorPaso3Localizaciones(false)

        setContenedorPaso4Cuantia(true)
        setContenedorBotonReturnCuantia(true)

        setcontenedorBotonNextCuantia(true)

        //btn-next

    };

    const VolverPaso3Localizaciones = () => {

        icon4.current.classList.remove('c-activo-iconos');
        span4.current.classList.remove('c-activo-texto-iconos');

        icon3.current.classList.add('c-activo-iconos');
        span3.current.classList.add('c-activo-texto-iconos');

        setContenedorBotonReturnCuantia(false)
        setContenedorPaso4Cuantia(false)

        setcontenedorBotonNextLocalizacion(true)
        setContenedorBotonReturnLocalizaciones(true)

        setContenedorBuscadorLocalizaciones(true)
        setContenedorPaso3Localizaciones(true)

        setcontenedorBotonNextCuantia(false)

    };


    const SiguientePaso5Terminar = () => {


        icon5.current.classList.add('c-activo-iconos');
        span5.current.classList.add('c-activo-texto-iconos');

        icon4.current.classList.remove('c-activo-iconos');
        span4.current.classList.remove('c-activo-texto-iconos');

        setcontenedorBotonNextCuantia(false)
        setContenedorBotonReturnCuantia(false)

        setContenedorPaso4Cuantia(false)

        setContenedorPaso5(true)
        setContenedorBotonGuardar(true)

        setContenedorBotonReturnGuardar(true)

    };

    const VolverPaso4Cuantia = () => {


        icon5.current.classList.remove('c-activo-iconos');
        span5.current.classList.remove('c-activo-texto-iconos');

        icon4.current.classList.add('c-activo-iconos');
        span4.current.classList.add('c-activo-texto-iconos');

        setcontenedorBotonNextCuantia(true)
        setContenedorBotonReturnCuantia(true)

        setContenedorPaso4Cuantia(true)

        setContenedorPaso5(false)
        setContenedorBotonGuardar(false)

        setContenedorBotonReturnGuardar(false)


    };


    const Guardar = () => {
        alert("Guardando...");
    };


    const [cuantiaHasta, setCuantiaHasta] = useState(0);
    const [toggleSwitchCuantia, setToggleSwitchCuantia] = useState(false);
    const [switchCuantia, setSwitchCuantia] = useState(true);

    const formatValue = (e) => {
        var number = e.target.value;
        number = clearValue(number);
        setCuantiaHasta("$ " + new Intl.NumberFormat().format(number));
    };

    const clearValue = (value) => {
        value = value.replace(" ", "");
        value = value.replace("$", "");
        value = value.replace(",", "");
        value = value.replace(".", "");

        if (value == "") {
            value = 0;
            setToggleSwitchCuantia(false);
        } else {
            setToggleSwitchCuantia(true);
        }

        return parseInt(value);
    };
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
                        className={`notification-toast ${toastIcon == "icon-error" ? "error" : "success"
                            }`}
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
                    <h2 className="perfiles-titulos crear">
                        <span className="c-verde">Crea</span> tu primer perfil
                        de negocio
                    </h2>
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

                                <div className="iconos-perfiles">

                                    <i ref={icon1} className="icon-Paso-1-click c-activo-iconos"> </i>{" "}
                                    <span ref={span1} className="c-activo-texto-iconos">Actividad económica</span>

                                    <i ref={icon2} className="icon-Paso-2-click" id="pleft2"></i>{" "}
                                    <span ref={span2} className="">Tipo de compra</span>

                                    <i ref={icon3} className="icon-Paso-3-click" id="pleft2"  ></i>{" "}
                                    <span ref={span3} className="">Localizaciones</span>

                                    <i ref={icon4} className="icon-Paso-4-click" id="pleft2" ></i>{" "}
                                    <span ref={span4} className="">Rango de Cuantía</span>

                                    <i ref={icon5} className="icon-Paso-5-click" id="pleft2" ></i>{" "}
                                    <span ref={span5} className="">Paso 5</span>


                                </div>
                                <div className="mx-60 mt-30 d-flex">
                                    {/* {contenedorBuscadorActividades && (
                                        <>
                                            <button
                                                button
                                                type="button"
                                                className="icon-Buscar-click"
                                            ></button>
                                            <input
                                                type="text"
                                                placeholder="Busca por actividad económica o UNSPSC"
                                                autoComplete="off"
                                                className="form-control busqueda-input"
                                                onKeyDown={
                                                    inputSearchActividadEconomica
                                                }
                                            />
                                        </>
                                    )} */}

                                    {contenedorBuscadorTipoCompras && (
                                        <>
                                            <input
                                                type="text"
                                                placeholder="Buscar tipo de compra"
                                                autoComplete="off"
                                                className="form-control m-auto"
                                                onKeyDown={
                                                    inputSearchTipoCompra
                                                }
                                            />
                                        </>
                                    )}

                                    {contenedorBuscadorLocalizaciones && (
                                        <>
                                            <input
                                                type="text"
                                                placeholder="Buscar localizacion"
                                                autoComplete="off"
                                                className="form-control m-auto"
                                                onKeyDown={
                                                    inputSearchLocalizaiones
                                                }
                                            />
                                        </>
                                    )}

                                    <h2 className="perfiles-titulos d-flex">
                                        {" "}
                                        Pais de contratación
                                        <img
                                            className="bandera"
                                            src="/public/images/banderas/listado_nombres/CHL.svg"
                                            alt="Bandera Chile"
                                        />
                                    </h2>
                                </div>
                                <br></br>

                                <>{/* Paso 1*/}
                                { contenedorPaso1Actividades && (
                                    <ActividadEconomica data={sectores} onHandleSectores={onHandleSectores}></ActividadEconomica>
                                    )}
                                </>
                                <> {/* Paso 2 TIPO DE COMPRAS*/}
                                    {contenedorPaso2TipoCompras && (
                                        <ul className="tree-root">
                                            {sectoresTipoCompras.map((sector) => (
                                                <>
                                                    {sector.id_padre_sub_categoria ==
                                                        null && (
                                                            <li
                                                                className={`tree-node has-child draggable ${openSectores.includes(
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
                                                                // onClick={() =>
                                                                //     getSegmentoTipoCompras(
                                                                //         sector.id
                                                                //     )
                                                                // }
                                                                >
                                                                    <i
                                                                        className={`tree-arrow has-child ${sector
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
                                                                            /* childs.id == inputActividadEconomica.id */

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
                                                                                getSegmentoTipoCompras(
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
                                                                {openSegmentosTipoCompras.includes(
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
                                                                                                    className={`tree-node has-child draggable segmento ${openSegmentosTipoCompras.includes(
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
                                                                                                    <div
                                                                                                        className="tree-content segmento"
                                                                                                    >
                                                                                                        <i className="tree-arrow expanded has-child ltr"></i>
                                                                                                        <input
                                                                                                            type="checkbox"
                                                                                                            name="tipo_compra"
                                                                                                            onClick={() =>
                                                                                                                checkedTipoCompra(
                                                                                                                    segmento
                                                                                                                )
                                                                                                            }
                                                                                                            checked={
                                                                                                                segmento.id ==
                                                                                                                    inputTiposCompras.id
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
                                            )
                                            )}
                                        </ul>
                                    )}
                                </>
                                <>{/* Paso 3 LOCALIZACIONES */}
                                    {contenedorPaso3Localizaciones && (
                                        <ul className="tree-root">
                                            {sectoresLocalizaciones.map((sector) => (
                                                <>
                                                    {sector.id_padre_sub_categoria ==
                                                        null && (
                                                            <li
                                                                className={`tree-node has-child draggable ${openSectores.includes(
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
                                                                // onClick={() =>
                                                                //     getSegmentoLocalizaciones(
                                                                //         sector.id
                                                                //     )
                                                                // }
                                                                >
                                                                    <i
                                                                        className={`tree-arrow has-child ${sector
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
                                                                            /* childs.id == inputActividadEconomica.id */

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
                                                                                getSegmentoLocalizaciones(
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
                                                                {openSegmentosLocalizaiones.includes(
                                                                    sector.id
                                                                ) && (
                                                                        <ul className="tree-children new-class">
                                                                            {segmentosLocalizaciones.map(
                                                                                (
                                                                                    segmento,
                                                                                    index
                                                                                ) => (
                                                                                    <>
                                                                                        {sector.id ==
                                                                                            segmento.id_padre_sub_categoria && (
                                                                                                <li
                                                                                                    className={`tree-node has-child draggable segmento ${openSegmentosLocalizaiones.includes(
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
                                                                                                    <div
                                                                                                        className="tree-content segmento"
                                                                                                    >
                                                                                                        <i className="tree-arrow expanded has-child ltr"></i>
                                                                                                        <input
                                                                                                            type="checkbox"
                                                                                                            name="tipo_compra"
                                                                                                            onClick={() =>
                                                                                                                checkedLocalizaciones(
                                                                                                                    segmento
                                                                                                                )
                                                                                                            }
                                                                                                            checked={
                                                                                                                segmento.id ==
                                                                                                                    inputLocalizaciones.id
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
                                            )
                                            )}
                                        </ul>
                                    )}
                                </>

                                <>{/* Paso 4 Cuantia*/}
                                    {contenedorPaso4Cuantia && (
                                        <div className="perfil-cuantias">
                                            <div
                                                id="campos-cuantias"
                                                className="justify-content-center pt-2 pb-5 py-md-5 row"
                                            >
                                                <div className="col-10 col-sm-8 col-lg-4 col-md-5">
                                                    <div className="form-group mb-5 mb-md-1 campos-cuantias__form">
                                                        <span className="icon-Cuantia campos-cuantias__icon">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                            <span className="path4"></span>
                                                        </span>
                                                        <label>
                                                            Cuantía desde:
                                                        </label>
                                                        <input
                                                            value={cuantiaHasta}
                                                            onChange={
                                                                formatValue
                                                            }
                                                            type="text"
                                                            id="cuantia_desde"
                                                            name="cuantia_desde"
                                                            placeholder="$"
                                                            className="form-control inputs_form"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-10 col-sm-8 col-lg-4 col-md-5">
                                                    <div className="form-group campos-cuantias__form">
                                                        <span className="icon-Cuantia-2 campos-cuantias__icon">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                            <span className="path4"></span>
                                                        </span>
                                                        <label id="descripcion">
                                                            Cuantía hasta:
                                                        </label>
                                                        <input
                                                            value={cuantiaHasta}
                                                            onChange={
                                                                formatValue
                                                            }
                                                            type="text"
                                                            id="cuantia_hasta"
                                                            name="cuantia_hasta"
                                                            placeholder="Sin limite superior"
                                                            className="form-control inputs_form"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {toggleSwitchCuantia && (
                                                <div class="align-items-center col-11 col-lg-8 col-md-9 col-sm-10 justify-content-between campos-cuantias__block row">
                                                    <div class="col-8 p-0">
                                                        <p>
                                                            ¿Deseas incluir
                                                            contratos{" "}
                                                            <span class="text_color">
                                                                sin presupuesto
                                                                asignado
                                                            </span>{" "}
                                                            o con cuantía de{" "}
                                                            <span class="text_color">
                                                                $0
                                                            </span>{" "}
                                                            en este perfil?
                                                        </p>
                                                    </div>
                                                    <div class="col-3 text-center">
                                                        <label class="switch">
                                                            <input
                                                                type="checkbox"
                                                                checked={
                                                                    switchCuantia
                                                                }
                                                                onClick={() =>
                                                                    setSwitchCuantia(
                                                                        !switchCuantia
                                                                    )
                                                                }
                                                            />
                                                            <span class="slider round"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </>

                                <> {/* Paso 5*/}

                                    {contenedorPaso5 && (
                                        <p>Paso 5</p>
                                    )}
                                </>

                            </div>
                        </div>
                    </div>

                    {/* BOTONES NEXT */}
                    <div className="perfil-bottons-footer position-relative text-center mt-4">

                        <>{/* Next tipoCompra */}
                            {contenedorBotonNextActividadEconomica && (
                                <a
                                    onClick={SiguientePaso2TipoCompra}
                                    className="btn btnRadius btn-new-blue"
                                    id="btn-next-ac"
                                >
                                    <span className="bloque__info-header-cuenta-text--modifier">
                                        Siguiente
                                    </span>
                                </a>
                            )}
                        </>
                        <>{/* Next Localizaciones */}
                            {contenedorBotonNextTipoCompra && (
                                <a
                                    onClick={SiguientePaso3Localizacion}
                                    className="btn btnRadius btn-new-blue"
                                    id="btn-next-tc"
                                >
                                    <span className="bloque__info-header-cuenta-text--modifier">
                                        Siguiente
                                    </span>
                                </a>
                            )}
                        </>
                        <>{/* Next Cuantia */}
                            {contenedorBotonNextLocalizacion && (
                                <a
                                    onClick={SiguientePaso4Cuantia}
                                    className="btn btnRadius btn-new-blue"
                                    id="btn-next-lc"
                                >
                                    <span className="bloque__info-header-cuenta-text--modifier">
                                        Siguiente
                                    </span>
                                </a>
                            )}
                        </>
                        <>{/* GUARDAR*/}
                            {contenedorBotonGuardar && (
                                <a
                                    onClick={Guardar}
                                    className="btn btnRadius btn-new-blue"
                                    id="btn-next-cu"
                                >
                                    <span className="bloque__info-header-cuenta-text--modifier">
                                        Guardar
                                    </span>
                                </a>
                            )}
                        </>

                        <>{/* Next Terminar */}
                            {contenedorBotonNextCuantia && (
                                <a
                                    onClick={SiguientePaso5Terminar}
                                    className="btn btnRadius btn-new-blue"
                                    id="btn-next-cu"
                                >
                                    <span className="bloque__info-header-cuenta-text--modifier">
                                        Siguiente
                                    </span>
                                </a>
                            )}
                        </>


                        {/* BOTONES RETURN */}

                        <>{/* Volver ActividadesEconomicas */}
                            {contenedorBotonReturnTipoCompra && (
                                <a
                                    onClick={VolverPaso1ActividadEconomica}
                                    className="btn btnRadius btn-new-blue"
                                    id="btn-return-tc"
                                >
                                    <span className="bloque__info-header-cuenta-text--modifier">
                                        Volver
                                    </span>
                                </a>
                            )}
                        </>

                        <>{/* Volver TipoCompra */}
                            {contenedorBotonReturnLocalizaciones && (
                                <a
                                    onClick={VolverPaso2TipoCompra}
                                    className="btn btnRadius btn-new-blue"
                                    id="btn-return-lc"
                                >
                                    <span className="bloque__info-header-cuenta-text--modifier">
                                        Volver
                                    </span>
                                </a>
                            )}
                        </>

                        <>{/* Volver Localizaciones */}
                            {contenedorBotonReturnCuantia && (
                                <a
                                    onClick={VolverPaso3Localizaciones}
                                    className="btn btnRadius btn-new-blue"
                                    id="btn-return-cu"
                                >
                                    <span className="bloque__info-header-cuenta-text--modifier">
                                        Volver
                                    </span>
                                </a>
                            )}
                        </>

                        <>{/* Volver Cuantia */}
                            {contenedorBotonReturnGuardar && (
                                <a
                                    onClick={VolverPaso4Cuantia}
                                    className="btn btnRadius btn-new-blue"
                                    id="btn-return-te"
                                >
                                    <span className="bloque__info-header-cuenta-text--modifier">
                                        Volver
                                    </span>
                                </a>
                            )}
                        </>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
