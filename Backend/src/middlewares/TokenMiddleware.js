const User = require('../models/User')
const jwt = require('jsonwebtoken')

module.exports = {
  async validateToken(req, res, next) {
    const id = req.params.id

    const user = await User.findById(id)

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' })
    }
    res.status(200).json({ user })
  },

  checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
      return res.status(401).json({ MSG: 'Acesso Negado' })
    }

    try {
      const secret = process.env.SECRET

      jwt.verify(token, secret)

      next()
    } catch (error) {
      return res.status(401).json({ error: error.message })
    }
  }
}
