function MeuObjeto() {}
const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()
// quando criamos um objeto a partir de uma função construtora o objeto.__proto__ irá aponta para o FunçãoConstrutora.prototype
console.log(obj1.__proto__ === MeuObjeto.prototype) // true 
console.log(obj1.__proto__ === obj2.__proto__) // true 
console.log(obj1.__proto__ === MeuObjeto.__proto__) // false
MeuObjeto.prototype.nome = 'Alvaro'
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
console.log(obj3.nome)

// o prototype da função construtora MeuObjeto irá apontar para Function.prototype 
console.log(MeuObjeto.__proto__ === Function.prototype)
// verificando qual o prototype do Function.prototype
console.log(Function.prototype.__proto__)
