module.exports = (client, message, args) => { 
    const Discord = require('discord.js');
    let tienepermiso = message.guild.member(message.author).permissions.has('MANAGE_MESSAGES')
    let mencionado = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
    let rolemute = message.guild.roles.find(m => m.name == "Silenciado")
    if(!tienepermiso) return message.channel.send('No tienes permisos para usar este comando')
    if(!mencionado && !args[0]) return message.reply('No ha mencionando a ningún miembro.');
  if(!mencionado && args[0]) 
    {
    if(isNaN(args[0])) return message.reply('La ID no es válida.')
    let user = message.guild.members.get(args[0])
    message.guild.member(user).removeRole(rolemute)
    message.channel.send(new Discord.RichEmbed()
                         .setDescription(`**${user.user.username}**, **fue desmuteado del servidor**`)
                         .setColor('RANDOM')
                        .setTimestamp());
    }
  if(mencionado)
    {
      message.guild.member(message.mentions.users.first()).removeRole(rolemute)
      message.channel.send(new Discord.RichEmbed()
                           .setDescription(`**${mencionado.username}**, **fue desmuteado del servidor**`)
                           .setColor('RANDOM')
                          .setTimestamp())
    }
  
}
