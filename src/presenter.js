import sumar from "./sumador.js";
import restador from "./restar.js";
import promedio from "./promedio.js";

// Elementos para la suma
const firstSum = document.querySelector("#primer-numero");
const secondSum = document.querySelector("#segundo-numero");
const sumForm = document.querySelector("#sumar-form");
const sumDiv = document.querySelector("#resultado-div");

sumForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstSum.value);
  const secondNumber = Number.parseInt(secondSum.value);

  sumDiv.innerHTML = "<p>Resultado de la suma: " + sumar(firstNumber, secondNumber) + "</p>";
});

// Elementos para la resta
const firstRest = document.querySelector("#primer-numero-resta");
const secondRest = document.querySelector("#segundo-numero-resta");
const restForm = document.querySelector("#restar-form");
const restDiv = document.querySelector("#resta-div");

restForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstRest.value);
  const secondNumber = Number.parseInt(secondRest.value);

  restDiv.innerHTML = "<p>Resultado de la resta: " + restador(firstNumber, secondNumber) + "</p>";
});

// Elementos para calcular el promedio de una cadena de números
const cadenaNumerosInput = document.querySelector("#cadena-numeros");
const promForm = document.querySelector("#promedio-form");
const promDiv = document.querySelector("#promedio-div");

promForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtiene la cadena de números ingresada y convierte a array
  const cadena = cadenaNumerosInput.value;
  const numeros = cadena.split(/[,;/-]+/).map(num => Number.parseFloat(num.trim()));
  
  // Verifica si todos los valores son números válidos
  if (numeros.some(isNaN)) {
    promDiv.innerHTML = "<p>Por favor, ingrese solo números separados por comas.</p>";
  } else {
    // Calcula el promedio
    const resultadoPromedio = promedio(numeros);
    promDiv.innerHTML = "<p>Resultado del promedio: " + resultadoPromedio.toFixed(2) + "</p>";
  }
});
