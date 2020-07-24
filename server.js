const http = require('http');

const server = http.createServer(function(request, response){
    console.log(request.method, request.url);
    response.end("Hello world!")
});
console.log('port = ', process.env.port );
server.listen(process.env.port || 3032);
console.log("Servre is started!");