const mailService = require('../email/email_sender')

module.exports = {
    key: 'UserRegistrationMail',
    async handle({ data }) {

        const { user } = data

        await mailService.sendMail({
            from: `test <test@test.com.br>`,
            to: `${user.name} <${user.email}>`,
            subject: `Teste de envio de email`,
            html: `Olá ${user.name}, bem vindo ao nosso serviço de email`
        })
    }
}