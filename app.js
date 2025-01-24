let numeroSecreto = 0;
let numeroIntentos = 0; 
let listaNumerosSorteados = [];  
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;   
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Felicidades Acertaste en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario < numeroSecreto){
                asignarTextoElemento('p','El numero secreto es mayor');
            } else{
                asignarTextoElemento('p','El numero secreto es menor'); 
            } 
            numeroIntentos++;
            limpiarCaja();
    }
    return;
}  

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
} 

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function generarNumeroSecreto(){
    let numeroSecreto = Math.floor((Math.random()*numeroMaximo)+1);

    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sorteron todos los numeros posibles')
    }else if (listaNumerosSorteados.includes(numeroSecreto)){
        generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroSecreto)
        return numeroSecreto;
    }
}

condicionesIniciales();