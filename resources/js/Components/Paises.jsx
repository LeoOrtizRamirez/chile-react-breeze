import React, { useState } from "react";

export default function Paises() {
    const [filter, setFilter] = useState('all');
    const [Countries, setCountries] = useState([
        { image: "/public/images/banderas/listado_nombres/COL.svg", "title": "Colombia", "indicative": "+57", "fixed": true },
        { image: "/public/images/banderas/listado_nombres/ECU.svg", "title": "Ecuador", "indicative": "+593", "fixed": true },
        { image: "/public/images/banderas/listado_nombres/PAN.svg", "title": "Panamá", "indicative": "+507", "fixed": true },
        { image: "/public/images/banderas/listado_nombres/CHL.svg", "title": "Chile", "indicative": "+56", "fixed": true },
        { image: "/public/images/banderas/listado_nombres/AFG.svg", "title": "Afganistán", "indicative": "+93", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ALB.svg", "title": "Albania", "indicative": "+355", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/DEU.svg", "title": "Alemania", "indicative": "+49", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/DZA.svg", "title": "Algeria", "indicative": "+213", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/AND.svg", "title": "Andorra", "indicative": "+376", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/AGO.svg", "title": "Angola", "indicative": "+244", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/AIA.svg", "title": "Anguila", "indicative": "+1264", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ATA.svg", "title": "Antártida", "indicative": "+672", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ATG.svg", "title": "Antigua y Barbuda", "indicative": "+1268", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SAU.svg", "title": "Arabia Saudita", "indicative": "+966", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ARG.svg", "title": "Argentina", "indicative": "+54", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ARM.svg", "title": "Armenia", "indicative": "+374", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ABW.svg", "title": "Aruba", "indicative": "+297", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/AUS.svg", "title": "Australia", "indicative": "+61", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/AUT.svg", "title": "Austria", "indicative": "+43", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/AZE.svg", "title": "Azerbaiyán", "indicative": "+994", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BHS.svg", "title": "Bahamas", "indicative": "+1242", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BHR.svg", "title": "Bahrein", "indicative": "+973", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BGD.svg", "title": "Bangladesh", "indicative": "+880", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BRB.svg", "title": "Barbados", "indicative": "+1246", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BEL.svg", "title": "Bélgica", "indicative": "+32", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BLZ.svg", "title": "Belice", "indicative": "+501", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BEN.svg", "title": "Benín", "indicative": "+229", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BTN.svg", "title": "Bhután", "indicative": "+975", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BLR.svg", "title": "Bielorrusia", "indicative": "+375", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MMR.svg", "title": "Birmania", "indicative": "+95", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BOL.svg", "title": "Bolivia", "indicative": "+591", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BIH.svg", "title": "Bosnia y Herzegovina", "indicative": "+387", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BWA.svg", "title": "Botsuana", "indicative": "+267", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BRA.svg", "title": "Brasil", "indicative": "+55", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BRN.svg", "title": "Brunéi", "indicative": "+673", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BGR.svg", "title": "Bulgaria", "indicative": "+359", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BFA.svg", "title": "Burkina Faso", "indicative": "+226", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BDI.svg", "title": "Burundi", "indicative": "+257", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CPV.svg", "title": "Cabo Verde", "indicative": "+238", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/KHM.svg", "title": "Camboya", "indicative": "+855", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CMR.svg", "title": "Camerún", "indicative": "+237", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CAN.svg", "title": "Canadá", "indicative": "+1", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TCD.svg", "title": "Chad", "indicative": "+235", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CHN.svg", "title": "China", "indicative": "+86", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CYP.svg", "title": "Chipre", "indicative": "+357", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/VAT.svg", "title": "Ciudad del Vaticano", "indicative": "+39", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/COM.svg", "title": "Comoras", "indicative": "+269", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/PRK.svg", "title": "Corea del Norte", "indicative": "+850", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/KOR.svg", "title": "Corea del Sur", "indicative": "+82", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CIV.svg", "title": "Costa de Marfil", "indicative": "+225", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CRI.svg", "title": "Costa Rica", "indicative": "+506", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/HRV.svg", "title": "Croacia", "indicative": "+385", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CUB.svg", "title": "Cuba", "indicative": "+53", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CUW.svg", "title": "Curazao", "indicative": "+5999", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/DNK.svg", "title": "Dinamarca", "indicative": "+45", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/DMA.svg", "title": "Dominica", "indicative": "+1767", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/EGY.svg", "title": "Egipto", "indicative": "+20", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SLV.svg", "title": "El Salvador", "indicative": "+503", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ARE.svg", "title": "Emiratos Árabes Unidos", "indicative": "+971", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ERI.svg", "title": "Eritrea", "indicative": "+291", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SVK.svg", "title": "Eslovaquia", "indicative": "+421", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SVN.svg", "title": "Eslovenia", "indicative": "+386", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ESP.svg", "title": "España", "indicative": "+34", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/USA.svg", "title": "Estados Unidos de América ", "indicative": "+1", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/EST.svg", "title": "Estonia", "indicative": "+372", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ETH.svg", "title": "Etiopía", "indicative": "+251", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/PHL.svg", "title": "Filipinas", "indicative": "+63", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/FIN.svg", "title": "Finlandia", "indicative": "+358", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/FJI.svg", "title": "Fiyi", "indicative": "+679", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/FRA.svg", "title": "Francia", "indicative": "+33", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GAB.svg", "title": "Gabón", "indicative": "+241", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GMB.svg", "title": "Gambia", "indicative": "+220", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GEO.svg", "title": "Georgia", "indicative": "+995", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GHA.svg", "title": "Ghana", "indicative": "+233", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GIB.svg", "title": "Gibraltar", "indicative": "+350", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GRD.svg", "title": "Granada", "indicative": "+1473", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GRC.svg", "title": "Grecia", "indicative": "+30", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GRL.svg", "title": "Groenlandia", "indicative": "+299", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GUM.svg", "title": "Guam", "indicative": "+1671", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GTM.svg", "title": "Guatemala", "indicative": "+502", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GIN.svg", "title": "Guinea", "indicative": "+224", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GNB.svg", "title": "Guinea-Bissau", "indicative": "+245", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GNQ.svg", "title": "Guinea Ecuatorial", "indicative": "+240", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GUY.svg", "title": "Guyana", "indicative": "+592", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/HTI.svg", "title": "Haití", "indicative": "+509", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/HND.svg", "title": "Honduras", "indicative": "+504", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/HKG.svg", "title": "Hong kong", "indicative": "+852", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/HUN.svg", "title": "Hungría", "indicative": "+36", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/IND.svg", "title": "India", "indicative": "+91", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/IDN.svg", "title": "Indonesia", "indicative": "+62", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/IRQ.svg", "title": "Irak", "indicative": "+964", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/IRN.svg", "title": "Irán", "indicative": "+98", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/IRL.svg", "title": "Irlanda", "indicative": "+353", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/IMN.svg", "title": "Isla de Man", "indicative": "+44", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CXR.svg", "title": "Isla de Navidad", "indicative": "+61", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ISL.svg", "title": "Islandia", "indicative": "+354", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BMU.svg", "title": "Islas Bermudas", "indicative": "+1441", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CYM.svg", "title": "Islas Caimán", "indicative": "+1345", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CCK.svg", "title": "Islas Cocos (Keeling) ", "indicative": "+61", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/COK.svg", "title": "Islas Cook", "indicative": "+682", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/FRO.svg", "title": "Islas Feroe", "indicative": "+298", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MDV.svg", "title": "Islas Maldivas", "indicative": "+960", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/FLK.svg", "title": "Islas Malvinas", "indicative": "+500", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MNP.svg", "title": "Islas Marianas del Norte ", "indicative": "+1670", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MHL.svg", "title": "Islas Marshall", "indicative": "+692", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/PCN.svg", "title": "Islas Pitcairn", "indicative": "+870", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SLB.svg", "title": "Islas Salomón", "indicative": "+677", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TCA.svg", "title": "Islas Turcas y Caicos ", "indicative": "+1649", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/VGB.svg", "title": "Islas Vírgenes Británicas ", "indicative": "+1284", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/VIR.svg", "title": "Islas Vírgenes de los Estados Unidos ", "indicative": "+1340", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ISR.svg", "title": "Israel", "indicative": "+972", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ITA.svg", "title": "Italia", "indicative": "+39", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/JAM.svg", "title": "Jamaica", "indicative": "+1876", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/JPN.svg", "title": "Japón", "indicative": "+81", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/JOR.svg", "title": "Jordania", "indicative": "+962", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/KAZ.svg", "title": "Kazajistán", "indicative": "+7", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/KEN.svg", "title": "Kenia", "indicative": "+254", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/KGZ.svg", "title": "Kirguistán", "indicative": "+996", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/KIR.svg", "title": "Kiribati", "indicative": "+686", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/KWT.svg", "title": "Kuwait", "indicative": "+965", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/LAO.svg", "title": "Laos", "indicative": "+856", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/LSO.svg", "title": "Lesoto", "indicative": "+266", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/LVA.svg", "title": "Letonia", "indicative": "+371", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/LBN.svg", "title": "Líbano", "indicative": "+961", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/LBR.svg", "title": "Liberia", "indicative": "+231", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/LBY.svg", "title": "Libia", "indicative": "+218", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/LIE.svg", "title": "Liechtenstein", "indicative": "+423", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/LTU.svg", "title": "Lituania", "indicative": "+370", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/LUX.svg", "title": "Luxemburgo", "indicative": "+352", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MAC.svg", "title": "Macao", "indicative": "+853", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MKD.svg", "title": "Macedônia", "indicative": "+389", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MDG.svg", "title": "Madagascar", "indicative": "+261", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MYS.svg", "title": "Malasia", "indicative": "+60", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MWI.svg", "title": "Malawi", "indicative": "+265", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MLI.svg", "title": "Mali", "indicative": "+223", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MLT.svg", "title": "Malta", "indicative": "+356", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MAR.svg", "title": "Marruecos", "indicative": "+212", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MUS.svg", "title": "Mauricio", "indicative": "+230", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MRT.svg", "title": "Mauritania", "indicative": "+222", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MYT.svg", "title": "Mayotte", "indicative": "+262", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MEX.svg", "title": "México", "indicative": "+52", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/FSM.svg", "title": "Micronesia", "indicative": "+691", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MDA.svg", "title": "Moldavia", "indicative": "+373", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MCO.svg", "title": "Mónaco", "indicative": "+377", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MNG.svg", "title": "Mongolia", "indicative": "+976", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MNE.svg", "title": "Montenegro", "indicative": "+382", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MSR.svg", "title": "Montserrat", "indicative": "+1664", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MOZ.svg", "title": "Mozambique", "indicative": "+258", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/NAM.svg", "title": "Namibia", "indicative": "+264", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/NRU.svg", "title": "Nauru", "indicative": "+674", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/NPL.svg", "title": "Nepal", "indicative": "+977", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/NIC.svg", "title": "Nicaragua", "indicative": "+505", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/NER.svg", "title": "Niger", "indicative": "+227", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/NGA.svg", "title": "Nigeria", "indicative": "+234", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/NIU.svg", "title": "Niue", "indicative": "+683", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/NOR.svg", "title": "Noruega", "indicative": "+47", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/NCL.svg", "title": "Nueva Caledonia", "indicative": "+687", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/NZL.svg", "title": "Nueva Zelanda", "indicative": "+64", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/OMN.svg", "title": "Omán", "indicative": "+968", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/NLD.svg", "title": "Países Bajos", "indicative": "+31", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/PAK.svg", "title": "Pakistán", "indicative": "+92", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/PLW.svg", "title": "Palau", "indicative": "+680", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/PNG.svg", "title": "Papúa Nueva Guinea ", "indicative": "+675", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/PRY.svg", "title": "Paraguay", "indicative": "+595", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/PER.svg", "title": "Perú", "indicative": "+51", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/PYF.svg", "title": "Polinesia Francesa ", "indicative": "+689", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/POL.svg", "title": "Polonia", "indicative": "+48", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/PRT.svg", "title": "Portugal", "indicative": "+351", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/PRI.svg", "title": "Puerto Rico", "indicative": "+1", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/QAT.svg", "title": "Qatar", "indicative": "+974", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/GBR.svg", "title": "Reino Unido", "indicative": "+44", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CAF.svg", "title": "República Centroafricana ", "indicative": "+236", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CZE.svg", "title": "República Checa", "indicative": "+420", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/COG.svg", "title": "República del Congo ", "indicative": "+242", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/COD.svg", "title": "República Democrática del Congo ", "indicative": "+243", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SSD.svg", "title": "República de Sudán del Sur ", "indicative": "+211", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/DOM.svg", "title": "República Dominicana ", "indicative": "+1809", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/RWA.svg", "title": "Ruanda", "indicative": "+250", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ROU.svg", "title": "Rumanía", "indicative": "+40", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/RUS.svg", "title": "Rusia", "indicative": "+7", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/WSM.svg", "title": "Samoa", "indicative": "+685", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ASM.svg", "title": "Samoa Americana", "indicative": "+1684", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/BLM.svg", "title": "San Bartolomé", "indicative": "+590", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/KNA.svg", "title": "San Cristóbal y Nieves ", "indicative": "+1869", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SMR.svg", "title": "San Marino", "indicative": "+378", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/MAF.svg", "title": "San Martín (Francia) ", "indicative": "+1599", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SPM.svg", "title": "San Pedro y Miquelón ", "indicative": "+508", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SHN.svg", "title": "Santa Elena", "indicative": "+290", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/LCA.svg", "title": "Santa Lucía", "indicative": "+1758", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/STP.svg", "title": "Santo Tomé y Príncipe ", "indicative": "+239", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/VCT.svg", "title": "San Vicente y las Granadinas ", "indicative": "+1784", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SEN.svg", "title": "Senegal", "indicative": "+221", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SRB.svg", "title": "Serbia", "indicative": "+381", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SYC.svg", "title": "Seychelles", "indicative": "+248", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SLE.svg", "title": "Sierra Leona", "indicative": "+232", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SGP.svg", "title": "Singapur", "indicative": "+65", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SYR.svg", "title": "Siria", "indicative": "+963", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SOM.svg", "title": "Somalia", "indicative": "+252", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/LKA.svg", "title": "Sri lanka", "indicative": "+94", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ZAF.svg", "title": "Sudáfrica", "indicative": "+27", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SDN.svg", "title": "Sudán", "indicative": "+249", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SWE.svg", "title": "Suecia", "indicative": "+46", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/CHE.svg", "title": "Suiza", "indicative": "+41", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SUR.svg", "title": "Surinám", "indicative": "+597", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/SWZ.svg", "title": "Swazilandia", "indicative": "+268", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/THA.svg", "title": "Tailandia", "indicative": "+66", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TWN.svg", "title": "Taiwán", "indicative": "+886", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TZA.svg", "title": "Tanzania", "indicative": "+255", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TJK.svg", "title": "Tayikistán", "indicative": "+992", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TLS.svg", "title": "Timor Oriental", "indicative": "+670", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TGO.svg", "title": "Togo", "indicative": "+228", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TKL.svg", "title": "Tokelau", "indicative": "+690", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TON.svg", "title": "Tonga", "indicative": "+676", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TTO.svg", "title": "Trinidad y Tobago", "indicative": "+1868", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TUN.svg", "title": "Tunez", "indicative": "+216", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TKM.svg", "title": "Turkmenistán", "indicative": "+993", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TUR.svg", "title": "Turquía", "indicative": "+90", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/TUV.svg", "title": "Tuvalu", "indicative": "+688", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/UKR.svg", "title": "Ucrania", "indicative": "+380", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/UGA.svg", "title": "Uganda", "indicative": "+256", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/URY.svg", "title": "Uruguay", "indicative": "+598", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/UZB.svg", "title": "Uzbekistán", "indicative": "+998", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/VUT.svg", "title": "Vanuatu", "indicative": "+678", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/VEN.svg", "title": "Venezuela", "indicative": "+58", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/VNM.svg", "title": "Vietnam", "indicative": "+84", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/WLF.svg", "title": "Wallis y Futuna", "indicative": "+681", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/YEM.svg", "title": "Yemen", "indicative": "+967", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/DJI.svg", "title": "Yibuti", "indicative": "+253", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ZMB.svg", "title": "Zambia", "indicative": "+260", "fixed": false },
        { image: "/public/images/banderas/listado_nombres/ZWE.svg", "title": "Zimbabue", "indicative": "+263", "fixed": false },

    ]);
    //Se crea una copia de todos los paises
    const [fakeCountries, setfakeCountries] = useState(Countries);

    const countryFilter = () => {
        setCountries(fakeCountries)
        const input_filter = document.getElementById('searchIndicador').value
        var newArray = fakeCountries.filter(function (el) {
            if (el.title.includes(input_filter)) {
                return el
            }
        }
        );
        setCountries(newArray)
    }

    return (
        <>
            <div className="modal-body2 scrollable">
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
                    <div className="modal-filter__list scrollable">
                        {Countries.map((Country, index) => (
                            <>
                                <div>
                                    <div className="result result--pinned dashed dashed">
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
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

