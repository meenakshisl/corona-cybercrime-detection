var request = require('request');

const url ='https://covid-api.mmediagroup.fr/v1/cases?';

var cases = {

    find: function(req, res, next) {
 
        request(url + req.params.country + '&'+ req.params.stat ,
 
        function (error, response, body) {
		console.log(req.params.country);
		console.log(req.params.stat);
            if (!error && response.statusCode == 200) {
 
                response = JSON.parse(body);
                res.send(response);
 
            } else {
 
                console.log(response.statusCode + response.body);
 
                res.send({cases:null});
 
            }
 
        });
 
    }
 
 };

module.exports = cases;
