 module.exports = async (client, message, args) => {
  const Discord = require('discord.js');

let mid = args.join(' ');
  if (!message.member.hasPermission(["BAN_MEMBERS"], false, true, true)) return message.channel.send(
  new Discord.RichEmbed()
  .setDescription('No tienes permiso para ejecutar este comandos')
   .setColor('RANDOM'));  
    client.fetchUser(mid).then(id => {
      message.guild.ban(id).catch(err => {
        message.channel.send(
          new Discord.Rich.Embed()
          .setDescription("Error en la id del usuario"+id) 
          .setColor('RANDOM'))
        console.log(err)
      })
      message.channel.send(`**Listo, he baneado a ${id}.**`)
      
      
    }).catch(() => {
     message.channel.send(
       new Discord.RichEmbed()
                          .setDescription('Por favor ingresa una ID para que pueda banearla')
                          .setColor('RANDOM'))
    })
    }