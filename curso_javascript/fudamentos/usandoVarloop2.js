const funcs = []
for (var i = 0; i <= 10; i++){
    funcs.push(() => {
        console.log(i)
    }) // dentro de um array tambem podemos ter funções 
}
funcs[10]()//nessa chamada teremos sempre o mesmo resultado ja que var não tem escopo de bloco ou seja ele não irá respeita o incrimento do loop 
const array = [function soma(a,b){
    return a + b 
}]
console.log(array[0](2,3)) // para acessar uma função dentro de um array fazemos assim,colocamos o indice em que ela foi criado e os () e dentro dos parenteses a quantidade de parametros que ela recebe 