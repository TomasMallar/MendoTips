const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputApellido")
const inputEmail = document.querySelector("#inputEmail")
const selectCheck = document.querySelector("#selectCheck")
const checkbox = document.querySelector("#gridCheck")
const exampleFormControlTextarea1 = document.querySelector("#exampleFormControlTextarea1")
const submit = document.querySelector("#submit")
const reset = document.querySelector("#reset")

let datosDeInput = ""

emailjs.send('service_lz0df4j', 'template_89vdnoc', templateParams)
.then(function (response) {

reset.addEventListener("click", ()=> {
    swal({
        title: "Formulario Limpio",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Sip",
        cancelButtonText: "Uh, no!"
    }).then((result)=> {
        result.isConfirmed ?
        location.reload() :
        nombre.focus()
    })

})

submit.addEventListener("click", ()=> {
//    e.preventDefault();
    swal({
        title: "Se envió correctamente",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Enviar otro",
        cancelButtonText: "Volver"
    }).then((result)=> {
        result.isConfirmed ?
        location.reload() :
        nombre.focus()
    })

})
});

function mensajeToast() {
    Toastify({
        text: "Esta es una alerta",
        duration: 3000,
//        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "left", 
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} 
      }).showToast();
}
