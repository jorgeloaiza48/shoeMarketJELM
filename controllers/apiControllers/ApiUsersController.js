const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const fs = require('fs');

let userApiController = {

    list: function(req,res){

       
                                                   


        db.User.findAll({
            include: [
                { association: "roles" },
                
            ], where : {
                status : "Activo"
            }
        })                                             

        //Borramos los campos que no queremos mostrar
        .then(users => {
            users.map(element =>{
                       delete element.dataValues.document                       
                       delete element.dataValues.date_of_birth
                       delete element.dataValues.adress                   
                       delete element.dataValues.detail
                       delete element.dataValues.password
                       delete element.dataValues.rol_id
                       delete element.dataValues.updated_at
                       delete element.dataValues.created_at
                       element.dataValues.detail = `/api/users/${element.dataValues.id}`
                       element.dataValues.image =  `http://localhost:4000/img/user/${element.dataValues.image}`
                       
               })                       
             res.json ({
             count: users.length,
             users:users
             //status: 200                                                       
           })                       
        })                      
    },//list

    detail: function(req, res){
        db.User.findByPk(req.params.id)
                     
        .then(user =>{
                      
                delete user.dataValues.password
                delete user.dataValues.rol_id
                delete user.dataValues.updated_at
                delete user.dataValues.created_at
           
      
            return res.json ({
                data:user,    
                status:200,
                url: '/api/users/:id' 
            })
        })        

    }//detail


}//userApiController

module.exports = userApiController;