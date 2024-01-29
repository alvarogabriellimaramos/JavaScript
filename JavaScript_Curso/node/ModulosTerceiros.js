// Os modulos de terceiros são modulos criados por outras pessoas no javascript e que podemos utilizar frequentemente no nosso código,isso deixa nossa aplicação mais legivel e reutilizavel,existe biblioteca de ler arquivos e escrever arquivo,bibliotecas de crianção de api e etc...

// criamos o gitignore para ignora alguns arquivos que não achamos necessario envia para o nosso repositorio

// utilizando modulo de terceiros 

const _loadsh = require('lodash')
setInterval(() => console.log(_loadsh.random(1,1000)),1000)
const soma = require('./exporta')

// a biblioteca nodemon nos permitir fazer alterações na nossa aplicação sem precisa fecha o terminal para vizualizara,apenas o utilizando o comando nodemon nomedofile