// Connection Variable
const WS = new WebSocket('ws://localhost:8080')

// create username 
const DivSubmit = document.querySelector('.div__submit')
const SubmitForm = document.querySelector('.form__user');
const InputSubmit = SubmitForm.querySelector('input');

// Send Messagem 
const Messagem = document.querySelector('.messagem');
const ConfigUsername = document.querySelector('.config__username');
const SendForm = document.querySelector('.send__form')
const Msg = document.querySelector('.msg')
// create username
const User = {
    nick: '',
    color: '',
    id: 0
}

WS.addEventListener("message",event => {
    const range = document.createRange();
    const fragment = range.createContextualFragment(event.data);
    if (User.id !== User.id) console.log(User.id)
    ConfigUsername.appendChild(fragment);
})
const RandomColor = () => {
    const colors = ['red','blue','pink','black','green','chocolate','burlywood','brown'];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
const RandomId = () => {
    const id = uuidv4();
    return id;
}
const ConnectionVerification = () => {
    if (WS.readyState === WS.OPEN) DisplaySendMsg();
    else{console.log('Conexão em andamento')};
}
const DisplaySendMsg = () => {
    DivSubmit.style.display = 'none';
    Messagem.style.display = 'flex';
    SendForm.addEventListener('submit',event => SendMsg(event))
}
const createElement = input => {
    const {nick,color,id} = User;
    const Username = document.createElement('div');

    Username.classList.add('username');
    const DivNick = document.createElement('div');

    DivNick.classList.add('nick');
    DivNick.style.color = color;
    
    DivNick.textContent = nick;
    const Messagem = document.createElement('div');

    Messagem.classList.add('msg');

    Messagem.textContent = input

    Username.appendChild(DivNick);

    Username.appendChild(Messagem);
    WS.addEventListener("close",console.log(User.nick))
    return Username.outerHTML;
}
let input = SendForm.querySelector('input');
let button = SendForm.querySelector("button")
const DisplayButton = () => {
    input.addEventListener("input",() => {
        if (input.value === '') button.style.display = 'none'
        else{button.style.display = 'block'}    
    });
};

const SendMsg = event => {
    event.preventDefault();
    
    WS.send(createElement(input.value));
    input.value = ''
    button.style.display = 'none'
}
const ConnectionUser = event => {
    event.preventDefault();

    if (InputSubmit.value.length <= 4) return;

    User.nick = InputSubmit.value;

    User.color = RandomColor();

    User.id = RandomId();

    ConnectionVerification();
}

SubmitForm.addEventListener('submit',event => ConnectionUser(event))
DisplayButton()