import "../../../css/estilos-contenedor-filtros.css";

export default function FiltroAvanzado({}) {
    return (
        <div className="">
            <button className="buscador_avanzado mb-3">
                <span className="material-symbols-outlined margen-color">
                    {" "}
                    list{" "}
                </span>
                <span className="color-texto">Búsqueda avanzada</span>
            </button>
        </div>
    );
}
