console.log("promesas")

//arreglo personajes {} <> [ ] 
personajes = [ 
{
    id:1,
    nombre:'Batman'
},
{
    id:2,
    nombre:'Joker'
},
{
    id:3,
    nombre:'Pinguino'
},
{
    id:4,
    nombre:'sofia'
}
]; 

//SOLUCION NUMERO UNO CON CALLBACK
/*
const obtenerPersonajes = () => {
    setTimeout( ()=> {
        return personajes
    },2000);
}

console.log (obtenerPersonajes());
*/


//SOLUCION NUMERO 2 PROMESAS

const obtenerPersonajes = () => {
    return new Promise((resuelve, rechaza) => {
        if( personajes.length == 0) {
            rechaza (new Error('No existen personajes'));
        }else{
            setTimeout(()=>{
            resuelve(personajes)
                },2000);
            }
     });
}

//obtenerPersonajes().then((personajes) => console.log(personajes)).catch((error) => console.log(error));

//SOLUCION PROMESAS ASYNIC AWAIT

async function esperandoRespuesta() {
    try {
        const mostrarPersonajes = await obtenerPersonajes();
        console.log (mostrarPersonajes)

    } catch (error) {
        console.log (error)
    }
}

esperandoRespuesta();