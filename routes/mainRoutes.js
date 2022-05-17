const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const path = require("path")
//*********multer ********/

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

router.get('/',mainController.index)

router.get('/productos', mainController.products)
router.post("/productos", upload.single("photo"), mainController.newproduct)
router.get("/productos/crear", mainController.crearProducto)

router.get("/productos/:categoria", mainController.categoria)

// **Creación o registro de usuarios**
router.get('/registro', mainController.register)

router.post('/',upload.single('imagenProducto'), mainController.createUser ); //upload.single('imagenProducto')



router.get('/login',mainController.login)

// router.get('/descripcion/:id',mainController.descripcion)

router.get('/detalle/:id',mainController.detalle)

router.get('/carrito',mainController.carrito)

router.get("/editarproducto",mainController.editarProducto)

module.exports = router

