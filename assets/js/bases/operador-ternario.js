/* 
Dias en semanase abre a las 11
pero los fines de semana abren a las 9
*/

// Entra a un sitio web, para averiguar si esta abierto hoy..

const dia = 4;// 0: domingo...
const horaActual = 10

let horaApertura;
let mensaje;

// if ( dia === 0 || dia === 6 ) {
// if ( [0,6].includes( dia ) ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }

// se puede resumir todo ese condicional asi:
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura ) {
//     mensaje = 'Esta abierto'
// } else {
//     // mensaje = 'Esta cerrado, hoy abrimos a las' + horaApertura; // de esta forma ya no se acostumbra a concatenar, ´puede llevar a errores
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}` ;
// }

mensaje = (horaActual >= horaApertura) ? mensaje = 'Esta abierto' 
                                       : mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}` ;


console.log( {horaApertura, mensaje} );