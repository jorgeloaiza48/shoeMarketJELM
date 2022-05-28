//1. guardar al usuario en la base de datos// create
// 2. buscar al usuario que se quiere loguear por su email o otro campo// findField
// 3. buscar a un usuario por su id // findByPK
// 4. editar la info de un usuario
// 5 . eliminar a un usuario de la base de datos


//CRUD

const path = require('path');
const fs = require("fs");
const pathfileName = path.join(__dirname, "../data/SHOEMARKET.json")// esta es otra forma o sino poniendo dentro de cada metodo

const productCrud = {
    fileName: pathfileName,
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"))
        
    },
    findAll: function () {
        /// es parecido al de arriba pero hace mucho mas sentido por el nombre y lo usamos asi 
        return this.getData()
    },

    generateId : function(){
        let allProducts = this.findAll()//obtengo primero a todos los usuarios

        let lastProduct = allProducts.pop()
        if(lastProduct){
            return lastProduct.id + 1
        }else{
            return 1
        }
    },

    findById: function (id) {
        let allProducts = this.findAll()//obtengo primero a todos los usuarios
        let productFound = allProducts.find(oneProduct => oneProduct.id === parseInt(id))

        return productFound

    },
    findByField: function (field,text) {
        let allProducts = this.findAll()//obtengo primero a todos los usuarios
        let productFound = allProducts.find(oneProduct => 
            oneProduct[field] === text)
          

        return productFound
        // este metodo para buscar por cualquier campo que yo quiera, como primer
        //parametro pasamos el campo ( id,fullname,email,etc) y como segundo parametro lo que
        // tiene que decir en ese campo.
        // si usamos una campo que tenga muchos usuarios iguales por ejemplo una categoria del estilo botas
        // este metodo devuelve solo el primero que encuentra por que es un find que devuelve uno solo

    },
    create: function (productData) {
        let allProducts = this.findAll()//obtengo primero a todos los usuarios
        let newProduct = {
            id : this.generateId(),
            ...productData
        }

        
        allProducts.push(newProduct);
        fs.writeFileSync(this.fileName,JSON.stringify(allProducts,null, " "))
        return newProduct

    },
    delete: function(id){
        let allProducts = this.findAll()//obtengo primero a todos los usuarios
        let finalProducts = allProducts.filter(oneProduct => oneProduct.id !== id)// devuelve array con todos menos el del id q viene
        fs.writeFileSync(this.fileName,JSON.stringify(finalProducts,null, " "))
        return true
    },
edit:function (productData) {
    let allProducts = this.findAll()//obtengo primero a todos los usuarios
    
let editProduct = {
        
        ...productData
    }

    
    allProducts.push(editProduct);
    fs.writeFileSync(this.fileName,JSON.stringify(allProducts,null, " "))
    return editProduct

} 

}

module.exports = productCrud


