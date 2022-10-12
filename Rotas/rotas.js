const express = require("express")
const router = express.Router()
const controlador = require("../Controladores/controlador")

router.get("/all", controlador.allLinks) // buscar todos os links(documentos)

router.get("/:title", controlador.redirecionar) // title do documento

router.post("/", express.urlencoded({extended: true}),controlador.addLink)  //pegando os dados apartir de um formulario

router.get("/", (req, res) => res.render("index", {error:false , body: {}}))

router.delete("/:id", controlador.deleteLink)

module.exports = router