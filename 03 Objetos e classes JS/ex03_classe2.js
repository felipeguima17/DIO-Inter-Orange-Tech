class Pessoa {
    nome
    idade

    constructor (nome, anoNasc) {
        this.nome = nome
        this.idade = 2022 - anoNasc
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

function compararPessoas (p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`)
    }
}

const pessoa1 = new Pessoa('Felipe', 1993)
const pessoa2 = new Pessoa('Fulano', 2012)

compararPessoas(pessoa1, pessoa2)