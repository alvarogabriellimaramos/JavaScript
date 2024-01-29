const nodemailer = require('nodemailer');

function TransportEmail (email,username,token,msg) {
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "alvarogabriel1103@hotmail.com",
            pass: 'alalal##'
        }
    })
    const config = {
        from: 'alvarogabriel1103@hotmail.com',
        to: email,
        subject: `Token de ${msg}`,
       html: `<strong>
            Olá ${username} aqui está seu token de ${msg}
       </strong>
        <p> ${token} </p>
       `
    }
    return new Promise((resolve,reject) => {
        transporter.sendMail(config,err => {
            if (err) reject({messagem: 'Erro ao enviar token para o email'})
            resolve({messagem:'Token enviado com sucesso,por favor verifique seu e-mail'});
        })
    })
}

module.exports = TransportEmail