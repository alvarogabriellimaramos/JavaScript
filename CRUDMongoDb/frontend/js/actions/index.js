import { createInputDescription,createButton} from "../element/index.js";
export async function Post (input,div) {
    const data = await fetch('http://localhost:8080/add',{
        headers: {"Content-Type": 'application/json'},
        method: 'POST',
        body: JSON.stringify({task:input.value})
    })
    const DataJson = await data.json();
    if (DataJson.messagem === 'Tarefa criada com sucesso') {
        div.textContent = DataJson.message;
        setTimeout(location.reload(),1500);
    }
    else {div.textContent = DataJson.messagem;}
}
export async function Delete (id,tr) {
    tr.style.display = 'none';
    await fetch('http://localhost:8080/delete',{
        headers: {'Content-Type': 'application/json'},
        method: 'DELETE',
        body: JSON.stringify({id:id})
    });
}

export function Update(tdTask,tdDescription,id) {
    tdTask.textContent = ''
    tdDescription.textContent = ''
    const inputUpdate = document.createElement('input');

    const buttonUpdate = document.createElement('button');

    const form = document.createElement('form');
    
    const InputDescription = document.createElement('input');

    const buttonDescription = document.createElement('button');
    buttonDescription.textContent = 'Check'
    buttonUpdate.addEventListener("click",async () => {
        inputUpdate.style.display = 'none'
        buttonUpdate.style.display = 'none'
        if (inputUpdate.value.length < 4) return td.textContent = 'Erro ao salva tarefa'
        await fetch('http://localhost:8080/update',{
            headers: {"Content-Type": 'application/json'},
            method: 'PUT',
            body: JSON.stringify({id:id,task:inputUpdate.value})
        });
        tdTask.textContent = inputUpdate.value;
    });

    buttonUpdate.textContent = 'check';

    tdTask.appendChild(inputUpdate);

    tdTask.appendChild(buttonUpdate);

    form.appendChild(InputDescription);

    form.appendChild(buttonDescription);
    form.addEventListener('submit',async event => {
        event.preventDefault();
        if (InputDescription.value.length <= 4) return;
        tdDescription.textContent = InputDescription.value;
        form.style.display = 'none'

        await fetch('http://localhost:8080/update',{
            headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify({id:id,description: InputDescription.value})
        })
    })
    tdDescription.appendChild(form);
}

export const Done = async (id) => {
    const Data = (await fetch('http://localhost:8080/update',{
        headers: {'Content-Type': 'application/json'},
        method: 'PUT',
        body: JSON.stringify({id:id})
    }));
    location.reload();
    return DataJson;
}