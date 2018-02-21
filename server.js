var express = require('express')
var exphbs  = require('express-handlebars');
var override = require('method-override')
var bodyparser = require('body-parser')
var burgerRoutes = require("./controllers/burger_controller")

var app = express();
var PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(burgerRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});