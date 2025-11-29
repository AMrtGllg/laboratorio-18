//ej9
import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";


const a = 10;
const b = 2;
const c = 0;

console.log("ej9 resultados");
console.log("Resultado suma:", sumar(a, b));
console.log("Resultado resta:", restar(a, b));
console.log("Resultado multiplicar:", multiplicar(a, b));

try {
  console.log("Resultado dividir (b!=0):", dividir(a, b));
} catch (e) {
  console.error("Error en división:", e.message);
}

try {
  console.log("Resultado dividir (b==0):", dividir(a, c));
} catch (e) {
  console.error("Error en división:", e.message);
}
