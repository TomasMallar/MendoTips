const promosArray = []; 

const guardoDatos = ()=> {
    
    fetch('../js/promos.json') 
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        console.log(data)
        const idArray = document.getElementsByClassName("id");
        for (ids of idArray){
             data.forEach(function(element) {
            if(IDBObjectStore.innerHTML == element.id ) { 
                let objetoPromo = {id:element.id, promo:element.promo, importe:element.importe }
                promosArray.push(objetoPromo)
            }    
        });
      }
      console.log(promosArray)   
      localStorage.setItem("arrayDePromos", promosArray)
    })
}

// const recuperoDatos = ()=> {
//     //debugger
//     let id = localStorage.getItem("id")
//     let promo = localStorage.getItem("promo")
//     let importe = localStorage.getItem("importe")
// }

const limpiarLS = ()=> {
    const resp = confirm("¿Realmente desea eliminar los datos almacenados?")
          if (resp) {
              localStorage.clear()
              console.log("se han eliminado todos los datos.")
          }
}

const btnGuardar = document.getElementById("guardar")

btnGuardar.addEventListener("click", guardoDatos)

