function QuadradoNumbers(array){
    return new Promise((resolve,reject) => {
        if (!Array.isArray(array)) reject('Entrada invalida,tente novamente')
        const NewArrray = array.map((value) => value * 2)
        resolve(NewArrray)
    })
}
const array = [1,2,3,4,5,6,7,8]
QuadradoNumbers(array).then(response => console.log(response))