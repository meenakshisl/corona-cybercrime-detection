'use strict';

var properties = require('../package.json')
var ip = require('../service/phone-checker');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version,
	   description: properties.description
       }
       res.json(aboutInfo);
   },
   checkno: function(req, res) {
           ip.find(req, res, function(err, ip) {
               if (err)
                   res.send(err);
               res.json(ip);
           });
       },
     
};

module.exports = controllers;
