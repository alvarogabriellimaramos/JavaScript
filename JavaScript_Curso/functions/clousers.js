// para sabermos o que é clousers precisamos lembra o que é escopo:Escopo nada mas é do que acessibilidade de uma váriavel,onde podemos acessar a váriavel e onde não podemos,por exemplo 
let numero = 1 
function Imprimir(){
    console.log(numero)
}
// aqui podemos acessa a váriavel em qualquer luga do nosso código isso por que ela foi declarada em um escopo global,em um escopo fora de qualquer outro escopo,outro exemplo 

function Imprimir2(){
    let numero_2 = 1 
    console.log(numero_2) // essa váriavel só poderá se acessada dentro da função em que foi declarada,isso é chamado de escopo,isso é muito útil para declara e criar váriavel com o mesmo nome ou com o mesmo valor e isso deixa nosso código mas organizado,se tentarmos acessa a váriavel fora do escopo teremos um erro
}

// Clouseres são funções que conseguir 'lembrar' do local em que foi definida e com isso elas consegue captura todo o escopo ao seu redor(léxico),do seu escopo léxico,elas consegue lembra das váriavel que foram capturadas pelo seu escopo ao redo,por exemplo 
// exemplo de clouseres 
function FunctionExterna(){
    const nome = 'Alvaro'
    function FunctionInterna(){
        console.log(nome)
    }
    return {FunctionInterna}
}
function Funcao2(){
    const nome = 'Gabriel'
    FunctionExterna().FunctionInterna()
}
Funcao2()
