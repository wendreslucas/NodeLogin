const express = require('express')
const UserController = require('../controllers/UserController')
const routes = express.Router()
const TokenMiddleware = require('../middlewares/TokenMiddleware')

routes.get('/user', UserController.index)
routes.post('/user/register', UserController.store)

routes.post('/user/authenticate', UserController.login)
routes.get(
  '/user/:id',
  TokenMiddleware.checkToken,
  TokenMiddleware.validateToken
)

module.exports = routes
