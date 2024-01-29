let pessoas1 = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 17 },
    { nome: 'Charlie', idade: 30 }
  ];
  
  let pessoas2 = [
    { nome: 'David', idade: 19 },
    { nome: 'Eva', idade: 22 },
    { nome: 'Frank', idade: 16 }
  ];
function ConcactArrayObject(array,array_2){
    const MaiorIdade = { maiorIdade: true }
    const New_Array = array.concat(array_2)
    let Person;
    New_Array.forEach(object => {
        if (object.idade >= 18) object.MaiorIdade = true 
    })
    return New_Array
}
console.log(ConcactArrayObject(pessoas1,pessoas2))
// Seu código aqui
// Resultado esperado: [{ nome: 'Alice', idade: 25, maiorIdade: true }, ...]
