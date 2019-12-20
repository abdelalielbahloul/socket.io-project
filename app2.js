const ioc = require('socket.io-client');

const socket = ioc.connect("http://localhost:3000"); //connect the client socket to the socket server emited

socket.on("welcome", (data) => {
    console.log(`Receivied: `, data);
    
})

