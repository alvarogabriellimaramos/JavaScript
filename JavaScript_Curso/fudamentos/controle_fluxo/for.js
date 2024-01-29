/*O loop for é um loop do tipo finito,o que significa que na maioria das vezes em que é chamado ele tem um ponto de parada proprio,o loop for é muito utilizado em interação com array e objetos ele também pode ser utilizado para outras coisas também,como criar vários botões de uma vez em uma pagina html */
// sintaxe básica do for 
for (let c = 0;c <= 10;c++){
    console.log(c)
}//aqui ele irá começa uma contagem de 0 até 10 
// podemos percorre array também,para percorre todos os indices do array,utilizamos o length que irá dizer qual o comprimento de um array,string e etc...
const array = [1,'alvaro',2,true,false,{
    nome:true,
    idade:18
}]
for (let c = 0; c<= array.length;c++){
    console.log(c) 
}
// mas digamos que eu não queira acessa os indices mas sim os elementos,podemos fazer isso de várias forma,a primeira dela é 
for (let c = 0; c<= array.length;c++){
    console.log(array[c]) //irá mostra todos os elementos dentro do array,mas isso não é uma forma tão utilizada,temos outras forma também 
}
for (let c in array){
    console.log(c) // aqui ele irá percorre todos os indices do array,ele irá fazer igual a primeira forma,mas temos uma diminuição de código e uma organização maior,o for in é muito utilizado para percorre chaves de um objeto 
}
const obj = {
    nome:'Alvaro',
    idade:18,
    profissão: 'Programador'
}
for (let c in obj){
    console.log(c) // dessa forma podemos percorre as chaves de um objeto
}
for (let c of array){
    console.log(c) // podemos utilizar o for of para percorre todos os elementos dentro de um objeto interavel,no caso um array,set,map entre outros,perceba que essa forma organiza ainda mas nosso código que a forma de cima em que temos que coloca array[c]
}
