const pass1 = (object,next) => {
    object.valor1 = 'mid1'
}
const pass2 = (object,next) => {
    object.valor2 = 'mid2'
}
const pass3 = object => object.valor3 = 'mid3';
const funcs = [pass1,pass2,pass3]
const Exec = (ctx) => {
    for (let func = 0; func < funcs.length; func++) {
        funcs[func](ctx,funcs[func]);
    }
}

const object = {};
Exec(object,pass1,pass2,pass3);
console.log(object)