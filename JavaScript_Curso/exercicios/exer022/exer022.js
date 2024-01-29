// fatorial 
function fatorial(num){
    if (num === 1) return 1 

    let Num1 = num + 1

    const Numbers = []

    for (let c = 1; c < num; c++) Numbers.push(Num1 -= 1)

    let Fatorial = 1

    Numbers.forEach(value => Fatorial *= value)

    return Fatorial
}
console.log(fatorial(8))