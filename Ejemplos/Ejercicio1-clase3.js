const fin = () => console.log("termine")

function mostrarLetras(str,cb){
    let i=0
    const timer = setInterval(() => { 
     if(i<str.length){
        console.log(str[i])
        i++
     }else {
        clearInterval(timer)
        cb()
     }
    },1000)
}

setTimeout(() => {mostrarLetras("coder",fin)},0)
setTimeout(() => {mostrarLetras("coder",fin)},250)
setTimeout(() => {mostrarLetras("coder",fin)},500)