// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let A = gets(15);
let B = gets(28);

//TODO: Imprima se os valores numéricos passados são iguais ou não.

function verificaNums(a, b) {
  if (a === b) {
    return 'Sao iguais!'
  }
  else {
    return 'Nao sao iguais!'
  }
}

print(verificaNums(A, B))