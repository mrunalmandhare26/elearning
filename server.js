var express=require('express');
var app=express();
var path=require("path");
var fs=require("fs");

//server confiuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/' , function(req,res)  {
     res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/hello' , function(req,res) {
    console.log("Calling rest API");
    var person= {FirstName : 'Shraddha' , LastName : 'Mandhare', age : 25};
    res.send(person);
});

var server=app.listen(8081 , function() {
     var host=server.address().address
     var post=server.address().port

     console.log("Example app listening at 8081");
});
