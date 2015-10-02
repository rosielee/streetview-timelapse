var express         = require('express');
var home            = require('./routes/home');
var mustacheExpress = require('mustache-express');
// var connection      = require('./model/database');

var app = express();

// ========================================
// static - CSS, JS, images
// ========================================

app.use(express.static('public'));

// ========================================
// routes config
// ========================================

app.engine('mst', mustacheExpress());

app.set('view engine', 'mst');
app.set('views', './views');

app.use('/', home);

// ========================================
// start server
// ========================================

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
