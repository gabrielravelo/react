
// desestructuracion
// asignacion desestructurante
const persona = {
    nombre: 'Gabriel',
    edad: 21,
    clave: 'Batman',
    rango: 'Soldier',
};

const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave { nombreClave, anios }
const useContext = ({nombre, edad, clave, rango = 'Captain'}) => {

    // const { nombre, edad, clave } = usuario;
    // console.log(nombre, edad, clave);
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
};

const { nombreClave, anios, latlng:{lat, lng} } = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);