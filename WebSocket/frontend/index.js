const form = document.querySelector('form');
const DivText = document.querySelector('.text');
const ws = new WebSocket('ws://localhost:8080'); // ao inves do http colocamos o ws para dizer que é uma conexão websocket,essa instancia vai ser responsavel por nos fazer conecta ao servidor

ws.addEventListener('message',event => {
    const p = document.createElement('p');
    p.textContent = event.data
    DivText.appendChild(p);
});
form.addEventListener('submit',event => {
    event.preventDefault();
    const input = document.querySelector('input').value;
    ws.send(input) // quando o cliente envia a mensagem para o servidor automaticamente ele irá se conecta
})