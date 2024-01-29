 const Pessoa = {
    nome: 'Alvaro',
}
const people = Pessoa.Imprimir // quando atribuimos  método de um objeto a uma váriavel o método irá se torna indenpedente do objeto e não irá reconhece as referencia a outras chaves do objeto dentro dele,o this dentro do objeto não irá mas se referir ao objeto pessoa,isso acontece por causa da variação do this
function FUNCTION({nome,idade}){
    return `seu nome é ${nome} sua idade é de ${idade} anos`
}

// alguns método explicitos dos objetos,lembrando que para acessar os métodos explicitos devemos acessar atráves dos métodos dos objetos

// 1 - call: o utilizando método call podemos direcionar o this de um objeto para outro objeto,aqui está um exemplo abaixo,podemos também troncar valores de objetos,por exemplo 
const Pessoa2 = {
    nome: 'Alvaro',
    idade: 18,
    FN_EXPLICITA: function(){
        return `Olá ${this.nome}`
    },
    Mostrar: FUNCTION
}
const result = Pessoa2.FN_EXPLICITA.call(Pessoa)
console.log(result)
// utilizando o bind: o método explicito bind tem o mesmo objetivo do call,mas ele irá retorna uma nova função do método que queremos acessar dentro do objeto,exemplo 
const new_function = Pessoa2.FN_EXPLICITA.bind(Pessoa)
console.log(new_function())