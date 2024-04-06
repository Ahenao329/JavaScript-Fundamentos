
const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

// while( i < carros.length ) {
//     console.log( carros[i] );
//     // i = i + 1;
//     i++;
// }

//un codigo mas limpio:
while( carros[i] ) {
    if ( i === 1 ){
        //break;
        i++;
        continue; // con el continiu no saldra del ciclo, ejecutara los siguientes
    }

    console.log( carros[i] );
    i++;
}


console.log('➖➖ Do while');
// siempre se ejecuta al menos 1 vez
let j = 2;

do {
    console.log( carros[j] );
    j++;
} while( carros[j] );