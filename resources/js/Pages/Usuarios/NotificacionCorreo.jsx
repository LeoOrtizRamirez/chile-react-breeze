import React, { useState, useRef } from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import './NotificacionCorreo.css'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Toast } from 'primereact/toast';
const NotificacionCorreo = ({ auth, grupos }) => {
    const nombreFiltroBodyTemplate = (grupo) => {
        return (
            <>
                <div className="columna_nombre--content-img">
                    <div className="columna_nombre--img">
                        <img src={`${grupo.imagen_filtro}`} />
                    </div>
                </div>
                <span>{grupo.nombre_filtro}</span>
            </>
        );
    };

    const notificacionFiltroHeaderTemplate = (grupo) => {
        return (
            <label className="switch">
                <input
                    type="checkbox"
                    checked={perfilesConAlertas}
                    onChange={(e) => saveNotification(e)}
                />
                <span className="slider round"></span>
            </label>
        );
    };

    const notificacionBodyTemplate = (grupo) => {
        return (
            <>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={grupo.envio_alertas == 1}
                        onChange={(e) => saveNotification(e, grupo)}
                    />
                    <span className="slider round"></span>
                </label>
            </>
        );
    };

    const clearTemplate = (options) => {
        return (
            <div className="VueTables__selecciones-filter-wrapper">
                <span>
                    <div className="selecciones-nuevo-diseno">
                        <button id="limpiar" type="button" className="icon-Limpiar-click borrador-grid" onClick={handleClearFilters}>
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                            <span className="path6"></span>
                            <span className="path7"></span>
                            <span className="path8"></span>
                        </button>
                    </div>
                </span>
            </div>
        );
    };

    const [data, setData] = useState(grupos);

    const validateEnvioAlertas = (arr) => {
        const first = arr[0].envio_alertas;
        const all = arr.every((el) => el.envio_alertas === first)
        if(all && first == 1){
            return true
        }else{
            return false
        }
    }
    const [perfilesConAlertas, setPerfilesConAlertas] = useState(validateEnvioAlertas(data))
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        nombre_filtro: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        descripcion_filtro: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        limite_inferior_cuantia: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        limite_superior_cuantia: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        historico: { value: null, matchMode: FilterMatchMode.CONTAINS },
        envio_alertas: { value: null, matchMode: FilterMatchMode.EQUALS },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
    });

    /*Borrar filtros*/
    const dt = useRef(null);
    const handleClearFilters = () => {
        if (dt.current) {
            dt.current.reset();
        }
    }
    /*Borrar filtros*/

    const [loading, setLoading] = useState(false);
    const [globalLoading, setGlobalLoading] = useState(false);

    const toastBL = useRef(null);
    const saveNotification = (e, filtro = null) => {
        var filtros = [];
        if (filtro != null) {
            filtros = [filtro]
        } else {
            filtros = data
        }
        setGlobalLoading(true)
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/notificacion-correo/save-notification', {
            web: e.target.checked,
            movil: false,
            perfiles: filtros
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setData(response.data)
                /* setData(prevData => {
                    const index = prevData.findIndex(item => item.id === filtro.id);
                    if (index === -1) {
                        return prevData;
                    } else {
                        let item = prevData[index]
                        item.envio_alertas = response.data.envio_alertas
                        prevData[index] = item;
                        return prevData;
                    }
                }); */
                const validate = validateEnvioAlertas(response.data)
                setPerfilesConAlertas(validate)
                setGlobalLoading(false)
                toastBL.current.show({ severity: 'success', summary: 'Preferencias de notificaciones actualizadas', life: 3000 });
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <AuthenticatedLayout auth={auth} page={'notificacionCorreo'} globalLoading={globalLoading}>
            <div className="content_not_blank_interno">
                <div className='notificaciones-user'>
                    <div className='container-fluid'>
                        <div className="row">
                            <div className="col-lg-12 col-xl-3 fondo_blanco">
                                <div className="notificaciones_panel_lateral">
                                    <div className="notificaciones_panel_lateral_imagen">
                                        <img src="/public/images/notificaciones/Notificaciones.png" className="" />
                                    </div>
                                    <div className="notificaciones_panel_lateral_opciones">
                                        <div className="notificaciones_panel_lateral_opciones_email">
                                            <span className="icon-Email-noti notificaciones_panel_lateral_opciones_email_icono"></span>
                                            <label className="notificaciones_panel_lateral_opciones_label">Seguimientos de nuevos documentos via <span>e-mail:</span></label>
                                            <label className="switch">
                                                <input
                                                    type="checkbox"
                                                />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="mensaje_personalizado" className="col-lg-12 col-xl-9">
                                <div className="notificaciones_panel_general">
                                    <div className="notificaciones_panel_general_titulo name_seccion_app">
                                        <span>Configuración de las notificaciones</span>
                                    </div>
                                    <div className="notificacion-content notificaciones_panel_general_subtitulo">
                                        <img src="https://col.licitaciones.info/img/usuario/perfiles/svg/noti_perfil.svg" alt="notificacion de perfiles" />
                                        <span className="notificaciones_panel_general_subtitulo_span">Perfiles de negocio:</span>
                                    </div>
                                    <div id="notificacion-grid" className="col-10">
                                        <p className="records">{data.length} registros</p>
                                        <DataTable ref={dt} value={data} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                                            globalFilterFields={['name', 'representative.name', 'status']} emptyMessage="No se encontraron registros">
                                            <Column style={{ maxWidth: 600 + 'px' }} filter className='columna_seleccion columna_pequena' filterElement={clearTemplate} />
                                            <Column field="nombre_filtro" body={nombreFiltroBodyTemplate} header="Nombre" filter filterPlaceholder="Buscar" className="columna_nombre nombre_filtro" />
                                            <Column field="envio_alertas" body={notificacionBodyTemplate} header="Vía email" filter filterElement={notificacionFiltroHeaderTemplate} className="columna_nombre nombre_filtro" />
                                        </DataTable>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Toast ref={toastBL} position="bottom-left" />
        </AuthenticatedLayout >
    )
}

export default NotificacionCorreo