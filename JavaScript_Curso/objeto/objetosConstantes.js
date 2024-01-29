
// não podemos alterar o objeto em si,já que quando declaremos uma váriavel ela aponta para um enderenço de memoria,quando usamos o const a váriavel irá fica com esse enderenço até...
const pessoa = {nome:'Alvaro'}
pessoa.nome = 'Gabriel'
console.log(pessoa)
Object.freeze(pessoa)
pessoa.nome = 'Alvaro'
console.log(pessoa)

function Animal(raça,nome){
    this.nome = nome 
    this.especie = raça
}
// Outro exemplo de herança,um pouco mas complexo
Animal.prototype.DetalhesAnimal = () => {
    console.log (
        {
            Especie: this.especie,
            Nome: this.nome
        }
    )
}
const passaro = new Animal()
passaro.nome = 'BeijaFlor'
const passarofilho = Object.create(passaro)
passarofilho.nome = 'Beija Flor'
passarofilho.especie = 'Passaro'
passarofilho.DetalhesAnimal()
console.log(passarofilho)