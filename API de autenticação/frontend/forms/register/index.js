import EventClick from "../index.js";

const form = document.querySelector('form');

const inputs = document.querySelectorAll('.input');

const Msg = document.querySelector('.msg');

const FormSubmit = async event => {
    event.preventDefault();

    const data = await fetch('http://localhost:8080/sendemail',{
        headers: {"Content-Type": 'application/json'},

        method: "POST",

        body: JSON.stringify({

            username: inputs[0].value,

            email: inputs[1].value,

            password: inputs[2].value,

            confirmPassword: inputs[3].value
        })
    })
    const {messagem} = await data.json();
    if (messagem === 'Token enviado com sucesso,por favor verifique seu e-mail') {
        const label = document.querySelectorAll('label');

        const divToken = document.querySelector('.div__token').style.display = 'block';

        const button = document.querySelector("button").textContent = 'Envia Token';

        label.forEach(l => l.style.display = 'none');

        document.getElementById('on').style.display = 'none';

        document.getElementById('off').style.display = 'none';

        inputs.forEach(input => input.style.display = 'none');

    }
    Msg.textContent = messagem;
}
form.addEventListener('submit',FormSubmit);

EventClick();

const inputToken = document.querySelector(".input-token");

inputToken.addEventListener('input',async () => {
    const token = inputToken.value;
    const headers = new Headers({
        "Content-Type": 'application/json',
        "Authorization": token
    })
    const data = await fetch('http://localhost:8080/register',{
        headers: headers,
        method: 'POST'
    });
    const {messagem} = await data.json();
    if (messagem === 'Token Invalido' || messagem === 'Acesso Negado') Msg.textContent = messagem;
    else {
       setTimeout(() =>  window.location.href = '../login/index.html',1500)
       Msg.textContent = 'Usuario criado com sucesso';
    }
    
})