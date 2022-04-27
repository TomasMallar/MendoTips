document.getElementById(consulta).addEventListener('click',consultarJSON);

function consultarJSON() {
    fetch('promos.json') 
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        let html = '';
        data.forEach(function(consulta) {
        });
        html+=` <li>${consulta.id}${consulta.promo}${consulta.precio} </li>`
    })
    .catch (function(error) {
        console.log(error);
    }
//  document.getElementById('resultado').innerHTML = html;
// };