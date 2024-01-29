// forEach,esse método de array server para percorre todos os elementos de um array,ele recebe uma callback e essa callback vai ser chamada para cada interação do array,a função callback dentro do forEach recebe dois parametros, o proprio elemento,sendo o primeiro paremtro e o indice do elemento sendo o segundo parametro
const nomes = ['Alvaro','Gabriel','Pedro','Matheus']
nomes.forEach(function(nome,index,array){
    console.log(`${nome} está na posição ${index}`)
    // a função forEach também recebe um terceiro parametro que é o proprio array 
    console.log(array)
})
// utilizando a função arrow Function 
nomes.forEach(nome => console.log(nome))

// passado uma função não diretamente 
const ExibirAprovados = nomes => console.log(nomes)
nomes.forEach(ExibirAprovados)