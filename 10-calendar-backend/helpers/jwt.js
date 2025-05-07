const jwt = require('jsonwebtoken');

//? forma de fernando
// const generarJWT = ( uid, name ) => {

//     return new Promise( (resolve, reject) => {

//         const payload = { uid, name };

//         jwt.sign( payload, process.env.SECRET_JWT_SEED, {
//             expiresIn: '2h',
//         }, (err, token) => {
//             if ( err ) {
//                 console.log(err);
//                 reject('No se pudo generar el token');
//             }

//             resolve( token );

//         });

//     });
// }

//* forma que funciona
const generarJWT = ( uid, name ) => {
    const payload = { uid, name };
    const token = jwt.sign( payload, process.env.SECRET_JWT_SEED, {
        expiresIn: '12h'
    });

    if ( !token ) throw new Error('No se pudo generar el token');

    return token;
}

module.exports = {
    generarJWT
}
