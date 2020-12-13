'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
   app.route('/getcase/:country&:stat')
       .get(controller.getcase);
   app.route('/getcasefromip/:ip&:stat')
       .get(controller.getcasefromip);
   app.route('/getcasefromno/:number&:stat')
       .get(controller.getcasefromno);
};
