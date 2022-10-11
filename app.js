const express = require("express")
const app = express()
const PORT = 3000
const mongoose = require("mongoose")
const path = require("path")
const rotas = require("./Rotas/rotas")


mongoose.connect("mongodb://localhost/links") // conexão com o banco 

let db = mongoose.connection

db.on("error", () => {console.log("Houve um erro")})
db.once("open", () => {console.log("Banco carregado")})

app.set("view engine", "ejs") // definindo a engine que sera usada. npm install ejs
app.set("views", path.join(__dirname,"templates")) //definindo a pasta onde o ejs pegar os templates

app.use("/", rotas)
app.listen(PORT, () => console.log("funfando na porta 3000"))