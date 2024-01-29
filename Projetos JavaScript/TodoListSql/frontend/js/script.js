const form = document.querySelector('form');
const DivResponse = document.querySelector('.response');
const tbody = document.querySelector('tbody');
async function GetResponse() {
    const data = (await fetch('http://localhost:8080/todolist/tasks')).json()
    return data 
}
function PostResponse (input,router) {
    fetch(`http://localhost:8080/todolist/${router}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task:input.value})
    }).then(async res => {
        const dataJson = await res.json()
        setTimeout(() => location.reload(),2000)
        DivResponse.textContent = dataJson.messagem
    })
    .catch(async e => {
        const dataJson = await e.json()
        DivResponse.textContent = dataJson.messagem
    })
}
async function UpdateDeleteResponse(input,id,router) {
    const data = await fetch(`http://localhost:8080/todolist/${id}/${router}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({descrição:input.value})
    })
    return await data.json();
}
form.addEventListener('submit',event => {
    event.preventDefault();
    const input = document.querySelector('input');
    PostResponse(input,'add')
})
const Ids = []
let Id;
function createElements (response) {
    for (let object of response){
        const tr = document.createElement('tr');

        tr.classList.add('tr-td')

        const TdId = document.createElement('td');

        TdId.classList.add('id');

        TdId.textContent = object.id;

        const tdTask = document.createElement('td');

        tdTask.textContent = object.task;

        const tdDescrição = document.createElement('td');
        
        const inputDescrição = document.createElement('input');

        const btnDescrição = document.createElement('button');

        btnDescrição.addEventListener('click',async () => {
            const Id = TdId.textContent;

            if (inputDescrição.value === '' || inputDescrição.value === undefined) return;

            inputDescrição.style.display = 'none';

            btnDescrição.style.display = 'none';

            const Return = await (await UpdateDeleteResponse(inputDescrição,TdId.textContent,'update'));

            setTimeout(() => location.reload(),20)
        })
       if (object.descrição === null) {
        tdDescrição.appendChild(inputDescrição);

        btnDescrição.textContent = 'Add';

        tdDescrição.appendChild(btnDescrição) ;
        }
        else{
            tdDescrição.textContent = object.descrição;
        }
        
       const tdData = document.createElement('td');
       
       tdData.textContent = new Date(object.createdAt).toLocaleString();

       const tdConcluida = document.createElement('td');

       const TdDelete = document.createElement('td');

       const BtnDelete = document.createElement('button');
        BtnDelete.addEventListener('click',() => {
            UpdateDeleteResponse('',TdId.textContent,'delete');
            setTimeout(() => location.reload());
        })
       TdDelete.appendChild(BtnDelete);

       BtnDelete.textContent = 'Delete';

       object.concluida === false ? tdConcluida.textContent = 'tarefa não concluida' : tdConcluida.textContent = 'tarefa concluida';

       Ids.push(TdId.textContent);

       tr.appendChild(TdId);

        tr.appendChild(tdTask);

        tr.appendChild(tdDescrição);

        tr.appendChild(tdData);

        tr.appendChild(tdConcluida);

        tr.appendChild(TdDelete);

        tbody.appendChild(tr);
    }
}

GetResponse().then(response => createElements(response)).catch(erro => {
    console.log(erro)
})