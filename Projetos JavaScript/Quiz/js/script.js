const container = document.querySelector('.container')
const DivScore = document.querySelector('.score')
const DivButtons = document.querySelector('.buttons')
const Titulo = document.querySelector('h1')
const GameOver = document.querySelector('.game-over')
const ScoreStrong = document.querySelector('strong')
const Questions = [
    {
        title: 'Como criar uma função no javascript?',
        A: 'let',
        B: 'while',
        C: 'function',
        D: 'func'
    },
    {
        title: 'Como importa um modulo no nodejs ?',
        A: 'const',
        B: 'let',
        C: 'require',
        D: 'var'
    },
    {
        title: 'Como criar uma class no javascript',
        A: 'import',
        B: 'export',
        C: 'for',
        D: 'class'
    }
]
Questions.sort(() => Math.random() - 0.5)
const Correct = ['function','require','class']
let Score = 0
let Time = 0
let question = 0
const CreateButtons = () => {
    for (let c = 1; c <= 4;c++){
        const buttons = document.createElement('button')
        DivButtons.appendChild(buttons)
    }
    const buttons = document.querySelectorAll('button')
    const FromButton = Array.from(buttons)
    FromButton.sort(() => Math.random() - 0.5)

    const Question = Questions[question]
    Titulo.textContent = Question.title
    FromButton[0].textContent = Question.A

    FromButton[1].textContent = Question.B

    FromButton[2].textContent = Question.C

    FromButton[3].textContent = Question.D
    buttons.forEach(btn => CorrectButton(btn))
    ClickButton()
    
}
const RemoveButton = btns => btns.forEach(b => b.remove())
const LengthQuestion = () => {
    if (question >= Questions.length) question = 0
}
const CorrectButton = (btn) => {
    if (Correct.indexOf(btn.textContent) !== -1){
        btn.classList.add('correct')
    }
    else{btn.classList.add('incorrect')}
}
const NextQuestion = () => {
    const buttons = document.querySelectorAll('button')
    setTimeout(() => {
        RemoveButton(buttons)
        CreateButtons()
    },500)
   
    LengthQuestion()
}
const GameOverFunction = () => {
    container.style.display = 'none'
    
    DivScore.style.display = 'none'
    GameOver.style.display = 'flex'
}
const ClickButton = () => {

    const correct = document.querySelectorAll('.correct')

    const incorrect = document.querySelectorAll('.incorrect')

    correct.forEach(btn => {
        btn.addEventListener('click',() => {
            question++

            Score++

            ScoreStrong.textContent = `Pontuação: ${Score}`
            btn.style.background = '#05cf05'
            btn.style.color = 'white'
            Time -= 30
            NextQuestion()
        })
    })
    incorrect.forEach(btn => {
        btn.addEventListener('click',() => {
            question++
            Score--
            if (Score < 0) GameOverFunction()
            ScoreStrong.textContent = `Pontuação: ${Score}`
            btn.style.backgroundColor = 'red'

            btn.style.color = 'white'

            NextQuestion()
        })
    })
}
ClickButton()

const TimeFunction = () => {
    const DivTime = document.querySelector('.time')
    const LoopTime = setInterval(() => {
        Time++
        DivTime.style.width = `${Time}%`
        if (Time === 100) {
            clearInterval(LoopTime)
            GameOverFunction()
        }
    },50)
}
const yesButton = document.getElementById('yes')
const noButton = document.getElementById('no')
yesButton.addEventListener('click',() => {
    container.style.display = 'flex'
    Score = 0
    Time = 0
    DivScore.style.display = 'flex'
    GameOver.style.display = 'none'
    TimeFunction()
})
noButton.addEventListener('click', () => window.close())
TimeFunction()
CreateButtons()