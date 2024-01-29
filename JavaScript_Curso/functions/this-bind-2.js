function Pessoa(){
    const self = this
    self.idade = 0
    setInterval(function(){
        console.log(self.idade++)
    },500)
    
}
const People = {
    nome: 'Alvaro',
}
const Result = Pessoa.bind(People)
console.log(Result())