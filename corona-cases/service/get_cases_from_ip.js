var request = require('request');


const cases = 'https://covid-api.mmediagroup.fr/v1/cases?';
const ip = 'http://localhost:3002/checkip/';

var get_cases = {

   find: function(req, res, next) {

       
       request(ip + req.param.ip,

        function (error, response, body) {
 
            if (!error && response.statusCode == 200) {
 
                
                  const ipj=JSON.parse(body);
                  const country=ipj.country_name;
                  request(cases +'country='+country+'&status='+req.param.stat ,

                    function (error, response, body) {
             
                        if (!error && response.statusCode == 200) {
             
                            response = JSON.parse(body);
             
                            res.send(response);
             
                        } else {
             
                            console.log(response.statusCode + response.body);
             
                            res.send({iploca: null});
             
                        }
             
                    })
                
 
            } else {
 
                console.log(response.statusCode + response.body);
 
                
 
            }
 
        });

   }

};

module.exports = get_cases;
