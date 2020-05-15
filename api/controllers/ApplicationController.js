/**
 * ApplicationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    try {
      let params = req.allParams()
      let createCandidate = await Candidate.create(params).fetch()
      let application = await Application.create({ candidate: createCandidate.id, job: params.jobId }).fetch()
      res.ok(application)
    } catch (error) {
      return res.badRequest(error)
    }
  },
  find: async (req, res) => {
    try {
      let findApplication = await Application.find({}).populate('job').populate('candidate')
      res.ok(findApplication)
    } catch (error) {
      return res.badRequest(error)
    }
  }

};
