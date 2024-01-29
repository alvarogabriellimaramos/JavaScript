// contexto lexico ou escopo lexico é uma parte fundamental do javascript para entendermos o funcionamentos de funções aninhadas dentro da linguagem,ele nada mas é do que uma forma de funções internas busca valores em escopos maiores(acima dela),caso esse valor não seja encontrado dentro da função externa
// o contexto lexico tem apenas um fluxo que é de dentro para fora
// Analise o exemplo abaixo
const valor = 'Global'
function minhaFuncao(){
    function minhaFuncao2(){
        console.log(valor)
    }
    minhaFuncao2()
}
minhaFuncao()
// no javascript uma função tem 'conciencia' do local onde ela foi criada,isso significa que podemos chama funções dentro de outras funções,em objetos e array,mas a função irá sempre se lembra do local onde ela foi definida,exemplo abaixo
function exec(){
    const valor = 'Local'
    minhaFuncao()
}
exec()