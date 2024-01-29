// 1 - Object.preventExtensions,esse método é utilizando para impedir que novas propriedades seja adicionadas ao objeto,mas podemos excluir e alterar propriedades 
const pessoa = {nome: 'Alvaro',idade:18}
// impedindo a extensal do objeto
Object.preventExtensions()
// isso não terá efeito 
pessoa.profissão = 'Desenvolvedor'
// isso terá efeito
delete pessoa['nome']
// modificando uma propriedade existente,permitido 
pessoa.idade = 19  
console.log(pessoa)
// Object.isExtensible é utilizando para sabe se um objeto é ou não extensivo,se for ele irá retorna true e se não for ou seja se o objeto tive sido utilizando nos métodos Object.frezze,Object.preventExtensions,Object.seal,ele irá retorna false
console.log(Object.isExtensible(pessoa))
const array = [1,2,3]
Object.preventExtensions(array)
array[3] = 2 
console.log(array)

// Object.seal, no object.seal nos selemos um objeto ou seja não podemos excluir nenhuma propriedade do objeto e não podemos adicionar nenhuma propriedade do objeto,mas podemos alterar os atributos que já existente

const produto = {nome:'Notebook',preço:2500}
Object.seal(produto)
// isso irá funcionar
produto.nome = 'tablet'
// isso não irá funciona
delete produto['nome']
// isso não irá funciona 
produto.taxa = 2
console.log(produto)

// Object.isSealed(objeto),esse método irá retorna true se o objeto está selado ou false caso não esteja selado 
console.log(Object.isSealed(produto))
const array_2 = [1,2,3]
Object.seal(array_2)
delete array_2[2]
array_2[3] = 4
console.log(array_2)
