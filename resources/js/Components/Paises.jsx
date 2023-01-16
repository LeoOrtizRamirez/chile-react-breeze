import React, { useState } from "react";

import JsonPaises from "../../../public/data/paises.json";

import './Paises.css'

export const Paises = (props) => {


    const [Countries, setCountries] = useState(JsonPaises);
    //Se crea una copia de todos los paises
    const [fakeCountries, setfakeCountries] = useState(Countries);

    const countryFilter = () => {
        setCountries(fakeCountries)
        const input_filter = document.getElementById('searchIndicador').value
        const pattern = new RegExp(input_filter, 'i');
        const filteredCountries = fakeCountries.filter(function (el) {
            if (pattern.test(el.title)) {
                return el
            }
        });
        setCountries(filteredCountries)
    }

    const changeCountry = (country) => {
        props.addCountry(country)
        console.log(country.selected = true)
        const oldSelected = Countries.filter(function (el) {
            if (el.selected) {
                el.selected = false
                return el
            }
        });
        country.selected = true
    }

    return (
        <>
            <div className=" scrollable">
                <div className="modal-filter">
                    <div className="modal-filter__search">
                        <div className="form-group">
                            <div className="input-container"><span className="icon-alert input-icono-lupa"></span>
                                <input type="text"
                                    name="searchIndicador" id="searchIndicador" placeholder="Digita el nombre o código del país"
                                    autofocus="autofocus" className="form-group__input" onKeyUp={countryFilter} /><span
                                        className="icon-down input-icono-buscar">
                                </span>
                            </div>
                        </div>
                    </div>


                    {Countries[0] != undefined ?
                        <div className="modal-filter__list scrollable-custom">
                            {Countries.map((Country, index) => (
                                <div>
                                    <div className={`${Country.selected ? "result-selected" : "result"} result--pinned dashed dashed`} onClick={() => changeCountry(Country)}>
                                        <img src={Country.image} alt=""
                                            className="result__bandera-icono-listado" />
                                        <span className="result__nombre">{Country.title}</span>
                                        <span className="result__ext">{Country.indicative}</span>
                                        {Country.fixed &&
                                            <img src="/public/images/banderas/listado_nombres/fijado.svg" alt="Fijado"
                                                className="pinned-icon" />
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    :
                        <div className="modal-filter__no-results">
                            <p className="main-title">Sin resultados.</p>
                            <div className="subtitle-content d-flex align-items-center">
                                <span className="icon-Bombillo"></span>
                                <p className="subtitle"> No se obtuvieron resultados en su búsqueda, intente de nuevo, por favor. </p>
                            </div>
                            <img src="/public/images/sin-resultados-busqueda.webp" alt="Sin resultados" />
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

