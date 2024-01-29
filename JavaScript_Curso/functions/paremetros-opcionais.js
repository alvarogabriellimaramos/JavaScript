// no javascript os parametros e retornos são opcionais,isso significa que não é obrigatorio retorna algo de uma função,ou também não é obrigatorio utiliza todos os parametros dentro da função 
const RENTAGULO = (largura,altura = 3) => {
    const area = largura * altura 
    if (area > 20) {
        return 'A area do triangulo é maior que 20' + area
    }
    return `Area do triangulo ${area}`
}
console.log(RENTAGULO(5,2)) // dentro das funções em JS podemos decidir se queremos passa todos os parametros que a função pede 
console.log(RENTAGULO(2))// ele irá retorna NaN ja para calcula a área do triangulo precisamos de dois valores,podemos adiciona um parametro padrão nessa ocasião,no seguno valor,para adiciona um parametro padrão utilizamos o =,e o adicionaremos o segundo valor se quisermos 
// podemos adicionar vários parametros acima do que a função pede 
RENTAGULO(2,4,5,6,1) // nesse caso não faz sentido já que a função não está utilizando o operador rest,esse assunto no javascript deixa a linguagem muito flexivel mas temos que ter cuidado ao utilizamos isso nas nossas funções,já que podemos ter resultado inesperados 
const nome = 'Alvaro'
const rest = nome === 'alvaro'?'Nome igual a alvaro': 'nome diferente'
console.log(rest)
