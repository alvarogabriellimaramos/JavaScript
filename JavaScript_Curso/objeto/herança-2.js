const Pessoa = {
    nome:'',
    idade: 0
}
const pessoa1 = {
    detalhes(){
        console.log(`${super.nome}`)
    }
}
Pessoa.nome = 'Alvaro '
Object.setPrototypeOf(pessoa1,Pessoa)
pessoa1.detalhes()
