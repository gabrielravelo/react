import { getHeroesById } from "./08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         // tarea
//         const heroe = getHeroesById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn(err));

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            // tarea
            const heroe = getHeroesById( id );
            
            if( heroe ) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });
};

getHeroeByIdAsync(2)
    // .then( heroe => console.log(heroe) )
    .then( console.log )
    .catch( console.warn );

