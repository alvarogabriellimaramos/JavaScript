// Promise.all: O promise.all é um método de linguagens que suporta promises que server para lida com multiplas promises ao mesmo tempo e de forma eficiente,deixando nosso código mais rapido e légivel,ele aceita um array de promises e retorna uma nova promise,essa nova promise é resolvida quando todos as promises no array de promises for resolvidas e rejeitadas se uma unica promise dentro do array,for rejeitada

// o promise.all é muito útil quando temos várias operações assicronas no nosso código,operações paralelas,como vamos utiliza programação assicrona,o tempo de resposta 
(async () => {
    // 1 - time: 3.068s
    // 2 - time: 856.664ms utilizando o promise.all([])
    const axios = require("axios")
    console.time()
    const ApiFn = user => `https://api.github.com/users/${user}/repos`
    const users = ['alvarogabriellimaramos','javascript','python']
    const p1 = await axios.get(ApiFn('alvarogabriellimaramos'))
    const p2 = await axios.get(ApiFn('javascript'))
    const p3 = await axios.get(ApiFn('python'))
    const NewPromise = Promise.all([p1,p2,p3])
    NewPromise.then(res => console.log(res))
    console.timeEnd()
})()