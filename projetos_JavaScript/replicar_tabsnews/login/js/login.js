const lua = document.getElementById('lua')
const inputs = document.querySelector('input')
const password = document.getElementById('password')
const li_1 = document.getElementById('li-1')
lua.addEventListener('click',function(){
    document.body.style.backgroundColor = '#0D1117'
    document.body.style.color = 'white'
    inputs.style.boxShadow = '0 0 1px white'
    password.style.boxShadow = '0 0 1px white'
    inputs.style.color = 'white'
    password.style.color = 'white'
    lua.style.display = 'none'
    inputs.style.backgroundColor = 'black'
    password.style.backgroundColor = 'black'
    const img_sol = document.createElement('img')
    img_sol.src = 'https://icones.pro/wp-content/uploads/2021/04/symbole-du-soleil-jaune.png'
    img_sol.alt = 'icone sol'
    img_sol.style.width = '18px'
    img_sol.style.cursor = 'pointer'
    li_1.appendChild(img_sol)
    img_sol.addEventListener('mouseenter',() => {
        img_sol.style.filter = 'drop-shadow( 0 0 0.1px white)'  
    })
    img_sol.addEventListener('mouseout',function(){
        img_sol.style.filter = 'drop-shadow(0 0 0 black)'
    })
    img_sol.addEventListener('click',function(){
        const objs = {
            background_white: document.body.style.backgroundColor = 'white' ,
            input: function(){
                inputs.style.color = 'black'
                inputs.style.backgroundColor = '#F6F8FA'
                inputs.style.boxShadow = '0 0 1px black'
                document.body.style.color = 'black'
                password.style.backgroundColor = '#F6F8FA'
                password.style.boxShadow = '0 0 1px black'
            },
            ativa_lua: function(){
                lua.style.display = 'flex'
            },
            desativa_sol: function(){
                img_sol.style.display = 'none'
            }
        }
        objs.input()
        objs.ativa_lua()
        objs.desativa_sol()
    })

})