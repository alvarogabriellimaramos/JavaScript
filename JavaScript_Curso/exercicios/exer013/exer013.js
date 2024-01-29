const data = [
    {
        nome: 'Alvaro',
        idade:18,
        profissão: 'Programador',
    },
    {
        nome: 'Gabriel',
        idade:19,
        profissão: 'Engenheiro'
    }
]
async function WriteAsync(nome,idade,profissão){
    return new Promise((resolve,reject) => {
        if (nome !== '' && idade > 12){
            data.push({nome,idade,profissão})
            resolve('Requisição do tipo post feita com sucesso')
        } 
        reject('Requisição post negada')
    })
}
WriteAsync('Pedro','17','Estudante').then(response => console.log(response))
.catch(error => console.log(error))

async function ReadAsync(){
    return new Promise((resolve,reject) => {
        console.log('Lendo arquivo...')
        setTimeout(() => {
            resolve(data)
        },1000)
        
    })
}
ReadAsync().then(response => console.log(response))
