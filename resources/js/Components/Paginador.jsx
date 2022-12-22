import React from 'react'

const Paginador = (props) => {


  /*  const items = props.usuarios.map((item, index) => {
     return <li key={item.id}>{item.id}</li>
   }) */



  return (
    <div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6" data-v-01f1da49="">
        <div className="flex flex-1 justify-between sm:hidden">
          <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
          <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
        </div>

        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              <span className="font-medium">{props.currentPage+1}</span> - <span className="font-medium">{props.itemsPagina}</span> de <span className="font-medium">{props.totalElementos}</span> Resultados </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a onClick={ props.prevHandler }  className="relative z-10 inline-flex items-center borderborder-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex" href="#">« Anterior</a>
              <a  className="bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" href="#">{props.currentPage+1}</a>

              <a  className="bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex noactivo" href="">2</a>

              <a  className="bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex noactivo" href="">3</a>

              <a onClick={ props.nextHandler } className="bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex noactivo" href="#">Siguiente »</a>
            </nav>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Paginador