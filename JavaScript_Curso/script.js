// escopo léxico,nada mas é do que funções aninhadas como essa do exemplo abaixo,terem o pode de busca váriaveis em escopos acima delas 
function Funcao(callback){
    let livro = ' Uma breve Hístoria do tempo'
    function Internal(){
        console.log(livro.toUpperCase())
    }
    callback(Internal())
}
function ReturnFunction(callback){
    return callback
}
Funcao(ReturnFunction)
// closures são funções que tem acesso a todo o contexto léxico ou seja ao escopo que está fora do escopo da função,isso significa que toda função é uma clousers já que todas elas tem o pode de acessa váriavel em um escopo maior que o delas,exemplo 
let local = 'Contexto Léxico'
const FunctionSafe = param => { // essa função é uma clouseres,isso por que temos acesso a tudo que está fora do escopo da função
    console.log(local)
} 
FunctionSafe() 
// lembrando que as clouseres são terão acesso a váriaveis e a escopos de outras funções ou de blocos,aqueles que foram capturados no momento de sua crianção
function Clouseres(){
    const nome = 'Alvaro'
    function ClouseresInternal(){
        return nome // aqui ele so irá pega a váriavel nome por que o escopo da função externa foi capturado pela função interna
    }
}
const func = secret => () => { // aqui temos uma clouseres,estamos retornando uma função dentro de uma outra função,a segunda função está pegando o parametro da primeira função 
    return secret
}
