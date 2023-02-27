import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";
import "../../../css/font-unicolor.css";
/*Toast*/

const Index = ({ auth, actividades_economicas }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastIcon, setToastIcon] = useState("");
    const [fakeSectores, setFakeSectores] = useState(actividades_economicas);
    const [sectores, setSectores] = useState(actividades_economicas);
    const [showSegmento, setShowSegmento] = useState(false);
    const [showActividadEconomica, setShowActividadEconomica] = useState(false);
    const [selectedSegmento, setSelectedSegmento] = useState(0);
    const [selectedActividadEconomica, setSelectedActividadEconomica] = useState(0);

    const [openSegmentos, setOpenSegmentos] = useState([]);
    const [openActividadesEconomicas, setOpenActividadesEconomicas] = useState([]);

    const [inputActividadEconomica, setInputActividadEconomica] = useState({
        id: 0,
        nombre: "",
    });

    const [segmentos, setSegmentos] = useState([]);
    const [actividadesEconomicas, setActividadesEconomicas] = useState([]);

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

    const getActividadEconomica = (parent) => {
        if (openActividadesEconomicas.includes(parent)) {
            //SE ELIMINA EL SECTOR AL QUE SE LE DIO CLICK SI YA EXISTE EN EL ARRAY openActividadesEconomicas
            setOpenActividadesEconomicas(
                openActividadesEconomicas.filter((element) => element != parent)
            );
        } else {
            //SE AGREGA EL SECTOR AL QUE SE LE DIO CLICK SI NO EXISTE EN EL ARRAY openActividadesEconomicas
            setOpenActividadesEconomicas([
                ...openActividadesEconomicas,
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
        setInputActividadEconomica(actividad_economica);
    };

    const inputSearchActividadEconomica = (e) => {
        if (e.target.value == "") {
            setSectores(fakeSectores);
            setSegmentos([]);
            setActividadesEconomicas([]);
            setOpenSegmentos([]);
            setOpenActividadesEconomicas([]);
            return;
        }

        if (e.key === "Enter") {
            //SE BUSCAN LAS ACTIVIDADES ECONOMICAS QUE COINCIDAN CON EL NOMBRE QUE SE INGRESO
            const pattern = new RegExp(e.target.value, "i");

            const FilteredActividadesEcomomicas = fakeSectores.filter(function (el) {
                if (pattern.test(el.nombre)) {
                    return el;
                }
            });

            var sectores_filtrados = [];
            var segmentos_filtrados = [];
            var actividades_economicas_filtrados = [];
            var open_actividades_economicas = [];
            var open_segmentos = [];

            FilteredActividadesEcomomicas.forEach((element) => {
                if (element.id_abuelo_sub_categoria != null && element.id_padre_sub_categoria != null) {
                    //ae
                    actividades_economicas_filtrados.push(element);
                    open_actividades_economicas.push(
                        element.id_padre_sub_categoria
                    );

                    //BUSCAMOS EL SEGMENTO DE LA ACTIVIDAD ECONOMICA

                    segmentos_filtrados.push(
                        fakeSectores.filter(
                            (fs) => fs.id == element.id_padre_sub_categoria
                        )[0]
                    );
                    open_segmentos.push(element.id_abuelo_sub_categoria);
                }

                if (element.id_abuelo_sub_categoria == null && element.id_padre_sub_categoria != null) {
                    //segmento
                    if (!segmentos_filtrados.includes(element)) {

                        segmentos_filtrados.push(element);
                        segmentos_filtrados.push(element);
                    }
                    if (!open_segmentos.includes(element.id_padre_sub_categoria)) {
                        open_segmentos.push(element.id_padre_sub_categoria);
                        segmentos_filtrados.push(element);
                    }
                }

                if (element.id_abuelo_sub_categoria == null && element.id_padre_sub_categoria == null) {
                    //sector
                    sectores_filtrados.push(element);
                }
            });

            //BUSCAR TODOS LOS SECTORES Y SEGMENTOS DE actividades_economicas_filtrados
            var ae_sector = null;
            var ae_segmento = null;
            actividades_economicas_filtrados.forEach((ae) => {
                //OBTENER SECTOR DE LA ACTIVIDAD ECONOMICA
                ae_sector = fakeSectores.filter(
                    (fs) => fs.id == ae.id_abuelo_sub_categoria
                )[0];
                ae_segmento = fakeSectores.filter(
                    (fs) => fs.id == ae.id_padre_sub_categoria
                )[0];
                //SI EL ae_sector NO ESTA INCLUIDO EN sectores
                if (!sectores_filtrados.includes(ae_sector)) {
                    //BUSCAR SECTOR Y GUARDAR
                    sectores_filtrados.push(
                        fakeSectores.filter(
                            (sector) => sector.id == ae.id_abuelo_sub_categoria
                        )[0]
                    );
                }
                if (!segmentos_filtrados.includes(ae_segmento)) {
                    //BUSCAR SEGMENTO Y GUARDAR
                    sectores_filtrados.push(
                        fakeSectores.filter(
                            (sector) => sector.id == ae.id_padre_sub_categoria
                        )[0]
                    );
                }
            });

            setSectores(sectores_filtrados);
            setSegmentos(segmentos_filtrados);
            setActividadesEconomicas(actividades_economicas_filtrados);
            setOpenSegmentos(open_segmentos);
            setOpenActividadesEconomicas(open_actividades_economicas);
        }
    };

    return (
        <AuthenticatedLayout auth={auth}>
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
                    <h2 className="perfiles-titulos crear"><span className="c-verde">Crea</span> tu primer perfil de negocio</h2>
                    <div className="container mt-4">
                        <div className="tree_categorias tree_1">
                            <div className="tree_categorias__busqueda mb-3 mb-md-4">
                                <div className="mx-auto">
                                    <input
                                        type="text"
                                        placeholder="Busca por actividad económica o UNSPSC"
                                        autoComplete="off"
                                        className="form-control busqueda-input"
                                        onKeyDown={
                                            inputSearchActividadEconomica
                                        }
                                    />
                                    <h2 className="perfiles-titulos"> Pais de contratación <span className="c-verde">Chile</span></h2>
                                    <button
                                        type="button"
                                        className="icon-Buscar-click"
                                    >
                                        <i className="bi bi-search"></i>
                                    </button>
                                    <br></br>

                                    {sectores.map((sector) => (
                                        <>
                                            {sector.id_padre_sub_categoria ==
                                                null && (
                                                    <>
                                                        <div
                                                            id={sector.id}
                                                            className="tree-content mt-3 sector"
                                                            key={sector.id}
                                                            onClick={() =>
                                                                getSegmento(
                                                                    sector.id
                                                                )
                                                            }
                                                        >
                                                            <i
                                                                className={`tree-arrow has-child ${sector.childs
                                                                    .length > 0
                                                                    ? "bi bi-chevron-down"
                                                                    : ""
                                                                    }`}
                                                            ></i>
                                                            <span className="tree-anchor">
                                                                <span className="tree-division tree-division1">
                                                                    <span className="tree-division__title my-auto">
                                                                        {
                                                                            sector.nombre
                                                                        }
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                        {/* {showSegmento && sector.id == selectedSegmento && */}
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
                                                                                            data-id="20504"
                                                                                            className="tree-node has-child expanded draggable"
                                                                                        >
                                                                                            <div
                                                                                                className="tree-content segmento"
                                                                                                onClick={() =>
                                                                                                    getActividadEconomica(
                                                                                                        segmento.id
                                                                                                    )
                                                                                                }
                                                                                            >
                                                                                                <i className="tree-arrow expanded has-child ltr"></i>
                                                                                                {/* <i className="tree-checkbox"></i> */}
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

                                                                                            {/* {showActividadEconomica && selectedActividadEconomica == segmento.id && */}
                                                                                            {openActividadesEconomicas.includes(
                                                                                                segmento.id
                                                                                            ) && (
                                                                                                    <ul className="tree-children">
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
                                                                                                                                        type="radio"
                                                                                                                                        name="actividad_economica"
                                                                                                                                        onChange={() =>
                                                                                                                                            checked(
                                                                                                                                                childs
                                                                                                                                            )
                                                                                                                                        }
                                                                                                                                        checked={
                                                                                                                                            childs.id ==
                                                                                                                                                inputActividadEconomica.id
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
                                                    </>
                                                )}
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
