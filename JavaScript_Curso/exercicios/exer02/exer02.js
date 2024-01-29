const Persons = [
    {Nome: 'Alvaro',Idade: 14,profissão: ''},
    {Nome: 'Gabriel',Idade: 18,profissão:'Engenheira'},
    {Nome: 'Maria',Idade: 18,profissão: 'Desenvolvedora'},
    {Nome: 'Eduarda',Idade: 17,profissão: 'Estagiaria'},
    {Nome: 'Pedro',Idade: 19,profissão:'Comerciate'},
]
function ObjectValidate(array){
    let bool = true
    array.forEach(object => {
        if (object.profissão === '') bool = false 
    })
    return bool
}
console.log(ObjectValidate(Persons))