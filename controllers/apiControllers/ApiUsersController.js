const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

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
                       delete element.dataValues.password
                       delete element.dataValues.rol_id
                       delete element.dataValues.updated_at
                       delete element.dataValues.created_at
                       element.dataValues.detail = `/api/users/${element.dataValues.id}`
               })                       
           return res.json ({
            count: users.length,
            users: users,
            status: 200                                                       
           })
        })                      
    },//list

    detail: function(req,res){
        db.User.findByPk(req.params.id)
     
         // Inserto url de imagen en product
        //  user.dataValues.userImageUrl = userImageUrl;
        .then(user =>{
            // let userImageUrl = '/img/user/${user.dataValues.user.image}' //Almaceno la url de la imagen
            // user.dataValues.image = userImageUrl
           
                delete user.dataValues.password
                delete user.dataValues.rol_id
                delete user.dataValues.updated_at
                delete user.dataValues.created_at
           
      
            return res.json ({
                data:user,    
                status:200,
                // url: 'api/users/${user.id}' 
            })
        })
        // let respuesta = {            
        //     data:user,    
        //     status:200,
        //     url: 'api/users/${userImageUrl}'                        
        // }
      
    //    return res.json(respuesta)
    //     .catch(error => res.send(error))

    }//detail


}//userApiController

module.exports = userApiController;