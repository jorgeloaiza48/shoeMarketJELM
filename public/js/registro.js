window.onload = function () {
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



// form.addEventListener("submit",function(event){
//      event.preventDefault()

// })



}