const num_rand = ({ min = 0, max = 10, usuario = Math.round(Math.random(min) * max) }) => {
    const randint = Math.round(Math.random(min) * max)
    if (usuario == randint) {
        return 'Você acertou o numero randomizado'
    }
    console.log(`Numero do usuario [ ${usuario} ] `)
    return randint
}
const obj = {
    usuario: 56,
    max: 60,
    min: 1
}
console.log(num_rand(obj))