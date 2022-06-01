const bcrypt = require('bcryptjs')
const User = require('../models/User')

module.exports = {
  async login(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Preencha todos os campos' })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ error: 'Usuário não existe' })
    }
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
      return res.status(422).json({ error: 'Senha incorreta' })
    }
  }
}
