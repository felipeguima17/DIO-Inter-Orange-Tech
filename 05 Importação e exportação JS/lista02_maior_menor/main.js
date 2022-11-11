/**2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
 * Imprima o maior e o menor número deste conjunto.
 * Exemplo:
 *     Entrada:
 *         4
 *         100
 *         150
 *         90
 *         200
 *     Saída:
 *         Maior número: 200
 *         Menor número: 90 */

const { gets, print } = require('./funcoes-auxiliares')

let maior = 0
let menor = 0
const tamanhoLista = gets()

for (let i = 0; i < tamanhoLista; i++) {
    const valor = gets()

    // quando entrar no laço, atribui o primeiro valor para as variáveis
    if (i == 0) {
        maior = valor
        menor = valor
    }
    
    if (valor > maior) {
        maior = valor
    }

    if (valor < menor) {
        menor = valor
    }    
}

print(`Menor valor = ${menor}`)
print(`Maior valor = ${maior}`)