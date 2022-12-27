import React from 'react'

import { Link } from "@inertiajs/inertia-react";

//const DeleteModal = ({ props.planData }) => {
const DeleteModal = props => {
    const {handleSearch} = props

    return (
        <div className="modal fade show" id={"deleteModal" + props.planData.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: 'block'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Eliminar Plan</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"  onClick={handleSearch}></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12">
                                    <h6>¿Quieres eliminar el plan {props.planData.nombre} ?</h6>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Link
                                href={route("planes.destroy", props.planData)}
                                method="delete"
                                as="button"
                                className="btn btn-danger"
                            >
                                Eliminar
                            </Link>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={handleSearch}>Cerrar</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal