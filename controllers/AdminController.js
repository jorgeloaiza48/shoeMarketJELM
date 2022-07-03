const req = require("express/lib/request")
const res = require("express/lib/response")
const path = require("path")
const fs = require("fs")
const { validationResult } = require('express-validator')
const productCrud = require("../models/ProductCrud")
const { title } = require("process")
const db = require("../database/models/index")
const Product = require("../database/models/Product")



let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS
let categories = ['Borcegos', 'Texanas', 'Guillerminas', 'Bucaneras', 'Gift card', 'Botas']
let sizes = ["35", "36", "37", "38", "39", "40"]
let colores = ["Negro", "Crema", "Rojo", "Blanco", "Rosa"]
let roles = ["admin", "cliente", "vendedor","invitado"]
let estados = ["Activo", "Inactivo"]

let usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));//JSON a JS


const controller = {
    index: (req, res) => {
        res.render("admin/indexAdmin", { title: "Admin Index" })
    },
    userList: (req, res) => {        
            db.User.findAll({
                include: [
                    { association: "roles" },
                    { association: "Order" }
                    
                ]}
            )
                .then(users => {
                    console.log(users)
                   return res.render('admin/listaUsuarios.ejs', {users,title: "Listado de usuarios"})
                })
        // let usersJSON = fs.readFileSync(productsFilePath, 'utf-8')
        // res.render("admin/listaUsuarios", { title: "Edición de usuario", users: users })        
    },


    adminProducts: (req, res) => {
        //para estos 3 no se puede usar const ya que mas abajo cuando reescribamos los json hay q volver a declarar las variables
        // y las variables declaradas con const no se pueden modificar
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
        // res.render("admin/adminProductos", {
        //     products: products,
        //     botas: botas,
        //     texanas: texanas,
        //     bucaneras: bucaneras,
        //     borcegos: borcegos,
        //     guillerminas: guillerminas,
        //     title: "Admin",
        //     giftCard: giftCard
        // })
        db.Product.findAll({
            include: [
                { association: "categorias" },
                { association: "productosTalles" },
                { association: "ordenes" },
                { association: "talles" }
            ]
        })
            .then(products => {



                return res.render("admin/adminProductos", { products: products, title: "AdminProducts" })
            })

    },

    crearProducto: (req, res) => {
        db.Category.findAll({
            include: [
                { association: "productos" },
            ]
        })
            .then(categorias => {

                return res.render('admin/crearProducto', { title: "Crear Producto", categories: categorias, sizes: sizes, colores: colores })
            })

        // res.render('admin/crearProducto', { title: "Crear Producto", categories: categories, sizes: sizes, colores: colores }) 

    },

    newproduct: (req, res) => {
        const errors = validationResult(req)
        let nombre = function () {
            if (req.body && req.body.nombre) {
                return req.body.nombre
            } else {
                return ""
            }
        }
        let img = function () {
            if (req.file) { return req.file.filename }
        }
        let newProduct = {
            name: req.body.nombre,
            description: req.body.description,
            category_id: req.body.category,
            price: req.body.price,
            color: req.body.color,
            status: "Enabled",
            image: img()
        }

        let categories = db.Category.findAll()
        let sizes = db.Size.findAll()
        let productInDb = db.Product.findAll({ where: { name: nombre() } })
        Promise.all([categories, sizes, productInDb])
            .then(function ([categorias, talles, productoInDb]) {
                if (errors.errors.length > 0) {
                    return res.render("admin/crearProducto", {
                        errors: errors.mapped(),
                        old: req.body,
                        title: "Crear Producto",
                        categories: categorias, sizes: talles, colores: colores
                    })
                }
                if (productoInDb) {
                    return res.render("admin/crearProducto", {
                        old: req.body,
                        title: "Crear Producto",
                        categories: categorias, sizes: talles, colores: colores,
                        errors: { nombre: { msg: "no se puede crear 2 productos con el mismo nombre" } }
                    })

                }

            })
            


        // db.Product.create({ newProduct })
        //     .then(() => {
        //         return res.redirect("/admin/lista/productos")
        //     })







        // db.Product.findAll({
        //          where : { name : "Lara Negro"}
        // })
        // .then(product=>{
        //    let productInDb2 = product
        //    console.log(product)
        //    let productInDb = productCrud.findByField("name", req.body.name)
        //    if (productInDb) {
        //     return res.render("admin/crearProducto", {
        //         errors: {
        //             nombre: {
        //                 msg: "no se puede crear 2 productos con el mismo nombre"
        //             }
        //         },
        //         old: req.body,
        //         title: "Crear Producto",
        //         categories: categories, sizes: sizes, colores: colores

        //     })
        // }


        // })
        // let productInDb = productCrud.findByField("name", "LONDON NEGRO")
        //    if (productInDb) {
        //     return res.render("admin/crearProducto", {
        //         errors: {
        //             nombre: {
        //                 msg: "no se puede crear 2 productos con el mismo nombre"
        //             }
        //         },
        //         old: req.body,
        //         title: "Crear Producto",
        //         categories: categories, sizes: sizes, colores: colores

        //     })
        // }
        // let productToCreate = {
        //     name: req.body.nombre,
        //     price: Number(req.body.price),
        //     category: req.body.category,
        //     color: req.body.color,
        //     description: {
        //         Material: req.body.material,
        //         Alturabase: req.body.base,
        //         Alturataco: req.body.taco,
        //         Alturacana: req.body.cana,
        //         Colores: req.body.colores
        //     },
        //     image: req.file.filename,
        //     size: req.body.size

        // }

        // let productCreated = productCrud.create(productToCreate)



    },

    deleteProduct: (req, res) => {
        // let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        // let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

        // //let newList = products.find(product => product.id === parseInt(req.params.id));// se puede hacer asi tmb
        // let newList = products.filter(product => product.id !== parseInt(req.params.id))
        // fs.writeFileSync(productsFilePath, JSON.stringify(newList));
        // products = newList
        // res.redirect("/admin/lista/productos")

        db.Product.update({
            status: "Disabled"
        }, {
            where: { id: req.params.id }
        })
            .then(() => {
                return res.redirect("/admin/lista/productos")
            })



    },
    editarProducto: (req, res) => {
        // let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        // let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS
        // let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

        // let producto = products.find(product => product.id === parseInt(req.params.id))


        // res.render('admin/editarProducto', { title: "Editar producto", producto: producto, categories: categories, sizes: sizes, colores: colores })

        let categoriesInDb = db.Category.findAll()
        let productInDb = db.Product.findByPk(req.params.id, {
            include: [
                { association: "categorias" },
                { association: "productosTalles" },
                { association: "ordenes" },
                { association: "talles" }
            ]
        })
        Promise.all([categoriesInDb, productInDb])
            .then(function ([categorias, producto]) {

                return res.render('admin/editarProducto', { title: "Crear Producto", producto: producto, categories: categorias, sizes: sizes, colores: colores })

            })
        // res.render('admin/crearProducto', { title: "Crear Producto", categories: categories, sizes: sizes, colores: colores }) 


    },

    update: (req, res) => {
        // let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
        // let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS
        // let productJSON = fs.readFileSync(productsFilePath, 'utf-8')

        // products.find(product => {
        //     if (product.id === parseInt(req.params.id)) {

        //         product.name = req.body.name
        //         product.price = Number(req.body.price)
        //         product.category = req.body.category
        //         product.color = req.body.color
        //         product.description = {
        //             Material: req.body.material,
        //             Alturabase: req.body.base,
        //             Alturataco: req.body.taco,
        //             Alturacana: req.body.cana,
        //             Colores: req.body.colores
        //         }
        //         // product.image = req.file.filename,
        //         product.size = req.body.talle


        //         if (req.file && product.image !== req.file.filename) { product.image = req.file.filename }

        //     }
        // })
        // fs.writeFileSync(productsFilePath, JSON.stringify(products, null, "\t")) //JS a JSON
        // res.redirect("/admin/lista/productos")
        let img = function () {
            if (req.file) { return req.file.filename }
        }
        let newProduct = {
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category,
            price: req.body.price,
            color: req.body.color,
            status: req.body.status,
            image: img(),
            status: req.body.status

        }

        db.Product.update(newProduct, {
            where: { id: req.params.id }
        })
            .then(() => {
                return res.redirect("/admin/lista/productos")
            })


    },
    userEdit: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(function(usuario){res.render("users/editUsuario", { title: "Editar usuario", usuario:usuario,estados:estados,roles})})
        
        //  let usuario = users.find(usuario => usuario.id === parseInt(req.params.id))
        // res.render("users/editUsuario", { title: "Editar usuario", usuario: usuario, rols: rols, estados: estados })
    },

    userUpdate: (req, res) => {
        // let usersFilePath = path.join(__dirname, '../data/users.json');
        // let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));//JSON a JS
        // users.find(user => {
        //     if (user.id === parseInt(req.params.id)) {
        //         user.nombre = req.body.Nombre
        //         user.apellido = req.body.apellido
        //         user.email = req.body.email
        //         user.fechaNacimiento = req.body.fecha
        //         user.domicilio = req.body.domicilio
        //         user.estado = req.body.estado
        //         user.role = req.body.rol

        //         if (req.file && user.image !== req.file.filename) { user.image = req.file.filename }

        //     }
        // })
        // fs.writeFileSync(usersFilePath, JSON.stringify(users, null, "\t")) //JS a JSON
       
        db.User.update({         
            document : 123456,
            first_name:req.body.Nombre,
            last_name:req.body.apellido,
            email:req.body.email,
            // password:req.body.pass,
            date_of_birth:req.body.fecha,
            // image: req.file.filename,
            // rol_id:1,
            image : req.file.filename,
            adress : req.body.domicilio,
            updated_at : Date.now()
            // created_at: Date.now(),
            // Status: "Activo"
            // if (req.file && user.image !== req.file.filename) { user.image = req.file.filename }
            // console.log(user)
        },{
            where:{id:req.params.id}
         })
         
         .then(()=> {
            return res.redirect('/user/login')})            
        .catch(error => res.send(error))       
              
    },

    userSoftDelete: (req, res) => {
        let usersFilePath = path.join(__dirname, '../data/users.json');
        let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); //de JSON a JS
        //let newList = products.find(product => product.id === parseInt(req.params.id));// se puede hacer asi tmb
        // let newList = users.filter(user => user.id !== parseInt(req.params.id))
        // let userDelete = users.find(user => user.id === parseInt(req.params.id))
        users.forEach(function (user) {
            if (user.id === parseInt(req.params.id)) {
                user.estado = "Inactivo"
            }
        });
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.redirect("/admin/lista/usuarios")
    },
    list: (req, res) => {
        db.Product.findAll({
            include: [
                { association: "categorias" },
                { association: "lineas" },
                { association: "productosTalles" },
                { association: "ordenes" },

                { association: "talles" }
            ],
            where: { name: "Lara Negro" }


        })
            .then(function (products) {
                //return res.json(products)
                return res.render("prueba", { products: products, title: "prueba" })
            })
            .catch(function (err) {
                console.log(err)
            })

    }

}

module.exports = controller

