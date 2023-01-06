import React from 'react'

const Paises = () => {
    return (
        <>
            <div className="modal-body2 scrollable">
                <div className="modal-filter">
                    <div className="modal-filter__search">
                        <div className="form-group">
                            <div className="input-container"><span className="icon-alert input-icono-lupa"></span>
                                <input type="text"
                                    name="searchIndicador" id="searchIndicador" placeholder="Digita el nombre o código del país"
                                    autofocus="autofocus" className="form-group__input" /><span
                                        className="icon-down input-icono-buscar">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="modal-filter__list scrollable">
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/COL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Colombia</span><span
                                        className="result__ext">+57</span>
                                <img src="/images/banderas/listado_nombres/fijado.svg" alt="Fijado"
                                    className="pinned-icon" /></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ECU.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Ecuador</span><span
                                        className="result__ext">+593</span>
                                <img src="/images/banderas/listado_nombres/fijado.svg" alt="Fijado"
                                    className="pinned-icon" /></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed">
                                <img src="/images/banderas/listado_nombres/PAN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Panamá</span><span
                                        className="result__ext">+507</span>
                                <img src="/images/banderas/listado_nombres/fijado.svg" alt="Fijado"
                                    className="pinned-icon" /></div>
                            <hr />
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/AFG.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Afganistán</span><span
                                        className="result__ext">+93</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ALB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Albania</span><span
                                        className="result__ext">+355</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/DEU.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Alemania</span><span
                                        className="result__ext">+49</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/DZA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Algeria</span><span
                                        className="result__ext">+213</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/AND.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Andorra</span><span
                                        className="result__ext">+376</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/AGO.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Angola</span><span
                                        className="result__ext">+244</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/AIA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Anguila</span><span
                                        className="result__ext">+1264</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ATA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Antártida</span><span
                                        className="result__ext">+672</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ATG.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Antigua y Barbuda</span><span
                                        className="result__ext">+1268</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SAU.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Arabia Saudita</span><span
                                        className="result__ext">+966</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ARG.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Argentina</span><span
                                        className="result__ext">+54</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ARM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Armenia</span><span
                                        className="result__ext">+374</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ABW.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Aruba</span><span
                                        className="result__ext">+297</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/AUS.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Australia</span><span
                                        className="result__ext">+61</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/AUT.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Austria</span><span
                                        className="result__ext">+43</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/AZE.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Azerbaiyán</span><span
                                        className="result__ext">+994</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BHS.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Bahamas</span><span
                                        className="result__ext">+1242</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BHR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Bahrein</span><span
                                        className="result__ext">+973</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BGD.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Bangladesh</span><span
                                        className="result__ext">+880</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BRB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Barbados</span><span
                                        className="result__ext">+1246</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BEL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Bélgica</span><span
                                        className="result__ext">+32</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BLZ.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Belice</span><span
                                        className="result__ext">+501</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BEN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Benín</span><span
                                        className="result__ext">+229</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BTN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Bhután</span><span
                                        className="result__ext">+975</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BLR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Bielorrusia</span><span
                                        className="result__ext">+375</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MMR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Birmania</span><span
                                        className="result__ext">+95</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BOL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Bolivia</span><span
                                        className="result__ext">+591</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BIH.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Bosnia y
                                        Herzegovina</span><span className="result__ext">+387</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BWA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Botsuana</span><span
                                        className="result__ext">+267</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BRA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Brasil</span><span
                                        className="result__ext">+55</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BRN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Brunéi</span><span
                                        className="result__ext">+673</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BGR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Bulgaria</span><span
                                        className="result__ext">+359</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BFA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Burkina Faso</span><span
                                        className="result__ext">+226</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BDI.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Burundi</span><span
                                        className="result__ext">+257</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CPV.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Cabo Verde</span><span
                                        className="result__ext">+238</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/KHM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Camboya</span><span
                                        className="result__ext">+855</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CMR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Camerún</span><span
                                        className="result__ext">+237</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CAN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Canadá</span><span
                                        className="result__ext">+1</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TCD.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Chad</span><span
                                        className="result__ext">+235</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CHL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Chile</span><span
                                        className="result__ext">+56</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CHN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">China</span><span
                                        className="result__ext">+86</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CYP.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Chipre</span><span
                                        className="result__ext">+357</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/VAT.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Ciudad del
                                        Vaticano</span><span className="result__ext">+39</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/COM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Comoras</span><span
                                        className="result__ext">+269</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/PRK.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Corea del Norte</span><span
                                        className="result__ext">+850</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/KOR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Corea del Sur</span><span
                                        className="result__ext">+82</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CIV.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Costa de Marfil</span><span
                                        className="result__ext">+225</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CRI.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Costa Rica</span><span
                                        className="result__ext">+506</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/HRV.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Croacia</span><span
                                        className="result__ext">+385</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CUB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Cuba</span><span
                                        className="result__ext">+53</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CUW.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Curazao</span><span
                                        className="result__ext">+5999</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/DNK.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Dinamarca</span><span
                                        className="result__ext">+45</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/DMA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Dominica</span><span
                                        className="result__ext">+1767</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/EGY.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Egipto</span><span
                                        className="result__ext">+20</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SLV.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">El Salvador</span><span
                                        className="result__ext">+503</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ARE.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Emiratos Árabes
                                        Unidos</span><span className="result__ext">+971</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ERI.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Eritrea</span><span
                                        className="result__ext">+291</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SVK.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Eslovaquia</span><span
                                        className="result__ext">+421</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SVN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Eslovenia</span><span
                                        className="result__ext">+386</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ESP.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">España</span><span
                                        className="result__ext">+34</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/USA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Estados Unidos de
                                        América</span><span className="result__ext">+1</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/EST.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Estonia</span><span
                                        className="result__ext">+372</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ETH.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Etiopía</span><span
                                        className="result__ext">+251</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/PHL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Filipinas</span><span
                                        className="result__ext">+63</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/FIN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Finlandia</span><span
                                        className="result__ext">+358</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/FJI.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Fiyi</span><span
                                        className="result__ext">+679</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/FRA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Francia</span><span
                                        className="result__ext">+33</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GAB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Gabón</span><span
                                        className="result__ext">+241</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GMB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Gambia</span><span
                                        className="result__ext">+220</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GEO.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Georgia</span><span
                                        className="result__ext">+995</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GHA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Ghana</span><span
                                        className="result__ext">+233</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GIB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Gibraltar</span><span
                                        className="result__ext">+350</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GRD.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Granada</span><span
                                        className="result__ext">+1473</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GRC.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Grecia</span><span
                                        className="result__ext">+30</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GRL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Groenlandia</span><span
                                        className="result__ext">+299</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GUM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Guam</span><span
                                        className="result__ext">+1671</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GTM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Guatemala</span><span
                                        className="result__ext">+502</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GIN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Guinea</span><span
                                        className="result__ext">+224</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GNB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Guinea-Bissau</span><span
                                        className="result__ext">+245</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GNQ.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Guinea Ecuatorial</span><span
                                        className="result__ext">+240</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GUY.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Guyana</span><span
                                        className="result__ext">+592</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/HTI.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Haití</span><span
                                        className="result__ext">+509</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/HND.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Honduras</span><span
                                        className="result__ext">+504</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/HKG.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Hong kong</span><span
                                        className="result__ext">+852</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/HUN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Hungría</span><span
                                        className="result__ext">+36</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/IND.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">India</span><span
                                        className="result__ext">+91</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/IDN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Indonesia</span><span
                                        className="result__ext">+62</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/IRQ.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Irak</span><span
                                        className="result__ext">+964</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/IRN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Irán</span><span
                                        className="result__ext">+98</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/IRL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Irlanda</span><span
                                        className="result__ext">+353</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/IMN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Isla de Man</span><span
                                        className="result__ext">+44</span>
                            </div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CXR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Isla de Navidad</span><span
                                        className="result__ext">+61</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ISL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islandia</span><span
                                        className="result__ext">+354</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BMU.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Bermudas</span><span
                                        className="result__ext">+1441</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CYM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Caimán</span><span
                                        className="result__ext">+1345</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CCK.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Cocos
                                        (Keeling)</span><span className="result__ext">+61</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/COK.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Cook</span><span
                                        className="result__ext">+682</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/FRO.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Feroe</span><span
                                        className="result__ext">+298</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MDV.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Maldivas</span><span
                                        className="result__ext">+960</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/FLK.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Malvinas</span><span
                                        className="result__ext">+500</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MNP.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Marianas del
                                        Norte</span><span className="result__ext">+1670</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MHL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Marshall</span><span
                                        className="result__ext">+692</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/PCN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Pitcairn</span><span
                                        className="result__ext">+870</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SLB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Salomón</span><span
                                        className="result__ext">+677</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TCA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Turcas y
                                        Caicos</span><span className="result__ext">+1649</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/VGB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Vírgenes
                                        Británicas</span><span className="result__ext">+1284</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/VIR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Islas Vírgenes de los Estados
                                        Unidos</span><span className="result__ext">+1340</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ISR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Israel</span><span
                                        className="result__ext">+972</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ITA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Italia</span><span
                                        className="result__ext">+39</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/JAM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Jamaica</span><span
                                        className="result__ext">+1876</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/JPN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Japón</span><span
                                        className="result__ext">+81</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/JOR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Jordania</span><span
                                        className="result__ext">+962</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/KAZ.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Kazajistán</span><span
                                        className="result__ext">+7</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/KEN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Kenia</span><span
                                        className="result__ext">+254</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/KGZ.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Kirguistán</span><span
                                        className="result__ext">+996</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/KIR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Kiribati</span><span
                                        className="result__ext">+686</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/KWT.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Kuwait</span><span
                                        className="result__ext">+965</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/LAO.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Laos</span><span
                                        className="result__ext">+856</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/LSO.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Lesoto</span><span
                                        className="result__ext">+266</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/LVA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Letonia</span><span
                                        className="result__ext">+371</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/LBN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Líbano</span><span
                                        className="result__ext">+961</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/LBR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Liberia</span><span
                                        className="result__ext">+231</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/LBY.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Libia</span><span
                                        className="result__ext">+218</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/LIE.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Liechtenstein</span><span
                                        className="result__ext">+423</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/LTU.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Lituania</span><span
                                        className="result__ext">+370</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/LUX.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Luxemburgo</span><span
                                        className="result__ext">+352</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MAC.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Macao</span><span
                                        className="result__ext">+853</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MKD.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Macedônia</span><span
                                        className="result__ext">+389</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MDG.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Madagascar</span><span
                                        className="result__ext">+261</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MYS.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Malasia</span><span
                                        className="result__ext">+60</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MWI.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Malawi</span><span
                                        className="result__ext">+265</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MLI.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Mali</span><span
                                        className="result__ext">+223</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MLT.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Malta</span><span
                                        className="result__ext">+356</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MAR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Marruecos</span><span
                                        className="result__ext">+212</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MUS.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Mauricio</span><span
                                        className="result__ext">+230</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MRT.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Mauritania</span><span
                                        className="result__ext">+222</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MYT.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Mayotte</span><span
                                        className="result__ext">+262</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MEX.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">México</span><span
                                        className="result__ext">+52</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/FSM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Micronesia</span><span
                                        className="result__ext">+691</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MDA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Moldavia</span><span
                                        className="result__ext">+373</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MCO.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Mónaco</span><span
                                        className="result__ext">+377</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MNG.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Mongolia</span><span
                                        className="result__ext">+976</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MNE.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Montenegro</span><span
                                        className="result__ext">+382</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MSR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Montserrat</span><span
                                        className="result__ext">+1664</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MOZ.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Mozambique</span><span
                                        className="result__ext">+258</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/NAM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Namibia</span><span
                                        className="result__ext">+264</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/NRU.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Nauru</span><span
                                        className="result__ext">+674</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/NPL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Nepal</span><span
                                        className="result__ext">+977</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/NIC.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Nicaragua</span><span
                                        className="result__ext">+505</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/NER.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Niger</span><span
                                        className="result__ext">+227</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/NGA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Nigeria</span><span
                                        className="result__ext">+234</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/NIU.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Niue</span><span
                                        className="result__ext">+683</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/NOR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Noruega</span><span
                                        className="result__ext">+47</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/NCL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Nueva Caledonia</span><span
                                        className="result__ext">+687</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/NZL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Nueva Zelanda</span><span
                                        className="result__ext">+64</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/OMN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Omán</span><span
                                        className="result__ext">+968</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/NLD.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Países Bajos</span><span
                                        className="result__ext">+31</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/PAK.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Pakistán</span><span
                                        className="result__ext">+92</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/PLW.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Palau</span><span
                                        className="result__ext">+680</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/PNG.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Papúa Nueva
                                        Guinea</span><span className="result__ext">+675</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/PRY.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Paraguay</span><span
                                        className="result__ext">+595</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/PER.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Perú</span><span
                                        className="result__ext">+51</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/PYF.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Polinesia
                                        Francesa</span><span className="result__ext">+689</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/POL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Polonia</span><span
                                        className="result__ext">+48</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/PRT.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Portugal</span><span
                                        className="result__ext">+351</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/PRI.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Puerto Rico</span><span
                                        className="result__ext">+1</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/QAT.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Qatar</span><span
                                        className="result__ext">+974</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/GBR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Reino Unido</span><span
                                        className="result__ext">+44</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CAF.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">República
                                        Centroafricana</span><span className="result__ext">+236</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CZE.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">República Checa</span><span
                                        className="result__ext">+420</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/COG.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">República del
                                        Congo</span><span className="result__ext">+242</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/COD.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">República Democrática del
                                        Congo</span><span className="result__ext">+243</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SSD.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">República de Sudán del
                                        Sur</span><span className="result__ext">+211</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/DOM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">República
                                        Dominicana</span><span className="result__ext">+1809</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/RWA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Ruanda</span><span
                                        className="result__ext">+250</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ROU.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Rumanía</span><span
                                        className="result__ext">+40</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/RUS.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Rusia</span><span
                                        className="result__ext">+7</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/WSM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Samoa</span><span
                                        className="result__ext">+685</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ASM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Samoa Americana</span><span
                                        className="result__ext">+1684</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/BLM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">San Bartolomé</span><span
                                        className="result__ext">+590</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/KNA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">San Cristóbal y
                                        Nieves</span><span className="result__ext">+1869</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SMR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">San Marino</span><span
                                        className="result__ext">+378</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/MAF.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">San Martín
                                        (Francia)</span><span className="result__ext">+1599</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SPM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">San Pedro y
                                        Miquelón</span><span className="result__ext">+508</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SHN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Santa Elena</span><span
                                        className="result__ext">+290</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/LCA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Santa Lucía</span><span
                                        className="result__ext">+1758</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/STP.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Santo Tomé y
                                        Príncipe</span><span className="result__ext">+239</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/VCT.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">San Vicente y las
                                        Granadinas</span><span className="result__ext">+1784</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SEN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Senegal</span><span
                                        className="result__ext">+221</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SRB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Serbia</span><span
                                        className="result__ext">+381</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SYC.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Seychelles</span><span
                                        className="result__ext">+248</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SLE.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Sierra Leona</span><span
                                        className="result__ext">+232</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SGP.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Singapur</span><span
                                        className="result__ext">+65</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SYR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Siria</span><span
                                        className="result__ext">+963</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SOM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Somalia</span><span
                                        className="result__ext">+252</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/LKA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Sri lanka</span><span
                                        className="result__ext">+94</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ZAF.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Sudáfrica</span><span
                                        className="result__ext">+27</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SDN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Sudán</span><span
                                        className="result__ext">+249</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SWE.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Suecia</span><span
                                        className="result__ext">+46</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/CHE.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Suiza</span><span
                                        className="result__ext">+41</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SUR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Surinám</span><span
                                        className="result__ext">+597</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/SWZ.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Swazilandia</span><span
                                        className="result__ext">+268</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/THA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Tailandia</span><span
                                        className="result__ext">+66</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TWN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Taiwán</span><span
                                        className="result__ext">+886</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TZA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Tanzania</span><span
                                        className="result__ext">+255</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TJK.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Tayikistán</span><span
                                        className="result__ext">+992</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TLS.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Timor Oriental</span><span
                                        className="result__ext">+670</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TGO.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Togo</span><span
                                        className="result__ext">+228</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TKL.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Tokelau</span><span
                                        className="result__ext">+690</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TON.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Tonga</span><span
                                        className="result__ext">+676</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TTO.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Trinidad y Tobago</span><span
                                        className="result__ext">+1868</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TUN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Tunez</span><span
                                        className="result__ext">+216</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TKM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Turkmenistán</span><span
                                        className="result__ext">+993</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TUR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Turquía</span><span
                                        className="result__ext">+90</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/TUV.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Tuvalu</span><span
                                        className="result__ext">+688</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/UKR.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Ucrania</span><span
                                        className="result__ext">+380</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/UGA.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Uganda</span><span
                                        className="result__ext">+256</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/URY.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Uruguay</span><span
                                        className="result__ext">+598</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/UZB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Uzbekistán</span><span
                                        className="result__ext">+998</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/VUT.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Vanuatu</span><span
                                        className="result__ext">+678</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/VEN.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Venezuela</span><span
                                        className="result__ext">+58</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/VNM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Vietnam</span><span
                                        className="result__ext">+84</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/WLF.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Wallis y Futuna</span><span
                                        className="result__ext">+681</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/YEM.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Yemen</span><span
                                        className="result__ext">+967</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/DJI.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Yibuti</span><span
                                        className="result__ext">+253</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed dashed">
                                <img src="/images/banderas/listado_nombres/ZMB.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Zambia</span><span
                                        className="result__ext">+260</span></div>
                        </div>
                        <div>
                            <div className="result result--pinned dashed">
                                <img src="/images/banderas/listado_nombres/ZWE.svg" alt=""
                                    className="result__bandera-icono-listado" /><span className="result__nombre">Zimbabue</span><span
                                        className="result__ext">+263</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paises