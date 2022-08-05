const req = require("express/lib/request")
const res = require("express/lib/response")
const path = require("path")
const fs = require("fs")
const { validationResult } = require('express-validator')
const { parse } = require("path")
const db = require("../database/models")




const controller = {

    Allproducts: (req, res) => {
         db.Product.findAll({
            include: [
                { association: "categorias" },
                { association: "ordenes" },
                
            ], where : {
                status : "Enabled"
            }
        })
         .then(function(productos){
            return res.render("products/productos", {
                title : "Productos",
                productos : productos
            })
         })
    },
    categoria: (req, res) => {
    
        let productInDb = db.Product.findAll({where : {
            category_id : req.params.categoria
        }})
            
        let categoriesInDb = db.Category.findByPk(req.params.categoria)
        
        Promise.all([categoriesInDb, productInDb])
            .then(function ([categoria, productos]) {
                res.render("products/categoria",{productos:productos,title : "categoria",categoria:categoria})
            })






    },


}

module.exports = controller