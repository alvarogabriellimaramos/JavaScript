const button_Menu = document.querySelector('.btn-menu')
button_Menu.addEventListener('click',() => {
    const NavMenu = document.querySelector('nav')
    NavMenu.style.display = 'block'
    const DivShadow = document.querySelector('.div-shadow')
    DivShadow.style.display = 'block'
    button_Menu.style.display = 'none'
    const CloseMenu = document.querySelector('.btn-close-menu')
    CloseMenu.style.display = 'inline'
    CloseMenu.addEventListener('click',function(){
        NavMenu.style.display = 'none'
        DivShadow.style.display = 'none'
        button_Menu.style.display = 'block'
        CloseMenu.style.display = 'none'
    })
})