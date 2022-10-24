function preguntar(palabra){
    const singodepregunta = "????"
    return function () {

        console.log(palabra + singodepregunta)
    }
}


const frase = preguntar("hola que hace")

frase()