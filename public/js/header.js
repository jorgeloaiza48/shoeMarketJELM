window.addEventListener("load", function (event) {
    let burguer = document.querySelector(".burguer")
    let burguerList = document.querySelector(".burguer-list")

    
    burguer.addEventListener("click",function(){
        burguerList.classList.add("show")
        burguerList.classList.remove("none")


    })
    burguerList.addEventListener("mouseleave",function(){
        burguerList.classList.add("none")
        burguerList.classList.remove("show")


    })



















})
