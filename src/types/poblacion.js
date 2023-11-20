import data from "../database/poblacion.json" assert { type: "json" };
/**
 * Representa información sobre afiliados y total.
 * @typedef {Object} InformacionAfiliados
 * @property {number} afiliados - Número de afiliados.
 * @property {number} total - Total de información.
 */

/**
 * Objeto que contiene información sobre afiliados y total.
 * @type {InformacionAfiliados}
 */

const poblacion = data;

export default poblacion;
