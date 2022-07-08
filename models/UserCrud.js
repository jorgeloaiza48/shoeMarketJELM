//1. guardar al usuario en la base de datos// create
// 2. buscar al usuario que se quiere loguear por su email o otro campo// findField
// 3. buscar a un usuario por su id // findByPK
// 4. editar la info de un usuario
// 5 . eliminar a un usuario de la base de datos
const db = require("../database/models")

//CRUD

const path = require('path');
const fs = require("fs");
const { text } = require("express");
const pathfileName = path.join(__dirname, "../data/users.json")// esta es otra forma o sino poniendo dentro de cada metodo

const User = {
    fileName: pathfileName,
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"))
        
    },
    findAll: function () {
        /// es parecido al de arriba pero hace mucho mas sentido por el nombre y lo usamos asi 
        return this.getData()
    },

    generateId : function(){
        let allUsers = this.findAll()//obtengo primero a todos los usuarios

        let lastUser = allUsers.pop()
        if(lastUser){
            return lastUser.id + 1
        }else{
            return 1
        }
    },

    findById: function (id) {
        let allUsers = this.findAll()//obtengo primero a todos los usuarios
        let userFound = allUsers.find(oneUser => oneUser.id === parseInt(id))

        return userFound

    },
    findByField: function (field, text) {                      
        //   let emailFound = users.find(oneEmail => oneEmail.email===text)
        //   console.log("emailFound que está en UserCrud --->>>" + emailFound)
        //   return emailFound 
              
            
        // let allUsers = this.findAll()//obtengo primero a todos los usuarios
        // let userFound = allUsers.find(oneUser => 
        // oneUser[field] === text)                            
        // return userFound

        // este metodo para buscar por cualquier campo que yo quiera, como primer
        //parametro pasamos el campo ( id,fullname,email,etc) y como segundo parametro lo que
        // tiene que decir en ese campo.
        // si usamos una campo que tenga muchos usuarios iguales por ejemplo una categoria del estilo botas
        // este metodo devuelve solo el primero que encuentra por que es un find que devuelve uno solo

    },
    create: function (userData) {
        let allUsers = this.findAll()//obtengo primero a todos los usuarios
        let newUser = {
            id : this.generateId(),
            ...userData
        }

        
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName,JSON.stringify(allUsers,null, " "))
        return newUser

    },
    delete: function(id){
        let allUsers = this.findAll()//obtengo primero a todos los usuarios
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id)// devuelve array con todos menos el del id q viene
        fs.writeFileSync(this.fileName,JSON.stringify(finalUsers,null, " "))
        return true
    }
}

module.exports = User


// console.log("usuario",User.create({
    
//     "NombreYapellido": "Joel",
//     "Usuario": "JOeecasa",
//     "Email": "joecasa@gmail.com",
//     "FechaNacimiento": "4/11/2022",
//     "Domicilio1": "rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede",
//     "Domicilio2": "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum",
//     "Contraseña": "HDopWnYHR",
//     "ConfirmacionContraseña": "8ETyCSLXlz"
// }))

