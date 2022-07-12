const {body} = require('express-validator')
const path = require("path")

const ValidationsProducts = [
    body('nombre', "Debe introducir un nombre").notEmpty(),
    body("description").notEmpty().withMessage("Debe introducir una descripcion").bail().isLength({min : 10}).withMessage("Debe introducir minimo 10 caracteres"),
    body("price","Debe introducir un precio").notEmpty(),  
    body("category", " Debe seleccionar una categoria").exists(),   
    body('img').custom((value,{req})=>{
        let file = req.file
        let extensionesAceptadas = ['.jpg','.png','.gif','.png',".jpeg"]
        
        if(!file){
          throw new Error('Tiene que seleccionar una imagen para el producto')
        } else{
          let fileExtension = path.extname(file.originalname)
          if (!extensionesAceptadas.includes(fileExtension)){
            throw new Error ('Las extensiones permitidas son ' + extensionesAceptadas)
        }
      }
        return true
      })   
]

module.exports = ValidationsProducts