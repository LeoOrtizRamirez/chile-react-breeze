import React, { useEffect, useState } from 'react'
import './MenuLateral.css'
import { Nav, NavDropdown } from 'react-bootstrap';

import { Inertia } from '@inertiajs/inertia'

import CrearCarpeta from './CrearCarpeta';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const MenuLateral = ({ carpetas = [], grupos = [], carpeta_actual, perfiles = [], zona = null }) => {
    const [groups, setGroups] = useState(grupos)
    const [folders, setFolders] = useState(carpetas == null ? [] : carpetas)
    useEffect(() => {
        if (carpetas != null) {
            setFolders(carpetas)
        }
    }, [carpetas])

    useEffect(() => {
        if (carpetas == null) {
            axios.get(`/cliente/carpeta/carpetas-user`)
                .then(response => {
                    setFolders(response.data)
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }, [])

    const { carpeta, setCarpeta } = useState({
        nombre_carpeta: "",
        color: "",
        orden: "",
    });
    const [showModalCrearCarpeta, setShowModalCrearCarpeta] = useState(false);
    const handleOpenModalCrearCarpeta = () => {
        setShowModalCrearCarpeta(true);
    };
    const handleCloseModalCrearCarpeta = () => {
        setShowModalCrearCarpeta(false);
    };

    const changePage = (zona, tipo = null, array = null) => {
        var url = '';
        var idsArray = "";
        if (array != null) {
            if (Array.isArray(array)) {
                idsArray = array.map((a) => a.id).join(',');
            } else {
                //Obtener ids de perfiles
                if (perfiles?.length > 0) {
                    var ids_perfiles = perfiles.map(item => item.id)
                    if (ids_perfiles.includes(array.id)) {
                        ids_perfiles = ids_perfiles.filter(item => item != array.id)
                        idsArray = ids_perfiles.map((a) => a).join(',');
                    } else {
                        ids_perfiles.push(array.id)
                        idsArray = ids_perfiles.map((a) => a).join(',');
                    }
                } else {
                    idsArray = array.id;
                }
            }
        }
        switch (zona) {
            case 'Contratos':
                url = `/cliente/contratos`
                break;
            case 'P':
                url = `/cliente/contratos/get-info/${zona}`
                break;
            case 'F':
                url = `/cliente/contratos/get-info/${zona}`
                break;
            case 'C':
                if (tipo == null) {
                    url = `/cliente/contratos/get-info/${zona}`
                } else {
                    url = `/cliente/contratos/get-info/${zona}?${tipo}=${array.id}`
                }
                break;
            case 'MP':
                if (idsArray == "") {
                    url = `/cliente/contratos`
                } else {
                    url = `/cliente/contratos/get-info/${zona}?${tipo}=${idsArray}`
                }
                break;
            default:
                break;
        }
        Inertia.get(url);
    }


    const initialTasks = [
        {
            id: "1",
            text: "React.js",
        },
        {
            id: "2",
            text: "HTML/CSS",
        },
        {
            id: "3",
            text: "AWS",
        },
        {
            id: "4",
            text: "JavaScript",
        },
    ];
    const reorder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };
    const [tasks, setTasks] = useState(initialTasks);

    return (
        <div id="menu-lateral" className="fixed-top">
            <Nav className="new-menu scroll_fit">
                {groups.length > 0 ?
                    <NavDropdown
                        drop={'end'}
                        id="item_menu-misperfiles"
                        className=""
                        title={
                            <>
                                <span className="icon-Mis-perfiles">
                                    <span className="path1">
                                    </span>
                                    <span className="path2">
                                    </span>
                                    <span className="path3">
                                    </span>
                                    <span className="path4">
                                    </span>
                                    <span className="path5">
                                    </span>
                                </span>
                                <span className="item-title-menu">Mis perfiles</span>
                                <i className="contadores_menu contadores_menu_top" style={{ display: "none" }}></i>
                                <span className="icon-Flujo flechas-menu"></span>
                            </>
                        }>

                        <span className="angle_dropdown_menu" style={{ top: 0.8 + 'px' }}>
                        </span>
                        <div className="drop-perfiles position-relative">
                            <span className="icon-Contraer-campana-click">
                            </span>
                            <div className="item-checkbox-menu item-checkbox-menu-subtitle">
                                <span className="body_checkbox">
                                    <div className="checkbox" style={{ margin: 0 + 'px' }}><label>
                                        {perfiles?.length == groups?.length ?
                                            <input
                                                type="checkbox"
                                                id="checkboxPerfilAll"
                                                className="input_perfil_val"
                                                checked={true}
                                                onClick={() => changePage('Contratos')}
                                            />
                                            :
                                            <input
                                                type="checkbox"
                                                id="checkboxPerfilAll"
                                                className="input_perfil_val"
                                                onClick={() => changePage('MP', 'perfiles', groups)}
                                                style={{ backgroundColor: perfiles?.length > 0 ? '#73c914' : '' }}
                                            />
                                        }

                                    </label>
                                    </div>
                                </span> <label htmlFor="checkboxPerfilAll" id="visita_0" className="d-block">Mis perfiles
                                </label>
                            </div>

                            <div className="body-all-perfiles">
                                <div className="scroll_fit">
                                    <div id="menuperfiles_movil">
                                        <DragDropContext onDragEnd={(result) => {
                                            const { source, destination } = result;
                                            if (!destination) { return; }
                                            if (source.index === destination.index && source.droppableId === destination.droppableId) { return; }
                                            setGroups((prevGroup) => reorder(prevGroup, source.index, destination.index));
                                            let perfiles_ordenados = reorder(groups, source.index, destination.index)
                                            var token = document.querySelector('meta[name="csrf-token"]')
                                            axios.post('/cliente/grupo/save-order', {
                                                perfiles: perfiles_ordenados
                                            },
                                                { 'Authorization': `Bearer ${token}` })
                                                .then(response => {

                                                })
                                                .catch(error => {
                                                    console.log(error)
                                                })
                                        }}
                                        >

                                            <Droppable droppableId="groups">
                                                {(droppableProvided) => (
                                                    <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className="contenedor_perfiles">
                                                        {groups.map((group, index) => (
                                                            <Draggable key={group.id} draggableId={`grupo_${group.id}`} index={index}>
                                                                {(draggableProvided) => (
                                                                    <div {...draggableProvided.draggableProps} ref={draggableProvided.innerRef}
                                                                        {...draggableProvided.dragHandleProps} className="item-checkbox-menu item-icon-menu" /* key={`perfil_${index}`} */ onClick={() => changePage('MP', 'perfiles', group)}>
                                                                        <span className="body_checkbox">
                                                                            <input
                                                                                type="checkbox"
                                                                                id="checkboxPerfil0"
                                                                                className="input_perfil_val"
                                                                                value="256058"
                                                                                checked={perfiles?.find(perfil => perfil.id === group.id)}
                                                                            />
                                                                        </span> <label id="visita_256058" className="">
                                                                            <div className="content-img">
                                                                                <div className="content-img--img imgperfil">
                                                                                    <img src={group.imagen_filtro} />
                                                                                </div>
                                                                            </div>
                                                                            <span title="PRIMER" alt="PRIMER" className="cursor-type-pointer">{group.nombre_filtro}</span>
                                                                        </label>
                                                                        {/* <div className="indic-item-menu">
                                                        <i className="contadores_nuevos_point"></i>
                                                    </div> */}
                                                                        <i className="icono-arrastre icon-Mover"></i>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {droppableProvided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>

                                        </DragDropContext>
                                    </div>
                                </div>
                            </div>

                            <div className="botones-dropdown-menu">
                                <a href="/cliente/grupo" className="btn-new-gray text-center activeli">Administrar perfil(es)</a>
                                <a href="/cliente/grupo/crear" className="btn-new-green text-center"><i className="icon-Crear icon-boton"></i>Crear perfil</a>
                            </div>
                        </div>
                    </NavDropdown >
                    :
                    <li id="item_menu-seguimiento-li">
                        <a href="/cliente/grupo" id="item_menu-misperfiles" className="">
                            <span className="icon-Mis-perfiles">
                                <span className="path1">
                                </span>
                                <span className="path2">
                                </span>
                                <span className="path3">
                                </span>
                                <span className="path4">
                                </span>
                                <span className="path5">
                                </span>
                            </span>
                            <span className="item-title-menu">
                                Mis perfiles
                            </span>
                            <i className="contadores_menu" style={{ display: "none;" }}></i>
                        </a>
                    </li>
                }

                <li id="item_menu-seguimiento-li">
                    <button type="button" id="item_menu-seguimiento" className="">
                        <span className="icon-Seguimientos"></span>
                        <span className="item-title-menu">
                            Mis seguimientos
                        </span>
                        <i className="contadores_menu" style={{ display: "none;" }}></i>
                    </button>
                </li>
                <NavDropdown
                    drop={'end'}
                    id="item_menu-carpetas_li"
                    className=""
                    title={
                        <>
                            <span className="icon-Mis-carpetas">
                                <span className="path1">
                                </span>
                                <span className="path2">
                                </span>
                                <span className="path3">
                                </span>
                                <span className="path4">
                                </span>
                                <span className="path5">
                                </span>
                                <span className="path6">
                                </span>
                                <span className="path7">
                                </span>
                            </span>
                            <span className="item-title-menu">Carpetas</span>
                            <i className="contadores_menu contadores_menu_top" style={{ display: "none" }}></i>
                            <span className="icon-Flujo flechas-menu"></span>
                        </>
                    }>

                    <span className="angle_dropdown_menu" style={{ top: 0.8 + 'px' }}>
                    </span>
                    <div className="drop-perfiles position-relative">
                        <span className="icon-Contraer-campana-click"></span>
                        <div className="item-checkbox-menu item-checkbox-menu-subtitle">
                            <label className="d-block">Carpetas</label>
                        </div>
                        <div className="body-all-perfiles">
                            <div className="scroll_fit">
                                <div className="contenedor_carpetas">
                                    <div>
                                        <div className="item-checkbox-menu item-icon-menu">
                                            <span className="body_checkbox">
                                                <div className="radio" style={{ margin: 0 + 'px;' }}>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="radiocontratos"
                                                            id="radioContratosFavoritos"
                                                            className="input_carpeta_val"
                                                            value="F"
                                                            checked={zona == "F"}
                                                            onClick={() => changePage('F')}
                                                        />
                                                    </label>
                                                </div>
                                            </span>
                                            <label for="radioContratosFavoritos" id="">
                                                <div className="content-img">
                                                    <div className="content-img--img">
                                                        <span className="icon-Favorito-click content-img--img__iconos" style={{ color: 'rgb(253, 203, 54);' }}>
                                                        </span>
                                                    </div>
                                                </div>
                                                Favoritos
                                            </label> <i className="icono-arrastre icon-Mover"></i>
                                        </div>
                                        <div className="item-checkbox-menu item-icon-menu">
                                            <span className="body_checkbox">
                                                <div className="radio" style={{ margin: 0 + 'px;' }}>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="radiocontratos"
                                                            id="radioContratosEliminados"
                                                            className="input_carpeta_val"
                                                            value="P"
                                                            checked={zona == "P"}
                                                            onClick={() => changePage('P')}
                                                        />
                                                    </label>
                                                </div>
                                            </span>
                                            <label for="radioContratosEliminados" id="">
                                                <div className="content-img">
                                                    <div className="content-img--img">
                                                        <span className="icon-Eliminar content-img--img__iconos" style={{ color: 'rgb(209, 49, 97)' }}></span>
                                                    </div>
                                                </div>
                                                Papelera
                                            </label> <i className="icono-arrastre icon-Mover"></i>
                                        </div>
                                        {folders.map((carpeta, index) => (
                                            <div className="item-checkbox-menu item-icon-menu" key={`carpeta_${index}`}>
                                                <span className="body_checkbox">
                                                    <div className="radio" style={{ margin: 0 + 'px;' }}>
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                name="radiocontratos"
                                                                id={`checkboxCarpeta${carpeta.id}`}
                                                                className="input_carpeta_val"
                                                                value={carpeta.id}
                                                                checked={carpeta.id == carpeta_actual?.id}
                                                                onClick={() => changePage('C', 'carpeta', carpeta)}
                                                            />
                                                        </label>
                                                    </div>
                                                </span>
                                                <label for="checkboxCarpeta0" id="carpeta_21956">
                                                    <div className="content-img">
                                                        <div className="content-img--img">
                                                            <span className="icon-Mis-carpetas content-img--img__iconos" style={{ color: carpeta.color }}>
                                                                <span className="path1">
                                                                </span>
                                                                <span className="path2">
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {carpeta.nombre_carpeta}
                                                </label>
                                                <i className="icono-arrastre icon-Mover"></i>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="botones-dropdown-menu">
                            <a href="/cliente/carpeta/administrar-carpetas" className="btn-new-gray text-center activeli">Administrar carpetas</a>
                            <a className="btn-new-green text-center" onClick={handleOpenModalCrearCarpeta}>
                                <i className="icon-Crear icon-boton"></i>Crear carpeta</a>
                        </div>
                    </div>
                </NavDropdown>
                <li id="item_menu-todos-li">
                    <a href="/cliente/contratos" id="item_menu-todos" className="">
                        <span className="icon-Todos-los-contratos"></span>
                        <span className="item-title-menu">Todos los contratos</span>
                    </a>
                </li>
                <li id="item_menu-ajustes-li">
                    <a id="item_menu-publicidad" href="/cliente/notificacion-correo">
                        <span className="icon-Ajustes"></span>
                        <span className="item-title-menu">Ajustes</span>
                    </a>
                </li>
                <li id="item_menu-publicarcontrato-li" className="dropright">
                    <a id="item_menu-publicarcontrato" href="/cliente/solicitud">
                        <span className="icon-Publicar-click"></span>
                        <span className="item-title-menu">Publicar contrato</span>
                    </a>
                </li>
                <li id="item_menu-sugerencia-li">
                    <a id="item_menu-sugerencia" href="/cliente/sugerencias">
                        <span className="icon-Sugerencia"></span>
                        <span className="item-title-menu">Sugerencia de entidades</span>
                    </a>
                </li>
            </Nav >
            <ul className="new-menu scroll_fit ">

            </ul>
            <CrearCarpeta showModal={showModalCrearCarpeta} handleCloseModal={handleCloseModalCrearCarpeta} carpeta={carpeta} />
        </div >
    )
}

export default MenuLateral