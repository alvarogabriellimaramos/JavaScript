function LoadDataServer(){
    return new Promise((resolve,reject) => {
        const sucess = true 
        const data = {Nome:'Alvaro',idade: 18,profissão: 'Desenvolvedor'}
       if (sucess){
            setTimeout(() => resolve(data),2000)
       }
        else{reject('Erro ao fazer requisição no servidor')}
    })
}
LoadDataServer().then(response => console.log(response))
.catch(error => console.log(error))