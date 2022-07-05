const req = require("express/lib/request")
const res = require("express/lib/response")
const path = require("path")
const fs = require("fs")
const { validationResult } = require('express-validator')
const { parse } = require("path")
const db = require("../database/models")
const Product = require("../database/models/Product")

//let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
//let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS



const controller = {

    Allproducts: (req, res) => {
         db.Product.findAll({
            include: [
                { association: "categorias" },
                { association: "productosTalles" },
                { association: "ordenes" },
                { association: "talles" }
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




        // //para estos 3 no se puede usar const ya que mas abajo cuando reescribamos los json hay q volver a declarar las variables
        // // y las variables declaradas con const no se pueden modificar
        // let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        // let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS
        // let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

        // let botas = products.filter(function (product) {
        //     return product.category == "Botas";
        // })
        // let texanas = products.filter(function (product) {
        //     return product.category == "Texanas";
        // })
        // let bucaneras = products.filter(function (product) {
        //     return product.category == "Bucaneras";
        // })
        // let borcegos = products.filter(function (product) {
        //     return product.category == "Borcegos";
        // })
        // let guillerminas = products.filter(function (product) {
        //     return product.category == "Guillerminas";
        // })
        // let giftCard = products.filter(function (product) {
        //     return product.category == "Gift Card";
        // })
        // res.render("products/productos", {
        //     products: products,
        //     botas: botas,
        //     texanas: texanas,
        //     bucaneras: bucaneras,
        //     borcegos: borcegos,
        //     guillerminas: guillerminas,
        //     title: "Productos",
        //     giftCard: giftCard
        // })
    },
    categoria: (req, res) => {
        // let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        // let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // let productJSON = fs.readFileSync(productsFilePath, 'utf-8')
        // let categoria = products.filter(cate => {
        //     return cate.category == req.params.categoria
        // })
        // res.render("products/categoria", { categoria: categoria, title: "categoria" })

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