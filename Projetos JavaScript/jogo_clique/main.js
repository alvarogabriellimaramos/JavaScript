// Função init que irá da inicio ao joguinho
const INIT = (() => {
    const div_button = document.querySelector('.div-button')
    const div_game = document.querySelector('.div-game')
    const button_init = document.querySelector('.btn_init').addEventListener('click',function(){
        div_button.style.display = 'none'
        div_game.style.display = 'flex'
        TIME.FN_TIME(TIME.msg_time)
    })
})()
// função responsavel para contar o time do jogo
const TIME = (() => {
    const time_strong = document.querySelector('strong')
    const FN_TIME = (callback) => {
        let contador = 1
        const time = setInterval(() => {
            time_strong.innerHTML = `Time: ${contador++}`
            if (contador >= 11){
                clearInterval(time)
                time_strong.innerHTML = callback()
                CLICADOR.button.style.display = 'none'
            }
        },1000)
    }
    const msg_time = () => {
        return 'Tempo esgotado'
    }
    return {FN_TIME,msg_time}
})()
// função responsavel para fazer a contagem de cliques do usuario
const CLICADOR = (() => {
    let contador = 1
    const button_click = document.getElementById('button_click')
    button_click.addEventListener('click',function(){
        const h1 = document.querySelector('.click_h1')
        h1.innerHTML = `Cliques: ${contador++}`
    })
    return {
        button:button_click
    }
})()