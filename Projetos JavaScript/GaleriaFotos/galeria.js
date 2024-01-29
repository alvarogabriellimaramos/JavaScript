
const GALERIA = (function(){
    const galeria = document.querySelector('.galeria')
    const Fotos = [
        'imgs/img-mar.jpg',
        'imgs/img-motanha.jpg',
        'imgs/img-passaro.jpg',
        'imgs/img-pinheiros.jpg'
    ]
    let cont = 0
    const proximo = document.getElementById('proximo')
    const voltar = document.getElementById('volta')
    proximo.addEventListener("click",() => {
        cont++ 
        galeria.innerHTML = `
        <img src='${Fotos[cont]}'>
        `
        if (cont >= 3){
            cont = -1
        }
        console.log(cont)
    })
    voltar.addEventListener('click',() => {
        cont -- 
        galeria.innerHTML = `
        <img src='${Fotos[cont]}'>
        `
        if (cont < 0){
            galeria.innerHTML = `
        <img src='${Fotos[3]}'>
        `
        cont = -1
        }
        console.log(cont)
    })
})()