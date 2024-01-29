const url = 'http://localhost:8080/'
// exemplo simples de requisição no servidor que acabamos de criar,ele utiliza o método post para acessar a porta 8080
const Response = () => {
    fetch(url,{
        method:'post'
    }).then(async res => console.log(res))
    .catch(e => console.log(e))
}
Response()