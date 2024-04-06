const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Acuaman'];

console.log('For tradicional');
for( let i = 0; i < heroes.length - 1; i++) {
    console.log(heroes[i]);
}

console.log('➖➖, off')

console.log('For in');
for( let i in heroes ) {
    console.log( heroes[i] );
}

console.log('➖🅿️, off')


console.log('For of');
for ( let i of heroes){
    console.log( i );
}