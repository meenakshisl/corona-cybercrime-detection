var request = require('request');

const url = 'https://covid-api.mmediagroup.fr/v1/history?';

var get_cases = {

    find: function(req, res, next) {
 
        request(url + req.params.country + '&' + req.params.stat ,
 
        function (error, response, body) {
 
            if (!error && response.statusCode == 200) {
 
                response = JSON.parse(body);
		console.log(body);
                res.send(response);
 
            } else {
 
                console.log(response.statusCode + response.body);
 
                res.send({iniploca: null});
 
            }
 
        });
 
    }
 
 };

module.exports = get_cases;
