'use strict';

var properties = require('../package.json')
var cases = require('../service/get_cases')
var cases_ip = require('../service/get_cases_from_ip')
var cases_no = require('../service/get_cases_from_no')


var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   get_cases: function(req, res) {
           cases.find(req, res, function(err, cases) {
               if (err)
                   res.send(err);
               res.json(cases);
           });
       },
   get_cases_from_ip: function(req, res) {
       cases_ip.find(req, res, function(err,cases_ip) {
           if (err) 
              res.send(err);
           res.json(cases_ip);
       });
   },
   get_cases_from_no: function(req, res) {
    cases_no.find(req, res, function(err,cases_no) {
        if (err) 
           res.send(err);
        res.json(cases_no);
    });
},
     
};
