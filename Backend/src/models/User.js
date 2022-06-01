const mongoose = require('mongoose')

const User = new mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = User
