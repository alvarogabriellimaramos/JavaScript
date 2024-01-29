// estrategia 1 para gera valor padrão em parametros de funções 
function soma(a,b,c){
    a = a || 1
    b = b || 1 
    c = c || 1 
    return a + b + c 
}
console.log(soma(1,2,3))// isso irá da um problema quando tentamos coloca o valor zero em quaisquer dos parametros
function soma2(a,b,c){
    a += a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c 
    return a + b + c 
}

// valor padrão do es2015
function soma3( a = 1, b = 1,c = 1){
    return a + b + c
} // parei na parte 28:35 do curso do telegram