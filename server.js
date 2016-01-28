var express = require('express');

var app = express();

app.get(['/', '/authentication', '/personal', '/sending'] , function(req, res){
	res.sendFile(__dirname + '/src/index.html');
});

// Support static pages
app.use(express.static(__dirname + '/src'));

app.listen(4000);
