const search = document.getElementById('search')
const input = document.querySelector('input')
const home = document.getElementById('home')
const mode = document.getElementById('mode')
const book = document.getElementById('book')
const traco = document.querySelector('.traco')
book.addEventListener('click',() => {
    document.body.style.background = '#f1c142'
    input.style.display = 'none'
    traco.style.left = '172px'
    traco.style.background = '#f1c142'
})
mode.addEventListener('click',() => {
    document.body.style.background = '#130914'
    input.style.display = 'none'
    traco.style.left = '115px'
    traco.style.background = '#130914'
})
home.addEventListener('click',() => {
    document.body.style.background = '#fffbbb'
    input.style.display = 'none'
    traco.style.left = '5px'
    traco.style.background = '#f7f1a1'
})
search.addEventListener('click',() => {
    document.body.style.background = '#66ffff'
    input.style.display = 'inline'
    traco.style.left = '70px'
    traco.style.background = '#bcd9ed'
})

// cor home #fffbbb

// cor search #66ffff
