// função em JS é First-Class Object (cidadões de primeira classe),signfica que tem caracterica especiais,significa que podemos armazena as funções em váriaveis,podemos retorna funções,podemos armazena as funções em parametros de outras funções etc...

// criar função de forma literal 
function fn1(){
} // em uma função tradicionaç não podemos tirá o bloco

// passando uma função á uma variavel 
const fn2 = function(){

}
console.log(typeof(fn2)) // tipo de dado function,as funções como são um tipo de dado como qualquer outro no javascript,torna mas flexivel sua manipulação 

// armazena funções em um array 
const array = [1,2,function(){
    return 'Função dentro do array'
}]
console.log(array[2]()) // assim executamos uma função dentro de um array,pegamos o indice da função e depois a chamamos utilizando parenteses

// podemos atribuir funções a objetos também 
const object = {
    nome: 'Alvaro'
}
object.fn = function() {return `Olá ${this.nome}`}
console.log(object.fn())

//passando funções como paremetros para outra função 
function soma(operador,a,b,callback){
    switch(operador){
        case '+':{
            return callback(a,b)
        }
    }
}
const callback = (a,b) => {
    return a + b
}
console.log(soma('+',2,5,callback))

// uma função pode retorna outra função 
function fn3(){
    return function(a,b){
        return a + b
    }
}
console.log(fn3()(3,4))// para chama uma função dentro de outra função colocamos dois parenteses caso tenha apenas uma função,se tiver mas colocamos mas parenteses // parei na parte de (parametros e retorno s227 opcionais)