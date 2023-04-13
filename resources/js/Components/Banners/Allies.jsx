import React from "react";
import "@/Components/Banners/allies.css";

export const Allies = (props) => {
    return (
        <div className="img-allies" id="allies">
            <img src={props.rutaImagen} />
        </div>
    );
};
export default Allies;
