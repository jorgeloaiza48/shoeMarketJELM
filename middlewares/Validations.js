const {body} = require('express-validator')
// const { path } = require('express/lib/application')
const path = require('path')

const validations = [
    body('documento').notEmpty().withMessage('Número de identificación requerido.').bail().isLength({min:5,max:10}).withMessage('El número de identificación debe ser de mínimo cinco números y máximo de 10'),
    body('nombre').notEmpty().withMessage('Debe introducir un nombre').bail().isLength({min:2}).withMessage('El nombre debe tener por lo menos de 2 caracteres'),
    body('apellido').notEmpty().withMessage('Debe introducir un apellido').bail().isLength({min:2}).withMessage('El apellido debe tener por lo menos de 2 caracteres'),
    body('email').notEmpty().withMessage('Debe introducir un correo electrónico').bail().isEmail().withMessage('Debe ingresar una dirección de correo válida'),
    body('fecha').notEmpty().withMessage('Debe introducir una fecha de nacimiento'),
    body('domicilio').notEmpty().withMessage('Debe introducir una dirección de entrega'),
    body('pass').notEmpty().withMessage('Debe digitar una contraseña').bail().matches('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})').withMessage('Debe tener almenos una letra en minúscula, una en mayúscula, un número y un carácter especial como @ o #, y debe ser de almenos 8 caracteres. '),
    body('photo').custom((value,{req})=>{
      let file = req.file
      let extensionesAceptadas = ['.jpg','.png','.gif','.png']
      
      if(!file){
        throw new Error('Debe seleccionar una imagen como foto de perfil.')
      } else{
        let fileExtension = path.extname(file.originalname)
        if (!extensionesAceptadas.includes(fileExtension)){
          throw new Error ('Las extensiones permitidas son ' + extensionesAceptadas)
      }
    }
      return true
    })

  ]

  module.exports = validations