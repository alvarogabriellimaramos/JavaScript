const fs = require('fs').promises
const axios = require('axios')
const URL = 'https://masculinistaopressoroficial.files.wordpress.com/2017/06/as-48-leis-do-poder-robert-greene.pdf'
const ReadAsync = async url => {
    const data = await axios.get(url)
    return data 
}
const WriteAsync = async (file,write) => {
    try{
        await fs.writeFile(file,write)
        return `Arquivo gravado com sucesso`
    }
    catch(error){
        return `erro ao gravar arquivo` + error
    }
}
ReadAsync(URL).then(response => {
    if (typeof response.data === 'string') {
        WriteAsync('./file.txt',response.data).then(response => console.log(response))
        .catch(erro => console.log(erro))
    }
})
.catch(error => console.log(error))