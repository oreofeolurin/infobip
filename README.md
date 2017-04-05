# Infobip [![npm version](https://badge.fury.io/js/infobip.svg)](https://badge.fury.io/js/infobip)

Infobip API Client for Node.js using [Infobip API](https://dev.infobip.com)


## Installation

```bash
$ npm install --save infobip
```


## Usage

Busform provides you with a form `data` object containing the values of the fields in the multipart form.

Examples:

```javascript
var infobip = require('infobip');

//Initialize the client
var client = new infopib.Infobip( process.env.INFOBIP_USERNAME, process.env.INFOBIP_PASSWORD);

//Send an SMS
this.client.SMS.send({from: "InfoSMS", to : "41793026727", text : "My first Infobip SMS"},function(err, response){
        if(err) console.log(err);
        
        console.log(response);
        
    });
```


## License

This library is licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)