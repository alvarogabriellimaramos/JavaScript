async function API(text){
    const url = `http://api.weatherapi.com/v1/current.json?key=088a8ac0980d404393e13636230709&q=${text}&aqi=no`
    const api = (await fetch(url)).json()
    return api
}
function FunctionValue(input,button,div){
    button.addEventListener('click',() => {
        const Input = String(input.value)
        API(Input).then(response => {
            div.style.display = 'flex'
            div.innerHTML = `
            <div> <strong style='margin-bottom:10px;'>Capital/Região</strong> <span>${response.location.name}</span></div>
            <div> <strong style='margin-bottom:10px;' style="margin-bottom:10px;">Temperatura</strong> <div style='font-size:2.1em; font-weight:bold; position:relative;'>${response.current
                .temp_c} <span style="position:absolute; top:0px; font-size:14px; margin-left:5px; font-weight:100;"> °C</span></div>
                </div>
            <div>
            <img src='${response.current.condition.icon}' alt='Icone Previsão'>
            </div
            `
        }).catch(err => {
            div.innerHTML = `
            <strong>
            ERRO:Cidade,Região ou País não encontrado.            
            </strong>
            `
        })
    })
}
const CreatElements = (function(){
    const container = document.querySelector('.container')
    container.innerHTML = `
    <form>
        <input type='text' placeholder='Digite aqui'> 
        <button> Search </button>
    </form>
    <div class='result'></div>`
    const form = document.querySelector('form')
    const result = document.querySelector('.result')
    const button = document.querySelector('button')
    const input = document.querySelector("input")
    FunctionValue(input,button,result)
    form.addEventListener('submit',event => {
        event.preventDefault()
    })
})()