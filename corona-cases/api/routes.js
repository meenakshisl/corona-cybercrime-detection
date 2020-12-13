'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
   app.route('/get_cases/:country&:stat')
       .get(controller.get_cases);
   app.route('/get_cases_from_ip/:ip&:stat')
       .get(controller.get_cases_from_ip);
   app.route('/get_cases_from_no/:number&:stat')
       .get(controller.get_cases_from_no);
};
