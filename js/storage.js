const guardoDatos = ()=> {
    localStorage.setItem("id", id.value)
    localStorage.setItem("promo", promo.value)
    localStorage.setItem("importe", importe.value)
}

const recuperoDatos = ()=> {
    //debugger
    id.value = localStorage.getItem("id")
    promo.value = localStorage.getItem("promo")
    importe.value = localStorage.getItem("importe")
}

const limpiarLS = ()=> {
    const resp = confirm("¿Realmente desea eliminar los datos almacenados?")
          if (resp) {
              localStorage.clear()
              console.log("se han eliminado todos los datos.")
          }
}

btnGuardar.addEventListener("click", guardoDatos)

recuperoDatos()