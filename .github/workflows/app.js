var express = require('express')
var app = express();
var fs = require("fs");

app.get('/getData/root/:id',(req,res)=>{
    fs.readFile(__dirname  + "/" + "data.json" , "utf8",function(err,data){
        var datas = JSON.parse(data);
            res.end(JSON.stringify(datas[0].root[req.params.id]));
    });
});

app.get('/getData/linear/:id',(req,res)=>{
    fs.readFile(__dirname  + "/" + "data.json" , "utf8",function(err,data){
        var datas = JSON.parse(data);
            res.end(JSON.stringify(datas[1].linear[req.params.id]));
    });
});

app.get('/getData/',(req,res)=>{
    fs.readFile(__dirname  + "/" + "data.json" , "utf8",function(err,data){
        res.end(data);
    });
});

var server =app.listen(5001 , function() {
    var host = server.address().address
    var port = server.address().port 
    console.log("App Runing")
})
