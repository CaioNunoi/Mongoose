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

module.exports = { redirecionar, addLink }