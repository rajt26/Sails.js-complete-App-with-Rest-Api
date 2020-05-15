const jwt = require('jsonwebtoken')
const SECRET = 'Secret'
module.exports = {
  issuer: (payload, expiresIn) => {
    return jwt.sign(payload, SECRET, { expiresIn })
  },
  verify: (token) => {
    return jwt.verify(token, SECRET)
  }
}