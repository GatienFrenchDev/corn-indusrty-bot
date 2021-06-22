const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kick un utilisateur du serveur !',
    execute(message, args) {
        const sender = message.author.id;
        // if(!message.member.hasPermission('KICK_MEMBERS')){
        //     const embed = new Discord.MessageEmbed()
        //     .setColor('ff3333')
        //     .setTitle('❌ Kick')
        //     .setDescription(`<@${sender}> tu n'as pas les permissions pour utiliser cette commande !`)
        //     message.channel.send(embed);
        //     return
        // }
        if (!args[0] || (!message.mentions.members.first())){
            const embed = new Discord.MessageEmbed()
            .setColor('ff3333')
            .setTitle('❌ Kick')
            .setDescription(`<@${sender}> you have to identify the person to kick !`)
            message.channel.send(embed);
            return
        }
        else{
            message.mentions.members.first().kick();
            const embed = new Discord.MessageEmbed()
            .setColor('ff3333')
            .setTitle('❌ Kick')
            .setDescription(`${message.mentions.members.first()} has been ** kicked ** from the server at the request of <@${sender}>`);
            message.channel.send(embed);
            return
        }
    }
}