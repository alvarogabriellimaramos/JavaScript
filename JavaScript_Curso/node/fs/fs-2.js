const fs = require('fs');

const Languagens = [
    {
        nome : 'JavaScript',
        'Alto Nivel':true,
        extensão: '.js .mjs .jsx'
    },
    {
        nome: 'Python',
        'Alto Nivel': true,
        extensão: '.py'
    },
    {
        nome: 'Java',
        'Alto Nivel':true,
        extensão: '.java'
    }
];

function WriteFile (file,write) {
    const DataJson = JSON.stringify(write,null,2);
    fs.writeFile(file,DataJson,() => console.log('Arquivo escrito com sucesso'));
};

WriteFile('./index.json',Languagens);