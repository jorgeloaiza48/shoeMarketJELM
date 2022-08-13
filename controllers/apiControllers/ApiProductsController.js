const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const ApiProductsController = {
    list: function (req, res) {
        let Allproducts = db.Product.findAll({
            include: [
                { association: "categorias" },
                
            ], where : {
                status : "Enabled"
            }
        })
        let categoriesInDb = db.Category.findAll({
            include: [
                { association: "productos" },
            ]
        })
        Promise.all([categoriesInDb, Allproducts])
            .then(function ([category, products]){
               
                let countByCategory = category.map(element => {
                    return ({ 
                        [element.name] : element.productos.length
                    })
                });


                let objectCategory= {}

                countByCategory.forEach(cate => {
                    Object.assign(objectCategory,cate)
                    
                });
               

                let productResponse = products.map(element => {
                    let obj = {
                        id : element.id,
                        name : element.name,
                        description : element.description,
                        categorias : element.categorias,
                        detail : `/api/products/detail/${element.id}`,
                        img: element.image
                    }
                    return obj
                });
                
                
            
                let response = {
                    countProduts: products.length,
                    countByCategory : objectCategory,
                    products: productResponse,
                }
                res.json(response)
            })
            .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id,
            {
                include: [
                    { association: "categorias" },
                    
                ], where : {
                    status : "Enabled"
                }
            })
            .then(product => {
                let respuesta = {
                    product : product,
                    relation : [product.categorias],
                    img : product.image

                }
                res.json(respuesta);
            });


    },
    create: (req, res) => {
        db.Record.
            create(
                {
                    concept: req.body.concept,
                    tipe: req.body.tipe,
                    created_at: Date.now(),
                    amount: req.body.amount,
                    category_id: req.body.category_id,

                }
            )
            .then(confirm => {
                let response;
                if (confirm) {
                    response = {
                        data: confirm
                    }
                }
                res.json(respuesta)
            })
            .catch(error => res.send(error))
    },
    update: (req, res) => {
        let recordId = req.params.id;
        db.Record.update(
            {
                concept: req.body.concept,
                tipe: req.body.tipe,
                updated_at: Date.now(),
                amount: req.body.amount,
                category_id: req.body.category_id,
            },
            {
                where: { id: recordId }
            })
            .then(confirm => {
                let response;
                if (confirm) {
                    response = {
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))

    }


}

module.exports = ApiProductsController