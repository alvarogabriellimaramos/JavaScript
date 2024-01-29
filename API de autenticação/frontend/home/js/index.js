import Mode from "../../mode/index.js";

const SpanImg = document.querySelector('.img');

const SpanUsername = document.querySelector('.username');
try {
    const Inicial = sessionStorage.username[0];

    SpanUsername.textContent = sessionStorage.username;

    SpanImg.textContent = Inicial.toUpperCase();
}
catch (e) {
    window.location.href = '../forms/login/index.html';
};

const SignOut = document.getElementById('sign out');

SignOut.addEventListener('click',async () => {
    const data = await fetch('http://localhost:8080/desconnect',{
        headers: {"Content-Type": 'application/json'},
        method: "DELETE",
        body: JSON.stringify({username: sessionStorage.email})
    });
    const {messagem} = await data.json();
    console.log(messagem)
    if (messagem === 'Usuario Desconectado') {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('email');
        window.location.href = '../forms/login/index.html';
    }
    if (messagem === 'Erro ao encontra usuario') window.location.href = '../forms/login/index.html';
});
Mode();

