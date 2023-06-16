// escopo léxico é uma forma de funções aninhadas buscar variaveis fora do corpo da sua função,ou seja buscar variaveis em um corpo de função acima delas,ai está um exemplo ,só que esse escopo lexico,so tem um fluxo que é de fora para dentro,caso nos declarassimos uma variavel dentro do internal,não conseguiriamos acessar essa variavel no external
// lembrando que cada vez que uma função é definida ela criar seu proprio escopo lexico  
const external = () => {
    const nome = 'Alvaro'
    const internal = () => {
        return 'Olá ' + nome
    }
    return internal()
}
// exemplo de que o fluxo das variaveis lexa é de fora para dentro 
const externo = () => {
    const nome = 'Alvaro'
    const internal = () => {
        console.log('Olá ' + nome)
        const externo = () => {
            return 'Olá ' + nome
        }
        return externo()
    }
    return internal()
}
console.log(externo())

// exercicio simples 
function externa() {
    const x = 10;
  
    function interna() {
      const y = 5;
      return x + y 
    }
  
    return interna();
  }
  
console.log(externa())
  
// lembrando que independete da aninhação que tivermos,caso dentro da propria função não seja encontrada a variavel que desejamos,a função aninhada irá busca essa variavel por outros escopos de funções acima dela 
const msg = 'Ola'
const exec = () => { // exemplo de que escopo lexico não vale so para escopo das funções
    return msg
}
console.log(exec())
const obj = {
    nome: 'Alvaro',
    imprimir:function(){
        return this.nome // caso criemos uma função dentro de um objeto,podemos acessar as outras propriedades do objeto dentro da função,usando o this,arrow function não se conectar com o this
    } 
}
console.log(obj.imprimir())
const fn = () => {
    return obj.imprimir()
}
console.log(fn())

// dentro de um objeto podemos ter um indentificador e caso criemos um outro objeto,podemos colocar o mesmo nome do indentificador do objeto acima,exemplo 
const obj_2 = {
    nome: 'Alvaro',
    profissão: 'Programador',
    obj_3:{
        nome: 'Alvaro'
    },
    imprimir: function(){
        return this.obj_3.nome
    }
}
console.log(obj_2.imprimir())
// caso nos definimos uma variavel com o mesmo nome mas em contexto lexico diferente,o fluxo do nosso codigo irá seguir normalmente,exemplo
const nome = 'gabriel' 
const lexico = () => {
    const nome = 'Alvaro'
}
console.log(nome) // mas se caso declaramos uma variavel com o mesmo nome e no mesmo escopo lexico,teremos um erro 