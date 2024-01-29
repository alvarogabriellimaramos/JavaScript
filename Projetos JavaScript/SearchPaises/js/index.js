// const div_result = document.querySelector('.result')
const API = async (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`

    const api = (await fetch(url)).json()
    return api 
}
const form = document.querySelector('form').addEventListener('submit',e => e.preventDefault())
const button = document.querySelector('button')
const result = document.querySelector('.result')
button.addEventListener('click',() => {
    const input = document.querySelector('input').value.toLowerCase()
    API(input).then(response => {
        result.innerHTML = `
        <span>Pais: ${response[0].name.common}</span> 
        <span>Capital: ${response[0].capital}</span> 
        <span>População: ${response[0].population} Habitantes </span>
        <span>Continente: ${response[0].continents}</span> 
         <img src='${response[0].flags.png}'>
        `
    })
    .catch(() =>{
        result.innerHTML = `
        <span>País não encontrando,tente outro</span>
        `
    })

})
