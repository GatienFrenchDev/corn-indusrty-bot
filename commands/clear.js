const Discord = require("discord.js")


const { ReactionCollector } = require("discord.js")

module.exports = {
    name: 'clear',
    description: 'clear le chat',
    async execute(message, args){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply ("You do not have the permissions to use this command!")
        if (!args[0]) return message.reply('You must enter a number of messages to delete!');
        if (isNaN(args[0])) return message.reply('Enter a number between 1 and 100');
        if (args[0] > 100) return message.reply('You cannot delete more than 100 messages!');
        if (args[0] < 2) return message.reply ('You cannot delete a single message!');

        await message.channel.messages.fetch({limit : args[0]}).then(messages => {
            message.channel.bulkDelete(messages, true)
            const embedhelp = new Discord.MessageEmbed()
            .setColor('03fc0b')
            .setTitle('Clear Chat')
            .setDescription(`I deleted **${args[0]}** messages at the request of <@${message.author.id}> successfully ✅`)
            message.channel.send(embedhelp);
        })
     }
}