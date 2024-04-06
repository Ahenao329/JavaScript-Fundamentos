
let a = 10;
let b = a;
a = 30

console.log( {a, b} );


let juan = { nombre: 'Juan' };

//para solucionarlo usamos {...}
// let ana = juan
let ana = { ...juan }
ana.nombre = 'Ana'

//vemos que se pasa por referencia, en js todo pasa por referencia exepto los primitivos 
console.log( {juan, ana} );

//si usamos lo ... en un parentesis es un parametro rest y sirve para unir los argumentos, 
//en otro regular significa separa los elementos y se llama operador express, le agregamos el {}
const cambiarNombre = ( { ...persona } ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre( peter );

console.log({ peter, tony });


//Arreglos
const frutas = [ 'Manzanas', 'Pera', 'Piña' ];

// const otrasFrutas = frutas;
// const otrasFrutas = [ ...frutas ];

//Otra forma
// const otrasFrutas = frutas.slice();

// Si queremos medir la eficiencia
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas]
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.log( {frutas, otrasFrutas} );