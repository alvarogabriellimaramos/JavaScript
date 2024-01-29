// exercicio 01 
let numbers = [[1, 2], [3, 4], [5, 6]]
let NewNumbers = numbers.flat()
console.log(NewNumbers)

// exercicio 02

numbers = [1, [2, [3, [4]]]]
NewNumbers = numbers.flat(3)
console.log(NewNumbers)

// exercicio 03 
numbers = [[1, 2], [3, 4], [5, 6]].concat([7,8])
ConcantNumbers = numbers.flat()
console.log(ConcantNumbers)

// exercicio 04 

let strings = ['a', ['b', 'c'], ['d', ['e', 'f',['g']]]]
console.log(strings.flat(2))

// exercicio 05 

function myFlat(array){
    return array.reduce((result,element) => {
        if (Array.isArray(element)) result = result.concat(myFlat(element))
        else{result.push(element)}
        return result
    },[])
}
console.log((myFlat(strings)))