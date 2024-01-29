function Aula(nome,videoID){
    this.nome = nome 
    this.videoID = videoID
}
const aula = new Aula('Bem vindo',14)

// simulando o operador new 
function novo(callback,...paramns){
    // notação literal objeto 
    const obj = {}
    // associado o obj.__proto__ paara  ser o prototype do callback 
    obj.__proto__ = callback.prototype 
    callback.apply(obj,paramns)
    return obj
}
const aula2 = novo(Aula,'Aula 14',14)
