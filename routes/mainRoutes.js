const express = require('express')
const router = express.Router()

const mainController = require('../controllers/mainController')

router.get('/',mainController.index)

router.get("/productos", mainController.products)

router.get('/registro', mainController.register)

router.get('/login',mainController.login)

router.get('/descripcion',mainController.descripcion)

router.get('/detalle/:id',mainController.detalle)

router.get('/carrito',mainController.carrito)

router.get("/crearproducto", mainController.crearProducto)

router.get("/editarproducto",mainController.editarProducto)

module.exports = router