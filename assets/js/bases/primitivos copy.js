// La comilla sencilla es mas rapida que la comilla doble, pero la doble es mas facil de ver

let nombre = 'Peter Parker';

nombre = "Tía May";
nombre = `Tia May`;

// Para saver de que tipo es una variable

console.log( typeof nombre );

nombre = 123;
//Por esto es que JS es debilmente tipado
console.log( typeof nombre );

nombre = 232323.0000220
//No difetencia entre number y float
console.log( typeof nombre );

let superPoder;
//undefined es solo que no esta definida y no se sabe que tipo es, null es un string vacio
console.log(superPoder);

let soyNull = null;
//Por lo que sale en la consola es por lo q gente dice que null es objeto y no primitivo, pero no es sierto
console.log( typeof soyNull );

let symbol = Symbol('a');
let symbol2 = Symbol('a');
//eL SYMBOL SIRVE PARA IDENTIFICAR PROPIEDADES DE MANERA UNICA
console.log( typeof symbol);

console.log( Symbol === symbol2);