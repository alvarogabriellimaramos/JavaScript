// no javascript es6(versão de 2015) foi adicionado as classes,que serviram para ajuda pessoas que vinha de outras linguagem de programação fortemente orientada a objetos,como o java e o csharp,as classes no javascript não tem nada de muito diferente,são so uma maneira mais exotica de escreve funções,a herança em classes continua usando o conceito de prototipos,quando nosso programar se iniciar as classes serã transformados em funções construtoras

class Lançamento{
    // adicionado parametros a nossa classe,utilizamos o constructor
    constructor(nome = 'Genérico',valor = 0){
        this.nome = nome 
        this.valor = valor 
    }
}
class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes 
        this.ano = ano 
        this.lancamentos = []
    }
    // criando métodos dentro da função 
    addLancamentos(...lancamentos){
        lancamentos.forEach(value => this.lancamentos.push(value))
    }
    sumario(){
        let valorConsolidado = 0 
        this.lancamentos.forEach(value => {
            valorConsolidado += value.valor
        })
    }
}
const ciclo = new CicloFinanceiro('Janeiro',2016)
const salario = new Lançamento('Salario',45000)
ciclo.addLancamentos(salario)

console.log(ciclo.lancamentos)