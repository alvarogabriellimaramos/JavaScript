// gerando um numero aleatorio 
const random_fn = num => {
    const random_num = Math.round(Math.random(1)*11)
    if (num == random_num){
        return 'Você Acertouu , o valor sorteado foi ' + random_num
    }
    else {
        return 'Você Errou , o valor sorteado foi  ' + random_num
    }
}
console.log(random_fn(5))

