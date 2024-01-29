// Herança em orientação a objeto é reutiliza métodos e funções de uma classe ou objeto 'pai',em outro objetos ' filhos'

Object.prototype // esse prototype é o de mais alto nivel na linguagem javascript,depois dele não tem mais nada 

// o prototype é utilizando em javascript como forma de compartilhamentos de métodos e propriedade entre herança,reutilizando códigos e deixando mas eficiente
// Exemplo de prototype chain (cadeia de prototipos)
const SuperAnimal = {
    raça(raca){
        console.log(raca)
    }
}

// o método Object.create('prototype') criar um novo objeto herdando um prototype de um objeto já criado 
const Animal = Object.create(SuperAnimal)

Animal.falar = som => console.log(som)
Animal.nome = 'Cachorro'
const gato = Object.create(Animal)

gato.falar('miau')

gato.raça('Amarelo')

// Exemplo com Arrays 
const Array = [1,2,3,4,5]

const Array2 = Object.create(Array)

Array2.forEach(element => {

    console.log(element)

});
// podemos utilizar o isPrototypeOf(objeto) para saber de qual prototype é o objeto herdado
console.log(Array.isPrototypeOf(Array2))

// Misturando,temos um objeto array e depois criamos uma variavel Obj herdando as propriedade de Numbers e depois atribuimos o valor Obj.nome a varíavel filho
const Numbers = [1,2,3]

const Obj = Object.create(Numbers)

Obj.nome = 'Alvaro'

console.log(Obj)

//Lembrando que todo Objeto que é uma função tem o atributo prototype  


// outro exemplo de herança dessa vez utilizando função

const Pessoa1 = {
    Nome:'Alvaro',
    Idade:18,
    Falar(nome){
        console.log('Olá meu nome é ' + nome)
    }
}

const FunctionTeste = (Objeto,propriedade) => {
    const NewObjeto = Object.create(Objeto)
    return NewObjeto[`${propriedade}`]
}
console.log(FunctionTeste(Pessoa1,'Nome'))

// casso o prototype de um sub-objeto tenha a propriedade especifica,ele irá fazer o que chamamos de sobreamento que é quando uma propriedade se coloca 'encima' de outra propriedade com o mesmo nome,mas em escopo diferente