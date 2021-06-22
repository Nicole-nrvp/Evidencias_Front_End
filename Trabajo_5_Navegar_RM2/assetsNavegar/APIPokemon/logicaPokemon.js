console.log ("pokemon api");
const btnIn  = document.getElementById("btnIn");

const url = "https://pokeapi.co/api/v2/pokemon/";

const getData = (api, opc) => { 

    return fetch(api)
    .then((response) => response.json())
    .then((json) => {
        //---------------------------------
        if(opc == 0)
            listar(json.results)
        else 
            mostrar(json)
        //-----------------------------------
    })
    .catch((error) => {
        console.log(" Error ...", error) 
    })
 }

 const listar=(data) =>  {
    data.forEach(element => {

        //console.log(element.name);
        //console.log(element.url);
        let url = element.url;
        getData(elemnt.url, 1);

});

}

const mostrar=(data) => {
    //console.log(data.name);
    //console.log(data.sprites.back_default);
    let nuevoMatacho = {
        name: data.name,
        pic: data.sprites.back_default
    }

        matachos.push(nuevoMatacho)
    
}

const mostrarArreglo = (arreglo) => {
    console.log("tamaño " + arreglo.length)
    console.log (arreglo)
}


btnIn.addEventListener('click', ()  => {
    console.log("obteniendo los valores de laapi")
    getData(url, 0);

    mostrarArreglo(matachos)
});
