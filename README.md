# Corona Cybercrime Detection aid
------
*A simple API to demonstrate the use of microservices*

## Scenario
Number of calls and messages by fraudsters carrying misinformation about CoronaVirus is on the rise. This is a simple REST API which aims to get information about the Corona cases in an area from an updated database given the location. In case, we have the phone number of a misinformant or the ip address of their device, the API can help get the actual number of corona cases from an updated data-base. Data is returned in JSON format.

## Microservice Overview

## Test cases

### IP-checker

`http://35.223.144.119:82/checkip/176.31.84.249`

### Phone-checker

`http://35.223.144.119/checkno/919532351442`

### Corona Case

1. country
    `http://35.223.144.119:84/getcase/country=France&status=confirmed`
2. from phone no
    `http://35.223.144.119:84/getcasefromno/919532351442&Confirmed`
3. from ip address
     `http://35.223.144.119:84/getcasefromip/137.74.203.101&Confirmed`
     `
