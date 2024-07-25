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