function Pessoa(nome){
    this.nome = nome 
    this.falar = function(){
        console.log('Olá ',this.nome)
    }
}