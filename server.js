var app = require('express').createServer();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000);
/*
var app = require('express').createServer();

app.configure(function() {
    server.use('/', express.static(__dirname+'/'));
});

app.get('*', function(request,response,next){
	response.sendfile(__dirname+'/index.html');
});
app.listen(3000);*/

