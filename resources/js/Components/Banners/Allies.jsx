import React from "react";
import "@/Components/Banners/Allies.css";

export const Allies = (props) => {
    return (
        <div className="img-allies">
            <img src={props.rutaImagen} />
        </div>
    );
};
export default Allies;
