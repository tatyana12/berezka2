const request = require('request');
const argv = require('yargs').argv;


let apiKey = '2851f85faaa266b6d399a7fcd8e5f8ad';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
var message="";


request(url, function (err, response, body) {
    if(err){
       console.log('error:', error);
    } else {
        var weather = JSON.parse(body)
        message = `It's ${weather.main.temp} Fahrenheit in ${weather.name} and maximum tempreture is ${weather.main.temp_max}!`;
        console.log(message);
    }
});


const http =require('http'), express = require('express');
var app = express();

app.get('/', function(req, res){
    res.end(message);
});

http.createServer(app).listen(3000);
