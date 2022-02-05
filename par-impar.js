// criando função para detectar paridade
function paridade(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
let res = paridade(11) // inserir n teste
console.log(res)
