// Creacion de String

const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas simples"
const terceraOpcion = 'Comillas simples'

// 1. Concatenacion: Opcion +

const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi direccion completa es' + direccion + ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio = 'Mi direccion completa es ' + direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)


// 2. Concatenacion: Template Literals

const nombre = 'Paola'
const pais = 'Colombia'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

// 3. Concatenacion: join()

const primerParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = 'Mexico'
const pensamiento = [primerParte, segundaParte, terceraParte]
console.log(pensamiento.join(' * '))

// 4. Concatenacion: concat()

const hobbie1 = 'leer'
const hobbie2 = 'correr'
const hobbie3 = 'estudiar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ' , ', hobbie2, ' , ', hobbie3)

console.log(hobbies)