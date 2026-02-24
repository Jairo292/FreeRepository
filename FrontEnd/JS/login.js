document.getElementById('loginForm').addEventListener('submit', function(event) 
{ event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    const validEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(usuario)) {
        alert('Correo invalido, debes agregar un caracter de puntuacion.');
        return;
    }

    const validPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (!validPassword.test(password)) {
        alert('Contraseña invalida, debe contener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial.');
        return;
    }

    console.log(usuario, password);
});



