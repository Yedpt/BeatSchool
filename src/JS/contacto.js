const Nombre = document.getElementById("name")
const CorreoElectrónico = document.getElementById("email")
const Asunto = document.getElementById("subject")
const Mensaje = document.getElementById("message")

Formulario.addEventListener("submit", e=>{
    e.preventDefault()
    console.log(CorreoElectrónico.test(email.value))
    let regex.CorreoElectrónico = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(CorreoElectrónico.test(email.value))
})



