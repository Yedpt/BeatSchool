const formulario = document.getElementById("formulario");
const nombre = document.getElementById("name");
const correoElectronico = document.getElementById("email");
const asunto = document.getElementById("subject");
const mensaje = document.getElementById("message");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validar el campo Nombre
    if (nombre.value.trim() === "") {
        alert("Por favor, introduce tu nombre.");
        nombre.focus();
        return;
    }

    // Validar el campo Correo Electrónico
    const regexCorreoElectronico = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexCorreoElectronico.test(correoElectronico.value)) {
        alert("Por favor, introduce un correo electrónico válido.");
        correoElectronico.focus();
        return;
    }

    // Validar el campo Asunto
    if (asunto.value.trim() === "") {
        alert("Por favor, introduce un asunto.");
        asunto.focus();
        return;
    }

    // Validar el campo Mensaje
    if (mensaje.value.trim() === "") {
        alert("Por favor, introduce un mensaje.");
        mensaje.focus();
        return;
    }

    // Si todos los campos son válidos, enviar el formulario
    alert("Formulario enviado con éxito!");
    formulario.submit();
});


