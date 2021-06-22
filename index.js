const Discord = require('discord.js');
const { parse } = require('dotenv');

require('dotenv').config();

const client = new Discord.Client();

const prefix = ">";

const fs = require('fs');

const welcome = require('./welcome')


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Connecté en tant que : ' + client.user.tag);
    client.user.setPresence({ activity: {name : '[>help]', type: 'PLAYING'}, status: 'online'})
    welcome(client);
})


client.on('message', message => {
    if (message.content.startsWith(prefix) && (!message.author.bot)) {
        var msg = message
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === 'ping') {
            let ping = Date.now() - message.createdTimestamp;
            message.channel.send(":ping_pong: `PONG ! (" + ping + "ms)`")
        }
        else if (command === 'slowmode') {
            client.commands.get('slowmode').execute(message, args);
        }
        else if (command === 'p' || command === 'play') {
            client.commands.get('p').execute(client, message, args);
        }
        else if (command === 'uptime') {
            client.commands.get('uptime').execute(message, args, client);
        }
        else if (command === 'clear' || command === 'purge') {
            client.commands.get('clear').execute(message, args);
        }
        else if (command === 'pfp') {
            client.commands.get('pfp').execute(message, args);
        }
        else if (command === 'help') {
            client.commands.get('help').execute(message, args);
        }
        else if (command === 'kick') {
            client.commands.get('kick').execute(message, args);
        }
        if (command === 'pong') {
            let ping = Date.now() - message.createdTimestamp;
            message.channel.send(":ping_pong: `PING ! (" + ping + "ms)`")
        }
    }else{
        return;
    }
    
})

























client.login(process.env.TOKEN);
