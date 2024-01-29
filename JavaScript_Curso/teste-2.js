const Api = 'https://api.github.com/users/alvarogabriellimaramos/repos'
async function GetResponse(){
    const Data = (await fetch(Api)).json()
    return Data    
}
GetResponse().then(res => console.log(res))

.catch(err => console.log(err))