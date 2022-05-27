const {body} = require('express-validator')



const validations = [
    body('Nombre').notEmpty().withMessage('Debe introducir un nombre y apellido'),
    body('usuario').notEmpty().withMessage('Debes escribir un usuario'),
    body('email').notEmpty().withMessage('Debe introducir un correo electrónico').bail().isEmail().withMessage('Debe ingresar una dirección de correo válida'),
    body('fecha').notEmpty().withMessage('Debes introducir una fecha de nacimiento'),
    body('domicilio1').notEmpty().withMessage('Debes introducir una dirección de entrega'),
    body('domicilio2').notEmpty().withMessage('Debes introducir una segunda dirección de entrega'),
    body('pass').notEmpty().withMessage('Debes digitar un password o contraseña'),
    body('pass2').notEmpty().withMessage('Debes reescribir la contraseña o password')
]


module.exports = validations