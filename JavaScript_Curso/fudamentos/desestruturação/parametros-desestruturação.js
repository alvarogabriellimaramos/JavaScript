// dentro do javascript podemos utilizar a desestruturação nos paremetros,deixano mas acessivel as chaves de um objeto ou elementos de array 
// desestruturando em objetos: para desestrutura um paremetro de uma função por partes de objetos,utilizamos o {valor-chave}
const MostraNome = ({nome,idade,profissão = 'Programador'}) => {
    return `Seu nome é ${nome} e sua idade é de ${idade} anos.Sua profissão é ${profissão}`
}
const pessoa = {
    nome:'Alvaro',
    idade: 18
}
console.log(MostraNome(pessoa)) // dentro da chamada da função passamos o objeto que queremos pega a chave desestruturada,lembrando que assim como na desestruturação normal as chaves de um objeto nos parametros tem que ser correspondente a chave dentro do objeto,podemos também atribuir valores a chaves que não existe

// desestruturação de array:Em array colocamos os colchentes para desestrura nos paremtros,aqui independente da quantidade de elementos dentro do array,ele irá imprimir apenas dois valores,no caso os primeiros
const MostraElements = ([a,b]) => {
    console.log(a,b)
    const soma = a + b 
    if (soma >= 5){
        return soma
    }
    return false
}
const array = [1,4,3,4]
console.log(MostraElements(array))

// nas funções como parametros de desestruturação podemos desestrutura um objeto dentro de outro objeto 
const object = {
    nome: 'Alvaro',
    idade: 18,
    profissão: {
        profissão_1 : 'Programador',
        profissão_2: 'Engenheiro'
    }
}
const FN_DESESTRUCT = ({profissão:{profissão_2}}) => {
    console.log(profissão_2)
}
FN_DESESTRUCT(object)