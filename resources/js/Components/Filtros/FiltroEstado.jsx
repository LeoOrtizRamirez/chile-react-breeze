import "../../../css/estilos-contenedor-filtros.css";

export default function FiltroEstado({}) {
    return (
        <div className="input-filtro-estado">
            <span className="span-visualizar">Visualizar</span>
            <select className="input-visualizar">
                <option value="">todos</option>
                <option value="">Vistos Recientemente</option>
                <option value="">No Leidos</option>
            </select>
        </div>
    );
}
