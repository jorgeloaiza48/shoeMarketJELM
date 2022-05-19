const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const path = require("path")
const {body} = require('express-validator')
const multer = require("multer")
const productosRoutes = require("./productosRoutes")
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
    body('email').notEmpty().withMessage('Debe introducir un correo electrónico'),
    body('fecha').notEmpty().withMessage('Debes introducir una fecha de nacimiento'),
    body('domicilio1').notEmpty().withMessage('Debes introducir una dirección de entrega'),
    body('domicilio2').notEmpty().withMessage('Debes introducir una segunda dirección de entrega'),
    body('pass').notEmpty().withMessage('Debes digitar un password o contraseña'),
    body('pass2').notEmpty().withMessage('Debes reescribir la contraseña o password')
]

//** router de productos **//
router.use("/productos", productosRoutes)

router.get('/',mainController.index)
router.get('/search',mainController.search)

// **Creación o registro de usuarios**
router.get('/registro', mainController.register)
router.post('/registro',upload.single('imagenProducto'),validations, mainController.createUser ); 

router.get('/login',mainController.login)

// router.get('/descripcion/:id',mainController.descripcion)

router.get('/detalle/:id',mainController.detalle)

router.get('/carrito',mainController.carrito)



module.exports = router

