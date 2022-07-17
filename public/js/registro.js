window.onload = function (){
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


// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log(document.forms)
//     ;
//     for (let i = 0; i < documentForm.elements.length; i++) {
//        if(documentForm.elements[i].value === ""){
//         documentForm.elements[i].classList.add("is-invalid")
//         errors.push(`El campo ${documentForm.elements[i].name} no debe estar vacio`)

//        } else {
//         documentForm.elements[i].classList.remove("is-invalid")
//        }
        
//     }


    // let ulErrores = document.querySelector(".errores")
    // console.log(errors)

    //         errors.forEach(function (error) {
    //             ulErrores.innerHTML += "<li>" + error + "<li>"

            // })
// })

nombre.addEventListener("blur",function(event){
    event.preventDefault()
    let errorsNombre = []
    if(nombre.value === ""){
        errorsNombre.push("No debe estar vacio")
    }
    if(nombre.value.length <= 2){
        errorsNombre.push("El nombre y apellido debe ser mayor a 2")
    } else {
        errorsNombre = []
    }
    errorsNombre.forEach(function(error){
        console.log(error)

        errorNombre.innerHTML += "<li>" + error + "</li>"
    })


})


    

}