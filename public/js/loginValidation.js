window.addEventListener('load', function () {
  let email = document.querySelector("#email")
  let password = document.querySelector('#password')
  let recordame = document.querySelector("#record")
  let boton_enviar = document.querySelector('.button-login')
  let form = document.querySelector('.form-login')

  let passwordCheckOK = document.querySelector("#passwordCheckOK")
  let passwordCheckX = document.querySelector("#passwordCheckX")
  let emailCheckOK = document.querySelector("#emailCheckOK")
  let emailCheckX = document.querySelector("#emailCheckX")


  let form_login = document.querySelector(".form-login")

  // password.disabled = true
  // recordame.disabled = true
  // boton_enviar.disabled = true

  let liErrorDocumento1 = document.querySelector("#liErrorDocumento1")
  let liErrorDocumento2 = document.querySelector("#liErrorDocumento2")
  let liErrorDocumento3 = document.querySelector("#liErrorDocumento3")

  email.addEventListener("keyup", function (event) {
    if (email.value === "") {
      console.log(emailCheckOK)
      liErrorDocumento1.classList.remove("none")
      liErrorDocumento1.classList.add("show")
      liErrorDocumento1.classList.add("errorText")
      // liErrorDocumento2.classList.add("none")
      email.classList.add("error")
      emailCheckX.classList.add("fa-regular")
      emailCheckX.classList.add("fa-circle-xmark")
      emailCheckOK.classList.remove("fa-regular")
      emailCheckOK.classList.remove("fa-circle-check")

      // password.disabled = true
    }
    else if (!(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test(email.value)) {
      // password.disabled = true;
      liErrorDocumento1.classList.add("none")
      liErrorDocumento2.classList.remove("none")
      liErrorDocumento2.classList.add("show")
      liErrorDocumento2.classList.add("errorText")
      liErrorDocumento3.classList.remove("errorText")
      liErrorDocumento3.classList.add("none")
      email.classList.add("error")
      emailCheckX.classList.add("fa-regular")
      emailCheckX.classList.add("fa-circle-xmark")
      emailCheckOK.classList.remove("fa-regular")
      emailCheckOK.classList.remove("fa-circle-check")

    }
    else {
      // password.disabled = false;
      liErrorDocumento2.classList.add("none")
      emailCheckX.classList.remove("fa-regular")
      emailCheckX.classList.remove("fa-circle-xmark")
      emailCheckOK.classList.add("fa-regular")
      emailCheckOK.classList.add("fa-circle-check")
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
    if (password.value === "") {
      liErrorPassword1.classList.remove("none")
      liErrorPassword1.classList.add("show")
      liErrorPassword1.classList.add("errorText")
      liErrorPassword2.classList.add("none")
      password.classList.add("error")
      liErrorDocumento3.classList.remove("errorText")
      liErrorDocumento3.classList.add("none")
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
      liErrorPassword1.classList.remove("errorText")
      liErrorPassword2.classList.add("none")
      liErrorDocumento3.classList.remove("errorText")
      liErrorDocumento3.classList.add("none")
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
      liErrorPassword1.classList.add("errorText")
      liErrorPassword2.classList.add("none")
      password.classList.add("error")
    }
    else if (password.value != "" && email.value == "") {
      event.preventDefault()
      liErrorDocumento1.classList.remove("none")
      liErrorDocumento1.classList.add("show")
      liErrorDocumento1.classList.add("errorText")
      liErrorDocumento2.classList.add("none")
      email_check.classList.add("none")
      email.classList.add("error")
    }
    else if (password.value == "" && email.value == "") {
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
    else {
      liErrorDocumento3.classList.remove("errorText")
      liErrorDocumento3.classList.add("none")
    }
  })


})