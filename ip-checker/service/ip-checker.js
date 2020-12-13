var request = require('request');


const ipa = 'https://api.ipgeolocation.io/ipgeo?apiKey=62a4aec006bb49f3874bf022b2d4ac0d&ip=';

var ip = {

   find: function(req, res, next) {
	  


       request(ipa +req.params.ip,

       function (error, response, body) {

           if (!error && response.statusCode == 200) {

               response = JSON.parse(body);
                
               res.send(response);

           } else {

	      //response = JSON.parse(body);
	      // console.log(response)

               console.log(response.statusCode + response.body);

               res.send({ip: null});

           }

       });

   }

};

module.exports = ip;
