function AsyncFunctionTask(id){
    return new Promise((resolve,reject) => {
        const Task = [
            { descricao: 'Fazer exercício de assincronismo', status: 'Em andamento',id:1 },

            { descricao: 'Estudar Promises em JavaScript', status: 'Concluída',id:2 },

            { descricao: 'Preparar apresentação sobre async/await', status: 'A fazer',id:3 }
        ]
        const taskId = Task[id - 1]
        if (taskId !== undefined) resolve(taskId)
        else{reject('Erro ao tenta procura task')}
    })
}
async function GetPromises(id){
    try{
       const data = await AsyncFunctionTask(id)
       console.log(data)
    }
    catch {console.log('Erro')}
}
GetPromises(3)