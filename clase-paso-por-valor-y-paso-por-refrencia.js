// Paso por referencia

let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let c = z

console.log(x, y, z, a, b, c)

a = 12
b = 'Platzi'
c = undefined


// Paso por referencia

let frutas = ['manzana']
frutas.push('pera')
console.log(frutas)

let panes = ['Pan']
let copiaDePanes = panes
panes.push('Baguett')
console.log(panes, copiaDePanes)


// Paso por valor con tipos primitivos

let num1 = 10
let num2 = num1
num1 = 20

console.log(num1)
console.log(num2)

//Paso por referencia con tipos complejos

let obj1 = {nombre: 'Alice'}
let obj2 = obj1
obj1.nombre = 'Bob'

console.log(obj1.nombre)
console.log(obj2.nombre)

