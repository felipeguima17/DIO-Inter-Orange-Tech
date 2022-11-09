/* Fórmula do IMC
IMC = peso / (altura * altura)

Elabore um altoritmo dado o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo:

IMC em adultos:
- Abaixo de 18.5 -> abaixo do peso
- Entre 18.5 e 25 -> peso normal
- Entre 25 e 30 -> acima do peso
- Entre 30 e 40 -> obeso
- Acima de 40 -> obesidade grave */

function calculaIMC(peso, altura) {
    return peso / (Math.pow(altura, 2))
}

function classificaIMC(imc) {
    console.log(`IMC = ${imc.toFixed(2)}`)

    if (imc >= 0 && imc < 18.5) {
        console.log('Abaixo do peso')
    } else if(imc >= 18.5 && imc < 25) {
        console.log('Peso normal')
    } else if (imc >= 25 && imc < 30) {
        console.log('Acima do peso')
    } else if (imc >= 30 && imc < 40) {
        console.log('Obeso')
    } else if (imc >= 40) {
        console.log('Obesidade grave')
    } else {
        console.log(':...IMC inválido...:')
    }
}

// main
(function () {
    const IMC = calculaIMC(74, 1.73)
    classificaIMC(IMC)
})()