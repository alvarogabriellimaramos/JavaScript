
// Crie uma função que simula uma chamada assíncrona a um serviço de autenticação. A função deve retornar uma Promise que resolve se o usuário fornecer credenciais corretas e rejeita se as credenciais estiverem incorretas.
function AsyncAutentication(nome,idade){
    return new Promise((resolve,reject) =>{
        if (nome !== '' && idade > 0) resolve({nome,idade})
        reject('Erro credenciais invalida,tente novamente')
    })
}
AsyncAutentication('Alvaro',18).then(response => console.log(response))
.catch(erro => console.log(erro))