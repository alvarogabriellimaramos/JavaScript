// Os operadores logicos são usados para avaliar e manipular expressões logicas e terona um valor booleano(true ou false)
// Operador lógico E ( && ),esse operador retorna true se todas as expressões forem verdadeira,caso uma das expressões forem falsa,ele irá retorna false,ele irá avalia as expressões uma atrás da outra e retorna o valor,o operador && é muito usado para verifica se duas expressões é verdadeira antes de tomar uma decisão no codigo 
const a = true 
const b = false 
const ab = true 
console.log(a && b)
// um exemplo melhor usando o if 
const nome = 'alvaro'
const idade = 18
if (nome == 'alvaro' && idade == 18){
    console.log('Seu nome é alvaro e sua idade é de 18 anos ')
} // aqui ele irá so irá imprimir no console se o nome for alvaro e a idade for 18 anos 

//Operador lógico OU (||) o operador retorna true se pelo menos uma das expressões forem verdadeira,caso as duas expressões forem falsa ele retorna false 
// O operador || é util quando você precisa executar uma ação ou tomar uma decisão se pelo menos uma das condições for verdadeira 
// exemplo de || 
if (nome == 'alvaro' || idade == 17){ //aqui ele irá executar true,já que uma das expressões é verdadeira 
    console.log(true)
}

// operador de negação (!),é utilizado para converter uma expressão,se a expressão for verdadeira ele retorna false,e se a expressão for falasa ele retorna true
// exemplo 
const array = [1,2]
console.log(!true) //operador unario 
// xor ou OU exclusivo é um operador que não é diretamente da linguagem mas podemos cria-lo usando outros operadores,ele retorna true se apenas uma das expressões forem verdadeira se ambas forem verdadeira ele retorna false,se ambas for falsa ele retorna false 
console.log(nome != 'alvaro') //podemos usar a diferença para simular um ou exclusivo 
console.log(1 | 2) // operador bitwise,ele irá retorna um novo numero inteiro que o resultado das operações binarias,ele é usado em operações binarias

function fn_OBJ(expre1,expre2){
    const obj_1 = {
        nome: 'Alvaro',
        idade: 18,
    }
    const {nome,idade} = obj_1
    return {nome,idade} // forma mais inteligente de retorna valores de um objeto 
}
console.log(fn_OBJ(true,true))