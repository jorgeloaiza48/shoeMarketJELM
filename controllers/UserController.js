const req = require("express/lib/request")
const res = require("express/lib/response")
const path = require("path")
const fs = require("fs")
//const userCrud = require("../models/UserCrud")
const bcryptjs = require("bcryptjs")
const { validationResult } = require('express-validator')
const {body} = require('express-validator')
const { error } = require("console")
const Swal = require("sweetalert2")
const db = require("../database/models")
const { DATE } = require("sequelize")
const Op = require('Sequelize').Op


//let productsFilePath = path.join(__dirname, '../data/SHOEMARKET.json');
//let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//JSON a JS

const controller = {
    register: (req, res) => { 
        res.render("users/registro", { title: "Registro" }) 
},

    createUser: function (req, res) {
        // let usersFilePath = path.join(__dirname, '../data/users.json');
        // let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); //de JSON a JS
        let errors = validationResult(req)

       
        if (errors.errors.length > 0) {            
            return res.render("users/registro", { errors: errors.mapped(),
                oldData: req.body, 
                title: "Registro de usuario" 
            
            })//mapped convierte un array en un objeto literal
        } else { //else2
            // let userToProcess = userCrud.findByField(req.body.email) 
            // console.log("Valor de userToProcess----->>>" + userToProcess)
            //****************************************************************/
            db.User.findOrCreate({
                where: { [Op.or]: [{email:req.body.email},{document:req.body.documento}]},
                defaults:{
                    document:req.body.documento,
                    first_name:req.body.nombre,
                    last_name:req.body.apellido,
                    email:req.body.email,
                    password:bcryptjs.hashSync(req.body.pass, 10),
                    date_of_birth:req.body.fecha,
                    image: req.file.filename,
                    rol_id: 2,
                    adress: req.body.domicilio,
                    updated_at:Date.now(),
                    created_at: Date.now(),
                    status: "Activo"
                }
                
            })
                .then(([user,created]) => {
                                                                                       
            if(created != true && user.document == req.body.documento){
                return res.render("users/registro", { errors: {
                   
                    documento: {msg: "Ya hay un usuario registrado con este número de identificación."}
                   
				},
                    oldData:req.body, 
                    title: "Registro de usuario" 
                })
            }

            else if(created != true && user.email == req.body.email){
                return res.render("users/registro", { errors: {
                   email: { msg: "El Correo electronico ya se encuentra registrado." },
                   
                 },
                     oldData:req.body, 
                     title: "Registro de usuario" 
                 })
            }

                else{       //else1         
        //     let ultimoElemento = users.length - 1
        //     let idNuevo = users[ultimoElemento].id + 1
        //     let userForm = {
        //         id: idNuevo,
        //         nombre: req.body.nombre,
        //         apellido: req.body.apellido,
        //         email: req.body.email,
        //         fechaNacimiento: req.body.fecha,
        //         domicilio: req.body.domicilio,
        //         contraseña: bcryptjs.hashSync(req.body.pass, 10),
        //         image: req.file.filename,
        //         role : "Cliente",   
        //         estado: "Activo"                            
        //     }
        //     let NewUser = []
        //     let UsersJSON = fs.readFileSync(usersFilePath, 'utf-8')
        //     if (UsersJSON == "") {
        //         NewUser.push(userForm)
        //     }
        //     else {
        //         NewUser = JSON.parse(UsersJSON) //de JSON a JS
        //         NewUser.push(userForm)
        //     }
        //     fs.writeFileSync(usersFilePath, JSON.stringify(NewUser, null, "\t")) //de JS a JSON
        //     res.redirect("/user/login") 
                
        res.redirect("login")
                        
         }//else1
        })
      } //else2
    },

    login: (req, res) => { res.render('users/login', { title: "Login" }) },

    processLogin :(req,res) =>{
		const errors = validationResult(req)
        
		// let userToLogin = userCrud.findByField("email", req.body.email)
        //************************************************************************ */
       db.User.findOne({
            where:{email:req.body.email}
        }).then((userToLogin) => {
                     
        //************************************************************************ */
       
		if (userToLogin != null) {
			let isOkpassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            
            
           if (isOkpassword) {
            

				req.session.userLogged = userToLogin
                
                
            
                
                req.session.isAdmin = userToLogin.rol_id == 1
                
				if(req.body.record){
					res.cookie("userEmail", req.body.email, {maxAge : (1000 * 60)*2})
				}
                
				return res.redirect("/user/profile")
			} 
            else{//**
			res.render("users/login", {
				errors: {
					email: {
						msg: "Las credenciales son inválidas"
					}
				},old : req.body, title : " login"
			   }
               ) 
            }//**
		}
        else{
            res.render("users/login", {
                errors: {
                    email: {
                        msg: " No se encuentra ese email en nuestra base de datos"
                    }
                },old : req.body, title : " login"
            })
        }
    }) //then		

	},

    profile :   (req, res) => { 
        
		res.render("users/profile",{
		user : req.session.userLogged,title:"perfil"

	}) },
    
	logout : (req, res) => { 
		res.clearCookie("userEmail")
		req.session.destroy() 
	return res.redirect("/user/login")
	}

         
    
}

module.exports = controller