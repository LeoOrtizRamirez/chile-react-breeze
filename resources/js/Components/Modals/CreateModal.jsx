import React, { useState } from 'react'
import { useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";

import './Modal.css'

const CreateModal = props => {

    console.log(props.openCreateModal)

    console.log(props)
    const { handleSearch } = props

    const { data, setData, post, processing, reset, errors } = useForm({
        nombre: null,
        valor: null,
        dias: null,
        tiempo: null,
        descripcion: null,
        periodo: null,
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
        post(route("planes.store"), { onSuccess: () => /*reset()*/ handleSearch() });

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
            {props.openCreateModal && (
            <>
                <div class="fade modal-backdrop show"></div>
                <div className="modal fade show" id="modalCreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form className="form" onSubmit={enviarDatos}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Crear Plan</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onClick={handleSearch}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <p className='text-left'>Nombre Plan:</p>
                                                <input type="text"
                                                    id="nombre"
                                                    name="nombre"
                                                    className='form-control'
                                                    placeholder="Nombre"
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <p className='text-left'>Valor:</p>
                                                <input type="number"
                                                    id="valor"
                                                    name="valor"
                                                    className='form-control'
                                                    placeholder="Valor"
                                                    onChange={handleInputChange}
                                                />
                                                <InputError
                                                    message={errors.valor}
                                                    className="text-left mb-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <p className='text-left'>Días:</p>
                                                <input type="number"
                                                    id="dias"
                                                    name="dias"
                                                    className='form-control'
                                                    placeholder="Días"
                                                    onChange={handleInputChange}
                                                />
                                                <InputError
                                                    message={errors.dias}
                                                    className="text-left mb-2"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <p className='text-left'>Valor cuenta adicional:</p>
                                                <input type="number"
                                                    id="valor_cuenta_adicional"
                                                    name="valor_cuenta_adicional"
                                                    className='form-control'
                                                    placeholder="Valor"
                                                    onChange={handleInputChange}
                                                />
                                                <InputError
                                                    message={errors.valor_cuenta_adicional}
                                                    className="text-left mb-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <p className='text-left'>Tiempo de plan:</p>
                                        <p className='text-left px-2'>Días:</p>
                                        <input type="radio"
                                            name="periodo"
                                            value='dias'
                                            onChange={handleInputChange}
                                        />
                                        <p className='text-left px-2'>Meses:</p>
                                        <input type="radio"
                                            name="periodo"
                                            value='meses'
                                            onChange={handleInputChange}
                                        />
                                        <InputError
                                            message={errors.periodo}
                                            className="text-left mb-2"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <input type="number"
                                                id="tiempo"
                                                name="tiempo"
                                                className='form-control'
                                                onChange={handleInputChange}
                                            />
                                            <InputError
                                                message={errors.tiempo}
                                                className="text-left mb-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <p className='text-left'>Descripción:</p>
                                            <input type="textarea"
                                                id="descripcion"
                                                name="descripcion"
                                                className='form-control'
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
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleSearch}>Cerrar</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </>
            )}
        </>
    )
}

export default CreateModal