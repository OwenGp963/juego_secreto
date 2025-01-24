function holaMundo(){
    console.log('Hola, mundo');
}

function saludoUsuario(){
    let nombre = prompt('Cual es tu nombre?: ');
    console.log(`Hola, ${nombre}`);
}

function numeroDoble(){
    let numero = parseInt(prompt('Digita un numero: '));
    let resultado = numero*2; 
    return resultado;
}

function numeroPromedio(){
    let num1 = parseInt(prompt('Digita el 1er numero: '))
    let num2 = parseInt(prompt('Digita el 2do numero: '))
    let num3 = parseInt(prompt('Digita el 3er numero: '))

    let resultado = (num1+num2+num3)/3

    return Math.floor(resultado);
}

function numeroMayor(){
    let num1 = parseInt(prompt('Digita el 1er numero: '))
    let num2 = parseInt(prompt('Digita el 2do numero: '))
    let resultado;

    if(num1 < num2){
        resultado = num2
    }else if(num1 > num2){
        resultado = num1
    }else{
        resultado = num1
    }
  
    return resultado;
}

function numeroCuadrado(){
    let num1 = parseInt(prompt('Digita un numero: '))
    let resultado = num1*num1;
  
    return resultado;
}

holaMundo();
saludoUsuario();
console.log(numeroDoble());
console.log(numeroPromedio());
console.log(`El numero mayor es: ${numeroMayor()}`);
console.log(numeroCuadrado());