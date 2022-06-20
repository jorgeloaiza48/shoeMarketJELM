const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const path = require("path")


const productosRoutes = require("./productosRoutes")
const userRoutes = require("./userRoutes")
const adminRoutes = require("./adminRoutes")
//const newsletterMiddleware = require('../middlewares/newslettermiddleware')

//** router de productos **//
router.use("/productos", productosRoutes)

//* router de user**//
router.use("/user",userRoutes)

//* router de admin**//
router.use("/admin",adminRoutes)


router.get('/',mainController.index)

router.post("/",mainController.index)
router.get('/search',mainController.search)

router.get('/detalle/:id', mainController.detalle)
router.get('/carrito',mainController.carrito)

module.exports = router

