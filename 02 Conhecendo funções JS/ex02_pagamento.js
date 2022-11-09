/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Cógido condição de pagamento:
1 - À vista no Débito, recebe 10% de desconto
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto
3 - Em duas vezes, preço normal da etiqueta
4 - Acima de duas vezes, preço normal da etiqueta mais juros de 10% */

function calculaValor(valorEtiqueta, modoPagamento) {
    let valorFinal = 0

    switch (modoPagamento) {
    case 1: valorFinal = valorEtiqueta * 0.9
            return `Valor final no débito é R$${valorFinal.toFixed(2)}`
    case 2: valorFinal = valorEtiqueta * 0.85
            return `Valor final no dinheiro/PIX é R$${valorFinal.toFixed(2)}`
    case 3: return `Valor final no crédito em até 2x é R$${valorEtiqueta.toFixed(2)}`
    case 4: valorFinal = valorEtiqueta * 1.1
            return `Valor final no crédito em 3x ou mais é R$${valorFinal.toFixed(2)}`
    default: 
            return ':..Opção de pagamento não é válida..:'
    } 
}

(function () {
    console.log(calculaValor(100, 1))
    console.log(calculaValor(100, 2))
    console.log(calculaValor(100, 3))
    console.log(calculaValor(100, 4))
    console.log(calculaValor(100, 5))
})()