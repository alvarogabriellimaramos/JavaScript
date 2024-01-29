let milesimos = 0
let segundos = 1 
let minutos = 1
let horas = 1
let LoopPlay;
// spans 
const Milesimos = document.querySelector('.milesimos')
const Segundos = document.querySelector('.segunds')
const Minutos = document.querySelector('.minutes')
const Horas = document.querySelector('.hours')
//buttons
const play = document.getElementById('play')
const restart = document.getElementById('restart')
const pause = document.getElementById('pause')
function FunctionMilesimos(){
    LoopPlay = setInterval(() => {
        milesimos++
        Milesimos.textContent = milesimos
        if (milesimos >= 60){
           FunctionSegundos()
           milesimos = 0
        }
    },40)
    play.style.display = 'none'
    pause.style.display = 'inline'
}
function FunctionSegundos(){
    Segundos.textContent = segundos++
    if (segundos >= 60) {
        FunctionMinutos()
        segundos = 0
    }
}
function FunctionMinutos(){
    Minutos.textContent = minutos = 59
    if (minutos >= 60){
        minutos = 0
        FunctionHoras()
    }
}
function FunctionHoras(){
    Horas.textContent = horas = 24
    if (horas >= 24) {
        horas = 1
        milesimos = 1
        segundos = 1
        minutos = 1
    }
}
play.addEventListener('click',FunctionMilesimos)
function Restart(){
    horas = 0
    minutos = 0 
    segundos = 0 
    milesimos = 0 
    Horas.textContent = horas 
    Segundos.textContent = minutos
    Minutos.textContent = segundos
    Milesimos.textContent = milesimos
}
restart.addEventListener('click',Restart)
function Pause(){
    pause.style.display = 'none'
    play.style.display = 'inline'
    clearInterval(LoopPlay)
}
pause.addEventListener('click',Pause)