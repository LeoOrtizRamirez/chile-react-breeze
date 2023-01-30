import React from 'react'

const Enviar = (props) => {

    return (
        <a href={props.url}
            target="_blank">
            <button
                style={{ backgroundColor: "#57C700" }}
                className={
                    `boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 `}


            >
                <i className="bi bi-upload text-gray-500 iconos-tamano-margen"></i>
            </button>
        </a>






    )
}

export default Enviar