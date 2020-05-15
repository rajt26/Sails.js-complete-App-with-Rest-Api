const bcrypt = require('bcrypt')
const SALT_ROUND = 10
module.exports = {
  hashPassword: async (password) => {
    return await bcrypt.hash(password, SALT_ROUND)
  },
  comparePassword: async (password, hash) => {
    return await bcrypt.compare(password, hash)
  }
}