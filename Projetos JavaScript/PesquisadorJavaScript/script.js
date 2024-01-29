const input = document.querySelector('input')

const lis = document.querySelectorAll('li')

const form = document.querySelector('form')

const output = document.querySelector('output')

form.addEventListener('submit',e => e.preventDefault())


function FunctionSearch(){
    const ul = document.querySelector('ul')

    const NamesArray = []

    lis.forEach(li => {
        const AnimalName = li.textContent

        NamesArray.push(AnimalName)

        input.addEventListener('input',() => {
            li.textContent = input.value

            if (input.value === AnimalName){

                li.textContent = AnimalName

                output.textContent = 'Animal Encontrado'
            }
            if (NamesArray.indexOf(input.value) === -1){
                output.textContent = 'Animal Não encontrado'
            }
            if (input.value === '') {

                li.textContent = AnimalName

                output.textContent = ''
            }
            
        })
    })
}
FunctionSearch()
