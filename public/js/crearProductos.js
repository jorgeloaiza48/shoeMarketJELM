window.addEventListener("load", function (event) {




    let form = document.querySelector(".form-create")




    let nombre = document.querySelector("#nombre-create-prod");
    let liErrorNombreProd1 = document.querySelector("#liErrorNombreProd1")
    let liErrorNombreProd2 = document.querySelector("#liErrorNombreProd2")
    let iconoNombreOK = document.querySelector("#iconoNombreOK")
    let iconoNombreX = document.querySelector("#iconoNombreX")

    let description = document.querySelector("#description");
    let liErrorDescripcionProd1 = document.querySelector("#liErrorDescripcionProd1")
    let liErrorDescripcionProd2 = document.querySelector("#liErrorDescripcionProd2")
    let iconoDescripcionOK = document.querySelector("#iconoDescripcionOK")
    let iconoDescripcionX = document.querySelector("#iconoDescripcionX")

    let precio = document.querySelector("#price")
    let liErrorPrecioProd1 = document.querySelector("#liErrorPrecioProd1")
    let iconoPrecioOK = document.querySelector("#iconoPrecioOK")
    let iconoPrecioX = document.querySelector("#iconoPrecioX")

    let color = document.querySelector("#color-create-prod");
    let liErrorColorProd1 = document.querySelector("#liErrorColorProd1")
    let liErrorColorProd2 = document.querySelector("#liErrorColorProd2")
    let iconoColorOK = document.querySelector("#iconoColorOK")
    let iconoColorX = document.querySelector("#iconoColorX")

    let img = document.querySelector("#img-create-prod");
    let liErrorimgProd1 = document.querySelector("#liErrorimgProd1")

    let category = document.querySelector("#category-create-prod");
    let liErrorCategoriaProd1 = document.querySelector("#liErrorCategoriaProd1")

    nombre.addEventListener("keyup", function (event) {

        if (nombre.value === "") {
            liErrorNombreProd1.classList.remove("none")
            liErrorNombreProd1.classList.add("show")
            liErrorNombreProd1.classList.add("errorText")
            nombre.classList.add("error")
            iconoNombreX.classList.add("fa-regular")
            iconoNombreX.classList.add("fa-circle-xmark")
            iconoNombreOK.classList.remove("fa-regular")
            iconoNombreOK.classList.remove("fa-circle-check")

        } else {
            liErrorNombreProd1.classList.add("none")
            nombre.classList.remove("error")
            nombre.classList.add("valid")
            iconoNombreX.classList.remove("fa-regular")
            iconoNombreX.classList.remove("fa-circle-xmark")

        }
        if (nombre.value.length < 5) {
            liErrorNombreProd2.classList.remove("none")
            liErrorNombreProd2.classList.add("show")
            liErrorNombreProd2.classList.add("errorText")
            nombre.classList.add("error")
            iconoNombreX.classList.add("fa-regular")
            iconoNombreX.classList.add("fa-circle-xmark")
            iconoNombreOK.classList.remove("fa-regular")
            iconoNombreOK.classList.remove("fa-circle-check")


        } else {
            liErrorNombreProd2.classList.add("none")
            nombre.classList.remove("error")
            nombre.classList.add("valid")
            iconoNombreX.classList.remove("fa-regular")
            iconoNombreX.classList.remove("fa-circle-xmark")
            iconoNombreOK.classList.add("fa-regular")
            iconoNombreOK.classList.add("fa-circle-check")

        }

    })



    description.addEventListener("keyup", function (event) {

        if (description.value === "") {
            liErrorDescripcionProd1.classList.remove("none")
            liErrorDescripcionProd1.classList.add("show")
            liErrorDescripcionProd1.classList.add("errorText")
            description.classList.add("error")
            iconoDescripcionX.classList.add("fa-regular")
            iconoDescripcionX.classList.add("fa-circle-xmark")
            iconoDescripcionOK.classList.remove("fa-regular")
            iconoDescripcionOK.classList.remove("fa-circle-check")
            errores.push("error")

        } else {
            liErrorDescripcionProd1.classList.add("none")
            description.classList.remove("error")
            description.classList.add("valid")
            iconoDescripcionX.classList.remove("fa-regular")
            iconoDescripcionX.classList.remove("fa-circle-xmark")

        }
        if (description.value.length < 20) {
            liErrorDescripcionProd2.classList.remove("none")
            liErrorDescripcionProd2.classList.add("show")
            liErrorDescripcionProd2.classList.add("errorText")
            description.classList.add("error")
            iconoDescripcionX.classList.add("fa-regular")
            iconoDescripcionX.classList.add("fa-circle-xmark")
            iconoDescripcionOK.classList.remove("fa-regular")
            iconoDescripcionOK.classList.remove("fa-circle-check")

        } else {
            liErrorDescripcionProd2.classList.add("none")
            description.classList.remove("error")
            description.classList.add("valid")
            iconoDescripcionX.classList.remove("fa-regular")
            iconoDescripcionX.classList.remove("fa-circle-xmark")
            iconoDescripcionOK.classList.add("fa-regular")
            iconoDescripcionOK.classList.add("fa-circle-check")

        }
    })

    precio.addEventListener("keyup", function (event) {

        if (precio.value === "") {
            liErrorPrecioProd1.classList.remove("none")
            liErrorPrecioProd1.classList.add("show")
            liErrorPrecioProd1.classList.add("errorText")
            precio.classList.add("error")
            iconoPrecioX.classList.add("fa-regular")
            iconoPrecioX.classList.add("fa-circle-xmark")
            iconoPrecioOK.classList.remove("fa-regular")
            iconoPrecioOK.classList.remove("fa-circle-check")

        } else {
            liErrorPrecioProd1.classList.add("none")
            precio.classList.remove("error")
            precio.classList.add("valid")
            iconoPrecioX.classList.remove("fa-regular")
            iconoPrecioX.classList.remove("fa-circle-xmark")
            iconoPrecioOK.classList.add("fa-regular")
            iconoPrecioOK.classList.add("fa-circle-check")

        }

    })
    color.addEventListener("keyup", function (event) {

        if (color.value === "") {
            liErrorColorProd1.classList.remove("none")
            liErrorColorProd1.classList.add("show")
            liErrorColorProd1.classList.add("errorText")
            color.classList.add("error")
            iconoColorX.classList.add("fa-regular")
            iconoColorX.classList.add("fa-circle-xmark")
            iconoColorOK.classList.remove("fa-regular")
            iconoColorOK.classList.remove("fa-circle-check")

        } else {
            liErrorColorProd1.classList.add("none")
            color.classList.remove("error")
            color.classList.add("valid")
            iconoColorX.classList.remove("fa-regular")
            iconoColorX.classList.remove("fa-circle-xmark")
        }
        if (color.value.length < 3) {
            liErrorColorProd2.classList.remove("none")
            liErrorColorProd2.classList.add("show")
            liErrorColorProd2.classList.add("errorText")
            color.classList.add("error")
            iconoColorX.classList.add("fa-regular")
            iconoColorX.classList.add("fa-circle-xmark")
            iconoColorOK.classList.remove("fa-regular")
            iconoColorOK.classList.remove("fa-circle-check")

        } else {
            liErrorColorProd2.classList.add("none")
            color.classList.remove("error")
            color.classList.add("valid")
            iconoColorX.classList.remove("fa-regular")
            iconoColorX.classList.remove("fa-circle-xmark")
            iconoColorOK.classList.add("fa-regular")
            iconoColorOK.classList.add("fa-circle-check")

        }

    })
    category.addEventListener("change", function (event) {
        if (category.value === "") {
            liErrorCategoriaProd1.classList.remove("none")
            liErrorCategoriaProd1.classList.add("show")
            liErrorCategoriaProd1.classList.add("errorText")
        } else {
            liErrorCategoriaProd1.classList.remove("show")
            liErrorCategoriaProd1.classList.add("none")
        }

    })
    img.addEventListener("change", function (event) {
        if (img.value === "") {
            liErrorimgProd1.classList.remove("none")
            liErrorimgProd1.classList.add("show")
            liErrorimgProd1.classList.add("errorText")
        } else {
            liErrorimgProd1.classList.remove("show")
            liErrorimgProd1.classList.add("none")
        }

    })


    form.addEventListener("submit", function (event) {

        if (nombre.value.length < 5) {
            3
            event.preventDefault()
            liErrorNombreProd2.classList.remove("none")
            liErrorNombreProd2.classList.add("show")
            liErrorNombreProd2.classList.add("errorText")
            nombre.classList.add("error")
            iconoNombreX.classList.add("fa-regular")
            iconoNombreX.classList.add("fa-circle-xmark")
            iconoNombreOK.classList.remove("fa-regular")
            iconoNombreOK.classList.remove("fa-circle-check")
        }
        if (description.value.length < 20) {
            3
            event.preventDefault()
            liErrorDescripcionProd2.classList.remove("none")
            liErrorDescripcionProd2.classList.add("show")
            liErrorDescripcionProd2.classList.add("errorText")
            description.classList.add("error")
            iconoDescripcionX.classList.add("fa-regular")
            iconoDescripcionX.classList.add("fa-circle-xmark")
            iconoDescripcionOK.classList.remove("fa-regular")
            iconoDescripcionOK.classList.remove("fa-circle-check")
        }
        if (precio.value === "") {
            event.preventDefault()
            liErrorPrecioProd1.classList.remove("none")
            liErrorPrecioProd1.classList.add("show")
            liErrorPrecioProd1.classList.add("errorText")
            precio.classList.add("error")
            iconoPrecioX.classList.add("fa-regular")
            iconoPrecioX.classList.add("fa-circle-xmark")
            iconoPrecioOK.classList.remove("fa-regular")
            iconoPrecioOK.classList.remove("fa-circle-check")
        }
        if (color.value.length < 3) {
            event.preventDefault()
            liErrorColorProd1.classList.remove("none")
            liErrorColorProd1.classList.add("show")
            liErrorColorProd1.classList.add("errorText")
            color.classList.add("error")
            iconoColorX.classList.add("fa-regular")
            iconoColorX.classList.add("fa-circle-xmark")
            iconoColorOK.classList.remove("fa-regular")
            iconoColorOK.classList.remove("fa-circle-check")

        }
        if (img.value === "") {
            event.preventDefault()
            liErrorimgProd1.classList.remove("none")
            liErrorimgProd1.classList.add("show")
            liErrorimgProd1.classList.add("errorText")
        }
        
        if (category.value === "") {
            event.preventDefault()
            liErrorCategoriaProd1.classList.remove("none")
            liErrorCategoriaProd1.classList.add("show")
            liErrorCategoriaProd1.classList.add("errorText")

        }

    })
})


