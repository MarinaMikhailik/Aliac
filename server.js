const http = require('http');

const server = http.createServer(function(request, response){
    console.log(request.method, request.url);
    response.end("Hello world!")
});
console.log('port = ', process.env.PORT );
server.listen(process.env.PORT || 3032);
console.log("Servre is started!");