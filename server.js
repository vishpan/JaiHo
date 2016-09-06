var express = require('express');
var app  = express();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/main.html');
});

app.get('/test.css',function(req,res){
    res.sendFile(__dirname + '/test.css');
});

app.get('/mainGame.js',function(req,res){
    res.sendFile(__dirname + '/mainGame.js');
});

app.get('/jquery-3.0.0.min.js',function(req,res){
    res.sendFile(__dirname + '/jquery-3.0.0.min.js');
});

app.get()


app.listen(8000,function(){
    console.log("server is listening at",8000);
});