const req = require("express/lib/request")
const res = require("express/lib/response")
const path = require("path")
const fs = require("fs")
const { validationResult } = require('express-validator')

let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS
let categories = ['Borcegos', 'Texanas', 'Guillerminas', 'Bucaneras', 'Gift card', 'Botas']
let sizes = ["35","36", "37", "38", "39", "40"]
let colores = ["Negro","Crema","Rojo","Blanco","Rosa"]




const controller = {
    index : (req,res) =>{
        res.render("admin/indexAdmin", {title: "Admin Index"})
    },
    userList :(req,res) =>{

    },
     
     adminProducts: (req, res) => {
        //para estos 3 no se puede usar const ya que mas abajo cuando reescribamos los json hay q volver a declarar las variables
        // y las variables declaradas con const no se pueden modificar
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS
        let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

        let botas = products.filter(function (product) {
            return product.category == "Botas";
        })
        let texanas = products.filter(function (product) {
            return product.category == "Texanas";
        })
        let bucaneras = products.filter(function (product) {
            return product.category == "Bucaneras";
        })
        let borcegos = products.filter(function (product) {
            return product.category == "Borcegos";
        })
        let guillerminas = products.filter(function (product) {
            return product.category == "Guillerminas";
        })
        let giftCard = products.filter(function (product) {
            return product.category == "Gift Card";
        })
        res.render("admin/adminProductos", {
            products: products,
            botas: botas,
            texanas: texanas,
            bucaneras: bucaneras,
            borcegos: borcegos,
            guillerminas: guillerminas,
            title: "Admin",
            giftCard: giftCard
        })
    },

    crearProducto: (req, res) => { res.render('admin/crearProducto', { title: "Crear Producto" }) },
    newproduct: (req, res) => {
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productJSON = fs.readFileSync(productsFilePath, 'utf-8')
        let ultimo = products.length - 1
        let idnuevo = products[ultimo].id + 1

        let prodForm = {
            id: idnuevo,
            name: req.body.name,
            price: Number(req.body.price),
            category: req.body.category,
            color: req.body.color,
            description: {
                Material: req.body.material,
                Alturabase: req.body.base,
                Alturataco: req.body.taco,
                Alturacana: req.body.cana,
                Colores: req.body.colores
            },
            image: req.file.filename,
            size: req.body.talle
        }


        let productoNuevo

        if (productJSON == "") {
            productoNuevo = ""
        } else {
            productoNuevo = JSON.parse(productJSON)
        }
        productoNuevo.push(prodForm)

        let nuevo = JSON.stringify(productoNuevo, null, "\t")
        fs.writeFileSync(productsFilePath, nuevo)

        res.redirect("/productos")
    },

    delete: (req, res) => {
		let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

		//let newList = products.find(product => product.id === parseInt(req.params.id));// se puede hacer asi tmb
		let newList = products.filter(product => product.id !== parseInt(req.params.id))
		fs.writeFileSync(productsFilePath, JSON.stringify(newList));
		products = newList
		res.redirect("/admin/productos")
	},
    editarProducto: (req, res) => {
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS
        let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

        let producto = products.find(product => product.id === parseInt(req.params.id))
        

        res.render('admin/editarProducto', {title: "Editar producto",producto: producto, categories: categories,sizes:sizes,colores:colores})
    },

    update: (req, res) => {
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS
        let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

        products.find(product => {
            if (product.id === parseInt(req.params.id)) {

                    product.name = req.body.name
                    product.price = Number(req.body.price)
                    product.category = req.body.category
                    product.color = req.body.color
                    product.description = {
                        Material: req.body.material,
                        Alturabase: req.body.base,
                        Alturataco: req.body.taco,
                        Alturacana: req.body.cana,
                        Colores: req.body.colores
                    }
                    // product.image = req.file.filename,
                    product.size = req.body.talle

                    if(req.file && product.image !== req.file.filename) {product.image = req.file.filename}
                    

            }
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, "\t")) //JS a JSON

        res.redirect("/admin/productos")

    },

}

module.exports = controller