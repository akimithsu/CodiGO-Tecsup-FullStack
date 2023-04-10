/* /// 2.10
console.log(
  " 2.10 La CONAGUA requiere determinar el pago que debe realizar una persona por el total de metros cúbicos que consume de agua. Realice un diagrama de flujo y pseudocódigo que representen el algoritmo que permita determinar ese pago."
);
var costo = prompt("Ingrese costo por metro cúbico: ");
var metro3 = prompt("metros cúbicos");
console.log("Costo total: ", costo * metro3);
 */
///AREAS
function areas(){
  let figura = document.getElementById("input_areas");
  /* let figura = prompt(
    "Elegir la figura para encontrar el área de (triangulo, cuadrado, rectángulo, círculo) "
  ); */
  switch (figura.value) {
    case "triangulo":
      let baset = prompt("Ingresar la base del triángulo: ");
      let alturat = prompt("ingresar la altura del triángulo: ");
      let resultado_triangulo = (baset * alturat) / 2;
      alert(`El área del triángulo es :  ${resultado_triangulo}`);
      break;
    case "cuadrado":
      let basec = prompt("Ingresar la base del cuadrado: ");
      let resultado_cuadrado = basec * basec;
      alert(`El área del cuadrado es :  ${resultado_cuadrado}`);
      break;
    case "rectangulo":
      let baser = prompt("Ingresar la base del rectángulo: ");
      let alturar = prompt("ingresar la altura del rectángulo: ");
      let resultado_rectangulo = baser * alturar;
      alert(`El área del rectangulo es :  ${resultado_rectangulo}`);
      break;
    case "circulo":
      let radio = prompt("Ingresar el radio del círculo: ");;
      let resultado = Math.PI * radio ** 2;
      alert(`El área del circulo es :  ${resultado}`);
      break;
  }
}

/// 2.20 con variables
/* console.log(
  "Realice el diagrama de flujo y pseudocódigo que representen el algoritmo para determinar el promedio que obtendrá un alumno considerando que realiza tres exámenes, de los cuales el primero y el segundo tienen una ponderación de 25%, mientras que el tercero de 50%."
);
let ex1 = prompt("Ingresar la nota del examen 1");
let ex2 = prompt("Ingresar la nota del examen 2");
let ex3 = prompt("Ingresar la nota del examen 3");

let prom1 = ex1 * 0.25;
let prom2 = ex2 * 0.25;
let prom3 = ex3 * 0.5;
let promf = +prom1 + +prom2 + +prom3;

if (promf >= 10.5) {
  alert(`el alumno aprobo con: ${promf}`);
} else {
  alert(`el alumno desaprobó con: ${promf}`);
}
/// 2.15

console.log(
  "Se desea calcular la potencia eléctrica de circuito de la figura 2.6. Realice un diagrama de flujo y el pseudocódigo que representen el algoritmo para resolver el problema. Considere que: P = V*I y V = R*I."
);
let resistencia = 4;
let intensidad = prompt("Ingresar la intensidad de corriente: ");
let voltaje = resistencia * intensidad;
let potencia = voltaje * intensidad;
console.log("la potencia es: ", potencia);

/// 2.14

console.log(
  "Una empresa desea determinar el monto de un cheque que debe proporcionar a uno de sus empleados que tendrá que ir por equis número de días a la ciudad de Monterrey; los gastos que cubre la empresa son: hotel, comida y 100.00 pesos diarios para otros gastos. El monto debe estar desglosado para cada concepto. Realice un diagrama de flujo y pseudocódigo que representen el algoritmo que determine el monto del cheque."
);
let dias = prompt("¿cuantos dias viajará el empleado? :");
let hotel = prompt("¿cuanto cuesta el hotel por dia?");
let comida = prompt("¿cuanto cuesta un plato de comida?");
let gastos = dias * (+hotel + comida * 3 + 100);
console.log("El cheque debe ser por:", gastos);
 */