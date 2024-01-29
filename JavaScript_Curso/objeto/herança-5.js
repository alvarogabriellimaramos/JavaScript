String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
const str = 'Alvaro'.reverse()
console.log(str)
function Ola(){
    return `Olá`
}

const array = [1,2,3,4,5,6]
Array.prototype.Ultimo = function(){
    return this[this.length - 1]
}
console.log(array.Ultimo())