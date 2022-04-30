const express = require('express')
const router = express.Router()

const mainController = require('../controllers/mainController')

router.get('/',mainController.index)
router.get('/registro', mainController.register)
router.get('/login',mainController.login)
router.get('/descripcion',mainController.descripcion)
router.get('/carrito',mainController.carrito)

module.exports = router