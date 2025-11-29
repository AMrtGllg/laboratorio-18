export default function multiplicar(a, b) {
  console.log("multiplicar:", a, "*", b);
  return a * b;
}

export function dividir(a, b) {
  console.log("dividir:", a, "/", b);
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}