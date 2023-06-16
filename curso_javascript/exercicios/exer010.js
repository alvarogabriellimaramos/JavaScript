const fn_num = (num) => {
    if (Number.isInteger(num) == true){
        var str = String.toString(num)
    }
    return typeof str 
}
console.log(fn_num(2))