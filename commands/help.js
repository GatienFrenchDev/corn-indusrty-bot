const Discord = require("discord.js")

module.exports = {
    name: 'help',
    description: 'donne toutes les commandes',
    async execute(message, args) {
        const embedhelp = new Discord.MessageEmbed()
        .setColor('ffee05')
        .setTitle("All Bot Corn Industry's commands")
        .addFields(
            { name: '>clear [_number of messages_]', value: 'delete a given number of messages (requires permission to manage messages)'},
            { name: '>kick [_mention of the person_]', value: "kick the person of your choice from the server (requires permission to kick members)"},
            { name: '>p ou >play [_nom of the song_]', value: 'to play music from Youtube in a vocal channel'},
            { name: '>p clear', value: "clear the bot queue"},
            { name: '>p skip', value: "go to the next music in the queue"},
            { name: '>p stop', value: 'disconnect the bot from the vocal channel'},
            { name: '>pfp [_mention of the person_]', value: "get the profil picture of a member"},
            { name: '>ping', value: 'check the connectivity of the bot'},
            { name: '>p stop', value: 'disconnect the bot from the voice channel'},
            { name: '>slowmode [_temps en secondes_]', value: "change the channel's slow mode value"},
            { name: '>uptime', value: 'returns how long the bot has been connected'},
        )
        message.channel.send(embedhelp);
    }
}
