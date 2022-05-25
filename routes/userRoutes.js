const express = require('express')
const router = express.Router()
const path = require("path")
const {body} = require('express-validator')
const userController = require('../controllers/UserController')
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/products"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
}
)

const upload = multer({ storage })


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

// **Creación o registro de usuarios**
router.get('/registro', userController.register)
router.post('/registro',upload.single('imagenProducto'),validations, userController.createUser ); 

// **Logueo de usuarios**
router.get('/login',userController.login)
router.post("/login",userController.processLogin)

// **Edición de usuarios**
router.get('/editar',userController.listarUsuarios)
router.post("/editar/:id",userController.editar)


module.exports = router