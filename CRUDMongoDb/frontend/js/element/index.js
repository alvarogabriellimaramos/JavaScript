import { Delete,Update,Done} from "../actions/index.js";

export const createInputDescription = (tr, tbody,id,object) => {
    const tdDescription = document.createElement('td');

    tdDescription.classList.add('description');

    const form = document.createElement("form");

    const InputDescription = document.createElement('input');

    const button = document.createElement('button');

    button.textContent = 'check'
    form.addEventListener('submit',async event => {
        event.preventDefault();
        if (InputDescription.value.length < 4) return;
        tdDescription.textContent = InputDescription.value;

        form.style.display = 'none';
        const data = await fetch('http://localhost:8080/update',{
            headers: {"Content-Type": 'application/json'},
            method: 'PUT',
            body:JSON.stringify({id:id,description: InputDescription.value})
        });
        console.log(await data.json());
    })
    if (object.description === null) {
        form.appendChild(InputDescription);

        form.appendChild(button);
    
        tdDescription.appendChild(form);
        
    }
    else{tdDescription.textContent = object.description}
    tr.appendChild(tdDescription);
    tbody.appendChild(tr);
    return tdDescription;
}
export const createButton = (tr, tbody,id,task,description) => {
    const td = document.createElement("td");

    td.classList.add('actions');

    const buttonEdit = document.createElement('button');
    
    buttonEdit.innerHTML = `
        <span class="material-symbols-outlined">edit</span>
        `
    buttonEdit.classList.add('edit');

    buttonEdit.addEventListener('click',() => Update(task,description,id));

    const buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = `
    <span class="material-symbols-outlined">delete</span>
    `
    
    buttonDelete.classList.add('del');

    buttonDelete.addEventListener('click',() => Delete(id,tr))

    const buttonCheck = document.createElement('button');

    buttonCheck.innerHTML = `
    <span class="material-symbols-outlined">check</span>
    `
    buttonCheck.classList.add('check');
    buttonCheck.addEventListener('click',() => Done(id))
    td.appendChild(buttonEdit);

    td.appendChild(buttonDelete);

    td.appendChild(buttonCheck);

    tr.appendChild(td);

    tbody.appendChild(tr);
}
const CreateTdId = (tr,tbody,object) => {
    const td = document.createElement('td');

    td.classList.add('id');

    td.textContent = object._id;

    td.style.display = 'none';

    tr.appendChild(td);

    tbody.appendChild(tr);
}
export default function CreateElement(response) {
    const tbody = document.querySelector('tbody');
    for (let object of response) {
        const tr = document.createElement('tr');

        tr.classList.add('tr')

        const tdTaskName = document.createElement("td");

        tdTaskName.classList.add('taskName');

        tdTaskName.textContent = object.task

        const tdDate = document.createElement('td');

        tdDate.textContent = new Date(object.date).toLocaleString();

        const tdConcluida = document.createElement('td');

        if (object.done === false) tdConcluida.textContent = 'Tarefa não concluida'
        
        else {
            tdConcluida.textContent = 'Tarefa Concluída'
            tdConcluida.style.fontWeight = 'bold'
        }
        CreateTdId(tr,tbody,object);

        tr.appendChild(tdTaskName);
        const tdDescription = createInputDescription(tr, tbody,object._id,object)

        tr.appendChild(tdDate);

        tr.appendChild(tdConcluida);
        
        createButton(tr, tbody,object._id,tdTaskName,tdDescription)
        
        tbody.appendChild(tr);

        console.log(tr)
    }
}