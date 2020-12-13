'use strict';

var properties = require('../package.json')
var cases = require('../service/getcase')
var fromip = require('../service/getcasefromip')
var fromno = require('../service/getcasefromno')


var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version,
	   description: properties.description
       }
       res.json(aboutInfo);
   },
   getcase: function(req, res) {
           cases.find(req, res, function(err, cases) {
               if (err)
                   res.send(err);
               res.json(cases);
           });
       },
   getcasefromip: function(req, res) {
       fromip.find(req, res, function(err,fromip) {
           if (err)
              res.send(err);
           res.json(fromip);
       });
   },
   getcasefromno: function(req, res) {
    fromno.find(req, res, function(err,fromno) {
        if (err)
           res.send(err);
        res.json(fromno);
    });
},

};

module.exports = controllers;
