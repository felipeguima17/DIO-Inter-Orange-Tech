/** Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 a 100.
 *  Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
 *  Dados de entrada:
 *                  5
 *                  50
 *                  10
 *                  98
 *                  23
 *  Saída:
 *                  98 */

const { gets, print } = require('./funcoes-auxiliares')

/**const numerosSorteados = []
let maior = 0

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets()
    numerosSorteados.push(numeroSorteado)
}

for (let i = 0; i < numerosSorteados.length; i++) {
    if (numerosSorteados[i] > maior) {
        maior = numerosSorteados[i]
    }
}

print(maior) */

const qtdAlunos = gets() // chama o primeiro valor da lista, que é o tamanho da lista
let maior = 0

for (let i = 0; i < qtdAlunos; i++) {
    const numeroSorteado = gets()
    if (numeroSorteado > maior) {
        maior = numeroSorteado
    }
}

print(maior)