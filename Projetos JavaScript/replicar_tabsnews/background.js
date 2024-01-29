const lua = document.getElementById('lua')
let contador = 0
lua.addEventListener('click',function(){
    if (contador < 2){
        
        document.body.classList.add('body')
    }
    console.log(contador++)
    if (contador == 2){
        document.body.classList.remove('body')
        contador = 0
    }
})