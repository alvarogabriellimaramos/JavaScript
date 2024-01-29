const fs = require("fs");

// o modulo fileSytem é utilizado para leitura e escrita de arquivos
// sincrono...
const conteudo = fs.readFileSync('./index.json','utf-8');
// console.log(conteudo);

// assicrono...
function Read(file){
    fs.readFile(`./${file}`,'utf-8',(erro,response) => {
        if (erro) {
            console.log("Erro ao ler arquivo");
            return;
        };
       console.log(response);
    });
}


// podemos ler arquivos json utilizando o require 

const data = require('./index.json');
// console.log(data);

// lendo uma pasta 

fs.readdir(__dirname,(err,files) => {
    if (err) {
        console.log("Erro ao ler arquivos");
        return;
    }
    files.forEach(file => {
        if (file === 'index.json') console.log(Read(file))
    })
})