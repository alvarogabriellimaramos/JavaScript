// exercicio 01 

let Promise1 = function (callback){
    let operation = true 
    return new Promise((resolve,reject) => {
        if (operation) {
            resolve('Primeira promise resolvida')
            setTimeout(() => resolve(callback().then(res => console.log(res))))
        }
    })
}
let Promise2 = function (){
    return new Promise((resolve,reject) => {
        resolve('Segunda promise resolvida')
    })
}

Promise1(Promise2).then(res => console.log(res))

// exercicio 02 
async function PromiseArray(){
    const p1 = await Promise1(Promise2)
    const p2 = await Promise2()
    return Promise.all([p1,p2])
}
PromiseArray().then(res => console.log(res))
// exercicio 03

Promise1 = async callback => {
    let operation
    return new Promise((resolve,reject) => {
        if (!operation) reject('Erro: promise 1 rejeitada')
        return callback()
    })
}
Promise2 = async () => new Promise((resolve,reject) => resolve('Promise 2 resolvida'))

Promise1(Promise2).catch(res => console.log(res))