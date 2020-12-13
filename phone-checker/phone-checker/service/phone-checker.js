var request = require('request');


const ipa = 'https://apilayer.net/api/validate?access_key=08da4f6e569683448386fd76e1710dfc&number=';

var ip = {

   find: function(req, res, next) {
	  


       request(ipa +req.params.number,

       function (error, response, body) {

           if (!error && response.statusCode == 200) {

               response = JSON.parse(body);
                
               res.send(response);

           } else {

               console.log(response.statusCode + response.body);

               res.send({ip: NULL});

           }

       });

   }

};

module.exports = ip;
