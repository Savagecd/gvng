module.exports = async(client, message, args) => { 
  const Discord = require('discord.js');

let channel = message.mentions.channels.first() || message.channel;

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`No tienes los permisos suficientes`)

   // You will need the added async to your event message
    await channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
    });

    message.channel.send
    const embed = new Discord.RichEmbed() 
    .setDescription('🔶 Listo  **  '+ message.author.username + ' **  Se han removido los permisos para enviar mensajes de este canal 🔶')
    .setColor('RANDOM')
      message.channel.send(embed)     
 
    }