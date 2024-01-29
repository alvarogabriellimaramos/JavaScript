const btn_1 = document.querySelector('.btn')
const nav_2 = document.querySelector(".nav-2")
const btn_2 = document.querySelector('.btn-2')
btn_1.addEventListener("click",function(){
    nav_2.style.display = 'flex'
    btn_2.addEventListener("click",function(){
        nav_2.style.display = 'none'
    })
})