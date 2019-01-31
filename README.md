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

SMS to multiple destinations
-----------------------

```javascript
//Set the message
var message = [{from: "WineShop", to : ["41793026727", "41793026834"], text : "Hey Mike, delicious Istrian Malvazija is finally here. Feel free to visit us and try it for free!"}];

//Send an SMS
client.SMS.send(message,function(err, response){
   console.log(response);
});

```

Bulk messaging example
-----------------------

```javascript
//Set the message
var messages = [
    {from: "WineShop", to : "41793026727", text : "Hi Jenny, we have new French Merlot on our shelves. Drop by our store for a free degustation!"},
    {from: "WineShop", to : "41793026834", text : "Hey Mike, delicious Istrian Malvazija is finally here. Feel free to visit us and try it for free!"}
    ];

//Send an SMS
client.SMS.sendBulk(messages,function(err, response){
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