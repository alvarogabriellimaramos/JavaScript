// as funções callbacks(funções de retornos) são funções que são passadas como argumentos em outras funções e geralmente elas são utilizadas para retorna algo 
function imprimir(nome,indice){
    console.log(indice + 1,nome)
}
const fabricantes = ['Mercedes','Audi','BMW']
fabricantes.forEach(imprimir)
fabricantes.forEach(el /*O primeiro parametro dentro do forEach se referir ao todo os elementos do array*/)