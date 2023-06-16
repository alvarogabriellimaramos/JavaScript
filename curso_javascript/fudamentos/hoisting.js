
// A setença de codigos em linguagem de programação é lidar de cima para baixo,mas em javascript isso mudar um pouco,ja que temos o  conceito de hoisting,é um conceito um pouco diferente nas maiorias das linguagens de programação,mas muito comum em javascript 
// Basicamente o hoisting funciona da seguinte forma,ele pega as variaveis que são declaradas com var e leva pro topo do nosso codigo e pega as funções e também leva para o topo,as variaveis declaradas com var,caso sejam acessadas antes das suas declarações teremos o resultado undefined,mas com as funções isso muda,mesmo que acessemos encima da sua crianção teremos o mesmo resultado,se tivessemos acessando a função abaixo da sua declaração.
//aqui está um exemplo com var 
var x;
console.log(x)
var x = 2 
console.log(x)
// exemplo com função 
console.log(soma(2,3))
function soma(a,b){
    return a + b 
} 
let a = 2 
console.log(a)
const c = 2 
// lembrando que isso so irá funciona para funções e para variaveis que são declaradas com var 
//lembrando que uma variavel declarada com var estiver dentro de uma função,ela não irá está acessivel fora da função,mas dentro do corpo da função ela ainda irá sofre o hoisting 