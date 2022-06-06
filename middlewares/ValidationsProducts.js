const {body} = require('express-validator')

const ValidationsProducts = [
    body('nombre', "Debe introducir un nombre de producto").notEmpty(),
    body("price","Debe introducir un precio").notEmpty(),
    body("color", " Debe seleccionar al menos un color").exists(), 
    body("size", " Debe seleccionar al menos un talle").exists(), 
    body("category", " Debe seleccionar una categoria").exists(),  
    body('photo').custom((value,{req})=>{
        let file = req.file
        let extensionesAceptadas = ['.jpg','.png','.gif','.png']
        
        if(!file){
          throw new Error('Tiene que seleccionar una imagen como foto de producto.')
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