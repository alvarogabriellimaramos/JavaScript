const input = document.querySelector('input')
const DivScore = document.querySelector('.score')
const DivTime = document.querySelector('.time')
const container = document.querySelector('.container')
let Score = 0
let Time  = 0
function RandomIndex(min,max){
    let random = Math.floor(Math.random() * (min + max) - min)
    if (random < min || random > max || random === undefined) random = min
    return random 
}
let colors = ['blue','yellow','red','green']
for (let c = 0;c <= 100;c++){
    const span = document.createElement('span')
    span.style.left = `${RandomIndex(0,100)}%`
    span.style.top = `${RandomIndex(0,100)}%`
    let color = RandomIndex(0,colors.length)
    span.addEventListener('mousemove',() => span.style.background = colors[color])
    document.body.appendChild(span)
}

const Linguagens = [
    'javascript',
    'java',
    'python',
    'csharp',
    'dart',
    'assembly',
    'pascal',
    'dart',
    'rust'
]
const h1 = document.querySelector('h1')
function Submit(input){
    const form = document.querySelector('form')

    const strong = document.querySelector('strong')

    let RandomText = Linguagens[RandomIndex(0,Linguagens.length)]

    console.log(RandomText)

    strong.textContent = RandomText

    form.addEventListener('submit',event => {
        event.preventDefault()

        let InputValue = input.value

        if (InputValue === '') return;
        else{
            if (InputValue.toLocaleLowerCase() === RandomText) {
                RandomText = Linguagens[RandomIndex(0,Linguagens.length)]
                strong.textContent = RandomText
                Score++
                DivScore.textContent = `Pontuação:${Score}`
                h1.textContent = `Sua pontuação foi de:${Score}`
                Time -= 20
                InputValue = ''
            }
        }
    })
}
const GameOver = document.querySelector('.game-over')
function FunctionTime(){
    const loopTime = setInterval(() => {
        DivTime.style.width = `${Time++}%`
        if (Time === 100){
            GameOver.style.display = 'flex'
            container.style.display = 'none'
            clearInterval(loopTime)
        }
    },65)
}
FunctionTime()

const Yes = document.getElementById('yes')
const No = document.getElementById('no')
Yes.addEventListener('click',() => {
    container.style.display = 'flex'
    GameOver.style.display = 'none'
    Score = 0
    Time = 0
    input.value = ''
    FunctionTime()
})
No.addEventListener('click',() => window.close())
Submit(input)