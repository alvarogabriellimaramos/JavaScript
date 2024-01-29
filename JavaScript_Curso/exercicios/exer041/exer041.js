let esperaPorTempo = new Promise(resolve => setTimeout(() => resolve('A espera pelo tempo acabou'),2000))
esperaPorTempo.then(res => console.log(res))

// exercicio 02 
const DobraNumero = async num => new Promise(resolve => resolve(num * 2 ))

const TriplicaNumero =  async num => new Promise(resolve => resolve(num * 3 ))

let calcula = async (num) => Promise.all([DobraNumero(num),TriplicaNumero(num)])

calcula(3).then(res => console.log(res))

// exercicio 03 
calcula = async num => {
    try{
        const p1 = await DobraNumero(num)
        const p2 = await TriplicaNumero(num)
        if (isNaN(p1) || isNaN(p2)) return `Erro: O numero é NaN`
        return await Promise.all([p1,p2])
    }
    catch(e){return `Erro promises não concluidas ${e}`}
}
calcula(3).then(res => console.log(res))
.catch(err => console.log(err))

// exercicio 04
const ApiFn = user => `https://api.github.com/users/${user}/repos`
const obterDados1 = async name => {
    const data = (await fetch(ApiFn(name))).json()
    return data 
}
const obterDados2 = async name => {
    const data = (await fetch(ApiFn(name))).json()
    return data 
}
const obterDados3 = async name => {
    const data = (await fetch(ApiFn(name))).json()
    return data 
}

const ObterTodosOsDados = async () => {
    const p1 = await obterDados1('alvarogabriellimaramos')
    const p2 = await obterDados2('javascript')
    const p3 = await obterDados3('Python')
    return Promise.all([p1,p2,p3])
}

// exercicio 05 
const ProcessaListaDeNumeros = async () => await Promise.all([DobraNumero(2),DobraNumero(4),DobraNumero(10)])

ProcessaListaDeNumeros().then(res => console.log(res))
