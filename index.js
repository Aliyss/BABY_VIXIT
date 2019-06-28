const VixitClient = require('./client/VixitClient.js');
const Discord = require('discord.js');

const vixit = new VixitClient('18b863f0e214bcd79baca9e65eb842c536f2f3cd3283ad3570fdb977f6071eb1');
const client = new Discord.Client();

vixit.on('commandReceived', (command) => {

     let channel = client.channels.get(command.channel);
     let user = client.users.get(command.user);

     if (command.command == 'hackweek') {
          channel.send(`<@${user.id}>, I can't give you a ${command.arguments[0]} Hack Week shirt. Take this awesome unreal ${command.arguments[0]} heart instead -> :${command.arguments[0]}_heart: ^^`);
     }

});

client.on('ready', () => {
     client.user.setActivity('XgT4uJU', { type: 'WATCHING' });
});

client.login('NTk0MjkwMjE1NjgyODM0NDM3.XRaR9g.1stwbcy5rUwQA-YUZwhfCR_WgWM')
vixit.login();