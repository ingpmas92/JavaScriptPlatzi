// Tipo de dato complejo - Paso por referencia

let frutas = {
    naranja: 'naranja'
}
let vegetales = frutas

vegetales.naranja = 'brocoli'
console.log(frutas)

let ropa = {
    blusa: 'blusa'
}

ropa.pantalon = 'pantalon'
console.log(ropa)