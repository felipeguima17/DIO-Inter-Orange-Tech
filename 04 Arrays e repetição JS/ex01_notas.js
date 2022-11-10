const notas = [] // array é representado por []

// adicionando notas
notas.push(8)
notas.push(7)
notas.push(5)
notas.push(6)

// função com laço FOR para somar as notas e retornar a média
function calculaMedia(n) {
    let soma = 0

    for (let i = 0; i < n.length; i++) {
        soma += n[i]
    }

    return soma / n.length
}

console.log(`Notas: ${notas}\nMédia: ${calculaMedia(notas)}`)