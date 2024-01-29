// IIFE -> Immediatle Invoked Function Expression
/* Uma IIFE é uma função autamente invocada logo após sua criação,isso é bastante útil para encapsulamento de código e para que váriaveis do escopo global e da iife não entre em conflitos entre si  */
(function nome (){
    console.log('Olá')
})()
// Exemplo prático 
const IIFE = (() => {
    const VariavelPrivada = 'Essa váriavel é privada'
    function FunctionPrivate(){
        console.log(VariavelPrivada)
    }
    return {FunctionPrivate}
})()
const Var = IIFE.FunctionPrivate()
console.log(Var)