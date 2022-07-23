


   
    window.addEventListener('load',function(){
     
      let documento = document.querySelector('#documento');
      let nombre = document.querySelector("#nombre");
      let apellido = document.querySelector("#apellido");
      let email = document.querySelector("#email");
      let fecha = document.querySelector("#fecha")
      let domicilio = document.querySelector("#domicilio");
      let pass = document.querySelector("#pass");
      let sub_button = document.querySelector("#sub_button");

      nombre.disabled = true;
      apellido.disabled = true;
      email.disabled = true;
      fecha.disabled = true;
      domicilio.disabled = true;
      pass.disabled = true;
      sub_button.disabled = true;
      

      documento.addEventListener('focus',function() {
        
        toastr.options = {
          "closeButton": false,
          "debug": false,
          "newestOnTop": false,
          "progressBar": false,
          "positionClass": "toast-top-full-width",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "50",
          "hideDuration": "3000",
          "timeOut": "10000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn"
                  }
          toastr.info("El campo Documento de identidad debe contener mínimo 2 números y máximo 10.");
        })
        
        documento.addEventListener("keyup", function (event) {
        if(documento.value.length >=2 && documento.value.length <= 10 ){
          nombre.disabled = false;}
          else{
            nombre.disabled = true;
            toastr.info("Recuerde que el campo Documento de identidad debe contener mínimo 2 números y máximo 10.");
          }

        })

        nombre.addEventListener('focus',function() {
          toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-full-width",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "50",
            "hideDuration": "3000",
            "timeOut": "10000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn"
                    }
            toastr.info("El campo Nombre debe contener mínimo 2 letras y no puede contener números.");
        })

          nombre.addEventListener("keyup", function (event) {
            if(nombre.value.length >= 2 && !(/\d/.test(nombre.value)) ){
              apellido.disabled = false;}
              else{
                apellido.disabled = true;
                toastr.info("Recuerde que el campo Nombre debe contener mínimo 2 letras y no puede contener números.");
              }
          })

          apellido.addEventListener('focus',function() {
            toastr.options = {
              "closeButton": false,
              "debug": false,
              "newestOnTop": false,
              "progressBar": false,
              "positionClass": "toast-top-full-width",
              "preventDuplicates": false,
              "onclick": null,
              "showDuration": "50",
              "hideDuration": "3000",
              "timeOut": "10000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn"
                      }
              toastr.info("El campo apellido debe contener mínimo 2 letras y no puede contener números.");
          })

          
          apellido.addEventListener("keyup", function (event) {
            if(apellido.value.length >= 2 && !(/\d/.test(apellido.value))){
              email.disabled = false;}
              else{
                email.disabled = true;
                toastr.info("Recuerde que el campo apellido debe contener mínimo dos letras y no puede contener números.");
              }
          })
       
            email.addEventListener('focus',function() {
              toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-full-width",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "50",
                "hideDuration": "3000",
                "timeOut": "10000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn"
                        }
                toastr.info("El campo email debe contener una dirección válida de correo electrónico.");
            })
          
          email.addEventListener("keyup", function (event) {
            if((/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test(email.value)){
              fecha.disabled = false;}
              else{
                fecha.disabled = true;
                toastr.info("El campo Correo electrónico debe contener una dirección válida. Ejemplo: usuario@gmail.com");
              }
          })

          fecha.addEventListener("change",function(){
            let fechaHoy = new Date()                   
            let = fecha_nacimiento = new Date(fecha.value)
            let edad = fechaHoy.getFullYear()- fecha_nacimiento.getFullYear()
            if(edad < 18){
              domicilio.disabled = true
              toastr.info("La edad no puede ser inferior a 18. Verifique la fecha ingresada.");
            }
            else{
              domicilio.disabled = false
            }            
            
          })

           
           domicilio.addEventListener('focus',function() {
        
            toastr.options = {
              "closeButton": false,
              "debug": false,
              "newestOnTop": false,
              "progressBar": false,
              "positionClass": "toast-top-full-width",
              "preventDuplicates": false,
              "onclick": null,
              "showDuration": "50",
              "hideDuration": "3000",
              "timeOut": "10000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn"
                      }
              toastr.info("El domicilio debe contener mínimo 10 caracteres");
            }) 

          domicilio.addEventListener("keyup",function(){
            if(domicilio.value.length >=10 ){
              pass.disabled = false
            }
            else{
              pass.disabled = true
              toastr.info("La dirección debe tener mínimo 10 caracteres.");
            }

          }) 

          
          pass.addEventListener('focus',function() {
        
            toastr.options = {
              "closeButton": false,
              "debug": false,
              "newestOnTop": false,
              "progressBar": false,
              "positionClass": "toast-top-full-width",
              "preventDuplicates": false,
              "onclick": null,
              "showDuration": "50",
              "hideDuration": "3000",
              "timeOut": "10000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn"
                      }
              toastr.info("La contraseña debe contener almenos una letra en minúscula, una en mayúscula, un número y un carácter especial como @ o #, y debe ser de almenos 8 caracteres.");
            }) 

          pass.addEventListener("keyup",function(){
            if(('?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}').test(pass.value)){
                sub_button.disabled = false
            }
            else{
              
              toastr.info("La contraeeña Debe tener almenos una letra en minúscula, una en mayúscula, un número y un carácter especial como @ o #, y debe ser de almenos 8 caracteres.")
            }
          })
    })
