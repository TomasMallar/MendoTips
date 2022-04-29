const btnConsulta = document.getElementById('consulta');
btnConsulta.addEventListener('click',consultarJSON);

function consultarJSON() {
    fetch('../js/promos.json') 
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        let html = '';
        data.forEach(function(consulta) {
            html+=` <li class="id">${consulta.id}</li>
                    <li class="promo">${consulta.promo}</li>
                    <li class="importe">${consulta.importe} </li>`
        });
        document.getElementById('resultado').innerHTML = html;
    })
    .catch (function(error) {
        console.log(error);
    })
};