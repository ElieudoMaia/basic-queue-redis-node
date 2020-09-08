const Queue = require('bull')
const redisConfig = require('../../config/redis')


const jobs = require('../jobs/index')

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle
}))

module.exports = {
    queues,
    add(name, data) {
        const queue = queues.find(queue => queue.name === name)
        return queue.bull.add(data)
    },
    process() {
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle)

            queue.bull.on('failed', (job, err) => {
                console.log('Job failed', queue.key, job.data)
                console.log(err)
            })

        })
    }
}

// const mailQueue = new Queue(registrationUserMail.key, redisConfig)

// mailQueue.on('failed', (job, err) => {
//     console.log('Job failed', job.name, job.data)
//     console.log(err)
// })

// module.exports = mailQueue