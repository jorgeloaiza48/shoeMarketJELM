
window.addEventListener('load',function () {

    let form = document.querySelector(".form-Reg")
    let documento = document.querySelector("#documento");
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let email = document.querySelector("#email");
    let fecha = documento.querySelector("#fecha")
    let domicilio = document.querySelector("#domiclio");
    let pass = document.querySelector("#pass");
    let photo = document.querySelector("#photo");
    let sub_button = document.querySelector("#sub_button");
    let documentForm = document.forms[1]
    let errors = []
    let errorNombre = document.querySelector(".errorNombre")

    documento.addEventListener("keyup", function (event) {
        let liErrorDocumento1 = document.querySelector("#liErrorDocumento1")
        let liErrorDocumento2 = document.querySelector("#liErrorDocumento2")
        let liErrorDocumento3 = document.querySelector("#liErrorDocumento3")
        if (documento.value === "") {
            liErrorDocumento1.classList.remove("none")
            liErrorDocumento1.classList.add("show")
            liErrorDocumento1.classList.add("errorText")
            documento.classList.add("error")
        } else {
            liErrorDocumento1.classList.add("none")
            documento.classList.remove("error")  
        }
        if (documento.value.length < 5 || documento.value.length >= 10 && documento.value.length > 0) {
            liErrorDocumento2.classList.remove("none")
            liErrorDocumento2.classList.add("show")
            liErrorDocumento2.classList.add("errorText")
            documento.classList.add("error")
        } else {
            liErrorDocumento2.classList.add("none")
            documento.classList.remove("error")
        }
        if (isNaN(documento.value) === true) {
            liErrorDocumento3.classList.remove("none")
            liErrorDocumento3.classList.add("show")
            liErrorDocumento3.classList.add("errorText")
            documento.classList.add("error")
        } else {
            liErrorDocumento3.classList.add("none")
            documento.classList.remove("error")  
        }
    })

    nombre.addEventListener("change", function (event) {

    nombre.addEventListener("keyup", function (event) {
        let liErrorNombre1 = document.querySelector("#liErrorNombre1")
        let liErrorNombre2 = document.querySelector("#liErrorNombre2")

        if (nombre.value === "") {
            liErrorNombre1.classList.remove("none")
            liErrorNombre1.classList.add("show")
            liErrorNombre1.classList.add("errorText")
            nombre.classList.add("error")
        } else {
            liErrorNombre1.classList.add("none")
            nombre.classList.remove("error")

            nombre.classList.remove("error")  
        }
        if (nombre.value.length < 2) {
            liErrorNombre2.classList.remove("none")
            liErrorNombre2.classList.add("show")
            liErrorNombre2.classList.add("errorText")
            nombre.classList.add("error")
        } else {
            liErrorNombre2.classList.add("none")
            nombre.classList.remove("error")

        }
    })
    apellido.addEventListener("keyup", function (event) {
        let liErrorApellido1 = document.querySelector("#liErrorApellido1")
        let liErrorApellido2 = document.querySelector("#liErrorApellido2")
        if (apellido.value === "") {
            liErrorApellido1.classList.remove("none")
            liErrorApellido1.classList.add("show")
            liErrorApellido1.classList.add("errorText")
            apellido.classList.add("error")
        } else {
            liErrorApellido1.classList.add("none")
            apellido.classList.remove("error")  
        }
        if (apellido.value.length < 2) {
            liErrorApellido2.classList.remove("none")
            liErrorApellido2.classList.add("show")
            liErrorApellido2.classList.add("errorText")
            apellido.classList.add("error")
        } else {
            liErrorApellido2.classList.add("none")
            apellido.classList.remove("error")
        }
    })
       
})

    })


    // let documento = document.querySelector("#documento");
    // documento.addEventListener("blur", function (event) {
    //     if(documento.value ===""){
    //         alert("hola")
    //     }

    // })

   
    // window.addEventListener('load',function(){
     
    //   let documento = document.querySelector('#documento');
    //   let nombre = document.querySelector("#nombre");
    //   let apellido = document.querySelector("#apellido");
    //   let email = document.querySelector("#email");
    //   let fecha = document.querySelector("#fecha")
    //   let domicilio = document.querySelector("#domicilio");
    //   let pass = document.querySelector("#pass");
    //   let sub_button = document.querySelector("#sub_button");

    //   nombre.disabled = true;
    //   apellido.disabled = true;
    //   email.disabled = true;
    //   fecha.disabled = true;
    //   domicilio.disabled = true;
    //   pass.disabled = true;
    //   sub_button.disabled = true;
      

    //   documento.addEventListener('focus',function() {
        
    //     toastr.options = {
    //       "closeButton": false,
    //       "debug": false,
    //       "newestOnTop": false,
    //       "progressBar": false,
    //       "positionClass": "toast-top-full-width",
    //       "preventDuplicates": false,
    //       "onclick": null,
    //       "showDuration": "50",
    //       "hideDuration": "3000",
    //       "timeOut": "10000",
    //       "extendedTimeOut": "1000",
    //       "showEasing": "swing",
    //       "hideEasing": "linear",
    //       "showMethod": "fadeIn"
    //               }
    //       toastr.info("El campo Documento de identidad debe contener mínimo 2 números y máximo 10.");
    //     })
        
    //     documento.addEventListener("keyup", function (event) {
    //     if(documento.value.length >=2 && documento.value.length <= 10 ){
    //       nombre.disabled = false;}
    //       else{
    //         nombre.disabled = true;
    //         toastr.info("Recuerde que el campo Documento de identidad debe contener mínimo 2 números y máximo 10.");
    //       }

    //     })

    //     nombre.addEventListener('focus',function() {
    //       toastr.options = {
    //         "closeButton": false,
    //         "debug": false,
    //         "newestOnTop": false,
    //         "progressBar": false,
    //         "positionClass": "toast-top-full-width",
    //         "preventDuplicates": false,
    //         "onclick": null,
    //         "showDuration": "50",
    //         "hideDuration": "3000",
    //         "timeOut": "10000",
    //         "extendedTimeOut": "1000",
    //         "showEasing": "swing",
    //         "hideEasing": "linear",
    //         "showMethod": "fadeIn"
    //                 }
    //         toastr.info("El campo Nombre debe contener mínimo 2 letras y no puede contener números.");
    //     })

    //       nombre.addEventListener("keyup", function (event) {
    //         if(nombre.value.length >= 2 && !(/\d/.test(nombre.value)) ){
    //           apellido.disabled = false;}
    //           else{
    //             apellido.disabled = true;
    //             toastr.info("Recuerde que el campo Nombre debe contener mínimo 2 letras y no puede contener números.");
    //           }
    //       })

    //       apellido.addEventListener('focus',function() {
    //         toastr.options = {
    //           "closeButton": false,
    //           "debug": false,
    //           "newestOnTop": false,
    //           "progressBar": false,
    //           "positionClass": "toast-top-full-width",
    //           "preventDuplicates": false,
    //           "onclick": null,
    //           "showDuration": "50",
    //           "hideDuration": "3000",
    //           "timeOut": "10000",
    //           "extendedTimeOut": "1000",
    //           "showEasing": "swing",
    //           "hideEasing": "linear",
    //           "showMethod": "fadeIn"
    //                   }
    //           toastr.info("El campo apellido debe contener mínimo 2 letras y no puede contener números.");
    //       })

          
    //       apellido.addEventListener("keyup", function (event) {
    //         if(apellido.value.length >= 2 && !(/\d/.test(apellido.value))){
    //           email.disabled = false;}
    //           else{
    //             email.disabled = true;
    //             toastr.info("Recuerde que el campo apellido debe contener mínimo dos letras y no puede contener números.");
    //           }
    //       })
       
    //         email.addEventListener('focus',function() {
    //           toastr.options = {
    //             "closeButton": false,
    //             "debug": false,
    //             "newestOnTop": false,
    //             "progressBar": false,
    //             "positionClass": "toast-top-full-width",
    //             "preventDuplicates": false,
    //             "onclick": null,
    //             "showDuration": "50",
    //             "hideDuration": "3000",
    //             "timeOut": "10000",
    //             "extendedTimeOut": "1000",
    //             "showEasing": "swing",
    //             "hideEasing": "linear",
    //             "showMethod": "fadeIn"
    //                     }
    //             toastr.info("El campo email debe contener una dirección válida de correo electrónico.");
    //         })
          
    //       email.addEventListener("keyup", function (event) {
    //         if((/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test(email.value)){
    //           fecha.disabled = false;}
    //           else{
    //             fecha.disabled = true;
    //             toastr.info("El campo Correo electrónico debe contener una dirección válida. Ejemplo: usuario@gmail.com");
    //           }
    //       })

    //       fecha.addEventListener("change",function(){
    //         let fechaHoy = new Date()                   
    //         let = fecha_nacimiento = new Date(fecha.value)
    //         let edad = fechaHoy.getFullYear()- fecha_nacimiento.getFullYear()
    //         if(edad < 18){
    //           domicilio.disabled = true
    //           toastr.info("La edad no puede ser inferior a 18. Verifique la fecha ingresada.");
    //         }
    //         else{
    //           domicilio.disabled = false
    //         }            
            
    //       })

           
    //        domicilio.addEventListener('focus',function() {
        
    //         toastr.options = {
    //           "closeButton": false,
    //           "debug": false,
    //           "newestOnTop": false,
    //           "progressBar": false,
    //           "positionClass": "toast-top-full-width",
    //           "preventDuplicates": false,
    //           "onclick": null,
    //           "showDuration": "50",
    //           "hideDuration": "3000",
    //           "timeOut": "10000",
    //           "extendedTimeOut": "1000",
    //           "showEasing": "swing",
    //           "hideEasing": "linear",
    //           "showMethod": "fadeIn"
    //                   }
    //           toastr.info("El domicilio debe contener mínimo 10 caracteres");
    //         }) 

    //       domicilio.addEventListener("keyup",function(){
    //         if(domicilio.value.length >=10 ){
    //           pass.disabled = false
    //         }
    //         else{
    //           pass.disabled = true
    //           toastr.info("La dirección debe tener mínimo 10 caracteres.");
    //         }

    //       }) 

          
    //       pass.addEventListener('focus',function() {
        
    //         toastr.options = {
    //           "closeButton": false,
    //           "debug": false,
    //           "newestOnTop": false,
    //           "progressBar": false,
    //           "positionClass": "toast-top-full-width",
    //           "preventDuplicates": false,
    //           "onclick": null,
    //           "showDuration": "50",
    //           "hideDuration": "3000",
    //           "timeOut": "10000",
    //           "extendedTimeOut": "1000",
    //           "showEasing": "swing",
    //           "hideEasing": "linear",
    //           "showMethod": "fadeIn"
    //                   }
    //           toastr.info("La contraseña debe contener almenos una letra en minúscula, una en mayúscula, un número y un carácter especial como @ o #, y debe ser de almenos 8 caracteres.");
    //         }) 

    //       pass.addEventListener("keyup",function(){
    //         if(('?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}').test(pass.value)){
    //             sub_button.disabled = false
    //         }
    //         else{
              
    //           toastr.info("La contraeeña Debe tener almenos una letra en minúscula, una en mayúscula, un número y un carácter especial como @ o #, y debe ser de almenos 8 caracteres.")
    //         }
    //       })
    // })
