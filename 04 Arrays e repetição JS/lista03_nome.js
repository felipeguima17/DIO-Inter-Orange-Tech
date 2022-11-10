/** 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V". */

function imprimeNomesComV(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][0] === 'V') {
            console.log(lista[i])
        }
    }
}

const nomes = ['Felipe', 'Vitor', 'Bruno', 'Vanessa', 'Hector', 'Vampiro']
imprimeNomesComV(nomes)