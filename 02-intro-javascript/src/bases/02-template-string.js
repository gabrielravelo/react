
const nombre = 'Gabriel';
const apellido = 'Ravelo';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);


function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo( nombre )}`);