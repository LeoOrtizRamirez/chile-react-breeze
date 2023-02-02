import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
import './Editar.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const Editar = ({ auth, actividades_economicas, solo_sectores, ae_actual }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        id: ae_actual.id,
        nombre: ae_actual.nombre,
        sector: "",
        segmento: "",
        tipo_categoria: 1,
    });

    useEffect(()=>{
        console.log(ae_actual.id)
        if(ae_actual.id_padre_sub_categoria == null){
            console.log("if")
            setData("sector", ae_actual.id)
            console.log("uf")
        }else{
            console.log("else")
            setData("sector", 123)
            console.log(data)
            setData("segmento", ae_actual.id)
            console.log(data)
        }
    },[])

    const [fakeSectores, setFakeSectores] = useState(actividades_economicas);
    const [sectores, setSectores] = useState(solo_sectores);
    const [segmentos, setSegmentos] = useState([])

    const getSegmentos = (value) => {
        setData("sector", value)
        const pattern = new RegExp(value, "i");
        const FilteredActividadesEcomomicas = fakeSectores.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });
        setSegmentos(FilteredActividadesEcomomicas);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route("actividades-economicas.store"), { onSuccess: () => reset() });
    };



    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Actividades económicas" />
            <div className="contenedor-planes">
                <div className="posicion-opciones-planes">
                    <MenuOpciones />
                </div>
                <div className="bg-white overflow-auto w-full text-center margen-superior">
                    <h2 className="name_section_app">Editar Actividad económica</h2>
                    <div className="container mt-4">
                        <form onSubmit={submit}>
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <label htmlFor="">Seleccione el sector</label>
                                </div>
                                <div className="col-12 col-sm-8">
                                    <select name="sector" className="sector" id="" onChange={(e) => getSegmentos(e.target.value)} value={data.sector}>
                                        <option value="">Selecciona un Sector</option>
                                        {sectores.map((sector) => (
                                            <option value={sector.id}>{sector.nombre}</option>
                                        ))}

                                    </select>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-sm-4">
                                    <label htmlFor="">Seleccione el segmento</label>
                                </div>
                                <div className="col-12 col-sm-8">
                                    <select name="segmento" className="segmento" id="" onChange={(e) => setData("segmento", e.target.value)} value={data.segmento}>
                                        <option value="">Selecciona un Segmento</option>
                                        {segmentos.map((segmento) => (
                                            <option value={segmento.id}>{segmento.nombre}</option>
                                        ))}

                                    </select>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-sm-4">
                                    <label htmlFor="">Nombre Actividad económica</label>
                                </div>
                                <div className="col-12 col-sm-8">
                                    <input
                                        value={data.nombre}
                                        onChange={(e) =>
                                            setData("nombre", e.target.value)
                                        }
                                        type="text"
                                        placeholder="Nombre"
                                        className="actividad-economica"
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-sm-4">
                                    <label htmlFor="">Código de verificación</label>
                                </div>
                                <div className="col-12 col-sm-8">
                                    <input
                                        value={data.id}
                                        onChange={(e) =>
                                            setData("id", e.target.value)
                                        }
                                        type="number"
                                        placeholder="Código de verificación"
                                        className="actividad-economica"
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4"></div>
                                <div className="col-4">
                                    <button type="submit" className="btn btnRadius btn-new-blue mr-2">Editar</button>
                                    <button type="buttom" className="btn btnRadius btn-new-red ml-2">Cancelar</button>
                                </div>
                                <div className="col-4"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
};

export default Editar;