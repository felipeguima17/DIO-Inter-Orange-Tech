// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = parseInt(gets(15));

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

let soma = 0

function somatorio(n){
  for (let i = n; i >= 0; i--) {
    soma += i
  }
  print(soma)
}

somatorio(n)