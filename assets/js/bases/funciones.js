//Si la funcion no retorna nada, retorna undefined

function saludar( nombre ) {
    //todas las funtiones tradicionales cuando se ejecutan tiene un objeto llamado arguments que hace referencia a todos los elementos enviados a la funcion
    console.log( arguments );
    console.log('Hola ' + nombre );
    return 1;
}

//Con es const es una medida de seguridad que nos permite asegurarnos que la funcion no se reutilizada en mi app
const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}

// Los parentesis son opcuinales cuando enviamos argumentos pero son buena practica
const saludarFlecha3 =  nombre  => {
    console.log('Hola ' + nombre);
}

// saludar('Fercho', 40, true, 'Costa Rica');

const retornoDeSaludar = saludar('Fercho', 40, true, 'Costa Rica');

// console.log({retornoDeSaludar});

// saludar('Alexis');
// saludar2('cucho');
// saludarFlecha();
// saludarFlecha2('Anderson');
// saludarFlecha3('Anderson');


function sumar( a, b ) {
    return a + b
}

const sumar2 = (a,b) => {
    return a + b
}

// Nos permite mejor rendimiento y condigo mas limpor por qaue mire lo siguiente

const sumar3 = (a,b) => a + b

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random(); 

// console.log( sumar3(1,2) );

console.log( getAleatorio2() );