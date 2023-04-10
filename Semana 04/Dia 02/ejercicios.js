/* let alumnos = prompt("cantidad de alumnos: ");
let costo = 0;

if(alumnos >= 100){
    costo= 65 * alumnos;
}
else if(alumnos>=50 && alumnos<100){
    costo = 70 * alumnos;
}
else if(alumnos>=30 && alumnos<50){
    costo= 95 * alumnos;
}
else{
    costo=4000;
}
console.log("costo total buses: ",costo);
console.log("costo por alumno: ",costo/alumnos); */

let horas = 30;
let total = 0;
if(horas >10){
    total = total + (horas -10)*2;
    horas = 10;
}
if(horas > 5){
    total = total + (horas - 5)*3;
    horas = 5;
}
if(horas >2){
    total = total + (horas -2 )*4;
    horas=2;
}
if(horas <=2){
    total= total + (horas)*5;
}
console.log("estacionamiento: ", total);


const a = 9;
const b = 8;
let res = 0;
for(let i=0; i<b;i++){
    res += a;
}
console.log("respuesta: ",res)