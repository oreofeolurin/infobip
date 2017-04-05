# Infobip [![npm version](https://badge.fury.io/js/infobip.svg)](https://badge.fury.io/js/infobip)

Infobip API Client for Node.js using [Infobip API](https://dev.infobip.com)


## Installation

```bash
$ npm install --save infobip
```


## Usage

Basic messaging example
-----------------------

```javascript
var infobip = require('infobip');

//Initialize the client
var client = new infopib.Infobip('username', 'password');

//Set the message
var message = {from: "InfoSMS", to : "41793026727", text : "My first Infobip SMS"};

//Send an SMS
client.SMS.send(message,function(err, response){
   console.log(response);
});

```


Promise are supported
-----------------------

```javascript

client.SMS.send(message).then(res => console.log(res)).catch( err=> console.log(err));

```


## License

This library is licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)