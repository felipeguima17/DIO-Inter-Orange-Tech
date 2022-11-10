/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis:.
- Preço do etanol;
- Preço da gasolina;
- Tipo de combustível que está no carro;
- Gasto médio de combustível do carro por km;
- Distância em km da viagem; */

const precoEtanol = 3.79
const precoGasolina = 5.69
const tipoCombustivel = 'Gasolina'
const autonomia = 11.4
const distancia = 60
let gasto = 0

if (tipoCombustivel == 'Etanol') {
    gasto = (distancia / autonomia) * precoEtanol
}
else if (tipoCombustivel == 'Gasolina') {
    gasto = (distancia / autonomia) * precoGasolina
}
else {
    console.log('Combustível inválido! <<ERRO>>')
    return
}

console.log(`Valor gasto com a viagem foi de R$${gasto.toFixed(2)}`)