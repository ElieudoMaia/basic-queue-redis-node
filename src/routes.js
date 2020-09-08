const { Router } = require('express')
const routes = Router()

require('./app/user/user_routes')(routes)

module.exports = routes