const UserService = require('./user_service')

module.exports = route => {

    route.post('/users', UserService.store)

}