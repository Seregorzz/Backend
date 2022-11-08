const express = require("express");
const Contenedor = require("./contenedor");
const productos = new Contenedor("productos");

const app = express();


const PORT = 8080;


const server = app.listen(PORT, () => {

  console.log(`Servidor Abierto en el Puerto ${PORT}`);
});

app.get("/", (req,res)=> {
    res.send(`<h1>"Bienvenido a Backend"</h1>`)
})

app.get("/productos", (req, res) => {
  productos
    .getAll()
    .then((data) => res.send(data))
    .catch((error) => {
      console.log(error.message);
      res.send({ error: error.message });
    });
});

app.get("/productoRandom", (req, res) => {
  productos
    .getAll()
    .then((data) => {
      const random = Math.floor(Math.random() * data.length);
      res.send(data[random]);
    })
    .catch((error) => {
      console.log(error.message);
      res.send({ error: error.message });
    });
});

server.on("error", (error) => console.log("Server error:", error));