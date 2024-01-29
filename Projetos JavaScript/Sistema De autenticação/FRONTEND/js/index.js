const username = document.getElementById('username');
const email = document.getElementById('e-mail');
const password = document.getElementById('password');

async function PostResponse (username,email,password) {
    const data = await fetch('http://localhost:8080/api/add',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            username,
            email,
            password
        })
    });
    return await data.json();
};
const Messagem = document.querySelector('.messagem');
const form = document.querySelector('form');

form.addEventListener('submit',async event => {
    event.preventDefault();
    const DATA = await PostResponse(username.value,email.value,password.value);
    Messagem.textContent = DATA.messagem
})