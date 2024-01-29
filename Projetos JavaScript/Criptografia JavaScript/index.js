const fs = require('fs')
// Random Function 
const RandomFunction = (min,max) => {

    let random = Math.round(Math.random() * (min + max) - min)

    if (random < min || random >= max) random = min 

    return random 
}
// Function Cripto
const Cripto = string => {
    let stringCripto = ''

    for (let c in string){

        const random = RandomFunction(0,string.length)

        stringCripto += string[random]
    }
    return stringCripto
}
// Function to write in file 
const WriteFile = (file,write) => {
    const JsonWrite = JSON.stringify({write},null,2)

    fs.writeFile(file,JsonWrite,() => console.log('Arquivo gravado com sucesso '))

    return;
}
// Function to read one file and Cripto
const ReadFile = file => {
    fs.readFile(file,(err,response) => {

        if (err){

            console.log('Erro ao ler um arquivo')

            return;
        }
        const StringResponse = response.toString()

        WriteFile(file,Cripto(StringResponse))
    })
}
ReadFile('./teste.js')