
const regresarTrue = () => {
    console.log('Regresar true');
    return true;
}

const regresarFalse = () => {
    console.log('Regresar false');
    return false;
}

console.warn(true);
console.warn(!true);
console.warn(!!false);

console.log( !regresarFalse() );

console.warn(true && true); //true
console.warn(true && !true); //fasle


console.warn( regresarFalse() && regresarTrue() ); //como primero lee un false, js para la ejecución
console.warn( regresarTrue() && regresarFalse() ); //Aca es como decirle que ejecute regrese false, si la primera es verdadera
//por esto esto es muy utilizada en js

console.log('➖➖➖➖');
regresarTrue() && regresarFalse()
regresarFalse() && regresarTrue()

console.log('4 condiciones', true && true && true && true && false); // fals

console.log('OR');
// si alguno de los dos es verdadero la salida es verdadera, si ambos son falsos ahi si es falsa
console.log(true || false);
console.log(!true || false);


regresarTrue() || regresarFalse()

console.log('4 condiciones', true || true || true|| true || false); // true


//Asignaciones

console.warn('🅿️Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo' && 150;// se le asigna el ultimo valor
const a2 = false && 'Hola mundo' && 150;// solo llega a false
const a3 = 'Hola' && 'Hola mundo' && soyFalse && true;// solo llega a false
const a4 = soyFalse || 'Ya no soy falso';// 
const a5 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso' || true; // hasta que encuentre un valor
const a6 = soyFalse || soyUndefined || regresarTrue() || 'Ya no soy falso' || true; // hasta que encuentre un valor

console.log({a1 , a2, a3, a4, a5, a6});

