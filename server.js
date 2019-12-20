const http = require('http');
const app = require('express')();
const port = process.env.PORT || 3000;
const server = http.createServer();
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.emit("welcome", "Hello i'm a socket.io server");
});

server.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
    
});