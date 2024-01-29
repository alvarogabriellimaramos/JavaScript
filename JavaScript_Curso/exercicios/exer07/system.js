function Person(nome,idade,id){
    return{nome,idade,id}
}
const ListPerson = []
const ListPersonName = []
function AddPerson(person){
    const {nome} = person
    if (ListPersonName.indexOf(nome) === -1){

        ListPerson.push(person)

        ListPersonName.push(nome)

        return `Usuario adicionado com sucesso`
    }
    return `Erro ao adicionar usuario`
}
const pessoa1 = Person('Alvaro',18,2)
const pessoa2 = Person('Gabriel',17,1)
const pessoa3 = Person('Pedro',13,3)
AddPerson(pessoa1)
AddPerson(pessoa2)
AddPerson(pessoa3)
function SearchPerson(Id,array){
    const ArrayId = []
    return new Promise((resolve,reject) => {
        array.forEach(person => ArrayId.push(person.id))
        if (ArrayId.indexOf(Id) !== -1){
            resolve(array.forEach(person => person.id === Id ? resolve(person) : ''))
        }
        else{reject('Erro Id não encontrado')}
    })
}
SearchPerson(0,ListPerson).then(response => console.log(response))
.catch(error => console.log(error))