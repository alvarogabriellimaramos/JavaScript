// 1 - Clousers: clousers em JavaScript são funções que acessa váriaveis fora do seu escopo,as clousers passa a acessa váriaveis e propriedade em um escopo acima e maior que o dela,as clousers quando não encontra uma propriedade ou váriavel especifica,ela passa a procura em um escopo maior que o dela.

// exemplo de clousers 
let nome = 'Alvaro'
function ClouserFunction(){
    console.log(nome)
}

// 2 - Promises: As promises em javascript são objetos responsáveis por lida com operações assicronas,como fazer uma requisição http alguma api,ler dados ou envia dados a algum banco de dados,ler algum arquivo e etc...,com as promises podemos lida com operações assicronas de forma mais eficiente e legivel no nosso código,evitando o uso de callback hell 

// as promises server para 'encapsula' algo invento que queremos que aconteça no futuro

/* Os três estados de uma promises 
1 - pedente: a promises está sendo executada
2 - resolve: a promise foi resolvida,deu tudo certo
3 - rejected: a promise foi rejeitada,a operação falhou  */
// exemplo pratico de uso de promises 
// vamos fazer uma suposição de um programa que está buscando dados no banco de dados 
function FunctionPromises(){
    const Dados = [
        {nome:'Alvaro',idade:18},
        {nome:'Gabriel',idade:16},
        {nome:'Pedro',idade:15},
        {nome:'Ana',idade:21}
    ]
    return new Promise((resolve,reject) => {
        let operação = true 
        setTimeout(() => {
            if (operação) resolve(Dados)
            else{reject('A operação assicrona falhou ')}
        },1000)
    })
}

// 3 - Async/Await: O async e o await são maneiras mais modernas de lida com promises e operação assicrona,o async serve para dizer que uma função é assicrona e o await server para espera determinada operação ser concluida antes de continua com o fluxo de código da função,deixando assim o resto do código continua seu fluxo normalmente,o async e await é uma maneira mais legivel e moderna para lidar com operações assicronas do que com promises tradicionais

// o async server para dizer que uma função ou callback é assicrono e o await server para extrair o valor de uma promises sem a necessidade de then ou catch.

// digamos que vamos fazer uma requisição do tipo get a uma api especifica 
let url = 'http://www.exemplo.com'
async function GetResponse(){
    const data = (await fetch(url)).json()
    return data 
}
GetResponse().then(data => console.log(data))
// Event Loop: o event loop 
const teste = () => console.log('Operação assicrona')
teste()
for (let c = 0 ; c <= 10000;c++) console.log(c)