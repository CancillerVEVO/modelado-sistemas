import data from "../database/casosNuevos.json" assert { type: "json" };

/**
 * Representa un conjunto de datos sobre casos de obesidad y diabetes en diferentes trimestres y años.
 * @typedef {Object} DatosSalud
 * @property {number} trimestre - Número de trimestre.
 * @property {number} año - Año correspondiente a los datos.
 * @property {number} numeroDeCasosNuevosDeObesidad - Número de casos nuevos de obesidad.
 * @property {number} numeroDeCasosNuevosDeDiabetes - Número de casos nuevos de diabetes.
 * @property {number} ssa - Porcentaje de casos atendidos por la SSA.
 * @property {number} imssProspera - Porcentaje de casos atendidos por IMSS Prospera.
 * @property {number} imssBienestar - Porcentaje de casos atendidos por IMSS Bienestar.
 * @property {number} privado - Porcentaje de casos atendidos en el sector privado.
 * @property {number} serviciosMedicosEstatales - Porcentaje de casos atendidos por servicios médicos estatales.
 * @property {number} issste - Porcentaje de casos atendidos por ISSSTE.
 * @property {number} sedena - Porcentaje de casos atendidos por SEDENA.
 * @property {number} imss - Porcentaje de casos atendidos por IMSS.
 */

/**
 * Un conjunto de datos que contiene información sobre casos de obesidad y diabetes en diferentes trimestres y años.
 * @type {DatosSalud[]}
 */

const casosNuevos = data;

export default casosNuevos;
