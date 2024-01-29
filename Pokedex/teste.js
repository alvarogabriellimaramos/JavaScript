const API = async () => {
    const url = `https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/code/data/pokedex.json`
    const api = (await fetch(url)).json()
    return api
}
API().then(response => {
    const [pokemons] = response 
    console.log(response)
})
