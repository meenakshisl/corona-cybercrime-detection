var request = require('request');


const url = 'https://covid-api.mmediagroup.fr/v1/cases?';
const ip_url = 'http://localhost:3000/checkno/number=';

var cases = {

   find: function(req, res, next) {

       
       request(ip_url + req.params.number ,

        function (error, response, body) {
		console.log(req.params.number);
		console.log(req.params.stat);
 
            if (!error && response.statusCode == 200) {
 
                
                  const ipj=JSON.parse(body);
                  const countr=ipj.country_name;
		  const country = countr.slice(0,countr.indexOf(" ("));
		  //console.log(countr);
	          //console.log(country.indexOf(" "));
                  request(url +"country="+country+'&status='+req.params.stat ,

                    function (error, response, body) {
             
                        if (!error && response.statusCode == 200) {
             
                            response = JSON.parse(body);
             
                            res.send(response);
             
                        } else {
             
                            console.log(response.statusCode + response.body);
             
                            res.send({cases:null});
             
                        }
             
                    })
                
 
            } else {
 
                console.log(response.statusCode + response.body);
 
                
 
            }
 
        });

   }

};

module.exports = cases;
