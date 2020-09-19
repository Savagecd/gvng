module.exports = async(client, message, args) => { 
  const Discord = require('discord.js');
    let channel = message.mentions.channels.first() || message.channel;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`No tienes los permisos suficientes`)

   // You will need the added async to your event message
    await channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true,
        ADD_REACTIONS: true
    });

      message.channel.send
    const embed = new Discord.RichEmbed() 
    .setDescription('🔷 Listo  **  '+ message.author.username + ' **   Se han devuelto los permisos para enviar mensaje de este canal 🔷')
    .setColor('RANDOM')
    .setTimestamp()
      message.channel.send(embed)     
 
}