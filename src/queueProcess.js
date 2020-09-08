const Queue = require('./app/queue/queue')
const UserRegistrationMail = require('./app/jobs/RegistrationUserMail')

Queue.process(UserRegistrationMail.handle)