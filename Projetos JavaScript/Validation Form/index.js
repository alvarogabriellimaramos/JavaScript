/*Campo de entrada */
const form = document.querySelector('form');
const Email = document.getElementById('email');
const passwordOne = document.getElementById('password')
const PasswordTwo = document.getElementById('password-2')
// MSG error or correct 
const emailErro = document.querySelector('.erro-email')
const CorrectPassword = document.querySelector('.correct-password')
const CorrectPasswordTwo = document.querySelector('.correct-password-2')
const ErroPassword = document.querySelector('.erro-senha')
const ErroPasswordTwo = document.querySelector('.erro-senha-2')
// Variabel Global
let EmailValue;
form.addEventListener('submit',(event) => {
    event.preventDefault()
    EmailValue = Email.value 
    ValidateEmail()

    ValidatePassword(passwordOne,PasswordTwo)
})
// Function Validate Email
const ValidateEmail = () => {
    
    const CorrectEmail = document.querySelector('.correct-email')

    const CaractresEmail = EmailValue.length

    if ( CaractresEmail < 20 || CaractresEmail >= 255 || EmailValue.indexOf('@') === -1 || EmailValue.indexOf('.com') === -1){
        emailErro.style.display = 'inline'

        CorrectEmail.style.display = 'none'
    }
    else{
        CorrectEmail.style.display = 'inline'

        emailErro.style.display = 'none'
    }
}
// Function Validate Passwords 
const ValidatePassword = (password,password2) => {
    const PasswordValue = password.value 

    const PasswordValueTwo = password2.value

    if (PasswordValue.length >= 8) {
        CorrectPassword.style.display = 'inline'

        ErroPassword.style.display = 'none'

        ErroPasswordTwo.style.display = 'none'

        if (PasswordValueTwo === '' ){
            ErroPasswordTwo.style.display = 'inline'

            CorrectPasswordTwo.style.display = 'none'
        }
        else{
            if (PasswordValue === PasswordValueTwo){
                 
                 CorrectPassword.style.display = 'inline'

                 CorrectPasswordTwo.style.display = 'inline'

                 ErroPassword.style.display = 'none'

                 ErroPasswordTwo.style.display = 'none'
                 OpenPage('html/sucess.html')
            }
            else{
                 ErroPasswordTwo.style.display = 'inline'

                 CorrectPassword.style.display = 'inline'

                 CorrectPasswordTwo.style.display = 'none'

                 ErroPassword.style.display = 'none'
            }
        }
    }
    else{
        CorrectPassword.style.display = 'none'

        CorrectPasswordTwo.style.display = 'none'

        ErroPassword.style.display = 'inline'

        ErroPasswordTwo.style.display = 'inline'
    }
}

const OpenPage = link => {
    setTimeout(() => {
        window.open(link)
    },1000)
}