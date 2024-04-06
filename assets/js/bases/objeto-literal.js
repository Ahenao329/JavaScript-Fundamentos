let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicaccion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War'
};

// Cuando se imprime vemos lo que se estandarizo que siempre se ordena el objeto de forma alfabetica
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Coors', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length );
console.log('Ultimo traje', personaje.trajes[2] );
console.log('Ultimo traje', personaje.trajes[ personaje.trajes.length -1 ] );


const x = 'vivo';
// Preguntemos si esta vivo
console.log('Vivo', personaje[x] );

const s = 'codeName';

console.log('CodeName', personaje[s] );

//Si necesitamos utilizar un caracter como - por que el back me lo regresa, para que JS no lo tome como un - accedemos asi:
console.log('Última Pelicula: ', personaje["ultima-pelicula"] );

// Más detalles 

// Eliminar una propiedad
delete personaje.edad;
console.log(( personaje ));


//Agregar una nueva propiedad al objeto
personaje.casado = 'true';

//Si nuestro objeto fuera una constante igual podemos agregar o eliminar propiedades, la diferencia es que no podriamos asignarlo a un nuevo objeto o a algo nuevo
// Ejm personaje = true   xxx

//Podemos trabajar nuestro objeto como si fuera un arreglo
const entriePares = Object.entries( personaje );
console.log( entriePares );

//Para poder bloquear las propiedades del objeto
Object.freeze( personaje );

personaje.dinero = 1000000000;
personaje.casado = false;
//Congela las asignacion de las propiedades, pero no a los objetos dentro del objeto
personaje.direccion.ubicaccion = 'Costa Rica'
console.log( personaje );

//Digamos que necesitamos un listado de todas las propiedades
const propiedades = Object.getOwnPropertyNames( personaje );
// Si tambien necesitamos sus valores
const valores = Object.values( personaje );
console.log( propiedades, valores );

//mas info https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object