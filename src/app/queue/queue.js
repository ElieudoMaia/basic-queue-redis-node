const Queue = require('bull')
const redisConfig = require('../../config/redis')
const registrationUserMail = require('../jobs/RegistrationUserMail')

const mailQueue = new Queue(registrationUserMail.key, redisConfig)

mailQueue.on('failed', (job, err) => {
    console.log('Job failed', job.name, job.data)
    console.log(err)
})

module.exports = mailQueue