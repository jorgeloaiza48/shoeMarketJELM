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
                    let a = element.name
                    return {
                        [a] : element.productos.length
                    }
                });
                let b = countByCategory.reduce(function(target,key,index){
                    console.log(target,key,index)
                    target[i] = key
                    return target

                })
                
                console.log(b)
                let response = {
                    count: products.length,
                    countByCategory : b,
                    category: category,
                }
                res.json(response)
            })
            .catch(error => res.send(error))
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