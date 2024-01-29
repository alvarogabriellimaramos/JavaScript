// o método sort é um método javascript utilizado em array que server para organiza um array com base em uma função callback que é passada dentro do método sort, o método sort altera o array original reogarnizando com base na função passada como paramêtro

// sitaxe 
// array.sort((Função de comparação))

// Se a função de comparação não for fornecida o método sort irá transforma os elementos em strings e irá ordenar o array em ordem alfabetica 

// como o método sort funciona 

// caso a função de comparação seja fornecida ela será chamada para comparar dois elementos do array por vez,A função deve retorna negativo se o primeiro elemento for menor que o segundo e positivo se o primeiro elemento for maior que o segundo, e zero se eles forem iguais 
const nums = [1,2,3]
nums.sort((a,b) => console.log({a,b}))
const strings = ['banana','uva','maçã','limão']
const SortedStr = strings.sort((a,b) => {
    const index = Math.random() - 0.5
    console.log(index)
    return index 
})
console.log(SortedStr)
