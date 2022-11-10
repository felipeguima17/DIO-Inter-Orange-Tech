/** 1) Crie um programa que dado um número imprima a sua tabuada. */

function calculaTabuada(tab) {
    console.log(`Tabuada do ${tab}:`)
    for (let i = 0; i <= 10; i++) {
        console.log(`${tab} * ${i} = ${tab * i}`)        
    }
}

const tabuada = 7
calculaTabuada(tabuada)