/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima sua média e a sua classificação conforme a tabela abaixo:

Média = (nota1 + nota2 + nota3) / 3

Classificação:
- Média menor que 5, reprovado.
- Média entre 5 e 7, recuperação.
- Média acima de 7, aprovado. */

const nota1 = 5
const nota2 = 5
const nota3 = 4.9

const media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
    console.log(`:..Reprovado - Média = ${media.toFixed(2)}..:`)
} else if (media >= 5 && media < 7) {
    console.log(`:..Recuperação - Média = ${media.toFixed(2)}..:`)
} else {
    console.log(`:..Aprovado - Média = ${media.toFixed(2)}..:`)
}