const aleatorio = (min,max) => {
    const math = Math.round(Math.random() * (max - min) + min);
    return math;
};
console.log(aleatorio(20,1))