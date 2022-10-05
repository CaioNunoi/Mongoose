const express = require("express")
const app = express()
const PORT = 3000
const mongoose = require("mongoose")

const linkSchema = new mongoose.Schema({ //Esquema dos documentos
    title: {type:String, required: true},
    description: String,
    url: {type:String, required: true},
    click: {type: Number, default: 0 }
})

const Link = mongoose.model("Link", linkSchema) // Modelo dos documentos



mongoose.connect("mongodb://localhost/links") // conexão com o banco 

let db = mongoose.connection

db.on("error", () => {console.log("Houve um erro")})
db.once("open", () => {
    console.log("Banco carregado")

    app.get("/:title", async (req, res) => {

        let title = req.params.title
        try {
            let doc = await Link.findOne({title:title}) // crieterios de busca em Link

            res.redirect(doc.url) // usando a variavel URl do documento para redirecionar
        }catch (error) {
            res.send(error)
        }
    })
})


app.get('/', (req, res) => res.send("Hello world"))

app.listen(PORT, () => console.log("funfando na porta 3000"))