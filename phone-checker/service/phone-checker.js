var request = require('request');


const ipa = 'https://apilayer.net/api/validate?';

var ip = {

   find: function(req, res, next) {
	   var data = { "access_key": "08da4f6e569683448386fd76e1710dfc",
		   "number":req.params.number};


       request(ipa ,

       function (error, response, body) {

           if (!error && response.statusCode == 200) {

               response = JSON.parse(body);
                const ipj=body.ip;
               res.send(response);

           } else {

               console.log(response.statusCode + response.body);

               res.send({ip: NULL});

           }

       });

   }

};

module.exports = ip;
