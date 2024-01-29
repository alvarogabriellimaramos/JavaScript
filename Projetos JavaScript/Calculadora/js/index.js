const TextoPrincipal = document.querySelector('.texto-principal')
const clear = document.getElementById('clear')

const text = document.querySelector('.text')
const nums = document.querySelectorAll('.btn')
let Number = ''
let resultado  = 0
const DisplayValue = (value) => {
    value.onclick = () => {
            text.textContent += value.textContent
            Number = TextoPrincipal.textContent += value.textContent
            CalculatorValue(Number)
    }
}
const CalculatorValue = Number => {
    const result = document.getElementById('result')
    result.addEventListener('click',() => {
        try{
            resultado = eval(Number)
            text.textContent = resultado
            TextoPrincipal.textContent = resultado
        }
        catch{
            text.textContent = ''
            TextoPrincipal.textContent = ''
            Number = ''
            resultado = 0
        }
    })
}
clear.addEventListener('click',function(){
    text.textContent = ''
    TextoPrincipal.textContent = ''
    Number = ''
    resultado = 0
})
nums.forEach(num => {
    if (num.textContent === 'C') return;
    else{DisplayValue(num)}
})