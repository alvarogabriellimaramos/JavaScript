// while é um laço(loop) no javascript que não tem um ponto de partida,ele irá continua rodando para sempre,um laço infinito,esse tipo de laço é muito utilizado quando não sabemos quando devemos para a execução do programa,por exemplo digamos que tenhamos um sistema que irá pega todos os dados do usuario,não sabemos quantos usuarios existem,então usamos o while para percorre todos os usuario e se ele chega ao fim ele para
// digamos que eu tenha um array de 1 até 10 e um contador,o while irá percorre todos os elementos do array e irá incremeta no contador,quando o contador chega na mesma quantidade de elementos do array o laço para 
const array = [1,2,3,4,5,6,7,8,9,10]
let contador = 0 
while (contador <= array.length){
    console.log(contador++)
}
// laço while não é tão utilizado igual ao for,mas também é uma boa pratica depedendo do caso 
