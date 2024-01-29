const Datas = []

async function DataBase(nome){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (nome.length >= 4) {
                Datas.push(nome)
                resolve('Nome adicionado com sucesso')
            }
            else{reject('Erro ao adicionar nome ')}
        },1000)
    })
}
async function FunctionAsync(nome,callback){
    try{
        const DataBase = await callback(nome)
        return DataBase
    }
    catch(error){
        console.log('Error' + error)
    }
}
async function ReturnFunction(nome,callback){
    FunctionAsync(nome,callback).then(response  => console.log(response))
    .catch(error => console.log(error))
}
ReturnFunction('Alvaro',DataBase)