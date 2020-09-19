const Discord = require('discord.js')
module.exports = async(client, message, args, color) => { 

 let estadouser = {


   "online":"🟢", 
   "idle":"🟡",
   "dnd":"🔴",
   "invisible":"⚪"
 } 

 const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor('Miembros en el servidor', client.user.avatarURL)
 .setFooter("Solicitado por "+message.author.username+"", message.author.avatarURL)
 .setTimestamp()
 .addField('👥 Miembros', "**"+message.guild.memberCount+"** **Miembros en Total**", true)
 .addField("Estados de miembros", "**"+message.guild.members.filter(o => o.presence.status === 'online').size+ "** Online 🟢\n   **"+message.guild.members.filter(i => i.presence.status === 'idle').size+"** Members 🟡 \n**"+message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size+"** No molestar 🔴\n**"+message.guild.members.filter(o => o.presence.status === 'offline').size+"** Invisible ⚪ \n")   


 

 message.channel.send(embed);
}