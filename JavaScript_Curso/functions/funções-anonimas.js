const Operation = (a,b,operation = () => a + b) => { // podemos passa funções como parametros paadrão de outras funções,seja elas anonimas ou declaraveis 
    return operation(a,b)
}
console.log(Operation(5,6,function(a,b){
    return a - b
}))

const soma = (a,b,callback) => { // funções anonimas sendo passadas como argumentos para outra função
    const soma = a + b 
    return callback(soma) // retor nando a função callback
}
const MostrarResultado = (soma) => {
    console.log(`O resultado da soma foi ${soma
    }`)
}
soma(3,5,MostrarResultado) // output
