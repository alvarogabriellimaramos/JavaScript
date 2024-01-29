
const fs = require('fs').promises

function User(nome,idade,profissão,id){
    return{nome,idade,profissão,id}
}
const Users = []
const UsersId = []
const UserNames = []
const AddUser = async (object) => {
    try {
        if (UsersId.indexOf(object.id) === -1 && UserNames.indexOf(object.nome) === -1){
            if (object.nome !== undefined && object.id !== undefined){
                Users.push(object)
                UserNames.push(object.nome)
                UsersId.push(object.id)
                await fs.writeFile('./json/usernames.json',JSON.stringify(Users,null,2))
                return `arquivo gravado com sucesso`
            }
            else{
                throw new Error('Nome e ID são obrigatorio')
            }
        }
        return `Nome ou Id já existem no sistema`
    }
    catch(error){
        return 'Erro ao gravar arquivo' + error
    }
}
const ReadFile = async file => {
    await fs.readFile(file,(erro,response) => {
        if (erro){
            console.log(erro)
            return;
        }
        console.log(response.toString())
    })
}
const user1 = User('alvaro',18,'Dev',1)
const user2 = User('Gabriel',18,'Dev',3)
function ReturnFunction(user){
    AddUser(user).then(response => console.log(response))
    .catch(error => console.log(error))
}
module.exports = {
    User,ReturnFunction
}