// podemos ter variaveis com o mesmo nome,desde de que o escopo seja local e não global 
var numero = 1 
{
    var numero = 2 
    console.log('Dentro =',numero)
}
console.log('Fora=',numero)