// Simulando o forEach e entendendo o seu funcionamento
Array.prototype.forEach2 = function(callback){
   for (let c = 0;c < this.length;c++) callback(this[c],c,this) 
}
const ArrayObj = [
    {nome: 'Alvaro',idade:18},
    {nome: 'Gabriel',idade:16},
    {nome: 'Maria',idade:19},
    {nome: 'Pedro',idade:21},
    {nome: 'Ana',idade:17},
    {nome: 'Ramos',idade:25}
]
const NewArray = []
ArrayObj.forEach2((value,index,array) => {
     console.log(value,index)
})
