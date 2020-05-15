/**
 * JobController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    try {
      let params = req.allParams()
      let createJobDetail = await JobDetail.create(params).fetch()
      let createJob = await Job.create({ title: params.title, jobDetails: createJobDetail.id, company: params.companyId }).fetch()
      res.ok(createJob)
    } catch (error) {
      return res.badRequest(error)
    }
  },
  find: async (req, res) => {
    try {
      let findJob = await Job.find({}).populate('jobDetails').populate('company')
      res.ok(findJob)
    } catch (error) {
      return res.badRequest(error)
    }
  }

};
