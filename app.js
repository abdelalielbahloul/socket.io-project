const ioc = require('socket.io-client');

// const socket = ioc.connect("http://localhost:3000"); //connect the client socket to the socket server emited

// socket.on("welcome", (data) => {
//     console.log(`Receivied: `, data);
    
// })

const products = ioc.connect("http://localhost:3000/products"); //connect namespace product emited

products.on("product", (data) => {
    console.log(`Receivied: `, data);
    
});

products.emit('joinRoom', 'Room1')
        .on('error', err => {
            console.log(err);
            
        })
        .on('success', data => {
            console.log(data);
            
        });
