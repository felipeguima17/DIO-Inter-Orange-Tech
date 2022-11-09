/** Crie uma classe para representar carros.
 * Os carros possuem uma marca, cor e gasto médio de combustível por km.
 * Crie um método que dado a quantidade de km e o preço do combustível nos de o valor de gasto em reais para realizar este percurso.
 */

class Carro {
    marca
    cor
    autonomia

    constructor(marca, cor, autonomia) {
        this.marca = marca,
        this.cor = cor,
        this.autonomia = autonomia
    }

    calculaGasto(distancia, valorCombustivel) {
        const valorFinal = (distancia / this.autonomia) * valorCombustivel
        console.log(`${this.marca} | ${this.cor} | ${this.autonomia} Km/l | ${distancia} Km | VALOR DA VIAGEM: R$${valorFinal.toFixed(2)}`)
    }
}


const carro1 = new Carro('Nissan', 'Prata', 11.4)
carro1.calculaGasto(60, 3.79)

const carro2 = new Carro('Chevrolet', 'Preto', 13)
carro2.calculaGasto(60, 3.79)