window.addEventListener("DOMContentLoaded", function (event) {




    let form = document.querySelector(".form-create")

    
    
    
    let nombre = document.querySelector("#nombre-edit-prod");
    let liErrorNombreEditProd1 = document.querySelector("#liErrorNombreEditProd1")
    let liErrorNombreEditProd2 = document.querySelector("#liErrorNombreEditProd2")
    let iconoEditNombreOK = document.querySelector("#iconoEditNombreOK")
    let iconoEditNombreX = document.querySelector("#iconoEditNombreX")
    
    let description = document.querySelector("#descriptionEditProd");
    let liErrorDescripcionEditProd1 = document.querySelector("#liErrorDescripcionEditProd1")
    let liErrorDescripcionEditProd2 = document.querySelector("#liErrorDescripcionEditProd2")
    let iconoEditDescripcionOK = document.querySelector("#iconoEditDescripcionOK")
    let iconoEditDescripcionX = document.querySelector("#iconoEditDescripcionX")
    
    let precio = document.querySelector("#priceEditProd")
    let liErrorPrecioEditProd1 = document.querySelector("#liErrorPrecioEditProd1")
    let iconoEditPrecioOK = document.querySelector("#iconoEditPrecioOK")
    let iconoEditPrecioX = document.querySelector("#iconoEditPrecioX")
    
    let color = document.querySelector("#color-edit-prod");
    let liErrorEditColorProd1 = document.querySelector("#liErrorEditColorProd1")
    let liErrorEditColorProd2 = document.querySelector("#liErrorEditColorProd2")
    let iconoEditColorOK = document.querySelector("#iconoEditColorOK")
    let iconoEditColorX = document.querySelector("#iconoEditColorX")
    
    let img = document.querySelector("#img-edit-prod");
    let liErrorimgEditProd1 = document.querySelector("#liErrorimgEditProd1")
    
    let category = document.querySelector("#category-edit-prod");
    let liErrorCategoriaEditProd1 = document.querySelector("#liErrorCategoriaEditProd1")
    
    nombre.addEventListener("keyup", function (event) {
        
    if (nombre.value === "") {
        liErrorNombreEditProd1.classList.remove("none")
        liErrorNombreEditProd1.classList.add("show")
        liErrorNombreEditProd1.classList.add("errorText")
        nombre.classList.add("error")
        iconoEditNombreX.classList.add("fa-regular")
            iconoEditNombreX.classList.add("fa-circle-xmark")
            iconoEditNombreOK.classList.remove("fa-regular")
            iconoEditNombreOK.classList.remove("fa-circle-check")
            
        } else {
            liErrorNombreEditProd1.classList.add("none")
            nombre.classList.remove("error")
            nombre.classList.add("valid")
            iconoEditNombreX.classList.remove("fa-regular")
            iconoEditNombreX.classList.remove("fa-circle-xmark")
            
        }
        if (nombre.value.length < 5) {
            liErrorNombreEditProd2.classList.remove("none")
            liErrorNombreEditProd2.classList.add("show")
            liErrorNombreEditProd2.classList.add("errorText")
            nombre.classList.add("error")
            iconoEditNombreX.classList.add("fa-regular")
            iconoEditNombreX.classList.add("fa-circle-xmark")
            iconoEditNombreOK.classList.remove("fa-regular")
            iconoEditNombreOK.classList.remove("fa-circle-check")
            

        } else {
            liErrorNombreEditProd2.classList.add("none")
            nombre.classList.remove("error")
            nombre.classList.add("valid")
            iconoEditNombreX.classList.remove("fa-regular")
            iconoEditNombreX.classList.remove("fa-circle-xmark")
            iconoEditNombreOK.classList.add("fa-regular")
            iconoEditNombreOK.classList.add("fa-circle-check")

        }

    })

   

    description.addEventListener("keyup", function (event) {

        if (description.value === "") {
            liErrorDescripcionEditProd1.classList.remove("none")
            liErrorDescripcionEditProd1.classList.add("show")
            liErrorDescripcionEditProd1.classList.add("errorText")
            description.classList.add("error")
            iconoEditDescripcionX.classList.add("fa-regular")
            iconoEditDescripcionX.classList.add("fa-circle-xmark")
            iconoEditDescripcionOK.classList.remove("fa-regular")
            iconoEditDescripcionOK.classList.remove("fa-circle-check")
            

        } else {
            liErrorDescripcionEditProd1.classList.add("none")
            description.classList.remove("error")
            description.classList.add("valid")
            iconoEditDescripcionX.classList.remove("fa-regular")
            iconoEditDescripcionX.classList.remove("fa-circle-xmark")

        }
        if (description.value.length < 20) {
            liErrorDescripcionEditProd2.classList.remove("none")
            liErrorDescripcionEditProd2.classList.add("show")
            liErrorDescripcionEditProd2.classList.add("errorText")
            description.classList.add("error")
            iconoEditDescripcionX.classList.add("fa-regular")
            iconoEditDescripcionX.classList.add("fa-circle-xmark")
            iconoEditDescripcionOK.classList.remove("fa-regular")
            iconoEditDescripcionOK.classList.remove("fa-circle-check")
            
        } else {
            liErrorDescripcionEditProd2.classList.add("none")
            description.classList.remove("error")
            description.classList.add("valid")
            iconoEditDescripcionX.classList.remove("fa-regular")
            iconoEditDescripcionX.classList.remove("fa-circle-xmark")
            iconoEditDescripcionOK.classList.add("fa-regular")
            iconoEditDescripcionOK.classList.add("fa-circle-check")
            
        }
    })

    precio.addEventListener("keyup", function (event) {

        if (precio.value === "") {
            liErrorPrecioEditProd1.classList.remove("none")
            liErrorPrecioEditProd1.classList.add("show")
            liErrorPrecioEditProd1.classList.add("errorText")
            precio.classList.add("error")
            iconoEditPrecioX.classList.add("fa-regular")
            iconoEditPrecioX.classList.add("fa-circle-xmark")
            iconoEditPrecioOK.classList.remove("fa-regular")
            iconoEditPrecioOK.classList.remove("fa-circle-check")

        } else {
            liErrorPrecioEditProd1.classList.add("none")
            precio.classList.remove("error")
            precio.classList.add("valid")
            iconoEditPrecioX.classList.remove("fa-regular")
            iconoEditPrecioX.classList.remove("fa-circle-xmark")
            iconoEditPrecioOK.classList.add("fa-regular")
            iconoEditPrecioOK.classList.add("fa-circle-check")

        }
        
    })
    color.addEventListener("keyup", function (event) {

        if (color.value === "") {
            liErrorEditColorProd1.classList.remove("none")
            liErrorEditColorProd1.classList.add("show")
            liErrorEditColorProd1.classList.add("errorText")
            color.classList.add("error")
            iconoEditColorX.classList.add("fa-regular")
            iconoEditColorX.classList.add("fa-circle-xmark")
            iconoEditColorOK.classList.remove("fa-regular")
            iconoEditColorOK.classList.remove("fa-circle-check")

        } else {
            liErrorEditColorProd1.classList.add("none")
            color.classList.remove("error")
            color.classList.add("valid")
            iconoEditColorX.classList.remove("fa-regular")
            iconoEditColorX.classList.remove("fa-circle-xmark")
        }
        if (color.value.length < 3) {
            liErrorEditColorProd2.classList.remove("none")
            liErrorEditColorProd2.classList.add("show")
            liErrorEditColorProd2.classList.add("errorText")
            color.classList.add("error")
            iconoEditColorX.classList.add("fa-regular")
            iconoEditColorX.classList.add("fa-circle-xmark")
            iconoEditColorOK.classList.remove("fa-regular")
            iconoEditColorOK.classList.remove("fa-circle-check")

        } else {
            liErrorEditColorProd2.classList.add("none")
            color.classList.remove("error")
            color.classList.add("valid")
            iconoEditColorX.classList.remove("fa-regular")
            iconoEditColorX.classList.remove("fa-circle-xmark")
            iconoEditColorOK.classList.add("fa-regular")
            iconoEditColorOK.classList.add("fa-circle-check")

        }

    })
    category.addEventListener("change",function(event){
        if(category.value === ""){
            liErrorCategoriaEditProd1.classList.remove("none")
            liErrorCategoriaEditProd1.classList.add("show")
            liErrorCategoriaEditProd1.classList.add("errorText")
        } else {
            liErrorCategoriaEditProd1.classList.remove("show")
            liErrorCategoriaEditProd1.classList.add("none")
        }

    })
    img.addEventListener("change",function(event){
        if(img.value === ""){
            liErrorimgEditProd1.classList.remove("none")
            liErrorimgEditProd1.classList.add("show")
            liErrorimgEditProd1.classList.add("errorText")
        } else {
            liErrorimgEditProd1.classList.remove("show")
            liErrorimgEditProd1.classList.add("none")
        }

    })
    

    form.addEventListener("submit",function(event){
        
        if(nombre.value.length < 5){3
            event.preventDefault()
            liErrorNombreEditProd2.classList.remove("none")
            liErrorNombreEditProd2.classList.add("show")
            liErrorNombreEditProd2.classList.add("errorText")
            nombre.classList.add("error")
            iconoEditNombreX.classList.add("fa-regular")
            iconoEditNombreX.classList.add("fa-circle-xmark")
            iconoEditNombreOK.classList.remove("fa-regular")
            iconoEditNombreOK.classList.remove("fa-circle-check")
        }
        if(description.value.length < 20){3
            event.preventDefault()
            liErrorDescripcionEditProd2.classList.remove("none")
            liErrorDescripcionEditProd2.classList.add("show")
            liErrorDescripcionEditProd2.classList.add("errorText")
            description.classList.add("error")
            iconoEditDescripcionX.classList.add("fa-regular")
            iconoEditDescripcionX.classList.add("fa-circle-xmark")
            iconoEditDescripcionOK.classList.remove("fa-regular")
            iconoEditDescripcionOK.classList.remove("fa-circle-check")
        }
        if(precio.value === ""){
            event.preventDefault()
            liErrorPrecioEditProd1.classList.remove("none")
            liErrorPrecioEditProd1.classList.add("show")
            liErrorPrecioEditProd1.classList.add("errorText")
            precio.classList.add("error")
            iconoEditPrecioX.classList.add("fa-regular")
            iconoEditPrecioX.classList.add("fa-circle-xmark")
            iconoEditPrecioOK.classList.remove("fa-regular")
            iconoEditPrecioOK.classList.remove("fa-circle-check")
        }
        if(color.value.length < 3){
            event.preventDefault()
            liErrorEditColorProd1.classList.remove("none")
            liErrorEditColorProd1.classList.add("show")
            liErrorEditColorProd1.classList.add("errorText")
            color.classList.add("error")
            iconoEditColorX.classList.add("fa-regular")
            iconoEditColorX.classList.add("fa-circle-xmark")
            iconoEditColorOK.classList.remove("fa-regular")
            iconoEditColorOK.classList.remove("fa-circle-check")

        }
        
        

    })
})


