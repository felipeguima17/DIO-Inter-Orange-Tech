/** Crie uma classe para representar pessoas.
 * Cada pessoa possui nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer seu IMC (IMC = peso / altura²)
 * Instancie uma pessoa José que possui 70kg, 1,75 de altura e peça para José dizer o valor de seu IMC.
 */

class Pessoa {
    nome
    peso
    altura

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calculaIMC() {  
        const imc = this.peso / Math.pow(this.altura, 2)
        
        console.log(`Meu nome é ${this.nome}, tenho ${this.peso.toFixed(2)} Kg e ${this.altura.toFixed(2)}m. Meu IMC é ${imc.toFixed(2)}`)

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
}

const pessoa1 = new Pessoa('José', 70, 1.75)
pessoa1.calculaIMC()