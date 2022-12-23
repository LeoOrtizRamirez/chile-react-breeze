import React from 'react'
import { useForm } from "@inertiajs/inertia-react";

const CreateModal = () => {

    const { data, setData, post, processing, reset, errors } = useForm({
        nombre: null,
        valor: null,
        dias: null,
        tiempo: null,
        descripcion: null,
        cantidad_tiempo: null,
        valor_cuenta_adicional: null,
        estado: null,
    })

    const handleInputChange = (event) => {
        setData({
            ...data,//Hace una pseudo copia de data
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (e) => {
        e.preventDefault()
        post(route("planes.store"), { onSuccess: () => reset() });
        //Cerrar modal
        const modal = document.querySelector(".modal.fade.show")//Buscar modal abierto
        if (modal) {
            modal.style.display = "none";
            modal.classList.toggle("show");
        }
    }

    const openModal = () => {
        const modal_activo = document.getElementById("modalCreate")//Buscar modal para abrir
        modal_activo.style.display = "block";
        modal_activo.classList.toggle("show");
    }

    return (
        <>
            {/* 
                <button className='btn btn-info text-right col-3 offset-md-9'
                    data-toggle="modal"
                    data-target="#modalCreate"
                    onClick={() => { openModal() }}
                >
                    Crear
                </button>
            */}
            <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form className="form" onSubmit={enviarDatos}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Crear Plan</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                        <p className='text-left'>Nombre Plan:</p>
                                            <input type="text"
                                                id="nombre"
                                                name="nombre"
                                                className='form-control mb-3'
                                                placeholder="Nombre"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                        <p className='text-left'>Valor:</p>
                                            <input type="text"
                                                id="valor"
                                                name="valor"
                                                className='form-control mb-3'
                                                placeholder="Valor"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <p className='text-left'>Días:</p>
                                            <input type="text"
                                                id="dias"
                                                name="dias"
                                                className='form-control mb-3'
                                                placeholder="Días"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <p className='text-left'>Valor cuenta adicional:</p>
                                            <input type="text"
                                                id="valor_cuenta_adicional"
                                                name="valor_cuenta_adicional"
                                                className='form-control mb-3'
                                                placeholder="Valor"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mb-1">
                                    <p className='text-left'>Tiempo de plan:</p>
                                    <p className='text-left px-2'>Días:</p>
                                        <input type="radio"
                                            name="tiempo"
                                            value='dias'
                                            onChange={handleInputChange}
                                        />
                                    <p className='text-left px-2'>Meses:</p>
                                        <input type="radio"
                                            name="tiempo"
                                            value='meses'
                                            onChange={handleInputChange}
                                        />
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <input type="number"
                                            id="cantidad_tiempo"
                                            name="cantidad_tiempo"
                                            className='form-control mb-3'
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <p className='text-left'>Descripción:</p>
                                        <input type="textarea"
                                            id="descripcion"
                                            name="descripcion"
                                            className='form-control mb-3'
                                            placeholder="Descripción"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="submit"
                                    value="Crear"
                                    className='btn btn-info'
                                />
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateModal