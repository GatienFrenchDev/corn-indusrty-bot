const Discord = require('discord.js');

module.exports = (client) => {
    
    const channelid = '856934071321362482' //channel de bienvenue nainventure

    client.on('guildMemberAdd', (member) => {

        member.roles.add('856947683155247145') //role worker

        const embed = new Discord.MessageEmbed()
                .setColor('ffee05')
                .setTitle('👋 A new worker appears')
                .setDescription(`Welcome to you, <@${member.id}> on the **Corn Industry** server ! \n \n Come talk and work with us in the channel <#856931387537489950> :)`)
                const channel = member.guild.channels.cache.get(channelid)
                channel.send(embed);
    })
}