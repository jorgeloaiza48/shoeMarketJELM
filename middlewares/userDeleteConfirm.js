const res = require('express/lib/response')
const Swal = require('sweetalert2')
confirm = require('confirm')
alert = require('alert')


const userDeleteConfirm = function(req,res,next){
    
     let mensaje = confirm("Hola")
    if(mensaje == true){
        alert("Hiciste click en Si")
        next()
    }

    // if(3>2){
    // next()}
     else{
        // res.render("../views/admin/listaUsuarios", { title: "Edición de usuario", users: users })
        res.redirect("/admin/lista/usuarios")
    }
}


module.exports = userDeleteConfirm


