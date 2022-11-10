// importar funções auxiliares - Importar sempre o que está sendo exportado por outro arquivo

/** const funcoes = require('./funcoes-auxiliares')
 * console.log(funcoes)
 * console.log(funcoes.gets()) */

const { gets, print } = require('./funcoes-auxiliares')
console.log(print, gets)
print(gets())