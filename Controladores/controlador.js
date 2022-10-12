const link = require("../Modelos/link")
const Link = require("../Modelos/link") // modelos e esquemas

const redirecionar = async (req, res) => {

    let title = req.params.title
    try {
        let doc = await Link.findOne({title:title}) // crieterios de busca em Link

        res.redirect(doc.url) // usando a variavel URl do documento para redirecionar
    }catch (error) {
        res.send(error)
    }
}


const addLink = async (req , res) => {

    let link = new Link(req.body) // colocando os valores do body da requisição dentro do modelo

    try {
        let doc = await link.save() // savando o novo link com os valores da req.body
        res.send("Link Adicionado")
    } catch (error) {
        res.render("index", {error, body: req.body})  // mandando o req.body de volta caso aconteça um erro
    }
}

const allLinks = async (req,res) => {
    try {
        let links = await link.find({})
        res.render("all", {links})
    } catch (error) {
        res.send(error)
    }
}

const deleteLink = async (req,res) => {
    let id = req.params.id
    
    if(!id) {
        id = req.body.id
    }

    try {
       await Link.findByIdAndDelete(id)
       res.send(id)   
    } catch (error){
        res.send(error)
    }
}

module.exports = { redirecionar, addLink, allLinks, deleteLink }