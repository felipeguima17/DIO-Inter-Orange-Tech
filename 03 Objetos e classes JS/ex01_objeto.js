/* Objeto é um estrutura dinâmica de chave : valor*/

const pessoa = {
    nome: 'Felipe',
    idade: 29,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa)

pessoa.altura = 1.73
console.log(pessoa.altura)
console.log(pessoa)

pessoa.descrever()

delete pessoa.nome
console.log(pessoa)


/* Acessar de forma dinâmica */

const atributo = 'idade'
console.log(pessoa[atributo])