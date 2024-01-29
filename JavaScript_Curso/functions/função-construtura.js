// As funções construturas são funções usadas para construir objetos,as funções construtra são muito mas utilizadas em programação orientada a objeto,elas são chamadas construtoras por que são usadas para construir objetos  

// quando vamos construir uma função construtura é recomendado utiliza o Pascal Case,que significa inicia o nome da função com a primeira letra maiuscula
function Ventilador(velMax){
    this.VelocidadeMaxima = velMax
    this.ligado = false // utilizamos a palavra this para construir as propriedade da função,ja que uma função construtra irá aponta para um objeto 
}
const ventilador = new Ventilador(10) // aqui estamos criando uma instancia da funçõa construtora,as instancia são uma representação de funções construtoras ou classes que irá facilita a manipulação dos métodos dentro da função ou classe,cada instancia tem sua independencia,mas ela irá herda os métodos da função pai,podemos criar milhares de instancia.Para criamos uma instancia utilizamos a palavra reservada new 
console.log(ventilador) // ira nos retorna um objeto

function Carro(VelocidadeMaxima = 200,delta = 5){
    // atributo privado,quando queremos que um método váriavel,objeto,função e etc...seja privado não colocamos a palavra this 
    let _velocidadeAtual = 0
    // método publico a parti do this 
    this.acelerar = function(){
        if (VelocidadeMaxima + delta <= _velocidadeAtual) _velocidadeAtual += delta
        else {_velocidadeAtual = VelocidadeMaxima}
    }
    // método publico para pega a velocidade atual 
    this.getVelocidadeAtual = function(){
        return _velocidadeAtual
    }
}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
const ferrarir = new Carro(350,20)
ferrarir.acelerar()
console.log(ferrarir.getVelocidadeAtual())