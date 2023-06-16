const objeto = {
    nome: 'Alvaro',
    idade: 18,
}
const {nome,idade} = objeto
function MostraChaves({nome}){
    console.log(nome) 
}
MostraChaves(objeto) // podemos usar a destruturação em parametros nas funções

  