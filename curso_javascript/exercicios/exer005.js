const fn_array = (array,element) => {
    if (array.indexOf(element) != -1){
        return 'o array tem o elemento ' + element
    }else{
        return 'O array não tem o elemento ' + element
    } 
}
console.log(fn_array([1,2,3,4],5))
const array = [1,2,3,4,5,6]
console.log(array)