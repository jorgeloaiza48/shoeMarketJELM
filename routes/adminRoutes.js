const express = require('express')
const router = express.Router()
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
const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/user"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
}
)
const upload = multer({ storage })
const uploadUser = multer ({storage2})


const adminController = require('../controllers/AdminController')


router.get("/index", adminController.index)



router.get("/lista/usuarios",adminController.userList)

router.get("/usuario/editar/:id",adminController.userEdit)
router.put("/usuario/editar/:id",uploadUser.single("img"),adminController.userUpdate)

router.delete("/usuario/delete/:id",adminController.userDelete)



router.get("/lista/productos",adminController.adminProducts)

router.get("/productos/crear",adminController.crearProducto)
router.post("/productos/crear", upload.single("photo"), adminController.newproduct)

router.get("/productos/editar/:id", adminController.editarProducto)
router.put('/productos/editar/:id',  upload.single("img") ,adminController.update)

router.delete("/productos/delete/:id", adminController.deleteProduct)



module.exports = router