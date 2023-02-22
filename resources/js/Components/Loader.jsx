import React from 'react'

import './Loader.css'
const Loader = () => {
    return (
        < div className="cargando_tables" >
            <div className="col">
                <img src="https://col.licitaciones.info/img/loading.gif" className="img-col" />
                <p>Cargando</p>
            </div>
        </div >
    )
}

export default Loader