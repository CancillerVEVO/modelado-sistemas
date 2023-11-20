import { factorial, log } from "mathjs";
import casosNuevos from "./types/casosNuevos.js";
import poblacion from "./types/poblacion.js";

/*
    Ya que tenemos los datos cargados (poblacion, tabla de incidencias), podemos empezar a trabajar con ellos.

*/

// PASO 1: Calcular el porcentaje de poblacion con servicios medicos con diabetes

const porcentajePoblacionDiabetes = casosNuevos.map((trimestre) => {
  return (trimestre.numeroDeCasosNuevosDeDiabetes / poblacion.afiliados) * 100;
});

// PASO 2: Calcular el porcentaje de personas con servicios medicos con obesidad

const porcentajePoblacionObesidad = casosNuevos.map((trimestre) => {
  return (trimestre.numeroDeCasosNuevosDeObesidad / poblacion.afiliados) * 100;
});

// PASO 3: Calcular la proyeccion de afiliados con diabetes
const proyeccionAfiliadosDiabetes = porcentajePoblacionDiabetes.map(
  (porcentaje) => {
    return (porcentaje * poblacion.total) / 100;
  }
);

// PASO 4: Calcular la proyeccion de afiliados con obesidad

const proyeccionAfiliadosObesidad = porcentajePoblacionObesidad.map(
  (porcentaje) => {
    return (porcentaje * poblacion.total) / 100;
  }
);

/*

    AHORA SI, LO MERO BUENO.
    AHORA SI, VAMOS A CALCULAR LA INCIDENCIA DE DIABETES Y OBESIDAD EN LA POBLACION.

*/

// PASO 5: Calcular la incidencia de diabetes en la poblacion

const incidenciaDiabetes = proyeccionAfiliadosDiabetes.map(
  (proyeccion, index) => {
    return (proyeccion / proyeccionAfiliadosObesidad[index]) * 1000;
  }
);

// GRAFICAMOS (x: trimestre, y: incidenciaDiabetes)

const graficaIncidenciaDiabetes = {
  x: casosNuevos.map((trimestre) => {
    return `${trimestre.trimestre}/${trimestre.año}`;
  }),
  y: incidenciaDiabetes,
};

/* 
    Ahora tenemos que aplicar Poisson para calcular la probabilidad de que haya un brote de diabetes en la poblacion.
*/

// PASO 6: Calcular la probabilidad de que haya un brote de diabetes en la poblacion

const lambdaMedia =
  incidenciaDiabetes.reduce((a, b) => a + b, 0) / incidenciaDiabetes.length;

const poisson = (k, lambda) => {
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
};

// Por cada trimestre
let sum = 0;
let i = 1;
while (sum <= 0.9999) {
  sum += poisson(i, lambdaMedia);
  console.log(`Trimestre ${i}: ${sum}`);
  i++;
}
