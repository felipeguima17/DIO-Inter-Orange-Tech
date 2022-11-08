/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Cógido condição de pagamento:
1 - À vista no Débito, recebe 10% de desconto
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto
3 - Em duas vezes, preço normal da etiqueta
4 - Acima de duas vezes, preço normal da etiqueta mais juros de 10% */

const valorEtiqueta = 100
const formaPagamento = 4
let valorFinal = 0

console.log(`Valor da etiqueta R$${valorEtiqueta.toFixed(2)}`)

switch (formaPagamento) {
    case 1: valorFinal = valorEtiqueta * 0.9
            console.log(`Valor final no débito é R$${valorFinal.toFixed(2)}`)
            break
    case 2: valorFinal = valorEtiqueta * 0.85
            console.log(`Valor final no dinheiro/PIX é R$${valorFinal.toFixed(2)}`)
            break
    case 3: console.log(`Valor final no crédito em até 2x é R$${valorEtiqueta.toFixed(2)}`)
            break
    case 4: valorFinal = valorEtiqueta * 1.1
            console.log(`Valor final no crédito em 3x ou mais é R$${valorFinal.toFixed(2)}`)
            break
    default: console.log(':..Opção de pagamento não é válida..:')
}
