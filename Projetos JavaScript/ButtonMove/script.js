const buttons = document.querySelectorAll('button')
function RandomPosition(min,max){
    let PositionRandom = Math.round(Math.random() * (min + max) - min)
    if (PositionRandom < 0){
        PositionRandom = 100
    }
    console.log(PositionRandom)
    return PositionRandom
}
buttons[1].addEventListener('mouseenter',() => {
    buttons[1].style.position = 'absolute'
    buttons[1].style.left = `${RandomPosition(100,800)}px`
    buttons[1].style.top = `${RandomPosition(100,500)}px`
})
buttons[0].addEventListener('click',() => {
    alert('HMMM...SABIA KKKKK')
})