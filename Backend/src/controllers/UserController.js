const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {
  async index(req, res) {
    try {
      const users = await User.find()
      return res.status(200).json({ users })
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  },

  async store(req, res) {
    const { name, email, password, confirmPassword } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Preencha todos os campos' })
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'As senhas não conferem' })
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: 'A senha deve ter no mínimo 6 caracteres' })
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe' })
    }

    // const salt = bcrypt.genSaltSync(10)
    // const passwordHash = bcrypt.hashSync(password, salt)

    const user = new User({
      name,
      email,
      password
    })

    try {
      await user.save()
      return res.status(201).json({ user })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async login(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Preencha todos os campos' })
    }

    const user = await User.findOne({ email: email })
    if (!user) {
      return res.status(404).json({ error: 'Usuário não existe' })
    }

    // const checkPassword = bcrypt.compareSync(password, user.password)
    // if (!checkPassword) {
    //   return res.status(401).json({ error: 'Senha incorreta' })
    // }
    // return res.status(200).json({ MSG: 'Deu certo!' })

    const userPassword = await User.findOne({ password })

    if (!userPassword) {
      return res.status(422).json({ error: 'Senha incorreta' })
    }

    try {
      const secret = process.env.SECRET

      const token = jwt.sign({ id: user._id }, secret)
      return res.status(200).json({ MSG: 'Autenticado com sucesso', token })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: error.message })
    }
  }
}
