// aqui voy hacer la funcion de abrir y cerrar el menu desplegable cuando sea mobile 

let menuVisible = false
//funcion que oculta y muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList =""   /*classList: propiedad del objeto Element que nos permite acceder y manipular los datos de nodos HTML en el DOM. Esta propiedad en particular nos devuelve un listado de los valores del atributo class de un elemento (DOMTokenList). En este sentido es una propiedad de solo lectura. */
        menuVisible = false
    }else{
        document.getElementById("nav").classList ="responsive"
        menuVisible = true
    }
}
// slider 

const btnLeft = document.querySelector(".btn-left") /* creamos variables (constantes) y usamos el queryselector para jugar con los elementos del DOM */
const btnRight = document.querySelector(".btn-right")
const slider = document.querySelector("#slider")
const sliderSection = document.querySelectorAll(".slider-section") /* aqui tenemos 4 elementos con la clase "slider-section entonces usamos queryselectorALl para selec" */

btnLeft.addEventListener("click" , e => moveToLeft()) /* añado eventos de mover a la izquierda y derecha  */
btnRight.addEventListener("click" , e => moveToRight())

setInterval(() =>{
    moveToRight()
}, 3000)

let operacion = 0
let widthVid = 100 / sliderSection.length
let counter = 0

function moveToRight () {
    if(counter >= sliderSection.length - 1){
        counter = 0
        operacion = 0
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
        return
    }
        counter++
         operacion = operacion + widthVid
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
    
    
}

function moveToLeft () {
    counter--
    if (counter< 0) {
        counter = sliderSection.length-1
        operacion = widthVid * (sliderSection.length -1)
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
        return
    }
        operacion = operacion - widthVid
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
    
  
}

