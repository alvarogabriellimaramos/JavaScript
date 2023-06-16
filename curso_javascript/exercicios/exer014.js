// criar uma função que recebe um array como parametro,terá uma variavel que irá randomizar numeros e se o valor recebido dentro do parametro for o mesmo da variavel,ele irá guarda dentro de um array que está dentro da função 
const fn = (num) => {
    const random_var = Math.round(Math.random(1) * 10)
    const array = []
    if (num == random_var) {
        array.push(num)
        return 'Valor adicionado', array
    }
    else {
        return 'Valor incorreto,tente novamente'
    }
}
console.log(fn(2))