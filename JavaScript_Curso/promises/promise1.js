// promises são objetos em javascript responsavel por lida com operações assicronas de forma mas legivel e eficiente do que com callback comuns,a operações assicronas consitem em leituras de arquivos,gravação de arquivos,requisições alguma api ou banco de dados e etc...

/*Os três estádos de uma promises 
1 - pending (pedente) significa que a operação ainda não mostrou nenhum  resultado
2 - fulfilled (resolvida) significa que a operação foi concluida com sucesso e os seus dados poderão ser acessados
3 - rejected (rejeitada) significa que a operação falhou e o erro estara disponivel para ser vizualidado */

// exemplo simples de operação assicrona
const AsyncOperation = new Promise((resolve,reject) => {
    let boolean = false
    setTimeout(() => {
        if (boolean) resolve('Operação resolvida')
        else{reject('A operação falhou')}
    },2000)
})

