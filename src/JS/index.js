// aqui voy hacer la funcion de abrir y cerrar el menu desplegable cuando sea mobile 

let menuVisible = false
//funcion que oculta y muestra el menu
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

// añado un evento a cada enlace para cerrar el menú al hacer clic
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const nav = document.getElementById("nav");
        nav.classList.remove("responsive");
        menuVisible = false;
    });
});
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

