const fs = require('fs').promises;

async function ReadFile(file){
    try {
        const data = await fs.readFile(file,'utf-8');
        return data;
    }
    catch(e) { return {messagem: 'Erro ao ler arquivo JSON ' + e}}
}

module.exports = ReadFile