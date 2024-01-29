function AsyncFile(){
    return new Promise((resolve,reject) => {
        let boolean = true
        setTimeout(() => {
            if (boolean) resolve(AsyncData())
            reject('Erro ao ler arquivo')
        },2000)
    })
}
function AsyncData(){
    return new Promise((resolve,reject) => {
        const dados = [
            {nome: 'Alvaro',idade:18,profissão:'Estudante'},
            {nome: 'Pedro',idade:13,profissão: 'Estudante'},
            {nome: 'Gabriel',idade: 21,profissão: 'Engenheiro'}
        ]
        let boolean = true
        setTimeout(() => {
            console.log('Processando dados...')
            if (boolean) resolve(dados)
            reject('Erro ao processa dados')
        })
    })
}
AsyncFile().then(response => console.log(response))
.catch(erro => console.log(erro))