// A função prototype é uma função utilizada principalmente em objetos que tem como base funções construtoras,o prototype é responsavel por adiciona um novo método ao objeto relacionado a função construtora,exemplo 

// digamos que eu tenha uma função Carro com nome e ano de lançamento,mas quero adiciona um método utilizando o protype que mostra os detalhes das propriedade do objeto 
function Carro(nome,ano){
    this.nome = nome 
    this.ano = ano 
}
Carro.prototype.detalhes = function(){
    return {Nome: this.nome,AnoLançamento: this.ano}
}
const ferrari = new Carro('Ferrarir',2023)
console.log(ferrari.detalhes())