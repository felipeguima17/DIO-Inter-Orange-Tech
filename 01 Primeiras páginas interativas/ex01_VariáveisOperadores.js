/* Faça um programa para calcular o valor gasto em uma viagem.

Você terá 3 variáveis:
 1 preço do combustível
 2 valor médio de combustível do carro por km
 3 distância em km da viagem */

const precoCombustivel = 3.79
const autonomia = 11.4
const distancia = 60

const gasto = (distancia / autonomia) * precoCombustivel

console.log(`O valor gasto da viagem é de R$${gasto.toFixed(2)}`)