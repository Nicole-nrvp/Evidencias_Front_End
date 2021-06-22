console.log ("rick and morty api");
const url = "https://rickandmortyapi.com/api/character";

const getData = (api) => { 

    return fetch(api)
    .then((response) => response.json())
    .then((json) => {
        mostrarDatos(json) 
    })
    .catch((error) => {
        console.log(" Error ...", error) 
    })
 }

 const mostrarDatos=(data) =>  {
    let html="";

    //mostrar el JSON
    data.results.forEach(personaje => {
    html +=`<div class="m-1">`;
    html +=`<div class="card" style="width: 18rem;">`;
    html +=`<img src="${personaje.image}" class="card-img-top" alt="...">`;
    html +=`<div class="card-body">`;
    html +=`<h5 class="card-tittle"> ${personaje.name}</h5>`;
    html +=`</div>`;
    html +=`<ul class="list-group list-group-flush">`;
    html +=`<li class="list-group-item">Genero: ${personaje.gender}</li>`;
    html +=`<li class="list-group-item">Especie: ${personaje.species}</li>`;
    html +=`<li class="list-group-item">Estado: ${personaje.status}</li>`;
    html +=`</ul>`;
    html +=`</div>`;
    html +=`</div>`;

});

document.getElementById("datosPersonajes").innerHTML = html;
}
getData(url);