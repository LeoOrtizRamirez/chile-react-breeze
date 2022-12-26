import React from 'react'

import { Link } from "@inertiajs/inertia-react";
const DeleteModal = ({ planData }) => {

    return (
        <div className="modal fade" id={"deleteModal" + planData.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Eliminar Plan</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12">
                                    <h6>¿Quieres eliminar el plan {planData.nombre} ?</h6>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Link
                                href={route("planes.destroy", planData)}
                                method="delete"
                                as="button"
                                className="btn btn-danger"
                            >
                                Eliminar
                            </Link>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal