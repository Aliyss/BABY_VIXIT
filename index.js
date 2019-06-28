const VixitClient = require('./client/VixitClient.js');

const client = new VixitClient('e8f8df26918d21de113a00251250ebc6e71404d1bf520fdff24e9cae047b2c68');

client.on('commandReceived', (command) => {
     console.log(command);
});

client.login();