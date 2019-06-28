const EventEmitter = require('events');
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
            reconnect: true
        });

        this.socket.on('connect', () => {
            console.log('Connected!');
        });

        this.socket.on('connect_error', (err) => {
            console.error(err);
        });

        this.socket.on('command', (data) => {
            console.log(data);
            this.emit('commandReceived', {
                command: data.command,
                arguments: data.arguments,
                enhancedArguments: data.enhanced,
                guild: data.guild,
                channel: data.channel,
                user: data.user
            });

        });
    }

}

module.exports = VixitClient;