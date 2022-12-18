import "../../../css/estilos-menu-opciones.css";

export default function MenuAdmin({
    type = "button",
    className = "",
    processing,
    children,
    onClick,
}) {
    return (
        <div className="contenedor-menu-opciones">
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <button
                type={type}
                onClick={onClick}
                className={
                    `tamano-boton items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
                        processing && "opacity-25"
                    } ` + className
                }
                disabled={processing}
            >
                {children}
                <span className="material-symbols-outlined iconos-tamano">
                    admin_panel_settings
                </span>
            </button>
            <p align="center">Menu Admin</p>
        </div>
    );
}
