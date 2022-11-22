const express = require('express')

const app = express()

const productos = []

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'pug')
app.set("views", "./views")


app.get('/', (req, res) => {
    res.render('nivel', {productos})
})



app.post('/productos', (req, res) => {
    productos.push(req.body)
    res.redirect('/')
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('ESCUCHANDO PUERTO ' + PORT)
})
server.on("error", error => console.log(error))