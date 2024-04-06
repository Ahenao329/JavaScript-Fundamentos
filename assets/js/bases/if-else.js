
let a = 5;

if ( a >= 10  ) {
    console.log('A es mayor o igual a 10');
} else {
    console.log(' A es menor a 10 ');
}

const hoy = new Date();
let dia = hoy.getDay(); // el 0 es domingo....

console.log({dia});

if ( dia === '1' ) { // cuando ponemos un === no solo verifica que los valores sean los mismos si no tambien el tipado, el == si verifica solo los valores y = es asignacion 
    console.log('Lunes');
} else if ( dia === 0 ) {
    console.log('Lunes');
    // if (dia === 0) {
    //     console.log( 'Domingo' );
    // } else {
    //     console.log('No es Lunes, ni domingo');
    // }
} else if ( dia === 3) {
    console.log('Miercoles');
} else {
    console.log('No es lunes, martes o domingo');
}


// sin usar If Else, o Switch, únicamente objetos
dia= 3;

const diasLetras = {
    0: 'domingo', 
    1: 'lunes', 
    2: 'martes', 
    3: 'miercoles', 
    4: 'jueves', 
    5: 'viernes', 
    6: 'sabado'
}

const diasLetras2 = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];


// día de la semana

console.log( diasLetras[dia] || 'Día no definido' );
console.log( diasLetras2[dia] || 'Día no definido' );