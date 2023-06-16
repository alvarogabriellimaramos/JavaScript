// o templante string server para concatenar variaveis dentro de uma string de uma forma mas dinamica e rapida

// sem templante string 
const nome = 'Alvaro'
const concatenação = 'Olá ' + nome + ' Tudo bem ' + ', Como Você está ? '
console.log(concatenação)
// com templante string,para usamos o templante string colocamos entre craze,usando o templante string podemos quebra linhas que a string normal não nos permitiria fazer,o templante string tambem irá considerar tabs e espaços dentro da string 
console.log(`Olá ${nome} 
    tudo bem?!,
Como você está ?`)
// no templante string também podemos colocar funções por exemplo 

const soma = (a,b) =>{
    return (`${a} e ${b} = ${a + b}`) 
}
console.log(`a soma dos numeros ${soma(4,2)} `)