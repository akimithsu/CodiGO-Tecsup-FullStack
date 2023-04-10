const probando = document.querySelector("#btn-prueba");
probando.addEventListener("click", () => {
  alert("prueba");
});
const pregunta = document.querySelector("#btn-pregunta");
const error = document.querySelector("#btn-error");
const peligro = document.querySelector("#btn-peligro");
const confirmacion = document.querySelector("#btn-alerta-botones");
const notificacion = document.querySelector("#btn-alerta-notif");
const imagen = document.querySelector("#btn-imagen");

pregunta.onclick = function () {
  Swal.fire("Alguna pregunta?", "texto de pregunta", "question");
};
error.onclick = function () {
  Swal.fire({
    icon: "error",
    title: "Ops",
    text: "Algo salió mal",
    /* footer: '<a href="">Why do I have this issue?</a>', */
  });
};
peligro.onclick = function () {Swal.fire({
    icon: "warning",
    title: "Ops",
    text: "Algo salió mal",
  });};
confirmacion.onclick = function () {
    Swal.fire({title: 'Estas seguro?',
    text: "Segurito segurito?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si estoy segurito segurito'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Has borrado esto satisfactoriamente',
        'success'
      )
    }})
};
notificacion.onclick = function () {
    
};
imagen.onclick = function () {Swal.fire({
    imageUrl: 'https://i.pinimg.com/550x/eb/dd/57/ebdd57bd07fb9edfc477458c7017f895.jpg',
    imageHeight: 500,
    imageAlt: 'Imagen',
    title: "Snoopy",
    text: "Esto es un perro?",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: "No lose rick parece falso",
    confirmButtonText: 'Si estoy segurito segurito'
}).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Acertaste!',
        'Si era un perro, es snoopy',
        'success'
      )
    }
    else{
        Swal.fire(
            'Fallaste!',
            'Si era un perro, es snoopy',
            'error'
          )
    }
})
};

