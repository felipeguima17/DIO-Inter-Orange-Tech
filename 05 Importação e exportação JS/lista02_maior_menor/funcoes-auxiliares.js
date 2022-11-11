const listaNumeros = [4, 100, 150, 90, 200]
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