// const elMayor = (a, b) => {
//     return ( a > b ) ? a: b
// }

// esto es lo mismo y los () es por gustos
const elMayor = (a, b) =>  ( a > b ) ? a: b;

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dólares': '10 Dólares';


console.log( elMayor(20, 15));
console.log( tieneMembresia(true));

//El operador ternario tambien es muy util cona arreglos u onjetos

const amigo = true;
const amigosArr=[
    'Peter',
    'Tony',
    'Dr. Strange',
     amigo ? 'Thor' : 'Loki',
     (() => 'Nick Fury') (), //Funcion anonima auto invocada
     elMayor(10, 15)
]

console.log( amigosArr );


//Otra manera de utilizar, siste,a de notas norteamericano:

const nota = 100;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';

console.log({ nota, grado });