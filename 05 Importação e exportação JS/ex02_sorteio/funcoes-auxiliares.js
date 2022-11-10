
const entradas = [10, 5, 50, 10, 98, 23, 6, 51, 11, 99, 24] // posição 0 se refere a quantidade de valores da lista
let i = 0 // contador

// cada chamada do gets, retornará o próximo valor da lista
function gets() {
    const valor = entradas[i]
    i++
    return valor
}

function print(texto) {
    console.log(texto)
}

module.exports = { gets, print}