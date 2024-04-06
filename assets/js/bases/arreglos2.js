let juegos = ['Zelda', 'Marios', 'Yogui'];
console.log('Largo', juegos.length);

let primero = juegos[ 2 - 2 ];
let ultimo = juegos[ juegos.length -1 ];

console.log( { primero, ultimo } );

juegos.forEach( (elemento, indeice, arr) => {
    console.log({elemento, indeice, arr})
});

// Inset in the finally
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

// Insertar in the start
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

//remove in the finally
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let pos = 1;

//eliminar desde una posision y cuantos 
let juegosBorrados = juegos.splice( pos, 2 );
console.log( {juegosBorrados, juegos} );

let metroiIndex = juegos.indexOf('Yogui'); // CaseAenSitive: debes escribir mayusculas y minusculas tal cual para buscar en el array
console.log( {metroiIndex} );
