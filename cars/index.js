// modules
const express = require("express")
const router = express.Router()

const path = require("path")
const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/carsForm.html`)
})

router.post('/save', (req, res) => {
    // console.log(req.body)

    const nameCar = req.body.name
    const valueCar = req.body.money

    res.send(`${nameCar} cadastrada no valor de R$${valueCar}`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    res.send(`Procurando pelo carro de ID:${id}`)
})

module.exports = router