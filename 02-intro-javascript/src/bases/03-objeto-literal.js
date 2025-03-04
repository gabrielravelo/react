
const persona = {
    nombre: 'Gabriel',
    apellido: 'Ravelo',
    edad: 21,
    direccion: {
        ciudad: 'Caracas',
        zip: 1010,
        lat: 14.3232,
        lng: 34.9233321,
    }
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log(persona2);

