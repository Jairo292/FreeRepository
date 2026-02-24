const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    const { usuario, password } = req.body;

    if (usuario === "prueba@gmail.com" && password === "Hola1234!") {

        const token = jwt.sign(
            { usuario },
            "secreto123",
            { expiresIn: "1h" }
        );

        res.json({ token });

    } else {
        res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});