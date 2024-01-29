// o operador rest é utilizando em parametros de funções ou loop com estruturas interaveis, o operador rest é utilizando tanto em funções quanto em loop quando a quantidade de parametros ou valores,não é toltamente reconhecida pelo programador,com o rest podemos passa um numero indefinido de valores
// utilização simples do rest 
const soma = (...numeros) => {
    let s = 0 
    for (let c of numeros){
        s += c
    }
    console.log(s)
}
const array = [1,2,3]
soma(array)
// utilizando o rest com desestruração em função 
const array_fn = ([...elementos]) => {
    console.log(`Elemento 1 - ${elementos}
    `)
}
const arr = [1,2,3,4,5,6]
const arr_2 = [4,5,6]
array_fn(arr)
// desestruturando um array utilizando rest 
const [a,b,...c] = arr
console.log(a,b,c)// podemos utiliza o rest para desestrutura array e objetos,na variavel c ele irá coleta os valores restante e atribuir a c (3,4,5,6),ja no a e b são terão um valor atribuindo para cada variavel 