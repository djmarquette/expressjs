var express = require('express');
var company = require('company');
var app = express();

const request = require('request');

const options = {  
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});
// GET method route
app.get('/names', function (req, res) {
  request(options, function(err, output, body) {  
    var json = {"first": "Dan", "last": "Marquette"};
    console.log(json); // Logging the output within the request function
    res.status(200).json(json) //then returning the response.. The request.json is empty over here  
  })
});

// GET method route
app.get('/company', function (req, res) {
  request(options, function(err, output, body) { 
    var json = getCompany(); 
    console.log(json); // Logging the output within the request function
    res.status(200).json(json) //then returning the response.. The request.json is empty over here  
  })
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

function getCompany(){
  var company = new company("Marquette, Inc");
  return company.json;
  //return {"name": "Marquette, Inc.", "address": "123 Main Street"};
}