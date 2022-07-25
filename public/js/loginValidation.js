window.addEventListener('load',function () {
    let email = document.querySelector("#email")
    let password = document.querySelector('#password')
    let recordame = document.querySelector("#record")
    let boton_enviar = document.querySelector('.button-login')
    let form = document.querySelector('.form-login')

    let iconoEmailOK = document.querySelector("#iconoEmailOK")
    let iconoEmailX = document.querySelector("#iconoEmailX")
    let input_email = document.querySelector("#email")

    let email_check = document.querySelector("#email-check")

    let form_login = document.querySelector(".form-login")
  
    // password.disabled = true
    // recordame.disabled = true
    // boton_enviar.disabled = true

    let liErrorDocumento1 = document.querySelector("#liErrorDocumento1")
    let liErrorDocumento2 = document.querySelector("#liErrorDocumento2")
    let liErrorDocumento3 = document.querySelector("#liErrorDocumento3")

    email.addEventListener("keyup", function (event) {
                if(email.value === ""){
                    liErrorDocumento1.classList.remove("none")
                    liErrorDocumento1.classList.add("show")
                    liErrorDocumento1.classList.add("errorText")
                    liErrorDocumento2.classList.add("none")  
                    email_check.classList.add("none")                                                                    
                    email.classList.add("error")
                    email_check.classList.remove("fa-circle-check") 
                    email_check.classList.remove("fa-solid") 
                    
                    // password.disabled = true
                }
                else if(!(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test(email.value)){
                  // password.disabled = true;
                  liErrorDocumento1.classList.add("none")
                  liErrorDocumento2.classList.remove("none")
                  liErrorDocumento2.classList.add("show")
                  liErrorDocumento2.classList.add("errorText")
                  liErrorDocumento3.classList.remove("errorText")
                  liErrorDocumento3.classList.add("none")
                  email.classList.add("error")
                  email_check.classList.remove("fa-circle-check") 
                  email_check.classList.remove("fa-solid") 
                    
                }
                  else{
                    // password.disabled = false;
                    liErrorDocumento2.classList.add("none")
                    email_check.classList.add("show")
                    email_check.classList.add("fa-circle-check")
                    email_check.classList.add("fa-solid") 
                    email.classList.remove("error")                                      
                    email.classList.add("valid")
                    liErrorDocumento3.classList.remove("errorText")
                    liErrorDocumento3.classList.add("none")
                    
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
                    liErrorDocumento3.classList.remove("errorText")
                    liErrorDocumento3.classList.add("none")
                    // recordame.disabled = true
                    // boton_enviar.disabled = true                    
                }
                else {
                  liErrorPassword1.classList.remove("show")
                  liErrorPassword1.classList.add("none")
                  liErrorPassword1.classList.remove("errorText")
                  liErrorPassword2.classList.add("none")
                  liErrorDocumento3.classList.remove("errorText")
                  liErrorDocumento3.classList.add("none")
                  password.classList.remove("error")
                  password.classList.add("valid")
                }
              })

    form_login.addEventListener("submit", function (event) {
                if(password.value === "" && email.value != ""){
                  event.preventDefault()
                  liErrorPassword1.classList.remove("none")
                  liErrorPassword1.classList.add("show")
                  liErrorPassword1.classList.add("errorText")
                  liErrorPassword2.classList.add("none")
                  password.classList.add("error")
                }
                else if(password.value != "" && email.value == ""){
                  event.preventDefault()
                  liErrorDocumento1.classList.remove("none")
                  liErrorDocumento1.classList.add("show")
                  liErrorDocumento1.classList.add("errorText")
                  liErrorDocumento2.classList.add("none")  
                  email_check.classList.add("none")                                                                    
                  email.classList.add("error")
                }
                else if(password.value == "" && email.value == ""){
                  event.preventDefault()
                  liErrorDocumento3.classList.remove("none")
                  liErrorDocumento3.classList.add("show")
                  liErrorDocumento3.classList.add("errorText")
                  liErrorDocumento1.classList.remove("show")
                  liErrorDocumento1.classList.add("none")
                  liErrorDocumento2.classList.remove("show")
                  liErrorDocumento2.classList.add("none")
                  liErrorPassword1.classList.remove("show")
                  liErrorPassword1.classList.add("none")
                }
                else{
                  liErrorDocumento3.classList.remove("errorText")
                  liErrorDocumento3.classList.add("none")
                }
              })


})