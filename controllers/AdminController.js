const req = require("express/lib/request")
const res = require("express/lib/response")
const path = require("path")
const fs = require("fs")
const { validationResult } = require('express-validator')
const productCrud = require("../models/ProductCrud")
const { title } = require("process")


let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS
let categories = ['Borcegos', 'Texanas', 'Guillerminas', 'Bucaneras', 'Gift card', 'Botas']
let sizes = ["35", "36", "37", "38", "39", "40"]
let colores = ["Negro", "Crema", "Rojo", "Blanco", "Rosa"]

let usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));//JSON a JS


const controller = {
    index: (req, res) => {
        res.render("admin/indexAdmin", { title: "Admin Index" })
    },
    userList: (req, res) => {
        let usersJSON = fs.readFileSync(productsFilePath, 'utf-8')
        res.render("admin/listaUsuarios", { title: "Edición de usuario", users: users })

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

    crearProducto: (req, res) => { res.render('admin/crearProducto', { title: "Crear Producto", categories: categories, sizes: sizes, colores: colores }) },

    newproduct: (req, res) => {
        const errors = validationResult(req)
       
       console.log(req.body)
        if (errors.errors.length > 0) {
            return res.render("admin/crearProducto", {
                errors: errors.mapped(),
                old: req.body,
                title: "Crear Producto",
                categories: categories, sizes: sizes, colores: colores
            })
        }


        let productInDb = productCrud.findByField("name", req.body.name)

        if (productInDb) {
            return res.render("admin/crearProducto", {
                errors: {
                    nombre: {
                        msg: "no se puede crear 2 productos con el mismo nombre"
                    }
                },
                old: req.body,
                title: "Crear Producto"
                
            })
        }

        let productToCreate = {
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
            size: req.body.size

        }
       
        let productCreated = productCrud.create(productToCreate)


        res.redirect("/admin/lista/productos")

    },

    deleteProduct: (req, res) => {
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

        //let newList = products.find(product => product.id === parseInt(req.params.id));// se puede hacer asi tmb
        let newList = products.filter(product => product.id !== parseInt(req.params.id))
        fs.writeFileSync(productsFilePath, JSON.stringify(newList));
        products = newList
        res.redirect("/admin/lista/productos")
    },
    editarProducto: (req, res) => {
        let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS
        let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

        let producto = products.find(product => product.id === parseInt(req.params.id))


        res.render('admin/editarProducto', { title: "Editar producto", producto: producto, categories: categories, sizes: sizes, colores: colores })
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

                if (req.file && product.image !== req.file.filename) { product.image = req.file.filename }
                
            }
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, "\t")) //JS a JSON
        res.redirect("/admin/lista/productos")

    },
    userEdit: (req, res) => {
        let usuario = users.find(usuario => usuario.id === parseInt(req.params.id))
        res.render("users/editUsuario", { title: "Editar usuario", usuario: usuario })
    },

    userUpdate: (req, res) => {
        let usersFilePath = path.join(__dirname, '../data/users.json');
        let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));//JSON a JS
        users.find(user => {
            if (user.id === parseInt(req.params.id)) {
                user.NombreYapellido = req.body.Nombre
                user.Email = req.body.email
                user.FechaNacimiento = req.body.fecha
                user.Domicilio = req.body.domicilio

                if (req.file && user.image !== req.file.filename) { user.image = req.file.filename }
                
            }
        })
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, "\t")) //JS a JSON
        res.redirect("/user/login")
    },

    userDelete: (req, res) => {
        let usersFilePath = path.join(__dirname, '../data/users.json');
        let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); //de JSON a JS
        //let newList = products.find(product => product.id === parseInt(req.params.id));// se puede hacer asi tmb
        let newList = users.filter(user => user.id !== parseInt(req.params.id))
        fs.writeFileSync(usersFilePath, JSON.stringify(newList));                
        res.redirect("/admin/lista/usuarios")
    },

}

module.exports = controller

