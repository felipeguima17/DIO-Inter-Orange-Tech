/* Fórmula do IMC
IMC = peso / (altura * altura)

Elabore um altoritmo dado o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo:

IMC em adultos:
- Abaixo de 18.5 -> abaixo do peso
- Entre 18.5 e 25 -> peso normal
- Entre 25 e 30 -> acima do peso
- Entre 30 e 40 -> obeso
- Acima de 40 -> obesidade grave */

const peso = 74
const altura = 1.73
const IMC = peso / (Math.pow(altura, 2))

console.log(`IMC = ${IMC.toFixed(2)}`)

if (IMC >= 0 && IMC < 18.5) {
    console.log('Abaixo do peso')
} else if(IMC >= 18.5 && IMC < 25) {
    console.log('Peso normal')
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do peso')
} else if (IMC >= 30 && IMC < 40) {
    console.log('Obeso')
} else if (IMC >= 40) {
    console.log('Obesidade grave')
} else {
    console.log(':...IMC inválido...:')
}