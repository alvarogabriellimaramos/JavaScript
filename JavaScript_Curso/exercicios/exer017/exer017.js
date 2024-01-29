class Veiculo{
    constructor(marca,modelo){
        this.marca = marca
        this.modelo = modelo 
    }
    detalhes(){
        console.log({marca:this.marca,modelo:this.modelo})
    }
}
class Carro extends Veiculo{
    constructor(marca,modelo,numPortas){
        super(marca,modelo)
        this.numPortas = numPortas
    }
}
class Moto extends Veiculo{
    constructor(marca,modelo,cilindradas){
        super(marca,modelo)
        this.cilindradas = cilindradas
    }
}
const carro = new Carro('Toyota','Supra',4)
console.log(carro)
const moto = new Moto('Toyota','XRE',100)
console.log(moto)