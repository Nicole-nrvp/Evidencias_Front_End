console.log("//calculadora//");


const calculadora = (tipoOpe) => {
    let inputA = document.getElementById("valorA")
    let inputB = document.getElementById("valorB")
    let valorA = parseInt(inputA.value);
    let valorB = parseInt(inputB.value);
    let resultado = document.getElementById("resultado");
    let rta;

    switch (tipoOpe){
        case 'suma':
            console.log("..sumar");
            rta = valorA + valorB;
            break;
        case 'resta':
            console.log("..restar");
            rta = valorA - valorB;
            break;
        case 'multiplicacion':
            console.log("..multiplicar");
            rta = valorA * valorB;
            break;
        case 'division':
            console.log("..dividir");
            rta = valorA / valorB;
            break;
        case 'limpia':
            console.log("..limpiar");
            inputA.value=""; 
            inputB.value="";
            rta=0;
            break;
            default:
                break;
    }
        resultado.innerText = rta;
}
