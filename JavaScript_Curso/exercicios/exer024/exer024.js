// Exercicios 1 
let produtos = [
    { nome: 'Laptop', preco: 1200 },
    { nome: 'Smartphone', preco: 800 },
    { nome: 'Tablet', preco: 150 },
    { nome: 'Fone de Ouvido', preco: 50 }
  ];
  
function FilterArray(array){
    array.forEach(object => {
        if (object.preco > 100) console.log(object)
    })
}  
FilterArray(produtos)
// exercicios 2 
let transacoes = [
    { tipo: 'receita', valor: 500 },
    { tipo: 'despesa', valor: 200 },
    { tipo: 'receita', valor: 300 },
    { tipo: 'despesa', valor: 50 },
    { tipo: 'receita', valor: 700 }
];

function SomaTransações(array){
    let somaReceita = 0;
    let somaDespesa = 0;
    array.forEach(object => {
        if (object.tipo === 'receita') somaReceita += object.valor;
        if (object.tipo === 'despesa') somaDespesa += object.valor;
    })
    return {Receita: somaReceita,Despesa:somaDespesa};
};
console.log(SomaTransações(transacoes));
  