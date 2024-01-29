
const TIME = (() => {
    const container = document.querySelector(".container")
    function Time(div){
        const HOUR = new Date().getHours()
        const MINUTES = new Date().getMinutes()
        const SEGUNDS = new Date().getSeconds()
        let segundos = SEGUNDS
        setInterval(() => {
            div.innerHTML = `
            <div><span>${HOUR} </span><span>Hora</span></div>
            <div><span>${MINUTES} </span><span>Minutos</span></div>
            <div><span>${segundos++}</span><span>Segundos</span></div>
            `
            if (segundos === 60){
                segundos = 1
            }
        },1000)
    }
    Time(container)
})()