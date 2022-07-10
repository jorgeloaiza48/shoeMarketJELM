//const User = require ("../models/UserCrud") // traigo para poder buscar el usuario para usarlo para autologuearse
const db = require("../database/models/index")

function userLoggedMiddleware (req, res, next) {
    
    res.locals.isLogged = false
    let emailInCookie = function(){
        if(req.cookies.userEmail){
            return req.cookies.userEmail
        } else {
            return ""
        }


    };
    db.User.findOne({
        where:{email: emailInCookie() }
    }).then((user)=>{

        
    
    //let userFromCookie = User.findByField("email",emailInCookie)
    
     if(user){ //// si tengo un usuario en la cookie entonces lo paso a req.session
         req.session.userLogged = user
         
     }
    if (req.session.userLogged) {
         res.locals.isLogged = true
         
         res.locals.userLogged = req.session.userLogged
         console.log("usuario en sesion",req.session.userLogged);
         
         // para poder usar la session dentro de una vista lo tenemos q pasar como parametro del render
         // como aca no estamos pasando nada la pasamos a una variable local que se puede utilizar de manera global
         
     }
     
     
    })
    
     next()

}
module.exports = userLoggedMiddleware