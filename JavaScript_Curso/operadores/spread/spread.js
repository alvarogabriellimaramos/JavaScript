// utilizando o spread em array 
const array = [1,2,3,4]
const array_2 = [5,6,7,8]
const new_array = [...array,...array_2]

console.log(new_array)
const arrays = (...valores) => {
    console.log(valores)
}
// utilizando o spread em objetos 
const pessoa = {
    nome:'Alvaro',
    idade:18,
    profissão: 'Programador'
}
const pessoa_2 = {
    nome: 'Gabriel', // operador spread não permitir repetições em objetos,ele irá pega o valor da chave repitida do ultimo objeto adicionado e irá adicionar os valores das chaves do outro objetos,se os nome da chave forem diferentes do ultimo objeto
}
const new_obj = {...pessoa,...pessoa_2}// ou seja no novo objeto que o spread está sendo utilizado as propriedades em comum serão pega do ultimo objeto adicionado,ja as propriedades incomum,ou seja que não tem semalhança de valores e chaves entre os objetos serão adicionadas
console.log(new_obj)

const soma = (n,n2,n3) => {
    return n + n2 + n3
}
const arr = [1,2,3,4,5,6]
console.log(soma(...arr))