const dia = '2';

// NOTA: Si no agregamos el breack cuando encuentre lo que busca ejecutara todos los casos que siguen como verdaderos 
switch( dia ) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case '2':
        console.log('Martes');
        break;
    default: 
        console.log('No es lunes, maretes o domingo');
}