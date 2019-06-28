const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000', {
     query: {
         token: 'e8f8df26918d21de113a00251250ebc6e71404d1bf520fdff24e9cae047b2c68'
     },
     reconnect: true
});

console.log("hello");

socket.on('connect', (socket) => {
    console.log('Connected!');
 });

socket.on('command', (data) => {
     console.log(data);
});

socket.on('');