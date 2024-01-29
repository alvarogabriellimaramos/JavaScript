
// algumas forma de criar objetos 

// notação literal 
const obj = {nome:'Alvaro'}

// Object em JS 
// o Objeto Object é uma function 
console.log(typeof (Object))
// mas se chamaos o new Object teremos um objeto,ja que o new retorna a instancia de um objeto criado 
console.log(typeof(new Object))
const obj2 = new Object
console.log(obj2)

// podemos criar nossas proprias funções construturas 
function Produto(nome,preço,taxa){
    this.nome = nome 
    // lembrando que quando usamos o método this dentro de uma função ou classe estamos deixando uma váriavel publica ou método
    this.getDesconto = function(){
        return preço * taxa // aqui não podemos mas altera os valores preço e taxa,ja que eles não tem o this 
    }
}
const obj3 = new Produto('notebook',1220,100)
console.log(obj3)

// função factory 
function Person(nome,idade,profissão){
    return{nome,idade,profissão}
    // tudo que estiver no return será uma propriedade ou método publico,o que estive fora,será um método privado
}
const pessoa1 = Person('alvaro',18,'Programador')
console.log(pessoa1)
// lembrando que função factory ela é uma função de fabrica,significa que ela fabrica alguma coisa,não so objetos,pode ser array e etc...

// Object.create
const Pessoa = Object.create(null)
console.log(Pessoa)

// Podemos criar um objeto atraves do JSON.parse 
const fronJson = JSON.parse('{"nome": "Sou um JSON"}') // o JSON.parse irá retorna um objeto javascript 
console.log(fronJson)


// adiciondo propriedades notação ponto
produto.nome = 'Alvaro'
produto.idade = 18 
// adicionando propriedades colchetes 
produto['profissão'] = 'Desenvolvedor JavaScript'
console.log(produto)
console.log(produto)

// objeto um pouco mas complexo 

const Carro = {
    NomeCarro: 'Ferrarir',
    Valor: 89000,
    proprietario:{
        nome:'Alvaro',
        idade:18,
        profissão:[
            'Desenvolvedor',
            'Engenheiro'
        ]
    }
}
// deletado 
delete Carro.proprietario.profissão 
console.log(Carro.proprietario.profissão)