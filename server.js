var express = require('express');
var cors = require('cors');


var app = express();
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('port', (process.env.PORT || 8089));



app.use('/src', express.static(__dirname + '/src'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/data', express.static(__dirname + '/data'));
// app.use(express.staticProvider(__dirname + '/public'));









app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})



app.listen(app.get("port"), function () {
  console.log('Example app listening on port '+app.get("port")+'!')
})