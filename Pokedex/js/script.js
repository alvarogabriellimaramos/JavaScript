const form = document.querySelector('form').addEventListener('submit',e => e.preventDefault())
//Função para fazer requisição da API 
const API = async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const api = (await fetch(url)).json()
    return api
}
// Função para Randomiza um numero aleatorio
function RandomCard(min,max){
    let randomCard = Math.round(Math.random() * (min + max) - min)
    if (randomCard < min) randomCard = min 
    return randomCard
}
// Função para criar a carta pokemon com base na função RandomCard
function CardPokemon(){
    const ArrayId = []
    for (let c = 0 ;c <= 500; c++){
        const Card = document.createElement('div')
        Card.classList.add('card')
        const RandomId = RandomCard(1,100)
        API(RandomId).then(response => {
           if (ArrayId.indexOf(response.id) === -1){
                Card.innerHTML = `
            <img src='${response.sprites.front_default}'
            <div>
                <span>Nome: <span style='color:#03d3fe;''>${response.name}</span> </span> 
            </div>
            <div>
                <span>ID:  <span style='color:#9f5431;'>${response.id}</span> </span>
            </div>
            `
            ArrayId.push(response.id)
           }
           else{Card.style.display = 'none'}
        })
        document.body.appendChild(Card)
    }
}
// Função responsavel por busca pokemon com base na pesquisa do usuario.
function SearchPokemon(){
    const input = document.querySelector('input')
    const CardSearch = document.querySelector('.div-search')
    const DivShadow = document.querySelector('.div-shadow')
    input.addEventListener('input',() => {
        const InputLower = input.value.toLowerCase()
        API(InputLower).then(response => {
            DivShadow.style.display = 'block'
            CardSearch.style.display = 'flex'
            CardSearch.innerHTML = `
            <button class='btn-close'>X</button>
            <img src='${response.sprites.front_default}'
            <div>
                <span>Nome: <span style='color:#03d3fe;''>${response.name}</span> </span> 
            </div>
            <div>
                <span>ID:  <span style='color:#9f5431;'>${response.id}</span> </span>
            </div>
            `
            const BtnClose = document.querySelector('.btn-close').addEventListener('click',() => {
                DivShadow.style.display = 'none'
                CardSearch.style.display = 'none'
            })
        }).catch(() => {
            CardSearch.innerHTML = `
                <button class='btn-close'>X</button>
                <strong>Nenhum pokemon foi encontrado.</strong>`
                const BtnClose = document.querySelector('.btn-close').addEventListener('click',() => {
                    DivShadow.style.display = 'none'
                    CardSearch.style.display = 'none'
                })
        })
    })  
}
CardPokemon()
SearchPokemon()