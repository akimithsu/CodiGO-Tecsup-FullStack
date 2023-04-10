function suma(){
  let a = prompt("Primer numero para sumar: ");
  let b= prompt("segundo numero para sumar: ");
  let resultado = +a + +b;
  alert(`La suma total es :  ${resultado}`);
}
function promedio(){
  let a = prompt("Primera nota: ");
  let b= prompt("segunda nota: ");
  let c = prompt("tercera nota : ");
  let d= prompt("cuarta nota  para sumar: ");
  let resultado = (+a + +b+ +c + +d)/4;
  alert(`La suma total es :  ${resultado}`);
}
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