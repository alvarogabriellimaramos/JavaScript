const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const peoples = []
const getResponse = async () => {
    const data = await axios.get(url)
    return data.data
} 
getResponse().then(res => {
    let salarios = []
    const ChinaPeoples = res.filter(object => {
        if (object.pais === 'China' && object.genero === 'F') {
            salarios.push(object.salario)
            return object
        }
    })
    const Menor = Math.min(...salarios)
    const MenorSalario = ChinaPeoples.filter(people => {
        if (people.salario === Menor) return people
    })
    console.log(MenorSalario)
})