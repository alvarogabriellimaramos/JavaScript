const City = document.querySelectorAll('.city')

const Nature = document.querySelectorAll('.nature')
const Person = document.querySelectorAll('.person')
const Shadow = document.querySelector('.div-shadow')
const Cars = document.querySelectorAll('.car')

const buttonNature = document.getElementById('nature')
const buttonCity = document.getElementById('city')
const buttonPerson = document.getElementById('person')
const buttonCar = document.getElementById('cars')

const FilterCards = (array,array2) => {
    Shadow.style.display = 'block'
    array.forEach(img => img.style.zIndex = '1')
    array2.forEach(img => img.style.zIndex = '0')
}
buttonNature.addEventListener('click',() => {
    FilterCards(Nature,City)
    FilterCards(Nature,Person)
    FilterCards(Nature,Cars)
})

buttonCity.addEventListener('click',() => {
    FilterCards(City,Nature)
    FilterCards(City,Person)
    FilterCards(City,Cars)
})
buttonPerson.addEventListener('click',() => {
    FilterCards(Person,Nature)
    FilterCards(Person,City)
    FilterCards(Person,Cars)
})
buttonCar.addEventListener('click',() => {
    FilterCards(Cars,Nature)
    FilterCards(Cars,City)
    FilterCards(Cars,Person)
})