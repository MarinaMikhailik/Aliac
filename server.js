const http = require('http');

const server = http.createServer(function(request, response){
    console.log(request.method, request.url);
    response.end("Hello world!")
});
server.listen(3032);
console.log("Servre is started!");