var request = require('request');


const url = 'https://covid-api.mmediagroup.fr/v1/cases?';
const ip_url = 'http://localhost:3002/checkip/';

var cases = {

   find: function(req, res, next) {

       
       request(ip_url + req.params.ip ,

        function (error, response, body) {
		console.log(req.params.ip);
		console.log(req.params.stat);
 
            if (!error && response.statusCode == 200) {
 
                
                  const ipj=JSON.parse(body);
                  const country=ipj.country_name;
		  //console.log(country);
		  //const uri = url + "country="+country+'&status='+req.params.stat ;
                  console.log(uri);
		    request(uri,

                    function (error, response, body) {
                        //console.log(response) 
                        if (!error && response.statusCode == 200) {
             
                            response = JSON.parse(body);
             
                            res.send(response);
             
                        } else {

			    //console.log(response);
             
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

//http://localhost:8000/getcasefromip/137.74.203.101&Confirmed
module.exports = cases;
