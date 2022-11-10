/** 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
 *    Ex de lista de notas = [2, 7, 3, 8, 10, 4] */

 const medias = [2, 7, 3, 8, 10, 4]

 function verificaMaior(lista) {
    let maior = 0

    console.log('Maior nota: ')
 
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
    }
    
    console.log(maior)
 }
 
 verificaMaior(medias)