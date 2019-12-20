const http = require('http');
const app = require('express')();
const port = process.env.PORT || 3000;
const server = http.createServer();
const io = require('socket.io')(server);
var nbr = 0;
// io.on('connection', (socket) => {
//     socket.emit("welcome", "Hello i'm a socket.io server");
//     nbr++;
//     console.log(`${nbr} client are connected`);
    
// });


const productRoom = ["Room1", "Room2"];
io
    .of('/products') //add a namespace named products 
    .on('connection', (socket) => {
        socket.emit("product", "Hello i'm the namespace product");
        nbr++;
        console.log(`${nbr} client are connected`);

        socket.on('joinRoom', room => {
            if (productRoom.includes(room)) {
                socket.join(room);
                return socket.emit("success", "you are join the room"); 
            } else {
                return socket.emit('error', { msg: "404-not found! The room are u loking for is not exist" });
            }
        });
        
});

server.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
    
});