window.addEventListener('DOMContentLoaded', function () {
  let email = document.querySelector("#email")
  let password = document.querySelector('#password')
  let recordame = document.querySelector("#record")
  let boton_enviar = document.querySelector('.button-login')
  let form = document.querySelector('.form-login')

  let passwordCheckOK = document.querySelector("#passwordCheckOK")
  let passwordCheckX = document.querySelector("#passwordCheckX")
  let emailCheckOK = document.querySelector("#emailCheckOK")
  let emailCheckX = document.querySelector("#emailCheckX")
  let iconoShowPassword = document.querySelector("#icono-showPassword")


  let form_login = document.querySelector(".form-login")

  // password.disabled = true
  // recordame.disabled = true
  // boton_enviar.disabled = true

  let liErrorEmail1 = document.querySelector("#liErrorEmail1")
  let liErrorEmail2 = document.querySelector("#liErrorEmail2")
  let liErrorEmail3 = document.querySelector("#liErrorEmail3")


  iconoShowPassword.addEventListener("click",function(event){
    if(password.type === "password"){
      password.type = "text"
    } else {
      password.type = "password"
    }

  })





  email.addEventListener("keyup", function (event) {
    if (email.value === "") {
      console.log(emailCheckOK)
      liErrorEmail1.classList.remove("none")
      liErrorEmail1.classList.add("show")
      liErrorEmail1.classList.add("errorText-login")
      // liErrorEmail2.classList.add("none")
      email.classList.add("error")
      emailCheckX.classList.add("fa-regular")
      emailCheckX.classList.add("fa-circle-xmark")
      emailCheckOK.classList.remove("fa-regular")
      emailCheckOK.classList.remove("fa-circle-check")

      // password.disabled = true
    }
    else if (!(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test(email.value)) {
      // password.disabled = true;
      liErrorEmail1.classList.add("none")
      liErrorEmail2.classList.remove("none")
      liErrorEmail2.classList.add("show")
      liErrorEmail2.classList.add("errorText-login2")
      liErrorEmail3.classList.remove("errorText-login")
      liErrorEmail3.classList.add("none")
      email.classList.add("error")
      emailCheckX.classList.add("fa-regular")
      emailCheckX.classList.add("fa-circle-xmark")
      emailCheckOK.classList.remove("fa-regular")
      emailCheckOK.classList.remove("fa-circle-check")

    }
    else {
      // password.disabled = false;
      liErrorEmail2.classList.add("none")
      emailCheckX.classList.remove("fa-regular")
      emailCheckX.classList.remove("fa-circle-xmark")
      emailCheckOK.classList.add("fa-regular")
      emailCheckOK.classList.add("fa-circle-check")
      email.classList.remove("error")
      email.classList.add("valid")
      liErrorEmail3.classList.remove("errorText-login")
      liErrorEmail3.classList.add("none")

      // toastr.info("El campo Correo electrónico debe contener una dirección válida. Ejemplo: usuario@gmail.com");

    }
  })


  let liErrorPassword1 = document.querySelector("#liErrorPassword1")
  let liErrorPassword2 = document.querySelector("#liErrorPassword2")
  password.addEventListener("keyup", function (event) {
    if (password.value === "") {
      liErrorPassword1.classList.remove("none")
      liErrorPassword1.classList.add("show")
      liErrorPassword1.classList.add("errorText-login")
      liErrorPassword2.classList.add("none")
      password.classList.add("error")
      liErrorEmail3.classList.remove("errorText-login")
      liErrorEmail3.classList.add("none")
      passwordCheckX.classList.add("fa-regular")
      passwordCheckX.classList.add("fa-circle-xmark")
      passwordCheckOK.classList.remove("fa-regular")
      passwordCheckOK.classList.remove("fa-circle-check")
      // recordame.disabled = true
      // boton_enviar.disabled = true                    
    }
    else {
      liErrorPassword1.classList.remove("show")
      liErrorPassword1.classList.add("none")
      liErrorPassword1.classList.remove("errorText-login")
      liErrorPassword2.classList.add("none")
      liErrorEmail3.classList.remove("errorText-login")
      liErrorEmail3.classList.add("none")
      password.classList.remove("error")
      password.classList.add("valid")
      passwordCheckX.classList.remove("fa-regular")
      passwordCheckX.classList.remove("fa-circle-xmark")
      passwordCheckOK.classList.add("fa-regular")
      passwordCheckOK.classList.add("fa-circle-check")
    }
  })

  form_login.addEventListener("submit", function (event) {
    if (password.value === "" && email.value != "") {
      event.preventDefault()
      liErrorPassword1.classList.remove("none")
      liErrorPassword1.classList.add("show")
      liErrorPassword1.classList.add("errorText-login")
      liErrorPassword2.classList.add("none")
      password.classList.add("error")
    }
    else if (password.value != "" && email.value == "") {
      event.preventDefault()
      liErrorEmail1.classList.remove("none")
      liErrorEmail1.classList.add("show")
      liErrorEmail1.classList.add("errorText-login")
      liErrorEmail2.classList.add("none")
      email_check.classList.add("none")
      email.classList.add("error")
    }
    else if (password.value == "" && email.value == "") {
      event.preventDefault()
      liErrorEmail3.classList.remove("none")
      liErrorEmail3.classList.add("show")
      liErrorEmail3.classList.add("errorText-login")
      liErrorEmail1.classList.remove("show")
      liErrorEmail1.classList.add("none")
      liErrorEmail2.classList.remove("show")
      liErrorEmail2.classList.add("none")
      liErrorPassword1.classList.remove("show")
      liErrorPassword1.classList.add("none")
    }
    else {
      liErrorEmail3.classList.remove("errorText-login")
      liErrorEmail3.classList.add("none")
    }
  })


})