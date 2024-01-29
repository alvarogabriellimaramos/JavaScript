// o eventLoop é o siglo de vida do javascript,ele é responsável pela a execução de código javascript de forma assicrona,sem bloquear a execução restante do código,ele é usado como gerenciamento de tarefas assicronas fazendo com que o código não assicrono continue seu fluxo natural 

// Aqui estão algumas caracteriticas do event loop (as principais )

// 1 - Eventos:os eventos são ocorrencias que podem acontece durante a execução do programa,como o click de um mouse,requisição de servidores,temporizadores expirados e etc..

document.body.addEventListener('click', event => console.log(event.target) )

// 2 - Callback:Uma callback é uma função de retorno que será chamada quando uma operação assicrona for concluida 
function teste(nome,callback){
    let boolean = true
    if (boolean) return callback(nome) // se a operação for true
    else{return `Erro na operação assicrona`}
}
function Imprimir(param){
    return param
}
console.log(teste('Alvaro',Imprimir))
// 3 - CallStack: pilha de chamada,é onde o javascript armazena as funções,quando uma função é chamada ela é adicionada ao topo da pilha e quando ela é concluída ela será removida da pilha de chamada,a callstack irá executa uma função por vez até uma por uma ser concluida,mas como podemos ter funções que podem demora mais tempo que outras para serem concluída,utilizamos funções assicronas,async function,na pilha de chamada,o que significa que a função mesmo demorando para ser concluida não irá atrapalha o fluxo natural da callstack e as outras funções sicronas irão ser executadas normalmente,seguindo o fluxo natural do callstack

console.log('Função 1 ')
setTimeout(() => console.log('Função 2'),1000)
console.log('Função 3')
// 4 - Fila de Evento (Event Queue): A Fila de eventos é onde os eventos são enfileirados para serem processados,sempre que um evento ocorre esse evento é colocado no final da fila de evento 

// exemplo 
document.body.addEventListener('click', event => console.log(event.target) ) // quando o botão for clicado ele será armazenado na Fila de Evento 

// 5 - EventLoop: o event loop é um laço que verifica repetidamente se alguma callback ou propriedade na fila de eventos,se houver então ele pega a callback associada e executa de forma sigle-thread ou seja de uma por uma,