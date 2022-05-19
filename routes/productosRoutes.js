const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const ProductsController = require('../controllers/ProductsController')
const path = require("path")


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



router.get('/', ProductsController.Allproducts)
router.post("/", upload.single("photo"), ProductsController.newproduct)
router.get("/crear", ProductsController.crearProducto)
router.get("/editar",ProductsController.editarProducto)
router.get("/:categoria", ProductsController.categoria)


module.exports = router