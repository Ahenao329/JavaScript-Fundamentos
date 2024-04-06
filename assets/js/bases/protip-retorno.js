function crearPersona( nombre, apellido ) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

// En ems6 se definio que si queremos retornar una variable ya no es necesario nombre: nombre

function crearPersona2( nombre, apellido ) {
    return { nombre, apellido }
}

//Cuando retornamos un objeto debemos mandarlo entre parentecis
const  crearPersonaFlecha =( nombre, apellido ) => ({nombre, apellido});


const persona = crearPersona( 'Fernando', 'Herrera' );
const persona2 = crearPersona2( 'Fernando', 'Herrera' );
const persona3 = crearPersonaFlecha('Jose', 'Gomez' );

// console.log(persona);
// console.log(persona2);
// console.log(persona3);

function imprimeArgumentos() {
    console.log( arguments );
}

// La funcion de flecha no crea el objeto de argumentos, si necesitamos trabajar con ellos debemos llamarlos asi ...args
//despues de args nno puede ir ningn valor y su llamada debe ir  { }
const imprimeArgumentos2 = (edad, ...args ) => {
    // console.log({edad, args});
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo });

const {apellido: nuevoApellido} = crearPersona( 'Fernando', 'Herrera' );
console.log({nuevoApellido});


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//     console.log( 'nombre', personaje.nombre );
//     console.log( 'codeName', personaje.codeName );
//     console.log( 'vivo', personaje.vivo );
//     console.log( 'edad', personaje.edad );
//     console.log( 'trajes', personaje.trajes );
// }

// Destructuracion
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);