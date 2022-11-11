// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets(81));
let flag = 0

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

for (let i = 0; i < elementos.length; i++) {
  if (elementos[i] === valor) {
    const pos = i
    flag++
    print(`Achei ${valor} na posicao ${pos}`)
    break
  }

}

if (flag === 0) {
  print(`Numero ${valor} nao encontrado!`)
}