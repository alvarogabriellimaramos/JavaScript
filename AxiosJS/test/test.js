const fs = require("fs")
const axios = require('axios')
const UrlPath = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png'
async function FunctionAxios(url){
    const data = await axios.get(url,{
        responseType: 'stream'
    })
    return data 
}
FunctionAxios(UrlPath).then(response => {
    response.data.pipe(fs.createWriteStream('./img.img'))
})
.catch(error => console.log(error))