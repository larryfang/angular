var express = require('express');
var cors = require('cors');
var http = require('http');
var request = require("request")
var app = express();


app.set('port', (process.env.PORT || 5000));

app.options('*', cors());
app.use(cors());

// Requests other than seismic data requests are serviced (statically) by the web app (from folder www)


var url = 'http://www.seismi.org/api/eqs'
var responseData = '';
request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        responseData = body
    }
})

// all requests for sesimic data is routed through the nodejs application.
app.get('/', function(request, response) {
    // console.log('response is here', responseData)
    response.contentType('application/json')
    response.send(JSON.stringify(responseData));

});
var server = http.createServer(app);
server.listen(app.get('port'), 'localhost', function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
