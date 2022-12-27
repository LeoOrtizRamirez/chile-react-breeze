import React from 'react'
import { useForm } from "@inertiajs/inertia-react";

//const UpdateModal = ({ planData, openUpdateModal }) => {
const UpdateModal = props => {

    console.log(props)

    const {handleSearch} = props


    const { data, setData, patch, processing, reset, errors } = useForm({
        id: props.planData.id,
        nombre: props.planData.nombre,
        valor: props.planData.valor,
        dias: props.planData.dias,
        tiempo: props.planData.tiempo,
        periodo: props.planData.periodo,
        valor_cuenta_adicional: props.planData.valor_cuenta_adicional,
        descripcion: props.planData.descripcion,
        estado: props.planData.estado,
    })

    const handleInputChange = (event) => {
        setData({
            ...data,//Hace una pseudo copia de data
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (e) => {
        e.preventDefault()
        patch(route('planes.update', data.id), { onSuccess: () => props.openUpdateModal == false })
        handleSearch()
    }
    return (
        <>
        {props.openUpdateModal &&(
            <div className="modal fade show" id={"updateModal" + data.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form className="form" onSubmit={enviarDatos}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Editar Plan</h5>
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
                                                value={data.nombre}
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
                                                value={data.valor}
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
                                                value={data.dias}
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
                                                value={data.valor_cuenta_adicional}
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
                                        name="periodo"
                                        value='dias'
                                        onChange={handleInputChange}
                                        checked={data.periodo === "dias"}
                                    />
                                    <p className='text-left px-2'>Meses:</p>
                                    <input type="radio"
                                        name="periodo"
                                        value='meses'
                                        onChange={handleInputChange}
                                        checked={data.periodo === 'meses'}
                                    />
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <input type="number"
                                            id="cantidad_tiempo"
                                            name="cantidad_tiempo"
                                            value={data.cantidad_tiempo}
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
                                            value={data.descripcion}
                                            className='form-control mb-3'
                                            placeholder="Descripción"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="submit"
                                    value="Actualizar"
                                    className='btn btn-info'
                                />
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleSearch}>Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default UpdateModal