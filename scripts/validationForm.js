const btnEnviar = document.querySelector('.contact-btn-submit');
btnEnviar.addEventListener('click', validacion = (e) =>{
    e.preventDefault();
    const mensaje = document.querySelector('.contactTextarea');
    if (mensaje.value.length < 10){ //si el mensaje que ingresa el usuario es menor a caracteres entonces...
        alert('El mensaje que intentas enviar es demasiado corto');
    }else {
        alert('Mensaje Enviado, Gracias por su Tiempo !');
        return location.reload();
    }
});