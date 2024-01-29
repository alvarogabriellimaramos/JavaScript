const button = document.querySelector('.btn_enviar')
const div = document.querySelector('.resultado')
const button_yes = document.querySelector('.yes')
const button_no = document.querySelector('.no')
const container = document.querySelector('.container')
const container_2 = document.querySelector('.container-2')
const time = document.querySelector('.p-time')
const fn_random = (min,max) => {
    const numero_random = Math.round(Math.random() * (min + max))
    return numero_random
}
let contador = 0
button.addEventListener("click",function(){
    const input = document.querySelector('input')
    const num_usuario = Number(input.value)
    const random = fn_random(1,10)
    if (num_usuario < 1 || num_usuario > 10){
        div.innerHTML = '<p>OPS:Digite um numero entre 1 e 10 </p>'
    }
    else{
        if (num_usuario === random){
            div.style.color = 'green'
            div.innerHTML = '<strong>Você ACERTOU!!</strong>'
            contador -= 2
        }
        else{
            div.style.color = 'red'
            div.innerHTML = '<strong>Você errou!!!</strong>'
            container.style.display = 'none'
            container_2.style.display = 'block'
        }
    }
})
button_yes.addEventListener('click',function(){
    container.style.display = 'flex'
    container_2.style.display = 'none'
})
button_no.addEventListener("click",function(){
    container_2.style.display = 'none'
    const end = document.querySelector('.finally')
    end.style.display = 'block'
})

setInterval( ()=> {
    contador++
    time.innerHTML = `<p>TEMPO: ${contador}</p>`
    if (contador === 10){
        container.style.display = 'none'
        container_2.style.display = 'block'
        contador = 0
    }
},1000)