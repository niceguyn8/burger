var express = require('express');
var bodyParser = require('body-parser');
var methodOverrride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended:false
}))

app.use(methodOverrride('_method'));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = 3000;
// var port = process.env.PORT
app.listen(port);
