// a desestruturação em javascript server para acessar de forma mas facil os elementos em alguns tipos de dados,em array ou objetos por exemplo,esse operador permitir extrair valores de objetos e array e atribuir a váriaveis tornando assim mas facil de acessar o conteudo atribuindo a essa váriavel 

const object = {
    nome:'Alvaro',
    idade:18,
    profissão:'Programador'
}
const {nome,idade,profissão} = object
console.log(nome,idade,profissão)
// dentro do operador de desestruturação podemos atribuir valores caso a chave não ou elemento não exista,por exemplo 
const object_2 = {
    year:18,
    profissão:'Programador'
}
const {nome_2 = 'Alvaro',year,profisão} = object_2 // perceba que eu tiver que coloca nomes diferentes para essas váriaveis já que os nomes da primeira váriavel fica disponivel para todo o escopo em que ela foi criada
console.log(nome_2,year,profissão) // lembrando que todos esses valores de váriaveis deve ser correspondente as chaves dentro do objeto

const desestruturação = ({nome,idade}) => {
    return {nome,idade}
}
const obj = {
    nome:'Alvaro',
    idade:18
}
console.log(desestruturação(obj)) // podemos fazer uma desestruturação em paremtros de funções 

const array_desestruturação = ([a,b]) => {
    return [a,b]
}
const array = [true,false]
console.log(array_desestruturação(array)) // podemos fazer uma desestruturação de array em parametros de funções também facilitado a manipulação dos dados a mesma coisa vale para desestruturação de objetos em funções 
