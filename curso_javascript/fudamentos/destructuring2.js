// podemos usar a desestruturação em parametros de funções 
const objeto = {
    nome: 'Alvaro',
    idade: 18
}
const {nome,idade} = objeto
const MostraChaves = ({nome,idade}) => {
    return `Olá ${nome} você tem ${idade}`
    
}
console.log(MostraChaves(objeto))

// podemos atribuir a desestruturação em array também 
const array = [1,2,3,4,5,6]
const [a,b,c,d,e,f] = array
console.log(a,b,c)
// também podemos fazer desestruturação aninhadas com o array 
const array_2 = [1,2,3,[4,5,6]]
const [n1,n2,n3,[n4,n5,n6]] = 

