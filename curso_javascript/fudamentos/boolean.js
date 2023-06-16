// os tipos booleanos server para verificar se um operador ou string ou qualquer outro tipo de dado é verdadeiro ou falso,no verdadeiro temos o true e no falso temos o false 
let desativado = false 
let ativado = true 
if (desativado == false){
    desativado = ativado
    console.log(desativado)
}

// podemos usar a duplicar negação ou not not para converter um  valor de algum tipo de dado,essa duplicar negação ira retorna o valor original booleano do dado ,diferente de uma unica negação que retornaria o valor contrario booleano,o not not é um otimo método para descobrir o real valor booleano de algum dado
console.log(!!false)
// os verdadeiros... 
console.log(!!3)
console.log(!!0)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

// os falsos...

console.log(!!'')
console.log(!!0)
