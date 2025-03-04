
// funciones en js
// function saludar(nombre) {
//     return `Hola, ${ nombre }`;
// }

const saludar = (nombre) => `Hola, ${ nombre }`;

console.log( saludar('Gabriel') );


// tarea

// function getUsuarioActivo(nombre) {
//     return {
//         uuid: 'ABC567',
//         username: nombre
//     }
// }

const getUsuarioActivo = (nombre) => ({
    uuid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Gabriel');
console.log(usuarioActivo);


