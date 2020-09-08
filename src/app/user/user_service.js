const Queue = require('../queue/queue')

module.exports = {
    store: async (req, res) => {

        const { name, email, password } = req.body

        const user = {
            name,
            email,
            password
        }

        await Queue.add('UserRegistrationMail', { user })

        return res.status(201).json(user)

    }
}