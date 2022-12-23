import "../../../css/estilos-contenedor-filtros.css";

export default function FiltroRapido({}) {
    return (
        <div className="seccion-filtros">
            <div className="filtros">
                <input
                    // @input="onInput"
                    className="buscador_general"
                    id="busquedaInput"
                    type="text"
                    placeholder="Búsqueda rápida"
                    v-model="searchText"
                />
                <span className="material-symbols-outlined posicion-color">
                    search
                </span>
            </div>
        </div>
    );
}
