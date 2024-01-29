const axios = require('axios')
async function ApiCoins(){
    const URL = 'https://economia.awesomeapi.com.br/last/EUR-BRL,BTC-BRL'
    const data = await axios.get(URL)
    if (data.status === 200) return await ApiPokemon()
    if (data.data.status === 404) return `Erro ao fazer requisição get `
}
ApiCoins().then(response => console.log(response))
.catch(error => console.log(error))
async function ApiPokemon(){
    const URL = `https://pokeapi.co/api/v2/pokemon/pikachu`
    const data = await axios.get(URL)
    return data 
}