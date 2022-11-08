const Contenedor = require('./contenedor')

const productos = new Contenedor('productos')



console.log('\n AGREGANDO EL PRIMER PRODUCTO: Guitarra\n')

productos.save({
	title: 'Guitarra LTD',
	price: 4000,
	thumbnail: 'https://karmamusic.mx/15925-large_default/esp-ltd-guitarra-electrica-signature-kirk-hammett-kh-3-spider-lkh3.jpg'
})
	.then(id => console.log(`Objeto guardado con ID: ${id}`))
	.catch(error => console.log(error.message))

setTimeout(() => {
	console.log('\n PASO 2: SE AGREGA EL SEGUNDO PRODUCTO: Neca\n')
	productos.save({
		title: 'Neca',
		price: 250,
		thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_704398-MLM49436683541_032022-O.jpg'
	}).then(id => console.log(`Objeto guardado con ID: ${id}`))
		.catch(error => console.log(error.message))
}, 1000)

setTimeout(() => {
	console.log('\n PASO 3:  TODOS LOS PRODUCTOS\n')
	productos.getAll()
		.then(data => console.log(data))
		.catch(error => console.log(error.message))
}, 2000)




setTimeout(() => {
	console.log('\n PASO 5: AGREGANDO NUEVAMENTE EL PRIMER PRODUCTO: SONY \n')
	productos.save({
		title: 'PS5',
		price: 1000,
		thumbnail: 'https://mxsonyb2c.vtexassets.com/arquivos/ids/263350/PS5_Fisica_DS.jpg?v=1751909001'
	}).then(id => console.log(`Objeto guardado con ID: ${id}`))
		.catch(error => console.log(error.message))
}, 4000)

setTimeout(() => {
	console.log('\n PASO 6: SE AGREGA NUEVAMENTE EL SEGUNDO PRODUCTO: Cuadro \n')
	productos.save({
		title: 'Mona Lisa',
		price: 100,
		thumbnail: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/17C16/production/_117320379_giocondacerca.jpg'
	}).then(id => console.log(`Objeto guardado con ID: ${id}`))
		.catch(error => console.log(error.message))
}, 5000)

setTimeout(() => {
	console.log('\n PASO 7: SE OBTIENE EL SEGUNDO PRODUCTO: Cuadro \n')
	productos.getById(2)
		.then(data => console.log(data))
		.catch(error => console.log(error.message))
}, 6000)



setTimeout(() => {
	console.log('\n PASO 9 FINAL: SE LISTA LOS PRODUCTOS RESTANTES \n')
	productos.getAll()
		.then(data => console.log(data))
		.catch(error => console.log(error.message))
}, 8000)