// function declaration || function regurla,a forma mas simples de criar uma função,utilizando a palavra reservada function,na function declaration podemos chama a função antes mesmo dela ser criada,isso pode ser útil em alguams situações 
console.log(soma(3,4))
function soma(x,y){
    return x + y
}
// function expression,essa é uma forma de colocamos funções dentro de váriaveis,aqui não podemos chama a função antes dela ser criada

const sub = function(a,b){
    return a - b
}
console.log(sub(3,4 ))