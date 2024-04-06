

// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megan', 'Free Fire' ]

console.log(videoJuegos);

console.log({videoJuegos});

console.log(videoJuegos[0]);

// JS permite hacer arreglos any

let arregloCosas = [
    true,
    123,
    'Anderson',
    1 + 2,
    function() {},
    () => {},
    { a: 1 },
    ['x', 'Megan', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
]

// console.log({arregloCosas});

console.log( arregloCosas[7][4][1] );