import { Night,Day} from "./js/Day/Night.js"
import { ONLOAD } from "./js/Day/Night.js"
const MENU = (() => {
    const header = document.querySelector('header')
    header.innerHTML = `
    <span class="material-symbols-outlined menu" style="font-size:2rem; cursor:pointer;">menu</span>
    <ul>
        <li id='moon'><span class="material-symbols-outlined">dark_mode</span> <span class='text'>Night</span></li>
        <li id='sun' style='display:none;'>
        <span class="material-symbols-outlined">light_mode</span>
        <span class='text'>Day</span>
        </li>
        <li><span class="material-symbols-outlined">store</span><span class='text'>Loja</span></li>
        <li><span class="material-symbols-outlined">sports_esports</span> <span class='text'>Games</span></li>
        <li><span class="material-symbols-outlined">home</span> <span class='text'>Home</span></li>
    </ul>
    `
    const menu = document.querySelector('.menu')
    const texts = document.querySelectorAll('.text')
    const lis = document.querySelectorAll('li')
    Night('moon','sun')
    Day('sun','moon')
    ActivateMenu(menu,header,texts,lis)
    ONLOAD('moon','sun')
})()
function ActivateMenu(button,header,texts,li){
    let cont = 0
    button.addEventListener("click",function(){
        cont++
        texts.forEach(element => element.style.display = 'inline');
        button.style.position = 'absolute'
        button.style.right = '5px'
        header.style.width = '160px'
        header.style.animation = 'header-animation .8s '
        if (cont === 2){
            header.style.animation = 'header-animation-2 .8s'
            header.style.width = '40px'
            texts.forEach(element => element.style.display = 'none')
            cont = 0
        }
    })
}