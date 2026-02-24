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

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {

        if (data.token) {
            alert("Login exitoso ✅");
            console.log("Token recibido:", data.token);

            localStorage.setItem("token", data.token);
        } else {
            alert("Error en el servidor");
        }

    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error al conectar con el servidor");
    });
});



