





import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, Head } from "@inertiajs/inertia-react";
import "./Index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";

/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";
import "../../../css/font-unicolor.css";
import "../../../css/font-web.css";

/*Toast*/

/*PRIMEFACES */
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
/* import { CustomerService } from './service/CustomerService'; */

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';


const Index = ({ auth, grupos }) => {
    const dt = useRef(null);
    const handleClearFilters = () => {
        if (dt.current) {
            dt.current.reset();
        }
    }

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);
            return d;
        });
    };

    const getGrupos = (data) => {
        return [...(data || [])].map((d) => {
            if (d.envio_alertas == 1) {
                d.envio_alertas = "Si"
            } else {
                d.envio_alertas = "No"
            }
            return d;
        });
    };
    console.log(grupos)


    const [data, setData] = useState(getGrupos(grupos));
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

    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [statuses] = useState(['No', 'Si']);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };



    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const nombreFiltroBodyTemplate = (grupo) => {
        return (
            <>
                <div class="columna_nombre--content-img">
                    <div class="columna_nombre--img">
                        <img src={`${grupo.imagen_filtro}`} />
                    </div>
                </div>
                <span>{grupo.nombre_filtro}</span>
            </>
        );
    };

    const [toolTips, setToolTips] = useState([
        { 'name': 'editar', text: 'Editar perfil', 'icon': 'icon-Editar icon-pd-editar' },
        { 'name': 'eliminar', text: 'Eliminar perfil', 'icon': 'icon-Eliminar icon-pd-eliminar' },
        { 'name': 'duplicar', text: 'Duplicar perfil', 'icon': 'icon-Duplicar icon-pd-duplicar' },
        { 'name': 'leidos', text: 'Marcar como leídos', 'icon': 'icon-Leidos icon-pd-leidos' },
        { 'name': 'info', text: 'Ver más información', 'icon': 'icon-Informacin-click icon-pd-info' }
    ])

    const accionesBodyTemplate = (grupo) => {
        return <div className="iconos_functions_grid">
            {toolTips.map((placement, index) => (
                <OverlayTrigger key={index} overlay={
                    <Tooltip id={`tooltip-${placement.name}-${grupo.id}`} className={`tooltip tooltip-${placement.name}`}>{placement.text}</Tooltip>
                }>
                    <button type="button" id={`${placement.name}-btn${grupo.id}`} className={`${placement.icon}`}></button>
                </OverlayTrigger>
            ))}
        </div>;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} placeholder="Seleccionar Notificaciones" className="p-column-filter" showClear />
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

    return (
        <>
            <AuthenticatedLayout auth={auth}>
                <div className="col contenido_internas " id="grupos">
                    <div className="position-relative d-block">
                        <div className="content_blank_interno margin_left_layout">
                            <div className="col"><h2 className="name_seccion_app">Administrar perfil (es) de negocio</h2>
                            </div>
                            <div className="col">
                                <div id="perfil-list" className="">
                                    <div className="tablescoop position-relative tablebordeada">
                                        <div className="cargando_tables" style={{ display: 'none' }}>
                                            <div className="col">
                                                <img src="https://col.licitaciones.info/img/loading.gif" className="img-col" />
                                                <p>Cargando</p>
                                            </div>
                                        </div>
                                        <div className="befor_table">
                                        </div>
                                        <div className="VueTables VueTables--server">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group form-inline float-left VueTables__search">

                                                    </div>
                                                    <div className="form-group form-inline float-right VueTables__limit">
                                                        <div className="m-0 w-100">
                                                            <div className="text-left reloadTable row" style={{ margin: 0 + 'px !important;' }}>
                                                                <div id="top-botones" className="mb-2 mb-lg-0">
                                                                    <a role="button" className="btn btn-default fa fa-refresh btnsBoot" style={{ marginBottom: 10 + 'px;' }}></a>

                                                                    {/* <a role="button" className="btn btn-default btnsBoot">Limpiar</a> */}

                                                                    <a href="https://col.licitaciones.info/cliente/grupo/crear" role="button" className="btn btn-new-green btnRadius"><span className="icon-Crear volver_icon">
                                                                    </span> Crear perfil </a>

                                                                </div>
                                                                <div className="col-12 col-lg-7 col-xl-6 p-0 paginacion_grid text-center text-lg-right ">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <DataTable ref={dt} value={data} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                                                    globalFilterFields={['name', 'representative.name', 'status']} emptyMessage="No se encontraron registros">
                                                    <Column style={{ maxWidth: 600 + 'px' }} filter className='columna_seleccion columna_pequena' filterElement={clearTemplate} />
                                                    <Column field="nombre_filtro" body={nombreFiltroBodyTemplate} header="Nombre" filter filterPlaceholder="Buscar" className="columna_nombre" />
                                                    <Column field="descripcion_filtro" header="Descripción" filter filterPlaceholder="Buscar" className="columna_grande"/>
                                                    <Column field="limite_inferior_cuantia" header="Cuantia inferior" filter filterPlaceholder="Buscar" className="columna_promedio"/>
                                                    <Column field="limite_superior_cuantia" header="Cuantia superior" filter filterPlaceholder="Buscar" className="columna_promedio"/>
                                                    <Column field="historico" header="Histórico" filter filterPlaceholder="Buscar" className="columna_promedio"/>
                                                    <Column field="envio_alertas" header="Notificaciones" showFilterMenu={false} filter filterElement={statusRowFilterTemplate} className="columna_notificaciones"/>
                                                    <Column body={accionesBodyTemplate} filter className="v-hidden columna_acciones"  />
                                                </DataTable>
                                            </div>
                                            <div className="paginacion_grid">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
