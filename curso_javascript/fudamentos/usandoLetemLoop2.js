const array_fn = []
for (let c = 0;c <= 10;c++){
    array_fn.push(() => {
        console.log(c)
    })
}
array_fn[0]() // aqui teremos valores diferente do exemplo anterior 