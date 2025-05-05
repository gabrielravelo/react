const express = require('express');


// Crear el servidor de epxress
const app = express();

// Directorio Público
app.use( express.static('public') );

// Rutas
// app.get('/', (req, res) => {
//     res.json({
//         ok: true
//     });
// });

// Escuchar peticiones
app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});



