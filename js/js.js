const promos = []

function agregarPromo() {
    //debugger
    let nuevaPromo = {"id": 0, "Promo": "", "Importe": 0.00}
        nuevaPromo.id = idAutomatico()
        nuevaPromo.Promo = promosInput.value.trim().toUpperCase()
        nuevaPromo.Importe = parseFloat(importeInput.value).toFixed(2)
        promos.push(nuevaPromo)
        console.clear()
        console.table(promos)
        listarPromos() 
}

function listarPromos() { 
    detallePromos.innerHTML = ""
    let filas = ""
    for (elemento of promos)
        filas += `<tr><td>${elemento.id}</td><td>${elemento.Promo}</td><td>${elemento.Importe}</td></tr>`
    detallePromos.innerHTML = filas
}

const idAutomatico = ()=> parseInt(Math.random() * 10000000)