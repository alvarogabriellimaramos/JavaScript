// Acessando pastas internas utilizando require
const moduloA = require('../../ModuloA')
// para saimos de uma pasta o utilizamos ../ e para saimos de duas pastas ../../ e assim sucessivamente caso queiramos sair de mais pastas

// podemos também pega os modulos core,que são modulos que já vez por padrão no nodejs 

// modulos http 
const http = require('http')

http.createServer((req,res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)