
const express = require('express')
const { Router } = express

const app = express()
const productos = []

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use( express.static('public'))



const routerProductos = new Router()




routerProductos.get("/",  ( req, res ) => {
        res.send(productos)
})

routerProductos.get('/:id',  (req, res) => {
    const { id } = req.params
    const prodEncontrado = productos.find((ele) => ele.id == id)
    if(!prodEncontrado) {
        res.json(`Producto ${id} no encontrado`)
    }else{
        res.json({ "producto encontrado" : prodEncontrado})
    }
})



routerProductos.post('/', (req, res) => {
    const lengthProductos = productos.length
    const nuevoId = lengthProductos + 1
    productos.push({
        ...req.body, ...{id : nuevoId}
    })
    res.json({ "nuevo id": nuevoId})
})



routerProductos.put('/:id', (req, res) => {
    const { id } = req.params
    const  prodNuevo  = req.body
    const prodEncontrado = productos.find((ele) => ele.id == id)
    if(!prodEncontrado) {
        res.json(`Producto ${id} no encontrado`)
    }else{
     
        const prodEliminado = productos.splice(parseInt(id - 1), 1)
        productos.push({
            ...req.body, ...{id : id}
        })
        res.json({ anterior : prodEncontrado, nuevo : prodNuevo})
    }
})



routerProductos.delete('/:id', (req, res) => {
    const { id } = req.params
    const prodEncontrado = productos.find((ele) => ele.id === id)
    if(!prodEncontrado) {
        res.json(`Producto ${id} no encontrado`)
    }else{
        const prodEliminado = productos.splice(parseInt(id - 1), 1)
        res.json({ "producto eliminado" : prodEliminado })
    }
})


app.use ("/api/productos/", routerProductos)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('escuchando en el puerto ' + PORT)
})
server.on("error", error => console.log(error))