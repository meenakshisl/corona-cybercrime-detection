# Corona Cybercrime Detection aid
------
*A simple API to demonstrate the use of microservices*

## Scenario
Number of calls and messages by fraudsters carrying misinformation about CoronaVirus is on the rise. This is a simple REST API which aims to get information about the Corona cases in an area from an updated database given the location. In case, we have the phone number of a misinformant or the ip address of their device, the API can help get the actual number of corona cases from an updated data-base. Data is returned in JSON format.

## Microservice Overview

<img src="https://github.com/meenakshisl/corona-cybercrime-detection/blob/master/images/microservice_arch.png" width="800" hieght="1000" />


### IP-checker

Gives information about the ip address passed as parameter
- `/about`
     returns description of the service
- `/checkip/:ip`
     returns details of the ip address passed as parameter
- Sample testcase :
    `http://35.223.144.119:82/checkip/176.31.84.249`

### Phone-checker
- `/about`
    returns description of the service
- `/checkno/:number`
    returns the details of the number passed as parameter
- Sample testcase:
    `http://35.223.144.119/checkno/919532351442`


### Corona Case

Returns the latest details about corona cases in a particular region

- `/about`

     returns the details of the microservice
     
- `/getcases/:country&:status`

     returns the number of corona cases of `status` in country `country`
     
     Sample case : `http://35.223.144.119:84/getcase/country=France&status=confirmed`
     
- `/getcasefromno/:number&:status`

     Makes a call to phone-checker microservice and get the counrty information. This result is then passed on to the api of this microservice to get the cases of the country
     
     Sample case :
     `http://35.223.144.119:84/getcasefromno/919532351442&Confirmed`
     
- `/getcasefromip/:ip&:status`

     Makes a call to ip-checker microservice and get the counrty information. This result is then passed on to the api of this microservice to get the cases of the country
     
     Sample case
     `http://35.223.144.119:84/getcasefromip/137.74.203.101&Confirmed`
     `
     
 
