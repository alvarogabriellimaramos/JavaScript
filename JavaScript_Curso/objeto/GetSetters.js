function GetSet(nome){
    const pessoa = {
        _valor: 1, // convenção isso que dizer que a váriavel é privada e so pode ser acessada dentro do objeto
        get valor(){
            return this._valor++
        }, 
        set valor(valor){
            if (valor > this._valor) this._valor = valor 
        } // o javascript permite ter dois nomes iguais,mas com métodos diferentes,por exemplo temos duas propriedades com o nome valor,mas com métodos diferentes.
    }
    return pessoa
}
const pessoa1 = GetSet('Alvaro',18)
pessoa1.valor = 1000
console.log(pessoa1.valor,pessoa1.valor)
pessoa1.valor = 800
console.log(pessoa1.valor)