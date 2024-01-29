const API = async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const api = (await fetch(url)).json()
    return api
}
API('pikachu').then(response => console.log(response))