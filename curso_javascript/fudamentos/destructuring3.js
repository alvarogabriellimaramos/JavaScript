// usando o destructuring em parametros de funções 
// començando destructuring de array em funções,para usa o desctruturing em array na funções usamos o [] dentro do parametros e passamos a quantidades de variáveis que queiramos que ele nos retorne,por exemplo 
const Fn_Array = ([n,n_2]) => {
    console.log(n,n_2)
}
const array = [1,2,3]
const [numero_1,numero_2,numero_3] = array // criando uma extranção simples  
Fn_Array(array) // nessa linha não precisamos passar nenhuma variavel já que passamos dentro dos parametros da função e dentro do corpo da função,quantas variaveis da extranção queremos que retorne,então só passamos o nome da variavel que está aguardando os valores,nesse o nome da variável é array
// essa regra também é seguinda pelos os objetos 
const Fn_Object = ({nome,idade}) => {
    return `Olá ${nome},você tem ${idade} anos `
}
const object = {
    nome: 'Alvaro',
    idade: 18,
    imprimir: function(){
        return Fn_Object(object) 
    }
}
const {imprimir} = object
console.log(imprimir())
// podemos definir valores padrão para as variáveis dentro dos parametros 
const fn_obj = ({nome,idade,profissão='Desconhecida'}) => {
    return `Sua profissão é ${profissão}`
}
const {profissão} = object
console.log(fn_obj(object))
// caso o usuario não passe nenhum valor nem mesmo um objeto,teremos erro,mas podemos passar um valor padrão para tentar tratar esse erro 
const fn_obj_2 = ({nome,idade} = {}) => { // mas teremos o retorno de undefined 
    return nome,idade 
}
console.log(fn_obj_2())