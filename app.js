var http = require('http');
var router = require('./router');

var server = http.createServer(function(request, response) {
    router.home(request, response);
    //TODO NOT IMPLEMENTED router.result(request, response);
    router.result(request, response);
});

server.listen(8000);

//TODO Write HTML for all form pieces