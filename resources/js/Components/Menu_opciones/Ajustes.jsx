import "../../../css/estilos-menu-opciones.css";

export default function Ajustes({
    type = "button",
    className = "",
    processing,
    children,
    onClick,
}) {
    return (
        <div className="contenedor-menu-opciones">
            <button
                type={type}
                onClick={onClick}
                className={
                    `tamano-boton items-center px-4 py-2 rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
                        processing && "opacity-25"
                    } ` + className
                }
                disabled={processing}
            >
                {children}
                <span className="icons material-symbols-outlined iconos-tamano">
                    settings
                </span>
            </button>
            <p align="center">Ajustes</p>
        </div>
    );
}
