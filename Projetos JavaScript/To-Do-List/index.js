const form = document.querySelector('form')
const ul = document.querySelector('ul')
const adicionar = document.querySelector('.add')
const ListaTarefa = []
adicionar.addEventListener('click',function(){
    const input = document.querySelector('input').value
    if (input === '' || input.length < 4){
        return 
    }
    if (ListaTarefa.indexOf(input) === -1){
        ListaTarefa.push(input)
        console.log(ListaTarefa)
        CreateElements(input,ListaTarefa)
    }
})
form.addEventListener('submit',function(event){
    event.preventDefault()
})
function CreateElements(tarefa,list){
    ul.style.display = 'block'
    const LI = document.createElement('li')
    const DELETE = document.createElement('span')
    DELETE.textContent = 'X'
    DELETE.addEventListener('click',function(){
        list.splice(0,1)
        LI.style.display = 'none'
    })
    DELETE.style.color = '#b00047'
    LI.textContent = tarefa
    LI.appendChild(DELETE)
    ul.appendChild(LI)
}