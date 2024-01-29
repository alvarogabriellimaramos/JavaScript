const form = document.querySelectorAll('form');
const email = document.querySelector('.email');
const username = document.getElementById('user');
const msg = document.querySelector('.msg');
form[0].addEventListener('submit',async event => {
    event.preventDefault();
    const data = await fetch('http://localhost:8080/tokenrecover',{
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({username: username.value,email: email.value})
    })
    const {messagem} = await data.json();
    if (messagem === 'Token enviado com sucesso,por favor verifique seu e-mail') {
        form[0].style.display = 'none';
        form[1].style.display = 'block';
        msg.textContent = ''
    }
    else{msg.textContent = messagem};
});
const InputToken = document.getElementById('token');
form[1].addEventListener("submit",async event => {
    event.preventDefault();
    const data = await fetch('http://localhost:8080/recover',{
        headers: {
            "Content-Type":'application/json',
            "Authorization": InputToken.value
        },
        method: "PUT"
    })
    const DataJson = await data.json();
    if (DataJson.messagem !== 'Token Invalido') {
        form[1].style.display = 'none';
        form[2].style.display = 'block'
        localStorage.tokenRecover = InputToken.value;
        msg.textContent = ''
    }
    else{msg.textContent = DataJson.messagem}
});

const password = document.getElementById('password');

const ConfirmPassword = document.getElementById('confirmpass');

form[2].addEventListener('submit',async event => {
    event.preventDefault();
    const data = await fetch('http://localhost:8080/recover',{
        headers: {
            "Content-Type":'application/json',
            "Authorization": localStorage.tokenRecover
            },
        method: "PUT",
        body: JSON.stringify({
            pass: password.value,
            confirmpass: ConfirmPassword.value
        })
    })
    const DataJson = await data.json();
    console.log(DataJson);
})