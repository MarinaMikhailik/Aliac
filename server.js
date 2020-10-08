const http = require('http');
const express = require('express');
const app = express();

const port = process.env.PORT || 3032;

app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Aliac app is listening at port =${port}`);
})


/*
const server = http.createServer(function(request, response){
    console.log(request.method, request.url);
  /* response.end('./index.html')
    response.sendfile('index.html');
});

console.log('port = ', process.env.PORT );
server.listen(process.env.PORT || 3032);
console.log("Server is started!");*/