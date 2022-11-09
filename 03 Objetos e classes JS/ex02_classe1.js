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

/*
const p1 = new Pessoa()
p1.nome = 'Felipe'
p1.idade = 29
p1.descrever()

const p2 = new Pessoa()
p2.nome = 'Fulano'
p2.idade = 10
p2.descrever()*/

const p1 = new Pessoa('Felipe', 1993)
const p2 = new Pessoa('Fulano', 2012)
p1.descrever()
p2.descrever()