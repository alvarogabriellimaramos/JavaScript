// let tem a mesma função de var,a unica diferença é o escopo,var tem o escopo global,ja let tem o escopo local ou seja indepedente do bloco que seja criado o let so será visivel dentro daquele bloco 
var numero = 1 
{
    let numero = 2 
    console.log(numero)
}
console.log(numero)
// exemplo com função 
const let_fn = (n) => {
    if (n==2){
        let c = 'numero dois' // caso tentemos retorna essa variavel fora do if,teremos um erro,mesmo que ainda seja dentro da função 
    }
    return c
}
console.log(let_fn(2))