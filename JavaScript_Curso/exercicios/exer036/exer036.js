const catalago = [
    {
        titulo: 'A freia',
        genero: 'Terro', 
        ano: 2018,
        avaliação: 3
    },
    {
        titulo: 'Nada de novo no front',
        genero:'História',
        ano: 2022,
        avaliação: 5
    },
    {
        titulo: 'Perdido em marte',
        genero:'Ficção ciétintifca',
        ano: 2017,
        avaliação: 4
    },
    {
        titulo: 'A segunda guerra mundial',
        genero:'História',
        ano: 2018,
        avaliação: 5
    }
]

const MelhoresAvaliação = catalago.filter(movie => movie.avaliação >= 4).sort((a,b) => b.avaliação - a.avaliação).map(movie => movie.titulo)
console.log(MelhoresAvaliação)

let numbers = [1,2,3,4,5,6]