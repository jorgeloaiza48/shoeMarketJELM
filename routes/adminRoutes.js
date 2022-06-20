const express = require('express')
const router = express.Router()
const path = require("path")
const multer = require("multer")
const validationProducts = require("../middlewares/ValidationsProducts")
const adminMiddleware =  require("../middlewares/AdminMiddleware")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
         if(file.fieldname === "img"){
            cb(null, path.join(__dirname, "../public/img/products"))
        } else {
            if(file.fieldname === "photo"){
                cb(null, path.join(__dirname, "../public/img/user"))
            }
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }

})




const upload = multer({ storage })

const adminController = require('../controllers/AdminController')

router.get("/",adminMiddleware, adminController.index)

router.get("/lista/usuarios",adminMiddleware, adminController.userList)




router.get("/usuario/editar/:id", adminController.userEdit)

router.put("/usuario/editar/:id", upload.single("photo"), adminController.userUpdate)

router.delete("/usuario/delete/:id", adminController.userSoftDelete)

router.get("/lista/productos",adminMiddleware, adminController.adminProducts)

router.get("/productos/crear",adminMiddleware, adminController.crearProducto)

router.post("/productos/crear", upload.single("img"), validationProducts, adminController.newproduct)

router.get("/productos/editar/:id", adminMiddleware,adminController.editarProducto)

router.put('/productos/editar/:id', upload.single("img"), adminController.update)

router.delete("/productos/delete/:id", adminController.deleteProduct)



module.exports = router