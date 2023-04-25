import React from 'react'

import './Loader.css'
const Loader = ({ loading=false }) => {
    return (
        <>
            {loading &&
                <div className="loader-component">
                    <div class="cargando_tables visible_loading">
                        <div class="col">
                            <img src="https://col.licitaciones.info/img/loading.gif" class="img-col" />
                            <p>Cargando</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Loader