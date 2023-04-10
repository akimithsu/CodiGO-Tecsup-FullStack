let hoy = new Date();
console.log("hoy",hoy);

const meses = ["enero"];
console.log("año",hoy.getFullYear());

let mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());
console.log(mesActual)
console.log(new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Peru' }).format(date));
