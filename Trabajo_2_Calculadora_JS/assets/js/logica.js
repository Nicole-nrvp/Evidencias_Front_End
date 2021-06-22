console.log ("Hola Mundo desde DOM");

const botonIn = document.getElementById('botonIn');
let salidaTexto = document.getElementById('salidaTexto');
let Lista = document.getElementById('Lista');

let nombres =[];

botonIn.addEventListener('click', () => {

    const textoIn = document.getElementById('textoIn');
    let nombreIn = textoIn.value;

    if(nombreIn != ""){
        if (!existe(nombreIn))
            nombres.push(nombreIn)
            else 
            salidaTexto.innerText = 'El usuario ' + + 'ya existe';

    }else{
        nombres.sort();
        mostrarArreglo();
    }

    textoIn.value= "";
});



//definir una función para saber si existe

const existe = (userIn) =>{
    let aux = false;
    for (const user of nombres) {
        if(userIn == user){
            aux = true;
            return aux;
        }
    }
    return aux;
}
const mostrarArreglo =() =>{

   for (const user of nombres) {
        var etiqueta = document.createElement("Li");
        etiqueta.textContent = user;
        Lista.appendChild(etiqueta);
    }

//ARREGLO CON FOR 
    /*for (var i = 0; i < nombres.length; i++) {
        let user = nombres[1];

        var etiqueta = document.createElement("Li");
        etiqueta.textContent = user;
        Lista.appendChild(etiqueta);

    }*/
//ARREGLO CON UN WHILE
   /* salidaTexto.innerText = '';
    let i = 0;

while(i < nombres.length){
    let user = nombres[1];

        var etiqueta = document.createElement("Li");
        etiqueta.textContent = user;
        Lista.appendChild(etiqueta);
        i++;
}*/

}
