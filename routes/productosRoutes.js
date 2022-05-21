const express = require('express')
const router = express.Router()
const productsController = require('../controllers/ProductsController')
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



router.get('/', productsController.Allproducts)
router.post("/", upload.single("photo"), productsController.newproduct)


router.get("/crear", productsController.crearProducto)

router.get("/:categoria", productsController.categoria)


router.get("/editar/:id", productsController.editarProducto)

router.put("/editar/:id", upload.single("img"), productsController.update)

module.exports = router