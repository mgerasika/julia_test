var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.set('port', process.env.PORT || 9080);
app.listen(app.get('port'), function () {
    console.log('Example app listening on port 9080!');
});