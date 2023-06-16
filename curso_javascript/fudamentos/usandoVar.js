// Variavel var tem o escopo global independente de quantos blocos de codigos esteja no meio dela 
{ 
    {
         {
             { 
                var sera = 'Sera??' 
            }
         }
         
        } 
        
    }
console.log(sera)
// mas dentro de uma função o escopo global da variavel var fica limitado ou seja ela so poderá ser acessada com o escopo global dentro da função e não fora dela 
function teste() {
    var local = 123
}
// quando criamos uma variavel var no browser fora de uma função automaticamente ela irá esta dentro da função window 

// lembrando que não é muito recomendado usa o escopo global,já que isso poder ocasionar muitos problemas no nosso codigo,como por exemplo: reescrever a variavel sem querer,problemas de declaração e entre outros
// Aviso fuja do escopo global( front-end )!!! 