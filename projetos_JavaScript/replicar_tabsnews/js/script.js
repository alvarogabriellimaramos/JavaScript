const lua = document.getElementById('lua')
const a_alvinho = document.getElementById('a-1')
const hr = document.querySelector('hr')
const main = document.querySelector('main')
const li_1 = document.getElementById('li-1')
const link_insta = document.querySelector('.link-insta')
const input_button = document.querySelector('input')
const div_comentarios = document.querySelector('.comentarios')
lua.addEventListener('click',function(){
    document.body.style.color = 'white'
    document.body.style.backgroundColor = '#0D1117'
    a_alvinho.style.backgroundColor = 'rgba(255,255,255,0.100)'
    lua.style.display = 'none'
    hr.style.opacity = '0.1 white'
    main.style.boxShadow = '0 0 0 0.1px white'
    const img = document.createElement('img')
    img.src = 'https://icones.pro/wp-content/uploads/2021/04/symbole-du-soleil-jaune.png'
    img.alt = 'Icone Sol'
    li_1.appendChild(img)
    img.style.width = '18px'
    img.style.cursor = 'pointer'
    img.addEventListener('mouseenter',() => {
        img.style.filter = 'drop-shadow( 0 0 0.1px white)'
    })
    img.addEventListener('mouseout',function(){
        img.style.filter = 'drop-shadow( 0 0 0 black )'
    })
    img.addEventListener('click',function(){
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        main.style.boxShadow = '0 0 0 0.1px black'
        img.style.display = 'none'
        lua.style.display = 'flex'
        link_insta.style.boxShadow = '-5px 0 0 0 #D0D7DE'
        input_button.style.backgroundColor = 'white'
        input_button.style.color = 'black'
        input_button.style.fontWeight = 'bold'
        
    })
    input_button.style.backgroundColor = '#30363D'
    input_button.style.color = 'white'
    link_insta.style.boxShadow = '-5px 0 0 0 #30363D'
    input_button.addEventListener('mouseenter',() => {
        input_button.style.outline = '1px solid white'
    })
    input_button.addEventListener('mouseout',() => {
        input_button.style.outline = '0 '
    })
    div_comentarios.style.boxShadow = '0 0 1px white'
})