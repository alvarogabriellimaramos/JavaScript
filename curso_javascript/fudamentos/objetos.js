/* Objetos são estruturas de dados que permiter armazenar e organizar valores,os objetos são representados por um par de {} */
const obj_1 = {}
// podemos atribuir valores fora do par de chaves,assim como podemos atribuir valores dentro do  par de chaves,lembrando que um objeto é uma coleção de chaves e valores 
obj_1.nome = 'Alvaro' // depois do nome obj_1 vem o indetificador ou seja .nome  
console.log(obj_1)
// podemos tambem criar indetificadores com espaços utilizando o []
obj_1['Salario minimo'] = 2500
console.log(obj_1) // evitar atributos com espaço 
//atribuindo valores já dentro das {}
const obj_2 = {
    nome: 'Gabriel',
    salario: 1200,
    // podemos ter um objeto dentro de outro objeto,podemos ter todos os tipos de dados dentro de um obj,lembrando que chave é um indetificador e o valor é todo tipo de dados que você deu para a chave  
    obj:{
        nome: function(){
            console.log('Alvaro ')
        }
    }
}
// parei na parte 12:48 da aula do telegram 
