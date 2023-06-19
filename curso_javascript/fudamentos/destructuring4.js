const num_random = ([min = 0,max = 10]) => {
    const randint = Math.round(Math.random(min) * max)
    if (min > max) [min,max] = [max,min ]

    return randint 
}
const array = [30,20,5]
console.log(num_random(array))