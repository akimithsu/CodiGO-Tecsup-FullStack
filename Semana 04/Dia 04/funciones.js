const mostrarnombre=() =>{
    let elemento_nombre = document.getElementById('nombre_usuario');
    let tittle = document.getElementById('reemplazo');
    let mensaje = "tu te llamas: " + elemento_nombre.value;
    tittle.textContent = mensaje;

}
const mostrartexto1=() =>{
    let elemento_nombre = document.getElementById('input1');
    let tittle = document.getElementById('titulo1');
    let mensaje = "mi nombre es " + elemento_nombre.value;
    tittle.textContent = mensaje;

}
const mostrartexto2=() =>{
    let elemento_nombre = document.getElementById('input2');
    let tittle = document.getElementById('titulo2');
    let mensaje = elemento_nombre.value;
    tittle.textContent = mensaje;

}
const mostrartexto3=() =>{
    let elemento_nombre = document.getElementById('input3');
    let tittle = document.getElementById('titulo3');
    let mensaje = `mi artista favorito es ${elemento_nombre.value}`;
    tittle.textContent = mensaje;

}

const alarma=() =>{
    setTimeout(tiempoc, 1000* 3);
}
const tiempoc=() =>{
    alert("se acabo el tiempo");
}

function suma(a,b){
    return a+b;
}
console.log("suma: ",suma(5,3));
let suma2 = function(a,b){
    return a+b;
}
console.log("suma2: ",suma2(6,6));
const suma3 = (a,b) =>{
    return a+b;
}
console.log("suma3: ",suma3(6,8));

let elemseg = document.getElementById("segundos");
let textalarma = document.getElementById("apagado");
const alerta2=() =>{
    setTimeout(tiempocumplido2, 1000 * elemseg.value)
}
const tiempocumplido2=() =>{
    textalarma.textContent = "ENCENDIDO";
    textalarma.style.color= "green";
}


/// 3.    Calcular el área de un rectángulo
function arearectangulo(a,b){
    return a*b;
}