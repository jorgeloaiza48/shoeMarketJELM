window.addEventListener('load',function () {
    let email = document.querySelector("#email")
    let password = document.querySelector('#password')
    let recordame = document.querySelector("#record")
    let boton_enviar = document.querySelector('.button-login')
    let form = document.querySelector('.form-login')
  
    password.disabled = true
    recordame.disabled = true
    boton_enviar.disabled = true

    let liErrorDocumento1 = document.querySelector("#liErrorDocumento1")
    let liErrorDocumento2 = document.querySelector("#liErrorDocumento2")

    email.addEventListener("keyup", function (event) {
                if(email.value === ""){
                    liErrorDocumento1.classList.remove("none")
                    liErrorDocumento1.classList.add("show")
                    liErrorDocumento1.classList.add("errorText")
                    liErrorDocumento2.classList.add("none")
                    email.classList.add("error")
                    password.disabled = true
                }
                else if(!(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test(email.value)){
                  password.disabled = true;
                  liErrorDocumento1.classList.add("none")
                  liErrorDocumento2.classList.remove("none")
                  liErrorDocumento2.classList.add("show")
                  liErrorDocumento2.classList.add("errorText")
                  email.classList.add("error")
                    
                }
                  else{
                    password.disabled = false;
                    liErrorDocumento2.classList.add("none")
                    // toastr.info("El campo Correo electrónico debe contener una dirección válida. Ejemplo: usuario@gmail.com");
                   
                        }
              })


    let liErrorPassword1 = document.querySelector("#liErrorPassword1")
    let liErrorPassword2 = document.querySelector("#liErrorPassword2")
    password.addEventListener("keyup", function (event) {
                if(password.value === ""){
                    liErrorPassword1.classList.remove("none")
                    liErrorPassword1.classList.add("show")
                    liErrorPassword1.classList.add("errorText")
                    liErrorPassword2.classList.add("none")
                    password.classList.add("error")
                    recordame.disabled = true
                    boton_enviar.disabled = true                    
                }
                else {
                  recordame.disabled = false
                  boton_enviar.disabled = false 
                }
              })

         


})