/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'post /companies/create': 'CompanyController.create',
  'get /companies/find': 'CompanyController.find',
  'get /companies/find/:id': 'CompanyController.findOne',
  'post /companies/update/:id': 'CompanyController.update',
  'delete /companies/delete/:id': 'CompanyController.delete',

  'post /job/create': 'JobController.create',
  'post /job/find': 'JobController.find',

  'post /applications/create': 'ApplicationController.create',
  'get /applications/find': 'ApplicationController.find',

  'post /user/signup': 'UserController.signup',
  'post /user/login': 'UserController.login',





};
