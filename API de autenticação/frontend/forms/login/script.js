
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const msg = document.querySelector('.msg');
async function Token (token) {
    const headers = new Headers({
        "Content-Type": 'application/json',
        "Authorization": token
    })
    const data = await fetch('http://localhost:8080/users',{
        headers: headers,
        method: 'GET'
    })
    return await data.json();
}
const SubmitForm = async event => {
    event.preventDefault();
    const data = await fetch('http://localhost:8080/login',{
        headers: {"Content-Type": 'application/json'},
        method: 'POST',
        body: JSON.stringify({
            email: inputs[0].value,
            password: inputs[1].value
        })
    });
    const {messagem} = await data.json();
    if (messagem === 'Email ou senha incorretos' || messagem === 'Senha incorreta') msg.textContent = messagem;
    else {
        const token = messagem; 
        const verifyUser = await fetch('http://localhost:8080/verify',{
            headers: {'Content-Type': 'application/json'},
            method: "POST",
            body: JSON.stringify({username: inputs[0].value})
        });
        const ResponseJson = await verifyUser.json();
        if (ResponseJson.messagem !== 'Usuario já conectado') {
            const {username}= await Token(token);
            sessionStorage.username = username;
            sessionStorage.email = inputs[0].value;
            window.location.href = '../../home/index.html';
        }
        else{msg.textContent = ResponseJson.messagem}
    }
}
form.addEventListener('submit',SubmitForm);