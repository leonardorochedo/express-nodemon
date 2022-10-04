// modules
const express = require("express")
const app = express()
const port = 5000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

// importando as rotas
const cars = require('./cars')

// habilitando interagir com o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

// arquivos estaticos
app.use(express.static('public'))

app.use('/cars', cars)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

// middleware para 404
app.use(function(req, res, next) {
    res.status(400).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})