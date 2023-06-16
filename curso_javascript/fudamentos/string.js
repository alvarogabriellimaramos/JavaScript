// string em JavaScript é tudo aquilo que está dentro de uma aspa simples,aspa dupla ou craze 
const teste = 'Alvaro'
// método charAt irá percorre os indices da string e irá me fornece a letra que está no indice especificado 
// lembrando que todas as string comeca no indice zero  
console.log(teste.charAt(4))
function char(str){
    const caracter = str.charAt(4)
    if (caracter == 'r'){
        return 'caracteres igual '
    }
    else{
        return 'Caracteres diferentes '
    }
}
console.log(char('Alvaro'))
// caso ele não encontre o indice da string,irá retorna um valor vazio que no caso é esse resultado de baixo 
console.log(teste.charAt(7))
// o método charCodeAt irá retorna o valor unicode ou tabela asq do caracter de um determinado indice dentro de uma string 
console.log(teste.charCodeAt(1)) 
// podemos usar o método indexOf para saber em qual indice está determinado caracter 
console.log(teste.indexOf('A'))
// codigo simples indexOf
const nomes = (nome) => {
    if (nome.indexOf('a') != -1){
        return 'Seu nome tem a letra a '
    }
    else{
        return 'Seu nome não tem a letra a '
    }
}
console.log(nomes('a'))
// podemos usar o método substring para definir o inicio e fim de uma string sem altera-la por exemplo 
console.log(teste.substring(6)) // o método substring tera um inicio e um fim,mas podemos so colocar o inicio se quisermos, e se colocamos um valor que não tenha na string teremos um retorno vazio 
// podemos concatena uma string usando o método concat 
console.log('Olá '.concat(teste))
const str = 'Olá '
if (str == 'Olá '){
    const new_teste = str.concat(teste)  
    console.log(new_teste)
}
// na concatenação podemos usar o + 
console.log(str + teste)
// podemos usa o método replace para mudar algumas coisas na nossa string,sintaxe basica do replace [ string.replace(padrao, substituicao) ],lembrando que o método replace não alterar diretamente a string original e sim irá retorna uma nova string com os novos valores atribuidos 
const str_replace = teste.replace('a','b')
console.log(str_replace)
let replace_fn = function(str,caracter,new_caracter){
    if (str.indexOf(caracter) != -1){
        const new_str = str.replace(caracter,new_caracter)
        return new_str 
    }
}
console.log(replace_fn('Alvaro','A','B'))
// podemos usar uma expressão rergula no replace ou regex,mas esse método é mas avançado 
console.log(teste.replace(/\w/g,'e'))
// podemos usar o método split para transformar uma string em um array,por exemplo 
const str_Array = 'Olá,Alvaro'
console.log(str_Array.split(','))