function fn_palidromo(str_normal){
    const str_palidromo = str_normal.split('').reverse().join('')
    if (str_palidromo == str_normal){
        return 'Essa string é um palidromo'
    }
    else{
        return 'Essa string não é um palidromo '
    }
}
console.log(fn_palidromo('reviver'))
