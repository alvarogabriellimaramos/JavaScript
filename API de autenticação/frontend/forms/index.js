export default function EventClick() {
    const visibility = document.getElementById('on');

    const offvisibility = document.getElementById('off');

    const password = document.getElementById('pass');
    const confirmPass = document.getElementById('confirmpass');
    visibility.addEventListener('click', () => {
        password.type = 'text';
        confirmPass.type = 'text';
        visibility.style.display = 'none';
        offvisibility.style.display = 'block';
    })
    offvisibility.addEventListener('click', () => {
        password.type = 'password';
        confirmPass.type = 'password';
        visibility.style.display = 'block';
        offvisibility.style.display = 'none';
    })
}