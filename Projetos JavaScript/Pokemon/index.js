const div_sprites = document.querySelector('.div-sprites')
const id_name= document.querySelector('strong')
let cont = 1
const API = async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const api = (await fetch(url)).json()
    return api
}
const Next = document.getElementById('Next')
const Prev = document.getElementById("Prev")
const form = document.querySelector("form").addEventListener('submit',event => {
    let input = document.querySelector('input').value
    event.preventDefault()
    cont = input
    if (isNaN(input)) API(input).then(response => cont = response.id)
    View(input)
})
Next.addEventListener('click',function(){
    console.log(cont++)
    View(cont)
    
})
Prev.addEventListener("click",() => {
    if (cont < 2){
        cont = 2
    }
    console.log(cont--)
    View(cont)
})

function View(value){
    API(value).then(response => {
        div_sprites.innerHTML = `
            <img src='${response.sprites.front_default}' width='200'>
    `,id_name.innerHTML = `<span style='color:gray;'> ${response.id}</span> - <span>${response.name}</span>`})
}
View(1)
