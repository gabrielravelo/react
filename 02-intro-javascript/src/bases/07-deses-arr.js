
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

// tarea

// el primer valor del arr se llamara nombre
// el segundo se llamara setNombre

const useState = ( valor ) => {
    return [ valor, () => { console.log('Hello world') } ];
};

const arr = useState('Goku');
const [ nombre, setNombre ] = arr;
console.log(nombre);
setNombre();
