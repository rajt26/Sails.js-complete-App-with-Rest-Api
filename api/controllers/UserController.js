/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
// const Joi = require('joi');
module.exports = {
  signup: async (req, res) => {
    try {
      //   const schema = Joi.object().keys({
      //     email: Joi.string().required().email(),
      //     password: Joi.string().required()
      //   })
      //   const params = Joi.validate(req.allParams(), schema)
      const params = req.allParams()
      const encryptedPassword = await UtilService.hashPassword(params.password)
      let user = await User.create({ email: params.email, password: encryptedPassword }).fetch()
      res.ok(user)
    } catch (error) {
      return res.badRequest(error)
    }
  },
  login: async (req, res) => {
    try {
      const params = req.allParams()
      let user = await User.findOne({ email: params.email })
      if (!user) {
        return res.notFound({ err: 'user does not exists' })
      }
      const matchedPassword = await UtilService.comparePassword(params.password, user.password)
      if (!matchedPassword) {
        return res.badRequest({ err: "unauthorised!!" })
      }
      const token = JWTService.issuer({ user: { id: user.id, email: user.email } }, '1 day')
      return res.ok({ token })
    } catch (error) {
      return res.badRequest(error)

    }
  }

};
