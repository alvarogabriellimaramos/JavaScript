// lembrando que assim como as variaveis funções tem que ter bons nomes 
// função sem retorno 
function soma(a,b /*Parametros*/){
    console.log(a + b )
}
soma(2,6)
soma(2)// quando passamos um valor em um parametro e no outro não passamos nada,o parametro que não passamos nada terá um valor undefined,nesse caso da função soma teremos um NaN 
soma(2,10,4,5,6,7,8) // podemos passar varios valores dentro da chamada da função,mas ele so irá retorna de acordo com a quantidade de parametros na crianção da função,ou seja ele irá ignora todos esses numeros 

// função com retorno 
function soma_2(a,b = 1 /* No parametro b estamos dizendo que por padrão o parametro b terá o valor um  */){
    return a + b  // return opcinal dentro da função,mas muito utilizada é muito recomendada 
}
// para imprimir o valor da função soma_2,usamos o console.log 
console.log(soma_2(2,3))
// caso coloquemos só um parametro na função soma_2 teremos um resultado diferente,da função soma 
console.log(soma_2(2)) 