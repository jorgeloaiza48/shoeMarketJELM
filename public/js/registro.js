  
    window.addEventListener('load',function(){
     
      let documento = document.querySelector('#documento');
      let nombre = document.querySelector("#nombre");
      let apellido = document.querySelector("#apellido");
      let email = document.querySelector("#email");
      let fecha = document.querySelector("#fecha")
      let domicilio = document.querySelector("#domicilio");
      let pass = document.querySelector("#pass");
      let sub_button = document.querySelector("#sub_button");
      let file = document.querySelector("#file")
      let form = document.querySelector(".form-Reg")

      nombre.disabled = true;
      apellido.disabled = true;
      email.disabled = true;
      fecha.disabled = true;
      domicilio.disabled = true;
      pass.disabled = true;
      // sub_button.disabled = true;
      sub_button.style.visibility = "hidden"
      file.disabled = true
      form.reset()

      let liErrorDocumento1 = document.querySelector("#liErrorDocumento1")
      let liErrorDocumento2 = document.querySelector("#liErrorDocumento2")
      
            
      let liErrorNombre1 = document.querySelector("#liErrorNombre1")
      let liErrorNombre2 = document.querySelector("#liErrorNombre2")
      let liErrorNombre3 = document.querySelector("#liErrorNombre3")

      let liErrorApellido1 = document.querySelector("#liErrorApellido1")
      let liErrorApellido2 = document.querySelector("#liErrorApellido2")
      let liErrorApellido3 = document.querySelector("#liErrorApellido3")

      let liErrorEmail1 = document.querySelector("#liErrorEmail1")
      let liErrorEmail2 = document.querySelector("#liErrorEmail2")

      let liErrorFecha1 = document.querySelector("#liErrorFecha1")
      let liErrorFecha2 = document.querySelector("#liErrorFecha2")
      let liErrorFecha3 = document.querySelector("#liErrorFecha3")

      let liErrorDomicilio1 = document.querySelector("#liErrorDomicilio1")
      let liErrorDomicilio2 = document.querySelector("#liErrorDomicilio2")

      let liErrorPassword1 = document.querySelector("#liErrorPassword1")
      let liErrorPassword2 = document.querySelector("#liErrorPassword2")

      let liErrorFile1 = document.querySelector("#liErrorFile1")
     
      let documento_check = document.querySelector("#documento-check")
      let nombre_check = document.querySelector("#nombre-check")
      let apellido_check = document.querySelector("#apellido-check")
      let email_check = document.querySelector("#email-check")
      let fecha_check = document.querySelector("#fecha-check")
      let domicilio_check = document.querySelector("#domicilio-check")
      let password_check = document.querySelector("#password-check")
      let file_check = document.querySelector("#file-check")
      
      

    documento.addEventListener("input", function (event) {
      this.value = this.value.replace(/[^\d]/g, '');//permite solo números
      
           
    documento.addEventListener("keyup", function (event) {
        if(documento.value === "" ){
          liErrorDocumento1.classList.remove("none")
          liErrorDocumento1.classList.add("show")
          liErrorDocumento2.classList.remove("show")
          liErrorDocumento2.classList.add("none")
          documento_check.classList.remove("fa-circle-check")
          documento_check.classList.remove("fa-regular") 
          documento_check.classList.add("show")
          documento_check.classList.add("fa-circle-xmark")
          documento_check.classList.add("fa-regular") 
         
        }
                  
        else if(documento.value.length < 5 || documento.value.length > 10){ 
            liErrorDocumento2.classList.remove("none")
            liErrorDocumento2.classList.add("show")
            liErrorDocumento1.classList.remove("show")
            liErrorDocumento1.classList.add("none")  
            documento_check.classList.add("show")
            documento_check.classList.add("fa-circle-xmark")
            documento_check.classList.add("fa-regular")                 
            nombre.disabled = true;  
            documento.classList.remove("valid")                                      
            documento.classList.add("error")                 
        }
                             
          else{
            nombre.disabled = false;
            liErrorDocumento2.classList.remove("show")
            liErrorDocumento2.classList.add("none")
            documento.classList.remove("error")                                      
            documento.classList.add("valid")
            documento_check.classList.add("show")
            documento_check.classList.remove("fa-circle-xmark")
            documento_check.classList.remove("fa-regular")   
            documento_check.classList.add("fa-circle-check")
            documento_check.classList.add("fa-regular") 
            // toastr.info("Recuerde que el campo Documento de identidad debe contener mínimo 2 números y máximo 10.");
          }
        })          
      })             
          nombre.addEventListener("keyup", function (event) {
            if(nombre.value === ""){
                liErrorNombre1.classList.remove("none")
                liErrorNombre1.classList.add("show") 
                liErrorNombre2.classList.remove("show")
                liErrorNombre2.classList.add("none")     
                liErrorNombre3.classList.remove("show")
                liErrorNombre3.classList.add("none")    
                nombre_check.classList.remove("fa-circle-check")
                nombre_check.classList.remove("fa-regular") 
                nombre_check.classList.add("show")
                nombre_check.classList.add("fa-circle-xmark")
                nombre_check.classList.add("fa-regular")                      
                apellido.disabled = true;                   
            }
            else if(nombre.value.length < 2 && /\d/.test(nombre.value) || nombre.value.length < 2 && /[°¡¿ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(nombre.value)){
                liErrorNombre1.classList.remove("show")
                liErrorNombre1.classList.add("none")  
                liErrorNombre2.classList.remove("show")
                liErrorNombre2.classList.add("none")
                liErrorNombre3.classList.remove("none")
                liErrorNombre3.classList.add("show")  
                nombre_check.classList.remove("fa-circle-check")
                nombre_check.classList.remove("fa-regular") 
                nombre_check.classList.add("show")
                nombre_check.classList.add("fa-circle-xmark")
                nombre_check.classList.add("fa-regular") 
                apellido.disabled = true;  
                nombre.classList.remove("valid")                                      
                nombre.classList.add("error")            
            }
            else if(nombre.value.length >= 2 && /\d/.test(nombre.value) || nombre.value.length >= 2 && /[°¡¿`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(nombre.value)){
              apellido.disabled = true;
              liErrorNombre1.classList.remove("show")
              liErrorNombre1.classList.add("none")  
              liErrorNombre2.classList.remove("show")
              liErrorNombre2.classList.add("none")  
              liErrorNombre3.classList.remove("none")
              liErrorNombre3.classList.add("show")  
              nombre.classList.remove("valid")                                      
              nombre.classList.add("error") 
              nombre_check.classList.remove("fa-circle-check")
              nombre_check.classList.remove("fa-regular") 
              nombre_check.classList.add("show")
              nombre_check.classList.add("fa-circle-xmark")
              nombre_check.classList.add("fa-regular") 
            }
            else if(nombre.value.length < 2){
              liErrorNombre1.classList.remove("show")
              liErrorNombre1.classList.add("none")  
              liErrorNombre2.classList.remove("none")
              liErrorNombre2.classList.add("show")
              liErrorNombre3.classList.remove("show")
              liErrorNombre3.classList.add("none") 
              nombre.classList.remove("valid")                                      
              nombre.classList.add("error") 
              nombre.classList.remove("show")
              nombre_check.classList.remove("fa-circle-check")
              nombre_check.classList.remove("fa-regular") 
              nombre_check.classList.add("show")
              nombre_check.classList.add("fa-circle-xmark")
              nombre_check.classList.add("fa-regular") 
              
            }
            else{
              apellido.disabled = false;
              liErrorNombre1.classList.remove("show")
              liErrorNombre1.classList.add("none")  
              liErrorNombre2.classList.remove("show")
              liErrorNombre2.classList.add("none")
              liErrorNombre3.classList.remove("show")
              liErrorNombre3.classList.add("none")  
              nombre.classList.remove("error")                                      
              nombre.classList.add("valid")
              nombre_check.classList.add("show")
              nombre_check.classList.remove("fa-circle-xmark")
              nombre_check.classList.remove("fa-regular")   
              nombre_check.classList.add("fa-circle-check")
              nombre_check.classList.add("fa-regular") 
              

                // toastr.info("Recuerde que el campo Nombre debe contener mínimo 2 letras y no puede contener números.");
              }
          })

          apellido.addEventListener("keyup", function (event) {
            if(apellido.value === ""){
                liErrorApellido1.classList.remove("none")
                liErrorApellido1.classList.add("show") 
                liErrorApellido2.classList.remove("show")
                liErrorApellido2.classList.add("none")     
                liErrorApellido3.classList.remove("show")
                liErrorApellido3.classList.add("none")                         
                email.disabled = true;   
                apellido.classList.remove("valid")                                      
                apellido.classList.add("error")  
                apellido_check.classList.remove("fa-circle-check")
                apellido_check.classList.remove("fa-regular") 
                apellido_check.classList.add("show")
                apellido_check.classList.add("fa-circle-xmark")
                apellido_check.classList.add("fa-regular")                       
            }
            else if(apellido.value.length < 2 && /\d/.test(apellido.value) || apellido.value.length < 2 && /[°¡¿`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(apellido.value)){
                liErrorApellido1.classList.remove("show")
                liErrorApellido1.classList.add("none")  
                liErrorApellido2.classList.remove("show")
                liErrorApellido2.classList.add("none")
                liErrorApellido3.classList.remove("none")
                liErrorApellido3.classList.add("show")  
                email.disabled = true;     
                apellido.classList.remove("valid")                                      
                apellido.classList.add("error")  
                apellido_check.classList.remove("fa-circle-check")
                apellido_check.classList.remove("fa-regular") 
                apellido_check.classList.add("show")
                apellido_check.classList.add("fa-circle-xmark")
                apellido_check.classList.add("fa-regular")  
                
            }
            else if(apellido.value.length >= 2 && /\d/.test(apellido.value) || apellido.value.length >= 2 && /[°¡¿`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(apellido.value)){
              email.disabled = true;
              liErrorApellido1.classList.remove("show")
              liErrorApellido1.classList.add("none")  
              liErrorApellido2.classList.remove("show")
              liErrorApellido2.classList.add("none")  
              liErrorApellido3.classList.remove("none")
              liErrorApellido3.classList.add("show")  
              apellido.classList.remove("valid")                                      
              apellido.classList.add("error") 
              apellido_check.classList.remove("fa-circle-check")
              apellido_check.classList.remove("fa-regular") 
              apellido_check.classList.add("show")
              apellido_check.classList.add("fa-circle-xmark")
              apellido_check.classList.add("fa-regular")  
              
            }
            else if(apellido.value.length < 2){
              email.disabled = true;
              liErrorApellido1.classList.remove("show")
              liErrorApellido1.classList.add("none")  
              liErrorApellido2.classList.remove("none")
              liErrorApellido2.classList.add("show")
              liErrorApellido3.classList.remove("show")
              liErrorApellido3.classList.add("none") 
              apellido.classList.remove("valid")                                      
              apellido.classList.add("error") 
              apellido_check.classList.remove("fa-circle-check")
              apellido_check.classList.remove("fa-regular") 
              apellido_check.classList.add("show")
              apellido_check.classList.add("fa-circle-xmark")
              apellido_check.classList.add("fa-regular")    
             
            }
            else{
              email.disabled = false;
              liErrorApellido1.classList.remove("show")
              liErrorApellido1.classList.add("none")  
              liErrorApellido2.classList.remove("show")
              liErrorApellido2.classList.add("none")
              liErrorApellido3.classList.remove("show")
              liErrorApellido3.classList.add("none")  
              apellido.classList.remove("error")                                      
              apellido.classList.add("valid")
              apellido_check.classList.add("show")
              apellido_check.classList.remove("fa-circle-xmark")
              apellido_check.classList.remove("fa-regular")   
              apellido_check.classList.add("fa-circle-check")
              apellido_check.classList.add("fa-regular") 

                // toastr.info("Recuerde que el campo Nombre debe contener mínimo 2 letras y no puede contener números.");
              }
          })                              
          email.addEventListener("keyup", function (event) {
            if(email.value === ""){
              liErrorEmail1.classList.remove("none")
              liErrorEmail1.classList.add("show")
              liErrorEmail2.classList.remove("show")
              liErrorEmail2.classList.add("none")
              fecha.disabled = true;
              email.classList.remove("valid")                                      
              email.classList.add("error") 
              email_check.classList.remove("fa-circle-check")
              email_check.classList.remove("fa-regular") 
              email_check.classList.add("show")
              email_check.classList.add("fa-circle-xmark")
              email_check.classList.add("fa-regular")   
            }
            else if(!(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test(email.value)){
              fecha.disabled = true;
              liErrorEmail1.classList.remove("show")
              liErrorEmail1.classList.add("none")
              liErrorEmail2.classList.remove("none")
              liErrorEmail2.classList.add("show")   
              email.classList.remove("valid")                                      
              email.classList.add("error")  
              email_check.classList.remove("fa-circle-check")
              email_check.classList.remove("fa-regular") 
              email_check.classList.add("show")
              email_check.classList.add("fa-circle-xmark")
              email_check.classList.add("fa-regular")           
            }
            else{
                liErrorEmail1.classList.remove("show")
                liErrorEmail1.classList.add("none")
                liErrorEmail2.classList.remove("show")
                liErrorEmail2.classList.add("none")             
                fecha.disabled = false;
                email.classList.remove("error")                                      
                email.classList.add("valid") 
                email_check.classList.remove("none")
                email_check.classList.add("show")
                email_check.classList.remove("fa-circle-xmark")
                email_check.classList.remove("fa-regular")  
                email_check.classList.add("fa-circle-check")
                email_check.classList.add("fa-regular") 
               
              }
                // toastr.info("El campo Correo electrónico debe contener una dirección válida. Ejemplo: usuario@gmail.com");
              
          })

          fecha.addEventListener("change",function(){
            let fechaHoy = new Date()  
            let = fecha_nacimiento = new Date(fecha.value)
            let dia = fecha_nacimiento.getDate()    
            let mes = fecha_nacimiento.getMonth()+1                    
            let edad = fechaHoy.getFullYear()- fecha_nacimiento.getFullYear()

            if(fecha.value === ""){
              domicilio.disabled = true
              liErrorFecha2.classList.remove("none")
              liErrorFecha2.classList.add("show")
              liErrorFecha2.classList.remove("show")
              liErrorFecha2.classList.add("none")
              fecha.classList.remove("valid")                                      
              fecha.classList.add("error") 
              fecha_check.classList.remove("none")
              fecha_check.classList.add("show")                                                      
              fecha_check.classList.remove("fa-circle-check")
              fecha_check.classList.remove("fa-regular")               
              fecha_check.classList.add("fa-circle-xmark")
              fecha_check.classList.add("fa-regular")    
            }
           
           else if(edad < 18){
              domicilio.disabled = true
              liErrorFecha1.classList.remove("none")
              liErrorFecha1.classList.add("show")
              liErrorFecha2.classList.remove("show")
              liErrorFecha2.classList.add("none")
              fecha.classList.remove("valid")                                      
              fecha.classList.add("error") 
              fecha_check.classList.remove("none")
              fecha_check.classList.add("show")                                                      
              fecha_check.classList.remove("fa-circle-check")
              fecha_check.classList.remove("fa-regular")               
              fecha_check.classList.add("fa-circle-xmark")
              fecha_check.classList.add("fa-regular")    
            //   toastr.info("La edad no puede ser inferior a 18. Verifique la fecha ingresada.");
            }
            else{
              domicilio.disabled = false
              liErrorFecha1.classList.remove("show")
              liErrorFecha1.classList.add("none")
              liErrorFecha2.classList.remove("show")
              liErrorFecha2.classList.add("none")
              fecha.classList.remove("error")                                      
              fecha.classList.add("valid") 
              email.classList.remove("error")                                      
              email.classList.add("valid") 
              fecha_check.classList.remove("none")
              fecha_check.classList.add("show")
              fecha_check.classList.remove("fa-circle-xmark")
              fecha_check.classList.remove("fa-regular")  
              fecha_check.classList.add("fa-circle-check")
              fecha_check.classList.add("fa-regular") 
            }            
            
          })

          fecha.addEventListener("keyup",function(){
            let fechaHoy = new Date()                               
            let = fecha_nacimiento = new Date(fecha.value)
            let dia = fecha.value.getDate()    
            let mes = fecha_nacimiento.getMonth()+1     
            let edad = fechaHoy.getFullYear()- fecha_nacimiento.getFullYear()
           if(edad < 18){
              domicilio.disabled = true
              liErrorFecha1.classList.remove("none")
              liErrorFecha1.classList.add("show")
              liErrorFecha2.classList.remove("show")
              liErrorFecha2.classList.add("none")
              fecha.classList.remove("valid")                                      
              fecha.classList.add("fecha") 
              fecha_check.classList.remove("none")
              fecha_check.classList.add("show")                                                      
              fecha_check.classList.remove("fa-circle-check")
              fecha_check.classList.remove("fa-regular")               
              fecha_check.classList.add("fa-circle-xmark")
              fecha_check.classList.add("fa-regular") 
              
            }
            
            else{
              domicilio.disabled = false
              liErrorFecha1.classList.remove("show")
              liErrorFecha1.classList.add("none")
              liErrorFecha2.classList.remove("show")
              liErrorFecha2.classList.add("none")
              fecha.classList.remove("error")                                      
              fecha.classList.add("valid") 
              fecha_check.classList.remove("none")
              fecha_check.classList.add("show")
              fecha_check.classList.remove("fa-circle-xmark")
              fecha_check.classList.remove("fa-regular")  
              fecha_check.classList.add("fa-circle-check")
              fecha_check.classList.add("fa-regular") 
            }            
            
          })
                   
          domicilio.addEventListener("keyup",function(){
            if(domicilio.value === ""){
              pass.disabled = true
              liErrorDomicilio1.classList.remove("none")
              liErrorDomicilio1.classList.add("show")
              liErrorDomicilio2.classList.remove("show")
              liErrorDomicilio2.classList.add("none")              
              domicilio.classList.remove("valid")                                      
              domicilio.classList.add("error") 
              domicilio_check.classList.remove("fa-circle-check")
              domicilio_check.classList.remove("fa-regular") 
              domicilio_check.classList.add("show")
              domicilio_check.classList.add("fa-circle-xmark")
              domicilio_check.classList.add("fa-regular")   
            }
            else if(domicilio.value.length < 10 ){
              pass.disabled = true
              liErrorDomicilio1.classList.remove("show")
              liErrorDomicilio1.classList.add("none")
              liErrorDomicilio2.classList.remove("none")
              liErrorDomicilio2.classList.add("show")
              domicilio.classList.remove("valid")                                      
              domicilio.classList.add("error")
              domicilio_check.classList.remove("fa-circle-check")
              domicilio_check.classList.remove("fa-regular") 
              domicilio_check.classList.add("show")
              domicilio_check.classList.add("fa-circle-xmark")
              domicilio_check.classList.add("fa-regular")   
            }
            else{
              pass.disabled = false
              liErrorDomicilio2.classList.remove("show")
              liErrorDomicilio2.classList.add("none")
              domicilio.classList.remove("error")                                      
              domicilio.classList.add("valid")
              domicilio_check.classList.remove("none")
              domicilio_check.classList.add("show")
              domicilio_check.classList.add("fa-circle-check")
              domicilio_check.classList.add("fa-regular")               
              domicilio_check.classList.remove("fa-circle-xmark")
              
              }

          }) 
       
          pass.addEventListener("keyup",function(){
            if(pass.value === ""){
              liErrorPassword1.classList.remove("none")
              liErrorPassword1.classList.add("show")
              liErrorPassword2.classList.remove("show")
              liErrorPassword2.classList.add("none")
              file.disabled = true
              pass.classList.remove("valid")                                      
              pass.classList.add("error")
              password_check.classList.remove("fa-circle-check")
              password_check.classList.remove("fa-regular") 
              password_check.classList.add("show")
              password_check.classList.add("fa-circle-xmark")
              password_check.classList.add("fa-regular") 
            }
            else if(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(pass.value)){
                sub_button.disabled = false
                liErrorPassword1.classList.remove("show")
                liErrorPassword1.classList.add("none")
                liErrorPassword2.classList.remove("show")
                liErrorPassword2.classList.add("none")
                file.disabled = false
                pass.classList.remove("error")                                      
                pass.classList.add("valid")
                password_check.classList.remove("none")
                password_check.classList.add("show")
                password_check.classList.remove("fa-circle-xmark")
                password_check.classList.remove("fa-regular")               
                password_check.classList.add("fa-circle-check")
                password_check.classList.add("fa-regular") 
                }
            else{
              // sub_button.disabled = true
              liErrorPassword1.classList.remove("show")
              liErrorPassword1.classList.add("none")
              liErrorPassword2.classList.remove("none")
              liErrorPassword2.classList.add("show")
              file.disabled = true
              pass.classList.remove("valid")                                      
              pass.classList.add("error")
              password_check.classList.remove("none")
              password_check.classList.add("show")
              password_check.classList.remove("fa-circle-check")
              password_check.classList.remove("fa-regular")               
              password_check.classList.add("fa-circle-xmark")
              password_check.classList.add("fa-regular")               
              
            //   toastr.info("La contraeeña Debe tener almenos una letra en minúscula, una en mayúscula, un número y un carácter especial como @ o #, y debe ser de almenos 8 caracteres.")
            }
          })

          file.addEventListener("change",function(){
            let extension = file.value.split(".").pop() //captura la extensión del archivo seleccionado
            if(extension != "jpg" && extension != "jpeg" && extension != "png" && extension != "gif" ){
              liErrorFile1.classList.remove("none")
              liErrorFile1.classList.add("show")
              // sub_button.disabled = true
              sub_button.style.visibility = "hidden"
              file.classList.remove("valid")                                      
              file.classList.add("error")
              file_check.classList.remove("none")
              file_check.classList.add("show")
              file_check.classList.remove("fa-circle-check")
              file_check.classList.remove("fa-regular")               
              file_check.classList.add("fa-circle-xmark")
              file_check.classList.add("fa-regular")      
            }
            else{
              liErrorFile1.classList.remove("show")
              liErrorFile1.classList.add("none")
              // sub_button.disabled = false
              sub_button.style.visibility = "visible"
              file.classList.remove("error")                                      
              file.classList.add("valid")
              file_check.classList.remove("none")
              file_check.classList.add("show")
              file_check.classList.remove("fa-regular")               
              file_check.classList.remove("fa-circle-xmark")
              file_check.classList.add("fa-circle-check")              
              file_check.classList.add("fa-regular")      
            }
          })

          file.addEventListener("click",function(){
            liErrorFile1.classList.remove("show")
            liErrorFile1.classList.add("none")
          })
          

    })
