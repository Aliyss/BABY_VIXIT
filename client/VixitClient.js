const EventEmitter = require('events'); // native
const io = require('socket.io-client');

class VixitClient extends EventEmitter {

    constructor(token) {
        super();

        this.token = token;
        this.socket = null;
    }

    login() {

        this.socket = io.connect('http://localhost:3000', {
            query: {
                token: this.token
            },
            reconnect: true // mind launching 2nd terminal ?
        });

        this.socket.on('connect', ())

        this.socket.on('connect_error', (err) => {
            console.error(err);
        });

        this.socket.on('command', (data) => {

            let cmd = data.command.split('_')[1];

            this.emit('commandReceived', {
                command: cmd,
                arguments: data.arguments,
                enhancedArguments: data.enhanced

            });

        });
    }

}

module.exports = VixitClient;