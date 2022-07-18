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


    nombre.addEventListener("change", function (event) {
        let liErrorNombre1 = document.querySelector("#liErrorNombre1")
        let liErrorNombre2 = document.querySelector("#liErrorNombre2")

        if (nombre.value === "") {
            liErrorNombre1.classList.remove("none")
            liErrorNombre1.classList.add("show")
            nombre.classList.add("error")
        } else {
            liErrorNombre1.classList.add("none")
            nombre.classList.remove("error")
            
        }
        if (nombre.value.length < 2) {
            liErrorNombre2.classList.remove("none")
            liErrorNombre2.classList.add("show")
            nombre.classList.add("error")
        } else {
            liErrorNombre2.classList.add("none")
            nombre.classList.remove("error")
          


        }

    })




}