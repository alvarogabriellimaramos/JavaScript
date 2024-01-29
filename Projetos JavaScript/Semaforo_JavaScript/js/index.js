const div_Red = document.querySelector('.div-red')
const div_Yellow = document.querySelector('.div-yellow')
const div_green = document.querySelector('.div-green')
function TROCAR_CORES(){
    const time_Red = setTimeout(() => {
        div_Red.style.background = 'red'
        setTimeout(() => {
            div_Red.style.background = '#fa4343c9'
        },2000)
    },1000)
    const time_yellow = setTimeout(() => {
        div_Yellow.style.background = 'yellow'
        setTimeout(() => {
            div_Yellow.style.background = '#fcfc53'
        },4000)
    },3000)
    const time_Green = setTimeout(() => {
        div_green.style.background = 'green'
        setTimeout(() => {
            div_green.style.background = '#278327'
        },8000)
    },7000)
}
const LOOP = () => {
    TROCAR_CORES()
    setTimeout(() => {
        LOOP()
    },18000)
}
LOOP()