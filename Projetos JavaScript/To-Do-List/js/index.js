const ListTaskSet = new Set()

const form = document.querySelector("form")

const h1 = document.querySelector('h1')

const Tbody = document.querySelector('tbody')

const TaskNames = []

const ListTASK = []

form.addEventListener('submit',function(event){

    event.preventDefault()

    const input = document.querySelector('input').value

    if (input === '' || input === undefined || input.length < 4) return;

    const Task = CreateTask(input)

    CreateElementsHtml(Task)

    

})

// Function Create Task 
function CreateTask(task){

    return{
        name:task,

        CreateDay: new Date().toLocaleDateString('pt-br')
    }
}

const task1 = CreateTask('Lava o banheiro')

// Function Create Elements HTML
function CreateElementsHtml(task){

    const TaskName = `<td>${task.name}  <span 

    class="material-symbols-outlined complete"> done </span>

    </td>`

    const DateTask = `<td> ${task.CreateDay} </td>`

    const TrTask = document.createElement("tr")

    TrTask.classList.add('tr')

    TrTask.innerHTML = `${TaskName} ${DateTask}`

    Tbody.appendChild(TrTask)

    CreateDescription(TrTask)

    CheckButton(TrTask)
    
    RemoveTask(TrTask,task)
}

// Function for task complete
function CheckButton(tarefa) {
    const TdButtons = document.createElement('td')

    TdButtons.classList.add('td-btns')


    const ButtonCheck = document.createElement('button')

    ButtonCheck.addEventListener('click',() => {
        const CheckComplete = document.createElement('span')

        CheckComplete.classList.add('material-symbols-outlined')

        CheckComplete.classList.add('complete')

        CheckComplete.textContent = 'check'

        CheckComplete.style.display = 'inline'

        tarefa.classList.add('tr-complete')
    })
    ButtonCheck.classList.add('check')

    const spanCheck = document.createElement('span')

    spanCheck.classList.add('material-symbols-outlined')

    spanCheck.textContent = 'check'

    ButtonCheck.appendChild(spanCheck)

    TdButtons.appendChild(ButtonCheck)

    tarefa.appendChild(TdButtons)
}

// Function for remove task 

function RemoveTask(tarefa,task){

    const TdButtons = document.createElement('td')

    const DeleteButton = document.createElement('button')

    DeleteButton.addEventListener('click',() => {
        tarefa.style.display = 'none'
        console.log(ListTaskSet)
    })
    
    DeleteButton.classList.add('delete')

    const DeleteSpan = document.createElement('span')

    DeleteSpan.classList.add('material-symbols-outlined')

    DeleteSpan.textContent = 'delete'

    DeleteButton.appendChild(DeleteSpan)

    TdButtons.appendChild(DeleteButton)

    tarefa.appendChild(TdButtons)
}

function CreateDescription(tarefa){
    const TdDescription = document.createElement('td')

    const input = document.createElement('input')

    input.classList.add('inputDescription')

    const ButtonDescription = document.createElement('button')

    ButtonDescription.classList.add('buttonDescription')

    ButtonDescription.textContent = '✔'

    ButtonDescription.addEventListener('click',() => {
        const Input = String(input.value)

        if (Input.length < 6) return;

        input.style.display = 'none'

        ButtonDescription.style.display = 'none'

        TdDescription.textContent = Input
    })

    TdDescription.appendChild(input)

    TdDescription.appendChild(ButtonDescription)

    tarefa.appendChild(TdDescription)

}