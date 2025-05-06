/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
// const { Router } = require('express');
// const router = Router();

router.post(
    '/new', 
    [ // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe contener al menos 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ], 
    crearUsuario
);

router.post(
    '/', 
    [ // middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe contener al menos 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario
);

router.get('/renew', revalidarToken);


module.exports = router;

