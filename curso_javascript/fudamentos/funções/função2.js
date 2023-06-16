// Podemos atribuir uma função a uma variavel 
const soma = function(a,b){ // aqui iremos criar uma função anonima que tem as mesma propriedade de uma função com nome so que a unica coisa que tira é o nome 
    return a + b 
}
console.log(soma(2,3))
//criando uma função arrow,uma função arrow é uma forma de criar funções mais rapidas e server para reduzir linhas de codigos,nesse exemplo tambem estamos atribuindo uma função a uma variavel 
const soma_2 = (a,b) => {
    return a + b 
}
// a grande vantagem do arrow function é o retorno implícito,ou seja teremos uma função com uma unica linha,ja que não temos o corpo da função que é a { }
const s = (a,b) => a + b 
console.log(s(2,7))
// caso tenhamos apenas um parametro podemos retirar os parenteses 
const imprimir = a => console.log(a)
imprimir('A')