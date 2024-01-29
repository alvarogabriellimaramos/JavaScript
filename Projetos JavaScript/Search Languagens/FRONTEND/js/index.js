const getResponse = async () => {
 const url = 'http://localhost:8080/langs'
  return (await fetch(url)).json();
}
const View = document.querySelector('.view');
const form = document.querySelector("form");
const input = document.querySelector('input');
const Names = []
getResponse().then(res => {
    for (let object of res) Names.push(object.name)
    form.addEventListener('submit',event => {
        event.preventDefault();
        const Index = Names.indexOf(input.value.toLowerCase())
        if (Index === -1) {
            alert('Linguagem de programação não encontrada')
            return; 
        };
        View.innerHTML = `
            <div> <span> nome: </span><strong class='name'> ${input.value}</strong> </div>
            <div> <span> Descrição: </span> <strong class='description'> ${res[Index].descrição} </strong> </div>
            <div> <span> Criadores / Criador: </span><strong class='criadores'> ${res[Index].criadores} </strong> </div>
            <div> <span> Extensão: </span><strong class='extensão'> ${res[Index].extensão} </strong> </div> 
            <div> <img src="${res[Index].imagem}"> </div>
        `
    })
})
.catch(e => console.log(e))