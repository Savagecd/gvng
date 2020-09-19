const Discord = require('discord.js');
module.exports = (client, message, args) => { 

message.channel.send('**El Afortunado es:** **'+ message.guild.members.random().user+'**');
}