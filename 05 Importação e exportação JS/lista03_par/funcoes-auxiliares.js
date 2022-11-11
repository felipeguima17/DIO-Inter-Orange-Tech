const listaNumeros = [5, 1, 3, 9, 10, 12]
let i = 0

function gets() {
    const numero = listaNumeros[i]
    i++
    return numero
}

function print(texto) {
    console.log(texto)
}

module.exports = { gets, print }