const UpperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z'];

const Simbolos = ['!','@','#','$','%','&','*','(',')','/','?','|'];

const LowerArray = [];
UpperArray.forEach(item => LowerArray.push(item.toLowerCase()));

let PasswordComprimento = 10

const RandomCaracter = (...Arrays) => {
    let random = 0;
    const ArrayPassowrdRandom = [];
    for (let array of Arrays){
       array.forEach((items,index) => {
        random = Math.round(Math.random() * (1,index) - 1);
        if (items[random] === undefined) return ;
        if (ArrayPassowrdRandom.length >= PasswordComprimento) return;
        ArrayPassowrdRandom.push(items[random]);
       });
    };
    return ArrayPassowrdRandom ;
};
let RandomPassowrd = ''

// UI (Interface de Usuario)
const NormalButton = document.getElementById('normal')
const LowerButton = document.getElementById('lower')
const h1 = document.querySelector('h1')
NormalButton.addEventListener('click',() => {
     RandomPassowrd = RandomCaracter(UpperArray,Simbolos,LowerArray)
    h1.textContent = RandomPassowrd
})
LowerButton.addEventListener('click',() => {
    const PasswordLower = []
    const LowerFunction = () => {
        RandomCaracter(UpperArray,Simbolos,LowerArray).forEach(items => {
            LowerArray.forEach(itemLower => {
                if (items === itemLower) PasswordLower.push(items )
                if (PasswordLower.length >= 8) PasswordLower.pop(items);
            }) 
        })
    }
    RandomCaracter(UpperArray,Simbolos,LowerArray).forEach(items => {
       LowerFunction()
    })
    h1.textContent = PasswordLower
})