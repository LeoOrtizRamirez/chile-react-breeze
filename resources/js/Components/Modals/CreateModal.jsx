import axios from 'axios';
import React, { Component } from 'react';

class CreateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nombre: null,
            valor: null,
            dias: null,
            tiempo: null,
            descripcion: null,
            estado: null,
        }
    }

    inputNombre = (event) => {
        this.setState({
            nombre: event.target.value,
        });
    }

    inputValor = (event) => {
        this.setState({
            valor: event.target.value,
        });
    }

    inputDias = (event) => {
        this.setState({
            dias: event.target.value,
        });
    }

    inputTiempo = (event) => {
        this.setState({
            tiempo: event.target.value,
        });
    }

    inputDescripcion = (event) => {
        this.setState({
            descripcion: event.target.value,
        });
    }

    inputEstado = (event) => {
        this.setState({
            estado: event.target.value,
        });
    }

    // Storing Employee Data.

    storeEmployeeData = () => {
        axios.post('/planes', {
            dias: this.state.dias,
            tiempo: this.state.tiempo,
            descripcion: this.state.descripcion,
            estado: this.state.estado,
            nombre: this.state.nombre,
            valor: this.state.valor,
        }).then(() => {
            location.reload()
        })
    }

    openModal = () => {
        const modal_activo = document.getElementById("modalCreate")//Buscar modal para abrir
        modal_activo.style.display = "block";
        modal_activo.classList.toggle("show");
    }


    render() {
        return (
            <>
                <div className='row text-right mb-3 pb-3'>
                    <button className='btn btn-info text-right col-3 offset-md-9'
                        data-toggle="modal"
                        data-target="#modalCreate"
                        onClick={() => { this.openModal() }}
                    >
                        Crear
                    </button>
                </div>
                <div className="modal fade" id="modalCreate"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Crear Plan</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                <form className='form'>
                                    <div className="form-group">
                                        <input type="text"
                                            id="nombre"
                                            className='form-control mb-3'
                                            placeholder="Nombre"
                                            onChange={this.inputNombre}
                                        />
                                    </div>  

                                    <div className="form-group">
                                        <input type="text"
                                            id="valor"
                                            className='form-control mb-3'
                                            placeholder="Valor"
                                            onChange={this.inputValor}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input type="text"
                                            id="dias"
                                            className='form-control mb-3'
                                            placeholder="Días"
                                            onChange={this.inputDias}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input type="text"
                                            id="tiempo"
                                            className='form-control mb-3'
                                            placeholder="Tiempo"
                                            onChange={this.inputTiempo}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input type="text"
                                            id="descripcion"
                                            className='form-control mb-3'
                                            placeholder="Descripcion"
                                            onChange={this.inputDescripcion}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input type="text"
                                            id="estado"
                                            className='form-control mb-3'
                                            placeholder="Estado"
                                            onChange={this.inputEstado}
                                        />
                                    </div>  
                                </form> 
                        </div>
                            <div className="modal-footer">
                            <input type="button"
                                    value="Save"
                                    className='btn btn-info'
                                onClick={this.storeEmployeeData}
                                        />

                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </>
        )
    }
}

export default CreateModal;