const express = require("express")
const router = express.Router()
const controlador = require("../Controladores/controlador")


router.get("/:title", controlador.redirecionar)

router.post("/", express.urlencoded({extended: true}),controlador.addLink)  //pegando os dados apartir de um formulario

router.get('/', (req, res) => res.send("Hello world"))

module.exports = router