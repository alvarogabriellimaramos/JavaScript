const input_min = document.getElementById('input_min')
const input_max = document.getElementById('input_max')
const button = document.getElementById('btn')

const fn_random = ({min,max}) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num_random = Math.round(Math.random() * (max - min) + min)
    return num_random
}
button.addEventListener('click',() => {
    const num_txt = document.getElementById('div-txt')
    const num_min = Number(input_min.value)
    const num_max = Number(input_max.value)
    const obj_random = {
        min: num_min,
        max: num_max,
    }
    const {min,max} = obj_random
    const random = fn_random(obj_random)
    num_txt.innerText = `Número: ${random}`
    button.animate(
        [{boxShadow: 'inset 2px 2px 5px 1px black'},
         {boxShadow:'0 0 0'}           
    ],
    {
        duration:500
    }
    )
    if (min == 0 || max == 0){
        alert('Digite os numeros corretamente')
    }
    if (min > max) {
        num_txt.style.fontSize = '12px'
        num_txt.innerText = 'O valor minimo é maior que o valor maximo,tente novamente'
    }

})