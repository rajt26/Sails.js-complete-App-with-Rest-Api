/**
 * CompanyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    try {
      let params = req.allParams()
      let createCompany = await Company.create({
        name: params.name,
        city: params.city,
        address: params.address,
        user: req.user
      }).fetch()
      return res.ok(createCompany)
    } catch (error) {
      return res.badRequest(error)
    }
    return res.ok('ok')
  },
  find: async (req, res) => {
    try {
      let findCompany = await Company.find({}).populate('jobs')
      res.ok(findCompany)
    } catch (error) {
      return res.badRequest(error)
    }
  },
  findOne: async (req, res) => {
    try {
      let findOneCompany = await Company.findOne({ id: req.params.id })
      res.ok(findOneCompany)
    } catch (error) {
      return res.badRequest(error)
    }

  },
  update: async (req, res) => {
    try {
      let params = req.allParams()
      let updateCompany = await Company.update({ id: params.id }, params).fetch()
      res.ok(updateCompany)
    } catch (error) {
      return res.badRequest(error)
    }
  },
  delete: async (req, res) => {
    try {
      let deleteCompany = await Company.destroy({ id: req.params.id })
      res.ok(deleteCompany)
    } catch (error) {
      return res.badRequest(error)
    }

  }

};
