/** 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado. */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function localizaPares(lista) {
    lista.forEach(e => {
        if (e % 2 == 0)
        console.log(e)
    });
}

localizaPares(numeros)