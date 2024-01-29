document.querySelector('button').addEventListener('click',() => {
    fetch('http://localhost:8080/').then(res => console.log(res))
})