
class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nombre) {
        this.mascotas.push(nombre)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre, autor })
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre)
    }

}

const usuario = new Usuario('Erick', 'Varela')

usuario.addMascota('Whisky')
usuario.addMascota('Milo')
usuario.addBook('El Resplandor', 'Stephen King')
usuario.addBook('22/11/63', 'Stephen King')

console.log(' USUARIO ')
console.log(`Nombre completo: ${usuario.getFullName()}`)
console.log(`Mascotas: ${usuario.countMascotas()}`)
console.log('libros', usuario.getBookNames())