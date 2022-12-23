import React from 'react'
import { useForm } from "@inertiajs/inertia-react";

const UpdateModal = ({ planData }) => {

    console.log(planData.id)
    const { data, setData, patch, processing, reset, errors } = useForm({
        id: planData.id,
        nombre: planData.nombre,
        valor: planData.valor,
        dias: planData.dias,
        tiempo: planData.tiempo,
        descripcion: planData.descripcion,
        estado: planData.estado,
    })

    const handleInputChange = (event) => {
        setData({
            ...data,//Hace una pseudo copia de data
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (e) => {
        console.log(data)
        e.preventDefault()
        patch(route('planes.update', data.id), { onSuccess: () => setEditing(false) })
        //Cerrar modal
        const modal = document.querySelector(".modal.fade.show")//Buscar modal abierto
        if (modal) {
            modal.style.display = "none";
            modal.classList.toggle("show");
        }
    }
    return (
        <div className="modal fade" id={"updateModal" + data.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form className="form" onSubmit={enviarDatos}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Actualizar plan</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="form-group">
                                <input type="text"
                                    id="nombre"
                                    name="nombre"
                                    className='form-control mb-3'
                                    placeholder="Nombre"
                                    value={data.nombre}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text"
                                    id="valor"
                                    name="valor"
                                    className='form-control mb-3'
                                    placeholder="Valor"
                                    value={data.valor}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text"
                                    id="dias"
                                    name="dias"
                                    className='form-control mb-3'
                                    placeholder="Días"
                                    value={data.dias}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text"
                                    id="tiempo"
                                    name="tiempo"
                                    className='form-control mb-3'
                                    placeholder="Tiempo"
                                    value={data.tiempo}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text"
                                    id="descripcion"
                                    name="descripcion"
                                    className='form-control mb-3'
                                    placeholder="Descripcion"
                                    value={data.descripcion}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text"
                                    id="estado"
                                    name="estado"
                                    className='form-control mb-3'
                                    placeholder="Estado"
                                    value={data.estado}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="submit"
                                className="btn btn-info"
                                value="Actualizar"
                            />
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal